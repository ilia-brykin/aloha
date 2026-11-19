# AInputNumberRange

Paired numeric inputs for lower and upper bounds.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AInputNumberRange } from "aloha-vue";
```

[Runnable Vue example](../examples/AInputNumberRange.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/input-number-range)

Bind an object and use keyMin and keyMax to define the location of each bound.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | — |
| `change` | Function | Default callback | — | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| `controlsType` | String | `"plus-minus"` | — | — |
| `dependencies` | Array, Object | `undefined` | — | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| `disabled` | Boolean | `false` | — | Determines whether the component is disabled. If set to true, the component becomes inactive and the user cannot interact with it. |
| `errors` | String, Array | `undefined` | — | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| `errorsAll` | Object | `{}` | — | An object containing errors for all child elements passed through children. Each error should be specified for the corresponding element by its id. |
| `errorsClass` | String, Object | `undefined` | — | — |
| `excludeRenderAttributes` | Array | `[]` | — | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final DOM. |
| `extra` | Object | `undefined` | — | — |
| `helpText` | String | — | — | Help text displayed below the component. Provides the user with additional information or instruction. |
| `htmlId` | String | `undefined` | — | Sets the HTML ID of the element. Can be used to uniquely identify the component on the page. |
| `iconPrepend` | String | `undefined` | — | — |
| `id` | String, Number | Generated ID | — | The identifier of the component, which can be used to track or refer to the component in the code. |
| `idPrefix` | String | `undefined` | — | Prefix for the component's ID. Used to create a unique identifier based on the specified prefix. |
| `inputAttributes` | Object | `{}` | — | An object of attributes applied directly to the input element. Allows adding or customizing additional input attributes. |
| `inputAttributesMax` | Object | `{}` | — | — |
| `inputAttributesMin` | Object | `{}` | — | — |
| `inputWidth` | Number, String | `200` | — | — |
| `isHide` | Boolean | `false` | — | Determines whether the component should be hidden. If set to true, the component is not displayed on the page. |
| `isRender` | Boolean | `true` | — | Indicates whether the component should be rendered. If set to false, the component will not be created in the DOM. |
| `keyMax` | Any | `"max"` | — | — |
| `keyMin` | Any | `"min"` | — | — |
| `label` | String, Number | `undefined` | — | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| `labelClass` | Any | `undefined` | — | CSS class(es) applied to the label. Allows customizing the label's style. |
| `labelDescription` | String | `undefined` | — | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| `labelMax` | String | `"_A_INPUT_NUMBER_RANGE_LABEL_MAX_"` | — | — |
| `labelMin` | String | `"_A_INPUT_NUMBER_RANGE_LABEL_MIN_"` | — | — |
| `labelScreenReader` | String | `undefined` | — | Label intended for screen readers. Useful for improving accessibility. |
| `max` | Number | `undefined` | — | — |
| `min` | Number | `undefined` | — | — |
| `modelDependencies` | Object | `undefined` | — | Determines model dependencies that may affect the visibility or behavior of the component. |
| `modelUndefined` | Any | `undefined` | — | The value used to reset the model to an undefined state. Useful for clearing the model value. |
| `modelValue` | Object | `{}` | — | The current model value associated with the component. Used to manage the data displayed in the component. |
| `options` | Object | `{}` | — | Additional data object available within the component, in slots, or custom logic. |
| `placeholderMax` | String, Number | `undefined` | — | — |
| `placeholderMin` | String, Number | `undefined` | — | — |
| `precision` | Number | — | — | — |
| `readonly` | Boolean | `false` | — | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| `readonlyDefault` | String | `""` | — | The default text that is shown if the value is missing in read-only mode. |
| `readonlyDefaultMax` | String | `undefined` | — | — |
| `readonlyDefaultMin` | String | `undefined` | — | — |
| `readonlyValueParentClass` | String, Object, Array | `undefined` | — | — |
| `required` | Boolean | `false` | — | Indicates whether the component is required. If set to true, the component requires user input. |
| `step` | Number | `1` | — | — |
| `stepStrictly` | Boolean | `false` | — | — |
| `type` | String | `"numberRange"` | — | — |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `update:modelValue` | Updated value |

Vue model bindings: `v-model`.

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ui/AInputNumberRange/AInputNumberRange.js)
