import {
  h, onBeforeUnmount, watch,
} from "vue";

import AButton from "../../../AButton/AButton";
import ATranslation from "../../../ATranslation/ATranslation";

import CloseFilterValueAPI from "./compositionAPI/CloseFilterValueAPI";
import FilterVisibleAPI from "./compositionAPI/FilterVisibleAPI";
import GoToAPI from "./compositionAPI/GoToAPI";
import HasFilterAPI from "./compositionAPI/HasFilterAPI";
import LabelAPI from "./compositionAPI/LabelAPI";
import ModelValuesAPI from "./compositionAPI/ModelValuesAPI";

export default {
  name: "AFilterCenterItem",
  props: {
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
    filter: {
      type: Object,
      required: false,
      default: undefined,
    },
    id: {
      type: String,
      required: true,
    },
    model: {
      type: [String, Number, Object, Array, Boolean],
      required: false,
      default: undefined,
    },
  },
  emits: [
    "updateVisibleChildFilters",
  ],
  setup(props, context) {
    const {
      hasCurrentFilter,
    } = HasFilterAPI(props);

    const {
      filterLabel,
    } = LabelAPI(props, {
      hasCurrentFilter,
    });

    const {
      modelValuesForCurrentFilter,
    } = ModelValuesAPI(props, {
      hasCurrentFilter,
    });

    const {
      isLeastOneFilterVisible,
      updateVisibleChildFilters,
    } = FilterVisibleAPI(props, context, {
      modelValuesForCurrentFilter,
    });

    const {
      goToFilter,
    } = GoToAPI(props);

    const {
      closeCurrentFilterValue,
    } = CloseFilterValueAPI(props);

    watch(isLeastOneFilterVisible, () => {
      updateVisibleChildFilters();
    }, {
      immediate: true,
    });

    onBeforeUnmount(() => {
      updateVisibleChildFilters({
        destroy: true,
      });
    });

    return {
      closeCurrentFilterValue,
      filterLabel,
      goToFilter,
      hasCurrentFilter,
      isLeastOneFilterVisible,
      modelValuesForCurrentFilter,
    };
  },
  render() {
    return this.hasCurrentFilter && [
      this.modelValuesForCurrentFilter.map(modelValue => {
        return h("div", {
          role: "group",
          class: "a_filters_center__item a_btn_group a_btn_group_small",
        }, [
          this.filter.hasNotClose && h(AButton, {
            class: "a_btn a_btn_secondary",
            ariaHidden: true,
            tabindex: -1,
            iconLeft: "PinFill",
          }),
          h(AButton, {
            class: "a_btn a_btn_secondary",
            onClick: () => this.goToFilter({ modelValue }),
          }, () => [
            this.filterLabel && h("strong", {
              class: "a_filters_center__item__label",
            }, [
              h(ATranslation, {
                tag: "span",
                html: this.filterLabel,
              }),
              modelValue.filterLabelSuffix && h(ATranslation, {
                class: "a_filters_center__item__label__suffix",
                tag: "span",
                html: modelValue.filterLabelSuffix,
              }),
              h("span", null, ":"),
            ]),
            this.filter.slotName && this.$slots[this.filter.slotName] ?
              this.$slots[this.filter.slotName]({
                item: modelValue.item,
                label: modelValue.label,
              }) :
              h(ATranslation, {
                class: "a_filters_center__item__value",
                tag: "span",
                html: modelValue.label,
                extra: modelValue.extra,
              }),
          ]),
          !this.filter.hasNotClose && h(AButton, {
            class: "a_btn a_btn_secondary",
            disabled: this.disabled,
            iconLeft: "Close",
            onClick: () => this.closeCurrentFilterValue({ modelValue }),
          }),
        ]);
      }),
    ];
  },
};
