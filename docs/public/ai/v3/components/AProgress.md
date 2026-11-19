# AProgress

Horizontal progress indicator for determinate or indeterminate work.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AProgress } from "aloha-vue";
```

[Runnable Vue example](../examples/AProgress.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/progress)

Give it a name and pass a value with the matching range when progress is known.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `ariaLabel` | String | `"_A_PROGRESS_ARIA_LABEL_"` | — | Accessible name of the progress bar for screen readers (aria-label). Can be a translation placeholder. |
| `classProgressBar` | String, Object, Function | `undefined` | — | One or more classes for the progress bar that can be specified to customize its appearance. |
| `duration` | Number | `undefined` | — | This prop controls the duration of the animation for the progress bar. |
| `indeterminate` | Boolean | `false` | — | Enables the indeterminate mode of the progress bar. When indeterminate is true , the progress bar is animated, showing continuous, indeterminate movement. |
| `max` | Number | `100` | — | Upper bound, maximum value for the progress bar. |
| `min` | Number | `0` | — | Lower bound, minimum value for the progress bar. |
| `reverse` | Boolean | `false` | — | Specifies whether the progress bar should be displayed from right to left. |
| `showValue` | Boolean | `true` | — | Specifies whether the progress value should be displayed as text inside the progress bar. |
| `striped` | Boolean | `false` | — | Enables the striped progress bar. |
| `stripedFlow` | Boolean | `false` | — | Enables the animated display for striped progress bars. |
| `value` | Number | `0` | — | The current progress of the progress bar. |
| `valueTextInteger` | Boolean | `false` | — | Specifies which text format to use for the progress value. If valueTextInteger is true, the value is displayed as an integer percentage. If valueTextInteger is false or absent, then the value is displayed as a percentage with two decimal places. |

## Events and model bindings

This component does not declare dedicated events. See the usage notes for callback props or delegated behavior.

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `progressText` | `{ valuePercent }` | Allows for customization of how the progress bar value is displayed. valuePercent variable can be accesed in the slot scope to show the current progress percentage. |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/AProgress/AProgress.js)
