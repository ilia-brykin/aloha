# APagination

Pagination controls with configurable page size and offset.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { APagination } from "aloha-vue";
```

[Runnable Vue example](../examples/APagination.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/pagination)

Bind limit and offset separately. Pass the displayed row count and the total count from the same dataset.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `disabled` | Boolean | `false` | — | Disables all pagination controls. Useful while rows are being reloaded or when navigation must be blocked. |
| `limit` | Number | — | Yes | Number of rows that should be returned per page. The component emits update:limit when the user selects a new value. |
| `limitsPerPage` | Array | `["10","25","50","100"]` | — | List of options that appear in the per-page selector. Values can be strings or numbers and usually mirror the backend limits. |
| `maxPages` | Number | `5` | — | Maximum amount of numbered page buttons that may be shown at once before truncation with ellipsis. |
| `modes` | Object | `{"perPage":{"mode":"group","position":0,"showTextCountFromTo":true},"pagination":{"mode":"normal","position":1}}` | — | Configuration for per-page controls and the pager. Use perPage and pagination to define mode (inline/group/select or normal/short/loadMore), position, and showTextCountFromTo. |
| `offset` | Number | — | Yes | Index of the first row that belongs to the current page. The component emits update:offset every time the user navigates. |
| `rowsLength` | Number | — | Yes | How many rows are actually rendered on the current page. Needed to correctly display the 'from-to' counter when the last page is incomplete. |
| `texts` | Object | Built-in configuration | — | Object with translation keys or custom texts for page navigation labels and per-page counters. |
| `totalCount` | Number | — | Yes | Total number of items in the entire data set. This value drives the from-to counter and the number of available pages. |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `update:limit` | `limit` |
| `update:offset` | `offset` |

Vue model bindings: `v-model:limit`, `v-model:offset`.

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/APagination/APagination.js)
