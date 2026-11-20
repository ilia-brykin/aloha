# ACalendar (Calendar)

The **ACalendar** component shows a month, a week or a day with events, like Outlook. Events can last several days and have a color. The names of the months and weekdays come from the current language. The component does not create events: open your own form on the events `day-click` and `time-click`. On paper the buttons are hidden and the whole day is printed.

## Basic usage

`events` is an array of objects with `label`, `start` and `end`. `v-model` is the selected day as `"YYYY-MM-DD"`. The arrow keys move between the days, **Page Up** and **Page Down** change the month.

*props: `events`, `model-value`*

```html
<a-calendar
  v-model="model"
  :events="events"
/>
<p>
  <a-translation
    tag="strong"
    text="_A_CALENDAR_SELECTED_"
  />: {{ model }}
</p>
```

```js
import {
  ref,
} from "vue";

import {
  ACalendar,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    ACalendar,
    ATranslation,
  },
  setup() {
    const events = ref([
      { id: 1, label: "Team meeting", start: "2026-03-03T10:00:00", end: "2026-03-03T11:00:00", color: "primary" },
      { id: 2, label: "Vacation", start: "2026-03-08", end: "2026-03-14", color: "success", isAllDay: true },
      { id: 3, label: "Workshop", start: "2026-03-12T09:00:00", end: "2026-03-13T17:00:00", color: "info" },
      { id: 4, label: "Birthday", start: "2026-03-20", color: "#8e44ad", isAllDay: true },
    ]);
    const model = ref(undefined);

    return {
      events,
      model,
    };
  },
};
```

## Multi-day events and colors

An event from `start` to `end` is a bar over several days and continues in the next week or month. `end` is the last day of the event. `color` is a color of the theme (**primary**, **secondary**, **tertiary**, **success**, **info**, **warning**, **danger**, **gray**) or any CSS color. Events with `isAllDay` have no time. `max-events-per-day="0"` shows all events.

*props: `max-events-per-day`, `color-default`*

```html
<a-calendar
  :events="events"
  :max-events-per-day="0"
/>
```

```js
import {
  ref,
} from "vue";

import {
  ACalendar,
} from "aloha-vue";

export default {
  components: {
    ACalendar,
  },
  setup() {
    const events = ref([
      // color: a color of the theme
      { id: 1, label: "Vacation", start: "2026-03-08", end: "2026-03-14", color: "success", isAllDay: true },
      // no color: colorDefault ("primary")
      { id: 2, label: "Workshop", start: "2026-03-12T09:00:00", end: "2026-03-13T17:00:00" },
      // any CSS color
      { id: 3, label: "Birthday", start: "2026-03-20", color: "#8e44ad", isAllDay: true },
      // continues in the next month
      { id: 4, label: "Conference", start: "2026-03-26", end: "2026-04-02", color: "tertiary", isAllDay: true },
    ]);

    return {
      events,
    };
  },
};
```

## Recurring events

`recurrence` makes an event a series: `{ frequency, interval, weekdays, until, count, exceptions }`. `frequency` is **daily**, **weekly**, **monthly** or **yearly**, `interval` repeats every n-th time, `weekdays` (0 is Sunday) sets the days of a weekly series. A series ends with `until` (the last day) or after `count` occurrences, `exceptions` are skipped days. The occurrences have the sign ↻. `event-click`, `event-drop` and `event-resize` get the item of the series and `occurrence`: the parent decides whether the series or only this occurrence changes.

*props: `key-recurrence`*

```html
<a-calendar
  :events="events"
  @event-click="onEventClick"
/>
<p v-if="lastClick">
  <a-translation
    tag="strong"
    text="_A_CALENDAR_REC_CLICK_"
  />: {{ lastClick }}
</p>
```

```js
// PageCalendarRecurring.js
import {
  ACalendar,
  ATranslation,
} from "aloha-vue";

import RecurringAPI from "./compositionAPI/RecurringAPI";

export default {
  components: {
    ACalendar,
    ATranslation,
  },
  setup() {
    const {
      events,
      lastClick,
      onEventClick,
    } = RecurringAPI({
      events: [
        // Monday to Friday, not on the 12th
        { id: 1, label: "Standup", start: "2026-03-02T09:00:00", end: "2026-03-02T09:15:00", color: "info", recurrence: { frequency: "weekly", weekdays: [1, 2, 3, 4, 5], exceptions: ["2026-03-12"] } },
        // Every second week
        { id: 2, label: "Team meeting", start: "2026-03-05T14:00:00", end: "2026-03-05T15:00:00", color: "primary", recurrence: { frequency: "weekly", interval: 2 } },
        // Every month, six times
        { id: 3, label: "Report", start: "2026-03-15", color: "warning", isAllDay: true, recurrence: { frequency: "monthly", count: 6 } },
        // Every year
        { id: 4, label: "Birthday", start: "2026-03-20", color: "#8e44ad", isAllDay: true, recurrence: { frequency: "yearly" } },
      ],
    });

    return {
      events,
      lastClick,
      onEventClick,
    };
  },
};

// compositionAPI/RecurringAPI.js
import {
  ref,
} from "vue";

export default function RecurringAPI({ events: eventsStart = [] }) {
  const events = ref(eventsStart);
  const lastClick = ref("");

  // The calendar sends the item of the series and the clicked occurrence
  const onEventClick = ({ event, occurrence }) => {
    lastClick.value = `${ event.label }: ${ occurrence ? occurrence.date : "-" }`;
  };

  return {
    events,
    lastClick,
    onEventClick,
  };
}
```

## Week view

`view="week"` shows a week with the hours, the buttons **Month**, **Week** and **Day** switch the view (`v-model:view`). Events with a time lie in the time grid, overlapping events share the width of the day. All-day events and events over several days are bars above the hours. `hourStart` and `hourEnd` limit the hours, `scrollToHour` is the hour visible at the top. `maxEventsPerDay` limits the all-day row too, the others are counted in "+N".

*props: `view`, `views`, `hour-start`, `hour-end`, `scroll-to-hour`, `time-step`*

```html
<a-calendar
  v-model="model"
  v-model:view="view"
  :events="events"
  :hour-start="6"
  :hour-end="22"
/>
<p>
  <a-translation
    tag="strong"
    text="_A_CALENDAR_VIEW_"
  />: {{ view }}
</p>
```

```js
import {
  ref,
} from "vue";

import {
  ACalendar,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    ACalendar,
    ATranslation,
  },
  setup() {
    const events = ref([
      // all day and over several days: in the row above the hours
      { id: 1, label: "Vacation", start: "2026-03-08", end: "2026-03-14", color: "success", isAllDay: true },
      { id: 2, label: "Workshop", start: "2026-03-12T09:00:00", end: "2026-03-13T17:00:00", color: "info" },
      // with a time: in the time grid, overlapping events share the width of the day
      { id: 3, label: "Lunch", start: "2026-03-11T12:00:00", end: "2026-03-11T13:00:00", color: "success" },
      { id: 4, label: "Customer call", start: "2026-03-11T12:30:00", end: "2026-03-11T13:30:00", color: "info" },
      { id: 5, label: "Planning", start: "2026-03-11T12:45:00", end: "2026-03-11T14:00:00", color: "#8e44ad" },
    ]);
    const model = ref("2026-03-11");
    const view = ref("week");

    return {
      events,
      model,
      view,
    };
  },
};
```

