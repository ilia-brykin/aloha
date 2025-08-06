import {
  h,
} from "vue";
import {
  AButton,
  ASpinner,
} from "../../index";

import AFilterCenterItem from "./AFilterCenterItem/AFilterCenterItem";

import LoadingFiltersAPI from "./compositionAPI/LoadingFiltersAPI";
import VisibleFiltersAPI from "./compositionAPI/VisibleFiltersAPI";

import ArrowClockwise from "aloha-svg/dist/js/bootstrap/ArrowClockwise";

export default {
  name: "AFilterCenter",
  props: {
    appliedModel: {
      type: Object,
      required: true,
    },
    btnCloseClass: {
      type: [String, Object],
      required: false,
      default: "a_btn a_btn_secondary",
    },
    btnGoToClass: {
      type: [String, Object],
      required: false,
      default: "a_btn a_btn_secondary",
    },
    btnNotCloseClass: {
      type: [String, Object],
      required: false,
      default: "a_btn a_btn_secondary",
    },
    btnCloseAllClass: {
      type: [String, Object],
      required: false,
      default: "a_btn a_btn_link a_btn_small",
    },
    closeAllFilters: {
      type: Function,
      required: true,
    },
    closeFilterValue: {
      type: Function,
      required: true,
    },
    dataKeyByKeyIdPerFilter: {
      type: Object,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    filtersGroup: {
      type: Object,
      required: true,
      default: () => ({
        alwaysVisible: [],
        filters: [],
      }),
    },
    filtersKeyById: {
      type: Object,
      required: true,
    },
    filtersVisibleAll: {
      type: Array,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const {
      hasFilters,
      styleHide,
      updateVisibleChildFilters,
    } = VisibleFiltersAPI(props);

    const {
      isLeastOneChildFilterLoading,
      updateLoadingChildFilters,
    } = LoadingFiltersAPI(props);

    return {
      hasFilters,
      isLeastOneChildFilterLoading,
      styleHide,
      updateLoadingChildFilters,
      updateVisibleChildFilters,
    };
  },
  render() {
    if (!this.hasFilters) {
      return null;
    }

    return h("div", {
      class: "a_filters_center",
    }, [
      h("div", {
        class: "a_filters_center__item",
      }, [
        this.$slots.filtersHorizontal ?
          this.$slots.filtersHorizontal() :
          "",
      ]),
      this.filtersVisibleAll.map(filter => {
        return h(AFilterCenterItem, {
          key: filter.id,
          id: this.id,
          btnCloseClass: this.btnCloseClass,
          btnGoToClass: this.btnGoToClass,
          btnNotCloseClass: this.btnNotCloseClass,
          disabled: this.disabled,
          filter,
          closeFilterValue: this.closeFilterValue,
          dataKeyByKeyIdPerFilter: this.dataKeyByKeyIdPerFilter,
          model: this.appliedModel[filter.id],
          onUpdateVisibleChildFilters: this.updateVisibleChildFilters,
          onUpdateLoadingChildFilters: this.updateLoadingChildFilters,
        }, this.$slots);
      }),
      this.isLeastOneChildFilterLoading
? h("div", {
  style: this.styleHide,
  class: "a_filters_center__item",
}, [
  h(ASpinner, {
    class: "a_spinner_small",
  }),
])
: "",
      h("div", {
        class: "a_filters_center__item",
        style: this.styleHide,
      }, [
        h(AButton, {
          class: this.btnCloseAllClass,
          iconLeft: ArrowClockwise,
          text: "_A_FILTERS_DESELECT_ALL_",
          onClick: this.closeAllFilters,
        }),
      ]),
    ]);
  },
};
