# ASwitch

Switch for toggling between two configured values.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { ASwitch } from "aloha-vue";
```

[Runnable Vue example](../examples/ASwitch.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/switch)

Use a label that describes the setting and keep it the same in both states.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | Forces translation regardless of the `is-translate` flag. |
| `change` | Function | Default callback | — | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| `default` | Boolean, String, Number | `undefined` | — | Sets the default value used to initialize the component when model-value is undefined. |
| `defaultLabel` | String | `"_A_SWITCH_DEFAULT_LABEL_"` | — | If the model value does not match falseValue and trueValue, this label is displayed. |
| `defaultValue` | Boolean, String, Number | `undefined` | — | Used only when isThreeState is set to true, for representing the third state of the model. |
| `dependencies` | Array, Object | `undefined` | — | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| `disabled` | Boolean | `false` | — | Determines whether the component is disabled. If set to true, the component becomes inactive and the user cannot interact with it. |
| `errorIcon` | String, Object | `undefined` | — | Specifies the icon displayed when the component has validation errors. If the component has an input field, the icon is shown inside it; otherwise, it is displayed next to the control. The icon is shown only when errors is present. |
| `errors` | String, Array | `undefined` | — | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| `errorsClass` | String, Object | `undefined` | — | — |
| `excludeRenderAttributes` | Array | `[]` | — | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final DOM. |
| `extra` | Object | `undefined` | — | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like "_WELCOME_{{foo}}_{{bar}}_", which is translated as "Welcome {{ foo }}: {{ bar }}", you can pass an object like { foo: "abc", bar: "123" }, and the result will be the translation "Welcome abc: 123". |
| `falseLabel` | String | `"_A_SWITCH_FALSE_LABEL_"` | — | The label displayed when the switch is in the false state. |
| `falseValue` | Boolean, String, Number | `false` | — | The value assigned to the model when the switch is in the false state. |
| `fullWidth` | Boolean | `false` | — | If set to true, the switch takes up the full available width. |
| `helpText` | String | `undefined` | — | Help text displayed below the component. Provides the user with additional information or instruction. |
| `htmlId` | String | `undefined` | — | Sets the HTML ID of the element. Can be used to uniquely identify the component on the page. |
| `id` | String, Number | Generated ID | — | The identifier of the component, which can be used to track or refer to the component in the code. |
| `idPrefix` | String | `undefined` | — | Prefix for the component's ID. Used to create a unique identifier based on the specified prefix. |
| `inputAttributes` | Object | `{}` | — | An object of attributes applied directly to the input element. Allows adding or customizing additional input attributes. |
| `inputClass` | String, Object | `undefined` | — | CSS class(es) applied to the input element. Allows styling the component according to your requirements. |
| `isHide` | Boolean | `false` | — | Determines whether the component should be hidden. If set to true, the component is not displayed on the page. |
| `isRender` | Boolean | `true` | — | Indicates whether the component should be rendered. If set to false, the component will not be created in the DOM. |
| `isThreeState` | Boolean | `false` | — | Used for a three-state switch: trueValue, falseValue, and defaultValue. |
| `isTitleHtml` | Boolean | `undefined` | — | Determines whether the tooltip should be interpreted as HTML. If set to true, the content of the tooltip will be displayed with HTML formatting. |
| `label` | String, Number | `undefined` | — | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| `labelClass` | String, Object | `undefined` | — | CSS class(es) applied to the label. Allows customizing the label's style. |
| `labelDescription` | String | `undefined` | — | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| `labelScreenReader` | String, Number | `undefined` | — | Label intended for screen readers. Useful for improving accessibility. |
| `modelDependencies` | Object | `{}` | — | Determines model dependencies that may affect the visibility or behavior of the component. |
| `modelUndefined` | String, Number, Object, Array, Boolean | `undefined` | — | The value used to reset the model to an undefined state. Useful for clearing the model value. |
| `modelValue` | Boolean, String, Number | `undefined` | — | The current model value associated with the component. Used to manage the data displayed in the component. |
| `readonly` | Boolean | `false` | — | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| `readonlyDefault` | String | `""` | — | The default text that is shown if the value is missing in read-only mode. |
| `readonlyValueParentClass` | String, Object, Array | `undefined` | — | — |
| `required` | Boolean | `false` | — | Indicates whether the component is required. If set to true, the component requires user input. |
| `title` | String, Number, Object, Array | `undefined` | — | Sets the text of the tooltip that will appear when hovering over an element. The tooltip can be presented as plain text or an object for different devices (e.g., desktops and mobile devices). |
| `titlePlacement` | String | `"top"` | — | Specifies the position of the tooltip relative to the element. Various positions are supported, such as top, bottom, left, right, and others. This property only works if isTitleHtml is set to true. |
| `trueLabel` | String | `"_A_SWITCH_TRUE_LABEL_"` | — | The label displayed when the switch is in the true state. |
| `trueValue` | Boolean, String, Number | `true` | — | The value assigned to the model when the switch is in the true state. |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `blur` | See source or linked demo |
| `focus` | See source or linked demo |
| `update:modelValue` | Updated value |

Vue model bindings: `v-model`.

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ui/ASwitch/ASwitch.js)
