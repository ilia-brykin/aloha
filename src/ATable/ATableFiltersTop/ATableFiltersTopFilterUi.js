import {
  computed,
  h,
  inject,
  toRef,
} from "vue";

import AUiComponents from "../../ui/AUiComponents";

import {
  cloneDeep,
} from "lodash-es";

export default {
  name: "ATableFiltersTopFilterUi",
  props: {
    filter: {
      type: Object,
      required: false,
      default: undefined,
    },
    modelFilters: {
      type: Object,
      required: true,
    },
    isLabelVisible: {
      type: Boolean,
      required: true,
    },
  },
  inject: [
    "tableId",
    "onUpdateModelFilters",
  ],
  setup(props) {
    const filter = toRef(props, "filter");

    const tableId = inject("tableId");
    const idPrefix = computed(() => {
      return `${ tableId.value }_`;
    });

    const onUpdateModelFilters = inject("onUpdateModelFilters");
    const modelFilters = toRef(props, "modelFilters");
    const onUpdateModelFiltersLocal = model => {
      const MODEL_FILTERS = cloneDeep(modelFilters.value);
      MODEL_FILTERS[filter.value.id] = cloneDeep(model);
      onUpdateModelFilters({ model: MODEL_FILTERS });
    };

    return {
      idPrefix,
      onUpdateModelFiltersLocal,
    };
  },
  render() {
    return h(AUiComponents[this.filter.type], {
      idPrefix: this.idPrefix,
      modelValue: this.modelFilters[this.filter.id],
      "onUpdate:modelValue": this.onUpdateModelFiltersLocal,
      ...this.filter,
      label: this.isLabelVisible ? this.filter.label : undefined,
    });
  },
};
