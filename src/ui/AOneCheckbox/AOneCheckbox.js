import {
  computed,
  h,
  toRef,
} from "vue";

import UiMixinProps from "../mixins/UiMixinProps";

import UiAPI from "../compositionApi/UiAPI";

const KEY_CODE_SPACE = 32;

export default {
  name: "AOneCheckbox",
  mixins: [
    UiMixinProps,
  ],
  props: {
    modelValue: {
      type: Boolean,
      required: false,
    },
    isWidthAuto: {
      type: Boolean,
      required: false,
    },
  },
  setup(props, context) {
    const {
      ariaRequired,
      changeModel,
      disabledLocal,
      idLocal,
      isError,
      labelLocal,
      onBlur,
      onFocus,
      requiredLocal,
    } = UiAPI(props, context);


    const modelValue = toRef(props, "modelValue");
    const isChecked = computed(() => {
      return modelValue.value === true;
    });

    const onClick = $event => {
      if (disabledLocal.value) {
        return;
      }
      setTimeout(() => {
        changeModel({
          model: !isChecked.value,
          $event,
        });
      });
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
      ariaRequired,
      disabledLocal,
      idLocal,
      isError,
      labelLocal,
      requiredLocal,

      isChecked,
      onClick,
      onFocus,
      onKeydown,
      onBlur,
    };
  },
  render() {
    return h("div", {
      class: ["a_form_element__parent"],
    }, [
      h("div", {
        class: "a_form_element",
      }, [
        h("div", {
          class: "a_custom_control a_custom_checkbox",
        }, [
          h("input", {
            id: this.idLocal,
            value: this.modelValue,
            type: "checkbox",
            checked: this.isChecked,
            class: "a_custom_control_input",
            disabled: this.disabledLocal,
            ariaRequired: this.ariaRequired,
            ariaInvalid: this.isError,
            ...this.inputAttributes,
            onClick: this.onClick,
            onKeydown: this.onKeydown,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
          }),
          h("label", {
            for: this.idLocal,
            class: ["a_custom_control_label", {
              a_custom_control_label_width_auto: this.isWidthAuto,
            }],
          }, [
            h("span", {
              innerHTML: this.labelLocal,
            }),
          ]),
        ]),
      ]),
    ]);
  },
};
