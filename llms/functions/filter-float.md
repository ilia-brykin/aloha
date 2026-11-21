# filterFloat

The function **filterFloat** formats numeric values according to the specified parameters. It takes a numeric value and returns it as a string with the specified number of decimal places, a suffix, and optional digit grouping (thousands separator). If the numeric value is not specified (**null** or **undefined**), an empty string is returned.

## Import as Function

```js
import { filterFloat } from "aloha-vue";
```

## Import as composition API

```js
import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      filterFloat,
    } = AFiltersAPI();
  },
};
```

## Arguments

```js
filterFloat(value, { [suffix=""], [digits=2], [digitGrouping=true] })
```

- **value** (Number | String): The numeric value to be formatted
- **[suffix=""]** (String): A suffix to be added after the numeric value
- **[digits=2]** (Number): The number of decimal places after the comma
- **[digitGrouping=true]** (Boolean): A flag indicating whether digit grouping should be applied (thousands separator)

## Basic usage

```js
filterFloat(123456);
// 123.456,00

filterFloat("1000000.2345");
// 1.000.000,23

filterFloat("aloha");
// aloha

filterFloat(undefined);
//
```

## suffix

```js
filterFloat(2000, { suffix: "€" });
// 2.000,00 €

filterFloat("25.5", { suffix: "%" });
// 25,50 %
```

## digits

```js
filterFloat(2000, { digits: 0 });
// 2.000

filterFloat("25.53451", { digits: 4 });
// 25,5345
```

## digitGrouping

```js
filterFloat(1000222.55, { digitGrouping: false });
// 1000222,55

filterFloat(1000222.55, { digitGrouping: true });
// 1.000.222,55
```
