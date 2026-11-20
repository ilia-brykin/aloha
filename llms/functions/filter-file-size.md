# filterFileSize

The function **filterFileSize** converts a size from a source unit (e.g., Bytes) to a target size in a specific unit (e.g., Kilobytes, Megabytes) and returns the result as a formatted string.

## Import as Function

```js
import { filterFileSize } from "aloha-vue";
```

## Import as composition API

```js
import { AFiltersAPI } from "aloha-vue";

export default {
  setup() {  
    const {
      filterFileSize,
    } = AFiltersAPI();
  },
};
```

## Arguments

```js
filterFileSize(value, { [units="kb"], [sourceUnits="b"], [digits=2] })
```

- **value** (Number): The size to be converted
- **[units="kb"]** (String): The desired unit for the size specification. Possible units are **b** (Bytes), **kb** (Kilobytes), **mb** (Megabytes), **gb** (Gigabytes), **tb** (Terabytes), **pb** (Petabytes), **eb** (Exabytes), **zb** (Zettabytes), **yb** (Yottabytes)
- **[sourceUnits="b"]** (String): The unit of the original size. Possible units are the same as for **units**
- **[digits=2]** (Number): The number of decimal places in the formatted string

## Basic usage

```js
filterFileSize(2000);
// 1,95 KB

filterFileSize(1024);
// 1,00 KB
```

## units

```js
filterFileSize(1024, { units: "b" });
// 1.024,00 Bytes

filterFileSize(1024, { units: "kb" });
// 1,00 KB

filterFileSize(1048576, { units: "mb" });
// 1,00 MB

filterFileSize(1073741824, { units: "gb" });
// 1,00 GB

filterFileSize(1073741824 * 1024, { units: "tb" });
// 1,00 TB
```

## units=""

```js
filterFileSize(1024, { units: "" });
// 1,00 KB

filterFileSize(1048576, { units: "" });
// 1,00 MB

filterFileSize(1073741824, { units: "" });
// 1,00 GB

filterFileSize(1073741824 * 1024, { units: "" });
// 1,00 TB
```

## sourceUnits

```js
filterFileSize(1024, { sourceUnits: "b" });
// 1,00 KB

filterFileSize(2, { sourceUnits: "kb" });
// 2,00 KB

filterFileSize(1, { sourceUnits: "mb" });
// 1.024,00 KB

filterFileSize(0.1, { sourceUnits: "gb" });
// 104.857,60 KB

filterFileSize(0.0001, { sourceUnits: "tb" });
// 107.374,18 KB
```

## digits

```js
filterFileSize(1024, { digits: 0 });
// 1 KB

filterFileSize(10241, { digits: 2 });
// 10,00 KB
```

## Translations

| key | en |
| --- | --- |
| `_A_FILE_SIZE_B_` | Bytes |
| `_A_FILE_SIZE_KB_` | KB |
| `_A_FILE_SIZE_MB_` | MB |
| `_A_FILE_SIZE_GB_` | GB |
| `_A_FILE_SIZE_TB_` | TB |
| `_A_FILE_SIZE_PB_` | PB |
| `_A_FILE_SIZE_EB_` | EB |
| `_A_FILE_SIZE_ZB_` | ZB |
| `_A_FILE_SIZE_YB_` | YB |