## Work week and calendar weeks

`view="workweek"` shows the days of `workWeekDays` (Monday to Friday by default) with the hours, the arrow keys jump over the other days. `isWeekNumbers` shows the calendar week (ISO 8601). `workingHours` shades the hours outside the working hours and the days outside the work week.

*props: `work-week-days`, `is-week-numbers`, `working-hours`*

```html
<a-calendar
  v-model="model"
  view="workweek"
  :views="['month', 'workweek']"
  :events="events"
  :is-week-numbers="true"
  :working-hours="{ start: 8, end: 18 }"
/>
```

```js
import {
  ref,
} from "vue";

import {
  ACalendar,
} from "aloha-vue";

export default {
  components: {
    ACalendar,
  },
  setup() {
    const events = ref([
      { id: 1, label: "Team meeting", start: "2026-03-10T10:00:00", end: "2026-03-10T11:00:00", location: "Room 3" },
      { id: 2, label: "Workshop", start: "2026-03-12T09:00:00", end: "2026-03-13T17:00:00", color: "info" },
    ]);
    const model = ref("2026-03-11");

    return {
      events,
      model,
    };
  },
};
```

## Day view

`view="day"` shows one day with the hours, like the week view. The buttons change the day, the arrow keys too. `views` sets the views of the switch, here only **Day** and **Week**.

*props: `view`, `views`*

```html
<a-calendar
  v-model="model"
  v-model:view="view"
  :events="events"
  :views="['day', 'week']"
  :hour-start="7"
  :hour-end="20"
/>
```

```js
import {
  ref,
} from "vue";

import {
  ACalendar,
} from "aloha-vue";

export default {
  components: {
    ACalendar,
  },
  setup() {
    const events = ref([
      { id: 1, label: "Lunch", start: "2026-03-11T12:00:00", end: "2026-03-11T13:00:00", color: "success" },
      { id: 2, label: "Customer call", start: "2026-03-11T12:30:00", end: "2026-03-11T13:30:00", color: "info" },
      { id: 3, label: "Planning", start: "2026-03-11T12:45:00", end: "2026-03-11T14:00:00", color: "#8e44ad" },
    ]);
    const model = ref("2026-03-11");
    const view = ref("day");

    return {
      events,
      model,
      view,
    };
  },
};
```

## List

`view="agenda"` lists the days of the month with their events: the time, the title and the place (`keyLocation`). The list suits small screens and screen readers.

*props: `view`, `key-location`*

```html
<a-calendar
  view="agenda"
  :views="['month', 'agenda']"
  :events="events"
  :is-event-popover="true"
/>
```

```js
import {
  ref,
} from "vue";

import {
  ACalendar,
} from "aloha-vue";

export default {
  components: {
    ACalendar,
  },
  setup() {
    const events = ref([
      { id: 1, label: "Team meeting", start: "2026-03-10T10:00:00", end: "2026-03-10T11:00:00", location: "Room 3" },
      { id: 2, label: "Workshop", start: "2026-03-12T09:00:00", end: "2026-03-13T17:00:00", color: "info" },
    ]);

    return {
      events,
    };
  },
};
```

## Status

`status` (`keyStatus`): **tentative** is hatched, **cancelled** is crossed out, like in Outlook. Screen readers read the status with the event.

*props: `key-status`*

```html
<a-calendar
  v-model="model"
  view="week"
  :events="events"
/>
```

```js
import {
  ref,
} from "vue";

import {
  ACalendar,
} from "aloha-vue";

export default {
  components: {
    ACalendar,
  },
  setup() {
    const events = ref([
      { id: 1, label: "Confirmed", start: "2026-03-09T09:00:00", end: "2026-03-09T10:00:00" },
      { id: 2, label: "Maybe", start: "2026-03-10T11:00:00", end: "2026-03-10T12:00:00", status: "tentative" },
      { id: 3, label: "Cancelled", start: "2026-03-11T14:00:00", end: "2026-03-11T15:00:00", status: "cancelled", color: "danger" },
    ]);
    const model = ref("2026-03-11");

    return {
      events,
      model,
    };
  },
};
```

## Disabled days

`minDate`, `maxDate` and `disabledDates` (an array of dates or a function of the day) disable days: they are hatched and cannot be chosen, they get no event by dragging and no selection. Here the 12th and the 19th are holidays.

*props: `min-date`, `max-date`, `disabled-dates`*

```html
<a-calendar
  v-model="model"
  :min-date="minDate"
  :max-date="maxDate"
  :disabled-dates="isHoliday"
/>
<p>
  <a-translation
    tag="strong"
    text="_A_CALENDAR_SELECTED_"
  />: {{ model }}
</p>
```

```js
import {
  ref,
} from "vue";

import {
  ACalendar,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    ACalendar,
    ATranslation,
  },
  setup() {
    const model = ref(undefined);
    const minDate = "2026-03-03";
    const maxDate = "2026-03-25";
    // disabledDates: an array of dates or a function of the day ("YYYY-MM-DD")
    const HOLIDAYS = ["2026-03-12", "2026-03-19"];
    const isHoliday = day => HOLIDAYS.indexOf(day) !== -1;

    return {
      isHoliday,
      maxDate,
      minDate,
      model,
    };
  },
};
```

## Many events in one day

`maxEventsPerDay` limits the events shown in a day (3 by default). The others are counted in a button **+N**, which emits the event `more-click` with all events of the day.

*props: `max-events-per-day`*

```html
<a-calendar
  :events="events"
  :max-events-per-day="2"
  @more-click="onMoreClick"
/>
<div v-if="day">
  <a-translation
    tag="strong"
    text="_A_CALENDAR_MAX_EVENTS_LIST_"
  />: {{ day }}
  <ul>
    <li
      v-for="event in dayEvents"
      :key="event.id"
    >{{ event.label }}</li>
  </ul>
</div>
```

```js
import {
  ref,
} from "vue";

import {
  ACalendar,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    ACalendar,
    ATranslation,
  },
  setup() {
    const events = ref([
      { id: 1, label: "Team meeting", start: "2026-03-03T10:00:00", end: "2026-03-03T11:00:00", color: "primary" },
      { id: 2, label: "Vacation", start: "2026-03-08", end: "2026-03-14", color: "success", isAllDay: true },
      { id: 3, label: "Workshop", start: "2026-03-12T09:00:00", end: "2026-03-13T17:00:00", color: "info" },
      { id: 4, label: "Birthday", start: "2026-03-20", color: "#8e44ad", isAllDay: true },
    ]);
    const dayEvents = ref([]);
    const day = ref(undefined);

    const onMoreClick = ({ date, events: eventsOfDay }) => {
      day.value = date;
      dayEvents.value = eventsOfDay;
    };

    return {
      day,
      dayEvents,
      events,
      onMoreClick,
    };
  },
};
```

