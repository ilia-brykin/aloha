import {
  h, onMounted,
  ref,
  toRef,
} from "vue";

import AErrorsText from "../AErrorsText/AErrorsText";
import ALabel from "../ALabel/ALabel";

import UiMixinProps from "../mixins/UiMixinProps";

import ATinymceAPI from "./compositionAPI/ATinymceAPI";
import UiAPI from "../compositionApi/UiAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";

export default {
  name: "ATinymce",
  mixins: [
    UiMixinProps,
  ],
  props: {
    branding: {
      type: Boolean,
      required: false,
      default: false,
    },
    contentLangs: {
      type: Array,
      required: false,
      default: () => [
        { title: "English", code: "en" },
        { title: "Spanish", code: "es" },
        { title: "French", code: "fr" },
        { title: "Deutsch", code: "de" },
        { title: "Portuguese", code: "pt" },
        { title: "Chinese", code: "zh" },
      ],
    },
    languageDefault: {
      type: String,
      required: false,
      default: "de",
    },
    maxlength: {
      type: [String, Number],
      required: false,
    },
    menu: {
      type: Object,
      required: false,
      default: undefined,
    },
    menubar: {
      type: [String, Boolean],
      required: false,
      default: false,
    },
    plugins: {
      type: String,
      required: false,
      default: "advlist code emoticons link lists table help",
    },
    promotion: {
      type: Boolean,
      required: false,
      default: false,
    },
    rows: {
      type: [String, Number],
      required: false,
    },
    toolbar: {
      type: [String, Object, Array],
      required: false,
      default: () => ([
        { name: "Formatierung", items: ["bold", "italic", "underline"] },
        { name: "Ausrichtung", items: ["alignleft", "aligncenter", "alignright", "alignjustify"] },
        { name: "Liste", items: ["bullist", "numlist"] },
        { name: "Einrücken", items: ["indent", "outdent"] },
        { name: "Sprache", items: ["language"] },
        { name: "Link", items: ["link", "unlink"] },
        { name: "Historie", items: ["undo", "redo"] },
        { name: "Hilfe", items: ["help"] },
      ]),
    },
    toolbarMode: {
      type: String,
      required: false,
      default: "wrap",
      validator: value => ["floating", "sliding", "scrolling", "wrap"].indexOf(value) !== -1,
    },
    type: {
      type: String,
      required: false,
      default: "tinymce",
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
      componentStyleHide,

      ariaDescribedbyLocal,
      changeModel,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
      isModel,
      onBlur,
      onFocus,

      clickLabel,
      onInput,
      textareaRef,
      render,
    };
  },
  render() {
    return this.isRender && h("div", {
      style: this.componentStyleHide,
    }, [
      h("div", {
        class: ["a_form_element__parent", {
          a_form_element__parent_not_empty: this.isModel,
        }],
      }, [
        this.label && h(ALabel, {
          id: this.htmlIdLocal,
          label: this.label,
          labelClass: this.labelClass,
          required: this.required,
          clickLabel: this.clickLabel,
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
