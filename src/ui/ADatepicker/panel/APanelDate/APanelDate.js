/* eslint vue/component-api-style: off */
import {
  h,
  onBeforeUnmount,
} from "vue";

import DatesAPI from "./compositionAPI/DatesAPI";
import FocusAPI from "./compositionAPI/FocusAPI";
import FocusActiveAPI from "./compositionAPI/FocusActiveAPI";
import PanelAPI from "../compositionAPI/PanelAPI";
import SelectAPI from "./compositionAPI/SelectAPI";
import TableAPI from "./compositionAPI/TableAPI";

// @vue/component
export default {
  name: "APanelDate",
  props: {
    calendarMonth: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      default: new Date().getMonth(),
    },
    calendarYear: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      default: new Date().getFullYear(),
    },
    currentLanguage: {
      type: Object,
      required: true,
    },
    dateFormat: {
      type: String,
      default: "YYYY-MM-DD",
    },
    disabledDate: {
      type: Function,
      default: () => {
        return false;
      },
    },
    endAt: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      required: false,
      default: undefined,
    },
    firstDayOfWeek: {
      default: 7,
      type: Number,
      validator: val => val >= 1 && val <= 7,
    },
    id: {
      type: String,
      required: true,
    },
    startAt: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      required: false,
      default: undefined,
    },
    startDate: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      required: false,
      default: undefined,
    },
    value: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      required: false,
      default: undefined,
    },
  },
  emits: [
    "handleIconMonth",
    "select",
  ],
  setup(props, context) {
    const {
      selectDate,
    } = SelectAPI(props, context);

    const {
      dates,
      dayFromValue,
      dayFromValueOrToday,
    } = DatesAPI(props);

    const {
      ths,
      trsWithTds,
    } = TableAPI(props, {
      dates,
    });

    const {
      idForFocus,
      pressButton,
      setDefaultDayForFocusButton,
    } = FocusAPI(props, context, {
      dayFromValueOrToday,
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
      setFocusToActiveDay,
    } = FocusActiveAPI({
      idForFocus,
      setDefaultDayForFocusButton,
      setListenerForPressButtons,
    });

    setEventBus();

    onBeforeUnmount(() => {
      destroyEventBus();
      destroyListenerForPressButtons();
    });

    return {
      attributesForMainElement,
      dates,
      dayFromValue,
      dayFromValueOrToday,
      idForFocus,
      idForHeader,
      selectDate,
      setFocusToActiveDay,
      ths,
      trsWithTds,
    };
  },
  render() {
    return h("table", {
      class: "pux_datepicker__panel pux_datepicker__panel_date",
      role: "grid",
      ariaReadonly: true,
      "aria-labelledby": this.idForHeader,
      ...this.attributesForMainElement,
    }, [
      h("thead", null, [
        h("tr", null, [
          this.ths.map((thData, thIndex) => {
            return h("th", {
              key: thIndex,
              ariaLabel: thData.longName,
            }, thData.shortName);
          }),
        ]),
      ]),
      h("tbody", null, [
        this.trsWithTds.map((tdList, tdListIndex) => {
          return h("tr", {
            key: tdListIndex,
          }, [
            tdList.map((tdData, tdDataIndex) => {
              return h("td", {
                key: tdDataIndex,
                class: ["cell", tdData.class, {
                  pux_datepicker__panel__cell_focus: tdData.id === this.idForFocus,
                }],
              }, [
                h("button", {
                  id: tdData.id,
                  class: "pux_datepicker__panel__button",
                  type: "button",
                  tabindex: -1,
                  ariaHidden: true,
                  ariaSelected: !!(tdData.isCurrentMonth && tdData.label === this.dayFromValue),
                  onClick: $event => this.selectDate($event, tdData.date),
                }, [
                  h("span", {
                    ariaHidden: true,
                  }, tdData.label),
                  h("span", {
                    class: "a_sr_only",
                  }, tdData.fullDate),
                  tdData.isToday && h("span", {
                    class: "a_sr_only",
                  }, this.currentLanguage.today),
                ]),
              ]);
            }),
          ]);
        }),
      ]),
    ]);
  },
};
