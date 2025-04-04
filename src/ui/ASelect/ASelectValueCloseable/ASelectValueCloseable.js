import {
  computed,
  h,
  toRef,
} from "vue";
import {
  AElement,
  AKeyId,
  AKeyLabel,
  ATranslation,
} from "../../../index";

import XLg from "aloha-svg/dist/js/bootstrap/XLg";


export default {
  name: "ASelectValueCloseable",
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    data: {
      type: Object,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    hideDeleteButton: {
      type: Boolean,
      required: false,
      default: false,
    },
    slotName: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  emits: [
    "changeModelValue",
  ],
  setup(props, { emit }) {
    const data = toRef(props, "data");
    const currentLabel = computed(() => {
      return data.value[AKeyLabel];
    });

    const currentValue = computed(() => {
      return data.value[AKeyId];
    });


    const closeModel = $event => {
      emit("changeModelValue", {
        currentValue: currentValue.value,
        $event,
        isSelected: true,
      });

      $event.stopPropagation();
      $event.preventDefault();
    };

    return {
      closeModel,
      currentLabel,
    };
  },
  render() {
    return h("li", {
      class: "a_select__ul_closeable__item",
    }, [
      this.slotName && this.$slots[this.slotName] ?
        this.$slots[this.slotName]({
          item: this.data,
          label: this.currentLabel,
          inDropdown: false,
        }) :
        h(ATranslation, {
          alwaysTranslate: this.alwaysTranslate,
          tag: "span",
          html: this.currentLabel,
          extra: this.data.extra,
        }),
      !this.hideDeleteButton && h(AElement, {
        class: "a_btn a_btn_link a_select__ul_closeable__item__btn",
        type: "button",
        tabindex: -1,
        iconLeft: XLg,
        disabled: this.disabled,
        onClick: this.closeModel,
      }),
    ]);
  },
};
