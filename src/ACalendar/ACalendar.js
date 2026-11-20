import {
  h,
} from "vue";

import AButton from "../AButton/AButton";

import ClickAPI from "./compositionAPI/ClickAPI";
import DragAPI from "./compositionAPI/DragAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import FocusAPI from "./compositionAPI/FocusAPI";
import PeriodAPI from "./compositionAPI/PeriodAPI";
import TextsAPI from "./compositionAPI/TextsAPI";
import WeekViewAPI from "./compositionAPI/WeekViewAPI";

import {
  ADatepickerPluginOptions,
} from "../plugins/ADatepickerPlugin";
import {
  CALENDAR_VIEWS,
} from "./const";
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
    hourEnd: {
      type: Number,
      required: false,
      default: 24,
      validator: value => value >= 1 && value <= 24,
    },
    hourStart: {
      type: Number,
      required: false,
      default: 0,
      validator: value => value >= 0 && value <= 23,
    },
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_calendar_"),
    },
    isDraggable: {
      type: [Boolean, Function],
      required: false,
      default: false,
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
    scrollToHour: {
      type: Number,
      required: false,
      default: 8,
    },
    timeStep: {
      type: Number,
      required: false,
      default: 30,
    },
    view: {
      type: String,
      required: false,
      default: "month",
      validator: value => CALENDAR_VIEWS.indexOf(value) !== -1,
    },
    views: {
      type: Array,
      required: false,
      default: () => CALENDAR_VIEWS,
      validator: value => value.every(view => CALENDAR_VIEWS.indexOf(view) !== -1),
    },
  },
  emits: [
    "day-click",
    "event-click",
    "event-drop",
    "more-click",
    "range-change",
    "time-click",
    "update:modelValue",
    "update:view",
  ],
  setup(props, { emit, expose }) {
    const {
      changeView,
      focusableDayKeys,
      goToDate,
      goToNext,
      goToPrevious,
      goToToday,
      isTimeGridView,
      modelValueKey,
      range,
      title,
      viewLocal,
      timeGridDays,
      timeGridWeekdays,
      weekdays,
      weeks,
    } = PeriodAPI(props, { emit });

    const {
      eventsNormalized,
      getEventColorAttributes,
      getEventsForDay,
      weeksWithEvents,
    } = EventsAPI(props, { weeks });

    const {
      getMinutesAtY,
      getTimedStyle,
      hours,
      minuteStart,
      minutesCount,
      nowStyle,
      onClickTime,
      setTimeScrollElement,
      weekView,
    } = WeekViewAPI(props, {
      emit,
      eventsNormalized,
      isTimeGridView,
      timeGridDays,
    });

    const {
      draggingKey,
      dropPreview,
      dropTargetKey,
      isEventDraggable,
      onDragoverDay,
      onDragoverTime,
      onDragstartEvent,
      onDropDay,
      onDropTime,
      resetDrag,
    } = DragAPI(props, {
      emit,
      getMinutesAtY,
      minuteStart,
      minutesCount,
    });

    const {
      focusDay,
      onFocusDay,
      onKeydownDay,
      setDayElement,
      tabbableKey,
    } = FocusAPI(props, {
      focusableDayKeys,
      goToDate,
      isTimeGridView,
      modelValueKey,
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
      getEventTimeRangeText,
      getEventTimeText,
      getHourText,
      getMoreText,
      getText,
    } = TextsAPI();

    expose({
      changeView,
      focusDay,
      goToDate,
      goToNext,
      goToPrevious,
      goToToday,
      // the names of the first version, they change the period of the current view
      goToNextMonth: goToNext,
      goToPreviousMonth: goToPrevious,
    });

    return {
      changeView,
      draggingKey,
      dropPreview,
      dropTargetKey,
      getDayAriaLabel,
      getEventAriaLabel,
      getEventColorAttributes,
      getEventsForDay,
      getEventTimeRangeText,
      getEventTimeText,
      getHourText,
      getMoreText,
      getText,
      getTimedStyle,
      goToNext,
      goToPrevious,
      goToToday,
      hours,
      isEventDraggable,
      isTimeGridView,
      modelValueKey,
      nowStyle,
      onClickDay,
      onClickEvent,
      onClickMore,
      onClickTime,
      onDragoverDay,
      onDragoverTime,
      onDragstartEvent,
      onDropDay,
      onDropTime,
      onFocusDay,
      onKeydownDay,
      range,
      resetDrag,
      setDayElement,
      setTimeScrollElement,
      tabbableKey,
      timeGridWeekdays,
      title,
      viewLocal,
      weekdays,
      weeksWithEvents,
      weekView,
    };
  },
  methods: {
    renderHeader() {
      if (this.$slots.header) {
        return this.$slots.header({
          title: this.title,
          range: this.range,
          view: this.viewLocal,
          views: this.views,
          changeView: this.changeView,
          goToNext: this.goToNext,
          goToPrevious: this.goToPrevious,
          goToToday: this.goToToday,
          goToNextMonth: this.goToNext,
          goToPreviousMonth: this.goToPrevious,
        });
      }
      const TEXT_PREVIOUS = `_A_CALENDAR_PREVIOUS_${ this.viewLocal.toUpperCase() }_`;
      const TEXT_NEXT = `_A_CALENDAR_NEXT_${ this.viewLocal.toUpperCase() }_`;
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
          this.views.length > 1 && h("div", {
            class: "a_calendar__views",
            role: "group",
            "aria-label": this.getText("_A_CALENDAR_VIEW_"),
          }, this.views.map(view => h(AButton, {
            key: view,
            class: ["a_btn a_btn_small", this.viewLocal === view ? "a_btn_secondary" : "a_btn_outline_secondary"],
            text: `_A_CALENDAR_VIEW_${ view.toUpperCase() }_`,
            type: "button",
            attributes: {
              "aria-pressed": this.viewLocal === view ? "true" : "false",
            },
            onClick: () => this.changeView(view),
          }))),
          h(AButton, {
            class: "a_btn a_btn_outline_secondary a_btn_small",
            iconLeft: ChevronLeft,
            textScreenReader: TEXT_PREVIOUS,
            title: TEXT_PREVIOUS,
            type: "button",
            onClick: this.goToPrevious,
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
            textScreenReader: TEXT_NEXT,
            title: TEXT_NEXT,
            type: "button",
            onClick: this.goToNext,
          }),
        ]),
      ]);
    },

    // An event that can be dragged: dayKeys are the days of the bar, isTimed for the time grid
    getDragAttributes(event, { dayKeys, isTimed = false }) {
      if (!this.isEventDraggable(event)) {
        return {};
      }
      return {
        draggable: "true",
        onDragstart: $event => this.onDragstartEvent({ event, dayKeys, isTimed, $event }),
        onDragend: this.resetDrag,
      };
    },

    // A day where an event can be dropped: it keeps its time
    getDropDayAttributes(day) {
      return {
        onDragover: $event => this.onDragoverDay({ day, $event }),
        onDrop: $event => this.onDropDay({ day, $event }),
      };
    },

    // The day as a button: in the month a cell, in the week the head of a column
    renderDay(day, index, { className = "a_calendar__day", gridColumn = index + 1, content } = {}) {
      const IS_SELECTED = day.key === this.modelValueKey;
      return h("button", {
        key: day.key,
        ref: element => this.setDayElement(day.key, element),
        type: "button",
        class: [className, {
          a_calendar__day_other_month: !day.isCurrentMonth,
          a_calendar__day_selected: IS_SELECTED,
          a_calendar__day_today: day.isToday,
          a_calendar__day_weekend: day.isWeekend,
          a_calendar__drop_target: this.dropTargetKey === day.key,
        }],
        style: {
          gridColumn,
        },
        ...this.getDropDayAttributes(day),
        tabindex: day.key === this.tabbableKey ? 0 : -1,
        "aria-label": this.getDayAriaLabel(day),
        "aria-pressed": IS_SELECTED ? "true" : "false",
        "aria-current": day.isToday ? "date" : undefined,
        onClick: $event => this.onClickDay({ day, $event }),
        onFocus: () => this.onFocusDay({ day }),
        onKeydown: $event => this.onKeydownDay({ day, $event }),
      }, this.$slots.day ?
        this.$slots.day({ day, events: this.getEventsForDay(day.key).map(event => event.item) }) :
        content || h("span", {
          class: "a_calendar__day_number",
        }, day.day));
    },

    renderEventContent({ event, isStart = true, isEnd = true, time }) {
      if (this.$slots.event) {
        return this.$slots.event({
          event: event.item,
          start: event.start,
          end: event.end,
          isStart,
          isEnd,
        });
      }
      return [
        time && h("span", {
          class: "a_calendar__event_time",
        }, time),
        h("span", {
          class: "a_calendar__event_label",
        }, event.label),
      ];
    },

    // A bar in a week of the month or in the all-day row of the week view (gridColumnOffset: the column of the hours)
    renderEvent(segment, { days, gridColumnOffset = 0 }) {
      const EVENT = segment.event;
      const COLOR = this.getEventColorAttributes(EVENT);
      return h("button", {
        key: `${ EVENT.key }_${ segment.start }`,
        type: "button",
        class: ["a_calendar__event", COLOR.class, {
          a_calendar__event_continues_before: !segment.isStart,
          a_calendar__event_continues_after: !segment.isEnd,
          a_calendar__event_dragging: this.draggingKey === EVENT.key,
        }],
        style: {
          gridColumn: `${ segment.start + 1 + gridColumnOffset } / span ${ segment.span }`,
          gridRow: segment.lane + 2,
          ...COLOR.style,
        },
        title: this.getEventAriaLabel(EVENT),
        "aria-label": this.getEventAriaLabel(EVENT),
        ...this.getDragAttributes(EVENT, {
          dayKeys: days.slice(segment.start, segment.start + segment.span).map(day => day.key),
        }),
        onClick: $event => this.onClickEvent({ event: EVENT, $event }),
      }, this.renderEventContent({
        event: EVENT,
        isStart: segment.isStart,
        isEnd: segment.isEnd,
        time: segment.isStart ? this.getEventTimeText(EVENT) : "",
      }));
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

    renderMonth() {
      return h("div", {
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
          ...week.segments.map(segment => this.renderEvent(segment, { days: week.days })),
          ...week.days.map((day, index) => day.hiddenCount > 0 ? this.renderMore(day, index, week.lanesCount) : null),
        ])),
      ]);
    },

    renderTimedEvent(item) {
      const EVENT = item.event;
      const COLOR = this.getEventColorAttributes(EVENT);
      // A short event shows only the start, so the title fits in the line
      const IS_SHORT = item.end - item.start <= 45;
      return h("button", {
        key: EVENT.key,
        type: "button",
        class: ["a_calendar__event a_calendar__event_timed", COLOR.class, {
          a_calendar__event_short: IS_SHORT,
          a_calendar__event_dragging: this.draggingKey === EVENT.key,
        }],
        style: {
          ...this.getTimedStyle(item),
          ...COLOR.style,
        },
        title: this.getEventAriaLabel(EVENT),
        "aria-label": this.getEventAriaLabel(EVENT),
        ...this.getDragAttributes(EVENT, { dayKeys: [EVENT.startDay], isTimed: true }),
        onClick: $event => this.onClickEvent({ event: EVENT, $event }),
      }, this.renderEventContent({
        event: EVENT,
        time: IS_SHORT ? this.getEventTimeText(EVENT) : this.getEventTimeRangeText(EVENT),
      }));
    },

    // The week and the day: a column for every day under the hours
    renderTimeGrid() {
      const VIEW = this.weekView;
      return h("div", {
        class: "a_calendar__week_view",
        style: {
          "--a_calendar_days": VIEW.days.length,
        },
        role: "group",
        "aria-labelledby": this.$slots.header ? undefined : `${ this.id }_title`,
      }, [
        h("div", {
          class: "a_calendar__week_head",
        }, [
          h("div", {
            class: "a_calendar__gutter",
            "aria-hidden": "true",
          }),
          ...VIEW.days.map((day, index) => this.renderDay(day, index, {
            className: "a_calendar__week_day",
            gridColumn: index + 2,
            content: [
              h("span", {
                class: "a_calendar__week_day_name",
                "aria-hidden": "true",
              }, this.timeGridWeekdays[index]),
              h("span", {
                class: "a_calendar__day_number",
              }, day.day),
            ],
          })),
        ]),
        h("div", {
          class: "a_calendar__all_day",
          style: {
            "--a_calendar_lanes": VIEW.allDayLanesCount,
          },
        }, [
          h("div", {
            class: "a_calendar__gutter a_calendar__all_day_label",
          }, this.getText("_A_CALENDAR_ALL_DAY_")),
          ...VIEW.days.map((day, index) => h("div", {
            key: day.key,
            class: ["a_calendar__all_day_cell", {
              a_calendar__day_weekend: day.isWeekend,
              a_calendar__drop_target: this.dropTargetKey === day.key,
            }],
            style: {
              gridColumn: index + 2,
            },
            "aria-hidden": "true",
            ...this.getDropDayAttributes(day),
          })),
          ...VIEW.allDaySegments.map(segment => this.renderEvent(segment, { days: VIEW.days, gridColumnOffset: 1 })),
        ]),
        h("div", {
          ref: this.setTimeScrollElement,
          class: "a_calendar__time_scroll",
        }, [
          h("div", {
            class: "a_calendar__time_grid",
            style: {
              "--a_calendar_hours": this.hours.length,
            },
          }, [
            h("div", {
              class: "a_calendar__gutter a_calendar__hours",
              "aria-hidden": "true",
            }, this.hours.map(hour => h("div", {
              key: hour,
              class: "a_calendar__hour",
            }, this.getHourText(hour)))),
            // A click on an empty place emits time-click. Keyboard: the head of the day emits day-click.
            ...VIEW.days.map(day => h("div", {
              key: day.key,
              class: ["a_calendar__time_column", {
                a_calendar__day_weekend: day.isWeekend,
                a_calendar__drop_target: this.dropTargetKey === `time_${ day.key }`,
              }],
              onClick: $event => this.onClickTime({ day, $event }),
              onDragover: $event => this.onDragoverTime({ day, $event }),
              onDrop: $event => this.onDropTime({ day, $event }),
            }, [
              ...day.timed.map(item => this.renderTimedEvent(item)),
              // Where the dragged event would land
              this.dropPreview?.dayKey === day.key && h("div", {
                class: "a_calendar__drop_preview",
                style: this.dropPreview.style,
                "aria-hidden": "true",
              }, this.getEventTimeRangeText(this.dropPreview)),
              day.isToday && this.nowStyle && h("div", {
                class: "a_calendar__now",
                style: this.nowStyle,
                "aria-hidden": "true",
              }),
            ])),
          ]),
        ]),
      ]);
    },
  },
  render() {
    return h("div", {
      id: this.id,
      class: ["a_calendar", `a_calendar_${ this.viewLocal }`, {
        a_calendar_dragging: this.draggingKey !== undefined,
      }],
    }, [
      this.renderHeader(),
      this.isTimeGridView ? this.renderTimeGrid() : this.renderMonth(),
    ]);
  },
};
