# filterKeyValue

The function **filterKeyValue** creates a formatted string from the key-value pairs of a JavaScript object. It uses the reduce function to iterate through the pairs and convert them into a readable format.

## Import as Function

```js
import { filterKeyValue } from "aloha-vue";
```

## Import as composition API

```js
import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      filterKeyValue,
    } = AFiltersAPI();
  },
};
```

## Arguments

```js
filterKeyValue(value)
```

- **value** (Object): The JavaScript object whose key-value pairs are to be converted into a formatted string

## Basic usage

```js
filterKeyValue({ x: "aloha", y: 2 });
// x: aloha, y: 2
```
