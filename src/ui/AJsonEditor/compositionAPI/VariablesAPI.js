import {
  computed,
  ref,
  toRef,
  watch,
} from "vue";

import {
  DEFAULT_VARIABLE_PATTERN,
} from "../utils/variables";
import {
  isArray,
  isFunction,
} from "lodash-es";

/**
 * The variables: an array [{ name, label, type, example, group, description }]
 * or a function ({ query }) => array or Promise (loaded once, filtered in the editor).
 */
export default function VariablesAPI(props) {
  const variables = toRef(props, "variables");
  const variablePatternProp = toRef(props, "variablePattern");

  const variablesList = ref([]);

  const variablePattern = computed(() => ({ ...DEFAULT_VARIABLE_PATTERN, ...(variablePatternProp.value || {}) }));

  watch(variables, async value => {
    if (isArray(value)) {
      variablesList.value = value;
    } else if (isFunction(value)) {
      variablesList.value = (await value({ query: "" })) || [];
    } else {
      variablesList.value = [];
    }
  }, { immediate: true });

  const hasVariables = computed(() => variablesList.value.length > 0);
  const variablesByName = computed(() => new Map(variablesList.value.map(variable => [variable.name, variable])));

  const findVariables = (query = "", translate = text => text) => {
    const QUERY = query.trim().toLowerCase();
    return variablesList.value.filter(variable => {
      return !QUERY ||
        variable.name.toLowerCase().includes(QUERY) ||
        `${ translate(variable.label || "") }`.toLowerCase().includes(QUERY);
    });
  };

  return {
    findVariables,
    hasVariables,
    variablePattern,
    variablesByName,
    variablesList,
  };
}
