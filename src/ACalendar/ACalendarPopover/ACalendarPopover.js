import {
  h,
} from "vue";

import AButton from "../../AButton/AButton";

import CloseAPI from "./compositionAPI/CloseAPI";
import PositionAPI from "./compositionAPI/PositionAPI";
import {
  getTranslatedText,
} from "../../ATranslation/compositionAPI/UtilsAPI";

const IconClose = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>`;

/**
 * The details of an event at the event: the time, the place and the description (dialog without a backdrop).
 * The slots body and actions of ACalendar replace the content and add buttons (e.g. "Edit", "Delete").
 */
export default {
  name: "ACalendarPopover",
  props: {
    anchor: {
      type: Object,
      required: true,
    },
    colorAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    event: {
      type: Object,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    timeText: {
      type: String,
      required: false,
      default: "",
    },
  },
  emits: [
    "close",
  ],
  setup(props, { emit }) {
    const {
      popoverRef,
      position,
    } = PositionAPI(props);

    const {
      close,
      onKeydown,
    } = CloseAPI(props, {
      emit,
      popoverRef,
    });

    return {
      close,
      onKeydown,
      popoverRef,
      position,
    };
  },
  methods: {
    renderDetail(label, value) {
      return value && [
        h("dt", { class: "a_calendar_popover__term" }, getTranslatedText({ placeholder: label })),
        h("dd", { class: "a_calendar_popover__value" }, value),
      ];
    },
  },
  render() {
    const EVENT = this.event;
    const NOTES = [
      EVENT.isRecurring && getTranslatedText({ placeholder: "_A_CALENDAR_RECURRING_" }),
      EVENT.status && getTranslatedText({ placeholder: `_A_CALENDAR_STATUS_${ EVENT.status.toUpperCase() }_` }),
    ].filter(Boolean);
    return h("div", {
      ref: "popoverRef",
      id: this.id,
      class: ["a_calendar_popover", this.colorAttributes.class],
      style: {
        ...this.position,
        ...this.colorAttributes.style,
      },
      role: "dialog",
      "aria-labelledby": `${ this.id }_label`,
      tabindex: -1,
      onKeydown: this.onKeydown,
    }, [
      h("div", {
        class: "a_calendar_popover__header",
      }, [
        h("div", {
          id: `${ this.id }_label`,
          class: "a_calendar_popover__label",
        }, EVENT.label),
        h(AButton, {
          class: "a_btn a_btn_link a_btn_small a_calendar_popover__close",
          iconLeft: IconClose,
          textScreenReader: "_A_CALENDAR_POPOVER_CLOSE_",
          title: "_A_CALENDAR_POPOVER_CLOSE_",
          type: "button",
          onClick: () => this.close(),
        }),
      ]),
      this.$slots.body ?
        this.$slots.body() :
        h("dl", {
          class: "a_calendar_popover__details",
        }, [
          this.renderDetail("_A_CALENDAR_POPOVER_TIME_", [this.timeText, ...NOTES].join(", ")),
          this.renderDetail("_A_CALENDAR_POPOVER_LOCATION_", EVENT.location),
          this.renderDetail("_A_CALENDAR_POPOVER_DESCRIPTION_", EVENT.description),
        ]),
      this.$slots.actions && h("div", {
        class: "a_calendar_popover__actions",
      }, this.$slots.actions()),
    ]);
  },
};
