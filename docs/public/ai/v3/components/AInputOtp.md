# AInputOtp

Segmented entry for a verification code.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AInputOtp } from "aloha-vue";
```

[Runnable Vue example](../examples/AInputOtp.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/input-otp)

Use a label and the expected length. Use the finish event for completion and preserve keyboard and paste behavior.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | Forces translation regardless of the `is-translate` flag. |
| `autocomplete` | String | `"one-time-code"` | — | Value of `autocomplete` of the first cell. `one-time-code` lets the browser fill in a code from an SMS. |
| `change` | Function | Default callback | — | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| `charType` | String | `"numeric"` | — | Allowed characters: `numeric`, `alphanumeric` or `any` (without spaces). |
| `dependencies` | Array, Object | `undefined` | — | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| `disabled` | Boolean | `false` | — | Determines whether the component is disabled. If set to true, the component becomes inactive and the user cannot interact with it. |
| `errors` | String, Array | `undefined` | — | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| `errorsClass` | String, Object | `undefined` | — | — |
| `excludeRenderAttributes` | Array | `[]` | — | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final DOM. |
| `extra` | Object | `undefined` | — | Variables for translations. |
| `helpText` | String | `undefined` | — | Help text displayed below the component. Provides the user with additional information or instruction. |
| `htmlId` | String | `undefined` | — | Sets the HTML ID of the element. Can be used to uniquely identify the component on the page. |
| `id` | String, Number | Generated ID | — | The identifier of the component, which can be used to track or refer to the component in the code. |
| `idPrefix` | String | `undefined` | — | Prefix for the component's ID. Used to create a unique identifier based on the specified prefix. |
| `inputAttributes` | Object | `{}` | — | An object of attributes applied directly to the input element. Allows adding or customizing additional input attributes. |
| `inputClass` | String, Object | `undefined` | — | CSS class(es) applied to the input element. Allows styling the component according to your requirements. |
| `inputmode` | String | `undefined` | — | Keyboard on mobile devices (`inputmode` of the cells). By default `numeric` for char-type `numeric`, otherwise `text`. |
| `isHide` | Boolean | `false` | — | Determines whether the component should be hidden. If set to true, the component is not displayed on the page. |
| `isRender` | Boolean | `true` | — | Indicates whether the component should be rendered. If set to false, the component will not be created in the DOM. |
| `isUppercase` | Boolean | `false` | — | Converts letters to upper case. |
| `label` | String, Number | `undefined` | — | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| `labelClass` | String, Object | `undefined` | — | CSS class(es) applied to the label. Allows customizing the label's style. |
| `labelDescription` | String | `undefined` | — | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| `labelScreenReader` | String, Number | `undefined` | — | Label intended for screen readers. Useful for improving accessibility. |
| `length` | Number | `6` | — | Number of cells. |
| `mask` | Boolean | `false` | — | Hides the characters (`type="password"`). |
| `modelDependencies` | Object | `{}` | — | Determines model dependencies that may affect the visibility or behavior of the component. |
| `modelUndefined` | String, Number, Object, Array, Boolean | `""` | — | The value used to reset the model to an undefined state. Useful for clearing the model value. |
| `modelValue` | String, Number | `undefined` | — | The current model value associated with the component. Used to manage the data displayed in the component. |
| `placeholder` | String | `undefined` | — | Character that is shown in every empty cell. |
| `readonly` | Boolean | `false` | — | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| `readonlyDefault` | String | `""` | — | The default text that is shown if the value is missing in read-only mode. |
| `readonlyMaskSymbol` | String | `"*"` | — | Symbol that is shown in read-only mode for every character if `mask` is set. |
| `readonlyValueParentClass` | String, Object, Array | `undefined` | — | — |
| `required` | Boolean | `false` | — | Indicates whether the component is required. If set to true, the component requires user input. |
| `separator` | String, Function | `undefined` | — | Separator between the cells: a string or a function `({ index }) => string`. |
| `size` | String | `undefined` | — | Size of the cells: `small` or `large`. |
| `type` | String | `"otp"` | — | Type of the form element. Used by AForm to choose the component. |
| `validator` | Function | `undefined` | — | Function `({ char, index }) => Boolean` that checks every character. Replaces char-type. |
| `variant` | String | `"outlined"` | — | Look of the cells: `outlined`, `filled` or `underlined`. |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `blur` | `{ event, props }` |
| `finish` | `{ model }` |
| `focus` | `{ event, props }` |
| `update:modelValue` | Updated value |

Vue model bindings: `v-model`.

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `separator` | `{ index }` | Content of the separator after the cell with the index. Slot props: `{ index }`. |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ui/AInputOtp/AInputOtp.js)
