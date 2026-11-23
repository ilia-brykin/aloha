# filterUpperCase

Converts the input string to uppercase.

This function uses lodash's **toUpper** method to convert the provided value to uppercase. It is designed to handle input strings safely and consistently.

## Import as Function

```js
import { filterUpperCase } from "aloha-vue";
```

## Import as composition API

```js
import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      filterUpperCase,
    } = AFiltersAPI();
  },
};
```

## Arguments

```js
filterUpperCase(value)
```

- **value** (String): The string to be converted to uppercase.

## Basic usage

```js
filterUpperCase("--foo-bar--");
// --FOO-BAR--

filterUpperCase("fooBar");
// FOOBAR

filterUpperCase("__foo_bar__");
// __FOO_BAR__
```
