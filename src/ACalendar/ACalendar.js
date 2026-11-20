import {
  h,
} from "vue";

import AButton from "../AButton/AButton";

import ClickAPI from "./compositionAPI/ClickAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import FocusAPI from "./compositionAPI/FocusAPI";
import MonthAPI from "./compositionAPI/MonthAPI";
import TextsAPI from "./compositionAPI/TextsAPI";

import {
  ADatepickerPluginOptions,
} from "../plugins/ADatepickerPlugin";
import {
  ChevronLeft,
  ChevronRight,
} from "./utils/icons";
import {
  uniqueId,
} from "lodash-es";

export default {
  name: "ACalendar",
  props: {
    colorDefault: {
      type: String,
      required: false,
      default: "primary",
    },
    events: {
      type: Array,
      required: false,
      default: () => [],
    },
    firstDayOfWeek: {
      type: Number,
      required: false,
      default: () => ADatepickerPluginOptions.propsDefault.firstDayOfWeek,
      validator: value => value >= 0 && value <= 6,
    },
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_calendar_"),
    },
    keyColor: {
      type: [String, Function],
      required: false,
      default: "color",
    },
    keyEnd: {
      type: [String, Function],
      required: false,
      default: "end",
    },
    keyId: {
      type: [String, Function],
      required: false,
      default: "id",
    },
    keyIsAllDay: {
      type: [String, Function],
      required: false,
      default: "isAllDay",
    },
    keyLabel: {
      type: [String, Function],
      required: false,
      default: "label",
    },
    keyStart: {
      type: [String, Function],
      required: false,
      default: "start",
    },
    maxEventsPerDay: {
      type: Number,
      required: false,
      default: 3,
    },
    modelValue: {
      type: [String, Date, Number],
      required: false,
      default: undefined,
    },
  },
  emits: [
    "day-click",
    "event-click",
    "more-click",
    "range-change",
    "update:modelValue",
  ],
  setup(props, { emit, expose }) {
    const {
      goToDate,
      goToNextMonth,
      goToPreviousMonth,
      goToToday,
      modelValueKey,
      range,
      title,
      weekdays,
      weeks,
    } = MonthAPI(props, { emit });

    const {
      getEventColorAttributes,
      getEventsForDay,
      weeksWithEvents,
    } = EventsAPI(props, { weeks });

    const {
      focusDay,
      onFocusDay,
      onKeydownDay,
      setDayElement,
      tabbableKey,
    } = FocusAPI(props, {
      goToDate,
      modelValueKey,
      weeks,
    });

    const {
      onClickDay,
      onClickEvent,
      onClickMore,
    } = ClickAPI(props, {
      emit,
      getEventsForDay,
      goToDate,
    });

    const {
      getDayAriaLabel,
      getEventAriaLabel,
      getEventTimeText,
      getMoreText,
    } = TextsAPI();

    expose({
      focusDay,
      goToDate,
      goToNextMonth,
      goToPreviousMonth,
      goToToday,
    });

    return {
      getDayAriaLabel,
      getEventAriaLabel,
      getEventColorAttributes,
      getEventsForDay,
      getEventTimeText,
      getMoreText,
      goToNextMonth,
      goToPreviousMonth,
      goToToday,
      modelValueKey,
      onClickDay,
      onClickEvent,
      onClickMore,
      onFocusDay,
      onKeydownDay,
      range,
      setDayElement,
      tabbableKey,
      title,
      weekdays,
      weeksWithEvents,
    };
  },
  methods: {
    renderHeader() {
      if (this.$slots.header) {
        return this.$slots.header({
          title: this.title,
          range: this.range,
          goToNextMonth: this.goToNextMonth,
          goToPreviousMonth: this.goToPreviousMonth,
          goToToday: this.goToToday,
        });
      }
      return h("div", {
        class: "a_calendar__header",
      }, [
        h("div", {
          id: `${ this.id }_title`,
          class: "a_calendar__title",
          "aria-live": "polite",
        }, this.title),
        h("div", {
          class: "a_calendar__header_actions",
        }, [
          h(AButton, {
            class: "a_btn a_btn_outline_secondary a_btn_small",
            iconLeft: ChevronLeft,
            textScreenReader: "_A_CALENDAR_PREVIOUS_MONTH_",
            title: "_A_CALENDAR_PREVIOUS_MONTH_",
            type: "button",
            onClick: this.goToPreviousMonth,
          }),
          h(AButton, {
            class: "a_btn a_btn_outline_secondary a_btn_small",
            text: "_A_CALENDAR_TODAY_",
            type: "button",
            onClick: this.goToToday,
          }),
          h(AButton, {
            class: "a_btn a_btn_outline_secondary a_btn_small",
            iconLeft: ChevronRight,
            textScreenReader: "_A_CALENDAR_NEXT_MONTH_",
            title: "_A_CALENDAR_NEXT_MONTH_",
            type: "button",
            onClick: this.goToNextMonth,
          }),
        ]),
      ]);
    },

    renderDay(day, index) {
      const IS_SELECTED = day.key === this.modelValueKey;
      return h("button", {
        key: day.key,
        ref: element => this.setDayElement(day.key, element),
        type: "button",
        class: ["a_calendar__day", {
          a_calendar__day_other_month: !day.isCurrentMonth,
          a_calendar__day_selected: IS_SELECTED,
          a_calendar__day_today: day.isToday,
          a_calendar__day_weekend: day.isWeekend,
        }],
        style: {
          gridColumn: index + 1,
        },
        tabindex: day.key === this.tabbableKey ? 0 : -1,
        "aria-label": this.getDayAriaLabel(day),
        "aria-pressed": IS_SELECTED ? "true" : "false",
        "aria-current": day.isToday ? "date" : undefined,
        onClick: $event => this.onClickDay({ day, $event }),
        onFocus: () => this.onFocusDay({ day }),
        onKeydown: $event => this.onKeydownDay({ day, $event }),
      }, this.$slots.day ?
        this.$slots.day({ day, events: this.getEventsForDay(day.key).map(event => event.item) }) :
        h("span", {
          class: "a_calendar__day_number",
        }, day.day));
    },

    renderEvent(segment) {
      const EVENT = segment.event;
      const COLOR = this.getEventColorAttributes(EVENT);
      const TIME = segment.isStart ? this.getEventTimeText(EVENT) : "";
      return h("button", {
        key: `${ EVENT.key }_${ segment.start }`,
        type: "button",
        class: ["a_calendar__event", COLOR.class, {
          a_calendar__event_continues_before: !segment.isStart,
          a_calendar__event_continues_after: !segment.isEnd,
        }],
        style: {
          gridColumn: `${ segment.start + 1 } / span ${ segment.span }`,
          gridRow: segment.lane + 2,
          ...COLOR.style,
        },
        title: this.getEventAriaLabel(EVENT),
        "aria-label": this.getEventAriaLabel(EVENT),
        onClick: $event => this.onClickEvent({ event: EVENT, $event }),
      }, this.$slots.event ?
        this.$slots.event({
          event: EVENT.item,
          start: EVENT.start,
          end: EVENT.end,
          isStart: segment.isStart,
          isEnd: segment.isEnd,
        }) :
        [
          TIME && h("span", {
            class: "a_calendar__event_time",
          }, TIME),
          h("span", {
            class: "a_calendar__event_label",
          }, EVENT.label),
        ]);
    },

    renderMore(day, index, lanesCount) {
      return h("button", {
        key: `more_${ day.key }`,
        type: "button",
        class: "a_calendar__more",
        style: {
          gridColumn: index + 1,
          gridRow: lanesCount + 2,
        },
        onClick: $event => this.onClickMore({ day, $event }),
      }, this.getMoreText(day.hiddenCount));
    },
  },
  render() {
    return h("div", {
      id: this.id,
      class: "a_calendar",
    }, [
      this.renderHeader(),
      h("div", {
        class: "a_calendar__month",
        role: "group",
        "aria-labelledby": this.$slots.header ? undefined : `${ this.id }_title`,
      }, [
        // The days have the full date as their name, the short names are only for the eyes
        h("div", {
          class: "a_calendar__weekdays",
          "aria-hidden": "true",
        }, this.weekdays.map(weekday => h("div", {
          class: ["a_calendar__weekday", {
            a_calendar__weekday_weekend: weekday.isWeekend,
          }],
          title: weekday.long,
        }, weekday.short))),
        ...this.weeksWithEvents.map(week => h("div", {
          key: week.key,
          class: "a_calendar__week",
          style: {
            "--a_calendar_lanes": week.lanesCount,
          },
        }, [
          ...week.days.map((day, index) => this.renderDay(day, index)),
          ...week.segments.map(segment => this.renderEvent(segment)),
          ...week.days.map((day, index) => day.hiddenCount > 0 ? this.renderMore(day, index, week.lanesCount) : null),
        ])),
      ]),
    ]);
  },
};
