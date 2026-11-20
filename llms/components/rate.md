# ARate (Rating)

The **ARate** component shows a rating with icons and lets the user choose a value from 1 to **max**. It is a form element: it has a label, help text, errors, read-only mode and works in **AForm**. The model is a number, `0` means «not rated».

Accessibility: the component is one focusable element with `role="slider"`. Its name is the label, `aria-valuetext` contains the value and the text of the value (for example «3 of 5, Okay»). The icons are hidden from screen readers. In read-only mode the icons are an image (`role="img"`) with the same text.

- **Arrow right/up**: higher value, **Arrow left/down**: lower value (with **allow-half** in steps of 0.5, in right-to-left languages the arrows are swapped).
- **Home** / **End**: lowest / highest value.
- Digit keys: set the value directly.
- **Delete** / **Backspace**: remove the rating (only with **clearable**).

## Basic usage

*props: `model-value`, `label`*

```html
<a-rate
  v-model="model"
  label="Your rating"
></a-rate>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateBasic",
  components: {
    ARate,
  },
  setup() {
    const model = ref(3);

    return {
      model,
    };
  },
};
```

## Number of icons

**max** sets the number of icons and the highest value (default 5).

*props: `max`*

```html
<a-rate
  v-model="model"
  :max="10"
  :show-score="true"
  score-template="{{value}} / {{max}}"
  label="Your rating"
></a-rate>
```

```js
import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateMax",
  components: {
    ARate,
  },
  setup() {
    const model = ref(7);

    return {
      model,
    };
  },
};
```

## Half values

With **allow-half** the left half of an icon selects a half value. The keyboard changes the value in steps of 0.5.

*props: `allow-half`*

```html
<a-rate
  v-model="model"
  :allow-half="true"
  :show-score="true"
  label="Your rating"
></a-rate>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateAllowHalf",
  components: {
    ARate,
  },
  setup() {
    const model = ref(3.5);

    return {
      model,
    };
  },
};
```

## Sizes

**size**: `small`, default or `large`.

*props: `size`*

```html
<a-rate
  v-model="model"
  class="a_mb_3"
  size="small"
  label="size: small"
></a-rate>
<a-rate
  v-model="model"
  class="a_mb_3"
  label="size: default"
></a-rate>
<a-rate
  v-model="model"
  size="large"
  label="size: large"
></a-rate>
```

```js
import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateSize",
  components: {
    ARate,
  },
  setup() {
    const model = ref(4);

    return {
      model,
    };
  },
};
```

## Colors by level

The value is in one of three levels: up to **low-threshold** (default 2), from **high-threshold** (default 4) and between. **colors** is a color, an array with three colors (low, medium, high) or an object with thresholds as keys. Without **colors** the CSS variables `--a_rate_fill_color_low`, `_medium` and `_high` are used.

*props: `colors`, `low-threshold`, `high-threshold`*

```html
<a-rate
  v-model="modelArray"
  class="a_mb_3"
  :colors="colorsArray"
  :show-text="true"
  label="colors: Array"
></a-rate>
<a-rate
  v-model="modelObject"
  :colors="colorsObject"
  :max="10"
  :low-threshold="3"
  :high-threshold="8"
  :show-score="true"
  label="colors: Object"
></a-rate>
```

```js
import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateColors",
  components: {
    ARate,
  },
  setup() {
    const modelArray = ref(2);
    const modelObject = ref(6);
    const colorsArray = ["var(--a_color_danger)", "var(--a_color_warning)", "var(--a_color_success)"];
    const colorsObject = {
      3: "var(--a_color_danger)",
      7: "var(--a_color_warning)",
      10: "var(--a_color_success)",
    };

    return {
      colorsArray,
      colorsObject,
      modelArray,
      modelObject,
    };
  },
};
```

## Icons

**icons** is the filled icon: an icon, an array with three icons (low, medium, high) or an object with thresholds as keys, like **colors**. **void-icon** is the empty icon. Icons are names of registered icons or SVG strings.

*props: `icons`, `void-icon`*

```html
<a-rate
  v-model="modelHeart"
  class="a_mb_3"
  :icons="HeartFill"
  :void-icon="Heart"
  colors="var(--a_color_danger)"
  label="Food"
></a-rate>
<a-rate
  v-model="modelEmoji"
  :icons="iconsEmoji"
  :void-icon="EmojiNeutral"
  :colors="colorsEmoji"
  :show-text="true"
  label="Service"
></a-rate>
```

