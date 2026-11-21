# ADatepicker (Datepicker)

Allows interactive selection of a date and, depending on the configuration, also time. The component supports different display modes such as date, time, or datetime and offers additional options for limiting the selectable range and controlling the initial calendar focus.

## Basic usage

*props: `model-value`, `label`*

```html
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="model1"
      label="_PAGE_DATEPICKER_LBL_INPUT_1_"
    ></a-datepicker>
    <div>model1: {{ model1 }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="model2"
      label="_PAGE_DATEPICKER_LBL_INPUT_2_"
    ></a-datepicker>
    <div>model2: {{ model2 }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="model3"
      label="_PAGE_DATEPICKER_LBL_INPUT_3_"
    ></a-datepicker>
    <div>model3: {{ model3 }}</div>
  </div>
</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ADatepicker,
} from "aloha-vue";
    
export default {
  name: "PageDatepickerBasic",
  components: {
    ADatepicker,
  },
  setup() {
    const model1 = ref("2022-10-18");
    const model2 = ref("2023-12-12");
    const model3 = ref(undefined);
    
    return {
      model1,
      model2,
      model3,
    };
  },
};
```

## Label position

**label-position** sets where the label is shown: `"float"` – inside the empty field, it moves to the border on focus or with a value; `"inset"` – always inside the field, small above the value; `"top"` – above the field. The default for all form elements is set with **AFormPlugin** (`labelPosition`). **is-label-float** still works, but is deprecated.

*props: `label-position`*

```html
<a-datepicker
  v-model="model"
  label="label-position: float"
  label-position="float"
></a-datepicker>
<a-datepicker
  v-model="model"
  label="label-position: inset"
  label-position="inset"
></a-datepicker>
<a-datepicker
  v-model="model"
  label="label-position: top"
  label-position="top"
></a-datepicker>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  ADatepicker,
} from "aloha-vue";

export default {
  name: "PageDatepickerLabelPosition",
  components: {
    ADatepicker,
  },
  setup() {
    const model = ref("2022-10-18");

    return {
      model,
    };
  },
};
```

## Error icon

This example shows how to display a custom error icon when the component has validation errors. If the component has an input field, the icon is shown inside it; otherwise, it is displayed next to the control. The icon is rendered only if both **errors** and **error-icon** are provided.

*props: `errors`, `error-icon`*

```html
<a-datepicker
  v-model="model"
  :error-icon="errorIcon"
  errors="Aloha"
  label="Datepicker"
></a-datepicker>
```

```js
import {
  ref,
} from "vue";

import { 
  ADatepicker,
} from "aloha-vue";
    
export default {
  name: "PageDatepickerErrorIcon",
  components: {
    ADatepicker,
  },
  setup() {
    const model = ref("2022-10-18");
    const errorIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\"><path d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"/></svg>";
    
    return {
      errorIcon,
      model,
    };
  },
};
```

## Using **label-description**

This example shows how to use **label-description** to add additional description to the component label. This allows providing the user with more detailed information about the purpose of the field.

*props: `label-description`, `label-position`*

```html
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="model"
      label-position="top"
      label-description="_PAGE_DATEPICKER_TXT_ALOHA_"
      label="_PAGE_DATEPICKER_LBL_TYPE_DATE_"
    ></a-datepicker>
  </div>
</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ADatepicker,
} from "aloha-vue";
    
export default {
  name: "PageDatepickerLabelDescription",
  components: {
    ADatepicker,
  },
  setup() {
    const model = ref(undefined);
    
    return {
      model,
    };
  },
};
```

## **Readonly** display mode

In this example, the component is used in **readonly** mode, where the value is displayed as text and cannot be modified by the user.

*props: `readonly`, `readonly-default`*

```html
<a-datepicker
  :model-value="model1"
  :readonly="true"
  label="_PAGE_DATEPICKER_LBL_INPUT_1_"
></a-datepicker>
<a-datepicker
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="_PAGE_DATEPICKER_LBL_INPUT_2_"
></a-datepicker>
<a-datepicker
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="_PAGE_DATEPICKER_LBL_INPUT_3_"
></a-datepicker>
<a-datepicker
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="_PAGE_DATEPICKER_LBL_INPUT_4_"
  readonly-default="-"
  help-text="_PAGE_DATEPICKER_TXT_ALOHA_"
></a-datepicker>
```

