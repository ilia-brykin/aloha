# filterDateRelative

The function **filterDateRelative** formats a date relative to now, e.g. "5 minutes ago" or "in 2 days". The text is in the current language (`Intl.RelativeTimeFormat`). Use **filterDate** for an absolute date.

## Import as Function

```js
import { filterDateRelative } from "aloha-vue";
```

## Import as composition API

```js
import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      filterDateRelative,
    } = AFiltersAPI();
  },
};
```

## Arguments

```js
filterDateRelative(value, { [now=new Date()], [numeric="auto"] })
```

- **value** (String | Date): The date
- **[now=new Date()]** (String | Date): The date the value is compared to
- **[numeric="auto"]** (String): "auto" ("yesterday", "tomorrow") or "always" ("1 day ago", "in 1 day")

## Basic usage

```js
filterDateRelative(new Date(Date.now() - 5 * 60 * 1000));
// 5 minutes ago

filterDateRelative(new Date(Date.now() + 2 * 24 * 60 * 60 * 1000));
// tomorrow

filterDateRelative("Aloha");
// Aloha
```

## numeric

```js
filterDateRelative("2026-03-09T12:00:00", { now: "2026-03-10T12:00:00" });
// yesterday

filterDateRelative("2026-03-09T12:00:00", { now: "2026-03-10T12:00:00", numeric: "always" });
// 1 day ago
```

## now

```js
filterDateRelative("2026-01-01", { now: "2026-03-10" });
// 2 months ago

filterDateRelative("2026-03-10T12:00:00", { now: "2026-03-10T11:58:00" });
// in 2 minutes
```
