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
  name: "AJson",
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
      type: [String, Number, Object, Array],
      required: false,
    },
    framework: {
      type: String,
      required: false,
      validator: framework => frameworks.indexOf(framework) !== -1,
    },
    nullValue: {
      required: false,
      default: "",
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
      jsonString: undefined,
      jsonStringInput: undefined,
      initialModelValue: undefined,
      isAutosizeStarted: undefined,
      parseError: undefined,
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

    isFormatJsonButtonDisabled() {
      return !!this.parseError;
    },
  },
  created() {
    this.setInitialValue();
    this.onJSONtoString();
  },
  mounted() {
    this.initAutosize();
  },
  beforeUnmount() {
    this.destroyAutosize();
  },
  methods: {
    setInitialValue() {
      this.initialModelValue = this.modelValue || "";
    },

    onJSONtoString() {
      if (this.modelValue) {
        this.jsonString = JSON.stringify(this.modelValue, undefined, 2);
      } else {
        this.jsonString = "";
      }
      this.jsonStringInput = this.jsonString;
      this.parseError = undefined;
    },

    initAutosize() {
      if (this.isScalable) {
        autosize(this.$refs.textarea);
        this.isAutosizeStarted = true;
      }
    },

    stringToJSON($event) {
      const value = $event.target.value;
      if (!value || value.length === 0) {
        this.changeModel({
          modelValue: this.nullValue,
          $event,
        });
      } else {
        try {
          const MODEL = JSON.parse(value);
          this.jsonString = JSON.stringify(MODEL, undefined, 2);
          this.parseError = undefined;
          this.changeModel({
            modelValue: MODEL,
            $event,
          });
        } catch (e) {
          this.parseError = e.toString();
        }
      }
      this.jsonStringInput = value;
    },

    onInput($event) {
      if (this.disabledLocal) {
        return;
      }
      let value = $event.target.value;
      if (!value) {
        value = this.nullValue;
      }
      this.changeModel({
        modelValue: value,
        $event,
      });
    },

    changeModel({ modelValue, $event }) {
      this.$emit("update:modelValue", modelValue);
      this.$emit("change", {
        model: modelValue,
        props: this.$props,
        $event,
      });
    },

    clearModel() {
      if (this.disabledClearButton) {
        return;
      }
      this.changeModel({
        modelValue: this.nullValue,
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

    formatJson() {
      try {
        this.jsonStringInput = JSON.stringify(JSON.parse(this.jsonStringInput), undefined, 2);
      } catch (e) {
        this.parseError = e.toString();
      }
    },

    resetJson($event) {
      this.changeModel({ modelValue: this.initialModelValue, $event });
      setTimeout(() => this.onJSONtoString());
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
        isError: this.isError,
      }),
      h("div", {}, [
        h("button", {
          disabled: this.isFormatJsonButtonDisabled,
          onClick: this.formatJson,
        }, [
          "format",
        ]),
        h("button", {
          title: "Eingabe aktuellen Wert zurücksetzen",
          onClick: this.onJSONtoString,
        }, [
          "JSONtoString",
        ]),
        h("button", {
          title: "ALLE Änderungen verwefen",
          onClick: this.resetJson,
        }, [
          "reset",
        ]),
      ]),
      h("div", {
        class: "a_form_element",
      }, [
        h("textarea", {
          id: this.id,
          ref: "textarea",
          value: this.jsonStringInput,
          rows: this.rowsLocal,
          class: [
            "a_textarea",
            this.inputClass,
            this.inputClassLocal,
            {
              a_textarea_scalable: this.isScalable,
              a_form_element_with_one_btn: this.isClearButtonLocal,
            },
          ],
          disabled: this.disabledLocal,
          "aria-required": this.ariaRequired,
          "aria-invalid": this.ariaInvalid,
          maxlength: this.maxlength,
          ...this.inputAttributes,
          onInput: this.stringToJSON,
        }),
        this.isClearButtonLocal ?
          h("div", {
            class: "a_form_control__actions"
          }, [
            h(AFormElementBtnClear, {
              disabled: this.disabledClearButton,
              class: this.clearButtonClass,
              onClear: this.clearModel,
            }),
          ]) :
          "",
      ]),
      this.parseError && h("div", {}, [
        this.parseError,
      ]),
    ]);
  },
};
