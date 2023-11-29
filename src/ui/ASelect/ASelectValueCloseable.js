import {
  computed,
  h,
  toRef,
} from "vue";

import AKeyLabel from "../../const/AKeyLabel";
import AKeyId from "../../const/AKeyId";
import AIcon from "../../AIcon/AIcon";

export default {
  name: "ASelectValueCloseable",
  props: {
    data: {
      type: Object,
      required: true,
    },
    slotName: {
      type: String,
      required: false,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      required: false,
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
      currentLabel
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
        h("span", {}, this.currentLabel),
      h("button", {
        class: "a_btn a_btn_link a_select__ul_closeable__item__btn",
        type: "button",
        tabindex: -1,
        disabled: this.disabled,
        onClick: this.closeModel,
      }, [
        h(AIcon, {
          icon: "Close",
        }),
      ]),
    ]);
  },
};
