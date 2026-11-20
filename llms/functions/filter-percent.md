# filterPercent

The function **filterPercent** formats a value as a percentage, e.g. "15,30 %". It uses **filterFloat**.

## Import as Function

```js
import { filterPercent } from "aloha-vue";
```

## Import as composition API

```js
import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      filterPercent,
    } = AFiltersAPI();
  },
};
```

## Arguments

```js
filterPercent(value, { [digits=2], [digitGrouping=true], [isFraction=false] })
```

- **value** (Number | String): The value to format
- **[digits=2]** (Number): The number of decimal places
- **[digitGrouping=true]** (Boolean): Whether digit grouping separators are shown
- **[isFraction=false]** (Boolean): Whether the value is a fraction (0.153 → 15,30 %) and not a percentage (15.3 → 15,30 %)

## Basic usage

```js
filterPercent(15.3);
// 15,30 %

filterPercent("99,5");
// 99,50 %

filterPercent(12345.678);
// 12.345,68 %
```

## digits, digitGrouping

```js
filterPercent(15.36, { digits: 1 });
// 15,4 %

filterPercent(12345, { digits: 0, digitGrouping: false });
// 12345 %
```

## isFraction

```js
filterPercent(0.153, { isFraction: true });
// 15,30 %

filterPercent(1, { isFraction: true, digits: 0 });
// 100 %
```
