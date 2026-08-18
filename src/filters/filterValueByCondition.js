const executeExpression = ({ expression, value }) => {
  try {
    // eslint-disable-next-line no-new-func
    return Function("value", `"use strict"; return (${ expression });`)(value);
  } catch (e) {
    return undefined;
  }
};

const executeTemplate = ({ template, value }) => {
  try {
    // eslint-disable-next-line no-new-func
    return Function("value", `"use strict"; return \`${ template }\`;`)(value);
  } catch (e) {
    return "";
  }
};

const isMatched = ({ condition, value }) => {
  if (typeof condition === "function") {
    return !!condition(value);
  }

  if (typeof condition === "string") {
    return !!executeExpression({
      expression: condition,
      value,
    });
  }

  return false;
};

const resolveValue = ({ template, value, valueResult }) => {
  if (template !== undefined) {
    return executeTemplate({
      template,
      value,
    });
  }

  if (typeof valueResult === "function") {
    return valueResult(value);
  }

  return valueResult;
};

/**
 * Returns a value based on the first matching condition.
 * String conditions and templates are executed as JavaScript and must be used only with trusted configuration.
 *
 * @param {*} value - The value to be checked and used in conditions or templates.
 * @param {Object} [options] - Optional parameters.
 * @param {Array} [options.conditions=[]] - Ordered list of condition objects.
 * @param {Function|string} [options.conditions[].if] - Function or JavaScript expression that decides if condition matches.
 * @param {*} [options.conditions[].then] - Static value or function returned for the matching condition.
 * @param {string} [options.conditions[].thenTemplate] - Template string returned for the matching condition.
 * @param {*} [options.defaultValue=""] - Static value or function returned if no condition matches.
 * @param {string} [options.defaultTemplate] - Template string returned if no condition matches.
 *
 * @returns {*} The resolved value for the first matching condition or the default value.
 */
export default function(value, {
  conditions = [],
  defaultValue = "",
  defaultTemplate,
} = {}) {
  for (const CONDITION of conditions) {
    if (isMatched({
      condition: CONDITION.if,
      value,
    })) {
      return resolveValue({
        template: CONDITION.thenTemplate,
        value,
        valueResult: CONDITION.then,
      });
    }
  }

  return resolveValue({
    template: defaultTemplate,
    value,
    valueResult: defaultValue,
  });
}
