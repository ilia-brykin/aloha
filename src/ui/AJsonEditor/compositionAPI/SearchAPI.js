import {
  computed,
  ref,
  toRef,
  watch,
} from "vue";

import {
  getAncestorPointers,
} from "../utils/flatten";
import {
  toPointer,
  walk,
} from "../utils/jsonPointer";
import {
  escapeRegExp,
  isArray,
  isPlainObject,
} from "lodash-es";

/**
 * Search in keys and / or values, also in collapsed nodes; the matches go in the order of the document.
 * Options: searchIn ("keys" | "values" | "both"), caseSensitive, regex, filter (only matches and their parents).
 */
export default function SearchAPI(props, {
  document = ref(undefined),
}) {
  const searchIn = toRef(props, "searchIn");
  const searchCaseSensitive = toRef(props, "searchCaseSensitive");
  const searchRegex = toRef(props, "searchRegex");
  const searchFilter = toRef(props, "searchFilter");

  const query = ref("");
  const options = ref({
    caseSensitive: searchCaseSensitive.value,
    filter: searchFilter.value,
    regex: searchRegex.value,
    searchIn: searchIn.value,
  });
  const currentIndex = ref(-1);

  const matcher = computed(() => {
    const QUERY = query.value;
    if (!QUERY) {
      return null;
    }
    const FLAGS = options.value.caseSensitive ? "g" : "gi";
    try {
      return new RegExp(options.value.regex ? QUERY : escapeRegExp(QUERY), FLAGS);
    } catch {
      return null;
    }
  });

  // a wrong regular expression is shown at the search field
  const isRegexInvalid = computed(() => !!query.value && options.value.regex && !matcher.value);

  const test = text => {
    if (!matcher.value) {
      return false;
    }
    matcher.value.lastIndex = 0;
    return matcher.value.test(`${ text }`);
  };

  const matches = computed(() => {
    if (!matcher.value || document.value === undefined) {
      return [];
    }
    const RESULT = [];
    const IN_KEYS = options.value.searchIn !== "values";
    const IN_VALUES = options.value.searchIn !== "keys";
    walk(document.value, (value, tokens) => {
      if (!tokens.length) {
        return;
      }
      const KEY = tokens[tokens.length - 1];
      const IS_LEAF = !isArray(value) && !isPlainObject(value);
      if ((IN_KEYS && !Number.isInteger(KEY) && test(KEY)) || (IN_VALUES && IS_LEAF && test(value === null ? "null" : value))) {
        RESULT.push({ pointer: toPointer(tokens), tokens });
      }
    });
    return RESULT;
  });

  // filter: the matches and their parents
  const filterSet = computed(() => {
    if (!options.value.filter || !matcher.value) {
      return null;
    }
    const SET = new Set([""]);
    matches.value.forEach(match => {
      SET.add(match.pointer);
      getAncestorPointers(match.tokens).forEach(pointer => SET.add(pointer));
    });
    return SET;
  });

  watch(matches, () => {
    currentIndex.value = matches.value.length ? 0 : -1;
  });

  // the parts of a text with the marks of the search: [{ text, isMatch }]
  const getHighlightParts = text => {
    const TEXT = `${ text }`;
    if (!matcher.value || !TEXT) {
      return [{ text: TEXT }];
    }
    const PARTS = [];
    let index = 0;
    matcher.value.lastIndex = 0;
    for (const MATCH of TEXT.matchAll(matcher.value)) {
      if (!MATCH[0]) {
        break;
      }
      if (MATCH.index > index) {
        PARTS.push({ text: TEXT.slice(index, MATCH.index) });
      }
      PARTS.push({ text: MATCH[0], isMatch: true });
      index = MATCH.index + MATCH[0].length;
    }
    if (index < TEXT.length) {
      PARTS.push({ text: TEXT.slice(index) });
    }
    return PARTS;
  };

  const move = direction => {
    const COUNT = matches.value.length;
    if (!COUNT) {
      return null;
    }
    currentIndex.value = (currentIndex.value + direction + COUNT) % COUNT;
    return matches.value[currentIndex.value];
  };

  const currentMatch = computed(() => matches.value[currentIndex.value] || null);

  return {
    currentIndex,
    currentMatch,
    filterSet,
    getHighlightParts,
    isRegexInvalid,
    matches,
    moveMatch: move,
    query,
    searchOptions: options,
  };
}
