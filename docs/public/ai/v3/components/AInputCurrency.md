# AInputCurrency

Currency input with locale-independent model and configurable formatting.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AInputCurrency } from "aloha-vue";
```

[Runnable Vue example](../examples/AInputCurrency.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/input-currency)

Keep the display symbol and separators separate from the stored model. The modelType prop controls which representation is emitted.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | Forces translation regardless of the `is-translate` flag. |
| `autocomplete` | String | `undefined` | — | Specifies whether the field should support autocomplete, similar to the autocomplete attribute in HTML. |
| `change` | Function | Default callback | — | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| `clearButtonClass` | String, Object | `undefined` | — | Specifies the CSS class that will be applied to the clear button. This allows customization of the button's appearance according to design requirements. |
| `controlsType` | String | `"none"` (plugin default) | — | Defines the type of control elements that will be displayed next to the input field. Possible values are: plus-minus (increment and decrement buttons), arrows (arrows for changing values), or none (no control elements). |
| `currencySymbol` | String | `"€"` (plugin default) | — | Specifies the currency symbol that will be displayed in the input field, such as $, €, or ₽. |
| `currencySymbolPosition` | String | `"right"` (plugin default) | — | Determines the position of the currency symbol relative to the entered value. Possible values are: left (to the left of the value) or right (to the right of the value). |
| `decimalDivider` | String | `","` (plugin default) | — | Specifies the symbol that will be used as the decimal separator. Possible values are . (period) or , (comma). |
| `decimalPartLength` | Number | `2` (plugin default) | — | Defines the number of digits after the decimal separator that will be displayed in the value. |
| `dependencies` | Array, Object | `undefined` | — | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| `disabled` | Boolean | `false` | — | Determines whether the component is disabled. If set to true, the component becomes inactive and the user cannot interact with it. |
| `errorIcon` | String, Object | `undefined` | — | Specifies the icon displayed when the component has validation errors. If the component has an input field, the icon is shown inside it; otherwise, it is displayed next to the control. The icon is shown only when errors is present. |
| `errors` | String, Array | `undefined` | — | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| `errorsClass` | String, Object | `undefined` | — | — |
| `excludeRenderAttributes` | Array | `[]` | — | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final DOM. |
| `extra` | Object | `undefined` | — | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like "_WELCOME_{{foo}}_{{bar}}_", which is translated as "Welcome {{ foo }}: {{ bar }}", you can pass an object like { foo: "abc", bar: "123" }, and the result will be the translation "Welcome abc: 123". |
| `helpText` | String | `undefined` | — | Help text displayed below the component. Provides the user with additional information or instruction. |
| `htmlId` | String | `undefined` | — | Sets the HTML ID of the element. Can be used to uniquely identify the component on the page. |
| `iconPrepend` | String | `undefined` (plugin default) | — | Specifies the icon that will be displayed before the input field. This icon can be used to enhance the visual perception or indicate the type of input data. |
| `id` | String, Number | Generated ID | — | The identifier of the component, which can be used to track or refer to the component in the code. |
| `idPrefix` | String | `undefined` | — | Prefix for the component's ID. Used to create a unique identifier based on the specified prefix. |
| `inputAttributes` | Object | `{}` | — | An object of attributes applied directly to the input element. Allows adding or customizing additional input attributes. |
| `inputClass` | String, Object | `undefined` | — | CSS class(es) applied to the input element. Allows styling the component according to your requirements. |
| `inputWidth` | String, Number | `200` (plugin default) | — | Sets the width of the input field. The value can be specified in pixels or percentages. |
| `integerPartMaxLength` | Number | `15` (plugin default) | — | Defines the maximum length of the integer part of the value, expressed in the number of digits. |
| `isClearButton` | Boolean | `true` | — | Determines whether the clear button should be displayed. If true, a button will be shown next to the text field, allowing the user to clear its content. |
| `isHide` | Boolean | `false` | — | Determines whether the component should be hidden. If set to true, the component is not displayed on the page. |
| `isLabelFloat` | Boolean | `undefined` | — | Determines whether the label of the component should be positioned above the field. If true, the label will move above the text field when focused or when content is present. Deprecated, use label-position. |
| `isRender` | Boolean | `true` | — | Indicates whether the component should be rendered. If set to false, the component will not be created in the DOM. |
| `label` | String, Number | `undefined` | — | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| `labelClass` | String, Object | `undefined` | — | CSS class(es) applied to the label. Allows customizing the label's style. |
| `labelDescription` | String | `undefined` | — | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| `labelPosition` | String | `undefined` | — | Position of the label: "float", "inset" or "top". The default comes from the component plugin or AFormPlugin (labelPosition). |
| `labelScreenReader` | String, Number | `undefined` | — | Label intended for screen readers. Useful for improving accessibility. |
| `max` | Number | `999999999999999` (plugin default) | — | Specifies the maximum value that can be entered in the field. |
| `min` | Number | `undefined` (plugin default) | — | Specifies the minimum value that can be entered in the field. |
| `modelDependencies` | Object | `{}` | — | Determines model dependencies that may affect the visibility or behavior of the component. |
| `modelType` | String | `"number"` | — | Determines the type of data that will be stored in the model. Possible values are number (numeric value) or string (string value). |
| `modelUndefined` | Any | `undefined` (plugin default) | — | The value used to reset the model to an undefined state. Useful for clearing the model value. |
| `modelValue` | String, Number | — | — | The current model value associated with the component. Used to manage the data displayed in the component. |
| `placeholder` | String, Number, Object | `undefined` (plugin default) | — | Specifies the placeholder text that will be displayed in the input field until the user enters data. The placeholder helps the user understand what data is expected in the field. |
| `readonly` | Boolean | `false` | — | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| `readonlyDefault` | String | `""` | — | The default text that is shown if the value is missing in read-only mode. |
| `readonlyValueParentClass` | String, Object, Array | `undefined` | — | — |
| `required` | Boolean | `false` | — | Indicates whether the component is required. If set to true, the component requires user input. |
| `skipRequiredModelInit` | Boolean | `false` | — | — |
| `step` | Number | `1` (plugin default) | — | Used for number or integer types. Specifies the step for changing the value, for example, when increasing or decreasing the number using keyboard arrows. |
| `thousandDivider` | String | `"."` (plugin default) | — | Specifies the symbol used for separating thousands in the value. Possible values are . (period), , (comma), or an empty string (no separator). |
| `validationOnChange` | Boolean | `false` | — | If set to true, validation of the entered value will be performed with each change in the field. |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `blur` | See source or linked demo |
| `focus` | See source or linked demo |
| `update:modelValue` | Updated value |

Vue model bindings: `v-model`.

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ui/AInputCurrency/AInputCurrency.js)
