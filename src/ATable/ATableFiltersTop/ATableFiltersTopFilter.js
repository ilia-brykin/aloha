import {
  computed,
  h,
  inject,
  toRef,
} from "vue";

import AButton from "../../AButton/AButton";
import ALabel from "../../ui/ALabel/ALabel";
import ATableFiltersTopFilterUi from "./ATableFiltersTopFilterUi";

import {
  getHtmlId,
} from "../../ui/compositionApi/UiAPI";
import {
  cloneDeep,
} from "lodash-es";

export default {
  name: "ATableFiltersTopFilter",
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
    modelFilters: {
      type: Object,
      required: true,
    },
  },
  emits: [
    "deleteFiltersVisible",
  ],
  inject: [
    "tableId",
    "onUpdateModelFilters",
  ],
  setup(props) {
    const filter = toRef(props, "filter");
    const isFilter = computed(() => {
      return !!(filter.value && filter.value.isRender !== false);
    });

    const tableId = inject("tableId");
    const idPrefix = computed(() => {
      return `${ tableId.value }_`;
    });

    const htmlIdLocal = computed(() => {
      return getHtmlId({
        id: filter.value.id,
        idPrefix: idPrefix.value,
        htmlId: filter.value.htmlId,
      });
    });

    const isLabelInComponentVisible = computed(() => {
      return !(filter.value.label && filter.value.type !== "oneCheckbox");
    });

    const labelClass = "a_column a_column_12_mobile a_column_12_tablet a_column_4_desktop a_column_2_widescreen a_column_2_fullhd";

    const onUpdateModelFilters = inject("onUpdateModelFilters");
    const modelFilters = toRef(props, "modelFilters");
    const onUpdateModelFiltersLocal = model => {
      const MODEL_FILTERS = cloneDeep(modelFilters.value);
      MODEL_FILTERS[filter.value.id] = cloneDeep(model);
      onUpdateModelFilters({ model: MODEL_FILTERS });
    };

    return {
      htmlIdLocal,
      isLabelInComponentVisible,
      idPrefix,
      isFilter,
      labelClass,
      onUpdateModelFiltersLocal,
    };
  },
  render() {
    return this.isFilter && h("div", {
      class: "a_columns a_columns_count_12 a_columns_gab_2 a_align_items_center",
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
      h(ATableFiltersTopFilterUi, {
        class: "a_column a_column_12_mobile a_column_12_tablet a_column_8_desktop a_column_4_widescreen a_column_4_fullhd",
        filter: this.filter,
        modelFilters: this.modelFilters,
        isLabelVisible: this.isLabelInComponentVisible,
      }, this.$slots),
      this.closable && h(AButton, {
        class: "a_btn_close",
        title: "_A_TABLE_FILTER_TOP_CLOSE_",
        iconLeft: "Close",
        onClick: () => this.$emit("deleteFiltersVisible", { filter: this.filter }),
      }),
    ]);
  },
};