## Slots

The slot `header` replaces the title and the buttons, `day` the day number and `event` the content of an event.

```html
<a-calendar
  :events="events"
>
  <template v-slot:header="{ title, goToPreviousMonth, goToNextMonth }">
    <div class="a_d_flex a_align_items_center a_gap_2">
      <a-button
        class="a_btn a_btn_link"
        text="←"
        text-screen-reader="_A_CALENDAR_PREVIOUS_MONTH_"
        @click="goToPreviousMonth"
      />
      <h3 class="a_m_0">{{ title }}</h3>
      <a-button
        class="a_btn a_btn_link"
        text="→"
        text-screen-reader="_A_CALENDAR_NEXT_MONTH_"
        @click="goToNextMonth"
      />
    </div>
  </template>
  <template v-slot:day="{ day, events: eventsOfDay }">
    <span>{{ day.day }}</span>
    <span
      v-if="eventsOfDay.length"
      class="a_badge a_badge_secondary a_ml_auto"
      aria-hidden="true"
    >{{ eventsOfDay.length }}</span>
  </template>
  <template v-slot:event="{ event, isStart }">
    <strong v-if="isStart">{{ event.label }}</strong>
    <span v-else>… {{ event.label }}</span>
  </template>
</a-calendar>
```

```js
import {
  ref,
} from "vue";

import {
  AButton,
  ACalendar,
} from "aloha-vue";

export default {
  components: {
    AButton,
    ACalendar,
  },
  setup() {
    const events = ref([
      { id: 1, label: "Team meeting", start: "2026-03-03T10:00:00", end: "2026-03-03T11:00:00", color: "primary" },
      { id: 2, label: "Vacation", start: "2026-03-08", end: "2026-03-14", color: "success", isAllDay: true },
      { id: 3, label: "Workshop", start: "2026-03-12T09:00:00", end: "2026-03-13T17:00:00", color: "info" },
      { id: 4, label: "Birthday", start: "2026-03-20", color: "#8e44ad", isAllDay: true },
    ]);

    return {
      events,
    };
  },
};
```

## Details by a click

`isEventPopover`: a click on an event opens its details at the event: the time, the place and the description (`keyLocation`, `keyDescription`). The popover gets the focus, Escape closes it and gives the focus back to the event. The slot `popoverActions` adds buttons, `popover` replaces the content.

*props: `is-event-popover`, `key-location`, `key-description`*

```html
<a-calendar
  :events="events"
  :is-event-popover="true"
>
  <template v-slot:popoverActions="{ event, close }">
    <a-button
      class="a_btn a_btn_outline_danger a_btn_small"
      text="_A_CALENDAR_DETAILS_DELETE_"
      @click="deleteEvent({ event })"
    />
    <a-button
      class="a_btn a_btn_primary a_btn_small"
      text="_A_CALENDAR_DETAILS_EDIT_"
      @click="editEvent({ event, close })"
    />
  </template>
</a-calendar>
<p v-if="lastAction">
  <a-translation
    tag="strong"
    text="_A_CALENDAR_DETAILS_LAST_"
  />: {{ lastAction }}
</p>
```

```js
// PageCalendarPopover.js
import {
  AButton,
  ACalendar,
  ATranslation,
} from "aloha-vue";

import PopoverAPI from "./compositionAPI/PopoverAPI";

export default {
  components: {
    AButton,
    ACalendar,
    ATranslation,
  },
  setup() {
    const {
      deleteEvent,
      editEvent,
      events,
      lastAction,
    } = PopoverAPI({
      events: [
        { id: 1, label: "Team meeting", start: "2026-03-10T10:00:00", end: "2026-03-10T11:00:00", location: "Room 3" },
        { id: 2, label: "Workshop", start: "2026-03-12T09:00:00", end: "2026-03-13T17:00:00", description: "Bring the laptop." },
      ],
    });

    return {
      deleteEvent,
      editEvent,
      events,
      lastAction,
    };
  },
};

// compositionAPI/PopoverAPI.js
import {
  ref,
} from "vue";

export default function PopoverAPI({ events: eventsStart = [] }) {
  const events = ref(eventsStart);
  const lastAction = ref("");

  const editEvent = ({ event, close }) => {
    lastAction.value = event.label;
    close();
  };

  const deleteEvent = ({ event }) => {
    // The popover closes itself when its event is deleted
    events.value = events.value.filter(item => item.id !== event.id);
  };

  return {
    deleteEvent,
    editEvent,
    events,
    lastAction,
  };
}
```

## Creating events

The form is not part of the component. Here a click on a day opens **AModalForm** to create an event, in the week and the day view a click on a time opens it with this time (`time-click`). **Repeat** makes the event a series. A click on an event opens it (an occurrence opens the series) for editing or deleting. The button **Delete** is added with the slot `modalFooterAppend`. Pulling the mouse over a time or over several days (`isRangeSelectable`) opens the form with this time.

```html
<a-button
  class="a_btn a_btn_primary"
  text="_A_CALENDAR_CREATE_BTN_"
  @click="openModalToday"
/>
<a-calendar
  :events="events"
  @day-click="onDayClick"
  @event-click="onEventClick"
  @time-click="onTimeClick"
  :is-range-selectable="true"
  @time-select="onTimeSelect"
  @day-select="onDaySelect"
/>
<a-modal-form
  v-if="isModalVisible"
  v-model="model"
  :data-form="dataForm"
  :header-text="headerText"
  :close="closeModal"
  :save="save"
  :disabled-save="isSaveDisabled"
  class-columns="a_columns a_columns_count_12 a_columns_gap_3"
  class-column-default="a_column a_column_6 a_column_12_touch"
>
  <template
    v-if="isEditing"
    v-slot:modalFooterAppend
  >
    <a-button
      :id="btnDeleteId"
      class="a_btn a_btn_outline_danger"
      text="_A_CALENDAR_CREATE_DELETE_"
      @click="deleteEvent"
    />
  </template>
</a-modal-form>
```

