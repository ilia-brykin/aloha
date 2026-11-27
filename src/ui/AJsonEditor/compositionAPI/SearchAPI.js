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
 * getReplacements: the new values and keys for "Replace" (strings only, with $1 of a regular expression).
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
      const IN_KEY = IN_KEYS && !Number.isInteger(KEY) && test(KEY);
      const IN_VALUE = IN_VALUES && IS_LEAF && test(value === null ? "null" : value);
      if (IN_KEY || IN_VALUE) {
        RESULT.push({ pointer: toPointer(tokens), tokens, inKey: IN_KEY, inValue: IN_VALUE, value });
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

  // a new search starts at the first match; after a replacement the place stays
  let lastSearch = "";
  watch(matches, () => {
    const SEARCH = JSON.stringify([query.value, options.value]);
    const IS_NEW = SEARCH !== lastSearch;
    lastSearch = SEARCH;
    const COUNT = matches.value.length;
    currentIndex.value = !COUNT ? -1 : (IS_NEW ? 0 : Math.min(Math.max(currentIndex.value, 0), COUNT - 1));
  });

  // the text with the replacement; without regex "$" stays as it is
  const replaceText = (text, replacement) => {
    matcher.value.lastIndex = 0;
    return options.value.regex ? text.replace(matcher.value, replacement) : text.replace(matcher.value, () => replacement);
  };

  /**
   * The changes for "Replace" of the current match or of all matches: [{ tokens, value?, newKey? }].
   * Only strings are replaced (no numbers, booleans, null), so the types stay.
   */
  const getReplacements = (replacement, { all = false } = {}) => {
    if (!matcher.value) {
      return [];
    }
    const LIST = all ? matches.value : [matches.value[currentIndex.value]].filter(Boolean);
    return LIST.map(match => {
      const ITEM = { tokens: match.tokens };
      if (match.inValue && typeof match.value === "string") {
        const VALUE = replaceText(match.value, replacement);
        if (VALUE !== match.value) {
          ITEM.value = VALUE;
        }
      }
      if (match.inKey) {
        const KEY = match.tokens[match.tokens.length - 1];
        const NEW_KEY = replaceText(KEY, replacement);
        if (NEW_KEY !== KEY) {
          ITEM.newKey = NEW_KEY;
        }
      }
      return ITEM;
    }).filter(item => "value" in item || "newKey" in item);
  };

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
    getReplacements,
    isRegexInvalid,
    matches,
    moveMatch: move,
    query,
    searchOptions: options,
  };
}
