import {
  computed,
  h,
  toRef,
  withDirectives,
} from "vue";

import UiCheckboxRadioItem from "../compositionApi/UiCheckboxRadioItem";

import ASafeHtml from "../../directives/ASafeHtml";

import {
  cloneDeep,
} from "lodash-es";

const KEY_CODE_SPACE = 32;

export default {
  name: "ACheckboxItem",
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
      type: Array,
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
      return modelValue.value && modelValue.value.indexOf(valueLocal.value) !== -1;
    });

    const disabled = toRef(props, "disabled");
    const onClick = $event => {
      if (disabled.value) {
        $event.preventDefault();
        $event.stopPropagation();
        return;
      }
      const MODEL = cloneDeep(modelValue.value) || [];
      if (isChecked.value) {
        const INDEX = MODEL.indexOf(valueLocal.value);
        MODEL.splice(INDEX, 1);
      } else {
        MODEL.push(valueLocal.value);
      }

      emit("changeModelValue", {
        model: MODEL,
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
      class: ["a_custom_control a_custom_checkbox", {
        a_custom_control_invalid: this.isErrors,
      }],
    }, [
      h("input", {
        id: this.idLocal,
        name: this.id,
        value: this.valueLocal,
        type: "checkbox",
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
        this.labelLocal && withDirectives(h("span", {
          class: "a_custom_control_label__text",
        }), [
          [ASafeHtml, this.labelLocal],
        ]),
      ]),
    ]);
  },
};
