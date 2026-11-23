# filterDuration

The function **filterDuration** formats a duration, e.g. of a process or a video: as text with units (**1 h 2 min 5 s**) or as a clock (**01:02:05**). The value is rounded to whole seconds.

## Import as Function

```js
import { filterDuration } from "aloha-vue";
```

## Import as composition API

```js
import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      filterDuration,
    } = AFiltersAPI();
  },
};
```

## Arguments

```js
filterDuration(value, { [sourceUnits="s"], [format="long"], [maxUnits=0], [showDays=true] })
```

- **value** (Number | String): The duration
- **[sourceUnits="s"]** (String): The units of the value: **ms**, **s**, **m**, **h** or **d**
- **[format="long"]** (String): **long** (text with units) or **clock** (hours:minutes:seconds)
- **[maxUnits=0]** (Number): Only for **long**: the maximum number of shown units, starting with the largest one. **0** shows all units
- **[showDays=true]** (Boolean): Only for **long**: whether days are shown. Otherwise they are counted as hours

## Basic usage

```js
filterDuration(3725);
// 1 h 2 min 5 s

filterDuration(90061);
// 1 d 1 h 1 min 1 s

filterDuration(0);
// 0 s
```

## sourceUnits

```js
filterDuration(1500, { sourceUnits: "ms" });
// 2 s

filterDuration(90, { sourceUnits: "m" });
// 1 h 30 min

filterDuration(1.5, { sourceUnits: "h" });
// 1 h 30 min
```

## format

```js
filterDuration(3725, { format: "clock" });
// 01:02:05

filterDuration(90061, { format: "clock" });
// 25:01:01
```

## maxUnits

```js
filterDuration(90061, { maxUnits: 2 });
// 1 d 1 h

filterDuration(3725, { maxUnits: 1 });
// 1 h
```

## showDays

```js
filterDuration(90061, { showDays: false });
// 25 h 1 min 1 s
```

## Translations

| key | en |
| --- | --- |
| `_A_DURATION_DAYS_` | d |
| `_A_DURATION_HOURS_` | h |
| `_A_DURATION_MINUTES_` | min |
| `_A_DURATION_SECONDS_` | s |