```js
// PageCalendarCreate.js
import {
  AButton,
  ACalendar,
  AModalForm,
} from "aloha-vue";

import CreateAPI from "./compositionAPI/CreateAPI";

export default {
  components: {
    AButton,
    ACalendar,
    AModalForm,
  },
  setup() {
    const {
      btnDeleteId,
      closeModal,
      dataForm,
      deleteEvent,
      events,
      headerText,
      isEditing,
      isModalVisible,
      isSaveDisabled,
      model,
      onDayClick,
      onEventClick,
      onDaySelect,
      onTimeClick,
      onTimeSelect,
      openModalToday,
      save,
    } = CreateAPI();

    return {
      btnDeleteId,
      closeModal,
      dataForm,
      deleteEvent,
      events,
      headerText,
      isEditing,
      isModalVisible,
      isSaveDisabled,
      model,
      onDayClick,
      onEventClick,
      onDaySelect,
      onTimeClick,
      onTimeSelect,
      openModalToday,
      save,
    };
  },
};

// compositionAPI/CreateAPI.js
import {
  computed,
  nextTick,
  ref,
} from "vue";

import {
  AConfirmAPI,
  filterEscapeHtml,
  setFocusToElement,
} from "aloha-vue";

import moment from "moment";

const DATETIME_FORMAT = "YYYY-MM-DD[T]HH:mm:ss.SSSZ";
const BTN_DELETE_ID = "page_calendar_create_btn_delete";

export default function CreateAPI() {
  const events = ref([]);
  const model = ref({});
  const editedId = ref(undefined);
  const isModalVisible = ref(false);

  const dataForm = [
    { type: "text", id: "label", label: "_A_CALENDAR_CREATE_LABEL_", required: true, classColumn: "a_column a_column_12" },
    { type: "datetime", id: "start", label: "_A_CALENDAR_CREATE_START_" },
    { type: "datetime", id: "end", label: "_A_CALENDAR_CREATE_END_" },
    {
      type: "select",
      id: "color",
      label: "_A_CALENDAR_CREATE_COLOR_",
      data: ["primary", "secondary", "tertiary", "success", "info", "warning", "danger", "gray"].map(color => ({ label: color, value: color })),
    },
    { type: "oneCheckbox", id: "isAllDay", label: "_A_CALENDAR_CREATE_ALL_DAY_" },
    {
      type: "select",
      id: "repeat",
      label: "_A_CALENDAR_CREATE_REPEAT_",
      translateData: true,
      data: ["", "daily", "weekly", "monthly", "yearly"].map(frequency => ({
        label: `_A_CALENDAR_CREATE_REPEAT_${ (frequency || "none").toUpperCase() }_`,
        value: frequency,
      })),
    },
  ];

  const isEditing = computed(() => editedId.value !== undefined);

  const headerText = computed(() => {
    return isEditing.value ? "_A_CALENDAR_CREATE_MODAL_EDIT_" : "_A_CALENDAR_CREATE_MODAL_NEW_";
  });

  const isSaveDisabled = computed(() => !model.value.label || !model.value.start);

  const openModalNew = ({ start, end }) => {
    editedId.value = undefined;
    model.value = {
      label: "",
      start: moment(start).format(DATETIME_FORMAT),
      end: moment(end).format(DATETIME_FORMAT),
      color: "primary",
      isAllDay: false,
      repeat: "",
    };
    isModalVisible.value = true;
  };

  const openModalForDate = date => {
    const START = moment(date).hours(9).minutes(0);
    openModalNew({ start: START, end: START.clone().add(1, "hour") });
  };

  // Month view and the heads of the days in the week view
  const onDayClick = ({ date }) => {
    openModalForDate(date);
  };

  // Pulling the mouse over a time or over several days (isRangeSelectable)
  const onTimeSelect = ({ start, end }) => {
    openModalNew({ start, end });
  };

  const onDaySelect = ({ start, end }) => {
    openModalNew({ start, end });
    model.value.isAllDay = true;
  };

  // Week view: a click on a time (the event lasts one hour, not one timeStep)
  const onTimeClick = ({ start }) => {
    openModalNew({ start, end: moment(start).add(1, "hour") });
  };

  const openModalToday = () => {
    openModalForDate(new Date());
  };

  // An occurrence of a series opens the whole series
  const onEventClick = ({ event }) => {
    editedId.value = event.id;
    model.value = { ...event, repeat: event.recurrence?.frequency || "" };
    isModalVisible.value = true;
  };

  const closeModal = () => {
    isModalVisible.value = false;
  };

  // "repeat" of the form becomes the rule of the series (recurrence)
  const getEventFromModel = id => {
    const { repeat, ...EVENT } = model.value;
    return {
      ...EVENT,
      id,
      recurrence: repeat ? { ...EVENT.recurrence, frequency: repeat } : undefined,
    };
  };

  const save = () => {
    if (!isEditing.value) {
      events.value = [...events.value, getEventFromModel(Date.now())];
    } else {
      events.value = events.value.map(event => event.id === editedId.value ? getEventFromModel(editedId.value) : event);
    }
    closeModal();
  };

  const {
    closeConfirm,
    openConfirm,
  } = AConfirmAPI();

  // The title is typed by the user and the body of the confirm is HTML
  const deleteEvent = () => {
    openConfirm({
      headerText: "_A_CALENDAR_CREATE_DELETE_CONFIRM_HEADER_",
      bodyHtml: "_A_CALENDAR_CREATE_DELETE_CONFIRM_BODY_{{label}}_",
      extra: {
        label: filterEscapeHtml(model.value.label),
      },
      saveButtonText: "_A_CALENDAR_CREATE_DELETE_",
      saveButtonClass: "a_btn a_btn_danger",
      save: () => {
        events.value = events.value.filter(event => event.id !== editedId.value);
        closeConfirm();
        closeModal();
      },
      // Cancel: the focus goes back to the button "Delete" of the form
      close: () => {
        closeConfirm();
        nextTick(() => setFocusToElement({ selector: `#${ BTN_DELETE_ID }` }));
      },
    });
  };

  return {
    btnDeleteId: BTN_DELETE_ID,
    closeModal,
    dataForm,
    deleteEvent,
    events,
    headerText,
    isEditing,
    isModalVisible,
    isSaveDisabled,
    model,
    onDayClick,
    onEventClick,
    onDaySelect,
    onTimeClick,
    onTimeSelect,
    openModalToday,
    save,
  };
}
```

## Drag and drop, resizing

With `isDraggable` events can be dragged. In the month and in the all-day row an event moves to another day and keeps its time, in the time grid it gets the day and the time of the place (rounded to `timeStep`). With `isResizable` the edges of an event change its start and its end: the top and the bottom edge in the time grid, the start and the end edge of a bar in the month and in the all-day row. The calendar does not change the events: it emits `event-drop` and `event-resize` with the new start and end, the parent saves them. A function locks single events, here the birthday. Dragging needs a pointer: for the keyboard offer a form, like in the example "Creating events". With the keyboard: Alt and the arrow keys move the focused event, Alt, Shift and the arrow keys change its end. On a touch screen a long press starts the drag. An occurrence of the standup asks: `detachCalendarOccurrence` changes only this occurrence, `moveCalendarSeries` the whole series (`splitCalendarSeries`: this and the following occurrences).

*props: `is-draggable`, `is-resizable`*

```html
<a-calendar
  v-model="model"
  v-model:view="view"
  :events="events"
  :is-draggable="isDraggable"
  :is-resizable="isDraggable"
  @event-drop="onEventChange"
  @event-resize="onEventChange"
/>
<p v-if="lastDrop">
  <a-translation
    tag="strong"
    text="_A_CALENDAR_DRAG_LAST_"
  />: {{ lastDrop }}
