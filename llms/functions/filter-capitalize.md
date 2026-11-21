# filterCapitalize

Converts the first character of string to upper case and the remaining to lower case.

This function uses lodash's **capitalize** method to convert the provided value. It is designed to handle input strings safely and consistently.

## Import as Function

```js
import { filterCapitalize } from "aloha-vue";
```

## Import as composition API

```js
import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      filterCapitalize,
    } = AFiltersAPI();
  },
};
```

## Arguments

```js
filterCapitalize(value)
```

- **value** (String): The string to be converted to capitalize.

## Basic usage

```js
filterCapitalize("foobar");
// Foobar

filterCapitalize("FOOBAR");
// Foobar

filterCapitalize("fOoBaR");
// Foobar
```
