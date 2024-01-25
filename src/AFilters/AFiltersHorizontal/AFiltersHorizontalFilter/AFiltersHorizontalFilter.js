import {
  h,
} from "vue";

import AButton from "../../../AButton/AButton";
import ALabel from "../../../ui/ALabel/ALabel";
import AFiltersHorizontalFilterUi from "../AFiltersHorizontalFilterUi/AFiltersHorizontalFilterUi";

import IdAPI from "./compositionAPI/IdAPI";
import IsFilterAPI from "./compositionAPI/IsFilterAPI";
import LabelAPI from "./compositionAPI/LabelAPI";

export default {
  name: "AFiltersHorizontalFilter",
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
    id: {
      type: String,
      required: true,
    },
    isFilterMain: {
      type: Boolean,
      required: false,
    },
    onUpdateModelFilters: {
      type: Function,
      required: true,
    },
    unappliedModel: {
      type: Object,
      required: true,
    },
    updateDataKeyByIdFromFilter: {
      type: Function,
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
      class: "a_filters_top__filter_ui_group"
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
      h("div", {
        class: "a_filters_top__filter_ui_subgroup",
      }, [
        h(AFiltersHorizontalFilterUi, {
          class: "a_filters_top__filter_ui",
          filter: this.filter,
          isLabelVisible: this.isLabelInComponentVisible,
          unappliedModel: this.unappliedModel,
          updateDataKeyByIdFromFilter: this.updateDataKeyByIdFromFilter,
          onUpdateModelFilters: this.onUpdateModelFilters,
          id: this.id,
        }, this.$slots),
        this.isFilterMain && this.$slots.btnSearchStart(),
        this.closable && h(AButton, {
          class: "a_btn a_btn_transparent_secondary a_filters_top__filter_ui_delete",
          title: "_A_FILTERS_TOP_CLOSE_",
          iconLeft: "Close",
          onClick: () => this.$emit("deleteFiltersVisible", { filter: this.filter }),
        }),
      ])
    ]);
  },
};
