import {
  computed,
  h,
  inject,
  toRef,
} from "vue";

import AIcon from "../../../AIcon/AIcon";

import AFiltersAPI from "../../../compositionAPI/AFiltersAPI";
import CloseFilterValueAPI from "./compositionAPI/CloseFilterValueAPI";

import AKeyLabel from "../../../ui/const/AKeyLabel";
import AUiTypesModelArray from "../../../ui/const/AUiTypesModelArray";
import EventBus from "../../../utils/EventBus";
import {
  getHtmlId,
} from "../../../ui/compositionApi/UiAPI";
import {
  setFocusToElement,
} from "../../../utils/utilsDOM";
import {
  forEach,
  get,
  isArray,
  isNil,
} from "lodash-es";


export default {
  name: "ATableFilterCenterItem",
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
    filter: {
      type: Object,
      required: false,
      default: undefined,
    },
    model: {
      type: [String, Number, Object, Array, Boolean],
      required: false,
      default: undefined,
    },
  },
  setup(props) {
    const filter = toRef(props, "filter");
    const model = toRef(props, "model");
    const hasCurrentFilter = computed(() => {
      if (!filter.value ||
        filter.value.hideFilterCenter ||
        isNil(model.value) ||
        model.value === "" ||
        (isArray(model.value) && !model.value.length)) {
        return false;
      }
      return true;
    });

    const filterLabel = computed(() => {
      if (hasCurrentFilter.value) {
        return `${ filter.value.label }:`;
      }
      return "";
    });

    const dataKeyByKeyIdPerFilter = toRef(props, "dataKeyByKeyIdPerFilter");
    const filterDataKey = computed(() => {
      if (filter.value) {
        return dataKeyByKeyIdPerFilter.value[filter.value.id];
      }
      return undefined;
    });

    const {
      filterBoolean,
      filterDate,
    } = AFiltersAPI();

    const modelValuesForCurrentFilter = computed(() => {
      if (!hasCurrentFilter.value) {
        return [];
      }
      if (filter.value.type === "switch" ||
        filter.value.type === "oneCheckbox") {
        return [{
          label: filterBoolean(model.value),
        }];
      }
      if (filter.value.type === "date") {
        return [{
          label: filterDate(model.value),
        }];
      }
      if (filter.value.type === "select" ||
        filter.value.type === "radio") {
        const LABEL = get(filterDataKey.value, `${ model.value }.${ AKeyLabel }`);
        if (LABEL) {
          return [{
            label: LABEL,
          }];
        }
        return [];
      }
      if (AUiTypesModelArray[filter.value.type]) {
        const MODEL_VALUES = [];
        forEach(model.value, modelItem => {
          if (filterDataKey.value && filterDataKey.value[modelItem]) {
            MODEL_VALUES.push({
              label: filterDataKey.value[modelItem][AKeyLabel],
              value: modelItem,
              item: filterDataKey.value[modelItem],
            });
          }
        });
        return MODEL_VALUES;
      }
      return [{
        label: model.value,
      }];
    });

    const tableId = inject("tableId");
    const eventName = `eventATableFilterTopOnOpen_${ tableId.value }`;
    const goToFilter = () => {
      if (!filter.value.main) {
        EventBus.$emit(eventName);
      }

      const FILTER_HTML_ID = getHtmlId({
        id: filter.value.id,
        idPrefix: `${ tableId.value }_`,
        htmlId: filter.value.htmlId,
      });
      setTimeout(() => {
        setFocusToElement({ selector: `#${ FILTER_HTML_ID }` });
      });
    };

    const {
      closeCurrentFilterValue,
    } = CloseFilterValueAPI(props);

    return {
      closeCurrentFilterValue,
      filterLabel,
      goToFilter,
      hasCurrentFilter,
      modelValuesForCurrentFilter,
    };
  },
  render() {
    return this.hasCurrentFilter && [
      this.modelValuesForCurrentFilter.map(modelValue => {
        return h("div", {
          role: "group",
          class: "a_table__filters_center__item a_btn_group a_btn_group_small",
        }, [
          this.filter.hasNotClose && h("button", {
            class: "a_btn a_btn_secondary",
            ariaHidden: true,
            tabindex: -1,
          }, [
            h(AIcon, {
              icon: "PinFill",
            }),
          ]),
          h("button", {
            class: "a_btn a_btn_secondary",
            onClick: this.goToFilter,
          }, [
            h("strong", {
              class: "a_table__filters_center__item__label",
            }, this.filterLabel),
            this.filter.slotName && this.$slots[this.filter.slotName] ?
              this.$slots[this.filter.slotName]({
                item: modelValue.item,
                label: modelValue.label,
              }) :
              h("span", {}, modelValue.label),
          ]),
          !this.filter.hasNotClose && h("button", {
            class: "a_btn a_btn_secondary",
            disabled: this.disabledFilters,
            onClick: () => this.closeCurrentFilterValue({ currentModel: modelValue.value }),
          }, [
            h(AIcon, {
              icon: "Close",
            }),
          ])
        ]);
      }),
    ];
  },
};
