# filterTitleCase

The function **filterTitleCase** converts the first letter of every word to upper case. The other letters stay as they are, so abbreviations like "NASA" are kept. Use **filterCapitalize** to change only the first letter of the string.

## Import as Function

```js
import { filterTitleCase } from "aloha-vue";
```

## Import as composition API

```js
import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      filterTitleCase,
    } = AFiltersAPI();
  },
};
```

## Arguments

```js
filterTitleCase(value)
```

- **value** (String): The string to convert

## Basic usage

```js
filterTitleCase("max mustermann");
// Max Mustermann

filterTitleCase("jean-luc picard");
// Jean-Luc Picard

filterTitleCase("the NASA report");
// The NASA Report
```
