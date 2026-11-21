# filterTruncateMiddle

The function **filterTruncateMiddle** shortens a string in the middle and keeps its start and its end, e.g. for IDs, hashes, IBANs or file paths. Use **filterLimitTo** to shorten a text at the end.

## Import as Function

```js
import { filterTruncateMiddle } from "aloha-vue";
```

## Import as composition API

```js
import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      filterTruncateMiddle,
    } = AFiltersAPI();
  },
};
```

## Arguments

```js
filterTruncateMiddle(value, { [start=6], [end=4], [separator="…"] })
```

- **value** (String | Number): The value to shorten
- **[start=6]** (Number): The number of characters kept at the start
- **[end=4]** (Number): The number of characters kept at the end
- **[separator="…"]** (String): The text put in place of the removed characters

## Basic usage

```js
filterTruncateMiddle("3f9a1c7e-42b0-4d1e-9c55-7a1d2e3f4b5c");
// 3f9a1c…4b5c

filterTruncateMiddle("Short");
// Short
```

## start, end

```js
filterTruncateMiddle("DE89370400440532013000", { start: 4, end: 4 });
// DE89…3000

filterTruncateMiddle("3f9a1c7e-42b0-4d1e-9c55", { start: 8, end: 0 });
// 3f9a1c7e…
```

## separator

```js
filterTruncateMiddle("/home/user/projects/aloha/src/index.js", { start: 5, end: 8, separator: "/…/" });
// /home/…/index.js

filterTruncateMiddle("0x71C7656EC7ab88b098defB751B7401B5f6d8976F", { separator: "..." });
// 0x71C7...976F
```
