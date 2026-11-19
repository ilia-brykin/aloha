# AFormElement

Renders a single schema-driven form control.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AFormElement } from "aloha-vue";
```

[Runnable Vue example](../examples/AFormElement.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/form-element)

Pass the library field type, such as text, and bind the model of that field. For a native form submit action use the parent form.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | Forces translation regardless of the `is-translate` flag. |
| `change` | Function | Default callback | — | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| `dependencies` | Array, Object | `undefined` | — | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| `disabled` | Boolean | `undefined` | — | Determines whether the component is disabled. If set to true, the component becomes inactive and the user cannot interact with it. |
| `errorIcon` | String, Object | `undefined` | — | Specifies the icon displayed when the component has validation errors. If the component has an input field, the icon is shown inside it; otherwise, it is displayed next to the control. The icon is shown only when errors is present. |
| `errors` | String, Array | `undefined` | — | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| `errorsClass` | String, Object | `undefined` | — | — |
| `excludeRenderAttributes` | Array | `[]` | — | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final DOM. |
| `extra` | Object | `undefined` | — | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like "_WELCOME_{{foo}}_{{bar}}_", which is translated as "Welcome {{ foo }}: {{ bar }}", you can pass an object like { foo: "abc", bar: "123" }, and the result will be the translation "Welcome abc: 123". |
| `helpText` | String | `undefined` | — | Help text displayed below the component. Provides the user with additional information or instruction. |
| `htmlId` | String | `undefined` | — | Sets the HTML ID of the element. Can be used to uniquely identify the component on the page. |
| `id` | String, Number | `undefined` | — | The identifier of the component, which can be used to track or refer to the component in the code. |
| `idPrefix` | String | `undefined` | — | Prefix for the component's ID. Used to create a unique identifier based on the specified prefix. |
| `isHide` | Boolean | `undefined` | — | Determines whether the component should be hidden. If set to true, the component is not displayed on the page. |
| `isRender` | Boolean | `true` | — | Indicates whether the component should be rendered. If set to false, the component will not be created in the DOM. |
| `label` | String, Number | `undefined` | — | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| `labelClass` | String, Object | `undefined` | — | CSS class(es) applied to the label. Allows customizing the label's style. |
| `labelDescription` | String | `undefined` | — | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| `labelScreenReader` | String, Number | `undefined` | — | Label intended for screen readers. Useful for improving accessibility. |
| `modelDependencies` | Object | `{}` | — | Determines model dependencies that may affect the visibility or behavior of the component. |
| `modelValue` | Any | `undefined` | — | The current model value associated with the component. Used to manage the data displayed in the component. |
| `options` | Object | `{}` | — | An object with additional parameters to be passed to the component specified in the type parameter. Useful for passing any props not explicitly described in AFormElement but supported by the rendered component. |
| `readonly` | Boolean | `false` | — | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| `readonlyDefault` | String | `""` | — | The default text that is shown if the value is missing in read-only mode. |
| `readonlyValueParentClass` | String, Object, Array | `undefined` | — | — |
| `required` | Boolean | `false` | — | Indicates whether the component is required. If set to true, the component requires user input. |
| `type` | String | — | Yes | The type of component to render. Used to select the appropriate form element, for example: input, select, checkbox, group, fieldset, etc. |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `update:modelValue` | `model` |

Vue model bindings: `v-model`.

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ui/AFormElement/AFormElement.js)
