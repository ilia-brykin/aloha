# AInputFile

File chooser with optional multiple selection, dropzone and previews.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AInputFile } from "aloha-vue";
```

[Runnable Vue example](../examples/AInputFile.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/input-file)

Provide a clear accessible name. File objects and optional upload state are represented separately from the actual upload request.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `accept` | String | `""` | — | Allowed files: extensions (.pdf), MIME types (application/pdf) and MIME groups (image/*), separated by commas. Checked for chosen and dropped files. |
| `acceptText` | String | `undefined` | — | Own text of the allowed files in the hint instead of the list of accept. |
| `alwaysTranslate` | Boolean | `false` | — | Forces translation regardless of the `is-translate` flag. |
| `change` | Function | Default callback | — | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| `dependencies` | Array, Object | `undefined` | — | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| `disabled` | Boolean | `false` | — | Determines whether the component is disabled. If set to true, the component becomes inactive and the user cannot interact with it. |
| `dropText` | String | `undefined` | — | Text of the dropzone before the link. |
| `errors` | String, Array | `undefined` | — | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| `errorsAll` | Object | `{}` | — | An object containing errors for all child elements passed through children. Each error should be specified for the corresponding element by its id. |
| `errorsClass` | String, Object | `undefined` | — | — |
| `excludeRenderAttributes` | Array | `[]` | — | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final DOM. |
| `extra` | Object | `undefined` | — | Variables for translations. |
| `helpText` | String | — | — | Help text displayed below the component. Provides the user with additional information or instruction. |
| `htmlId` | String | `undefined` | — | Sets the HTML ID of the element. Can be used to uniquely identify the component on the page. |
| `id` | String, Number | Generated ID | — | The identifier of the component, which can be used to track or refer to the component in the code. |
| `idPrefix` | String | `undefined` | — | Prefix for the component's ID. Used to create a unique identifier based on the specified prefix. |
| `inputAttributes` | Object | `{}` | — | An object of attributes applied directly to the input element. Allows adding or customizing additional input attributes. |
| `inputClass` | Any | — | — | CSS class(es) applied to the input element. Allows styling the component according to your requirements. |
| `isAppend` | Boolean | `false` | — | With is-multiple: new files are added to the list instead of replacing it. |
| `isDropzone` | Boolean | `false` | — | Shows an area for dragging and dropping files. |
| `isFileSize` | Boolean | `true` | — | Shows the size of the files in the list. |
| `isHide` | Boolean | `false` | — | Determines whether the component should be hidden. If set to true, the component is not displayed on the page. |
| `isHint` | Boolean | `true` | — | Shows the hint with accept, max-size and max-files. |
| `isLabelFloat` | Boolean | `undefined` | — | Determines whether the label of the component should be positioned above the field. If true, the label will move above the text field when focused or when content is present. Deprecated, use label-position. |
| `isMultiple` | Boolean | `false` | — | Several files can be chosen; the model is an array. |
| `isPreview` | Boolean | `false` | — | Shows a preview of images. |
| `isRemovable` | Boolean | `true` | — | Shows a remove button for every file. |
| `isRender` | Boolean | `true` | — | Indicates whether the component should be rendered. If set to false, the component will not be created in the DOM. |
| `label` | String, Number | `undefined` | — | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| `labelClass` | Any | `undefined` | — | CSS class(es) applied to the label. Allows customizing the label's style. |
| `labelDescription` | String | `undefined` | — | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| `labelPosition` | String | `undefined` | — | Position of the label: "float", "inset" or "top". The default comes from the component plugin or AFormPlugin (labelPosition). |
| `labelScreenReader` | String | `undefined` | — | Label intended for screen readers. Useful for improving accessibility. |
| `maxFiles` | Number | `undefined` | — | With is-multiple: the maximum number of files. |
| `maxSize` | Number | `undefined` | — | The maximum size of a file in bytes. |
| `modelDependencies` | Object | `{}` | — | Determines model dependencies that may affect the visibility or behavior of the component. |
| `modelUndefined` | Any | `""` | — | The value used to reset the model to an undefined state. Useful for clearing the model value. |
| `modelValue` | String, Number, Object, Array | — | — | The current model value associated with the component. Used to manage the data displayed in the component. |
| `options` | Object | `{}` | — | Additional data object available within the component, in slots, or custom logic. |
| `readonly` | Boolean | `false` | — | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| `readonlyDefault` | String | `""` | — | The default text that is shown if the value is missing in read-only mode. |
| `readonlyValueParentClass` | String, Object, Array | `undefined` | — | — |
| `required` | Boolean | `false` | — | Indicates whether the component is required. If set to true, the component requires user input. |
| `text` | String | `undefined` | — | Text of the button. By default «Choose file» or «Choose files». |
| `type` | String | `"input"` | — | Type of the form element. |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `blur` | `{ event, props }` |
| `focus` | `{ event, props }` |
| `reject` | `{ files }` |
| `remove` | `{ model, index }` |
| `update:modelValue` | `model` |

Vue model bindings: `v-model`.

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ui/AInputFile/AInputFile.js)
