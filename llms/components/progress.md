# AProgress (Progress bar)

AProgress component is a customisable progress bar for Vue.js applications. It allows for a visual representation of the progress of an activity or a process.

## Basic usage

*props: `value`*

```html
<a-progress
  :value="50"
></a-progress>
```

## Customizable colors for progress bar

The AProgress component allows for customization of the progress bars in different colors to match your Vue.js application's theme. With the flexibility of the props, you can customize the background colors of the progress bars and visualize the progress. These customizable colors give you easy integration into your projects and allow you to configure the progress bar based on application needs.

*props: `class-progress-bar`*

```html
<a-progress
  :value="50"
  class-progress-bar="a_bg_primary"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_secondary"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_tertiary"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_success"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_warning"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_info"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_danger"
></a-progress>
<a-progress
   class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_gray_300"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_gray_400"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_gray_500"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_gray_600"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_gray_700"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_gray_800"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_gray_900"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_black"
></a-progress>
```

## Dynamically customizable progress bars with a class determining function.

The AProgress component allows you to create progress bars with a function that dynamically generates the background class based on the progress value. Instead of a fixed background class, you can associate the **class-progress-bar** prop with a function that returns the desired class value.

*props: `class-progress-bar (as Function)`*

```html
<a-input-number
  v-model="model"
  class="a_mb_4"
  :min="0"
  :max="100"
  :step="5"
  type="integerNonNegative"
></a-input-number>
<a-progress
  :value="model"
  :class-progress-bar="getClassProgressBar"
></a-progress>
```

```js
import {
  ref,
} from "vue";

import { 
  AInputNumber,
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressClassProgressBarFunction",
  components: {
    AInputNumber,
    AProgress,
  },
  setup() {    
    const getClassProgressBar = percent => {
      if (percent >= 80) {
        return "a_bg_danger";
      }
      if (percent > 50) {
        return "a_bg_warning";
      }
      return "a_bg_success";
    };
    const model = ref(50);

    return {
      getClassProgressBar,
      model,
    };
  },
};
```

## Customizable progress bar size

The AProgress component allows you to create progress bars of a different size and to adapt them to the theme of your Vue.js application.

*props: `class`*

```html
<a-progress
  class="a_progress_small"
  :value="20"
></a-progress>
<a-progress
  class="a_mt_4 a_progress_medium"
  :value="20"
></a-progress>
<a-progress
  class="a_mt_4 a_progress_large"
  :value="20"
></a-progress>
```

## Customizable color combinations for progress bar

The AProgress component allows you to create progress bars with customizable color combinations and match them to your Vue.js application's theme. You can customize both the background color of the progress bar and the color of the progress bar.

*props: `class`, `class-progress-bar`*

```html
<a-progress
  class="a_bg_primary"
  :value="30"
  class-progress-bar="a_bg_gray_500"
></a-progress>
<a-progress
  class="a_mt_4 a_bg_danger"
  :value="35"
  class-progress-bar="a_bg_secondary"
></a-progress>
<a-progress
  class="a_mt_4 a_bg_gray_700"
  :value="40"
  class-progress-bar="a_bg_tertiary"
></a-progress>
<a-progress
  class="a_mt_4 a_bg_secondary"
  :value="45"
  class-progress-bar="a_bg_success"
></a-progress>
<a-progress
  class="a_mt_4 a_bg_tertiary"
  :value="50"
  class-progress-bar="a_bg_warning"
></a-progress>
<a-progress
  class="a_mt_4 a_bg_success"
  :value="55"
  class-progress-bar="a_bg_info"
></a-progress>
<a-progress
  class="a_mt_4 a_bg_black"
  :value="60"
  class-progress-bar="a_bg_danger"
></a-progress>
<a-progress
  class="a_mt_4 a_bg_danger"
  :value="65"
  class-progress-bar="a_bg_gray_300"
></a-progress>
<a-progress
  class="a_mt_4 a_bg_info"
  :value="70"
  class-progress-bar="a_bg_gray_400"
></a-progress>
<a-progress
  class="a_mt_4 a_bg_success"
  :value="75"
  class-progress-bar="a_bg_gray_500"
></a-progress>
<a-progress
  class="a_mt_4 a_bg_primary"
  :value="80"
  class-progress-bar="a_bg_gray_600"
></a-progress>
<a-progress
  class="a_mt_4 a_bg_info"
  :value="85"
  class-progress-bar="a_bg_gray_700"
></a-progress>
<a-progress
  class="a_mt_4 a_bg_secondary"
  :value="90"
  class-progress-bar="a_bg_gray_800"
></a-progress>
<a-progress
  class="a_mt_4 a_bg_info"
  :value="95"
  class-progress-bar="a_bg_black"
></a-progress>
```

