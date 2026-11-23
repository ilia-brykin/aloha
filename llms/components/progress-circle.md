# AProgressCircle (Progress circle)

The **AProgressCircle** component displays progress as a circular indicator. It supports standard and indeterminate states and is useful when you want to visualize completion within a compact area.

## Basic usage

*props: `value`*

```html
<a-progress-circle
  :value="20"
></a-progress-circle>
<a-progress-circle
  class="a_mt_3"
  :value="50"
></a-progress-circle>
```

## Indeterminate circular progress with animation

The **AProgressCircle** component allows you to display an indeterminate circular progress indicator with animation. By using the **indeterminate** prop, you can indicate that an activity is ongoing without showing a specific completion value.

*props: `indeterminate`*

```html
<a-progress-circle
  :value="20"
  :indeterminate="true"
></a-progress-circle>
<a-progress-circle
  class="a_mt_3"
  :value="50"
  :indeterminate="true"
></a-progress-circle>
<a-progress-circle
  class="a_mt_3"
  :value="80"
  :indeterminate="true"
></a-progress-circle>
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| aria-label | String | "_A_PROGRESS_ARIA_LABEL_" | yes | Accessible name of the progress bar for screen readers (aria-label). Can be a translation placeholder. |
| duration | Number | undefined |  | Controls the animation duration of the circular progress indicator. |
| indeterminate | Boolean | false |  | Enables the indeterminate mode of the circular progress indicator. |
| max | Number | 100 |  | Upper bound, maximum value for the circular progress indicator. |
| min | Number | 0 |  | Lower bound, minimum value for the circular progress indicator. |
| rotate | Number | 0 |  | Rotates the circular progress indicator by the specified number of degrees. |
| showValue | Boolean | true |  | Specifies whether the progress value should be displayed inside the circular progress indicator. |
| strokeWidth | Number | 5 |  | Sets the stroke width of the circular progress indicator. |
| value | Number | 0 |  | The current progress value of the circular progress indicator. |
| valueTextClass | String / Object | undefined |  | One or more classes for customizing the displayed progress value text. |
| valueTextInteger | Boolean | false |  | Specifies how to format the displayed progress value. If enabled, the value is shown as an integer percentage. |
| width | Number / String | 125 |  | Sets the width and height of the circular progress indicator. |

## Slots

| name | description |
| --- | --- |
| progressText | Allows customizing the displayed progress value. The slot scope provides the **valuePercent** value. |

## CSS variables (`scss/components/AProgressCircle.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_progress_circle_color` |  | Color of the progress arc. |
| `--a_progress_circle_base_color` |  | Color of the full circle behind the arc. |
| `--a_progress_circle_text_color` |  | Color of the text in the middle. |
