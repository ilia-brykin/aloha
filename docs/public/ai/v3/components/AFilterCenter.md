# AFilterCenter

Displays the applied filter values and removal controls.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AFilterCenter } from "aloha-vue";
```

[Runnable Vue example](../examples/AFilterCenter.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/filters)

Normally rendered by AFilters. When composing it directly, supply the filter group indexes and callbacks that clear the applied values.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `appliedModel` | Object | — | Yes | — |
| `btnCloseAllClass` | String, Object | `"a_btn a_btn_link a_btn_small"` | — | — |
| `btnCloseClass` | String, Object | `"a_btn a_btn_secondary"` | — | — |
| `btnGoToClass` | String, Object | `"a_btn a_btn_secondary"` | — | — |
| `btnNotCloseClass` | String, Object | `"a_btn a_btn_secondary"` | — | — |
| `closeAllFilters` | Function | — | Yes | — |
| `closeFilterValue` | Function | — | Yes | — |
| `dataKeyByKeyIdPerFilter` | Object | — | Yes | — |
| `disabled` | Boolean | `false` | — | — |
| `filtersGroup` | Object | `{"alwaysVisible":[],"filters":[]}` | Yes | — |
| `filtersKeyById` | Object | — | Yes | — |
| `filtersVisibleAll` | Array | — | Yes | — |
| `id` | String | — | Yes | — |

## Events and model bindings

This component does not declare dedicated events. See the usage notes for callback props or delegated behavior.

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `filtersHorizontal` | — | — |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/AFilters/AFilterCenter/AFilterCenter.js)
