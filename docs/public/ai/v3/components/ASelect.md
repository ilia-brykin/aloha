# ASelect

Single- or multi-select with local or retrieved options.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { ASelect } from "aloha-vue";
```

[Runnable Vue example](../examples/ASelect.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/select)

Provide a label. Configure keyId and keyLabel to match option data. Bind one option key for a single selection and an array for multi-select.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | — |
| `apiSaveId` | String | `undefined` | — | A unique identifier for saving data retrieved from the API. This can be useful for caching or reusing data within a session. |
| `autocomplete` | String | `undefined` | — | Specifies whether the field should support autocomplete, similar to the autocomplete attribute in HTML. |
| `buttonClass` | String | `undefined` (plugin default) | — | — |
| `buttonClassDefault` | String, Object | `"a_form_control a_select_toggle"` | — | — |
| `caretIcon` | String, Object | Built-in SVG (plugin default) | — | — |
| `change` | Function | Default callback | — | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| `class` | String, Object | `undefined` (plugin default) | — | — |
| `classMenuSearch` | String, Object | `"a_select_menu_with_search"` (plugin default) | — | — |
| `countMultiselect` | Number | `4` (plugin default) | — | — |
| `data` | Array | `undefined` | — | An array of data used to generate the items. |
| `dataExtra` | Array | `[]` (plugin default) | — | An additional array of items not included in the main data array. Its items support the same grouping configuration as data through key-group and the related group props. |
| `dependencies` | Array, Object | `undefined` | — | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| `deselectable` | Boolean | `true` (plugin default) | — | — |
| `disabled` | Boolean | `false` | — | Determines whether the component is disabled. If set to true, the component becomes inactive and the user cannot interact with it. |
| `errorIcon` | String, Object | `undefined` | — | Specifies the icon displayed when the component has validation errors. If the component has an input field, the icon is shown inside it; otherwise, it is displayed next to the control. The icon is shown only when errors is present. |
| `errors` | String, Array | `undefined` | — | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| `errorsAll` | Object | `{}` | — | An object containing errors for all child elements passed through children. Each error should be specified for the corresponding element by its id. |
| `errorsClass` | String, Object | `undefined` | — | — |
| `exceededItemsDeletable` | Boolean | `true` (plugin default) | — | — |
| `excludeRenderAttributes` | Array | `[]` | — | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final DOM. |
| `exclusiveOptionLabel` | String | `"_A_SELECT_EXCLUSIVE_"` | — | — |
| `exclusiveOptionValue` | String, Number, Boolean | `"_exclusive_"` | — | — |
| `extra` | Object | `undefined` | — | — |
| `hasCaret` | Boolean | `true` | — | — |
| `helpText` | String | — | — | Help text displayed below the component. Provides the user with additional information or instruction. |
| `htmlId` | String | `undefined` | — | Sets the HTML ID of the element. Can be used to uniquely identify the component on the page. |
| `id` | String, Number | Generated ID | — | The identifier of the component, which can be used to track or refer to the component in the code. |
| `idPrefix` | String | `undefined` | — | Prefix for the component's ID. Used to create a unique identifier based on the specified prefix. |
| `inBody` | Boolean | `true` (plugin default) | — | — |
| `isCloseByClick` | Boolean | `undefined` (plugin default) | — | — |
| `isDataSimpleArray` | Boolean | `false` (plugin default) | — | Determines whether the data array is a simple array of values. If set to true, each element of the array will be treated as a simple value without keys. |
| `isDeselectAll` | Boolean | `false` (plugin default) | — | Display the button. Clicking it will deselect all items in the list. |
| `isExclusiveOptionEnabled` | Boolean | `false` | — | — |
| `isHide` | Boolean | `false` | — | Determines whether the component should be hidden. If set to true, the component is not displayed on the page. |
| `isLabelFloat` | Boolean | `undefined` | — | Determines whether the label of the component should be positioned above the field. If true, the label will move above the text field when focused or when content is present. Deprecated, use label-position. |
| `isRender` | Boolean | `true` | — | Indicates whether the component should be rendered. If set to false, the component will not be created in the DOM. |
| `isSelectAll` | Boolean | `false` (plugin default) | — | Display the button. Clicking it will automatically select all items from the list. |
| `isSelectionCloseable` | Boolean | `true` (plugin default) | — | — |
| `keyDisabled` | String | `undefined` (plugin default) | — | Specifies the key in the data object that determines whether the item will be disabled (unselectable). |
| `keyDisabledCallback` | Function | `undefined` | — | A function to determine whether an item should be disabled. Returns `true` to disable a specific item. Accepts an object with item data: `{ item }`. |
| `keyGroup` | String, Number, Array | `undefined` (plugin default) | — | A key or array of keys used to group data by specific categories. This property allows grouping items into groups. |
| `keyGroupLabelCallback` | Function | `undefined` | — | A callback function that takes two arguments ({ group, item }) and returns the group name. It is used to dynamically determine group names based on the provided data. |
| `keyId` | String | `"value"` (plugin default) | — | The key in the data object that will be used as the identifier for each item. |
| `keyLabel` | String | `"label"` (plugin default) | — | The key in the data object that specifies the label text for each item. |
| `keyLabelCallback` | Function | `undefined` | — | A callback function used to generate the label text based on the item data. This allows dynamically creating labels based on complex logic. |
| `keyTitle` | String | `undefined` (plugin default) | — | The key in the data object that specifies the title for each item. |
| `keyTitleCallback` | Function | `undefined` | — | A callback function used to generate the title based on the item data. This allows dynamically creating titles based on complex logic. |
| `label` | String, Number | `undefined` | — | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| `labelClass` | String, Object | `undefined` | — | CSS class(es) applied to the label. Allows customizing the label's style. |
| `labelDescription` | String | `undefined` | — | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| `labelNotFound` | String | `"_A_SELECT_LABEL_NOT_FOUND_"` (plugin default) | — | — |
| `labelPosition` | String | `undefined` | — | Position of the label: "float", "inset" or "top". The default comes from the component plugin or AFormPlugin (labelPosition). |
| `labelScreenReader` | String | `undefined` | — | Label intended for screen readers. Useful for improving accessibility. |
| `loading` | Boolean | `false` | — | Indicates whether the item is in a loading state. If set to true, the item displays a loading indicator. |
| `maxCountMultiselect` | Number | `undefined` (plugin default) | — | — |
| `menuWidthType` | String | `"as_button"` (plugin default) | — | — |
| `mergeData` | Boolean | `false` | — | Determines whether internally loaded data is merged with the data prop. Items are merged by their ID; when both sources contain the same ID, the internally loaded item takes precedence. If set to false, internally loaded data replaces the data prop. |
| `mode` | String | `"default"` | — | — |
| `modelDependencies` | Object | `{}` | — | Determines model dependencies that may affect the visibility or behavior of the component. |
| `modelUndefined` | Any | `null` | — | The value used to reset the model to an undefined state. Useful for clearing the model value. |
| `modelValue` | String, Number, Boolean, Array | `undefined` (plugin default) | — | The current model value associated with the component. Used to manage the data displayed in the component. |
| `options` | Object | `{}` | — | Additional data object available within the component, in slots, or custom logic. |
| `placeholder` | String | `undefined` | — | Specifies the placeholder text that will be displayed in the input field until the user enters data. The placeholder helps the user understand what data is expected in the field. |
| `placement` | String | `"bottom-end"` (plugin default) | — | — |
| `popperContainerId` | String | `"a_select_container"` (plugin default) | — | — |
| `readonly` | Boolean | `false` | — | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| `readonlyDefault` | String | `""` (plugin default) | — | The default text that is shown if the value is missing in read-only mode. |
| `readonlyValueParentClass` | String, Object, Array | `undefined` | — | — |
| `required` | Boolean | `false` | — | Indicates whether the component is required. If set to true, the component requires user input. |
| `search` | Boolean | `false` (plugin default) | — | Determines whether the search feature is supported. If set to true, users will be able to search within the group. |
| `searchApi` | Boolean | `false` (plugin default) | — | Specifies whether item searches will be performed using an API. If set to true, data will be loaded from the server as the query is entered. |
| `searchApiKey` | String | `undefined` (plugin default) | — | The key used to perform the search via API. Typically, this is a parameter passed in the server request to filter the data. |
| `searchInGroup` | Boolean | `undefined` | — | Enables additional search by group names. |
| `searchOutside` | Boolean | `false` (plugin default) | — | Determines whether the search will be performed outside the component, for example, via API or another external data source. |
| `searchTextInHtml` | Boolean | `false` (plugin default) | — | — |
| `searchTimeout` | Number | `0` (plugin default) | — | Specifies the delay time in milliseconds before performing the search. Useful for preventing excessive requests during fast text input by the user. |
| `selectMenuClass` | String, Object | `undefined` | — | — |
| `showNotFound` | Boolean | `true` (plugin default) | — | — |
| `showSelectedFirst` | Boolean | `false` (plugin default) | — | Displays selected options before the remaining options and removes their duplicates from the main list. Grouping is preserved. |
| `slotName` | String | `undefined` (plugin default) | — | The name of the main slot used to insert custom content into the component. |
| `sortOrder` | String | `undefined` (plugin default) | — | Specifies the sort order of items. Possible values: asc (ascending) or desc (descending). |
| `sortOrderGroup` | String | `undefined` (plugin default) | — | Specifies the sort order of groups if the items are grouped. Possible values: asc (ascending) or desc (descending). |
| `textDeselectAll` | String | `"_A_SELECT_DESELECT_ALL_"` (plugin default) | — | — |
| `textSelectAll` | String | `"_A_SELECT_SELECT_ALL_"` (plugin default) | — | — |
| `translateData` | Boolean | `false` (plugin default) | — | Indicates whether the data should be translated before display. If set to true, text values will be translated according to the current language settings. |
| `translateGroup` | Boolean | `false` (plugin default) | — | — |
| `type` | String | `"select"` (plugin default) | — | — |
| `url` | String | `undefined` | — | URL used to load the component’s options. Supports `{{ path }}` placeholders resolved from `url-template-data`. |
| `urlParams` | Object | `undefined` | — | Parameters that will be added to the URL request when loading data from the server. These parameters allow filtering or modifying the data retrieved from the API. |
| `urlRetrieve` | String | `undefined` | — | An optional URL used specifically to retrieve already selected values that are missing from the main loaded list. |
| `urlRetrieveParams` | Object | `undefined` | — | Optional parameters that will be added only to the retrieve request used for loading missing selected values. |
| `urlTemplateData` | Object | `undefined` | — | Object with values for `{{ path }}` placeholders in `url`, including nested paths such as `{{ source.file }}`. Uses the same placeholder syntax as translations. Changing these values reloads the options and clears the selection only when the resolved URL changes. Does not affect URLs without placeholders; query parameters are passed separately via `url-params`. |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `blur` | See source or linked demo |
| `focus` | See source or linked demo |
| `onSearchOutside` | See source or linked demo |
| `open` | None |
| `update:modelValue` | Selected key for single selection or an array of keys for multiple selection. |
| `updateData` | See source or linked demo |

Vue model bindings: `v-model`.

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `fixedPlaceholder` | `{ dataKeyByKeyId, modelValue }` | — |
| `Option slot (slotName)` | `{ id, item, itemIndex, label, labelFiltered, inDropdown }` | — |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ui/ASelect/ASelect.js)