</p>
<a-modal
  v-if="seriesChange"
  header-text="_A_CALENDAR_SERIES_QUESTION_HEADER_"
  body-html="_A_CALENDAR_SERIES_QUESTION_BODY_"
  :close="closeSeriesChange"
  :save="changeOnlyThisOccurrence"
  save-button-text="_A_CALENDAR_SERIES_ONLY_THIS_"
>
  <template v-slot:modalFooterAppend>
    <a-button
      class="a_btn a_btn_outline_primary"
      text="_A_CALENDAR_SERIES_ALL_"
      @click="changeWholeSeries"
    />
  </template>
</a-modal>
```

```js
// PageCalendarDragDrop.js
import {
  AButton,
  ACalendar,
  AModal,
  ATranslation,
} from "aloha-vue";

import DragDropAPI from "./compositionAPI/DragDropAPI";

export default {
  components: {
    AButton,
    ACalendar,
    AModal,
    ATranslation,
  },
  setup() {
    const {
      changeOnlyThisOccurrence,
      changeWholeSeries,
      closeSeriesChange,
      events,
      isDraggable,
      lastDrop,
      model,
      onEventChange,
      seriesChange,
      view,
    } = DragDropAPI({
      events: [
        { id: 1, label: "Team meeting", start: "2026-03-10T10:00:00", end: "2026-03-10T11:00:00" },
        { id: 2, label: "Workshop", start: "2026-03-12T09:00:00", end: "2026-03-13T17:00:00", color: "info" },
        { id: 3, label: "Birthday", start: "2026-03-14", color: "#8e44ad", isAllDay: true, isLocked: true },
        { id: "standup", label: "Standup", start: "2026-03-02T08:30:00", end: "2026-03-02T08:45:00", recurrence: { frequency: "weekly", weekdays: [1, 2, 3, 4, 5] } },
      ],
      date: "2026-03-11",
    });

    return {
      changeOnlyThisOccurrence,
      changeWholeSeries,
      closeSeriesChange,
      events,
      isDraggable,
      lastDrop,
      model,
      onEventChange,
      seriesChange,
      view,
    };
  },
};

// compositionAPI/DragDropAPI.js
import {
  ref,
} from "vue";

import {
  detachCalendarOccurrence,
  moveCalendarSeries,
} from "aloha-vue";

import moment from "moment";

const DATETIME_FORMAT = "YYYY-MM-DD[T]HH:mm:ss.SSSZ";

export default function DragDropAPI({ events: eventsStart = [], date }) {
  const events = ref(eventsStart);
  const model = ref(date);
  const view = ref("week");
  const lastDrop = ref("");
  // An occurrence of a series was moved: the question "only this occurrence or the whole series"
  const seriesChange = ref(undefined);

  // Events with isLocked cannot be dragged
  const isDraggable = event => !event.isLocked;

  const replaceEvents = (id, items) => {
    events.value = [...events.value.filter(item => item.id !== id), ...items];
  };

  const saveEvent = ({ event, start, end }) => {
    const FORMAT = event.isAllDay ? "YYYY-MM-DD" : DATETIME_FORMAT;
    replaceEvents(event.id, [{ ...event, start: moment(start).format(FORMAT), end: moment(end).format(FORMAT) }]);
    lastDrop.value = `${ event.label }: ${ moment(start).format("DD.MM.YYYY HH:mm") } – ${ moment(end).format("DD.MM.YYYY HH:mm") }`;
  };

  // event-drop and event-resize (also with the keyboard): the calendar does not change the events
  const onEventChange = change => {
    if (change.occurrence) {
      seriesChange.value = change;
      return;
    }
    saveEvent(change);
  };

  const changeOnlyThisOccurrence = () => {
    const { series, event } = detachCalendarOccurrence({ item: seriesChange.value.event, ...seriesChange.value });
    replaceEvents(series.id, [series, event]);
    lastDrop.value = event.label;
    seriesChange.value = undefined;
  };

  const changeWholeSeries = () => {
    const SERIES = moveCalendarSeries({ item: seriesChange.value.event, ...seriesChange.value });
    replaceEvents(SERIES.id, [SERIES]);
    lastDrop.value = SERIES.label;
    seriesChange.value = undefined;
  };

  const closeSeriesChange = () => {
    seriesChange.value = undefined;
  };

  return {
    changeOnlyThisOccurrence,
    changeWholeSeries,
    closeSeriesChange,
    events,
    isDraggable,
    lastDrop,
    model,
    onEventChange,
    seriesChange,
    view,
  };
}
```

## Loading

`range-change` tells the shown days: load their events and set `isLoading` meanwhile. The days are covered and `aria-busy` is set.

*props: `is-loading`*

```html
<a-calendar
  :events="events"
  :is-loading="isLoading"
  @range-change="loadEvents"
/>
```

```js
// PageCalendarLoading.js
import {
  ACalendar,
} from "aloha-vue";

import LoadingAPI from "./compositionAPI/LoadingAPI";

export default {
  components: {
    ACalendar,
  },
  setup() {
    const {
      events,
      isLoading,
      loadEvents,
    } = LoadingAPI();

    return {
      events,
      isLoading,
      loadEvents,
    };
  },
};

// compositionAPI/LoadingAPI.js
import {
  ref,
} from "vue";

import moment from "moment";

export default function LoadingAPI() {
  const events = ref([]);
  const isLoading = ref(false);

  // A server would return the events of the shown days: here every day gets an event after a short time
  const loadEvents = ({ start, end }) => {
    isLoading.value = true;
    setTimeout(() => {
      const EVENTS = [];
      for (const DAY = moment(start); DAY.format("YYYY-MM-DD") <= end; DAY.add(3, "days")) {
        EVENTS.push({ id: DAY.format("YYYY-MM-DD"), label: `Loaded ${ DAY.format("DD.MM.") }`, start: DAY.format("YYYY-MM-DD[T]10:00:00") });
      }
      events.value = EVENTS;
      isLoading.value = false;
    }, 800);
  };

  return {
    events,
    isLoading,
    loadEvents,
  };
}
```

## Small calendar

Up to a width of 40rem the calendar becomes compact (container query, not the width of the window): the month shows thin bars instead of the texts, the popover and the list show the details.

```html
<div style="max-width: 22rem;">
  <a-calendar
    :events="events"
    :views="['month', 'agenda']"
    :is-event-popover="true"
  />
</div>
```

```js
import {
  ref,
} from "vue";

import {
  ACalendar,
} from "aloha-vue";

