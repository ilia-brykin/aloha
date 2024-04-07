import {
  h,
  onMounted,
  ref,
  toRef,
} from "vue";

import AErrorsText from "../AErrorsText/AErrorsText";
import AFormHelpText from "../AFormHelpText/AFormHelpText";
import ALabel from "../ALabel/ALabel";

import UiMixinProps from "../mixins/UiMixinProps";

import ATinymceAPI from "./compositionAPI/ATinymceAPI";
import UiAPI from "../compositionApi/UiAPI";
import UIExcludeRenderAttributesAPI from "../compositionApi/UIExcludeRenderAttributesAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";

import {
  tinymcePluginOptions,
} from "../../plugins/ATinymcePlugin";

export default {
  name: "ATinymce",
  mixins: [
    UiMixinProps,
  ],
  props: {
    branding: {
      type: Boolean,
      required: false,
      default: () => tinymcePluginOptions.value.propsDefault.branding,
    },
    contentCustomStyle: {
      type: String,
      required: false,
      default: () => tinymcePluginOptions.value.propsDefault.contentCustomStyle,
    },
    contentLangs: {
      type: Array,
      required: false,
      default: () => tinymcePluginOptions.value.propsDefault.contentLangs,
    },
    excludeRenderAttributes: {
      type: Array,
      required: false,
      default: () => [],
    },
    labelScreenReader: {
      type: String,
      required: false,
      default: undefined,
    },
    languageDefault: {
      type: String,
      required: false,
      default: () => tinymcePluginOptions.value.propsDefault.languageDefault,
    },
    maxlength: {
      type: [String, Number],
      required: false,
      default: () => tinymcePluginOptions.value.propsDefault.maxlength,
    },
    menu: {
      type: Object,
      required: false,
      default: () => tinymcePluginOptions.value.propsDefault.menu,
    },
    menubar: {
      type: [String, Boolean],
      required: false,
      default: () => tinymcePluginOptions.value.propsDefault.menubar,
    },
    plugins: {
      type: String,
      required: false,
      default: () => tinymcePluginOptions.value.propsDefault.plugins,
    },
    promotion: {
      type: Boolean,
      required: false,
      default: () => tinymcePluginOptions.value.propsDefault.promotion,
    },
    rows: {
      type: [String, Number],
      required: false,
      default: () => tinymcePluginOptions.value.propsDefault.rows,
    },
    toolbar: {
      type: [String, Object, Array],
      required: false,
      default: () => tinymcePluginOptions.value.propsDefault.toolbar,
    },
    toolbarMode: {
      type: String,
      required: false,
      default: () => tinymcePluginOptions.value.propsDefault.toolbarMode,
      validator: value => ["floating", "sliding", "scrolling", "wrap"].indexOf(value) !== -1,
    },
    type: {
      type: String,
      required: false,
      default: "tinymce",
    },
    validElements: {
      type: String,
      required: false,
      default: () => tinymcePluginOptions.value.propsDefault.validElements,
    },
    validStyles: {
      type: Object,
      required: false,
      default: () => tinymcePluginOptions.value.propsDefault.validStyles,
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
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
      isModel,
      onBlur,
      onFocus,
    } = UiAPI(props, context);

    const {
      clickLabel,
      render,
    } = ATinymceAPI(props, context, {
      changeModel,
      htmlIdLocal,
    });

    const textareaRef = ref(undefined);

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

    onMounted(() => {
      render();
    });

    return {
      ariaDescribedbyLocal,
      attributesToExcludeFromRender,
      changeModel,
      clickLabel,
      componentStyleHide,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
      isModel,
      onBlur,
      onFocus,
      onInput,
      render,
      textareaRef,
    };
  },
  render() {
    if (!this.isRender) {
      return null;
    }

    return h("div", {
      style: this.componentStyleHide,
      ...this.attributesToExcludeFromRender,
    }, [
      h("div", {
        class: ["a_form_element__parent", {
          a_form_element__parent_not_empty: this.isModel,
        }],
      }, [
        this.label && h(ALabel, {
          id: this.htmlIdLocal,
          clickLabel: this.clickLabel,
          label: this.label,
          labelClass: this.labelClass,
          labelScreenReader: this.labelScreenReader,
          prevent: true,
          required: this.required,
          stop: true,
        }),
        h("div", {
          class: ["a_form_element", {
            a_form_control_invalid: this.isErrors,
          }],
        }, [
          h("textarea", {
            ref: "textareaRef",
            id: this.htmlIdLocal,
            value: this.modelValue,
            class: [
              "a_form_control a_textarea a_textarea_tinymce",
              this.inputClass,
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
        ]),
        h(AFormHelpText, {
          id: this.helpTextId,
          html: this.helpText,
          extra: this.extra,
        }),
        this.isErrors && h(AErrorsText, {
          id: this.errorsId,
          errors: this.errors,
        }),
      ]),
    ]);
  },
};
