import {
  computed,
  h,
  onBeforeUnmount,
  onMounted,
  ref,
  toRef,
} from "vue";

import AErrorsText from "../AErrorsText/AErrorsText";
import AFormElementBtnClear from "../../AFormElement/AFormElementBtnClear/AFormElementBtnClear";
import ALabel from "../ALabel/ALabel";
import ATranslation from "../../ATranslation/ATranslation";

import UiClearButtonMixinProps from "../mixins/UiClearButtonMixinProps";
import UiMixinProps from "../mixins/UiMixinProps";

import UiAPI from "../compositionApi/UiAPI";
import UiClearButtonAPI from "../compositionApi/UiClearButtonAPI";
import UiDependenciesAPI from "../compositionApi/UiDependenciesAPI";

import autosize from "../../utils/autosize";


export default {
  name: "ATextarea",
  components: {
    AFormElementBtnClear,
    ALabel,
    ATranslation,
  },
  mixins: [
    UiClearButtonMixinProps,
    UiMixinProps,
  ],
  props: {
    maxlength: {
      type: [String, Number],
      required: false,
    },
    isScalable: {
      type: Boolean,
      required: false,
    },
    rows: {
      type: [String, Number],
      required: false,
    },
    modelUndefined: {
      required: false,
      default: "",
    },
  },
  setup(props, context) {
    const {
      componentStyleHideDependencies,
    } = UiDependenciesAPI(props);

    const {
      ariaDescribedbyLocal,
      changeModel,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
      isModel,
      onBlur,
      onFocus,
    } = UiAPI(props, context);

    const {
      isClearButtonLocal,
    } = UiClearButtonAPI(props, {
      isModel,
    });

    const isAutosizeStarted = ref(undefined);

    const rows = toRef(props, "rows");
    const isScalable = toRef(props, "isScalable");
    const rowsLocal = computed(() => {
      if (rows.value) {
        return rows.value;
      }
      if (isScalable.value) {
        return 1;
      }
      return undefined;
    });

    const textareaRef = ref(undefined);
    const initAutosize = () => {
      if (isScalable.value) {
        autosize(textareaRef.value);
        isAutosizeStarted.value = true;
      }
    };

    const destroyAutosize = () => {
      if (isAutosizeStarted.value) {
        autosize.destroy(textareaRef.value);
      }
    };

    const disabled = toRef(props, "disabled");
    const onInput = $event => {
      if (disabled.value) {
        return;
      }
      const value = $event.target.value;
      changeModel({
        model: value,
      });
    };

    const modelUndefined = toRef(props, "modelUndefined");
    const clearModel = () => {
      if (disabled.value) {
        return;
      }
      changeModel({
        model: modelUndefined.value,
      });
      setTimeout(() => {
        autosize.update(textareaRef.value);
      });
    };

    onMounted(() => {
      initAutosize();
    });

    onBeforeUnmount(() => {
      destroyAutosize();
    });

    return {
      componentStyleHideDependencies,

      ariaDescribedbyLocal,
      changeModel,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
      isModel,
      onBlur,
      onFocus,

      isClearButtonLocal,

      clearModel,
      isAutosizeStarted,
      onInput,
      rowsLocal,
      textareaRef,
    };
  },
  render() {
    return h("div", null, [
      h("div", {
        class: ["a_form_element__parent", {
          a_form_element__parent_float: this.isLabelFloat,
          a_form_element__parent_not_empty: this.isModel,
        }],
      }, [
        this.label && h(ALabel, {
          id: this.htmlIdLocal,
          label: this.label,
          labelClass: this.labelClass,
          required: this.required,
          isLabelFloat: this.isLabelFloat,
        }),
        h("div", {
          class: "a_form_element",
        }, [
          h("textarea", {
            ref: "textareaRef",
            id: this.htmlIdLocal,
            value: this.modelValue,
            rows: this.rowsLocal,
            class: [
              "a_form_control a_textarea",
              this.inputClass,
              {
                a_textarea_scalable: this.isScalable,
                a_form_element_with_btn_close: this.isClearButton,
                a_form_control_invalid: this.isErrors,
              },
            ],
            disabled: this.disabled,
            ariaRequired: this.required,
            ariaInvalid: this.isErrors,
            "aria-describedby": this.ariaDescribedbyLocal,
            maxlength: this.maxlength,
            ...this.inputAttributes,
            onInput: this.onInput,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
          }),
          this.isClearButtonLocal && h(AFormElementBtnClear, {
            disabled: this.disabled,
            clearButtonClass: this.clearButtonClass,
            onClear: this.clearModel,
          }),
        ]),
        this.helpText && h("div", {
          id: this.helpTextId,
          class: "a_form_element__help_text",
          innerHTML: this.helpText,
        }),
        this.isErrors && h(AErrorsText, {
          id: this.errorsId,
          errors: this.errors,
        }),
      ]),
    ]);
  },
};
