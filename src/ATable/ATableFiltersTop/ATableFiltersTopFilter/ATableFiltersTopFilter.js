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
      class: "a_table__filters_top__filter_ui_group"
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
      h(
        "div", {
          class: "a_table__filters_top__filter_ui_subgroup",
        }, [
          h(ATableFiltersTopFilterUi, {
            class: "a_table__filters_top__filter_ui",
            filter: this.filter,
            isLabelVisible: this.isLabelInComponentVisible,
            modelFilters: this.modelFilters,
            onUpdateModelFilters: this.onUpdateModelFilters,
            tableId: this.tableId,
          }, this.$slots),
          this.closable && h(AButton, {
            class: "a_btn a_btn_transparent_secondary a_table__filters_top__filter_ui_delete",
            title: "_A_TABLE_FILTER_TOP_CLOSE_",
            iconLeft: "Close",
            onClick: () => this.$emit("deleteFiltersVisible", { filter: this.filter }),
          }),
        ]
      )
    ]);
  },
};
