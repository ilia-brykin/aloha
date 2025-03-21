import {
  computed,
  h,
  ref,
  toRef,
} from "vue";

import AErrorsText from "../AErrorsText/AErrorsText";
import AFormHelpText from "../AFormHelpText/AFormHelpText";
import ALabel from "../ALabel/ALabel";

import UIExcludeRenderAttributesAPI from "../compositionApi/UIExcludeRenderAttributesAPI";
import UiAPI from "../compositionApi/UiAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";

import UiMixinProps from "../mixins/UiMixinProps";
import {
  forEach,
  isArray,
  isPlainObject,
  size,
} from "lodash-es";

export default {
  name: "AInputFile",
  inheritAttrs: false,
  mixins: [
    UiMixinProps,
  ],
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    excludeRenderAttributes: {
      type: Array,
      required: false,
      default: () => [],
    },
    isMultiple: {
      type: Boolean,
      required: false,
    },
    labelScreenReader: {
      type: String,
      required: false,
      default: undefined,
    },
    modelUndefined: {
      required: false,
      default: "",
    },
    modelValue: {
      type: [String, Number, Object, Array],
      required: false,
    },
    text: {
      type: String,
      required: false,
      default: "Dateien auswählen",
    },
    type: {
      type: String,
      required: false,
      default: "input",
    },
  },
  setup(props, context) {
    const {
      attributesToExcludeFromRender,
    } = UIExcludeRenderAttributesAPI(props);

    const {
      componentStyleHide,
    } = UiStyleHideAPI(props);

    const {
      ariaDescribedbyLocal,
      changeModel,
      clearModel,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
      onBlur,
      onFocus,
    } = UiAPI(props, context);

    const isMultiple = toRef(props, "isMultiple");
    const modelValue = toRef(props, "modelValue");
    const isModel = computed(() => {
      if (isMultiple.value) {
        return !!(isArray(modelValue.value) && modelValue.value.length > 0);
      }
      return !!(isPlainObject(modelValue.value) && size(modelValue.value) > 0);
    });

    const modelValueListLocal = computed(() => {
      if (!isModel.value) {
        return [];
      }
      if (isMultiple.value) {
        return modelValue.value;
      }
      return [modelValue.value];
    });

    const inputRef = ref(undefined);
    const disabled = toRef(props, "disabled");

    const onInput = $event => {
      if (disabled.value) {
        return;
      }
      const EVENT_FILES = $event.target.files;
      if (EVENT_FILES && EVENT_FILES.length) {
        const FILES = [];
        forEach(EVENT_FILES, file => {
          FILES.push({
            id: "",
            size: file.size,
            name: file.webkitRelativePath || file.relativePath || file.name,
            type: file.type,
            file,
          });
        });

        changeModel({
          model: isMultiple.value ? FILES : FILES[0],
        });
      }
    };

    const required = toRef(props, "required");
    const textAfterLabel = computed(() => {
      return required.value ? "*" : "";
    });

    return {
      ariaDescribedbyLocal,
      attributesToExcludeFromRender,
      clearModel,
      componentStyleHide,
      errorsId,
      helpTextId,
      htmlIdLocal,
      inputRef,
      isErrors,
      isModel,
      modelValueListLocal,
      onBlur,
      onFocus,
      onInput,
      textAfterLabel,
    };
  },
  render() {
    if (!this.isRender) {
      return null;
    }

    return h("div", {
      ...this.$attrs,
      style: this.componentStyleHide,
      ...this.attributesToExcludeFromRender,
    }, [
      h("div", {
        class: "a_form_element__parent",
      }, [
        this.label && h(ALabel, {
          id: this.htmlIdLocal,
          alwaysTranslate: this.alwaysTranslate,
          label: this.label,
          labelClass: this.labelClass,
          labelScreenReader: this.labelScreenReader,
          required: this.required,
          hideId: true,
          type: this.type,
          isError: this.isErrors,
        }),
        h("div", {}, [
          h("label", {
            for: this.htmlIdLocal,
            class: ["a_file__label a_form_control", this.labelClass, {
              disabled: this.disabled,
            }],
            required: this.required,
            type: this.type,
          }, [
            h("input", {
              ref: "inputRef",
              id: this.htmlIdLocal,
              type: "file",
              multiple: this.isMultiple,
              class: [
                "a_file__input",
                this.inputClass,
                {
                  a_form_control_invalid: this.isErrors,
                },
              ],
              disabled: this.disabled,
              ariaRequired: this.required,
              ariaInvalid: this.isErrors,
              "aria-describedby": this.ariaDescribedbyLocal,
              ...this.inputAttributes,
              onInput: this.onInput,
              onFocus: this.onFocus,
              onBlur: this.onBlur,
            }),
            h("span", {
              class: "a_file__label",
            }, this.text),
          ]),
        ]),
        this.isModel && h("ul", {}, [
          this.modelValueListLocal.map(model => {
            return h("li", { }, model.name);
          }),
        ]),
        h(AFormHelpText, {
          id: this.helpTextId,
          alwaysTranslate: this.alwaysTranslate,
          html: this.helpText,
          extra: this.extra,
        }),
        this.isErrors && h(AErrorsText, {
          id: this.errorsId,
          alwaysTranslate: this.alwaysTranslate,
          errors: this.errors,
        }),
      ]),
    ]);
  },
};
