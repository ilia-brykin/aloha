# ADateInput (Date input)

**ADateInput** is a text field for a date, a date with time or a time, also as a range (from – to). The date is typed in the format of the language or chosen in a calendar. The model is an ISO string (`"2025-03-05"`, `"2025-03-05T14:30"`, `"14:30"`), with `range` an array `[start, end]`. The component is new in 3.x and an accessible alternative to `ADatepicker`.

Accessibility:

- Typing is the main way: a normal text field with a label and a visible format ("Format: DD.MM.YYYY") that is also read by the screen reader. Short inputs are understood: `5.3.25`, `050325`, `2025-03-05`, `5.3` (current year); times as `14:30`, `1430`, `9` or `2:30 pm`.
- A wrong date does not disappear: the text stays, the field gets `aria-invalid` and an error with an example, connected with `aria-describedby`.
- The calendar button says which date is selected. The calendar is a modal dialog with a grid (WAI-ARIA date picker dialog): ← → day, ↑ ↓ week, Home End start and end of the week, Page Up Page Down month, with Shift year, Enter or Space selects, Escape closes. The focus stays in the dialog and goes back to the button. The month is announced.
- Every day is read with the full date; today has `aria-current="date"`, the selected day `aria-selected`, days that cannot be chosen `aria-disabled`.
- Several fields (range, date and time) are in a group with the label of the component, every field has its own visible label.
- The button next to the heading of the calendar goes to the months and the years; a month or a year opens the days of it again. The quick choice buttons are a group with a name, the clear button says which field it empties.
- Week numbers are row headers, two months are two grids with the name of the month. The period under the mouse is only a visual help; the chosen dates are said by the buttons and the fields. The button "Today" is disabled when today cannot be chosen.
- The list of times is a `role="listbox"` with the focus on the list and the active option in aria-activedescendant; the arrows skip disabled times, Escape closes it. The inline calendar is a `role="group"` and does not take the focus; after a click a live region says the chosen start and period. With `in-body` the popups are in a container that stays usable in a modal.

## Basic usage

Type a date, e.g. `17.5.90`, and leave the field, or choose it in the calendar. The text is shown in the full format afterwards.

```html
<a-date-input
  v-model="model"
  label="_A_DATE_INPUT_EXAMPLE_BIRTHDAY_"
  help-text="_A_DATE_INPUT_EXAMPLE_BIRTHDAY_HELP_"
  max="2025-12-31"
/>
<pre>{{ model }}</pre>
```

```js
import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const model = ref("1990-05-17");

    return {
      model,
    };
  },
};
```

## Limits and disabled days

`min` and `max` limit the dates, `is-date-disabled` disables single days, here weekends. These days are marked in the calendar and give an error when typed.

```html
<a-date-input
  v-model="model"
  label="_A_DATE_INPUT_EXAMPLE_DELIVERY_"
  :min="min"
  :max="max"
  :is-date-disabled="isWeekend"
/>
<pre>{{ model }}</pre>
```

```js
import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const model = ref(null);
    const TODAY = new Date();
    const toIso = date => `${ date.getFullYear() }-${ `${ date.getMonth() + 1 }`.padStart(2, "0") }-${ `${ date.getDate() }`.padStart(2, "0") }`;
    const min = toIso(TODAY);
    const max = toIso(new Date(TODAY.getFullYear(), TODAY.getMonth() + 2, TODAY.getDate()));
    // the model is "YYYY-MM-DD"; new Date(year, month - 1, day) gives the day of the week without time zone shifts
    const isWeekend = iso => {
      const [YEAR, MONTH, DAY] = iso.split("-").map(Number);
      const WEEKDAY = new Date(YEAR, MONTH - 1, DAY).getDay();
      return WEEKDAY === 0 || WEEKDAY === 6;
    };

    return {
      isWeekend,
      max,
      min,
      model,
    };
  },
};
```

## Date with time and time

`mode="datetime"` shows a date and a time field, the model is `"YYYY-MM-DDTHH:mm"`. `mode="time"` is only a time field.

