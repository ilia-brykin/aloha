# AProgressCircle

Circular progress indicator.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AProgressCircle } from "aloha-vue";
```

[Runnable Vue example](../examples/AProgressCircle.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/progress-circle)

Give it a name. Use indeterminate mode when the total amount of work is unknown.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `ariaLabel` | String | `"_A_PROGRESS_ARIA_LABEL_"` | — | Accessible name of the progress bar for screen readers (aria-label). Can be a translation placeholder. |
| `duration` | Number | `undefined` | — | Controls the animation duration of the circular progress indicator. |
| `indeterminate` | Boolean | `false` | — | Enables the indeterminate mode of the circular progress indicator. |
| `max` | Number | `100` | — | Upper bound, maximum value for the circular progress indicator. |
| `min` | Number | `0` | — | Lower bound, minimum value for the circular progress indicator. |
| `rotate` | Number | `0` | — | Rotates the circular progress indicator by the specified number of degrees. |
| `showValue` | Boolean | `true` | — | Specifies whether the progress value should be displayed inside the circular progress indicator. |
| `strokeWidth` | Number | `5` | — | Sets the stroke width of the circular progress indicator. |
| `value` | Number | `0` | — | The current progress value of the circular progress indicator. |
| `valueTextClass` | String, Object | `undefined` | — | One or more classes for customizing the displayed progress value text. |
| `valueTextInteger` | Boolean | `false` | — | Specifies how to format the displayed progress value. If enabled, the value is shown as an integer percentage. |
| `width` | Number, String | `125` | — | Sets the width and height of the circular progress indicator. |

## Events and model bindings

This component does not declare dedicated events. See the usage notes for callback props or delegated behavior.

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `progressText` | `{ valuePercent }` | Allows customizing the displayed progress value. The slot scope provides the valuePercent value. |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/AProgressCircle/AProgressCircle.js)
