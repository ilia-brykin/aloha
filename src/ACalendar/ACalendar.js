import {
  h,
} from "vue";

import AButton from "../AButton/AButton";
import ACalendarPopover from "./ACalendarPopover/ACalendarPopover";
import AIcon from "../AIcon/AIcon";
import ALoading from "../ALoading/ALoading";
import {
  getWeekNumber,
} from "./utils/utils";

import AgendaAPI from "./compositionAPI/AgendaAPI";
import ClickAPI from "./compositionAPI/ClickAPI";
import DisabledAPI from "./compositionAPI/DisabledAPI";
import DragAPI from "./compositionAPI/DragAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import ExportAPI from "./compositionAPI/ExportAPI";
import FocusAPI from "./compositionAPI/FocusAPI";
import KeyboardEventAPI from "./compositionAPI/KeyboardEventAPI";
import PeriodAPI from "./compositionAPI/PeriodAPI";
import PopoverAPI from "./compositionAPI/PopoverAPI";
import ResizeAPI from "./compositionAPI/ResizeAPI";
import SelectAPI from "./compositionAPI/SelectAPI";
import TextsAPI from "./compositionAPI/TextsAPI";
import WeekViewAPI from "./compositionAPI/WeekViewAPI";

import {
  ArrowRepeat,
  ChevronLeft,
  ChevronRight,
} from "./utils/icons";
import {
  CALENDAR_VIEWS,
  CALENDAR_VIEWS_DEFAULT,
} from "./const";
import {
  getPropDefault,
} from "../plugins/APropsDefaultPlugin";
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
    disabledDates: {
      type: [Array, Function],
      required: false,
      default: undefined,
    },
    events: {
      type: Array,
      required: false,
      default: () => [],
    },
    firstDayOfWeek: {
      type: Number,
      required: false,
      default: () => getPropDefault("ACalendar", "firstDayOfWeek", 1),
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
    isEventPopover: {
      type: Boolean,
      required: false,
    },
    isLoading: {
      type: Boolean,
      required: false,
    },
    isRangeSelectable: {
      type: Boolean,
      required: false,
    },
    isResizable: {
      type: [Boolean, Function],
      required: false,
      default: false,
    },
    isWeekNumbers: {
      type: Boolean,
      required: false,
    },
    keyColor: {
      type: [String, Function],
      required: false,
      default: "color",
    },
    keyDescription: {
      type: [String, Function],
      required: false,
      default: "description",
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
    keyLocation: {
      type: [String, Function],
      required: false,
      default: "location",
    },
    keyRecurrence: {
      type: [String, Function],
      required: false,
      default: "recurrence",
    },
    keyStart: {
      type: [String, Function],
      required: false,
      default: "start",
    },
    keyStatus: {
      type: [String, Function],
      required: false,
      default: "status",
    },
    maxDate: {
      type: [String, Date, Number],
      required: false,
      default: undefined,
    },
    maxEventsPerDay: {
      type: Number,
      required: false,
      default: 3,
    },
    minDate: {
      type: [String, Date, Number],
      required: false,
      default: undefined,
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
      default: () => CALENDAR_VIEWS_DEFAULT,
      validator: value => value.every(view => CALENDAR_VIEWS.indexOf(view) !== -1),
    },
    workingHours: {
      type: Object,
      required: false,
      default: undefined,
    },
    workWeekDays: {
      type: Array,
      required: false,
      default: () => [1, 2, 3, 4, 5],
    },
  },
  emits: [
    "day-click",
    "day-select",
    "event-click",
    "event-drop",
    "event-resize",
    "more-click",
    "range-change",
    "time-click",
    "time-select",
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
      isAgendaView,
      isDayVisible,
      isTimeGridView,
      modelValueKey,
      range,
      title,
      viewLocal,
      agendaDays,
      timeGridDays,
      timeGridWeekdays,
      weekdays,
      weeks,
    } = PeriodAPI(props, { emit });

    const {
      isDayDisabled,
    } = DisabledAPI(props);

    const {
      eventsNormalized,
      getEventColorAttributes,
      getEventsForDay,
      keys,
      weeksWithEvents,
    } = EventsAPI(props, {
      range,
      weeks,
    });

    const {
      closePopover,
      openPopover,
      popover,
    } = PopoverAPI(props, {
      eventsNormalized,
    });

    const {
      agendaGroups,
    } = AgendaAPI(props, {
      agendaDays,
      getEventsForDay,
    });

    const {
      getMinutesAtY,
      getTimedStyle,
      getWorkingHoursStyle,
      hours,
      minuteEnd,
      minuteStart,
      minutesCount,
      nowStyle,
      onClickTime,
      setTimeScrollElement,
      timeStepLocal,
      weekView,
    } = WeekViewAPI(props, {
      emit,
      eventsNormalized,
      isDayDisabled,
      isTimeGridView,
      timeGridDays,
    });

    const {
      getTimedItemWithPreview,
      isEventResizable,
      resizePreview,
      startResize,
    } = ResizeAPI(props, {
      emit,
      isDayDisabled,
      minuteEnd,
      minuteStart,
      minutesCount,
      timeStepLocal,
    });

    const {
      daySelection,
      isDayInSelection,
      onPointerdownDay,
      onPointerdownTime,
      timeSelection,
    } = SelectAPI(props, {
      emit,
      isDayDisabled,
      minuteEnd,
      minuteStart,
      minutesCount,
      timeStepLocal,
    });

    const {
      draggingKey,
      dropPreview,
      dropTargetKey,
      isEventDraggable,
      onPointerdownEvent,
    } = DragAPI(props, {
      emit,
      getMinutesAtY,
      isDayDisabled,
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
      isDayVisible,
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
      isDayDisabled,
      openPopover,
    });

    const {
      getPopoverTimeText,
      getAgendaDayText,
      getAgendaTimeText,
      getDayAriaLabel,
      getEventAriaLabel,
      getEventTimeRangeText,
      getEventTimeText,
      getHourText,
      getMoreText,
      getText,
    } = TextsAPI();

    const {
      downloadIcs,
      getIcs,
    } = ExportAPI(props, { keys });

    const {
      liveText,
      onKeydownEvent,
    } = KeyboardEventAPI(props, {
      emit,
      getPopoverTimeText,
      goToDate,
      isDayDisabled,
      isEventDraggable,
      isEventResizable,
      range,
      timeStepLocal,
    });

    expose({
      changeView,
      closePopover,
      downloadIcs,
      getIcs,
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
      agendaGroups,
      changeView,
      closePopover,
      daySelection,
      draggingKey,
      dropPreview,
      dropTargetKey,
      getAgendaDayText,
      getAgendaTimeText,
      getDayAriaLabel,
      getEventAriaLabel,
      getEventColorAttributes,
      getPopoverTimeText,
      getEventsForDay,
      getEventTimeRangeText,
      getEventTimeText,
      getHourText,
      getMoreText,
      getText,
      getTimedItemWithPreview,
      getTimedStyle,
      getWorkingHoursStyle,
      goToNext,
      goToPrevious,
      goToToday,
      hours,
      isAgendaView,
      isDayDisabled,
      isDayInSelection,
      isEventDraggable,
      isEventResizable,
      isTimeGridView,
      liveText,
      modelValueKey,
      nowStyle,
      onClickDay,
      onClickEvent,
      onClickMore,
      onClickTime,
      onFocusDay,
      onKeydownDay,
      onKeydownEvent,
      onPointerdownDay,
      onPointerdownEvent,
      onPointerdownTime,
      popover,
      range,
      resizePreview,
      setDayElement,
      setTimeScrollElement,
      startResize,
      tabbableKey,
      timeGridWeekdays,
      timeSelection,
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
      // The work week changes by weeks, the agenda by months
      const PERIOD = { workweek: "WEEK", agenda: "MONTH" }[this.viewLocal] || this.viewLocal.toUpperCase();
      const TEXT_PREVIOUS = `_A_CALENDAR_PREVIOUS_${ PERIOD }_`;
      const TEXT_NEXT = `_A_CALENDAR_NEXT_${ PERIOD }_`;
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

    // An event that can be dragged (mouse, pen, a long press with a finger): dayKeys are the days of the bar, isTimed for the time grid
    getDragAttributes(event, { dayKeys, isTimed = false }) {
      if (!this.isEventDraggable(event)) {
        return {};
      }
      return {
        onPointerdown: $event => this.onPointerdownEvent({ event, dayKeys, isTimed, $event }),
      };
    },

    // Alt + arrows move the event, Alt + Shift + arrows change its end (only if it can be dragged or resized)
    getEventKeyboardAttributes(event, { isTimed = false } = {}) {
      const IS_DRAGGABLE = this.isEventDraggable(event);
      const IS_RESIZABLE = this.isEventResizable(event);
      const SHORTCUTS = [
        ...(IS_DRAGGABLE ? ["Alt+ArrowLeft", "Alt+ArrowRight", "Alt+ArrowUp", "Alt+ArrowDown"] : []),
        ...(IS_RESIZABLE ? (isTimed ? ["Alt+Shift+ArrowUp", "Alt+Shift+ArrowDown"] : ["Alt+Shift+ArrowLeft", "Alt+Shift+ArrowRight"]) : []),
      ];
      return {
        "data-calendar-event-key": event.key,
        "data-calendar-event-base": event.baseKey,
        "aria-keyshortcuts": SHORTCUTS.length ? SHORTCUTS.join(" ") : undefined,
        "aria-describedby": SHORTCUTS.length ? `${ this.id }_keyboard` : undefined,
        onKeydown: $event => this.onKeydownEvent({ event, isTimed, $event }),
      };
    },

    // The edges that change the start and the end: top and bottom in the time grid, start and end of a bar in the month and the all-day row
    renderResizeHandle(event, mode, edge) {
      if (!this.isEventResizable(event)) {
        return null;
      }
      return h("span", {
        class: ["a_calendar__resize_handle", `a_calendar__resize_handle_${ mode }`, `a_calendar__resize_handle_${ edge }`],
        "aria-hidden": "true",
        onPointerdown: $event => this.startResize({ event, mode, edge, $event }),
      });
    },

    isDayTarget(day) {
      return this.dropTargetKey === day.key || this.resizePreview?.dayKey === day.key || this.isDayInSelection(day);
    },

    // data-calendar-day: the day under the pointer while an event is dragged or resized or days are selected
    getDropDayAttributes(day) {
      return {
        "data-calendar-day": day.key,
        onPointerdown: $event => this.onPointerdownDay({ day, $event }),
      };
    },

    // The day as a button: in the month a cell, in the week the head of a column
    renderDay(day, index, { className = "a_calendar__day", gridColumn = index + 1, content } = {}) {
      const IS_SELECTED = day.key === this.modelValueKey;
      const IS_DISABLED = this.isDayDisabled(day.key);
      return h("button", {
        key: day.key,
        ref: element => this.setDayElement(day.key, element),
        type: "button",
        class: [className, {
          a_calendar__day_other_month: !day.isCurrentMonth,
          a_calendar__day_selected: IS_SELECTED,
          a_calendar__day_today: day.isToday,
          a_calendar__day_weekend: day.isWeekend,
          a_calendar__day_disabled: IS_DISABLED,
          a_calendar__drop_target: this.isDayTarget(day),
        }],
        style: {
          gridColumn,
        },
        ...this.getDropDayAttributes(day),
        tabindex: day.key === this.tabbableKey ? 0 : -1,
        "aria-label": this.getDayAriaLabel(day, { isDisabled: IS_DISABLED }),
        "aria-pressed": IS_SELECTED ? "true" : "false",
        // A disabled day stays in the tab order: the arrow keys go over it
        "aria-disabled": IS_DISABLED ? "true" : undefined,
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
          isRecurring: !!event.isRecurring,
        });
      }
      return [
        // The screen readers get "recurring" from aria-label of the event
        event.isRecurring && h(AIcon, {
          class: "a_calendar__event_recurring",
          icon: ArrowRepeat,
          "aria-hidden": "true",
        }),
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
        class: ["a_calendar__event", COLOR.class, EVENT.status && `a_calendar__event_${ EVENT.status }`, {
          a_calendar__event_continues_before: !segment.isStart,
          a_calendar__event_continues_after: !segment.isEnd,
          a_calendar__event_dragging: this.draggingKey === EVENT.key,
          a_calendar__event_draggable: this.isEventDraggable(EVENT),
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
        ...this.getEventKeyboardAttributes(EVENT),
        onClick: $event => this.onClickEvent({ event: EVENT, $event }),
      }, [
        this.renderEventContent({
          event: EVENT,
          isStart: segment.isStart,
          isEnd: segment.isEnd,
          time: segment.isStart ? this.getEventTimeText(EVENT) : "",
        }),
        // Only the first and the last bar of an event over several weeks have the edges
        segment.isStart && this.renderResizeHandle(EVENT, "day", "start"),
        segment.isEnd && this.renderResizeHandle(EVENT, "day", "end"),
      ]);
    },

    // gridColumnOffset: the column of the week numbers or of the hours
    renderMore(day, index, lanesCount, { count = day.hiddenCount, gridColumnOffset = 0 } = {}) {
      return h("button", {
        key: `more_${ day.key }`,
        type: "button",
        class: "a_calendar__more",
        style: {
          gridColumn: index + 1 + gridColumnOffset,
          gridRow: lanesCount + 2,
        },
        onClick: $event => this.onClickMore({ day, $event }),
      }, this.getMoreText(count));
    },

    // The calendar week (ISO 8601) in front of a week of the month or in the head of the week view
    renderWeekNumber(days, { className, style } = {}) {
      const WEEK = getWeekNumber(days);
      return h("div", {
        key: `week_number_${ days[0]?.key }`,
        class: ["a_calendar__week_number", className],
        style,
        title: this.getText("_A_CALENDAR_WEEK_NUMBER_{{week}}_", { week: WEEK }),
        // The days have the full date, the week is only for the eyes
        "aria-hidden": "true",
      }, `${ this.getText("_A_CALENDAR_WEEK_NUMBER_SHORT_") } ${ WEEK }`);
    },

    renderMonth() {
      // The week numbers are the first column
      const OFFSET = this.isWeekNumbers ? 1 : 0;
      return h("div", {
        class: "a_calendar__month",
        role: "group",
        "aria-labelledby": this.$slots.header ? undefined : `${ this.id }_title`,
      }, [
        // The days have the full date as their name, the short names are only for the eyes
        h("div", {
          class: "a_calendar__weekdays",
          "aria-hidden": "true",
        }, [
          this.isWeekNumbers && h("div", {
            class: "a_calendar__weekday a_calendar__week_number_head",
          }, this.getText("_A_CALENDAR_WEEK_NUMBER_SHORT_")),
          ...this.weekdays.map(weekday => h("div", {
            class: ["a_calendar__weekday", {
              a_calendar__weekday_weekend: weekday.isWeekend,
            }],
            title: weekday.long,
          }, weekday.short)),
        ]),
        ...this.weeksWithEvents.map(week => h("div", {
          key: week.key,
          class: "a_calendar__week",
          style: {
            "--a_calendar_lanes": week.lanesCount,
          },
        }, [
          this.isWeekNumbers && this.renderWeekNumber(week.days, {
            style: {
              gridColumn: 1,
              gridRow: "1 / -1",
            },
          }),
          ...week.days.map((day, index) => this.renderDay(day, index, { gridColumn: index + 1 + OFFSET })),
          ...week.segments.map(segment => this.renderEvent(segment, { days: week.days, gridColumnOffset: OFFSET })),
          ...week.days.map((day, index) => day.hiddenCount > 0 ? this.renderMore(day, index, week.lanesCount, { gridColumnOffset: OFFSET }) : null),
        ])),
      ]);
    },

    renderTimedEvent(itemOriginal) {
      // While the end is pulled, the event shows its new end
      const item = this.getTimedItemWithPreview(itemOriginal);
      const EVENT = item.event;
      const COLOR = this.getEventColorAttributes(EVENT);
      // A short event shows only the start, so the title fits in the line
      const IS_SHORT = item.end - item.start <= 45;
      return h("button", {
        key: EVENT.key,
        type: "button",
        class: ["a_calendar__event a_calendar__event_timed", COLOR.class, EVENT.status && `a_calendar__event_${ EVENT.status }`, {
          a_calendar__event_short: IS_SHORT,
          a_calendar__event_dragging: this.draggingKey === EVENT.key,
          a_calendar__event_draggable: this.isEventDraggable(EVENT),
        }],
        style: {
          ...this.getTimedStyle(item),
          ...COLOR.style,
        },
        title: this.getEventAriaLabel(EVENT),
        "aria-label": this.getEventAriaLabel(EVENT),
        ...this.getDragAttributes(itemOriginal.event, { dayKeys: [EVENT.startDay], isTimed: true }),
        ...this.getEventKeyboardAttributes(itemOriginal.event, { isTimed: true }),
        onClick: $event => this.onClickEvent({ event: itemOriginal.event, $event }),
      }, [
        this.renderEventContent({
          event: EVENT,
          time: IS_SHORT ? this.getEventTimeText(EVENT) : this.getEventTimeRangeText(EVENT),
        }),
        this.renderResizeHandle(itemOriginal.event, "time", "start"),
        this.renderResizeHandle(itemOriginal.event, "time", "end"),
      ]);
    },

    renderPopover() {
      const POPOVER = this.popover;
      if (!POPOVER) {
        return null;
      }
      const SLOT_PROPS = {
        event: POPOVER.event.item,
        occurrence: POPOVER.occurrence,
        close: () => this.closePopover({ isFocusAnchor: true }),
      };
      return h(ACalendarPopover, {
        key: POPOVER.event.key,
        anchor: POPOVER.anchor,
        colorAttributes: this.getEventColorAttributes(POPOVER.event),
        event: POPOVER.event,
        id: `${ this.id }_popover`,
        timeText: this.getPopoverTimeText(POPOVER.event),
        onClose: ({ isFocusAnchor }) => this.closePopover({ isFocusAnchor }),
      }, {
        body: this.$slots.popover ? () => this.$slots.popover(SLOT_PROPS) : undefined,
        actions: this.$slots.popoverActions ? () => this.$slots.popoverActions(SLOT_PROPS) : undefined,
      });
    },

    // The agenda: the days of the month with events as a list
    renderAgenda() {
      return h("div", {
        class: "a_calendar__agenda",
        role: "group",
        "aria-labelledby": this.$slots.header ? undefined : `${ this.id }_title`,
      }, this.agendaGroups.length ?
        h("ul", {
          class: "a_calendar__agenda_list",
        }, this.agendaGroups.map(group => h("li", {
          key: group.day.key,
          class: ["a_calendar__agenda_day", {
            a_calendar__agenda_day_today: group.day.isToday,
          }],
        }, [
          h("div", {
            class: "a_calendar__agenda_date",
            "aria-current": group.day.isToday ? "date" : undefined,
          }, this.getAgendaDayText(group.day)),
          h("ul", {
            class: "a_calendar__agenda_events",
          }, group.events.map(event => {
            const COLOR = this.getEventColorAttributes(event);
            return h("li", {
              key: event.key,
            }, h("button", {
              type: "button",
              class: ["a_calendar__agenda_event", COLOR.class, event.status && `a_calendar__event_${ event.status }`],
              style: COLOR.style,
              "aria-label": this.getEventAriaLabel(event),
              onClick: $event => this.onClickEvent({ event, $event }),
            }, [
              h("span", {
                class: "a_calendar__agenda_time",
              }, this.getAgendaTimeText(event)),
              this.renderEventContent({ event }),
              event.location && h("span", {
                class: "a_calendar__agenda_location",
              }, event.location),
            ]));
          })),
        ]))) :
        h("p", {
          class: "a_calendar__agenda_empty",
        }, this.getText("_A_CALENDAR_AGENDA_EMPTY_")));
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
          this.isWeekNumbers ?
            this.renderWeekNumber(VIEW.days, { className: "a_calendar__gutter" }) :
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
              a_calendar__day_disabled: this.isDayDisabled(day.key),
              a_calendar__drop_target: this.isDayTarget(day),
            }],
            style: {
              gridColumn: index + 2,
            },
            "aria-hidden": "true",
            ...this.getDropDayAttributes(day),
          })),
          ...VIEW.allDaySegments.map(segment => this.renderEvent(segment, { days: VIEW.days, gridColumnOffset: 1 })),
          ...VIEW.days.map((day, index) => day.allDayHiddenCount > 0 ?
            this.renderMore(day, index, VIEW.allDayLanesCount, { count: day.allDayHiddenCount, gridColumnOffset: 1 }) :
            null),
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
                a_calendar__day_disabled: this.isDayDisabled(day.key),
                a_calendar__time_column_working_hours: !!this.workingHours,
                a_calendar__drop_target: this.dropTargetKey === `time_${ day.key }`,
              }],
              style: this.getWorkingHoursStyle(day),
              // The time column under the pointer while an event is dragged
              "data-calendar-time-day": day.key,
              onClick: $event => this.onClickTime({ day, $event }),
              onPointerdown: $event => this.onPointerdownTime({ day, $event }),
            }, [
              ...day.timed.map(item => this.renderTimedEvent(item)),
              // Where the dragged event would land
              this.dropPreview?.dayKey === day.key && h("div", {
                class: "a_calendar__drop_preview",
                style: this.dropPreview.style,
                "aria-hidden": "true",
              }, this.getEventTimeRangeText(this.dropPreview)),
              // The selected time
              this.timeSelection?.dayKey === day.key && h("div", {
                class: "a_calendar__drop_preview a_calendar__time_selection",
                style: this.timeSelection.style,
                "aria-hidden": "true",
              }, this.getEventTimeRangeText(this.timeSelection)),
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
    let body;
    if (this.isTimeGridView) {
      body = this.renderTimeGrid();
    } else if (this.isAgendaView) {
      body = this.renderAgenda();
    } else {
      body = this.renderMonth();
    }
    return h("div", {
      id: this.id,
      class: ["a_calendar", `a_calendar_${ this.viewLocal }`, {
        a_calendar_dragging: this.draggingKey !== undefined,
        a_calendar_resizing: this.resizePreview !== undefined,
        a_calendar_selecting: !!(this.timeSelection || this.daySelection),
        a_calendar_week_numbers: this.isWeekNumbers,
      }],
      "aria-busy": this.isLoading ? "true" : undefined,
    }, [
      this.renderHeader(),
      // While the events are loaded, the days are covered
      h("div", {
        class: "a_calendar__body",
      }, [
        h(ALoading, {
          isLoading: this.isLoading,
          text: "_A_CALENDAR_LOADING_",
        }, () => body),
      ]),
      this.renderPopover(),
      (this.isDraggable || this.isResizable) && h("span", {
        id: `${ this.id }_keyboard`,
        class: "a_sr_only",
      }, this.getText("_A_CALENDAR_KEYBOARD_HINT_")),
      h("div", {
        class: "a_sr_only",
        "aria-live": "polite",
      }, this.liveText),
    ]);
  },
};