```html
<a-date-input
  v-model="modelDatetime"
  mode="datetime"
  label="_A_DATE_INPUT_EXAMPLE_APPOINTMENT_"
/>
<pre>{{ modelDatetime }}</pre>
<a-date-input
  v-model="modelTime"
  mode="time"
  label="_A_DATE_INPUT_EXAMPLE_START_TIME_"
/>
<pre>{{ modelTime }}</pre>
```

```js
import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const modelDatetime = ref("2025-03-05T14:30");
    const modelTime = ref("09:00");

    return {
      modelDatetime,
      modelTime,
    };
  },
};
```

## Range

With `range` there are two fields "From" and "To", each with its own calendar; the calendar shows the range. With `mode="datetime"` there are four fields. `default-time` fills the empty time, here `["00:00", "23:59"]`.

```html
<a-date-input
  v-model="modelRange"
  range
  label="_A_DATE_INPUT_EXAMPLE_TRAVEL_"
/>
<pre>{{ modelRange }}</pre>
<a-date-input
  v-model="modelRangeDatetime"
  range
  mode="datetime"
  label="_A_DATE_INPUT_EXAMPLE_EVENT_"
  :default-time="['00:00', '23:59']"
/>
<pre>{{ modelRangeDatetime }}</pre>
```

```js
import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const modelRange = ref(["2025-07-01", "2025-07-14"]);
    const modelRangeDatetime = ref(null);

    return {
      modelRange,
      modelRangeDatetime,
    };
  },
};
```

## Quick choice and clear button

`shortcuts` adds buttons to the calendar, here for periods; a function calculates the dates when it is clicked. `clearable` adds a button that empties a field.

```html
<a-date-input
  v-model="model"
  range
  clearable
  label="_A_DATE_INPUT_EXAMPLE_REPORT_PERIOD_"
  :shortcuts="shortcuts"
/>
<pre>{{ model }}</pre>
```

```js
import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const toIso = date => `${ date.getFullYear() }-${ `${ date.getMonth() + 1 }`.padStart(2, "0") }-${ `${ date.getDate() }`.padStart(2, "0") }`;
    // functions: the dates are calculated when the button is clicked
    const shortcuts = [
      {
        label: "_A_DATE_INPUT_EXAMPLE_LAST_7_DAYS_",
        value: () => {
          const TODAY = new Date();
          return [toIso(new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() - 6)), toIso(TODAY)];
        },
      },
      {
        label: "_A_DATE_INPUT_EXAMPLE_THIS_MONTH_",
        value: () => {
          const TODAY = new Date();
          return [toIso(new Date(TODAY.getFullYear(), TODAY.getMonth(), 1)), toIso(new Date(TODAY.getFullYear(), TODAY.getMonth() + 1, 0))];
        },
      },
      {
        label: "_A_DATE_INPUT_EXAMPLE_LAST_MONTH_",
        value: () => {
          const TODAY = new Date();
          return [toIso(new Date(TODAY.getFullYear(), TODAY.getMonth() - 1, 1)), toIso(new Date(TODAY.getFullYear(), TODAY.getMonth(), 0))];
        },
      },
    ];
    const model = ref(null);

    return {
      model,
      shortcuts,
    };
  },
};
```

## Month and year

`mode="month"` gives the model `"YYYY-MM"` and a calendar of months, `mode="year"` the model `"YYYY"` and a calendar of years.

```html
<a-date-input
  v-model="modelMonth"
  mode="month"
  label="_A_DATE_INPUT_EXAMPLE_BILLING_MONTH_"
/>
<pre>{{ modelMonth }}</pre>
<a-date-input
  v-model="modelYear"
  mode="year"
  label="_A_DATE_INPUT_EXAMPLE_CONSTRUCTION_YEAR_"
  max="2030"
/>
<pre>{{ modelYear }}</pre>
```

```js
import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const modelMonth = ref("2025-03");
    const modelYear = ref("1998");

    return {
      modelMonth,
      modelYear,
    };
  },
};
```

## Own content in the days

The slot `day` adds content to a day, here a mark for holidays with a text for screen readers.

