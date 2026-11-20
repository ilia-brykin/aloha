# filterLowerCase

Converts the input string to lowercase.

This function uses lodash's **toLower** method to convert the provided value to lowercase. It is designed to handle input strings safely and consistently.

## Import as Function

```js
import { filterLowerCase } from "aloha-vue";
```

## Import as composition API

```js
import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      filterLowerCase,
    } = AFiltersAPI();
  },
};
```

## Arguments

```js
filterLowerCase(value)
```

- **value** (String): The string to be converted to lowercase.

## Basic usage

```js
filterLowerCase("--Foo-Bar--");
// --foo-bar--

filterLowerCase("fooBar");
// foobar

filterLowerCase("__FOO_BAR__");
// __foo_bar__
```
