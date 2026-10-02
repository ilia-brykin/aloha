import {
  h,
} from "vue";
import {
  AButton,
} from "../../../index";

import AFiltersHorizontalFilterUi from "../AFiltersHorizontalFilterUi/AFiltersHorizontalFilterUi";

import IdAPI from "./compositionAPI/IdAPI";
import IsFilterAPI from "./compositionAPI/IsFilterAPI";
import LabelAPI from "./compositionAPI/LabelAPI";

const XLg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>`;


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
      class: "a_filters_top__filter_ui_group",
    }, [
      h("div", {
        class: "a_filters_top__filter_ui_subgroup",
      }, [
        h(AFiltersHorizontalFilterUi, {
          class: "a_filters_top__filter_ui",
          filter: this.filter,
          isLabelVisible: true,
          unappliedModel: this.unappliedModel,
          updateDataKeyByIdFromFilter: this.updateDataKeyByIdFromFilter,
          onUpdateModelFilters: this.onUpdateModelFilters,
          id: this.id,
        }, this.$slots),
        this.isFilterMain && this.$slots.btnSearchStart(),
        this.closable && h(AButton, {
          class: "a_btn a_btn_transparent_secondary a_filters_top__filter_ui_delete",
          title: "_A_FILTERS_TOP_CLOSE_",
          iconLeft: XLg,
          onClick: () => this.$emit("deleteFiltersVisible", { filter: this.filter }),
        }),
      ]),
    ]);
  },
};
