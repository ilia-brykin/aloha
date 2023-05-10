import {
  h,
} from "vue";

import ATableFilterCenterItem from "./ATableFilterCenterItem/ATableFilterCenterItem";

import HideAPI from "./compositionAPI/HideAPI";

export default {
  name: "ATableFilterCenter",
  props: {
    closeFilterValue: {
      type: Function,
      required: true,
    },
    dataKeyByKeyIdPerFilter: {
      type: Object,
      required: true,
    },
    disabledFilters: {
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
    modelFilters: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const {
      styleHide,
    } = HideAPI(props);

    return {
      styleHide,
    };
  },
  render() {
    return h("div", {
      class: "a_table__filters_center",
      style: this.styleHide,
    }, [
      h("span", {
        class: "a_table__filters_center__headline a_table__filters_center__item",
      }, "Ihre Auswahl:"),
      this.filtersVisibleAll.map(filter => {
        return h(ATableFilterCenterItem, {
          key: filter.id,
          disabledFilters: this.disabledFilters,
          filter,
          closeFilterValue: this.closeFilterValue,
          dataKeyByKeyIdPerFilter: this.dataKeyByKeyIdPerFilter,
          model: this.modelFilters[filter.id],
        }, this.$slots);
      }),
    ]);
  },
};
