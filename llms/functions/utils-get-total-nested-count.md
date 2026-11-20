# getTotalNestedCount

Calculates the total count of elements within a nested structure, including all children and sub-children, based on the specified child key.

## Import as Function

```js
import { getTotalNestedCount } from "aloha-vue";
```

## Arguments

```js
getTotalNestedCount({ array, keyChildren })
```

- **array** (Array): The initial array to traverse for counting
- **keyChildren** (String): The key used to identify child elements within each object in the array

## Basic usage

```js
getTotalNestedCount({ array: ["hello", "Aloha"], keyChildren: "" });
// 2

getTotalNestedCount({ array: [], keyChildren: "" });
// 0

getTotalNestedCount({ array: [{ children: ["hello", "world"] }, "test"], keyChildren: "children" });
// 4

getTotalNestedCount({ array: [{ aloha: [{ aloha: ["hello", "world"] }, { aloha: ["hello1", "world1"] }] }, "test"], keyChildren: "aloha" });
// 8
```
