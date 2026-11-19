# ARadio

Single selection over a list or grouped options.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { ARadio } from "aloha-vue";
```

[Runnable Vue example](../examples/ARadio.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/radio)

Bind the selected option key and label the group.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `undefined` | — | Forces translation regardless of the `is-translate` flag. |
| `apiSaveId` | String | `undefined` | — | A unique identifier for saving data retrieved from the API. This can be useful for caching or reusing data within a session. |
| `attributesFieldset` | Object | `{}` | — | HTML attributes to be added to the fieldset tag. |
| `change` | Function | Default callback | — | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| `classButtonGroupDefault` | String, Object, Array | `"a_btn a_btn_outline_primary"` | — | Default CSS classes that will be applied to the buttons in the group. These classes can be used to style the buttons in the checkbox or radio button group. |
| `classDataParent` | String, Object | `undefined` | — | CSS classes that are applied to the parent data container. This allows customizing the appearance of the container that holds the data items. |
| `classFieldset` | String, Object | `undefined` | — | CSS classes that will be applied to the fieldset tag containing the group of controls. This allows customizing the appearance of the group of form elements. |
| `collapsible` | Boolean | `undefined` | — | Specifies whether the group of checkboxes can be collapsed and expanded. If set to true, the group can be toggled by the user. |
| `data` | Array | `undefined` | — | An array of data used to generate the items. |
| `dataExtra` | Array | `[]` | — | An additional array of items not included in the main data array. Its items support the same grouping configuration as data through key-group and the related group props. |
| `dependencies` | Array, Object | `undefined` | — | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| `disabled` | Boolean | `undefined` | — | Determines whether the component is disabled. If set to true, the component becomes inactive and the user cannot interact with it. |
| `errors` | String, Array | `undefined` | — | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| `errorsClass` | String, Object | `undefined` | — | — |
| `excludeRenderAttributes` | Array | `[]` | — | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final DOM. |
| `extra` | Object | `undefined` | — | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like "_WELCOME_{{foo}}_{{bar}}_", which is translated as "Welcome {{ foo }}: {{ bar }}", you can pass an object like { foo: "abc", bar: "123" }, and the result will be the translation "Welcome abc: 123". |
| `hasBorder` | Boolean | `true` | — | Specifies whether the item should have a border. If set to true, a border will be displayed around the item. |
| `helpText` | String | `undefined` | — | Help text displayed below the component. Provides the user with additional information or instruction. |
| `htmlId` | String | `undefined` | — | Sets the HTML ID of the element. Can be used to uniquely identify the component on the page. |
| `id` | String, Number | Generated ID | — | The identifier of the component, which can be used to track or refer to the component in the code. |
| `idPrefix` | String | `undefined` | — | Prefix for the component's ID. Used to create a unique identifier based on the specified prefix. |
| `inline` | Boolean | `undefined` | — | Specifies whether the checkboxes should be displayed inline. If set to true, the checkboxes will be aligned horizontally. |
| `isButtonGroup` | Boolean | `undefined` | — | Specifies whether the checkboxes should be displayed as buttons. If set to true, the checkboxes will be displayed as buttons, which can provide a more visually appealing interface. |
| `isCollapsed` | Boolean | `undefined` | — | Specifies the initial collapsed state of the checkbox group. If set to true, the group will be collapsed when the page loads. |
| `isDataSimpleArray` | Boolean | `undefined` | — | Determines whether the data array is a simple array of values. If set to true, each element of the array will be treated as a simple value without keys. |
| `isHide` | Boolean | `undefined` | — | Determines whether the component should be hidden. If set to true, the component is not displayed on the page. |
| `isModelArray` | Boolean | `undefined` | — | Allows the use of an array (Array) as the model. |
| `isRender` | Boolean | `true` | — | Indicates whether the component should be rendered. If set to false, the component will not be created in the DOM. |
| `isWidthAuto` | Boolean | `undefined` | — | Specifies whether the width of the checkbox group should automatically adjust to its content. If set to true, the width will adjust automatically. |
| `keyDisabled` | String | `undefined` | — | Specifies the key in the data object that determines whether the item will be disabled (unselectable). |
| `keyDisabledCallback` | Function | `undefined` | — | A function to determine whether an item should be disabled. Returns `true` to disable a specific item. Accepts an object with item data: `{ item }`. |
| `keyGroup` | String, Number, Array | `undefined` | — | A key or array of keys used to group data by specific categories. This property allows grouping items into groups. |
| `keyGroupLabelCallback` | Function | `undefined` | — | A callback function that takes two arguments ({ group, item }) and returns the group name. It is used to dynamically determine group names based on the provided data. |
| `keyId` | String | `"value"` | — | The key in the data object that will be used as the identifier for each item. |
| `keyLabel` | String | `"label"` | — | The key in the data object that specifies the label text for each item. |
| `keyLabelCallback` | Function | `undefined` | — | A callback function used to generate the label text based on the item data. This allows dynamically creating labels based on complex logic. |
| `keyTitle` | String | `undefined` | — | The key in the data object that specifies the title for each item. |
| `keyTitleCallback` | Function | `undefined` | — | A callback function used to generate the title based on the item data. This allows dynamically creating titles based on complex logic. |
| `label` | String, Number | `undefined` | — | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| `labelClass` | String, Object | `undefined` | — | CSS class(es) applied to the label. Allows customizing the label's style. |
| `labelDescription` | String | `undefined` | — | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| `labelScreenReader` | String, Number | `undefined` | — | Label intended for screen readers. Useful for improving accessibility. |
| `loading` | Boolean | `undefined` | — | Indicates whether the item is in a loading state. If set to true, the item displays a loading indicator. |
| `mergeData` | Boolean | `false` | — | Determines whether internally loaded data is merged with the data prop. Items are merged by their ID; when both sources contain the same ID, the internally loaded item takes precedence. If set to false, internally loaded data replaces the data prop. |
| `modelDependencies` | Object | `{}` | — | Determines model dependencies that may affect the visibility or behavior of the component. |
| `modelUndefined` | String, Number, Object, Array, Boolean | `null` | — | The value used to reset the model to an undefined state. Useful for clearing the model value. |
| `modelValue` | String, Number, Boolean, Array | `undefined` | — | The current model value associated with the component. Used to manage the data displayed in the component. |
| `readonly` | Boolean | `false` | — | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| `readonlyDefault` | String | `""` | — | The default text that is shown if the value is missing in read-only mode. |
| `readonlyValueParentClass` | String, Object, Array | `undefined` | — | — |
| `required` | Boolean | `undefined` | — | Indicates whether the component is required. If set to true, the component requires user input. |
| `search` | Boolean | `undefined` | — | Determines whether the search feature is supported. If set to true, users will be able to search within the group. |
| `searchApi` | Boolean | `undefined` | — | Specifies whether item searches will be performed using an API. If set to true, data will be loaded from the server as the query is entered. |
| `searchApiKey` | String | `undefined` | — | The key used to perform the search via API. Typically, this is a parameter passed in the server request to filter the data. |
| `searchInGroup` | Boolean | `undefined` | — | Enables additional search by group names. |
| `searchOutside` | Boolean | `undefined` | — | Determines whether the search will be performed outside the component, for example, via API or another external data source. |
| `searchTextInHtml` | Boolean | `false` | — | If set to `true`, the search will be performed on the text extracted from the rendered HTML. This allows searching only visible text shown to the user, ignoring tags and attributes. |
| `searchTimeout` | Number | `0` | — | Specifies the delay time in milliseconds before performing the search. Useful for preventing excessive requests during fast text input by the user. |
| `slotAppendName` | String | `undefined` | — | The name of the slot that will be appended after the component's main content. This allows extending the functionality of the component by adding custom content. |
| `slotName` | String | `undefined` | — | The name of the main slot used to insert custom content into the component. |
| `sortOrder` | String | `undefined` | — | Specifies the sort order of items. Possible values: asc (ascending) or desc (descending). |
| `sortOrderGroup` | String | `undefined` | — | Specifies the sort order of groups if the items are grouped. Possible values: asc (ascending) or desc (descending). |
| `texts` | Object | Built-in configuration | — | Allows customization of text messages for various actions within the component. This includes texts for collapsing/expanding (collapseClose and collapseOpen), messages for no elements found during search (notElementsWithSearch), and the search field text (search). |
| `translateData` | Boolean | `undefined` | — | Indicates whether the data should be translated before display. If set to true, text values will be translated according to the current language settings. |
| `translateGroup` | Boolean | `false` | — | — |
| `url` | String | `undefined` | — | URL used to load the component’s options. Supports `{{ path }}` placeholders resolved from `url-template-data`. |
| `urlParams` | Object | `undefined` | — | Parameters that will be added to the URL request when loading data from the server. These parameters allow filtering or modifying the data retrieved from the API. |
| `urlRetrieve` | String | `undefined` | — | An optional URL used specifically to retrieve already selected values that are missing from the main loaded list. |
| `urlRetrieveParams` | Object | `undefined` | — | Optional parameters that will be added only to the retrieve request used for loading missing selected values. |
| `urlTemplateData` | Object | `undefined` | — | Object with values for `{{ path }}` placeholders in `url`, including nested paths such as `{{ source.file }}`. Uses the same placeholder syntax as translations. Changing these values reloads the options and clears the selection only when the resolved URL changes. Does not affect URLs without placeholders; query parameters are passed separately via `url-params`. |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `focusin` | See source or linked demo |
| `focusout` | See source or linked demo |
| `onSearchOutside` | See source or linked demo |
| `toggleCollapse` | See source or linked demo |
| `update:modelValue` | Updated value |
| `updateData` | See source or linked demo |

Vue model bindings: `v-model`.

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ui/ARadio/ARadio.js)