export default {
  components: {
    ACalendar,
  },
  setup() {
    const events = ref([
      { id: 1, label: "Team meeting", start: "2026-03-10T10:00:00", end: "2026-03-10T11:00:00", location: "Room 3" },
      { id: 2, label: "Workshop", start: "2026-03-12T09:00:00", end: "2026-03-13T17:00:00", color: "info" },
    ]);

    return {
      events,
    };
  },
};
```

## Export (iCal)

`getIcs()` returns the events as an iCalendar file (.ics), `downloadIcs({ fileName })` downloads it. The file opens in Outlook, Google Calendar and Apple Calendar. All events are exported, not only the shown days: single events in UTC, a series in the local time (it keeps its hour in summer time) as `RRULE` with `EXDATE`. Without the component the function `getCalendarIcs({ events })` makes the same file, e.g. on a server.

```html
<div class="a_d_flex a_gap_2">
  <a-button
    class="a_btn a_btn_primary"
    text="_A_CALENDAR_EXPORT_DOWNLOAD_"
    @click="download"
  />
  <a-button
    class="a_btn a_btn_outline_secondary"
    text="_A_CALENDAR_EXPORT_PREVIEW_"
    @click="showPreview"
  />
</div>
<a-calendar
  ref="calendarRef"
  :events="events"
/>
<pre v-if="ics">{{ ics }}</pre>
```

```js
// PageCalendarExport.js
import {
  AButton,
  ACalendar,
} from "aloha-vue";

import ExportAPI from "./compositionAPI/ExportAPI";

export default {
  components: {
    AButton,
    ACalendar,
  },
  setup() {
    const {
      calendarRef,
      download,
      events,
      ics,
      showPreview,
    } = ExportAPI({
      events: [
        { id: 1, label: "Team meeting", start: "2026-03-03T10:00:00", end: "2026-03-03T11:00:00" },
        { id: 2, label: "Vacation", start: "2026-03-08", end: "2026-03-14", isAllDay: true },
        { id: "standup", label: "Standup", start: "2026-03-02T09:00:00", end: "2026-03-02T09:15:00", recurrence: { frequency: "weekly", weekdays: [1, 2, 3, 4, 5], exceptions: ["2026-03-12"] } },
      ],
    });

    return {
      calendarRef,
      download,
      events,
      ics,
      showPreview,
    };
  },
};

// compositionAPI/ExportAPI.js
import {
  ref,
} from "vue";

export default function ExportAPI({ events: eventsStart = [] }) {
  const events = ref(eventsStart);
  const calendarRef = ref(undefined);
  const ics = ref("");

  // All events, not only the shown days. A series is exported as RRULE.
  const download = () => {
    calendarRef.value.downloadIcs({ fileName: "aloha-calendar.ics", calendarName: "Aloha" });
  };

  const showPreview = () => {
    ics.value = calendarRef.value.getIcs({ calendarName: "Aloha" });
  };

  return {
    calendarRef,
    download,
    events,
    ics,
    showPreview,
  };
}

// Without the component, e.g. on a server:
// import { getCalendarIcs } from "aloha-vue";
// const ICS = getCalendarIcs({ events, calendarName: "Aloha", keyLabel: "title" });
```

## Import (iCal)

`parseCalendarIcs(text)` reads an .ics file into events of the calendar: `{ events, skipped, warnings }`. The calendar does not save them: show them, let the user confirm and save them on the server. Times in UTC and with `TZID` (also the Windows names of Outlook like "W. Europe Standard Time") become the local time, `RRULE` and `EXDATE` become `recurrence`, a changed occurrence (`RECURRENCE-ID`) becomes a single event and an exception of its series, `DESCRIPTION` and `LOCATION` are kept. What the calendar cannot show is reported: a rule like "the second Tuesday" (the event is imported once) or an unknown time zone (the local time is used). `STATUS` (tentative, cancelled) becomes `status`.

```html
<div class="a_d_flex a_flex_wrap a_gap_3 a_align_items_end">
  <a-input-file
    v-model="file"
    :is-dropzone="true"
    accept=".ics,text/calendar"
    label="_A_CALENDAR_IMPORT_FILE_"
  />
  <a-button
    class="a_btn a_btn_outline_secondary"
    text="_A_CALENDAR_IMPORT_SAMPLE_"
    @click="useSample"
  />
</div>
<template v-if="imported.length || skipped.length || warnings.length">
  <div class="a_d_flex a_align_items_center a_gap_3">
    <a-translation
      tag="strong"
      text="_A_CALENDAR_IMPORT_READ_{{count}}_"
      :extra="{ count: imported.length }"
    />
    <a-button
      v-if="imported.length"
      class="a_btn a_btn_primary"
      text="_A_CALENDAR_IMPORT_SAVE_"
      @click="save"
    />
  </div>
  <div v-if="warnings.length">
    <a-translation
      tag="strong"
      text="_A_CALENDAR_IMPORT_WARNINGS_"
    />
    <ul>
      <li
        v-for="(warning, index) in warnings"
        :key="index"
      >
        <a-translation
          tag="span"
          :text="getCodeText(warning.code)"
          :extra="{ label: warning.label, value: warning.value }"
        />
      </li>
    </ul>
  </div>
  <div v-if="skipped.length">
    <a-translation
      tag="strong"
      text="_A_CALENDAR_IMPORT_SKIPPED_"
    />
    <ul>
      <li
        v-for="(item, index) in skipped"
        :key="index"
      >
        <a-translation
          tag="span"
          :text="getCodeText(item.code)"
          :extra="{ label: item.label }"
        />
      </li>
    </ul>
  </div>
</template>
<a-calendar
  :events="calendarEvents"
/>
```

```js
// PageCalendarImport.js
import {
  AButton,
  ACalendar,
  AInputFile,
  ATranslation,
} from "aloha-vue";

import ImportAPI from "./compositionAPI/ImportAPI";

export default {
  components: {
    AButton,
    ACalendar,
    AInputFile,
    ATranslation,
  },
  setup() {
    const {
      calendarEvents,
      file,
      getCodeText,
      imported,
      save,
      skipped,
      useSample,
      warnings,
    } = ImportAPI({
      getSampleIcs: () => "BEGIN:VCALENDAR\r\n...\r\nEND:VCALENDAR",
    });

    return {
      calendarEvents,
      file,
      getCodeText,
      imported,
      save,
      skipped,
      useSample,
      warnings,
    };
  },
};

// compositionAPI/ImportAPI.js
import {
  computed,
  ref,
  watch,
} from "vue";

import {
  parseCalendarIcs,
} from "aloha-vue";

// The codes of parseCalendarIcs and their texts
const CODE_TEXTS = {
  cancelled: "_A_CALENDAR_IMPORT_CODE_CANCELLED_",
  noStart: "_A_CALENDAR_IMPORT_CODE_NO_START_",
  rruleNotSupported: "_A_CALENDAR_IMPORT_CODE_RRULE_NOT_SUPPORTED_",
  timeZoneUnknown: "_A_CALENDAR_IMPORT_CODE_TIME_ZONE_UNKNOWN_",
};