```js
import {
  ref,
} from "vue";

import { 
  ADatepicker,
} from "aloha-vue";
    
export default {
  name: "PageDatepickerReadonly",
  components: {
    ADatepicker,
  },
  setup() {
    const model1 = ref("2022-10-18");
    const model2 = ref("2023-12-12");
    const model3 = ref(undefined);
    
    return {
      model1,
      model2,
      model3,
    };
  },
};
```

## Default placeholders

When **placeholder** is not passed, the component now chooses a default placeholder based on **type** and **time-precision**. You can override these defaults with **placeholders-default**.

*props: `placeholder`, `placeholders-default`, `type`, `time-precision`*

```html
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="modelDate"
      label="_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_DATE_"
      type="date"
    ></a-datepicker>
    <div>modelDate: {{ modelDate }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="modelTimeHour"
      class="a_mt_3"
      label="_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_TIME_HOUR_"
      time-precision="hour"
      type="time"
    ></a-datepicker>
    <div>modelTimeHour: {{ modelTimeHour }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="modelTimeMinute"
      class="a_mt_3"
      label="_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_TIME_MINUTE_"
      time-precision="minute"
      type="time"
    ></a-datepicker>
    <div>modelTimeMinute: {{ modelTimeMinute }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="modelDatetimeSecond"
      class="a_mt_3"
      label="_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_DATETIME_SECOND_"
      time-precision="second"
      type="datetime"
    ></a-datepicker>
    <div>modelDatetimeSecond: {{ modelDatetimeSecond }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="modelOverride"
      :placeholders-default="placeholdersCustom"
      class="a_mt_3"
      label="_PAGE_DATEPICKER_LBL_PLACEHOLDER_DEFAULT_OVERRIDE_"
      time-precision="minute"
      type="datetime"
    ></a-datepicker>
    <div>modelOverride: {{ modelOverride }}</div>
  </div>
</div>
```

```js
import {
  ref,
} from "vue";

import {
  ADatepicker,
} from "aloha-vue";

export default {
  name: "PageDatepickerPlaceholderDefault",
  components: {
    ADatepicker,
  },
  setup() {
    const modelDate = ref(undefined);
    const modelTimeHour = ref(undefined);
    const modelTimeMinute = ref(undefined);
    const modelDatetimeSecond = ref(undefined);
    const modelOverride = ref(undefined);

    const placeholdersCustom = {
      datetimeMinute: "_PAGE_DATEPICKER_PLACEHOLDER_CUSTOM_DATETIME_MINUTE_",
      timeMinute: "_PAGE_DATEPICKER_PLACEHOLDER_CUSTOM_TIME_MINUTE_",
    };
    
    return {
      modelDate,
      modelTimeHour,
      modelTimeMinute,
      modelDatetimeSecond,
      modelOverride,
      placeholdersCustom,
    };
  },
};
```

## Maximum and minimum dates

Use the **max-date** and **min-date** props to limit the selectable date range.

*props: `max-date`, `min-date`*

```html
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="model1"
      :min-date="dateYesterday"
      label="_PAGE_DATEPICKER_LBL_WITH_MIN_DATE_"
      type="date"
    ></a-datepicker>
    <div>model1: {{ model1 }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="model2"
      :max-date="dateTomorrow"
      class="a_mt_3"
      label="_PAGE_DATEPICKER_LBL_WITH_MAX_DATE_"
      type="date"
    ></a-datepicker>
    <div>model2: {{ model2 }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="model3"
      :max-date="dateTomorrow"
      :min-date="dateTomorrow"
      class="a_mt_3"
      label="_PAGE_DATEPICKER_LBL_WITH_MIN_AND_MAX_DATE_"
      type="date"
    ></a-datepicker>
    <div>model3: {{ model3 }}</div>
  </div>
</div>
```

```js
import {
  computed,
  ref,
} from "vue";

import { 
  ADatepicker,
} from "aloha-vue";
    
export default {
  name: "PageDatepickerMaxMinDate",
  components: {
    ADatepicker,
  },
  setup() {
    const model1 = ref(undefined);
    const model2 = ref(undefined);
    const model3 = ref(undefined);

    const dateYesterday = computed(() => {
      const date = new Date();
      date.setDate(date.getDate() - 1);

      return date.toISOString();
    });

    const dateTomorrow = computed(() => {
      const date = new Date();
      date.setDate(date.getDate() + 1);

      return date.toISOString();
    });
    
    return {
      dateTomorrow,
      dateYesterday,
      model1,
      model2,
      model3,
    };
  },
};
```

## Initial calendar focus

Use the **start-date** and **focus-start-date** props to control the initial focus of the calendar.

*props: `start-date`, `focus-start-date`*

