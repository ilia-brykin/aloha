# isOdd

Determines if a given number is odd.

This function first checks if the provided value is an integer. It returns **false** for non-integer values to ensure accurate oddness check. For integer values, it checks if the number is odd.

## Import as Function

```js
import { isOdd } from "aloha-vue";
```

## Arguments

```js
isOdd(value)
```

- **value** (Number): The number to check if it is odd

## Basic usage

```js
isOdd(1);
// true
isOdd(3);
// true
isOdd(245);
// true

isOdd(-1);
// true

isOdd(2);
// false
isOdd(0);
// false
isOdd(352);
// false

isOdd(-2);
// false

isOdd(2.5);
// false

isOdd("Aloha");
// false
isOdd(null);
// false
isOdd(undefined);
// false
```