export default function ImportAPI({ getSampleIcs = () => "" } = {}) {
  // The saved events (here only in the page, in an application on the server)
  const events = ref([]);
  const file = ref(undefined);
  const imported = ref([]);
  const skipped = ref([]);
  const warnings = ref([]);

  // The calendar shows the saved events and the read events before they are saved
  const calendarEvents = computed(() => [...events.value, ...imported.value]);

  const readText = text => {
    const RESULT = parseCalendarIcs(text);
    imported.value = RESULT.events;
    skipped.value = RESULT.skipped;
    warnings.value = RESULT.warnings;
  };

  // AInputFile gives { name, size, type, file }
  watch(file, async value => {
    if (value?.file) {
      readText(await value.file.text());
    }
  });

  const useSample = () => {
    readText(getSampleIcs());
  };

  const getCodeText = code => CODE_TEXTS[code] || code;

  // In an application: send imported.value to the server and save it there
  const save = () => {
    events.value = [...events.value, ...imported.value];
    imported.value = [];
    skipped.value = [];
    warnings.value = [];
    file.value = undefined;
  };

  return {
    calendarEvents,
    file,
    getCodeText,
    imported,
    save,
    skipped,
    useSample,
    warnings,
  };
}
```

## ACalendar

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| colorDefault | String | "primary" |  | The color of events without a color. |
| disabledDates | Array \| Function | undefined |  | Days that cannot be chosen: an array of dates or a function that gets the day ("YYYY-MM-DD") and returns true. |
| events | Array | [] |  | The events. An event without a valid start is ignored. |
| firstDayOfWeek | Number | 1 |  | The first day of the week: 0 is Sunday, 1 is Monday. The default can be set with AComponentsPlugin (also for ADatepicker). |
| hourEnd | Number | 24 |  | Week and day view: the hour where the time grid ends (1 to 24). |
| hourStart | Number | 0 |  | Week and day view: the hour where the time grid starts (0 to 23). |
| id | String | uniqueId("a_calendar_") |  | The id of the component. The title has the id `{id}_title`. |
| isDraggable | Boolean \| Function | false |  | Whether the events can be dragged. A function gets the event and returns true or false. |
| isEventPopover | Boolean | false |  | Whether a click on an event opens its details at the event. |
| isLoading | Boolean | false |  | Covers the days while the events are loaded. |
| isRangeSelectable | Boolean | false |  | Whether pulling the mouse selects a time (`time-select`) or several days (`day-select`), e.g. to create an event. |
| isResizable | Boolean \| Function | false |  | Whether the start and the end of the events can be changed by pulling their edges. A function gets the event and returns true or false. |
| isWeekNumbers | Boolean | false |  | Shows the calendar weeks (ISO 8601). |
| keyColor | String \| Function | "color" |  | The key (or a function) of the color of an event. |
| keyDescription | String \| Function | "description" |  | The key (or a function) of the description of an event (popover). |
| keyEnd | String \| Function | "end" |  | The key (or a function) of the end of an event. The end is the last day of the event. Without an end the event lasts one day. |
| keyId | String \| Function | "id" |  | The key (or a function) of the id of an event. |
| keyIsAllDay | String \| Function | "isAllDay" |  | The key (or a function) for events without a time. |
| keyLabel | String \| Function | "label" |  | The key (or a function) of the title of an event. |
| keyLocation | String \| Function | "location" |  | The key (or a function) of the place of an event (popover, list). |
| keyRecurrence | String \| Function | "recurrence" |  | The key (or a function) of the rule of a recurring event: `{ frequency, interval, weekdays, until, count, exceptions }`. |
| keyStart | String \| Function | "start" |  | The key (or a function) of the start of an event: a Date, a timestamp or a string like `"2026-03-10"` or `"2026-03-10T09:00:00"`. |
| keyStatus | String \| Function | "status" |  | The key (or a function) of the status of an event: **tentative** or **cancelled**. |
| maxDate | String \| Date \| Number | undefined |  | The last day that can be chosen. |
| maxEventsPerDay | Number | 3 |  | The maximum number of events shown in a day of the month and in the all-day row of the week. 0 shows all events. |
| minDate | String \| Date \| Number | undefined |  | The first day that can be chosen. |
| modelValue | String \| Date \| Number | undefined |  | The selected day. The calendar shows its month, week or day. |
| scrollToHour | Number | 8 |  | Week and day view: the hour visible at the top of the time grid. |
| timeStep | Number | 30 |  | Week and day view: the minutes to which the start of `time-click` is rounded. |
| view | String | "month" |  | The view: **month**, **week**, **workweek**, **day** or **agenda**. Works with `v-model:view`. |
| views | Array | ["month", "week", "day"] |  | The views of the switch in the header. With one view the switch is hidden. |
| workingHours | Object | undefined |  | The working hours of the time grid, e.g. `{ start: 8, end: 18 }`: the other hours and the days outside `workWeekDays` are shaded. |
| workWeekDays | Array | [1, 2, 3, 4, 5] |  | The days of the work week (0 is Sunday) for `view="workweek"` and `workingHours`. |

## Events

| name | description |
| --- | --- |
| day-click | A click on a day: `{ date, events, $event }`. |
| day-select | Several days were selected by pulling the mouse (`isRangeSelectable`): `{ start, end, $event }` as "YYYY-MM-DD". |
| event-click | A click on an event: `{ event, start, end, occurrence, $event }`. `occurrence` (only for a series): `{ date, start, end }` of the clicked occurrence. |
| event-drop | An event was dropped at another place: `{ event, start, end, occurrence, $event }`. The duration stays the same. |
| event-resize | The start or the end of an event was changed by pulling its edge: `{ event, start, end, occurrence, $event }`. |
| more-click | A click on **+N**: `{ date, events, $event }`. |
| range-change | The shown days have changed (also when the calendar is mounted): `{ start, end, month, view }`. Load the events of these days here. |
| time-click | Week and day view, a click on an empty place of the time grid: `{ date, start, end, $event }`. `end` is `start` plus `timeStep`. |
| time-select | A time was selected by pulling the mouse (`isRangeSelectable`): `{ date, start, end, $event }`. |
| update:modelValue | The selected day as `"YYYY-MM-DD"`. |
| update:view | The view has changed: **month**, **week** or **day**. |

## Slots

| name | description |
| --- | --- |
| day | The content of a day: `{ day, events }`. |
| event | The content of an event: `{ event, start, end, isStart, isEnd, isRecurring }`. `isStart` and `isEnd` are false if the bar continues in another week. |
| header | The header: `{ title, range, view, views, changeView, goToPrevious, goToNext, goToToday }`. |
| popover | The content of the popover: `{ event, occurrence, close }`. |
| popoverActions | Buttons in the popover: `{ event, occurrence, close }`. |

## Exposes

| name | type | description |
| --- | --- | --- |
| changeView | Function | Shows a view: `"month"`, `"week"` or `"day"`. |
| closePopover | Function | Closes the popover. |
| downloadIcs | Function | Downloads the events as an .ics file: `{ fileName = "calendar.ics", calendarName, uidDomain }`. |
| focusDay | Function | Focuses a day (`"YYYY-MM-DD"`) and shows its month. |
| getIcs | Function | Returns the events as the text of an .ics file: `{ calendarName, uidDomain }`. The UID of an event is `id@uidDomain` (default "aloha-vue"). |
| goToDate | Function | Shows the month of a date. |
| goToNext | Function | Shows the next month, week or day. |
| goToNextMonth | Function | The same as `goToNext` (the name of the first version). |
| goToPrevious | Function | Shows the previous month, week or day. |
| goToPreviousMonth | Function | The same as `goToPrevious` (the name of the first version). |
| goToToday | Function | Shows the current month. |

## Translations

| key | en |
| --- | --- |
| `_A_CALENDAR_PREVIOUS_MONTH_` | Previous month |
| `_A_CALENDAR_NEXT_MONTH_` | Next month |
| `_A_CALENDAR_TODAY_` | Today |
| `_A_CALENDAR_MORE_{{count}}_` | +{{count}} more |
| `_A_CALENDAR_EVENTS_{{count}}_` | Events: {{count}} |
| `_A_CALENDAR_PREVIOUS_WEEK_` | Previous week |
| `_A_CALENDAR_NEXT_WEEK_` | Next week |
| `_A_CALENDAR_VIEW_` | View |
| `_A_CALENDAR_VIEW_MONTH_` | Month |
| `_A_CALENDAR_VIEW_WEEK_` | Week |
| `_A_CALENDAR_ALL_DAY_` | All day |
| `_A_CALENDAR_PREVIOUS_DAY_` | Previous day |
| `_A_CALENDAR_NEXT_DAY_` | Next day |
| `_A_CALENDAR_VIEW_DAY_` | Day |
| `_A_CALENDAR_RECURRING_` | recurring |
| `_A_CALENDAR_VIEW_WORKWEEK_` | Work week |
| `_A_CALENDAR_VIEW_AGENDA_` | List |
| `_A_CALENDAR_AGENDA_EMPTY_` | No events |
| `_A_CALENDAR_WEEK_NUMBER_SHORT_` | W |
| `_A_CALENDAR_WEEK_NUMBER_{{week}}_` | Week {{week}} |
| `_A_CALENDAR_DAY_DISABLED_` | not available |
| `_A_CALENDAR_STATUS_TENTATIVE_` | tentative |
| `_A_CALENDAR_STATUS_CANCELLED_` | cancelled |
| `_A_CALENDAR_LOADING_` | Loading events… |
| `_A_CALENDAR_POPOVER_CLOSE_` | Close |
| `_A_CALENDAR_POPOVER_TIME_` | Time |
| `_A_CALENDAR_POPOVER_LOCATION_` | Location |
| `_A_CALENDAR_POPOVER_DESCRIPTION_` | Description |
| `_A_CALENDAR_KEYBOARD_HINT_` | Alt and arrow keys: move the event, Alt, Shift and arrow keys: change its end. |
| `_A_CALENDAR_KEYBOARD_MOVED_{{label}}_{{time}}_` | "{{label}}" moved: {{time}} |
| `_A_CALENDAR_KEYBOARD_RESIZED_{{label}}_{{time}}_` | Duration of "{{label}}" changed: {{time}} |

## CSS variables (`scss/components/ACalendar.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_calendar_gap` |  | Space between the header and the month. |
| `--a_calendar_color` |  | Text color. |
| `--a_calendar_bg` |  | Background of the month. |
| `--a_calendar_border_color` |  | Color of the lines between the days. |
| `--a_calendar_border_radius` |  | Corner radius of the month. |
| `--a_calendar_title_font_size` |  | Font size of the month and the year. |
| `--a_calendar_title_font_weight` |  | Font weight of the title, the weekdays, today and the times. |
| `--a_calendar_weekday_color` |  | Color of the names of the weekdays. |
| `--a_calendar_weekday_font_size` |  | Font size of the names of the weekdays. |
| `--a_calendar_week_min_height` |  | Minimal height of a week. |
| `--a_calendar_day_number_height` |  | Height of the row with the day number. |
| `--a_calendar_day_number_size` |  | Size of the circle around the day number of today. |
| `--a_calendar_day_number_font_size` |  | Font size of the day number. |
| `--a_calendar_day_hover_bg` |  | Background of a day on hover. |
| `--a_calendar_weekend_bg` |  | Background of Saturday and Sunday. |
| `--a_calendar_other_month_color` |  | Color of the days of the previous and the next month. |
| `--a_calendar_selected_bg` |  | Background of the selected day. |
| `--a_calendar_today_bg` |  | Background of the day number of today. |
| `--a_calendar_today_color` |  | Color of the day number of today. |
| `--a_calendar_event_height` |  | Height of an event. |
| `--a_calendar_event_gap` |  | Space between the events. |
| `--a_calendar_event_font_size` |  | Font size of an event. |
| `--a_calendar_event_border_radius` |  | Corner radius of an event. |
| `--a_calendar_event_accent_width` |  | Width of the colored bar at the start of an event. |
| `--a_calendar_event_accent` |  | Color of the bar (set by the color of the event). |
| `--a_calendar_event_bg` |  | Background of an event (set by the color of the event). |
| `--a_calendar_event_color` |  | Text color of an event (set by the color of the event). |
| `--a_calendar_more_height` |  | Height of the "+N more" row. |
| `--a_calendar_more_color` |  | Color of "+N more". |
| `--a_calendar_gutter_width` |  | Width of the column with the hours. |
| `--a_calendar_hour_height` |  | Height of an hour. |
| `--a_calendar_hour_font_size` |  | Font size of the hours, the times of the events and "All day". |
| `--a_calendar_week_max_height` |  | Maximal height of the time grid, it scrolls inside. |
| `--a_calendar_now_color` |  | Color of the line of the current time. |
| `--a_calendar_drop_color` |  | Border of the day and of the place where a dragged event lands. |
| `--a_calendar_drop_bg` |  | Background of the day and of the place where a dragged event lands. |
| `--a_calendar_recurring_icon_size` |  | Size of the sign of a recurring event. |
| `--a_calendar_resize_handle_size` |  | Size of the edges that change the start and the end of an event. |
| `--a_calendar_week_number_width` |  | Width of the column with the week numbers in the month. |
| `--a_calendar_disabled_color` |  | Text color of a disabled day. |
| `--a_calendar_disabled_stripe` |  | Color of the stripes of a disabled day. |
| `--a_calendar_off_hours_bg` |  | Background of the hours outside the working hours. |
| `--a_calendar_tentative_stripe` |  | Stripes of a tentative event. |
| `--a_calendar_cancelled_opacity` |  | Opacity of a cancelled event. |
| `--a_calendar_popover_bg` |  | Background of the popover with the details of an event. |
| `--a_calendar_popover_shadow` |  | Shadow of the popover. |
| `--a_calendar_popover_max_width` |  | Width of the popover (smaller in a small calendar). |
| `--a_calendar_popover_z_index` |  | Stacking order of the popover. |
| `--a_calendar_agenda_date_width` |  | Width of the column with the days in the agenda. |
| `--a_calendar_agenda_time_width` |  | Width of the times in the agenda. |
| `--a_calendar_small_event_height` |  | Height of the bars of the events in a small month. |
| `--a_calendar_small_week_min_height` |  | Minimal height of a week in a small month. |
