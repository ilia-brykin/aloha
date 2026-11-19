# AFiltersRight

Side-panel part of the AFilters interface.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AFiltersRight } from "aloha-vue";
```

[Runnable Vue example](../examples/AFiltersRight.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/filters-right)

Provide the same filter definitions and applied model used by the result view.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `appliedModel` | Object | — | Yes | — |
| `disabled` | Boolean | `false` | — | — |
| `excludeRenderAttributes` | Array | `[]` | — | — |
| `filters` | Array | `[]` | — | — |
| `filtersKeyById` | Object | — | Yes | — |
| `id` | String | — | Yes | — |
| `onUpdateModelFilters` | Function | — | Yes | — |
| `updateDataKeyByIdFromFilter` | Function | — | Yes | — |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `startSearch` | See source or linked demo |

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/AFilters/AFilersRight/AFilersRight.js)
