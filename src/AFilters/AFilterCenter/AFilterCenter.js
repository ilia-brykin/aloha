import {
  h,
} from "vue";

import AFilterCenterItem from "./AFilterCenterItem/AFilterCenterItem";

import HideAPI from "./compositionAPI/HideAPI";

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
        return h(AFilterCenterItem, {
          key: filter.id,
          id: this.id,
          disabled: this.disabled,
          filter,
          closeFilterValue: this.closeFilterValue,
          dataKeyByKeyIdPerFilter: this.dataKeyByKeyIdPerFilter,
          model: this.appliedModel[filter.id],
        }, this.$slots);
      }),
    ]);
  },
};