## Dynamically updatable progress bar

The AProgress component allows you to update progress bars in real time by dynamically changing the Props value. Coupled with an integerNonNegative input field, as shown in the example, users can control the progress using the a-input-number component. This allows you to dynamically adjust the progress bar depending on user input or other events and visually represent the current progress.

*props: `value`*

```html
<a-input-number
  v-model="model"
  class="a_mb_4"
  :min="0"
  :max="100"
  :step="5"
  type="integerNonNegative"
></a-input-number>
<a-progress
  :value="model"
></a-progress>
```

```js
import {
  ref,
} from "vue";

import {
  AInputNumber,
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressValue",
  components: {
    AInputNumber,
    AProgress,
  },
  setup() {
    const model = ref(20);

    return {
      model,
    };
  },
};
```

## Dynamic thresholds

The AProgress component allows you to create progress bars with dynamic thresholds. You can use the **min** and **max** props to set the lower and upper bounds of the progress bar. This gives you the flexibility to configure the progress bar for different scenarios and to display progress on different scales.

*props: `min`, `max`*

```html
<a-progress
  :value="-20"
  :min="-100"
  :max="0"
></a-progress>
<a-progress
  class="a_mt_4"
  :min="50"
  :max="100"
  :value="75"
></a-progress>
<a-progress
  class="a_mt_4"
  :min="0"
  :max="1000"
  :value="600"
></a-progress>
<a-progress
  class="a_mt_4"
  :min="-200"
  :max="-100"
  :value="-130"
></a-progress>
```

## Optional display of progress value

The AProgress component allows you to create progress bars with an optional value display. You can use the **showValue** prop to control whether the progress value should be displayed as text within the progress bar.

*props: `show-value`*

```html
<a-progress
  class="a_progress_small"
  :value="20"
></a-progress>
<a-progress
  class="a_mt_4 a_progress_medium"
  :value="20"
></a-progress>
<a-progress
  class="a_mt_4 a_progress_large"
  :value="20"
></a-progress>
```

## Reversed display

The AProgress component allows you to create progress bars with reverse display. When the **reverse** prop is set to true, the progress bar is displayed from right to left instead of left to right.

*props: `reverse`*

```html
<a-progress
  :value="20"
  :reverse="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="40"
  :reverse="true"
></a-progress>
```

## Different display of values

The AProgress component allows you to create progress bars with different text formats for the progress value. If the valueTextInteger prop is set to true , the progress value is displayed as an integer percentage (e.g. "20%"). If the valueTextInteger prop is false or not set, the progress value is displayed as a percentage with two decimal places (e.g. "20.00%").

*props: `value-text-integer`*

```html
<a-progress
  :value="20"
  :value-text-integer="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="40"
  :value-text-integer="true"
></a-progress>
```

## Striped progress bar

The AProgress component allows you to create striped progress bars. By using the **striped** prop, you can enable the progress bar to be striped, which makes it stand out visually. The striped appearance of the progress bar can help focus on the progress and give the user better visual feedback.

*props: `striped`*

```html
<a-progress
  :value="50"
  class-progress-bar="a_bg_primary"
  :striped="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_secondary"
  :striped="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_tertiary"
  :striped="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_success"
  :striped="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_warning"
  :striped="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_info"
  :striped="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_danger"
  :striped="true"
></a-progress>
```

## Striped progress bar with animation

The AProgress component allows you to create animated striped progress bars. By using the **striped-flow** prop, you can enable a flowing animation for striped progress bars. This animation gives the progress bar a dynamic visual impact and can help show progress in an appealing way.

*props: `striped`, `striped-flow`*

```html
<a-progress
  :value="20"
  class-progress-bar="a_bg_primary"
  :striped="true"
  :striped-flow="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="30"
  class-progress-bar="a_bg_secondary"
  :striped="true"
  :striped-flow="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="40"
  class-progress-bar="a_bg_tertiary"
  :striped="true"
  :striped-flow="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_success"
  :striped="true"
  :striped-flow="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="60"
  class-progress-bar="a_bg_warning"
  :striped="true"
  :striped-flow="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="70"
  class-progress-bar="a_bg_info"
  :striped="true"
  :striped-flow="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="80"
  class-progress-bar="a_bg_danger"
  :striped="true"
  :striped-flow="true"
></a-progress>
```

## Indeterminate progress bar with animation

The AProgress component allows you to create indeterminate progress bars with animation. By using the **indeterminate** prop, you can create a progress bar where progress is not represented by a specific value. Instead, a continuous, animated motion is displayed to indicate that an activity is ongoing with no indication of how long it is expected to take.This type of progress bar is particularly useful in situations where a process takes a long time and progress cannot be quantified.

