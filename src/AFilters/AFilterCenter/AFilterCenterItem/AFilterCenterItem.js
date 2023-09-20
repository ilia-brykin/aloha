import {
  h,
} from "vue";

import AButton from "../../../AButton/AButton";
import ATranslation from "../../../ATranslation/ATranslation";

import CloseFilterValueAPI from "./compositionAPI/CloseFilterValueAPI";
import HasFilterAPI from "./compositionAPI/HasFilterAPI";
import ModelValuesAPI from "./compositionAPI/ModelValuesAPI";
import LabelAPI from "./compositionAPI/LabelAPI";
import GoToAPI from "./compositionAPI/GoToAPI";

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
  setup(props) {
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
      goToFilter,
    } = GoToAPI(props);

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
          this.filter.hasNotClose && h(AButton, {
            class: "a_btn a_btn_secondary",
            ariaHidden: true,
            tabindex: -1,
            iconLeft: "PinFill",
          }),
          h(AButton, {
            class: "a_btn a_btn_secondary",
            onClick: this.goToFilter,
          }, () => [
            this.filterLabel && h(ATranslation, {
              tag: "strong",
              class: "a_table__filters_center__item__label",
              html: this.filterLabel,
              textAfter: ":",
            }),
            this.filter.slotName && this.$slots[this.filter.slotName] ?
              this.$slots[this.filter.slotName]({
                item: modelValue.item,
                label: modelValue.label,
              }) :
              h("span", {
                class: "a_table__filters_center__item__value",
              }, modelValue.label),
          ]),
          !this.filter.hasNotClose && h(AButton, {
            class: "a_btn a_btn_secondary",
            disabled: this.disabled,
            iconLeft: "Close",
            onClick: () => this.closeCurrentFilterValue({ currentModel: modelValue.value }),
          }),
        ]);
      }),
    ];
  },
};
