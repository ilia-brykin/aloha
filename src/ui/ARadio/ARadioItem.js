import {
  computed,
  h, toRef,
} from "vue";

import UiCheckboxRadioItem from "../compositionApi/UiCheckboxRadioItem";

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
    options: {
      type: Object,
      required: true,
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
    const {
      idLocal,
      labelLocal,
      valueLocal,
    } = UiCheckboxRadioItem(props);

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
      idLocal,
      labelLocal,
      valueLocal,

      isChecked,
      onClick,
      onKeydown,
    };
  },
  render() {
    return h("div", {
      class: "a_custom_control a_custom_radio",
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
        h("span", {
          innerHTML: this.labelLocal,
        }),
      ]),
    ]);
  },
};
