import {
  computed,
  h,
  toRef,
} from "vue";

import AFormElementBtnClear from "../../AFormElement/AFormElementBtnClear/AFormElementBtnClear";
import AIcon from "../../AIcon/AIcon";
import ALabel from "../../ALabel/ALabel";
import ATranslation from "../../ATranslation/ATranslation";

import UiClearButtonMixinProps from "../mixins/UiClearButtonMixinProps";
import UiMixinProps from "../mixins/UiMixinProps";

import UiAPI from "../compositionApi/UiAPI";
import UiClearButtonAPI from "../compositionApi/UiClearButtonAPI";

export default {
  name: "AInput",
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
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: "text",
    },
    iconPrepend: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  setup(props, context) {
    const {
      ariaRequired,
      changeModel,
      clearModel,
      disabledLocal,
      isModel,
      onBlur,
      onFocus,
      requiredLocal,
    } = UiAPI(props, context);

    const {
      clearButtonClassLocal,
      isClearButtonLocal,
    } = UiClearButtonAPI(props, {
      isModel,
    });

    const isLabelFloat = toRef(props, "isLabelFloat");
    const isLabelFloatLocal = computed(() => {
      return isLabelFloat.value;
    });

    const isError = toRef(props, "isError");
    const type = toRef(props, "type");
    const options = toRef(props, "options");
    const typeLocal = computed(() => {
      return "type" in options.value ?
        options.value.type :
        type.value;
    });

    const ariaInvalid = computed(() => {
      if (isError.value) {
        return "true";
      }
      return false;
    });

    const typeForInput = computed(() => {
      if (typeLocal.value === "integer") {
        return "text";
      }
      return type.value;
    });

    const onInput = $event => {
      if (disabledLocal.value) {
        return;
      }
      let value = $event.target.value;
      if (typeLocal.value === "integer") {
        value = value.replace(/\D/g, "");
        if (value !== "") {
          value = +value;
        }
        // this.$refs.input.value = value;
      }
      changeModel({
        model: value,
      });
    };

    const iconPrepend = toRef(props, "iconPrepend");
    const iconPrependLocal = computed(() => {
      return "type" in options.value ?
        options.value.iconPrepend :
        iconPrepend.value;
    });

    return {
      ariaRequired,
      clearModel,
      disabledLocal,
      isModel,
      requiredLocal,

      clearButtonClassLocal,
      isClearButtonLocal,

      ariaInvalid,
      iconPrependLocal,
      onInput,
      typeForInput,
      typeLocal,

      isLabelFloatLocal,
      onFocus,
      onBlur,
    };
  },
  render() {
    return h("div", {
      class: ["a_form_element__parent", {
        a_form_element__parent_float: this.isLabelFloatLocal,
        a_form_element__parent_not_empty: this.isModel,
        a_form_element__parent_float_has_icon_prepend: this.iconPrependLocal,
      }],
    }, [
      this.label && h(ALabel, {
        id: this.id,
        label: this.label,
        labelClass: this.labelClass,
        required: this.requiredLocal,
        type: this.typeLocal,
        isLabelFloat: this.isLabelFloatLocal,
      }),
      h("div", {
        class: "a_form_element",
      }, [
        this.iconPrependLocal && h(AIcon, {
          icon: this.iconPrependLocal,
          class: "a_input__icon_prepend",
        }),
        h("input", {
          id: this.id,
          ref: "input",
          value: this.modelValue,
          type: this.typeForInput,
          class: [
            "a_form_control a_input",
            this.inputClass,
            {
              a_form_element_with_btn_close: this.isClearButtonLocal,
            },
          ],
          disabled: this.disabledLocal,
          ariaRequired: this.ariaRequired,
          ariaInvalid: this.ariaInvalid,
          maxlength: this.maxlength,
          ...this.inputAttributes,
          onInput: this.onInput,
          onFocus: this.onFocus,
          onBlur: this.onBlur,
        }),
        this.isClearButtonLocal && h(AFormElementBtnClear, {
          disabled: this.disabledLocal,
          clearButtonClass: this.clearButtonClassLocal,
          onClear: this.clearModel,
        }),
      ]),
    ]);
  },
};