```js
import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

import EmojiFrownFill from "aloha-svg/dist/js/bootstrap/EmojiFrownFill";
import EmojiNeutral from "aloha-svg/dist/js/bootstrap/EmojiNeutral";
import EmojiNeutralFill from "aloha-svg/dist/js/bootstrap/EmojiNeutralFill";
import EmojiSmileFill from "aloha-svg/dist/js/bootstrap/EmojiSmileFill";
import Heart from "aloha-svg/dist/js/bootstrap/Heart";
import HeartFill from "aloha-svg/dist/js/bootstrap/HeartFill";

export default {
  name: "PageRateIcons",
  components: {
    ARate,
  },
  setup() {
    const modelHeart = ref(3);
    const modelEmoji = ref(4);
    const iconsEmoji = [EmojiFrownFill, EmojiNeutralFill, EmojiSmileFill];
    const colorsEmoji = ["var(--a_color_danger)", "var(--a_color_warning)", "var(--a_color_success)"];

    return {
      colorsEmoji,
      EmojiNeutral,
      Heart,
      HeartFill,
      iconsEmoji,
      modelEmoji,
      modelHeart,
    };
  },
};
```

## Text

**show-text** shows the text of the value after the icons. **texts** is an array with a text (or a translation key) for every value, by default 5 texts. The text of a half value is the text of the next whole value. The text is also part of `aria-valuetext`.

*props: `show-text`, `texts`*

```html
<a-rate
  v-model="modelDefault"
  class="a_mb_3"
  :show-text="true"
  label="Your rating"
></a-rate>
<a-rate
  v-model="modelCustom"
  :show-text="true"
  :texts="texts"
  label="Service"
></a-rate>
```

```js
import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateText",
  components: {
    ARate,
  },
  setup() {
    const modelDefault = ref(3);
    const modelCustom = ref(5);
    const texts = [
      "_A_RATE_EXAMPLE_TEXT_1_",
      "_A_RATE_EXAMPLE_TEXT_2_",
      "_A_RATE_EXAMPLE_TEXT_3_",
      "_A_RATE_EXAMPLE_TEXT_4_",
      "_A_RATE_EXAMPLE_TEXT_5_",
    ];

    return {
      modelCustom,
      modelDefault,
      texts,
    };
  },
};
```

## Score

**show-score** shows the value after the icons. **score-template** is a text or a translation key with `{{value}}` and `{{max}}`.

*props: `show-score`, `score-template`*

```html
<a-rate
  v-model="model"
  class="a_mb_3"
  :show-score="true"
  label="show-score"
></a-rate>
<a-rate
  v-model="model"
  :show-score="true"
  score-template="{{value}} points"
  label="score-template"
></a-rate>
```

```js
import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateScore",
  components: {
    ARate,
  },
  setup() {
    const model = ref(4);

    return {
      model,
    };
  },
};
```

## Remove the rating

With **clearable** a click on the current value or **Delete** / **Backspace** removes the rating. The model then gets **model-undefined** (default `0`).

*props: `clearable`, `model-undefined`*

```html
<a-rate
  v-model="model"
  :clearable="true"
  :show-text="true"
  label="Your rating"
  help-text="Click the same icon again to remove the rating"
></a-rate>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateClearable",
  components: {
    ARate,
  },
  setup() {
    const model = ref(3);

    return {
      model,
    };
  },
};
```

## Disabled and read-only

**disabled** shows the icons, but the value cannot be changed and the component is not focusable. **readonly** shows the rating as an image, also with decimal values like `3.7`.

*props: `disabled`, `readonly`*

```html
<a-rate
  v-model="model"
  class="a_mb_3"
  :disabled="true"
  label="disabled"
></a-rate>
<a-rate
  v-model="modelDecimal"
  class="a_mb_3"
  :readonly="true"
  :show-score="true"
  label="readonly"
></a-rate>
<a-rate
  v-model="modelDecimal"
  :readonly="true"
  :show-text="true"
  size="small"
  label="readonly, size: small"
></a-rate>
```

```js
import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateDisabled",
  components: {
    ARate,
  },
  setup() {
    const model = ref(3);
    const modelDecimal = ref(3.7);

    return {
      model,
      modelDecimal,
    };
  },
};
```

## Help text and label description

