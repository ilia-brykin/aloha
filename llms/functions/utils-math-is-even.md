# isEven

Determines if a given number is even.

This function first checks if the provided value is an integer. It returns **false** for non-integer values to ensure accurate evenness check. For integer values, it checks if the number is even.

## Import as Function

```js
import { isEven } from "aloha-vue";
```

## Arguments

```js
isEven(value)
```

- **value** (Number): The number to check if it is even

## Basic usage

```js
isEven(2);
// true
isEven(0);
// true
isEven(246);
// true

isEven(-2);
// true

isEven(1);
// false
isEven(3);
// false
isEven(353);
// false

isEven(-1);
// false

isEven(2.5);
// false

isEven("Aloha");
// false
isEven(null);
// false
isEven(undefined);
// false
```
