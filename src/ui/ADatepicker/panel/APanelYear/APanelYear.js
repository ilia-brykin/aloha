/* eslint vue/component-api-style: off */
import {
  h,
  onBeforeUnmount,
} from "vue";

import APanelYearItem from "../APanelYearItem/APanelYearItem";

import FocusAPI from "./compositionAPI/FocusAPI";
import FocusActiveAPI from "./compositionAPI/FocusActiveAPI";
import PanelAPI from "../compositionAPI/PanelAPI";
import SelectAPI from "./compositionAPI/SelectAPI";

import {
  range,
} from "lodash-es";

// @vue/component
export default {
  name: "APanelYear",
  props: {
    disabledYear: {
      type: Function,
      required: false,
      default: undefined,
    },
    firstYear: {
      type: Number,
      required: true,
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
      isDisabled,
      selectYear,
    } = SelectAPI(props, context);

    const {
      idForFocus,
      prefixForId,
      pressButton,
      yearIndexForFocus,
    } = FocusAPI(props, context);

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
      firstYearLocal,
      setFocusToActiveYear,
      yearFromValue,
    } = FocusActiveAPI(props, {
      idForFocus,
      setListenerForPressButtons,
      yearIndexForFocus,
    });

    setEventBus();

    onBeforeUnmount(() => {
      destroyEventBus();
      destroyListenerForPressButtons();
    });

    return {
      attributesForMainElement,
      firstYearLocal,
      idForFocus,
      idForHeader,
      isDisabled,
      prefixForId,
      selectYear,
      setFocusToActiveYear,
      yearFromValue,
      yearIndexForFocus,
    };
  },
  render() {
    return h("ul", {
      class: "pux_datepicker__panel pux_datepicker__panel_year pux_datepicker__panel__list",
      role: "listbox",
      "aria-labelledby": this.idForHeader,
      ...this.attributesForMainElement,
    }, [
      range(10).map(index => {
        return h(APanelYearItem, {
          key: index,
          class: {
            pux_datepicker__panel__cell_focus: index === this.yearIndexForFocus,
          },
          year: this.firstYearLocal + index,
          yearFromValue: this.yearFromValue,
          yearIndex: index,
          prefixForId: this.prefixForId,
          isDisabled: this.isDisabled,
          onSelectYear: this.selectYear,
        });
      }),
    ]);
  },
};
