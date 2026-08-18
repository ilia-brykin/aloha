import {
  filterValueByCondition,
} from "aloha-vue";

const OPTIONS = {
  conditions: [
    {
      if: value => value === 0,
      then: "zero",
    },
    {
      if: "value > 3",
      thenTemplate: "(${ value * 3 } Aloha)",
    },
    {
      if: value => value < 2,
      then: value => `small: ${ value }`,
    },
  ],
  defaultTemplate: "${ value / 2 }",
};

export default function JsAPI() {
  const codeJs = `const options = {
  conditions: [
    {
      if: value => value === 0,
      then: "zero",
    },
    {
      if: "value > 3",
      thenTemplate: "(\${ value * 3 } Aloha)",
    },
    {
      if: value => value < 2,
      then: value => \`small: \${ value }\`,
    },
  ],
  defaultTemplate: "\${ value / 2 }",
};

filterValueByCondition(0, options);
// ${ filterValueByCondition(0, OPTIONS) }
filterValueByCondition(4, options);
// ${ filterValueByCondition(4, OPTIONS) }
filterValueByCondition(1, options);
// ${ filterValueByCondition(1, OPTIONS) }
filterValueByCondition(2, options);
// ${ filterValueByCondition(2, OPTIONS) }`;

  return {
    codeJs,
  };
}
