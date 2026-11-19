# AInputNumber

Numeric input with optional increment and decrement controls.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AInputNumber } from "aloha-vue";
```

[Runnable Vue example](../examples/AInputNumber.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/input-number)

Use numeric limits and step. Keep the visible label associated with the input.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | Forces translation regardless of the `is-translate` flag. |
| `autocomplete` | String | `undefined` | — | Specifies whether the field should support autocomplete, similar to the autocomplete attribute in HTML. |
| `change` | Function | Default callback | — | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| `clearButtonClass` | String, Object | `undefined` | — | Specifies the CSS class that will be applied to the clear button. This allows customization of the button's appearance according to design requirements. |
| `controlsType` | String | `"plus-minus"` (plugin default) | — | — |
| `dependencies` | Array, Object | `undefined` | — | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| `disabled` | Boolean | `false` | — | Determines whether the component is disabled. If set to true, the component becomes inactive and the user cannot interact with it. |
| `eAllowed` | Boolean | `false` (plugin default) | — | — |
| `errorIcon` | String, Object | `undefined` | — | Specifies the icon displayed when the component has validation errors. If the component has an input field, the icon is shown inside it; otherwise, it is displayed next to the control. The icon is shown only when errors is present. |
| `errors` | String, Array | `undefined` | — | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| `errorsAll` | Object | `{}` | — | An object containing errors for all child elements passed through children. Each error should be specified for the corresponding element by its id. |
| `errorsClass` | String, Object | `undefined` | — | — |
| `excludeRenderAttributes` | Array | `[]` | — | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final DOM. |
| `extra` | Object | `undefined` | — | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like "_WELCOME_{{foo}}_{{bar}}_", which is translated as "Welcome {{ foo }}: {{ bar }}", you can pass an object like { foo: "abc", bar: "123" }, and the result will be the translation "Welcome abc: 123". |
| `helpText` | String | — | — | Help text displayed below the component. Provides the user with additional information or instruction. |
| `htmlId` | String | `undefined` | — | Sets the HTML ID of the element. Can be used to uniquely identify the component on the page. |
| `iconPrepend` | String | `undefined` (plugin default) | — | Specifies the icon that will be displayed before the input field. This icon can be used to enhance the visual perception or indicate the type of input data. |
| `id` | String, Number | Generated ID | — | The identifier of the component, which can be used to track or refer to the component in the code. |
| `idPrefix` | String | `undefined` | — | Prefix for the component's ID. Used to create a unique identifier based on the specified prefix. |
| `inputAttributes` | Object | `{}` | — | An object of attributes applied directly to the input element. Allows adding or customizing additional input attributes. |
| `inputClass` | Any | — | — | CSS class(es) applied to the input element. Allows styling the component according to your requirements. |
| `inputWidth` | String, Number | `200` (plugin default) | — | — |
| `isClearButton` | Boolean | `true` | — | Determines whether the clear button should be displayed. If true, a button will be shown next to the text field, allowing the user to clear its content. |
| `isHide` | Boolean | `false` | — | Determines whether the component should be hidden. If set to true, the component is not displayed on the page. |
| `isLabelFloat` | Boolean | `undefined` | — | Determines whether the label of the component should be positioned above the field. If true, the label will move above the text field when focused or when content is present. Deprecated, use label-position. |
| `isRender` | Boolean | `true` | — | Indicates whether the component should be rendered. If set to false, the component will not be created in the DOM. |
| `label` | String, Number | `undefined` | — | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| `labelClass` | Any | `undefined` | — | CSS class(es) applied to the label. Allows customizing the label's style. |
| `labelDescription` | String | `undefined` | — | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| `labelPosition` | String | `undefined` | — | Position of the label: "float", "inset" or "top". The default comes from the component plugin or AFormPlugin (labelPosition). |
| `labelScreenReader` | String | `undefined` | — | Label intended for screen readers. Useful for improving accessibility. |
| `max` | Number | `undefined` (plugin default) | — | — |
| `min` | Number | `undefined` (plugin default) | — | — |
| `modelDependencies` | Object | `{}` | — | Determines model dependencies that may affect the visibility or behavior of the component. |
| `modelUndefined` | Any | `undefined` (plugin default) | — | The value used to reset the model to an undefined state. Useful for clearing the model value. |
| `modelValue` | String, Number | — | — | The current model value associated with the component. Used to manage the data displayed in the component. |
| `options` | Object | `{}` | — | Additional data object available within the component, in slots, or custom logic. |
| `placeholder` | String, Number, Object | `undefined` (plugin default) | — | Specifies the placeholder text that will be displayed in the input field until the user enters data. The placeholder helps the user understand what data is expected in the field. |
| `precision` | Number | `undefined` (plugin default) | — | — |
| `readonly` | Boolean | `false` | — | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| `readonlyDefault` | String | `""` | — | The default text that is shown if the value is missing in read-only mode. |
| `readonlyValueParentClass` | String, Object, Array | `undefined` | — | — |
| `required` | Boolean | `false` | — | Indicates whether the component is required. If set to true, the component requires user input. |
| `step` | Number | `1` (plugin default) | — | Used for number or integer types. Specifies the step for changing the value, for example, when increasing or decreasing the number using keyboard arrows. |
| `stepStrictly` | Boolean | `undefined` (plugin default) | — | — |
| `type` | String | `"number"` (plugin default) | — | Defines the type of input value. Various data types are supported, such as text, password, number, integer, email, and others. |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `blur` | See source or linked demo |
| `focus` | See source or linked demo |
| `update:modelValue` | Updated numeric value |

Vue model bindings: `v-model`.

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ui/AInputNumber/AInputNumber.js)
