# ASelectStyle

Select control for an Aloha style or class preset.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { ASelectStyle } from "aloha-vue";
```

[Runnable Vue example](../examples/ASelectStyle.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/select-style)

Use the preset options or provide extended data. Label the field with the design choice it controls.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | Forces translation regardless of the `is-translate` flag. |
| `buttonClass` | String | `undefined` (plugin default) | — | — |
| `buttonClassDefault` | String, Object | `"a_form_control a_select_toggle"` | — | — |
| `caretIcon` | String, Object | Built-in SVG (plugin default) | — | — |
| `change` | Function | Default callback | — | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| `class` | String, Object | — | — | — |
| `countMultiselect` | Number | `4` (plugin default) | — | — |
| `data` | Array | `undefined` | — | An array of data used to generate the items. |
| `dataExtended` | Array | `[]` | — | Array of objects with additional styles for the component |
| `dependencies` | Array, Object | `undefined` | — | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| `deselectable` | Boolean | `true` (plugin default) | — | — |
| `disabled` | Boolean | `false` | — | Determines whether the component is disabled. If set to true, the component becomes inactive and the user cannot interact with it. |
| `errors` | String, Array | `undefined` | — | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| `errorsAll` | Object | `{}` | — | An object containing errors for all child elements passed through children. Each error should be specified for the corresponding element by its id. |
| `exceededItemsDeletable` | Boolean | `true` (plugin default) | — | — |
| `excludeRenderAttributes` | Array | `[]` | — | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final DOM. |
| `extra` | Object | `undefined` | — | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like "_WELCOME_{{foo}}_{{bar}}_", which is translated as "Welcome {{ foo }}: {{ bar }}", you can pass an object like { foo: "abc", bar: "123" }, and the result will be the translation "Welcome abc: 123". |
| `filterGroups` | Array, Object | `undefined` | — | Array or object for filtering style groups |
| `hasCaret` | Boolean | `true` | — | — |
| `helpText` | String | — | — | Help text displayed below the component. Provides the user with additional information or instruction. |
| `htmlId` | String | `undefined` | — | Sets the HTML ID of the element. Can be used to uniquely identify the component on the page. |
| `id` | String, Number | Generated ID | — | The identifier of the component, which can be used to track or refer to the component in the code. |
| `idPrefix` | String | `undefined` | — | Prefix for the component's ID. Used to create a unique identifier based on the specified prefix. |
| `inBody` | Boolean | `true` (plugin default) | — | — |
| `isCloseByClick` | Boolean | `undefined` (plugin default) | — | — |
| `isDeselectAll` | Boolean | `false` (plugin default) | — | Display the button. Clicking it will deselect all items in the list. |
| `isHide` | Boolean | `false` | — | Determines whether the component should be hidden. If set to true, the component is not displayed on the page. |
| `isLabelFloat` | Boolean | `undefined` | — | Determines whether the label of the component should be positioned above the field. If true, the label will move above the text field when focused or when content is present. Deprecated, use label-position. |
| `isRender` | Boolean | `true` | — | Indicates whether the component should be rendered. If set to false, the component will not be created in the DOM. |
| `isSelectAll` | Boolean | `false` (plugin default) | — | Display the button. Clicking it will automatically select all items from the list. |
| `isSelectionCloseable` | Boolean | `true` (plugin default) | — | — |
| `keyDisabled` | String | `undefined` (plugin default) | — | Specifies the key in the data object that determines whether the item will be disabled (unselectable). |
| `keyDisabledCallback` | Function | `undefined` | — | A function to determine whether an item should be disabled. Returns `true` to disable a specific item. Accepts an object with item data: `{ item }`. |
| `keyGroup` | String, Number, Array | `["groupName","subGroupName"]` | — | A key or array of keys used to group data by specific categories. This property allows grouping items into groups. |
| `keyGroupLabelCallback` | Function | `undefined` | — | A callback function that takes two arguments ({ group, item }) and returns the group name. It is used to dynamically determine group names based on the provided data. |
| `keyId` | String | `"value"` | — | The key in the data object that will be used as the identifier for each item. |
| `keyLabel` | String | `"label"` | — | The key in the data object that specifies the label text for each item. |
| `keyLabelCallback` | Function | `undefined` | — | A callback function used to generate the label text based on the item data. This allows dynamically creating labels based on complex logic. |
| `keyTitleCallback` | Function | Default callback | — | A callback function used to generate the title based on the item data. This allows dynamically creating titles based on complex logic. |
| `label` | String, Number | `undefined` | — | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| `labelClass` | String, Object | `undefined` | — | CSS class(es) applied to the label. Allows customizing the label's style. |
| `labelDescription` | String | `undefined` | — | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| `labelPosition` | String | `undefined` | — | Position of the label: "float", "inset" or "top". The default comes from the component plugin or AFormPlugin (labelPosition). |
| `labelScreenReader` | String | `undefined` | — | Label intended for screen readers. Useful for improving accessibility. |
| `maxCountMultiselect` | Number | `undefined` (plugin default) | — | — |
| `menuWidthType` | String | `"as_button"` (plugin default) | — | — |
| `modelDependencies` | Object | `{}` | — | Determines model dependencies that may affect the visibility or behavior of the component. |
| `modelValue` | String, Array | `undefined` (plugin default) | — | The current model value associated with the component. Used to manage the data displayed in the component. |
| `options` | Object | `{}` | — | Additional data object available within the component, in slots, or custom logic. |
| `placeholder` | String | `undefined` | — | Specifies the placeholder text that will be displayed in the input field until the user enters data. The placeholder helps the user understand what data is expected in the field. |
| `placement` | String | `"bottom-end"` (plugin default) | — | — |
| `popperContainerId` | String | `"a_select_container"` (plugin default) | — | — |
| `readonly` | Boolean | `false` | — | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| `readonlyDefault` | String | `""` (plugin default) | — | The default text that is shown if the value is missing in read-only mode. |
| `readonlyValueParentClass` | String, Object, Array | `undefined` | — | — |
| `required` | Boolean | `false` | — | Indicates whether the component is required. If set to true, the component requires user input. |
| `search` | Boolean | `true` | — | Determines whether the search feature is supported. If set to true, users will be able to search within the group. |
| `searchTimeout` | Number | `0` (plugin default) | — | Specifies the delay time in milliseconds before performing the search. Useful for preventing excessive requests during fast text input by the user. |
| `selectMenuClass` | String, Object | `undefined` | — | — |
| `slotName` | String | `undefined` | — | The name of the main slot used to insert custom content into the component. |
| `sortOrder` | String | `"asc"` | — | Specifies the sort order of items. Possible values: asc (ascending) or desc (descending). |
| `sortOrderGroup` | String | `"asc"` | — | Specifies the sort order of groups if the items are grouped. Possible values: asc (ascending) or desc (descending). |
| `textDeselectAll` | String | `"_A_SELECT_DESELECT_ALL_"` (plugin default) | — | — |
| `textSelectAll` | String | `"_A_SELECT_SELECT_ALL_"` (plugin default) | — | — |
| `translateGroup` | Boolean | `false` (plugin default) | — | — |
| `type` | String | `"select"` (plugin default) | — | Component type: select, selectStyle, multiselect, multiselectStyle |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `blur` | `arg` |
| `focus` | `arg` |
| `open` | `arg` |
| `update:modelValue` | `arg` |

Vue model bindings: `v-model`.

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ui/ASelectStyle/ASelectStyle.js)
