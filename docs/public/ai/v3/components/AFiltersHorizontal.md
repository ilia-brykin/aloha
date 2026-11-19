# AFiltersHorizontal

Inline part of the AFilters interface.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AFiltersHorizontal } from "aloha-vue";
```

[Runnable Vue example](../examples/AFiltersHorizontal.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/filters)

Supply grouped filter data and state callbacks when rendering directly. AFilters manages those dependencies for the common case.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `canSave` | Boolean | `false` | — | — |
| `disabled` | Boolean | `false` | — | — |
| `excludeRenderAttributes` | Array | `[]` | — | — |
| `filtersGroup` | Object | `{"alwaysVisible":[],"filters":[]}` | Yes | — |
| `filtersKeyById` | Object | — | Yes | — |
| `filtersSaved` | Array | — | Yes | — |
| `filtersVisible` | Array | — | Yes | — |
| `id` | String | — | Yes | — |
| `mainModel` | Object | — | — | — |
| `onUpdateModelFilters` | Function | — | Yes | — |
| `showAddFilterButtonWhenEmpty` | Boolean | `true` | — | — |
| `unappliedModel` | Object | — | Yes | — |
| `updateDataKeyByIdFromFilter` | Function | — | Yes | — |
| `updateFiltersSaved` | Function | — | Yes | — |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `startSearch` | None |
| `toggleFiltersVisible` | `{ isAdd, filterId, filter }` |

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/AFilters/AFiltersHorizontal/AFiltersHorizontal.js)
