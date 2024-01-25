import {
  h,
} from "vue";

import AFilterCenterItem from "./AFilterCenterItem/AFilterCenterItem";

import VisibleFiltersAPI from "./compositionAPI/VisibleFiltersAPI";

export default {
  name: "AFilterCenter",
  props: {
    appliedModel: {
      type: Object,
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

    return {
      styleHide,
      updateVisibleChildFilters,
    };
  },
  render() {
    return h("div", {
      class: "a_filters_center",
      style: this.styleHide,
    }, [
      h("span", {
        class: "a_filters_center__headline a_filters_center__item",
      }, "Ihre Auswahl:"),
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
        }, this.$slots);
      }),
    ]);
  },
};
