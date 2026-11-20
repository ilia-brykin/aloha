# filterCurrency

The function **filterCurrency** is a specialized extension of the [**filterFloat**](filter-float.md) function and serves to format numeric values as currency. It accepts a numeric value and returns a string that represents the value with the specified currency, number of decimal places, a suffix, and optional digit grouping (thousands separator). If the numeric value is not specified (null or undefined), an empty string is returned. This function is designed to be extended for many currencies.

## Import as Function

```js
import { filterCurrency } from "aloha-vue";
```

## Import as composition API

```js
import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      filterCurrency,
    } = AFiltersAPI();
  },
};
```

## Arguments

```js
filterCurrency(value, { [suffix="€"], [digits=2], [digitGrouping=true] })
```

- **value** (Number | String): The numeric value to be formatted as currency
- **[suffix="€"]** (String): The suffix added to the formatted string to denote the currency
- **[digits=2]** (Number): The number of decimal places in the formatted string
- **[digitGrouping=true]** (Boolean): Indicates whether digit grouping is enabled to insert thousands separators in the formatted string

## Basic usage

```js
filterCurrency(123456);
// 123.456,00 €

filterCurrency("1000000.2345");
// 1.000.000,23 €

filterCurrency("aloha");
// aloha

filterCurrency(undefined);
//
```

## suffix

```js
filterCurrency(2000, { suffix: "€" });
// 2.000,00 €

filterCurrency("25.5", { suffix: "%" });
// 25,50 %
```

## digits

```js
filterCurrency(2000, { digits: 0 });
// 2.000 €

filterCurrency("25.53451", { digits: 4 });
// 25,5345 €
```

## digitGrouping

```js
filterCurrency(1000222.55, { digitGrouping: false });
// 1000222,55 €

filterCurrency(1000222.55, { digitGrouping: true });
// 1.000.222,55 €
```
