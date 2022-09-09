import {
  computed,
  h,
  toRef,
} from "vue";

import ATableFilterCenterItem from "./ATableFilterCenterItem";

import {
  forEach,
  isNil,
} from "lodash-es";


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
    const modelFilters = toRef(props, "modelFilters");
    const filtersKeyById = toRef(props, "filtersKeyById");
    const hasMinimumOneModel = computed(() => {
      let hasModel = false;
      forEach(modelFilters.value, (model, filterId) => {
        const CURRENT_FILTER = filtersKeyById.value[filterId];
        if (!CURRENT_FILTER) {
          return;
        }
        const TYPE = CURRENT_FILTER.type;
        if (TYPE === "multiselect" && TYPE === "checkbox") {
          if (model && model.length) {
            hasModel = true;
            return false;
          }
        } else {
          // TODO: model object
          if (!isNil(model) && model !== "") {
            hasModel = true;
            return false;
          }
        }
      });
      return hasModel;
    });

    const styleHide = computed(() => {
      return hasMinimumOneModel.value ? undefined : "display: none;";
    });

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
          filter,
          closeFilterValue: this.closeFilterValue,
          dataKeyByKeyIdPerFilter: this.dataKeyByKeyIdPerFilter,
          model: this.modelFilters[filter.id],
        });
      }),
    ]);
  },
};
