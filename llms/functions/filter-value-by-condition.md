# filterValueByCondition

The function **filterValueByCondition** returns a result based on the first matching condition. Conditions can be functions or JavaScript expression strings. Results can be static values, functions, or template strings.

String expressions and templates are executed as JavaScript. Use them only with trusted configuration and never with unchecked user input.

## Import as Function

```js
import { filterValueByCondition } from "aloha-vue";
```

## Import as composition API

```js
import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      filterValueByCondition,
    } = AFiltersAPI();
  },
};
```

## Arguments

```js
filterValueByCondition(value, { [conditions=[]], [defaultValue=""], [defaultTemplate] })
```

- **value** (Any): The value that is checked by conditions and can be used in functions, expressions, and templates.
- **[conditions=[]]** (Array): An ordered list of condition objects. The first matching condition defines the returned value.
- **[conditions[].if]** (Function | String): A function or JavaScript expression string that receives the current value and decides whether the condition matches.
- **[conditions[].then]** (Any | Function): A static value or function returned when the condition matches.
- **[conditions[].thenTemplate]** (String): A JavaScript template string used when the condition matches. The current value is available as value.
- **[defaultValue=""]** (Any | Function): A static value or function returned when no condition matches.
- **[defaultTemplate]** (String): A JavaScript template string returned when no condition matches. The current value is available as value.

## Function conditions

```js
const options = {
  conditions: [
    {
      if: value => value > 3,
      then: value => `(${ value * 3 } Aloha)`,
    },
    {
      if: value => value < 2,
      then: "aloha",
    },
  ],
  defaultValue: value => value / 2,
};

filterValueByCondition(4, options);
// (12 Aloha)
filterValueByCondition(1, options);
// aloha
filterValueByCondition(2, options);
// 1
```

## String expressions and templates

```js
const options = {
  conditions: [
    {
      if: "value > 3",
      thenTemplate: "(${ value * 3 } Aloha)",
    },
    {
      if: "value < 2",
      then: "aloha",
    },
  ],
  defaultTemplate: "${ value / 2 }",
};

filterValueByCondition(4, options);
// (12 Aloha)
filterValueByCondition(1, options);
// aloha
filterValueByCondition(2, options);
// 1
```

## Mixed conditions

```js
const options = {
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

filterValueByCondition(0, options);
// zero
filterValueByCondition(4, options);
// (12 Aloha)
filterValueByCondition(1, options);
// small: 1
filterValueByCondition(2, options);
// 1
```
