# AMultiselectOrdered

Multi-selection input with an explicitly ordered selection.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AMultiselectOrdered } from "aloha-vue";
```

[Runnable Vue example](../examples/AMultiselectOrdered.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/multiselect-ordered)

Bind an array of selected keys in display order. Preserve the move controls when customizing the rows.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | Forces translation regardless of the `is-translate` flag. |
| `apiSaveId` | String | `undefined` | — | A unique identifier for saving data retrieved from the API. This can be useful for caching or reusing data within a session. |
| `attributesBtnDeselectAll` | Object | `{}` (plugin default) | — | Attributes and props passed to the AElement component used for the “Deselect All” button. They allow customizing the behavior, appearance, and accessibility of the button. |
| `attributesBtnSelectAll` | Object | `{}` (plugin default) | — | Attributes and props passed to the AElement component used for the “Select All” button. They allow customizing the display, behavior, and accessibility of the button. |
| `attributesFieldset` | Object | `{}` (plugin default) | — | HTML attributes to be added to the fieldset tag. |
| `btnDeleteClass` | String, Object | `"a_btn a_btn_primary"` (plugin default) | — | CSS class for the delete button of an item in the selected list. |
| `btnDeleteIcon` | String | Built-in SVG (plugin default) | — | Icon for the item delete button. |
| `btnDownClass` | String, Object | `"a_btn a_btn_outline_secondary"` (plugin default) | — | CSS class for the button to move an item closer to the end of the list. |
| `btnDownIcon` | String | Built-in SVG (plugin default) | — | Icon for the button to move an item closer to the end of the list. |
| `btnGroupClass` | String, Object, Array | `"a_btn_group"` (plugin default) | — | CSS class for the container of the control buttons for the selected item. |
| `btnUpClass` | String, Object | `"a_btn a_btn_outline_secondary"` (plugin default) | — | CSS class for the button to move an item closer to the beginning of the list. |
| `btnUpIcon` | String | Built-in SVG (plugin default) | — | Icon for the button to move an item closer to the beginning of the list. |
| `change` | Function | Default callback | — | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| `classFieldset` | String, Object | `undefined` (plugin default) | — | CSS classes that will be applied to the fieldset tag containing the group of controls. This allows customizing the appearance of the group of form elements. |
| `data` | Array | `undefined` | — | An array of data used to generate the items. |
| `dataExtra` | Array | `[]` | — | An additional array of items not included in the main data array. Its items support the same grouping configuration as data through key-group and the related group props. |
| `dependencies` | Array, Object | `undefined` | — | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| `disabled` | Boolean | `false` | — | Determines whether the component is disabled. If set to true, the component becomes inactive and the user cannot interact with it. |
| `errors` | String, Array | `undefined` | — | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| `errorsClass` | String, Object | `undefined` | — | — |
| `excludeRenderAttributes` | Array | `[]` | — | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final DOM. |
| `extra` | Object | `undefined` | — | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like "_WELCOME_{{foo}}_{{bar}}_", which is translated as "Welcome {{ foo }}: {{ bar }}", you can pass an object like { foo: "abc", bar: "123" }, and the result will be the translation "Welcome abc: 123". |
| `hasBorder` | Boolean | `true` (plugin default) | — | Specifies whether the item should have a border. If set to true, a border will be displayed around the item. |
| `helpText` | String | — | — | Help text displayed below the component. Provides the user with additional information or instruction. |
| `htmlId` | String | `undefined` | — | Sets the HTML ID of the element. Can be used to uniquely identify the component on the page. |
| `id` | String, Number | Generated ID | — | The identifier of the component, which can be used to track or refer to the component in the code. |
| `idPrefix` | String | `undefined` | — | Prefix for the component's ID. Used to create a unique identifier based on the specified prefix. |
| `isDataSimpleArray` | Boolean | `undefined` | — | Determines whether the data array is a simple array of values. If set to true, each element of the array will be treated as a simple value without keys. |
| `isDeselectAll` | Boolean | `false` (plugin default) | — | Display the button. Clicking it will deselect all items in the list. |
| `isHide` | Boolean | `false` | — | Determines whether the component should be hidden. If set to true, the component is not displayed on the page. |
| `isRender` | Boolean | `true` | — | Indicates whether the component should be rendered. If set to false, the component will not be created in the DOM. |
| `isSelectAll` | Boolean | `false` (plugin default) | — | Display the button. Clicking it will automatically select all items from the list. |
| `keyDisabled` | String | `undefined` (plugin default) | — | Specifies the key in the data object that determines whether the item will be disabled (unselectable). |
| `keyDisabledCallback` | Function | `undefined` | — | A function to determine whether an item should be disabled. Returns `true` to disable a specific item. Accepts an object with item data: `{ item }`. |
| `keyGroup` | String, Number, Array | `undefined` (plugin default) | — | A key or array of keys used to group data by specific categories. This property allows grouping items into groups. |
| `keyGroupLabelCallback` | Function | `undefined` | — | A callback function that takes two arguments ({ group, item }) and returns the group name. It is used to dynamically determine group names based on the provided data. |
| `keyId` | String | `"value"` (plugin default) | — | The key in the data object that will be used as the identifier for each item. |
| `keyLabel` | String | `"label"` (plugin default) | — | The key in the data object that specifies the label text for each item. |
| `keyLabelCallback` | Function | `undefined` | — | A callback function used to generate the label text based on the item data. This allows dynamically creating labels based on complex logic. |
| `label` | String, Number | `undefined` | — | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| `labelClass` | Any | `undefined` (plugin default) | — | CSS class(es) applied to the label. Allows customizing the label's style. |
| `labelDescription` | String | `undefined` | — | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| `labelScreenReader` | String | `undefined` | — | Label intended for screen readers. Useful for improving accessibility. |
| `labelTitle` | String, Number | `undefined` | — | — |
| `listItemClass` | String, Object, Array | `"a_list_group__item"` (plugin default) | — | CSS class for the list item of selected values. |
| `loading` | Boolean | `false` | — | Indicates whether the item is in a loading state. If set to true, the item displays a loading indicator. |
| `mergeData` | Boolean | `false` | — | Determines whether internally loaded data is merged with the data prop. Items are merged by their ID; when both sources contain the same ID, the internally loaded item takes precedence. If set to false, internally loaded data replaces the data prop. |
| `modelDependencies` | Object | `{}` | — | Determines model dependencies that may affect the visibility or behavior of the component. |
| `modelValue` | Array | `[]` | — | The current model value associated with the component. Used to manage the data displayed in the component. |
| `options` | Object | `{}` | — | Additional data object available within the component, in slots, or custom logic. |
| `readonly` | Boolean | `false` | — | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| `readonlyDefault` | String | `""` (plugin default) | — | The default text that is shown if the value is missing in read-only mode. |
| `readonlyValueParentClass` | String, Object, Array | `undefined` | — | — |
| `required` | Boolean | `false` | — | Indicates whether the component is required. If set to true, the component requires user input. |
| `search` | Boolean | `false` (plugin default) | — | Determines whether the search feature is supported. If set to true, users will be able to search within the group. |
| `searchApi` | Boolean | `false` (plugin default) | — | Specifies whether item searches will be performed using an API. If set to true, data will be loaded from the server as the query is entered. |
| `searchApiKey` | String | `undefined` (plugin default) | — | The key used to perform the search via API. Typically, this is a parameter passed in the server request to filter the data. |
| `searchInGroup` | Boolean | `false` (plugin default) | — | Enables additional search by group names. |
| `searchOutside` | Boolean | `false` (plugin default) | — | Determines whether the search will be performed outside the component, for example, via API or another external data source. |
| `searchTextInHtml` | Boolean | `false` (plugin default) | — | If set to `true`, the search will be performed on the text extracted from the rendered HTML. This allows searching only visible text shown to the user, ignoring tags and attributes. |
| `searchTimeout` | Number | `0` (plugin default) | — | Specifies the delay time in milliseconds before performing the search. Useful for preventing excessive requests during fast text input by the user. |
| `selectButtonClass` | String | `undefined` (plugin default) | — | — |
| `selectButtonClassDefault` | String, Object | `"a_form_control a_select_toggle"` (plugin default) | — | — |
| `selectCaretIcon` | String, Object | Built-in SVG (plugin default) | — | — |
| `selectHasCaret` | Boolean | `true` (plugin default) | — | — |
| `selectInBody` | Boolean | `true` (plugin default) | — | — |
| `selectIsCloseByClick` | Boolean | `false` (plugin default) | — | — |
| `selectIsLabelFloat` | Boolean | `true` (plugin default) | — | — |
| `selectIsSelectionCloseable` | Boolean | `true` (plugin default) | — | — |
| `selectLabel` | String, Number | `"_A_MULTISELECT_ORDERED_LABEL_SELECT_"` (plugin default) | — | — |
| `selectLabelClass` | String, Object | `undefined` (plugin default) | — | — |
| `selectLabelPosition` | String | `undefined` (plugin default) | — | — |
| `selectLabelScreenReader` | String | `undefined` | — | — |
| `selectMenuClass` | String, Object | `undefined` (plugin default) | — | — |
| `selectMenuWidthType` | String | `"as_button"` (plugin default) | — | — |
| `selectPlaceholder` | String | `undefined` | — | — |
| `selectPlacement` | String | `"bottom-end"` (plugin default) | — | — |
| `selectPopperContainerId` | String | `"a_select_container"` (plugin default) | — | — |
| `slotName` | String | `undefined` (plugin default) | — | The name of the main slot used to insert custom content into the component. |
| `sortOrder` | String | `"asc"` (plugin default) | — | Specifies the sort order of items. Possible values: asc (ascending) or desc (descending). |
| `sortOrderGroup` | String | `"asc"` (plugin default) | — | Specifies the sort order of groups if the items are grouped. Possible values: asc (ascending) or desc (descending). |
| `texts` | Object | Built-in configuration (plugin default) | — | An object with custom texts to replace default labels such as “Select All”, “Deselect All”, “No items selected”, and others. |
| `translateData` | Boolean | `false` (plugin default) | — | Indicates whether the data should be translated before display. If set to true, text values will be translated according to the current language settings. |
| `translateGroup` | Boolean | `false` (plugin default) | — | — |
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
| `open` | See source or linked demo |
| `update:modelValue` | Updated value |
| `updateData` | See source or linked demo |

Vue model bindings: `v-model`.

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ui/AMultiselectOrdered/AMultiselectOrdered.js)