```html
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="model1"
      :start-date="dateNextYear"
      label="_PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_"
      type="date"
    ></a-datepicker>
    <div>model1: {{ model1 }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="model2"
      :start-date="dateNextYear"
      label="_PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_AND_MODEL_"
      type="date"
    ></a-datepicker>
    <div>model2: {{ model2 }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="model3"
      :focus-start-date="true"
      :start-date="dateNextYear"
      label="_PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_AND_MODEL_AND_FOCUS_START_DATE_"
      type="date"
    ></a-datepicker>
    <div>model3: {{ model3 }}</div>
  </div>
</div>
```

```js
import {
  computed,
  ref,
} from "vue";

import { 
  ADatepicker,
} from "aloha-vue";
    
export default {
  name: "PageDatepickerStartDate",
  components: {
    ADatepicker,
  },
  setup() {
    const model1 = ref(undefined);
    const model2 = ref("2025-05-16");
    const model3 = ref("2025-05-16");

    const dateNextYear = computed(() => {
      const date = new Date();
      date.setFullYear(date.getFullYear() + 1);

      return date.toISOString();
    });
    
    return {
      dateNextYear,
      model1,
      model2,
      model3,
    };
  },
};
```

## Time precision

Use the **time-precision** prop to choose whether the time panel shows only hours, hours with minutes, or hours with minutes and seconds. The example below shows this for both **datetime** and **time**.

*props: `type`, `time-precision`*

```html
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="modelDatetimeHour"
      label="_PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_HOUR_"
      time-precision="hour"
      type="datetime"
    ></a-datepicker>
    <div>modelDatetimeHour: {{ modelDatetimeHour }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="modelDatetimeMinute"
      class="a_mt_3"
      label="_PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_MINUTE_"
      time-precision="minute"
      type="datetime"
    ></a-datepicker>
    <div>modelDatetimeMinute: {{ modelDatetimeMinute }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="modelDatetimeSecond"
      class="a_mt_3"
      label="_PAGE_DATEPICKER_LBL_TIME_PRECISION_DATETIME_SECOND_"
      time-precision="second"
      type="datetime"
    ></a-datepicker>
    <div>modelDatetimeSecond: {{ modelDatetimeSecond }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="modelTimeHour"
      class="a_mt_3"
      label="_PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_HOUR_"
      time-precision="hour"
      type="time"
    ></a-datepicker>
    <div>modelTimeHour: {{ modelTimeHour }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="modelTimeMinute"
      class="a_mt_3"
      label="_PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_MINUTE_"
      time-precision="minute"
      type="time"
    ></a-datepicker>
    <div>modelTimeMinute: {{ modelTimeMinute }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="modelTimeSecond"
      class="a_mt_3"
      label="_PAGE_DATEPICKER_LBL_TIME_PRECISION_TIME_SECOND_"
      time-precision="second"
      type="time"
    ></a-datepicker>
    <div>modelTimeSecond: {{ modelTimeSecond }}</div>
  </div>
</div>
```

```js
import {
  ref,
} from "vue";

import {
  ADatepicker,
} from "aloha-vue";

export default {
  name: "PageDatepickerTimePrecision",
  components: {
    ADatepicker,
  },
  setup() {
    const modelDatetimeHour = ref(undefined);
    const modelDatetimeMinute = ref(undefined);
    const modelDatetimeSecond = ref(undefined);
    const modelTimeHour = ref(undefined);
    const modelTimeMinute = ref(undefined);
    const modelTimeSecond = ref(undefined);
    
    return {
      modelDatetimeHour,
      modelDatetimeMinute,
      modelDatetimeSecond,
      modelTimeHour,
      modelTimeMinute,
      modelTimeSecond,
    };
  },
};
```

## Datepicker types

Use the **type** prop to switch between date, time, and datetime selection modes.

*props: `type`*