```html
<a-date-input
  v-model="model"
  label="_A_DATE_INPUT_EXAMPLE_VACATION_"
>
  <template v-slot:day="{ date }">
    <template v-if="holidays.includes(date)">
      <!-- a mark for the eyes and a text for screen readers -->
      <span class="a_color_danger" aria-hidden="true">•</span>
      <a-translation class="a_sr_only" tag="span" text="_A_DATE_INPUT_EXAMPLE_HOLIDAY_" />
    </template>
  </template>
</a-date-input>
<pre>{{ model }}</pre>
```

```js
import {
  ref,
} from "vue";

import {
  ADateInput,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
    ATranslation,
  },
  setup() {
    const YEAR = new Date().getFullYear();
    const holidays = [`${ YEAR }-12-24`, `${ YEAR }-12-25`, `${ YEAR }-12-26`, `${ YEAR }-12-31`];
    const model = ref(`${ YEAR }-12-01`);

    return {
      holidays,
      model,
    };
  },
};
```

## Time rules

`:minute-step="15"`, `min-time="08:00"` and `max-time="18:00"` allow only quarter hours during the working day. `with-seconds` adds the seconds.

```html
<a-date-input
  v-model="modelAppointment"
  mode="datetime"
  label="_A_DATE_INPUT_EXAMPLE_APPOINTMENT_"
  :minute-step="15"
  min-time="08:00"
  max-time="18:00"
/>
<pre>{{ modelAppointment }}</pre>
<a-date-input
  v-model="modelMeasurement"
  mode="time"
  with-seconds
  label="_A_DATE_INPUT_EXAMPLE_MEASUREMENT_"
/>
<pre>{{ modelMeasurement }}</pre>
```

```js
import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const modelAppointment = ref("2025-03-05T09:30");
    const modelMeasurement = ref("14:30:15");

    return {
      modelAppointment,
      modelMeasurement,
    };
  },
};
```

## Booking

`:months="2"` shows two months, `:min-days="1"` and `:max-days="14"` limit the length of the stay, `show-today` and `show-week-numbers` add a button and the weeks. Moving the mouse shows the period before the click.

```html
<a-date-input
  v-model="model"
  range
  label="_A_DATE_INPUT_EXAMPLE_STAY_"
  :months="2"
  :min-days="1"
  :max-days="14"
  show-today
  show-week-numbers
/>
<pre>{{ model }}</pre>
```

```js
import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const model = ref(null);

    return {
      model,
    };
  },
};
```

## Week

`mode="week"`: the model is an ISO week (`"2025-W10"`), a day in the calendar chooses its week.

```html
<a-date-input
  v-model="model"
  mode="week"
  label="_A_DATE_INPUT_EXAMPLE_WEEK_"
  show-today
/>
<pre>{{ model }}</pre>
```

```js
import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const model = ref("2025-W10");

    return {
      model,
    };
  },
};
```

## Model format

`utc` saves a moment in UTC, `model-format` saves `"DD.MM.YYYY"` or a timestamp. The fields are the same.

```html
<a-date-input
  v-model="modelUtc"
  mode="datetime"
  utc
  label="_A_DATE_INPUT_EXAMPLE_UTC_"
/>
<pre>{{ modelUtc }}</pre>
<a-date-input
  v-model="modelTokens"
  model-format="DD.MM.YYYY"
  label="_A_DATE_INPUT_EXAMPLE_TOKENS_"
/>
<pre>{{ modelTokens }}</pre>
<a-date-input
  v-model="modelTimestamp"
  mode="datetime"
  model-format="timestamp"
  label="_A_DATE_INPUT_EXAMPLE_TIMESTAMP_"
/>
<pre>{{ modelTimestamp }}</pre>
```

```js
import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const modelUtc = ref("2025-03-05T13:30:00Z");
    const modelTokens = ref("05.03.2025");
    const modelTimestamp = ref(Date.now());

    return {
      modelTimestamp,
      modelTokens,
      modelUtc,
    };
  },
};
```

## Events and methods

The events `open` and `close` and the methods `open(index = 0)` and `close()`.