**help-text** and **label-description** are connected to the component with `aria-describedby`.

*props: `help-text`, `label-description`*

```html
<a-rate
  v-model="model"
  label="Service"
  label-description="How satisfied are you with our service?"
  help-text="Click the same icon again to remove the rating"
  :clearable="true"
></a-rate>
```

```js
import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateHelpText",
  components: {
    ARate,
  },
  setup() {
    const model = ref(0);

    return {
      model,
    };
  },
};
```

## Errors

**errors** shows the error text, colors the empty icons and sets `aria-invalid`.

*props: `errors`, `required`*

```html
<a-rate
  v-model="model"
  :required="true"
  :errors="model ? undefined : 'Please rate the service'"
  label="Service"
></a-rate>
```

```js
import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateErrors",
  components: {
    ARate,
  },
  setup() {
    const model = ref(0);

    return {
      model,
    };
  },
};
```

## In a form

In **AForm** and **AGroup** the component is used with `type: "rate"`.

*props: `type`*

```html
<a-form
  v-model="model"
  :data="data"
></a-form>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  AForm,
} from "aloha-vue";

export default {
  name: "PageRateForm",
  components: {
    AForm,
  },
  setup() {
    const model = ref({
      service: 4,
      food: 0,
    });
    const data = [
      {
        id: "service",
        type: "rate",
        label: "_A_RATE_EXAMPLE_LABEL_SERVICE_",
        showText: true,
        required: true,
      },
      {
        id: "food",
        type: "rate",
        label: "_A_RATE_EXAMPLE_LABEL_FOOD_",
        allowHalf: true,
        clearable: true,
        showScore: true,
      },
    ];

    return {
      data,
      model,
    };
  },
};
```

## Styles with CSS variables

Colors and sizes are CSS variables (table at the end of the page). They can be set for the whole project or for one component, for example with `style` or a class.

*props: `style`*

```html
<a-rate
  v-model="model"
  :style="styleRate"
  :show-score="true"
  label="Your rating"
></a-rate>
```

