import AFormElementBtnClear from "../AFormElement/AFormElementBtnClear/AFormElementBtnClear";
import AIcon from "../AIcon/AIcon";
import ALabel from "../ALabel/ALabel";
import ATranslation from "../ATranslation/ATranslation";

import {
  frameworksApi,
} from "../API/frameworksApi";

import frameworks from "../const/frameworks";
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
    ALabel,
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
    label: {
      type: String,
      required: false,
    },
    labelClass: {
      required: false,
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
      default: false,
    },
    type: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      required: false,
    },
    framework: {
      type: String,
      required: false,
      validator: framework => frameworks.indexOf(framework) !== -1,
    },
  },
  emits: [
    "update:modelValue",
    "change",
  ],
  setup(props) {
    const {
      frameworkLocal,
    } = frameworksApi(props);
    return {
      frameworkLocal,
    };
  },
  computed: {
    disabledLocal() {
      return this.disabled || false;
    },

    typeForInput() {
      if (this.type === "integer") {
        return "text";
      }
      return this.type;
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
      if (this.frameworkLocal) {
        const INPUT_CLASS_FRAMEWORK = {
          bootstrap: "form-control",
          bulma: "input",
          foundation: "",
          uikit: "uk-input",
        };
        return INPUT_CLASS_FRAMEWORK[this.frameworkLocal];
      }
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
          value: this.modelValue,
          type: this.typeForInput,
          class: [
            "a_input",
            this.inputClass,
            this.inputClassLocal,
            {
              a_form_element_with_btn_close: this.isClearButtonLocal,
            },
          ],
          disabled: this.disabledLocal,
          "aria-required": this.ariaRequired,
          "aria-invalid": this.ariaInvalid,
          maxlength: this.maxlength,
          ...this.inputAttributes,
          onInput: this.onInput,
        }),
        this.isClearButtonLocal && h(AFormElementBtnClear, {
          disabled: this.disabledClearButton,
          clearButtonClass: this.clearButtonClass,
          onClear: this.clearModel,
        }),
      ]),
    ]);
  },
};
