import {
  h,
} from "vue";

import AButton from "../../AButton/AButton";
import AFilterCenterItem from "./AFilterCenterItem/AFilterCenterItem";
import ASpinner from "../../ASpinner/ASpinner";

import LoadingFiltersAPI from "./compositionAPI/LoadingFiltersAPI";
import VisibleFiltersAPI from "./compositionAPI/VisibleFiltersAPI";

export default {
  name: "AFilterCenter",
  props: {
    appliedModel: {
      type: Object,
      required: true,
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
      return "";
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
          disabled: this.disabled,
          filter,
          closeFilterValue: this.closeFilterValue,
          dataKeyByKeyIdPerFilter: this.dataKeyByKeyIdPerFilter,
          model: this.appliedModel[filter.modelId || filter.id],
          onUpdateVisibleChildFilters: this.updateVisibleChildFilters,
          onUpdateLoadingChildFilters: this.updateLoadingChildFilters,
        }, this.$slots);
      }),
      this.isLeastOneChildFilterLoading ? h("div", {
        style: this.styleHide,
        class: "a_filters_center__item",
      }, [
        h(ASpinner, {
          class: "a_spinner_small",
        }),
      ]) : "",
      h("div", {
        class: "a_filters_center__item",
        style: this.styleHide,
      }, [
        h(AButton, {
          class: "a_btn a_btn_link a_btn_small",
          iconLeft: "Reset",
          text: "_A_FILTERS_DESELECT_ALL_",
          onClick: this.closeAllFilters,
        }),
      ]),
    ]);
  },
};
