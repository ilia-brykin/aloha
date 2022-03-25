import AFormElementBtnClear from "../AFormElement/AFormElementBtnClear/AFormElementBtnClear";
import AIcon from "../AIcon/AIcon";
import ATranslation from "../ATranslation/ATranslation";

import {
  h,
} from "vue";
import {
  isUndefined,
} from "lodash-es";


export default {
  name: "AInput",
  components: {
    AFormElementBtnClear,
    AIcon,
    ATranslation,
  },
  props: {
    clearButtonClass: {
      type: [String, Object],
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    id: {
      type: String,
      required: true,
    },
    inputAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    inputClass: {
      required: false,
    },
    isClearButton: {
      type: Boolean,
      required: false,
      default: true,
    },
    isError: {
      type: Boolean,
      default: false,
    },
    maxlength: {
      type: String,
      required: false,
    },
    options: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    required: {
      type: Boolean,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    modelValue: {
      type: [String, Number],
      required: false,
    },
  },
  emits: [
    "update:modelValue",
    "change",
  ],
  computed: {
    disabledLocal() {
      return this.disabled || false;
    },

    idLocal() {
      return this.id;
    },

    maxlengthLocal() {
      return this.maxlength;
    },

    typeLocal() {
      return this.type || "text";
    },

    typeForInput() {
      if (this.typeLocal === "integer") {
        return "text";
      }
      return this.typeLocal;
    },

    isClearButtonLocal() {
      if (!isUndefined(this.isClearButton)) {
        return this.isClearButton;
      }
      return true;
    },

    isModel() {
      return !!(this.modelValue || this.modelValue === 0);
    },

    inputClassLocal() {
      return this.inputClass;
    },

    requiredLocal() {
      return this.required || false;
    },

    ariaRequired() {
      return `${ this.requiredLocal }`;
    },

    ariaInvalid() {
      if (this.isError) {
        return "true";
      }
    },

    disabledClearButton() {
      return this.disabledLocal || !this.isModel;
    },
  },
  methods: {
    onInput($event) {
      if (this.disabledLocal) {
        return;
      }
      let value = $event.target.value;
      if (this.typeLocal === "integer") {
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
      class: "a_form_element",
    }, [
      h("input", {
        id: "idLocal",
        value: this.modelValue,
        type: this.typeForInput,
        class: [
          "a_input form-control",
          this.inputClassLocal,
          {
            a_form_element_with_btn_close: this.isClearButtonLocal,
          },
        ],
        disabled: this.disabledLocal,
        "aria-required": this.ariaRequired,
        "aria-invalid": this.ariaInvalid,
        maxlength: this.maxlengthLocal,
        ...this.inputAttributes,
        onInput: this.onInput,
      }),
      this.isClearButtonLocal && h(AFormElementBtnClear, {
        disabled: this.disabledClearButton,
        clearButtonClass: this.clearButtonClass,
        onClear: this.clearModel,
      }),
    ]);
  },
};
