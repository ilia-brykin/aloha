import {
  h,
  onBeforeUnmount,
} from "vue";

import FocusAPI from "./compositionAPI/FocusAPI";
import FocusActiveAPI from "./compositionAPI/FocusActiveAPI";
import MonthsAPI from "./compositionAPI/MonthsAPI";
import PanelAPI from "../compositionAPI/PanelAPI";
import SelectAPI from "./compositionAPI/SelectAPI";

// @vue/component
export default {
  name: "APanelMonth",
  props: {
    calendarYear: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      default: new Date().getFullYear(),
      required: false,
    },
    currentLanguage: {
      type: Object,
      required: true,
    },
    disabledMonth: {
      type: Function,
      required: false,
      default: undefined,
    },
    id: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      required: false,
      default: undefined,
    },
  },
  emits: [
    "handleIconYear",
    "select",
  ],
  setup(props, context) {
    const {
      getIdForMonth,
      isDisabled,
      months,
    } = MonthsAPI(props);

    const {
      keypress,
      selectMonth,
    } = SelectAPI(props, context, {
      isDisabled,
    });

    const {
      idForFocus,
      monthIndexForFocus,
      pressButton,
      setDefaultMonthForFocus,
    } = FocusAPI(props, context, {
      getIdForMonth,
    });

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

    const {
      setFocusToActiveMonth,
    } = FocusActiveAPI({
      idForFocus,
      setDefaultMonthForFocus,
      setListenerForPressButtons,
    });

    setEventBus();

    onBeforeUnmount(() => {
      destroyEventBus();
      destroyListenerForPressButtons();
    });

    return {
      attributesForMainElement,
      idForHeader,
      keypress,
      monthIndexForFocus,
      months,
      selectMonth,
      setFocusToActiveMonth,
    };
  },
  render() {
    return h("ul", {
      class: "pux_datepicker__panel pux_datepicker__panel_month pux_datepicker__panel__list",
      role: "listbox",
      "aria-labelledby": this.idForHeader,
      ...this.attributesForMainElement,
    }, [
      this.months.map((month, monthIndex) => {
        return h("li", {
          id: month.id,
          key: month.id,
          class: ["cell", {
            actived: month.isActive,
            disabled: month.isDisabled,
            pux_datepicker__panel__cell_focus: monthIndex === this.monthIndexForFocus,
          }],
          role: "option",
          ariaSelected: !!month.isActive,
          tabindex: -1,
          onClick: $event => this.selectMonth($event, monthIndex),
          onKeypress: $event => this.keypress($event, monthIndex),
        }, month.label);
      }),
    ]);
  },
};
