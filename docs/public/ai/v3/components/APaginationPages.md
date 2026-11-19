# APaginationPages

Page navigation for a fixed page size.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { APaginationPages } from "aloha-vue";
```

[Runnable Vue example](../examples/APaginationPages.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/pagination-pages)

Bind offset and derive rows from the offset and limit.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `disabled` | Boolean | `false` | — | Disables page buttons and navigation controls. |
| `limit` | Number | — | Yes | Number of items per page. Together with offset it defines the current page. |
| `maxPages` | Number | `5` | — | Maximum amount of page buttons that may be shown at once. |
| `mode` | String | `"normal"` | — | Navigation layout mode: normal, short, or loadMore. |
| `offset` | Number | — | Yes | Index of the first item on the current page. The component emits update:offset when navigation changes. |
| `texts` | Object | Built-in configuration | — | Object with translation keys or text labels used by the pager. |
| `totalCount` | Number | — | Yes | Total number of items in the data set. Used to calculate the number of pages and the button range. |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `update:offset` | `OFFSET` / `0` / `offset.value - limit.value` / `(maxItems.value - 1) * limit.value` / `offset.value + limit.value` |

Vue model bindings: `v-model:offset`.

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/APagination/APaginationPages/APaginationPages.js)