```js
import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateCss",
  components: {
    ARate,
  },
  setup() {
    const model = ref(4);
    const styleRate = {
      "--a_rate_fill_color": "var(--a_color_primary)",
      "--a_rate_icon_size": "2rem",
      "--a_rate_gap": ".5rem",
      "--a_rate_text_font_size": "1.25rem",
    };

    return {
      model,
      styleRate,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| allow-half | Boolean | false |  | Allows half values. |
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| change | Function | () => {} |  | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| clearable | Boolean | false |  | Allows removing the rating: click on the current value, `Delete` or `Backspace`. |
| colors | String / Array / Object |  |  | Color of the filled icons: a color, an array with three colors (low, medium, high) or an object with thresholds as keys. |
| dependencies | Array / Object |  |  | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| disabled | Boolean |  |  | Determines whether the component is disabled. If set to **true**, the component becomes inactive and the user cannot interact with it. |
| errors | String / Array |  |  | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| exclude-render-attributes | Array | [] |  | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final **DOM**. |
| extra | Object |  |  | Variables for translations. |
| help-text | String |  |  | Help text displayed below the component. Provides the user with additional information or instruction. |
| high-threshold | Number | 4 |  | From this value the level is high. |
| html-id | String |  |  | Sets the **HTML ID** of the element. Can be used to uniquely identify the component on the page. |
| icons | String / Array / Object | StarFill |  | Filled icon: an icon, an array with three icons (low, medium, high) or an object with thresholds as keys. |
| id | String / Number | uniqueId("a_rate_") |  | The identifier of the component, which can be used to track or refer to the component in the code. |
| id-prefix | String |  |  | Prefix for the component's **ID**. Used to create a unique identifier based on the specified prefix. |
| is-hide | Boolean |  |  | Determines whether the component should be hidden. If set to **true**, the component is not displayed on the page. |
| is-render | Boolean | true |  | Indicates whether the component should be rendered. If set to **false**, the component will not be created in the **DOM**. |
| label | String / Number |  |  | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| label-class | String / Object |  |  | **CSS** class(es) applied to the label. Allows customizing the label's style. |
| label-description | String |  |  | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| label-screen-reader | String / Number |  |  | Label intended for screen readers. Useful for improving accessibility. |
| low-threshold | Number | 2 |  | Up to this value the level is low. |
| max | Number | 5 |  | Number of icons and highest value. |
| model-dependencies | Object | {} |  | Determines model dependencies that may affect the visibility or behavior of the component. |
| model-undefined | String / Number / Object / Array / Boolean | 0 |  | The value used to reset the model to an undefined state. Useful for clearing the model value. |
| model-value | Number / String |  |  | The current model value associated with the component. Used to manage the data displayed in the component. |
| readonly | Boolean |  |  | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| readonly-default | String | "" |  | The default text that is shown if the value is missing in read-only mode. |
| required | Boolean | false |  | Indicates whether the component is required. If set to **true**, the component requires user input. |
| score-template | String | "_A_RATE_SCORE_{{value}}_{{max}}_" |  | Text or translation key of the score with `{{value}}` and `{{max}}`. |
| show-score | Boolean | false |  | Shows the value after the icons. |
| show-text | Boolean | false |  | Shows the text of the value after the icons. |
| size | String |  |  | Size of the icons: `small` or `large`. |
| texts | Array | ["_A_RATE_TEXT_1_", …, "_A_RATE_TEXT_5_"] |  | Texts or translation keys for the values 1 to max. |
| type | String | "rate" |  | Type of the form element. Used by AForm to choose the component. |
| void-icon | String | Star |  | Empty icon. |
| color | String |  |  | Deprecated, use `colors`. Will be removed in 4.0. |
| half-icon | Boolean |  |  | Deprecated, use `allow-half`. Will be removed in 4.0. |
| hovered-color | String |  |  | Deprecated, use the CSS variable `--a_rate_hover_fill_color`. Will be removed in 4.0. |
| icon | String |  |  | Deprecated, use `void-icon`. Will be removed in 4.0. |
| icon-fill | String |  |  | Deprecated, use `icons`. Will be removed in 4.0. |
| rating | Number |  |  | Deprecated, use `max`. Will be removed in 4.0. |
| text | String |  |  | Deprecated, use `show-text` and `texts` or `label`. Will be removed in 4.0. |

## Events

| name | type | description |
| --- | --- | --- |
| update:model-value | Function | Event triggered when the component's model value is updated. Used to synchronize data between the component and the parent component. |
| focus | Function | Event triggered when the component gains focus. Useful for tracking user interaction with the element. |
| blur | Function | Event triggered when the component loses focus. Used to validate or save data when the user leaves the field. |

## Translations

| key | en |
| --- | --- |
| `_A_RATE_ARIA_LABEL_` | Rating |
| `_A_RATE_NO_VALUE_` | Not rated |
| `_A_RATE_SCORE_{{value}}_{{max}}_` | {{value}} |
| `_A_RATE_TEXT_1_` | Very bad |
| `_A_RATE_TEXT_2_` | Bad |
| `_A_RATE_TEXT_3_` | Okay |
| `_A_RATE_TEXT_4_` | Good |
| `_A_RATE_TEXT_5_` | Excellent |
| `_A_RATE_VALUE_{{value}}_{{max}}_` | {{value}} of {{max}} |

## CSS variables (`scss/components/ui/ARate.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_rate_icon_size` |  | Size of an icon. |
| `--a_rate_icon_size_small` |  | Size of an icon for size "small". |
| `--a_rate_icon_size_large` |  | Size of an icon for size "large". |
| `--a_rate_gap` |  | Space between the icons. |
| `--a_rate_gap_small` |  | Space between the icons for size "small". |
| `--a_rate_gap_large` |  | Space between the icons for size "large". |
| `--a_rate_hover_scale` |  | Scale of the icon under the mouse pointer. |
| `--a_rate_void_color` |  | Color of an empty icon (contrast at least 3:1). |
| `--a_rate_fill_color` |  | Color of a filled icon. |
| `--a_rate_fill_color_low` |  | Color of the filled icons if the value is at most lowThreshold. |
| `--a_rate_fill_color_medium` |  | Color of the filled icons between lowThreshold and highThreshold. |
| `--a_rate_fill_color_high` |  | Color of the filled icons if the value is at least highThreshold. |
| `--a_rate_disabled_void_color` |  | Color of an empty icon of a disabled component. |
| `--a_rate_disabled_opacity` |  | Opacity of the filled icons of a disabled component. |
| `--a_rate_text_gap` |  | Space between the icons and the score or the text. |
| `--a_rate_text_color` |  | Color of the score and of the text. |
| `--a_rate_text_font_size` |  | Font size of the score and of the text. |