```html
<a-date-input
  ref="dateInputRef"
  v-model="model"
  label="_A_DATE_INPUT_EXAMPLE_BIRTHDAY_"
  @open="onOpen"
  @close="onClose"
/>
<a-button
  class="a_btn a_btn_outline_primary"
  text="_A_DATE_INPUT_EXAMPLE_OPEN_CALENDAR_"
  @click="openCalendar"
/>
<pre>{{ events }}</pre>
```

```js
import {
  ref,
} from "vue";

import {
  AButton,
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    AButton,
    ADateInput,
  },
  setup() {
    const dateInputRef = ref(undefined);
    const model = ref(null);
    const events = ref([]);

    const onOpen = ({ index }) => events.value.push(`open ${ index }`);
    const onClose = ({ index }) => events.value.push(`close ${ index }`);
    // the method open() of the component; the focus goes into the calendar
    const openCalendar = () => dateInputRef.value.open();

    return {
      dateInputRef,
      events,
      model,
      onClose,
      onOpen,
      openCalendar,
    };
  },
};
```

## Label position

`label-position` like the other form elements: `"float"`, `"inset"` or `"top"`. With several fields (range, date and time) the label is always on top. With a label in the field the format is below it.

```html
<a-date-input
  v-model="model"
  label-position="float"
  label="_A_DATE_INPUT_EXAMPLE_FLOAT_"
/>
<a-date-input
  v-model="model"
  label-position="inset"
  label="_A_DATE_INPUT_EXAMPLE_INSET_"
/>
<a-date-input
  v-model="model"
  label-position="top"
  label="_A_DATE_INPUT_EXAMPLE_TOP_"
/>
```

```js
import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const model = ref(null);

    return {
      model,
    };
  },
};
```

## Typing aids

`auto-format` adds the separators while typing. `show-time-list` adds a list of times; here every 30 minutes from 8 to 18 o'clock, `is-time-disabled` disables the lunch break.

```html
<a-date-input
  v-model="model"
  mode="datetime"
  auto-format
  show-time-list
  label="_A_DATE_INPUT_EXAMPLE_PICKUP_"
  :minute-step="30"
  min-time="08:00"
  max-time="18:00"
  :is-time-disabled="isLunch"
/>
<pre>{{ model }}</pre>
```

```js
import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const model = ref(null);
    // time "HH:mm", date "YYYY-MM-DD" or null
    const isLunch = time => time >= "12:00" && time < "13:00";

    return {
      isLunch,
      model,
    };
  },
};
```

## Calendar in the page

`inline` shows the calendar without a button. With `range` the first click is the start, the second the end; a live region says what was chosen.

```html
<a-date-input
  v-model="model"
  inline
  range
  label="_A_DATE_INPUT_EXAMPLE_TRAVEL_"
/>
<pre>{{ model }}</pre>
```

```js
import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const model = ref(null);

    return {
      model,
    };
  },
};
```

## Quarter

`mode="quarter"`: the model is `"2025-Q1"`, the calendar shows the quarters of a year.

```html
<a-date-input
  v-model="model"
  mode="quarter"
  range
  label="_A_DATE_INPUT_EXAMPLE_QUARTER_"
/>
<pre>{{ model }}</pre>
```

```js
import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const model = ref(["2025-Q1", "2025-Q2"]);

    return {
      model,
    };
  },
};
```

## Footer of the calendar

The slot `footer` adds own content to the calendar, here a note.

```html
<a-date-input
  v-model="model"
  label="_A_DATE_INPUT_EXAMPLE_DELIVERY_"
>
  <template v-slot:footer>
    <a-translation
      class="a_mb_0 a_mr_auto"
      tag="p"
      text="_A_DATE_INPUT_EXAMPLE_FOOTER_TEXT_"
    />
  </template>
</a-date-input>
<pre>{{ model }}</pre>
```

```js
import {
  ref,
} from "vue";

import {
  ADateInput,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
    ATranslation,
  },
  setup() {
    const model = ref(null);

    return {
      model,
    };
  },
};
```

## In a form

In `AForm` the element has the type `dateInput`.

```html
<a-form
  v-model="model"
  :data="dataForm"
/>
<pre>{{ model }}</pre>
```

