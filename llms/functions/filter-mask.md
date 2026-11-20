# filterMask

Masks a given value, displaying only the last few characters.

## Import as Function

```js
import { filterMask } from "aloha-vue";
```

## Import as composition API

```js
import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      filterMask,
    } = AFiltersAPI();
  },
};
```

## Arguments

```js
filterMask(value, { [chars=4], [mask="*"] })
```

- **value** (Any): The value to be masked. It will be converted to a string.
- **[chars=4]** (Number): The number of characters to show unmasked at the end of the string.
- **[mask="*"]** (String): The character to use for masking.

## Basic usage

```js
filterMask("1234567812345678");
// ************5678

filterMask("9876543210", { chars: 3 });
// *******210

filterMask("secretData", { chars: 3, mask: "#" });
// #######ata

filterMask("abc", { chars: 4 });
// abc

filterMask(null);
// 

filterMask(undefined);
// 

filterMask("");
// 

filterMask("12345678", { chars: 0 });
// ********

filterMask("12345678", { chars: 10 });
// 12345678
```
