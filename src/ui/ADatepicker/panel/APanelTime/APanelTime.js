/* eslint vue/component-api-style: off */
import {
  h,
  onBeforeUnmount,
} from "vue";

import FocusAPI from "./compositionAPI/FocusAPI";
import PanelAPI from "../compositionAPI/PanelAPI";
import SelectAPI from "./compositionAPI/SelectAPI";
import TimesAPI from "./compositionAPI/TimesAPI";

// @vue/component
export default {
  name: "APanelTime",
  props: {
    currentLanguage: {
      type: Object,
      required: true,
    },
    disabledTime: {
      type: Function,
      required: false,
      default: undefined,
    },
    id: {
      type: String,
      required: true,
    },
    minuteStep: {
      type: Number,
      default: 0,
      validator: val => val >= 0 && val <= 60,
    },
    timeType: {
      type: Array,
      default() {
        return ["24", "a"];
      },
    },
    value: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      default: undefined,
    },
  },
  emits: [
    "select",
  ],
  setup(props, context) {
    const {
      getCurrentId,
      timesFiltered,
    } = TimesAPI(props);

    const {
      fullIndexForFocus,
      idForFocus,
      pressButton,
    } = FocusAPI(props, {
      getCurrentId,
      timesFiltered,
    });

    const {
      keypress,
      selectTime,
    } = SelectAPI(props, context);

    const {
      attributesForMainElement,
      destroyEventBus,
      destroyListenerForPressButtons,
      idForHeader,
      setEventBus,
      setListenerForPressButtons,
    } = PanelAPI(props, {
      idForFocus,
      pressButton,
    });

    setEventBus();
    setListenerForPressButtons();

    onBeforeUnmount(() => {
      destroyEventBus();
      destroyListenerForPressButtons();
    });

    return {
      attributesForMainElement,
      idForHeader,
      fullIndexForFocus,
      keypress,
      selectTime,
      timesFiltered,
    };
  },
  render() {
    return h("div", {
      class: "pux_datepicker__panel pux_datepicker__panel_time",
      ...this.attributesForMainElement,
    }, [
      this.timesFiltered.map((timeList, timeListIndex) => {
        return h("ul", {
          key: timeListIndex,
          class: "pux_datepicker__time_list",
          role: "listbox",
          "aria-labelledby": this.idForHeader,
          style: { width: `${ 100 / this.timesFiltered.length }%` },
        }, [
          timeList.map((time, timeIndex) => {
            return h("li", {
              id: time.id,
              key: timeIndex,
              class: ["cell", {
                actived: time.isActive,
                disabled: time.isDisabled,
                pux_datepicker__panel__cell_focus: timeListIndex + "_" + timeIndex === this.fullIndexForFocus,
              }],
              tabindex: -1,
              role: "option",
              ariaSelected: !!time.isActive,
              ariaLabel: time.ariaLabel,
              onClick: () => this.selectTime(time.time),
              onKeypress: $event => this.keypress($event, time.time, timeListIndex === this.timesFiltered.length - 1),
            }, time.label);
          }),
        ]);
      }),
    ]);
  },
};
