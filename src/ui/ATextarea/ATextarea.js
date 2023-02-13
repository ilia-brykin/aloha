import {
  computed,
  h,
  onBeforeUnmount,
  onMounted,
  ref,
  toRef,
  withDirectives,
} from "vue";

import AErrorsText from "../AErrorsText/AErrorsText";
import AFormElementBtnClear from "../../AFormElement/AFormElementBtnClear/AFormElementBtnClear";
import ALabel from "../ALabel/ALabel";
import ATranslation from "../../ATranslation/ATranslation";

import ASafeHtml from "../../directives/ASafeHtml";

import UiClearButtonMixinProps from "../mixins/UiClearButtonMixinProps";
import UiMixinProps from "../mixins/UiMixinProps";

import ResizeClass from "./compositionAPI/ResizeClass";
import UiAPI from "../compositionApi/UiAPI";
import UiClearButtonAPI from "../compositionApi/UiClearButtonAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";

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
    resize: {
      type: String,
      required: false,
      default: "v",
      validator: value => ["v", "h", "none", "auto"].indexOf(value) !== -1,
    },
  },
  setup(props, context) {
    const {
      componentStyleHide,
    } = UiStyleHideAPI(props);

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

    const {
      resizeClass,
    } = ResizeClass(props);

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
      ariaDescribedbyLocal,
      changeModel,
      clearModel,
      componentStyleHide,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isAutosizeStarted,
      isClearButtonLocal,
      isErrors,
      isModel,
      onBlur,
      onFocus,
      onInput,
      resizeClass,
      rowsLocal,
      textareaRef,
    };
  },
  render() {
    return this.isRender && h("div", {
      style: this.componentStyleHide,
    }, [
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
              this.resizeClass,
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
        this.helpText && withDirectives(h("div", {
          id: this.helpTextId,
          class: "a_form_element__help_text",
        }), [
          [ASafeHtml, this.helpText],
        ]),
        this.isErrors && h(AErrorsText, {
          id: this.errorsId,
          errors: this.errors,
        }),
      ]),
    ]);
  },
};
