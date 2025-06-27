import {
  defineAsyncComponent,
  h,
} from "vue";
import {
  AErrorsText,
  AFieldset,
  AFormHelpText,
  ALabel,
  AOneCheckbox,
  UiAPI,
  UIExcludeRenderAttributesAPI,
  UiStyleHideAPI,
} from "../../index";

import EventsAPI from "./compositionAPI/EventsAPI";
import ModelAPI from "./compositionAPI/ModelAPI";
import OptionsAPI from "./compositionAPI/OptionsAPI";
import SingleModeAPI from "./compositionAPI/SingleModeAPI";

import {
  uniqueId,
} from "lodash-es";

export default {
  name: "AValidatedJson",
  inheritAttrs: false,
  components: {
    ModeJson: defineAsyncComponent(() => import("../UiValidatedJson/ModeJson/ModeJson.vue")),
    ModeList: defineAsyncComponent(() => import("../UiValidatedJson/ModeList/ModeList.vue")),
    ModeSingle: defineAsyncComponent(() => import("../UiValidatedJson/ModeSingle/ModeSingle.vue")),
  },
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    change: {
      type: Function,
      required: false,
      default: () => {},
    },
    children: {
      type: Array,
      required: false,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    errors: {
      type: [String, Array, Object],
      required: false,
      default: undefined,
    },
    excludeRenderAttributes: {
      type: Array,
      required: false,
      default: () => [],
    },
    extra: {
      type: Object,
      required: false,
      default: undefined,
    },
    helpText: {
      type: String,
      required: false,
      default: undefined,
    },
    htmlId: {
      type: String,
      required: false,
      default: undefined,
    },
    id: {
      type: [String, Number],
      required: false,
      default: () => uniqueId("a_validated_json_"),
    },
    idPrefix: {
      type: String,
      required: false,
      default: undefined,
    },
    isHide: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    isRender: {
      type: Boolean,
      required: false,
      default: true,
    },
    label: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    labelClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    labelScreenReader: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    mode: {
      type: String,
      required: false,
      default: undefined,
      validator: value => ["list", "json", "single"].includes(value),
    },
    modeOptions: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    modelAll: {
      type: Object,
      required: false,
      default: undefined,
    },
    modelValue: {
      type: [String, Number, Boolean, Object, Array],
      required: false,
      default: undefined,
    },
    options: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    readonly: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    showReadonlyChildren: {
      type: Boolean,
      required: false,
      default: false,
    },
    useFlatErrors: {
      type: Boolean,
      required: false,
      default: false,
    },
    useFlatModel: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: [
    "update:modelValue",
  ],
  setup(props, context) {
    const {
      attributesToExcludeFromRender,
    } = UIExcludeRenderAttributesAPI(props);

    const {
      componentStyleHide,
    } = UiStyleHideAPI(props);

    const {
      ariaDescribedbyLocal,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
    } = UiAPI(props, context);

    const {
      keyField,
      posField,
      minLength,
      maxLength,
      elementLabel,
      elementTemplate,
      fields,
      fieldsReadonly,
      translateExtra,
      isRequired,
      showReadonly,
    } = OptionsAPI(props);

    const {
      onChange,
      checkUndefinedValue,
    } = ModelAPI(props, context);

    const {
      blur,
      focus,
      open,
      updateModelValue,
    } = EventsAPI(context);

    const {
      initSingleModeModelCheckbox,
      singleModeChildren,
      singleModeDataFormCheckbox,
    } = SingleModeAPI(props, {
      htmlIdLocal,
      updateModelValue,
    });

    initSingleModeModelCheckbox();

    return {
      blur,
      focus,
      open,
      updateModelValue,
      singleModeChildren,
      singleModeDataFormCheckbox,
      ariaDescribedbyLocal,
      attributesToExcludeFromRender,
      checkUndefinedValue,
      componentStyleHide,
      elementLabel,
      elementTemplate,
      errorsId,
      fields,
      fieldsReadonly,
      helpTextId,
      htmlIdLocal,
      isErrors,
      isRequired,
      keyField,
      maxLength,
      minLength,
      onChange,
      posField,
      showReadonly,
      translateExtra,
    };
  },
  render() {
    if (this.mode === "single") {
      return h(AFieldset, {
        ...this.$attrs,
        alwaysTranslate: this.alwaysTranslate,
        children: this.singleModeChildren,
        disabled: this.disabled,
        errors: this.errors,
        excludeRenderAttributes: this.excludeRenderAttributes,
        extra: this.extra,
        helpText: this.helpText,
        htmlId: this.htmlId,
        id: this.id,
        idPrefix: this.idPrefix,
        isHide: this.isHide,
        isRender: this.isRender,
        label: this.label,
        labelClass: this.labelClass,
        labelScreenReader: this.labelScreenReader,
        modelAll: this.modelAll,
        modelValue: this.modelValue,
        readonly: this.readonly,
        required: this.required,
        skipOwnIdInModelPath: true,
        slotNamePrepend: "singlePrepend",
        useFlatErrors: this.useFlatErrors,
        useFlatModel: this.useFlatModel,
        "onUpdate:modelValue": this.updateModelValue,
      }, {
        singlePrepend: !this.required ?
          () => {
            return h(AOneCheckbox, this.singleModeDataFormCheckbox);
          } :
          undefined,
        ...this.$slots,
      });
    }

    if (!this.isRender) {
      return null;
    }

    const CONTENT = h("div", {
      id: this.htmlIdLocal,
      tabindex: -1,
      class: "a_validated_json",
    }, [
      /*
       * this.mode === "list" ?
       *   h("ModeList", {
       *     model: this.modelValue,
       *     options: this.options,
       *     errors: this.errorsObj,
       *     idPrefix: this.subIdPrefix,
       *     change: this.onChange,
       *   }, this.$slots) :
       *   "",
       *
       * this.mode === "json" ?
       *   h("ModeJson", {
       *     model: this.modelValue,
       *     options: this.options,
       *     errors: this.errorsObj,
       *     idPrefix: this.subIdPrefix,
       *     change: this.onChange,
       *   }, this.$slots) :
       *   "",
       */
    ]);

    if (this.readonly) {
      /*
       * return h(AFormReadonly, {
       *   ...this.$attrs,
       *   id: this.htmlIdLocal,
       *   alwaysTranslate: this.alwaysTranslate,
       *   excludeRenderAttributes: this.excludeRenderAttributes,
       *   extra: this.extra,
       *   helpText: this.helpText,
       *   label: this.label,
       *   labelClass: this.labelClass,
       *   required: this.required,
       *   style: this.componentStyleHide,
       *   type: "validated_json",
       * }, () => CONTENT);
       */
    }

    return h("div", {
      ...this.$attrs,
      style: this.componentStyleHide,
      type: undefined,
      ...this.attributesToExcludeFromRender,
    }, [
      h("div", {
        class: "a_form_element__parent",
      }, [
        this.label && h(ALabel, {
          id: this.htmlIdLocal,
          label: this.label,
          labelClass: this.labelClass,
          labelScreenReader: this.labelScreenReader,
          required: this.isRequired,
        }),
        CONTENT,
        this.helpText && h(AFormHelpText, {
          id: this.helpTextId,
          text: this.helpText,
        }),
        this.isErrors && h(AErrorsText, {
          id: this.errorsId,
          errors: this.errors,
        }),
      ]),
    ]);
  },
};
