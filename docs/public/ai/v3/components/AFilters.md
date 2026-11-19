# AFilters

Filter toolbar with separate draft and applied state.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AFilters } from "aloha-vue";
```

[Runnable Vue example](../examples/AFilters.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/filters)

Use v-model:unapplied-model for draft values and v-model:applied-model for the values used by the results. Keep filter IDs stable.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `appliedModel` | Object | `{}` | — | — |
| `canSave` | Boolean | `false` | — | — |
| `disabled` | Boolean | `false` | — | — |
| `excludeRenderAttributes` | Array | `[]` | — | — |
| `filterCenterBtnCloseAllClass` | String, Object | `"a_btn a_btn_link a_btn_small"` (plugin default) | — | — |
| `filterCenterBtnCloseClass` | String, Object | `"a_btn a_btn_secondary"` (plugin default) | — | — |
| `filterCenterBtnGoToClass` | String, Object | `"a_btn a_btn_secondary"` (plugin default) | — | — |
| `filterCenterBtnNotCloseClass` | String, Object | `"a_btn a_btn_secondary"` (plugin default) | — | — |
| `filterMain` | Object | — | — | — |
| `filters` | Array | `[]` | — | — |
| `filtersSaved` | Array | `[]` | — | — |
| `id` | String | Generated ID | — | — |
| `mainModel` | Object | — | — | — |
| `showAddFilterButtonWhenEmpty` | Boolean | `true` | — | — |
| `unappliedModel` | Object | `{}` | — | — |
| `updateFiltersSaved` | Function | `undefined` | — | — |
| `view` | String | `"top"` | — | — |
| `viewRightTeleportSelector` | String | `undefined` | — | — |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `startSearch` | See source or linked demo |
| `update:appliedModel` | `appliedModelLocal` / `fullModel` / `unappliedModel` |
| `update:mainModel` | `fullModel` |
| `update:unappliedModel` | `unappliedModelLocal` / `fullModel` |

Vue model bindings: `v-model:applied-model`, `v-model:main-model`, `v-model:unapplied-model`.

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/AFilters/AFilters/AFilters.js)
