# filterPropertyByValue

The function **filterPropertyByValue** allows for mapping values to predefined properties in a mapping object. It checks if the passed value exists as a key in the mapping object. If so, the associated property is returned; otherwise, the default value is used.

## Import as Function

```js
import { filterPropertyByValue } from "aloha-vue";
```

## Import as composition API

```js
import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      filterPropertyByValue,
    } = AFiltersAPI();
  },
};
```

## Arguments

```js
filterPropertyByValue(value, { [mapping={}], [defaultValue=""] })
```

- **value** (Any): The value that should be mapped to a property in the mapping object
- **[mapping={}]** (Object): An object that defines the mapping of values to properties
- **[defaultValue=""]** (String): The default value returned if the passed value is not found in the mapping object

## mapping

```js
filterPropertyByValue("111", { mapping: { aloha: "1", holla: "2" } });
// 
filterPropertyByValue("aloha", { mapping: { aloha: "1", holla: "2" } });
// 1
```

## defaultValue

```js
filterPropertyByValue("111", { mapping: { aloha: "1", holla: "2" }, defaultValue: "not found" });
// not found
filterPropertyByValue("222", { mapping: { aloha: "1", holla: "2" }, defaultValue: "0" });
// 0
```