```js
import {
  ref,
} from "vue";

import {
  AForm,
} from "aloha-vue";

export default {
  components: {
    AForm,
  },
  setup() {
    const dataForm = [
      {
        type: "text",
        id: "title",
        label: "_A_FORM_EXAMPLE_TITLE_",
      },
      {
        type: "dateInput",
        id: "period",
        label: "_A_DATE_INPUT_EXAMPLE_TRAVEL_",
        range: true,
        required: true,
      },
    ];
    const model = ref({
      title: "Aloha",
      period: null,
    });

    return {
      dataForm,
      model,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| auto-format | Boolean | false |  | Adds the separators while the user types at the end: "05" becomes "05.", "14" becomes "14:". Deleting and editing in the middle stay as they are. |
| change | Function | () => {} |  | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| clearable | Boolean | false |  | Shows a button in every field that empties it. Its name is "Clear …" with the label of the field; after a click the focus is in the field. |
| default-time | String / Array |  |  | Time for a date without time, `"HH:mm"` or with `range` `["00:00", "23:59"]`. Only with `mode="datetime"`. |
| dependencies | Array / Object |  |  | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| disabled | Boolean |  |  | Determines whether the component is disabled. If set to **true**, the component becomes inactive and the user cannot interact with it. |
| errors | String / Array |  |  | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| exclude-render-attributes | Array | [] |  | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final **DOM**. |
| extra | Object |  |  | Variables for translations. |
| first-day-of-week | Number |  |  | First day of the week in the calendar: 0 Sunday, 1 Monday. By default from the language (en-US Sunday, de Monday). |
| help-text | String |  |  | Help text displayed below the component. Provides the user with additional information or instruction. |
| html-id | String |  |  | Sets the **HTML ID** of the element. Can be used to uniquely identify the component on the page. |
| id | String / Number | uniqueId("a_date_input_") |  | The identifier of the component, which can be used to track or refer to the component in the code. |
| id-prefix | String |  |  | Prefix for the component's **ID**. Used to create a unique identifier based on the specified prefix. |
| in-body | Boolean | true |  | The calendar and the list of times are in a container in body (`.a_popup_container`), placed with floating-ui. So they are not cut by `overflow: hidden` and stay usable in `AModal`. The default can be set with AComponentsPlugin. |
| inline | Boolean | false |  | The calendar is always visible under the fields: a group in the page instead of a dialog. In a range the first click chooses the start, the second the end. |
| input-attributes | Object | {} |  | An object of attributes applied directly to the input element. Allows adding or customizing additional input attributes. |
| input-class | String / Object |  |  | **CSS** class(es) applied to the input element. Allows styling the component according to your requirements. |
| is-date-disabled | Function |  |  | Function `(isoDate) => Boolean`: days that cannot be chosen, e.g. weekends. The date is `"YYYY-MM-DD"`. With `"month"` it gets `"YYYY-MM"`, with `"year"` `"YYYY"`. |
| is-hide | Boolean |  |  | Determines whether the component should be hidden. If set to **true**, the component is not displayed on the page. |
| is-label-float | Boolean |  |  | Determines whether the label of the component should be positioned above the field. If **true**, the label will move above the text field when focused or when content is present. Deprecated, use label-position. |
| is-render | Boolean | true |  | Indicates whether the component should be rendered. If set to **false**, the component will not be created in the **DOM**. |
| is-time-disabled | Function |  |  | Function `(time, date) => Boolean`: times that cannot be chosen, time `"HH:mm"`, date `"YYYY-MM-DD"` or null. Also in the list of times. |
| label | String / Number |  |  | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| label-class | String / Object |  |  | **CSS** class(es) applied to the label. Allows customizing the label's style. |
| label-description | String |  |  | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| label-position | String |  |  | Position of the label: "float", "inset" or "top". The default comes from the component plugin or AFormPlugin (labelPosition). |
| label-screen-reader | String / Number |  |  | Label intended for screen readers. Useful for improving accessibility. |
| locale | String |  |  | Language of the format and of the calendar, e.g. `"en-US"`. By default the current language of the translations. |
| max | String |  |  | Latest date `"YYYY-MM-DD"`. With `"month"` and `"year"` also `"YYYY-MM"` or `"YYYY"`. |
| max-days | Number |  |  | Range of days: the end minus the start in days at most (01.03. – 03.03. = 2). |
| max-time | String |  |  | Latest time `"HH:mm"`. |
| min | String |  |  | Earliest date `"YYYY-MM-DD"`. With `"month"` and `"year"` also `"YYYY-MM"` or `"YYYY"`. |
| min-days | Number |  |  | Range of days: the end minus the start in days at least. |
| min-time | String |  |  | Earliest time `"HH:mm"`. |
| minute-step | Number | 1 |  | Only every n minutes, e.g. 15. Another time gives an error with the nearest allowed time. |
| mode | String | "date" |  | `"date"`, `"datetime"` (a date and a time field) or `"time"` (without calendar). `"month"` (`"YYYY-MM"`) and `"year"` (`"YYYY"`) give a calendar of months or years. `"week"`: an ISO week `"2025-W10"`. `"quarter"`: an ISO quarter `"2025-Q1"`. |
| model-dependencies | Object | {} |  | Determines model dependencies that may affect the visibility or behavior of the component. |
| model-format | String | "iso" |  | Form of the model: `"iso"` (default), `"timestamp"` (milliseconds), `"date"` (a Date object) or tokens `YYYY MM DD HH mm ss`, e.g. `"DD.MM.YYYY HH:mm"`. The fields always show the format of the language. |
| model-undefined | Array / Object / String | null |  | The value used to reset the model to an undefined state. Useful for clearing the model value. |
| model-value | String / Array / Number / Date |  |  | ISO string: `"2025-03-05"`, `"2025-03-05T14:30"`, `"14:30"`. With `range` an array `[start, end]`. A wrong or incomplete input gives `null`. With `model-format` also a timestamp, a Date or an own format. |
| months | Number | 1 |  | 1 or 2 months side by side in the calendar. |
| placeholder | String |  |  | Specifies the placeholder text that will be displayed in the input field until the user enters data. The placeholder helps the user understand what data is expected in the field. |
| popper-container-id | String | "a_date_input_container" |  | Id of the container in body for in-body. |
| range | Boolean | false |  | Two values: from and to. The end must not be before the start. |
| readonly | Boolean |  |  | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| readonly-default | String | "" |  | The default text that is shown if the value is missing in read-only mode. |
| required | Boolean | false |  | Indicates whether the component is required. If set to **true**, the component requires user input. |
| shortcuts | Array | [] |  | Buttons in the calendar: `[{ label, value }]`. `value` is a model (a string or `[start, end]`) or a function that returns it. The value is checked like a typed one. |
| show-time-list | Boolean | false |  | A button next to a time field with a list of times (`role="listbox"`): every minute-step minutes (else 30) between min-time and max-time. |
| show-today | Boolean | false |  | A button "Today" in the calendar. It is disabled when today cannot be chosen. |
| show-week-numbers | Boolean | false |  | A column with the ISO week numbers in the calendar (always with mode="week"). |
| type | String | "dateInput" |  | Type of the element in `AForm`: `type: "dateInput"`. |
| utc | Boolean | false |  | With `mode="datetime"`: the model is a moment in UTC (`"2025-03-05T13:30:00Z"`), the fields show the local time. |
| with-seconds | Boolean | false |  | The time with seconds: `"HH:mm:ss"`. |

## Events

| name | type | description |
| --- | --- | --- |
| close | Function | The calendar was closed. Argument: `{ index }`. |
| open | Function | The calendar was opened. Argument: `{ index }` (0 the start, 1 the end). |
| update:modelValue | Function | Event triggered when the component's model value is updated. Used to synchronize data between the component and the parent component. |

## Slots

| name | description |
| --- | --- |
| day | Own content in a day of the calendar, e.g. a mark for holidays. Slot props: `date` (`"YYYY-MM-DD"`), `day`, `isDisabled`, `isOtherMonth`, `isSelected`, `isToday`. The full date stays the name of the day; give a mark a text for screen readers (`a_sr_only`). |
| footer | Own content in the footer of the calendar, e.g. a note or buttons. Slot props: `close`. |

## Methods

| name | description |
| --- | --- |
| close | Closes the calendar. |
| focus | Sets the focus to the first field. |
| open | Opens the calendar, `index` 1 is the end of a range. The focus goes into the calendar. |

## Translations

| key | en |
| --- | --- |
| `_A_DATE_INPUT_CHANGE_DATE_` | Change date, selected: {{ date }} |
| `_A_DATE_INPUT_CHOOSE_DATE_` | Choose date |
| `_A_DATE_INPUT_CLOSE_` | Close |
| `_A_DATE_INPUT_DATE_` | Date |
| `_A_DATE_INPUT_DAY_LETTERS_` | DD |
| `_A_DATE_INPUT_END_DATE_` | End date |
| `_A_DATE_INPUT_END_TIME_` | End time |
| `_A_DATE_INPUT_ERROR_DATE_` | Enter a valid date, e.g. {{ example }} |
| `_A_DATE_INPUT_ERROR_DISABLED_` | This date cannot be chosen |
| `_A_DATE_INPUT_ERROR_MAX_` | The date must not be after {{ date }} |
| `_A_DATE_INPUT_ERROR_MIN_` | The date must not be before {{ date }} |
| `_A_DATE_INPUT_ERROR_RANGE_` | The end must not be before the start |
| `_A_DATE_INPUT_ERROR_TIME_` | Enter a valid time, e.g. 14:30 |
| `_A_DATE_INPUT_FORMAT_` | Format: {{ format }} |
| `_A_DATE_INPUT_FROM_` | From |
| `_A_DATE_INPUT_KEYBOARD_HINT_` | Arrow keys move by day and week, Page Up and Page Down by month, with Shift by year, Home and End to the start and end of the week. Enter selects the date, Escape closes the calendar. |
| `_A_DATE_INPUT_MONTH_LETTERS_` | MM |
| `_A_DATE_INPUT_NEXT_MONTH_` | Next month |
| `_A_DATE_INPUT_NEXT_YEAR_` | Next year |
| `_A_DATE_INPUT_PREV_MONTH_` | Previous month |
| `_A_DATE_INPUT_PREV_YEAR_` | Previous year |
| `_A_DATE_INPUT_START_DATE_` | Start date |
| `_A_DATE_INPUT_START_TIME_` | Start time |
| `_A_DATE_INPUT_TIME_` | Time |
| `_A_DATE_INPUT_TIME_LETTERS_` | hh:mm |
| `_A_DATE_INPUT_TO_` | To |
| `_A_DATE_INPUT_YEAR_LETTERS_` | YYYY |

## CSS variables (`scss/components/ui/ADateInput.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_date_input_gap` |  | Space between the fields (date, time, from, to). |
| `--a_date_input_date_width` |  | Width of a date field. |
| `--a_date_input_time_width` |  | Width of a time field. |
| `--a_date_input_icon_color` |  | Color of the calendar button and the buttons of the month. |
| `--a_date_input_hover_color` |  | Color of these buttons on hover. |
| `--a_date_input_dialog_bg` |  | Background of the calendar. |
| `--a_date_input_dialog_border_color` |  | Border color of the calendar. |
| `--a_date_input_dialog_border_radius` |  | Corner radius of the calendar. |
| `--a_date_input_dialog_box_shadow` |  | Shadow of the calendar. |
| `--a_date_input_day_border_radius` |  | Corner radius of a day. |
| `--a_date_input_day_hover_bg` |  | Background of a day on hover. |
| `--a_date_input_day_selected_color` |  | Text color of the selected day. |
| `--a_date_input_day_selected_bg` |  | Background of the selected day. |
| `--a_date_input_day_in_range_color` |  | Text color of the days of the range. |
| `--a_date_input_day_in_range_bg` |  | Background of the days of the range. |
| `--a_date_input_day_disabled_color` |  | Text color of a day that cannot be chosen. |
| `--a_date_input_other_month_color` |  | Text color of the days of the months before and after. |
| `--a_date_input_day_preview_bg` |  | Background of the days of the period under the mouse (range). |
| `--a_date_input_day_preview_border_color` |  | Border of these days. |
| `--a_date_input_time_list_max_height` |  | Maximum height of the list of times. |
