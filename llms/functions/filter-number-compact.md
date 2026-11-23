# filterNumberCompact

The function **filterNumberCompact** shortens a large number with a unit (thousand, million, billion, trillion), e.g. for counters, badges and dashboards. The number is formatted like **filterFloat**.

## Import as Function

```js
import { filterNumberCompact } from "aloha-vue";
```

## Import as composition API

```js
import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      filterNumberCompact,
    } = AFiltersAPI();
  },
};
```

## Arguments

```js
filterNumberCompact(value, { [digits=1], [minValue=1000], [isTrailingZeros=false] })
```

- **value** (Number | String): The number
- **[digits=1]** (Number): The number of decimal places of a shortened number
- **[minValue=1000]** (Number): Numbers below this value (by amount) are not shortened
- **[isTrailingZeros=false]** (Boolean): Whether **1,0** is shown instead of **1**

## Basic usage

```js
filterNumberCompact(1234567);
// 1,2 M

filterNumberCompact(15300);
// 15,3 K

filterNumberCompact(2500000000);
// 2,5 B

filterNumberCompact(999);
// 999
```

## digits

```js
filterNumberCompact(1234567, { digits: 2 });
// 1,23 M

filterNumberCompact(1234567, { digits: 0 });
// 1 M
```

## minValue

```js
filterNumberCompact(15300, { minValue: 100000 });
// 15.300

filterNumberCompact(153000, { minValue: 100000 });
// 153 K
```

## isTrailingZeros

```js
filterNumberCompact(1000000);
// 1 M

filterNumberCompact(1000000, { isTrailingZeros: true });
// 1,0 M
```

## Translations

| key | en |
| --- | --- |
| `_A_NUMBER_COMPACT_THOUSAND_` | K |
| `_A_NUMBER_COMPACT_MILLION_` | M |
| `_A_NUMBER_COMPACT_BILLION_` | B |
| `_A_NUMBER_COMPACT_TRILLION_` | T |