```html
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="model1"
      label="_PAGE_DATEPICKER_LBL_TYPE_DATE_"
      type="date"
    ></a-datepicker>
    <div>model1: {{ model1 }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="model2"
      :minute-step="1"
      format="HH:mm"
      label="_PAGE_DATEPICKER_LBL_TYPE_TIME_"
      type="time"
    ></a-datepicker>
    <div>model2: {{ model2 }}</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_6 a_columns_count_12_touch">
    <a-datepicker
      v-model="model3"
      label="_PAGE_DATEPICKER_LBL_TYPE_DATETIME_"
      type="datetime"
    ></a-datepicker>
    <div>model3: {{ model3 }}</div>
  </div>
</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ADatepicker,
} from "aloha-vue";
    
export default {
  name: "PageDatepickerType",
  components: {
    ADatepicker,
  },
  setup() {
    const model1 = ref("2025-05-16T06:03:05.000Z");
    const model2 = ref("2025-05-16T06:03:05.000Z");
    const model3 = ref(undefined);
    
    return {
      model1,
      model2,
      model3,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| change | Function | () => {} |  | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| append-to-body | Boolean | false |  | Determines whether the calendar popover is rendered directly inside the document body. |
| class | String / Object |  |  | CSS class or class object applied to the outer datepicker container. |
| clearable | Boolean | true |  | Displays a clear icon that removes the current value from the field. |
| confirm | Boolean | false |  | Requires explicit confirmation before the selected value is emitted. |
| confirm-text | String | "OK" |  | Label of the confirm button shown inside the calendar panel. |
| date-format | String |  |  | Format used for the date tooltip and time header inside the panel. |
| dependencies | Array / Object |  |  | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| disabled | Boolean | false |  | Determines whether the component is disabled. If set to **true**, the component becomes inactive and the user cannot interact with it. |
| editable | Boolean | true |  | Allows typing directly into the input field. If disabled, the value can only be changed via the panel. |
| errors | String / Array |  |  | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| error-icon | String / Object |  |  | Specifies the icon displayed when the component has validation errors. If the component has an input field, the icon is shown inside it; otherwise, it is displayed next to the control. The icon is shown only when **errors** is present. |
| exclude-render-attributes | Array | () => [] |  | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final **DOM**. |
| extra | Object |  |  | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like **"_WELCOME_{{foo}}_{{bar}}_"**, which is translated as **"Welcome {{ foo }}: {{ bar }}"**, you can pass an object like **{ foo: "abc", bar: "123" }**, and the result will be the translation **"Welcome abc: 123"**. |
| first-day-of-week | Number | 1 |  | Sets which day is shown as the first day of the week in the calendar. Allowed values are 1 to 7. |
| focus-start-date | Boolean |  |  | If set, the initial calendar focus is moved to **start-date** when the panel opens. |
| format | String / Object |  |  | Display format used in the input field and for parsing manually entered values. |
| format-save | String |  |  | Format used when saving or emitting the component value. |
| help-text | String |  |  | Help text displayed below the component. Provides the user with additional information or instruction. |
| html-id | String |  |  | Sets the **HTML ID** of the element. Can be used to uniquely identify the component on the page. |
| icon-day | String / Number |  |  | Custom icon displayed inside the input field. |
| id | String / Number | () => uniqueId("a_ui_") |  | The identifier of the component, which can be used to track or refer to the component in the code. |
| id-prefix | String |  |  | Prefix for the component's **ID**. Used to create a unique identifier based on the specified prefix. |
| input-attr | Object | () => ({}) |  | Attributes applied directly to the internal input element of the datepicker. |
| input-class | String / Number / Boolean / Array / Object / Date / Function / Symbol | "a_datepicker__input" |  | **CSS** class(es) applied to the input element. Allows styling the component according to your requirements. |
| input-name | String | "date" |  | Name attribute of the internal input element. |
| is-hide | Boolean |  |  | Determines whether the component should be hidden. If set to **true**, the component is not displayed on the page. |
| is-label-float | Boolean |  |  | Determines whether the label of the component should be positioned above the field. If **true**, the label will move above the text field when focused or when content is present. Deprecated, use label-position. |
| is-render | Boolean | true |  | Indicates whether the component should be rendered. If set to **false**, the component will not be created in the **DOM**. |
| label | String / Number |  |  | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| label-class | String / Object |  |  | **CSS** class(es) applied to the label. Allows customizing the label's style. |
| label-description | String |  |  | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| label-position | "float" / "inset" / "top" | "float" |  | Position of the label: "float", "inset" or "top". The default comes from the component plugin or AFormPlugin (labelPosition). |
| label-screen-reader | String |  |  | Label intended for screen readers. Useful for improving accessibility. |
| max-date | String / Date |  |  | Maximum selectable date. |
| min-date | String / Date |  |  | Minimum selectable date. |
| minute-step | Number | 0 |  | Step used for minutes in the time panel. Allowed values are between 0 and 60. |
| model-dependencies | Object | () => ({}) |  | Determines model dependencies that may affect the visibility or behavior of the component. |
| model-undefined | String / Number / Object / Array / Boolean |  |  | The value used to reset the model to an undefined state. Useful for clearing the model value. |
| model-value | String / Number / Boolean / Array / Object / Date / Function / Symbol |  |  | The current model value associated with the component. Used to manage the data displayed in the component. |
| placeholder | String | null |  | Specifies the placeholder text that will be displayed in the input field until the user enters data. The placeholder helps the user understand what data is expected in the field. |
| placeholders-default | Object | () => ({ date: '_A_DATEPICKER_PLACEHOLDER_DATE_', dateRange: '_A_DATEPICKER_PLACEHOLDER_DATE_RANGE_', timeHour: '_A_DATEPICKER_PLACEHOLDER_TIME_HOUR_', timeMinute: '_A_DATEPICKER_PLACEHOLDER_TIME_MINUTE_', timeSecond: '_A_DATEPICKER_PLACEHOLDER_TIME_SECOND_', datetimeHour: '_A_DATEPICKER_PLACEHOLDER_DATETIME_HOUR_', datetimeMinute: '_A_DATEPICKER_PLACEHOLDER_DATETIME_MINUTE_', datetimeSecond: '_A_DATEPICKER_PLACEHOLDER_DATETIME_SECOND_' }) |  | Defines default placeholder values for different datepicker scenarios when the regular **placeholder** prop is not provided. Supported keys include **date**, **dateRange**, **timeHour**, **timeMinute**, **timeSecond**, **datetimeHour**, **datetimeMinute**, and **datetimeSecond**. |
| placement | String | "bottom-start" |  | Placement of the calendar popover relative to the input field. |
| popup-style | Object | () => ({}) |  | Inline styles applied to the popup calendar container. |
| range | Boolean | false |  | Enables range selection mode. |
| range-separator | String | "~" |  | Separator string used between start and end values in range mode. |
| readonly | Boolean |  |  | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| readonly-default | String | "" |  | The default text that is shown if the value is missing in read-only mode. |
| required | Boolean | false |  | Indicates whether the component is required. If set to **true**, the component requires user input. |
| shortcuts | Boolean / Array | true |  | Shows shortcut presets in the calendar panel. Can be a boolean or a custom shortcuts array. |
| start-date | String / Date |  |  | Initial date used for the first visible calendar view. |
| time-precision | String | "minute" |  | Controls which time units are shown in the time panel. Supported values are **hour**, **minute**, and **second**. |
| type | String | "date" |  | Defines the datepicker mode. Supported values are **date**, **datetime**, **month**, **year**, and **time**. |
| value-type | String / Object | "format" |  | Defines the format of the emitted model value. Supported values are **timestamp**, **format**, **date**, or a custom object. |
| width | String / Number | null |  | Width of the datepicker input. Accepts a number in pixels or any valid CSS width value. |

## CSS variables (`scss/components/ui/ADatepicker.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_datepicker_width` |  | Width of the date field. |
| `--a_datepicker_max_width` |  | Maximum width of the date field. |
| `--a_datepicker_min_width` |  | Minimum width of the date field. |
| `--a_datepicker_color` |  | Text color of the field and of the calendar popup. |
| `--a_datepicker_icon_color` |  | Color of the calendar and clear icons. |
| `--a_datepicker_hover_color` |  | Color of icons and header buttons on hover. |
| `--a_datepicker_divider_color` |  | Color of the lines between the parts of the popup (shortcuts, footer, time list). |
| `--a_datepicker_popup_bg` |  | Background of the calendar popup. |
| `--a_datepicker_popup_border_color` |  | Border color of the calendar popup. |
| `--a_datepicker_popup_border_radius` |  | Corner radius of the calendar popup. |
| `--a_datepicker_popup_box_shadow` |  | Shadow of the calendar popup. |
| `--a_datepicker_cell_border_radius` |  | Corner radius of a day, month or year cell. |
| `--a_datepicker_cell_hover_bg` |  | Background of a cell on hover. |
| `--a_datepicker_cell_active_color` |  | Text color of the selected cell. |
| `--a_datepicker_cell_active_bg` |  | Background of the selected cell. |
| `--a_datepicker_cell_inrange_color` |  | Text color of cells inside a selected range. |
| `--a_datepicker_cell_inrange_bg` |  | Background of cells inside a selected range. |
| `--a_datepicker_cell_disabled_color` |  | Text color of a disabled cell. |
| `--a_datepicker_cell_disabled_bg` |  | Background of a disabled cell. |
| `--a_datepicker_today_color` |  | Text color of today's cell. |
| `--a_datepicker_other_month_color` |  | Text color of days from the previous and the next month. |
