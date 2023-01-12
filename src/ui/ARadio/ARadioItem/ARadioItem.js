import {
  computed,
  h,
  toRef,
  withDirectives,
} from "vue";

import UiCheckboxRadioItem from "../../compositionApi/UiCheckboxRadioItem";

import ASafeHtml from "../../../directives/ASafeHtml";
import ButtonGroupAPI from "../../ACheckbox/ACheckboxItem/compositionAPI/ButtonGroupAPI";

const KEY_CODE_SPACE = 32;

export default {
  name: "ARadioItem",
  props: {
    id: {
      type: String,
      required: true,
    },
    dataItem: {
      type: Object,
      required: true,
    },
    itemIndex: {
      type: Number,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      required: false,
    },
    isWidthAuto: {
      type: Boolean,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    isErrors: {
      type: Boolean,
      required: false,
    },
    isButtonGroup: {
      type: Boolean,
      required: false,
    },
    classButtonGroupDefault: {
      type: [String, Object, Array],
      required: false,
      default: undefined,
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
    const {
      idLocal,
      labelLocal,
      valueLocal,
    } = UiCheckboxRadioItem(props);

    const {
      classButton,
    } = ButtonGroupAPI(props);

    const modelValue = toRef(props, "modelValue");
    const isChecked = computed(() => {
      return modelValue.value === valueLocal.value;
    });

    const disabled = toRef(props, "disabled");
    const onClick = $event => {
      if (disabled.value || isChecked.value) {
        $event.preventDefault();
        $event.stopPropagation();
        return;
      }
      emit("changeModelValue", {
        model: valueLocal.value,
        $event,
      });
      $event.preventDefault();
      $event.stopPropagation();
    };

    const onKeydown = $event => {
      if ($event.key === "Enter" ||
        $event.keyCode === KEY_CODE_SPACE) {
        onClick($event);
        $event.stopPropagation();
        $event.preventDefault();
      }
    };

    return {
      classButton,
      idLocal,
      labelLocal,
      valueLocal,

      isChecked,
      onClick,
      onKeydown,
    };
  },
  render() {
    if (this.isButtonGroup) {
      return [
        h("input", {
          id: this.idLocal,
          name: this.id,
          value: this.valueLocal,
          type: "radio",
          checked: this.isChecked,
          class: "a_btn_check",
          disabled: this.disabled,
          onClick: this.onClick,
          onKeydown: this.onKeydown,
        }),
        h("label", {
          for: this.idLocal,
          class: this.classButton,
        }, [
          this.slotName && this.$slots[this.slotName] ?
            this.$slots[this.slotName]({
              id: this.id,
              item: this.dataItem,
              itemIndex: this.itemIndex,
            }) :
            this.labelLocal && withDirectives(h("span", {}), [
              [ASafeHtml, this.labelLocal],
            ]),
        ]),
      ];
    }
    return h("div", {
      class: ["a_custom_control a_custom_radio", {
        a_custom_control_invalid: this.isErrors,
      }],
    }, [
      h("input", {
        id: this.idLocal,
        name: this.id,
        value: this.valueLocal,
        type: "radio",
        checked: this.isChecked,
        class: "a_custom_control_input",
        disabled: this.disabled,
        onClick: this.onClick,
        onKeydown: this.onKeydown,
      }),
      h("label", {
        for: this.idLocal,
        class: ["a_custom_control_label", {
          a_custom_control_label_width_auto: this.isWidthAuto,
        }],
      }, [
        this.slotName && this.$slots[this.slotName] ?
          this.$slots[this.slotName]({
            id: this.id,
            item: this.dataItem,
            itemIndex: this.itemIndex,
          }) :
          this.labelLocal && withDirectives(h("span", {
            class: "a_custom_control_label__text",
          }), [
            [ASafeHtml, this.labelLocal],
          ]),
      ]),
    ]);
  },
};
