import {
  computed,
  h, toRef,
} from "vue";

import AFiltersAPI from "../compositionAPI/AFiltersAPI";
import WidthAPI from "./compositionAPI/WidthAPI";

export default {
  name: "AProgress",
  props: {
    classProgressBar: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    isInteger: {
      type: Boolean,
      required: false,
    },
    isRevers: {
      type: Boolean,
      required: false,
    },
    isValueVisible: {
      type: Boolean,
      required: false,
      default: true,
    },
    max: {
      type: Number,
      required: false,
      default: 100,
    },
    min: {
      type: Number,
      required: false,
      default: 0,
    },
    value: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  setup(props) {
    const {
      filterCurrency,
    } = AFiltersAPI();

    const isInteger = toRef(props, "isInteger");

    const {
      widthPercent,
    } = WidthAPI(props);

    const valuePercent = computed(() => {
      if (isInteger.value) {
        return filterCurrency(widthPercent.value, {
          suffix: "%",
          digits: 0,
        });
      }
      return filterCurrency(widthPercent.value, {
        suffix: "%",
        digits: 2,
      });
    });

    return {
      valuePercent,
      widthPercent,
    };
  },
  render() {
    return h("div", {
      class: ["a_progress", {
        a_progress_revers: this.isRevers,
      }],
    }, [
      h("div", {
        class: ["a_progress__bar", this.classProgressBar],
        role: "progressbar",
        "aria-valuenow": this.value,
        "aria-valuemin": this.min,
        "aria-valuemax": this.max,
        style: {
          width: `${ this.widthPercent }%`,
        },
      }, [
        this.isValueVisible && h("span", {
          class: "a_progress__text",
        }, this.valuePercent),
      ]),
    ]);
  },
};
