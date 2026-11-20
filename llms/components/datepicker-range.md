# ADatepickerRange (_A_DATEPICKER_RANGE_COMPONENT_NAME_)

Allows interactive selection of a date range by providing two date fields to define 'From' and 'To' values.

## Basic Datepicker Range Usage

A simple datepicker range component allowing the user to select a date range with a clear label.

*props: `v-model`, `label`*

```html
<a-datepicker-range
  v-model="model"
  label="Aloha"
</a-datepicker-range>
<div class="a_mt_3">model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ADatepickerRange,
} from "aloha-vue";

export default {
  name: "PageDatepickerRangeBasic",
  components: {
    ADatepickerRange,
  },
  setup() {
    const model = ref(undefined);

    return {
      model,
    };
  },
};
```

## Customizing the First Day of the Week

Utilizing the 'firstDayOfWeek' prop to set the beginning of the week to Thursday (4) in the Datepicker range component.

*props: `v-model`, `label`, `firstDayOfWeek`*

```html
<a-datepicker-range
  v-model="model"
  label="_PAGE_DATEPICKER_RANGE_CUSTOM_FIRST_DAY_EXAMPLE_"
  first-day-of-week=4
</a-datepicker-range>
```

```js
import {
  ref,
} from "vue";

import { 
  ADatepickerRange,
} from "aloha-vue";

export default {
  name: "PageDatepickerRangeCustomFirstDay",
  components: {
    ADatepickerRange,
  },
  setup() {
    const model = ref(undefined);

    return {
      model,
    };
  },
};
```

## Various Disabled States for Datepicker Range

use of 'disabled', 'disabledFrom', and 'disabledUntil' props, each affecting the availability of selections in the Datepicker range component.

*props: `v-model`, `disabled`, `disabledFrom`, `disabledUntil`*

```html
<a-datepicker-range
 v-model="model"
  :disabled="true">
</a-datepicker-range>
<a-datepicker-range
 v-model="model"
  :disabled-from="true">
</a-datepicker-range>
<a-datepicker-range
 v-model="model"
  :disabled-until="true">
</a-datepicker-range>
```

```js
import {
  ref,
} from "vue";

import { 
  ADatepickerRange,
} from "aloha-vue";

export default {
  name: "PageDatepickerRangeDisabledVariants",
  components: {
    ADatepickerRange,
  },
  setup() {
    const model = ref(undefined);

    return {
      model,
    };
  },
};
```

## Custom Date Formats in Datepicker Range

use of 'format' and 'formatSave' props for custom display and save formats in the Datepicker range component.

*props: `v-model`, `format`, `formatSave`*

```html
<a-datepicker-range
  v-model="model"
  format="DD.MM.YY"
  format-save="YY-MM-DD"
</a-datepicker-range>
```

```js
import {
  ref,
} from "vue";

import { 
  ADatepickerRange,
} from "aloha-vue";

export default {
  name: "PageDatepickerRangeBasic",
  components: {
    ADatepickerRange,
  },
  setup() {
    const model = ref(undefined);

    return {
      model,
    };
  },
};
```

## Help Text in Datepicker Range

Incorporating the 'helpText' prop to provide additional context or instructions for the Datepicker range component.

*props: `v-model`, `label`, `helpText`*

```html
<a-datepicker-range
  v-model="model"
  label="Aloha"
  help-text="Aloha helpText"
</a-datepicker-range>
```

```js
import {
  ref,
} from "vue";

import { 
  ADatepickerRange,
} from "aloha-vue";

export default {
  name: "PageDatepickerRangeHelpText",
  components: {
    ADatepickerRange,
  },
  setup() {
    const model = ref(undefined);

    return {
      model,
    };
  },
};
```

## Using **label-description**

This example shows how to use **label-description** to add additional description to the component label. This allows providing the user with more detailed information about the purpose of the field.

*props: `label-description`*

```html
<a-datepicker-range
  v-model="model"
  label="Date"
  label-description="Aloha"
></a-datepicker-range>
```

```js
import {
  ref,
} from "vue";

import { 
  ADatepickerRange,
} from "aloha-vue";
    
export default {
  name: "PageDatepickerRangeLabelDescription",
  components: {
    ADatepickerRange,
  },
  setup() {
    const model = ref([]);
    
    return {
      data,
      model,
    };
  },
};
```

## **Readonly** display mode

In this example, the component is used in **readonly** mode, where the value is displayed as text and cannot be modified by the user.

*props: `readonly`, `readonly-default`, `readonly-default-from`, `readonly-default-from`*

```html
<a-datepicker-range
  :model-value="model1"
  :readonly="true"
  label="Input 1"
</a-datepicker-range>
<a-datepicker-range
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="Input 2"
  readonly-default-until="-"
</a-datepicker-range>
<a-datepicker-range
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Input 3"
  readonly-default-from="-"
</a-datepicker-range>
<a-datepicker-range
  :model-value="model4"
  :readonly="true"
  class="a_mt_3"
  label="Input 4"
</a-datepicker-range>
<a-datepicker-range
  :model-value="model4"
  :readonly="true"
  class="a_mt_3"
  help-text="Aloha"
  label="Input 5"
  readonly-default="-"
</a-datepicker-range>
```

