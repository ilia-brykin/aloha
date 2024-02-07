import {
  h,
} from "vue";

import ATranslation from "../../ATranslation/ATranslation";
import AFilterCenterItem from "./AFilterCenterItem/AFilterCenterItem";

import VisibleFiltersAPI from "./compositionAPI/VisibleFiltersAPI";
import AButton from "../../AButton/AButton";
import LoadingFiltersAPI from "./compositionAPI/LoadingFiltersAPI";
import ASpinner from "../../ASpinner/ASpinner";

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
      styleHide,
      updateVisibleChildFilters,
    } = VisibleFiltersAPI(props);

    const {
      isLeastOneChildFilterLoading,
      updateLoadingChildFilters,
    } = LoadingFiltersAPI(props);

    return {
      isLeastOneChildFilterLoading,
      styleHide,
      updateLoadingChildFilters,
      updateVisibleChildFilters,
    };
  },
  render() {
    return h("div", {
      class: "a_filters_center",
      style: this.styleHide,
    }, [
      h(ATranslation, {
        class: "a_filters_center__headline a_filters_center__item",
        tag: "span",
        text: "_A_FILTERS_YOUR_SELECTION_",
      }),
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
      this.isLeastOneChildFilterLoading && h("div", {
        class: "a_filters_center__item",
      }, [
        h(ASpinner, {
          class: "a_spinner_small",
        }),
      ]),
      h("div", {
        class: "a_filters_center__item",
      }, [
        h(AButton, {
          class: "a_btn a_btn_link a_btn_small",
          text: "_A_FILTERS_DESELECT_ALL_",
          onClick: this.closeAllFilters,
        }),
      ]),
    ]);
  },
};
