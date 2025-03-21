import {
  h,
  onBeforeUnmount,
  watch,
} from "vue";
import {
  AElement,
  ATranslation,
} from "../../../index";

import CloseFilterValueAPI from "./compositionAPI/CloseFilterValueAPI";
import FilterVisibleAPI from "./compositionAPI/FilterVisibleAPI";
import GoToAPI from "./compositionAPI/GoToAPI";
import HasFilterAPI from "./compositionAPI/HasFilterAPI";
import IsDataLoadingAPI from "./compositionAPI/IsDataLoadingAPI";
import LabelAPI from "./compositionAPI/LabelAPI";
import ModelValuesAPI from "./compositionAPI/ModelValuesAPI";

import PinFill from "aloha-svg/dist/js/bootstrap/PinFill";
import XLg from "aloha-svg/dist/js/bootstrap/XLg";

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
    "updateLoadingChildFilters",
  ],
  setup(props, context) {
    const {
      hasCurrentFilter,
    } = HasFilterAPI(props);

    const {
      isFilterLoading,
      updateLoadingChildFilters,
    } = IsDataLoadingAPI(props, context, {
      hasCurrentFilter,
    });

    const {
      filterLabel,
      filterLabelForTitle,
    } = LabelAPI(props, {
      hasCurrentFilter,
    });

    const {
      modelValuesForCurrentFilter,
    } = ModelValuesAPI(props, {
      filterLabel,
      filterLabelForTitle,
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

    watch(isFilterLoading, (newValue, altValue) => {
      updateLoadingChildFilters(newValue, altValue);
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
          this.filter.hasNotClose && h(AElement, {
            class: "a_btn a_btn_secondary",
            ariaHidden: true,
            tabindex: -1,
            iconLeft: PinFill,
            type: "text",
          }),
          h(AElement, {
            class: "a_btn a_btn_secondary",
            title: "_A_FILTERS_HOR_GO_TO_TITLE_{{filterLabel}}_{{filterValue}}_",
            textScreenReader: "_A_FILTERS_HOR_GO_TO_TITLE_{{filterLabel}}_{{filterValue}}_",
            extra: {
              filterLabel: modelValue.filterLabelForTitleTranslated,
              filterValue: modelValue.label,
            },
            type: "button",
            onClick: () => this.goToFilter({ modelValue }),
          }, () => [
            modelValue.filterLabelTranslated ?
              h("strong", {
                class: "a_filters_center__item__label",
                ariaHidden: true,
              }, [
                h(ATranslation, {
                  tag: "span",
                  html: modelValue.filterLabelTranslated,
                  textAfter: ":",
                }),
              ]) :
              "",
            this.filter.slotName && this.$slots[this.filter.slotName] ?
              this.$slots[this.filter.slotName]({
                item: modelValue.item,
                label: modelValue.label,
                extra: modelValue.extra,
                inFilterCenter: true,
              }) :
              h("span", {
                class: "a_filters_center__item__value",
              }, modelValue.label),
          ]),
          !this.filter.hasNotClose ?
            h(AElement, {
              class: "a_btn a_btn_secondary",
              disabled: this.disabled,
              iconLeft: XLg,
              title: "_A_FILTERS_HOR_CLOSE_TITLE_{{filterLabel}}_{{filterValue}}_",
              textScreenReader: "_A_FILTERS_HOR_CLOSE_TITLE_{{filterLabel}}_{{filterValue}}_",
              extra: {
                filterLabel: modelValue.filterLabelForTitleTranslated,
                filterValue: modelValue.label,
              },
              type: "button",
              onClick: () => this.closeCurrentFilterValue({ modelValue }),
            }) :
            "",
        ]);
      }),
    ];
  },
};
