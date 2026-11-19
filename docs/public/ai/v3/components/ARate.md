# ARate

Star rating control with configurable increments and levels.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { ARate } from "aloha-vue";
```

[Runnable Vue example](../examples/ARate.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/rate)

Provide a visible or screen-reader label. Test keyboard adjustment when customizing rating icons.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `allowHalf` | Boolean | `false` | — | Allows half values. |
| `alwaysTranslate` | Boolean | `false` | — | Forces translation regardless of the `is-translate` flag. |
| `change` | Function | Default callback | — | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| `clearable` | Boolean | `false` | — | Allows removing the rating: click on the current value, `Delete` or `Backspace`. |
| `color` | String | `undefined` | — | Deprecated, use `colors`. Will be removed in 4.0. |
| `colors` | String, Array, Object | `undefined` | — | Color of the filled icons: a color, an array with three colors (low, medium, high) or an object with thresholds as keys. |
| `dependencies` | Array, Object | `undefined` | — | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| `disabled` | Boolean | `false` | — | Determines whether the component is disabled. If set to true, the component becomes inactive and the user cannot interact with it. |
| `errors` | String, Array | `undefined` | — | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| `errorsClass` | String, Object | `undefined` | — | — |
| `excludeRenderAttributes` | Array | `[]` | — | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final DOM. |
| `extra` | Object | `undefined` | — | Variables for translations. |
| `halfIcon` | Boolean | `undefined` | — | Deprecated, use `allow-half`. Will be removed in 4.0. |
| `helpText` | String | `undefined` | — | Help text displayed below the component. Provides the user with additional information or instruction. |
| `highThreshold` | Number | `4` | — | From this value the level is high. |
| `hoveredColor` | String | `undefined` | — | Deprecated, use the CSS variable `--a_rate_hover_fill_color`. Will be removed in 4.0. |
| `htmlId` | String | `undefined` | — | Sets the HTML ID of the element. Can be used to uniquely identify the component on the page. |
| `icon` | String | `undefined` | — | Deprecated, use `void-icon`. Will be removed in 4.0. |
| `iconFill` | String | `undefined` | — | Deprecated, use `icons`. Will be removed in 4.0. |
| `icons` | String, Array, Object | `undefined` | — | Filled icon: an icon, an array with three icons (low, medium, high) or an object with thresholds as keys. |
| `id` | String, Number | Generated ID | — | The identifier of the component, which can be used to track or refer to the component in the code. |
| `idPrefix` | String | `undefined` | — | Prefix for the component's ID. Used to create a unique identifier based on the specified prefix. |
| `isHide` | Boolean | `false` | — | Determines whether the component should be hidden. If set to true, the component is not displayed on the page. |
| `isRender` | Boolean | `true` | — | Indicates whether the component should be rendered. If set to false, the component will not be created in the DOM. |
| `label` | String, Number | `undefined` | — | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| `labelClass` | String, Object | `undefined` | — | CSS class(es) applied to the label. Allows customizing the label's style. |
| `labelDescription` | String | `undefined` | — | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| `labelScreenReader` | String, Number | `undefined` | — | Label intended for screen readers. Useful for improving accessibility. |
| `lowThreshold` | Number | `2` | — | Up to this value the level is low. |
| `max` | Number | `5` | — | Number of icons and highest value. |
| `modelDependencies` | Object | `{}` | — | Determines model dependencies that may affect the visibility or behavior of the component. |
| `modelUndefined` | String, Number, Object, Array, Boolean | `0` | — | The value used to reset the model to an undefined state. Useful for clearing the model value. |
| `modelValue` | Number, String | `undefined` | — | The current model value associated with the component. Used to manage the data displayed in the component. |
| `rating` | Number | `undefined` | — | Deprecated, use `max`. Will be removed in 4.0. |
| `readonly` | Boolean | `false` | — | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| `readonlyDefault` | String | `""` | — | The default text that is shown if the value is missing in read-only mode. |
| `readonlyValueParentClass` | String, Object, Array | `undefined` | — | — |
| `required` | Boolean | `false` | — | Indicates whether the component is required. If set to true, the component requires user input. |
| `scoreTemplate` | String | `"_A_RATE_SCORE_{{value}}_{{max}}_"` | — | Text or translation key of the score with `{{value}}` and `{{max}}`. |
| `showScore` | Boolean | `false` | — | Shows the value after the icons. |
| `showText` | Boolean | `false` | — | Shows the text of the value after the icons. |
| `size` | String | `undefined` | — | Size of the icons: `small` or `large`. |
| `text` | String | `undefined` | — | Deprecated, use `show-text` and `texts` or `label`. Will be removed in 4.0. |
| `texts` | Array | `["_A_RATE_TEXT_1_","_A_RATE_TEXT_2_","_A_RATE_TEXT_3_","_A_RATE_TEXT_4_","_A_RATE_TEXT_5_"]` | — | Texts or translation keys for the values 1 to max. |
| `type` | String | `"rate"` | — | Type of the form element. Used by AForm to choose the component. |
| `voidIcon` | String | `undefined` | — | Empty icon. |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `blur` | See source or linked demo |
| `focus` | See source or linked demo |
| `update:modelValue` | Updated value |

Vue model bindings: `v-model`.

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ui/ARate/ARate.js)
