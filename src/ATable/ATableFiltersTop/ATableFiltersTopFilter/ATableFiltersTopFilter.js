import {
  h,
} from "vue";

import AButton from "../../../AButton/AButton";
import ALabel from "../../../ui/ALabel/ALabel";
import ATableFiltersTopFilterUi from "../ATableFiltersTopFilterUi/ATableFiltersTopFilterUi";

import IdAPI from "./compositionAPI/IdAPI";
import IsFilterAPI from "./compositionAPI/IsFilterAPI";
import LabelAPI from "./compositionAPI/LabelAPI";

export default {
  name: "ATableFiltersTopFilter",
  props: {
    closable: {
      type: Boolean,
      required: false,
    },
    filter: {
      type: Object,
      required: false,
      default: undefined,
    },
    modelFilters: {
      type: Object,
      required: true,
    },
    onUpdateModelFilters: {
      type: Function,
      required: true,
    },
    tableId: {
      type: String,
      required: true,
    },
  },
  emits: [
    "deleteFiltersVisible",
  ],
  setup(props) {
    const {
      isFilter,
    } = IsFilterAPI(props);

    const {
      isLabelInComponentVisible,
      labelClass,
    } = LabelAPI(props);

    const {
      htmlIdLocal,
    } = IdAPI(props);

    return {
      htmlIdLocal,
      isLabelInComponentVisible,
      isFilter,
      labelClass,
    };
  },
  render() {
    return this.isFilter && h("div", {
      class: "a_columns a_columns_count_12 a_columns_gab_2 a_align_items_center",
    }, [
      this.isLabelInComponentVisible ? h("span", {
        class: this.labelClass,
        ariaHidden: true,
      }) : h(ALabel, {
        id: this.htmlIdLocal,
        label: this.filter.label,
        class: this.labelClass,
        type: this.filter.type,
        isLabelFloat: false,
      }),
      h(ATableFiltersTopFilterUi, {
        class: "a_column a_column_12_mobile a_column_12_tablet a_column_8_desktop a_column_4_widescreen a_column_4_fullhd",
        filter: this.filter,
        isLabelVisible: this.isLabelInComponentVisible,
        modelFilters: this.modelFilters,
        onUpdateModelFilters: this.onUpdateModelFilters,
        tableId: this.tableId,
      }, this.$slots),
      this.closable && h(AButton, {
        class: "a_btn_close",
        title: "_A_TABLE_FILTER_TOP_CLOSE_",
        iconLeft: "Close",
        onClick: () => this.$emit("deleteFiltersVisible", { filter: this.filter }),
      }),
    ]);
  },
};
