# ACheckboxRadioGroups

Low-level renderer for grouped checkbox or radio options.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { ACheckboxRadioGroups } from "aloha-vue";
```

[Runnable Vue example](../examples/ACheckboxRadioGroups.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/checkbox)

For normal forms use ACheckbox or ARadio. This renderer expects prepared group indexes and a fieldset to supply the group label.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | Forces translation regardless of the `is-translate` flag. |
| `classButtonGroupDefault` | String, Object, Array | `"a_btn a_btn_outline_primary"` | — | Default CSS classes that will be applied to the buttons in the group. These classes can be used to style the buttons in the checkbox or radio button group. |
| `dataGrouped` | Object | `{}` | — | — |
| `disabled` | Boolean | `false` | — | Determines whether the component is disabled. If set to true, the component becomes inactive and the user cannot interact with it. |
| `groupParentKey` | String, Number | `undefined` | — | — |
| `groupsForLever` | Object | `{}` | — | — |
| `hasControlCheckbox` | Boolean | `false` | — | Adds a control checkbox that allows selecting or deselecting all checkboxes in the group simultaneously. |
| `hideParentWithSearch` | Boolean | `false` | — | — |
| `id` | String | — | Yes | The identifier of the component, which can be used to track or refer to the component in the code. |
| `isButtonGroup` | Boolean | `false` | — | Specifies whether the checkboxes should be displayed as buttons. If set to true, the checkboxes will be displayed as buttons, which can provide a more visually appealing interface. |
| `isErrors` | Boolean | `false` | — | — |
| `isHiddenWithSearch` | Boolean | `false` | — | — |
| `isWidthAuto` | Boolean | `false` | — | Specifies whether the width of the checkbox group should automatically adjust to its content. If set to true, the width will adjust automatically. |
| `keyDisabled` | String | `undefined` | — | Specifies the key in the data object that determines whether the item will be disabled (unselectable). |
| `keyDisabledCallback` | Function | `undefined` | — | A function to determine whether an item should be disabled. Returns `true` to disable a specific item. Accepts an object with item data: `{ item }`. |
| `keyTitle` | String | `undefined` | — | The key in the data object that specifies the title for each item. |
| `keyTitleCallback` | Function | `undefined` | — | A callback function used to generate the title based on the item data. This allows dynamically creating titles based on complex logic. |
| `levelIndex` | Number | — | Yes | — |
| `modelSearch` | String | — | Yes | — |
| `modelValue` | String, Number, Boolean, Array | `false` | — | The current model value associated with the component. Used to manage the data displayed in the component. |
| `modelValueObj` | Object | `undefined` | — | — |
| `searching` | Boolean | `false` | — | — |
| `searchingElements` | Object | — | Yes | — |
| `searchingGroups` | Object | — | Yes | — |
| `searchingGroupsWithSearchInGroup` | Object | — | Yes | — |
| `searchTextInHtml` | Boolean | `false` | — | If set to `true`, the search will be performed on the text extracted from the rendered HTML. This allows searching only visible text shown to the user, ignoring tags and attributes. |
| `slotAppendName` | String | `undefined` | — | The name of the slot that will be appended after the component's main content. This allows extending the functionality of the component by adding custom content. |
| `slotName` | String | `undefined` | — | The name of the main slot used to insert custom content into the component. |
| `type` | String | — | Yes | — |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `changeModelValue` | Object with `model`, `item` and `$event` for checkbox and radio items. |

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ui/ACheckboxRadioGroups/ACheckboxRadioGroups.js)
