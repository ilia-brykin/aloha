# isArrayOfStrings

Checks if the given input is an array of strings.

## Import as Function

```js
import { isArrayOfStrings } from "aloha-vue";
```

## Arguments

```js
isArrayOfStrings(value)
```

- **value** (Array): The array to be checked

## Basic usage

```js
isArrayOfStrings(["hello", "Aloha"]);
// true

isArrayOfStrings("hello Aloha");
// false

isArrayOfStrings(["Aloha", 1]);
// false
isArrayOfStrings(["Aloha", false]);
// false
isArrayOfStrings(["Aloha", undefined]);
// false
isArrayOfStrings(["Aloha", null]);
// false

isArrayOfStrings([]);
// false
isArrayOfStrings("Aloha");
// false
isArrayOfStrings(1);
// false
isArrayOfStrings(undefined);
// false
isArrayOfStrings(null);
// false
isArrayOfStrings({});
// false
```
