# AGroupButtonDropdown

Shows primary actions as buttons and secondary actions in a dropdown.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AGroupButtonDropdown } from "aloha-vue";
```

[Runnable Vue example](../examples/AGroupButtonDropdown.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/group-button-dropdown)

Use short action names and real navigation targets for link actions.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `actions` | Array | `[]` | — | A list of actions to choose from. |
| `actionsClasses` | Array | `["a_btn a_btn_primary","a_btn a_btn_secondary"]` (plugin default) | — | An array of CSS classes applied to inline actions by position. |
| `actionsIds` | Array | `[]` | — | An array of IDs assigned to actions by position when the action itself does not define an `id`. |
| `btnGroupClass` | String, Array, Object | `"a_btn_group"` | — | CSS classes for the wrapper that groups inline buttons and links. |
| `disabled` | Boolean | `false` | — | Indicator of a disabled state. |
| `dropdownAttributes` | Object | `{}` (plugin default) | — | Additional dropdown attributes that are not defined as props. |
| `hasDividerBeforeDropdown` | Boolean | `true` (plugin default) | — | Determines whether spacing is added before the dropdown part when both inline actions and dropdown actions are rendered. |
| `indexFirstDropdownAction` | Number | `1` (plugin default) | — | The index of the first action that should be moved into the dropdown on desktop. A value of `-1` disables dropdown grouping. |
| `indexFirstDropdownActionMobile` | Number | `0` (plugin default) | — | The index of the first action that should be moved into the dropdown on mobile. A value of `-1` disables dropdown grouping. |
| `innerFlagHasActions` | Boolean | `false` | — | Internal flag updated via `v-model:inner-flag-has-actions` to indicate whether the component has visible actions after filtering. |
| `minDropdownActions` | Number | `2` (plugin default) | — | Minimum number of actions required to render the dropdown part. If there are fewer actions, they remain inline. |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `update:innerFlagHasActions` | `newValue` |

Vue model bindings: `v-model:inner-flag-has-actions`.

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/AGroupButtonDropdown/AGroupButtonDropdown.js)
