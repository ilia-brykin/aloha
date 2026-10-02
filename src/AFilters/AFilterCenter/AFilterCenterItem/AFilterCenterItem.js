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

const PinFill = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-fill" viewBox="0 0 16 16">
  <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A6 6 0 0 1 5 6.708V2.277a3 3 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354"/>
</svg>`;
const XLg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>`;


export default {
  name: "AFilterCenterItem",
  props: {
    btnCloseClass: {
      type: [String, Object],
      required: false,
      default: "a_btn a_btn_secondary",
    },
    btnGoToClass: {
      type: [String, Object],
      required: false,
      default: "a_btn a_btn_secondary",
    },
    btnNotCloseClass: {
      type: [String, Object],
      required: false,
      default: "a_btn a_btn_secondary",
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
            class: this.btnNotCloseClass,
            ariaHidden: true,
            tabindex: -1,
            iconLeft: PinFill,
            type: "text",
          }),
          h(AElement, {
            class: this.btnGoToClass,
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
              class: this.btnCloseClass,
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
