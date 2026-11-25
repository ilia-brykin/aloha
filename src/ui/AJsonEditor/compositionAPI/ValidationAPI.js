import {
  computed,
  ref,
  shallowRef,
  toRef,
  watch,
} from "vue";

import {
  findVariables,
  getSimilarName,
  getWholeVariable,
} from "../utils/variables";
import {
  getAncestorPointers,
} from "../utils/flatten";
import {
  getExpectedTypes,
  validateRules,
  validateSchema,
} from "../utils/validate";
import {
  toPointer,
  walk,
} from "../utils/jsonPointer";
import {
  isFunction,
  isString,
} from "lodash-es";

// a result of a hook or of a plugin type: string, array of strings / errors, { level, message }
function normalizeErrors(result, pointer) {
  if (!result || result === true) {
    return [];
  }
  return [].concat(result).filter(Boolean).map(item => {
    if (isString(item)) {
      return { pointer, level: "error", message: item };
    }
    return { pointer, level: "error", ...item };
  });
}

const LEVEL_ORDER = { error: 0, warning: 1, info: 2 };

/**
 * The errors of the document: syntax (code), rules, schema, variables, plugin types, hooks validateNode / validateDocument.
 * validateOn: "change" shows them at once, "blur" / "submit" / "none" after validate().
 */
export default function ValidationAPI(props, { emit }, {
  codeError = ref(null),
  document = shallowRef(undefined),
  getHooks = () => [],
  hasVariablesProp = computed(() => false),
  resolveType = () => ({}),
  variablePattern = computed(() => undefined),
  variablesByName = computed(() => new Map()),
}) {
  const allowUnknownVariables = toRef(props, "allowUnknownVariables");
  const maxErrors = toRef(props, "maxErrors");
  const rules = toRef(props, "rules");
  const schema = toRef(props, "schema");
  const validateOn = toRef(props, "validateOn");

  const asyncErrors = shallowRef([]);
  const snapshotErrors = shallowRef([]);

  const isWholeVariable = value => isString(value) && !!getWholeVariable(value, variablePattern.value);

  const errorsLive = computed(() => {
    const ERRORS = [];
    if (codeError.value) {
      ERRORS.push({
        pointer: "",
        level: "error",
        message: "_A_JSON_EDITOR_ERROR_SYNTAX_",
        extra: { line: codeError.value.line, column: codeError.value.column },
        isSyntax: true,
      });
    }
    const DOCUMENT = document.value;
    if (DOCUMENT === undefined) {
      return ERRORS;
    }
    if (rules.value) {
      ERRORS.push(...validateRules(DOCUMENT, rules.value, { skip: isWholeVariable }));
    }
    if (schema.value) {
      ERRORS.push(...validateSchema(DOCUMENT, schema.value, "", { skip: isWholeVariable }));
    }
    const NODE_HOOKS = getHooks("validateNode");
    walk(DOCUMENT, (value, tokens) => {
      const POINTER = toPointer(tokens);
      // the variables in strings: unknown names and the wrong type of a whole variable
      if (isString(value) && hasVariablesProp.value) {
        findVariables(value, variablePattern.value).forEach(({ name }) => {
          const VARIABLE = variablesByName.value.get(name);
          if (!VARIABLE) {
            const SIMILAR = getSimilarName(name, [...variablesByName.value.keys()]);
            ERRORS.push({
              pointer: POINTER,
              level: allowUnknownVariables.value ? "warning" : "error",
              message: SIMILAR ? "_A_JSON_EDITOR_ERROR_UNKNOWN_VARIABLE_SIMILAR_" : "_A_JSON_EDITOR_ERROR_UNKNOWN_VARIABLE_",
              extra: { name, similar: SIMILAR },
            });
          }
        });
        const WHOLE = getWholeVariable(value, variablePattern.value);
        const TYPE = variablesByName.value.get(WHOLE)?.type;
        const EXPECTED = TYPE ? getExpectedTypes({ rules: rules.value, schema: schema.value, tokens }) : [];
        if (EXPECTED.length && !EXPECTED.includes(TYPE)) {
          ERRORS.push({ pointer: POINTER, level: "warning", message: "_A_JSON_EDITOR_WARNING_VARIABLE_TYPE_", extra: { name: WHOLE, type: TYPE, expected: EXPECTED.join(" / ") } });
        }
      }
      const TYPE = resolveType({ value, pointer: POINTER, tokens });
      if (isFunction(TYPE.pluginType?.validate)) {
        ERRORS.push(...normalizeErrors(TYPE.pluginType.validate(value, { pointer: POINTER, tokens }), POINTER));
      }
      NODE_HOOKS.forEach(hook => {
        ERRORS.push(...normalizeErrors(hook({ value, pointer: POINTER, tokens, document: DOCUMENT }), POINTER));
      });
    });
    return ERRORS;
  });

  // validateDocument can be async (e.g. a full JSON Schema with a library or a server)
  const runDocumentHooks = async() => {
    const RESULTS = await Promise.all(getHooks("validateDocument").map(hook => hook({ document: document.value })));
    return RESULTS.flatMap(result => normalizeErrors(result, ""));
  };

  watch(document, async() => {
    if (validateOn.value === "change" && getHooks("validateDocument").length) {
      asyncErrors.value = await runDocumentHooks();
    }
  }, { immediate: true });

  const errors = computed(() => {
    const ALL = validateOn.value === "change" ? [...errorsLive.value, ...asyncErrors.value] : snapshotErrors.value;
    const SORTED = ALL.slice().sort((a, b) => LEVEL_ORDER[a.level] - LEVEL_ORDER[b.level]);
    return maxErrors.value ? SORTED.slice(0, maxErrors.value) : SORTED;
  });

  const errorsByPointer = computed(() => {
    const MAP = new Map();
    errors.value.forEach(item => {
      MAP.set(item.pointer, [...(MAP.get(item.pointer) || []), item]);
    });
    return MAP;
  });

  // collapsed parents show "2 errors inside"
  const errorCountsInside = computed(() => {
    const COUNTS = new Map();
    errors.value.forEach(item => {
      if (item.level !== "error") {
        return;
      }
      const TOKENS = item.pointer ? item.pointer.slice(1).split("/") : [];
      getAncestorPointers(TOKENS).forEach(pointer => {
        COUNTS.set(pointer, (COUNTS.get(pointer) || 0) + 1);
      });
    });
    return COUNTS;
  });

  const isValid = computed(() => !errors.value.some(item => item.level === "error"));

  watch(errors, value => {
    emit("validate", { isValid: isValid.value, errors: value });
  }, { immediate: true });

  // also for validateOn "blur" / "submit" / "none"
  const validate = async() => {
    const ALL = [...errorsLive.value, ...await runDocumentHooks()];
    if (validateOn.value === "change") {
      asyncErrors.value = ALL.filter(item => !errorsLive.value.includes(item));
    } else {
      snapshotErrors.value = ALL;
    }
    const RESULT = { isValid: !ALL.some(item => item.level === "error"), errors: ALL };
    return RESULT;
  };

  return {
    errorCountsInside,
    errors,
    errorsByPointer,
    isValid,
    validate,
  };
}
