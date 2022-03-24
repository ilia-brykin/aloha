import AIcon from "../AIcon/AIcon";
import ATranslation from "../ATranslation/ATranslation";

import {
  isUndefined,
} from "lodash-es";

export default {
  name: "AInput",
  components: {
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
      type: Number,
      required: false,
    },
    inputAttributes: {
      type: Object,
      required: false,
    },
    inputClass: {
      required: false,
    },
    isClearButton: {
      type: Boolean,
      required: false,
      default: undefined,
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
      return this.disabled || this.options.disabled || false;
    },

    idLocal() {
      return this.id || this.options.id;
    },

    maxlengthLocal() {
      return this.maxlength || this.options.maxlength;
    },

    typeLocal() {
      return this.type || this.options.type || "text";
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
      if (!isUndefined(this.options.isClearButton)) {
        return this.options.isClearButton;
      }
      return true;
    },

    isModel() {
      return !!(this.modelValue || this.modelValue === 0);
    },

    inputClassLocal() {
      return this.inputClass || this.options.inputClass;
    },

    requiredLocal() {
      return this.required || this.options.required || false;
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

    inputAttributesLocal() {
      return this.inputAttributes || this.options.inputAttributes;
    },

    clearButtonClassLocal() {
      return this.clearButtonClass ||
        this.options.clearButtonClass ||
        "btn btn-outline-secondary";
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
};