```js
import {
  ref,
} from "vue";

import { 
  ADatepickerRange,
} from "aloha-vue";

export default {
  name: "PageDatepickerRangeReadonly",
  components: {
    ADatepickerRange,
  },
  setup() {
    const model1 = ref({ from: "2025-03-05", until: "2025-03-12" });
    const model2 = ref({ from: "2025-03-05" });
    const model3 = ref({ until: "2025-03-12" });
    const model4 = ref(undefined);

    return {
      model1,
      model2,
      model3,
      model4,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| id | [String, Number] | undefined |  | An internal identifier used to create specific IDs for elements within the component. |
| htmlId | String |  |  | An alternative ID that overrides the default 'id' value in case specific HTML interactions are required. |
| idPrefix | String |  |  | Provides a way to customize the ID attributes of component elements in case multiple instances exist on the same page. |
| appendToBody | Boolean | false |  | Determines if the datepicker dropdown attaches directly to the HTML body. |
| change | Function | undefined |  | A function that's called whenever the date selection is changed. |
| clearable | Boolean | true |  | Allows you to clear the date selection. |
| disabled | Boolean | false |  | Prevents any interaction with the datepicker. |
| disabledFrom | Boolean | false |  | Disables interaction with the start date. |
| disabledUntil | Boolean | false |  | Disables interaction with the end date. |
| errors | [String, Array] |  |  | Displays error messages if there are issues with the date selection. |
| errorsAll | Object | undefined |  | Collects all error messages related to the datepicker. |
| extra | Object |  |  | extra for helpText. |
| firstDayOfWeek | Number | 1 |  | Sets which day is considered the start of the week. |
| format | [String, Object] | DD.MM.YYYY |  | Determines the format of the date displayed. |
| formatSave | String | YYYY-MM-DD |  | Determines the format of the date when it's saved. |
| helpText | String |  |  | Provides helpful text or guidance for using the datepicker. |
| iconDay | [Number, String] |  |  | Allows for a special icon to be used for certain days. |
| inputAttributes | Object | undefined |  | Allows additional attributes to be set for the datepicker input. |
| inputAttributesFrom | Object | undefined |  | Allows additional attributes for the start date input. |
| inputAttributesUntil | Object | undefined |  | Allows additional attributes for the end date input. |
| inputClass | [String, Number, Boolean, Array, Object, Date, Function, Symbol] | a_datepicker__input |  | Applies CSS classes to the datepicker input for styling. |
| inputName | String | date |  | Sets the name attribute of the datepicker input field. |
| inputWidth | Number | 270 |  | Determines the width of the datepicker input field. |
| isHide | Boolean |  |  | Determines if the datepicker is visible or not. |
| isRender | Boolean | true |  | Determines if the datepicker should be rendered. |
| keyFrom | String | from |  | Sets the key name for the start date in the data model. |
| keyUntil | String | until |  | Sets the key name for the end date in the data model. |
| label | [String, Number] |  |  | Defines the label text for the datepicker. |
| label-class |  |  |  | Applies CSS classes to the label for styling. |
| label-description | String |  |  | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| label-from | undefined | _A_DATEPICKER_RANGE_FROM_ |  | Label for the "From" datepicker. |
| label-until | undefined | _A_DATEPICKER_RANGE_UNTIL_ |  | Label for the "Until" datepicker. |
| lang | String | de |  | Sets the language used for the datepicker. |
| modelUndefined |  |  |  | Holds a placeholder if the data model doesn't exist. |
| modelValue | Object | undefined |  | The current selected date range in the datepicker. |
| options | Object | undefined |  | Allows for additional configuration options for the datepicker. |
| placeholderFrom | [String, Number] |  |  | Placeholder text for the "From" datepicker when no date is selected. |
| placeholderUntil | [String, Number] |  |  | Placeholder text for the "Until" datepicker when no date is selected. |
| placement | String | bottom-start |  | Controls where the datepicker dropdown will be positioned relative to the input field. |
| popupStyle | Object | undefined |  | Custom styles for the datepicker dropdown. |
| readonly | Boolean |  |  | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| readonly-default | String |  |  | The default text that is shown if the value is missing in read-only mode. |
| required | Boolean | false |  | Determines if a date selection is mandatory before submitting a form. |
| shortcuts | [Boolean, Array] |  |  | Sets predefined date ranges for quick selection. |
| type | String | dateRange |  | Specifies the type of datepicker, like single date or date range. |

## Translations

| key | en |
| --- | --- |
| `_A_DATEPICKER_RANGE_FROM_` | from |
| `_A_DATEPICKER_RANGE_UNTIL_` | until |

## CSS variables (`scss/components/ui/ADatepickerRange.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_input_datepicker_range_width` |  | Width of each date field. |
| `--a_input_datepicker_range_max_width` |  | Maximum width of each date field. |
| `--a_input_datepicker_range_min_width` |  | Minimum width of each date field. |
| `--a_datepicker_range_label_padding_right` |  | Space between a label (from, to) and its field. |
| `--a_datepicker_range_label_max_margin_left` |  | Space before the label of the second field. |
| `--a_datepicker_range_label_white_space` |  | Line wrapping of the labels. |
| `--a_datepicker_range_group_flex_basis` |  | Base width of one label and field pair. Below it the pairs wrap. |
