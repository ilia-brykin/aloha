# filterDefaultForEmpty

The function **filterDefaultForEmpty** is used to check a value and return a default value if the checked value is considered empty. In this context, a value is considered empty if it is **undefined**, **null**, or an empty string.

## Import as Function

```js
import { filterDefaultForEmpty } from "aloha-vue";
```

## Import as composition API

```js
import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      filterDefaultForEmpty,
    } = AFiltersAPI();
  },
};
```

## Arguments

```js
filterDefaultForEmpty(value, { [emptyValue="-"] })
```

- **value** (Any): The value to be checked
- **[emptyValue="-"]** (String): The default value returned if the checked value is considered empty

## Basic usage

```js
filterDefaultForEmpty(undefined);
// -

filterDefaultForEmpty(null);
// -

filterDefaultForEmpty("");
// -

filterDefaultForEmpty("aloha");
// aloha
```

## emptyValue

```js
filterDefaultForEmpty(undefined, { emptyValue: "---" });
// ---

filterDefaultForEmpty(undefined, { emptyValue: "false" });
// false
```
