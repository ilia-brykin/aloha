# filterLimitTo

The function **filterLimitTo** is used to limit an input string to a specific maximum length and optionally apply a special logic for ellipses at the end of the string.

## Import as Function

```js
import { filterLimitTo } from "aloha-vue";
```

## Import as composition API

```js
import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      filterLimitTo,
    } = AFiltersAPI();
  },
};
```

## Arguments

```js
filterLimitTo(text, { [limit=30], [maxThreeDots=true] })
```

- **text** (String): The input string to be trimmed
- **[limit=30]** (Number): The maximum length of the returned string
- **[maxThreeDots=true]** (Boolean): Indicates whether to display at most three dots at the end of the string

## limit

```js
const TEXT = "Lorem ipsum dolor sit amet consectetur adipisicing elit";

filterList(TEXT);
// Lorem ipsum dolor sit amet con...

filterList(TEXT, { limit: 10 });
// Lorem ipsu...

filterList(TEXT, { limit: 100 });
// Lorem ipsum dolor sit amet consectetur adipisicing elit
```

## maxThreeDots

```js
const TEXT = "Aloha...";

filterList(TEXT, { limit: 7, maxThreeDots: true });
// Aloha...
filterList(TEXT, { limit: 7, maxThreeDots: false });
// Aloha.....

filterList(TEXT, { limit: 6, maxThreeDots: true });
// Aloha...
filterList(TEXT, { limit: 6, maxThreeDots: false });
// Aloha....

filterList(TEXT, { limit: 5, maxThreeDots: true });
// Aloha...
filterList(TEXT, { limit: 5, maxThreeDots: false });
// Aloha...
```
