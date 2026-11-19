# AFieldset

Form fields grouped under a fieldset legend.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AFieldset } from "aloha-vue";
```

[Runnable Vue example](../examples/AFieldset.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/fieldset)

Provide a meaningful group label and unique IDs for the child form definitions.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `undefined` | — | Forces translation regardless of the `is-translate` flag. |
| `attributesFieldset` | Object | `{}` | — | HTML attributes to be added to the fieldset tag. |
| `change` | Function | Default callback | — | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| `children` | Array | `[]` | — | An array of child elements that will be rendered inside the component. Each element in the array is an object with parameters such as type, label, id, and other properties for configuring and displaying the child element. |
| `classColumnDefault` | String, Object | `"a_column a_column_12"` | — | Sets a CSS class for all child elements unless a separate classColumn is specified for a specific element in the children array. This makes it easy to manage the display of all child elements at once. |
| `classColumns` | String, Object | `"a_columns a_columns_count_12"` | — | CSS classes that will be applied to the container where child elements from the children prop are placed. These classes control the number of columns, spacing between them, and their responsive behavior. |
| `classFieldset` | String, Object | `undefined` | — | CSS classes that will be applied to the fieldset tag containing the group of controls. This allows customizing the appearance of the group of form elements. |
| `collapsible` | Boolean | `undefined` | — | Specifies whether the group of checkboxes can be collapsed and expanded. If set to true, the group can be toggled by the user. |
| `dependencies` | Array, Object | `undefined` | — | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| `disabled` | Boolean | `undefined` | — | Determines whether the component is disabled. If set to true, the component becomes inactive and the user cannot interact with it. |
| `errors` | String, Array, Object | `undefined` | — | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| `errorsAll` | Object | `{}` | — | An object containing errors for all child elements passed through children. Each error should be specified for the corresponding element by its id. |
| `errorsClass` | String, Object | `undefined` | — | — |
| `excludeRenderAttributes` | Array | `[]` | — | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final DOM. |
| `extra` | Object | `undefined` | — | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like "_WELCOME_{{foo}}_{{bar}}_", which is translated as "Welcome {{ foo }}: {{ bar }}", you can pass an object like { foo: "abc", bar: "123" }, and the result will be the translation "Welcome abc: 123". |
| `hasBorder` | Boolean | `true` | — | Specifies whether the item should have a border. If set to true, a border will be displayed around the item. |
| `helpText` | String | `undefined` | — | Help text displayed below the component. Provides the user with additional information or instruction. |
| `htmlId` | String | `undefined` | — | Sets the HTML ID of the element. Can be used to uniquely identify the component on the page. |
| `id` | String, Number | Generated ID | — | The identifier of the component, which can be used to track or refer to the component in the code. |
| `idPrefix` | String | `undefined` | — | Prefix for the component's ID. Used to create a unique identifier based on the specified prefix. |
| `isCollapsed` | Boolean | `undefined` | — | Specifies the initial collapsed state of the checkbox group. If set to true, the group will be collapsed when the page loads. |
| `isHide` | Boolean | `undefined` | — | Determines whether the component should be hidden. If set to true, the component is not displayed on the page. |
| `isRender` | Boolean | `true` | — | Indicates whether the component should be rendered. If set to false, the component will not be created in the DOM. |
| `label` | String, Number | `undefined` | — | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| `labelClass` | String, Object | `undefined` | — | CSS class(es) applied to the label. Allows customizing the label's style. |
| `labelDescription` | String | `undefined` | — | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| `labelScreenReader` | String, Number | `undefined` | — | Label intended for screen readers. Useful for improving accessibility. |
| `labelTitle` | String, Number | `undefined` | — | — |
| `modelAll` | Object | `undefined` | — | — |
| `modelDependencies` | Object | `{}` | — | Determines model dependencies that may affect the visibility or behavior of the component. |
| `modelValue` | Object | `{}` | — | The current model value associated with the component. Used to manage the data displayed in the component. |
| `parentId` | Array | `[]` | — | — |
| `readonly` | Boolean | `false` | — | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| `readonlyDefault` | String | `""` | — | The default text that is shown if the value is missing in read-only mode. |
| `readonlyValueParentClass` | String, Object, Array | `undefined` | — | — |
| `required` | Boolean | `false` | — | Indicates whether the component is required. If set to true, the component requires user input. |
| `skipOwnIdInModelPath` | Boolean | `false` | — | — |
| `slotName` | String | `undefined` | — | The name of the main slot used to insert custom content into the component. |
| `slotNamePrepend` | String | `undefined` | — | — |
| `texts` | Object | `{"collapseClose":"_A_FIELDSET_COLLAPSE_CLOSE_","collapseOpen":"_A_FIELDSET_COLLAPSE_OPEN_"}` | — | Allows you to customize the text for the collapse and expand actions of the component. By default, _A_FIELDSET_COLLAPSE_CLOSE_ is used for closing and _A_FIELDSET_COLLAPSE_OPEN_ for opening. |
| `useFlatErrors` | Boolean | `true` | — | — |
| `useFlatModel` | Boolean | `true` | — | — |
| `useHtmlIdAsKey` | Boolean | `false` | — | Use htmlId instead of the index as the key for form elements |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `toggleCollapse` | See source or linked demo |
| `update:modelValue` | `MODEL_VALUE` / `model` |
| `updateData` | `{ item, dataKeyByKeyId }` |

Vue model bindings: `v-model`.

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ui/AFieldset/AFieldset.js)
