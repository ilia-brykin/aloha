import {
  computed,
  h,
  toRef,
} from "vue";

import AFormElementBtnClear from "../AFormElement/AFormElementBtnClear/AFormElementBtnClear";
import ALabel from "../ALabel/ALabel";
import ATranslation from "../ATranslation/ATranslation";

import AInputMixin from "../FormElements/AInputMixin";

import {
  frameworksApi,
} from "../API/frameworksApi";

export default {
  name: "AInput",
  components: {
    AFormElementBtnClear,
    ALabel,
    ATranslation,
  },
  mixins: [
    AInputMixin,
  ],
  props: {
    clearButtonClass: {
      type: [String, Object],
      required: false,
    },
    isClearButton: {
      type: Boolean,
      required: false,
      default: true,
    },
    maxlength: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const disabled = toRef(props, "disabled");
    const isError = toRef(props, "isError");
    const modelValue = toRef(props, "modelValue");
    const required = toRef(props, "required");
    const type = toRef(props, "type");

    const ariaInvalid = computed(() => {
      if (isError.value) {
        return "true";
      }
    });

    const ariaRequired = computed(() => {
      return `${ required.value }`;
    });

    const typeForInput = computed(() => {
      if (type.value === "integer") {
        return "text";
      }
      return type.value;
    });

    const isModel = computed(() => {
      return !!(modelValue.value || modelValue.value === 0);
    });

    const disabledClearButton = computed(() => {
      return disabled.value || !isModel.value;
    });

    const {
      frameworkLocal,
    } = frameworksApi(props);

    const inputClassLocal = computed(() => {
      if (frameworkLocal.value) {
        const INPUT_CLASS_FRAMEWORK = {
          bootstrap: "form-control",
          bulma: "input",
          foundation: "",
          uikit: "uk-input",
        };
        return INPUT_CLASS_FRAMEWORK[frameworkLocal.value];
      }
    });

    return {
      ariaInvalid,
      ariaRequired,
      disabledClearButton,
      frameworkLocal,
      inputClassLocal,
      isModel,
      typeForInput,
    };
  },
  methods: {
    onInput($event) {
      if (this.disabled) {
        return;
      }
      let value = $event.target.value;
      if (this.type === "integer") {
        value = value.replace(/\D/g, "");
        if (value !== "") {
          value = +value;
        }
        this.$refs.input.value = value;
      }
      this.$emit("update:modelValue", value);
      this.$emit("change", {
        model: value,
        props: this.$props,
      });
    },

    clearModel() {
      if (this.disabledClearButton) {
        return;
      }
      this.onInput({
        target: {
          value: "",
        },
      });
    },
  },
  render() {
    return h("div", {
      class: "a_form_element__parent",
    }, [
      this.label && h(ALabel, {
        id: this.id,
        label: this.label,
        labelClass: this.labelClass,
        required: this.required,
        type: this.type,
      }),
      h("div", {
        class: "a_form_element",
      }, [
        h("input", {
          id: this.id,
          ref: "input",
          value: this.modelValue,
          type: this.typeForInput,
          class: [
            "a_input",
            this.inputClass,
            this.inputClassLocal,
            {
              a_form_element_with_btn_close: this.isClearButton,
            },
          ],
          disabled: this.disabledLocal,
          "aria-required": this.ariaRequired,
          "aria-invalid": this.ariaInvalid,
          maxlength: this.maxlength,
          ...this.inputAttributes,
          onInput: this.onInput,
        }),
        this.isClearButton && h(AFormElementBtnClear, {
          disabled: this.disabledClearButton,
          clearButtonClass: this.clearButtonClass,
          onClear: this.clearModel,
        }),
      ]),
    ]);
  },
};
