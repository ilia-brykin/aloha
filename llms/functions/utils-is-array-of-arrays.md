# isArrayOfArrays

Checks if the given input is an array of arrays.

## Import as Function

```js
import { isArrayOfArrays } from "aloha-vue";
```

## Arguments

```js
isArrayOfArrays(value)
```

- **value** (Array): The array to be checked

## Basic usage

```js
isArrayOfArrays([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
// true
isArrayOfArrays([[], [], []]);
// true

isArrayOfArrays([1, 2, 3]);
// false

isArrayOfArrays([]);
// false
isArrayOfArrays("Aloha");
// false
isArrayOfArrays(1);
// false
isArrayOfArrays(undefined);
// false
isArrayOfArrays(null);
// false
isArrayOfArrays({});
// false

isArrayOfArrays([[1, 2, 3], "This is not an array", [7, 8, 9]]);
// false
```
