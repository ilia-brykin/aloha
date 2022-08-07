import {
  h,
} from "vue";

import AFormElementBtnClear from "../AFormElement/AFormElementBtnClear/AFormElementBtnClear";
import ALabel from "../ui/ALabel/ALabel";
import ATranslation from "../ATranslation/ATranslation";

import {
  frameworksApi,
} from "../API/frameworksApi";

import autosize from "../utils/autosize";
import frameworks from "../const/frameworks";
import {
  isUndefined,
} from "lodash-es";


export default {
  name: "ATextarea",
  components: {
    AFormElementBtnClear,
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
    modelValue: {
      type: [String, Number],
      required: false,
    },
    framework: {
      type: String,
      required: false,
      validator: framework => frameworks.indexOf(framework) !== -1,
    },
    isScalable: {
      type: Boolean,
      required: false,
    },
    rows: {
      type: [String, Number],
      required: false,
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
  data() {
    return {
      isAutosizeStarted: undefined,
    };
  },
  computed: {
    disabledLocal() {
      return this.disabled || false;
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

    rowsLocal() {
      if (this.rows) {
        return this.rows;
      }
      if (this.isScalable) {
        return 1;
      }
    },
  },
  mounted() {
    this.initAutosize();
  },
  beforeUnmount() {
    this.destroyAutosize();
  },
  methods: {
    initAutosize() {
      if (this.isScalable) {
        autosize(this.$refs.textarea);
        this.isAutosizeStarted = true;
      }
    },

    onInput($event) {
      if (this.disabledLocal) {
        return;
      }
      const value = $event.target.value;
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
      setTimeout(() => {
        autosize.update(this.$refs.textarea);
      });
    },

    destroyAutosize() {
      if (this.isAutosizeStarted) {
        autosize.destroy(this.$refs.textarea);
      }
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
      }),
      h("div", {
        class: "a_form_element",
      }, [
        h("textarea", {
          id: this.id,
          ref: "textarea",
          value: this.modelValue,
          rows: this.rowsLocal,
          class: [
            "a_textarea",
            this.inputClass,
            this.inputClassLocal,
            {
              a_textarea_scalable: this.isScalable,
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