*props: `indeterminate`*

```html
<a-progress
  :value="20"
  class-progress-bar="a_bg_primary"
  :indeterminate="true"
  :show-value="false"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="30"
  class-progress-bar="a_bg_secondary"
  :indeterminate="true"
  :show-value="false"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="40"
  class-progress-bar="a_bg_tertiary"
  :indeterminate="true"
  :show-value="false"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_success"
  :indeterminate="true"
  :show-value="false"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="60"
  class-progress-bar="a_bg_warning"
  :indeterminate="true"
  :show-value="false"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="70"
  class-progress-bar="a_bg_info"
  :indeterminate="true"
  :show-value="false"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="80"
  class-progress-bar="a_bg_danger"
  :indeterminate="true"
  :show-value="false"
></a-progress>
```

## Controlling the duration of the animation

The AProgress component allows you to control the animation duration for progress bars. By using the **duration** prop, you can set the speed of the animation, causing the progress bar to animate slower or faster. The duration is given in seconds and affects the speed at which the progress bar moves for striped or indeterminate progress bar.

*props: `duration`*

```html
<a-progress
  :value="30"
  class-progress-bar="a_bg_primary"
  :striped="true"
  :striped-flow="true"
  :duration="2"
  :show-value="false"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="40"
  class-progress-bar="a_bg_secondary"
  :striped="true"
  :striped-flow="true"
  :duration="0.5"
  :show-value="false"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="30"
  class-progress-bar="a_bg_tertiary"
  :indeterminate="true"
  :duration="5"
  :show-value="false"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="40"
  class-progress-bar="a_bg_success"
  :indeterminate="true"
  :duration="8"
  :show-value="false"
></a-progress>
```

## Custom display of the progress value by using **progressText** slot

The AProgress component provides the ability to customize the displayed progress value by using the **progressText** slot. This slot allows you to create a custom representation of the progress bar value over the default value display.

*slots: `progressText`*

```html
<a-progress
  :value="20"
>
  <template
    v-slot:progressText="{ valuePercent }"
  >
    <span>Aloha {{ valuePercent }}</span>
  </template>
</a-progress>
<a-progress
  class="a_mt_4"
  :value="40"
>
  <template
    v-slot:progressText="{ valuePercent }"
  >
    <span>$$$ {{ valuePercent }}</span>
  </template>
</a-progress>
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| aria-label | String | "_A_PROGRESS_ARIA_LABEL_" | yes | Accessible name of the progress bar for screen readers (aria-label). Can be a translation placeholder. |
| class-progress-bar | String / Object / Function | undefined | yes | One or more classes for the progress bar that can be specified to customize its appearance. |
| duration | Number | undefined | yes | This prop controls the duration of the animation for the progress bar. |
| indeterminate | Boolean | false | yes | Enables the indeterminate mode of the progress bar. When indeterminate is true , the progress bar is animated, showing continuous, indeterminate movement. |
| max | Number | 100 | yes | Upper bound, maximum value for the progress bar. |
| min | Number | 0 | yes | Lower bound, minimum value for the progress bar. |
| reverse | Boolean | false | yes | Specifies whether the progress bar should be displayed from right to left. |
| showValue | Boolean | true | yes | Specifies whether the progress value should be displayed as text inside the progress bar. |
| striped | Boolean | false | yes | Enables the striped progress bar. |
| striped-flow | Boolean | false | yes | Enables the animated display for striped progress bars. |
| value | Number | 0 | yes | The current progress of the progress bar. |
| value-text-integer | Boolean | false | yes | Specifies which text format to use for the progress value. If valueTextInteger is true, the value is displayed as an integer percentage. If valueTextInteger is false or absent, then the value is displayed as a percentage with two decimal places. |

## Slots

| name | description |
| --- | --- |
| progressText | Allows for customization of how the progress bar value is displayed. valuePercent variable can be accesed in the slot scope to show the current progress percentage. |

## CSS variables (`scss/utils/progress.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_progress_height` |  | Height of the progress bar. Changed by the size classes (small, medium, large). Also the size of the stripes. |
| `--a_progress_font_size` |  | Font size of the text on the bar. Changed by the size classes. |
| `--a_progress_bg` |  | Background of the track. |
| `--a_progress_border_radius` |  | Corner radius of the track. |
| `--a_progress_bar_color` |  | Text color on the bar. Follows a background class (e.g. .a_bg_success) on the bar. |
| `--a_progress_bar_bg` |  | Color of the bar. |
| `--a_progress_bar_transition` |  | Transition when the value changes. |
| `--a_progress_stripe_color` |  | Color of the stripes of a striped bar. |
