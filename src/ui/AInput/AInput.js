import {
  computed,
  h,
  ref,
  toRef,
} from "vue";

import AFormElementBtnClear from "../../AFormElement/AFormElementBtnClear/AFormElementBtnClear";
import AIcon from "../../AIcon/AIcon";
import ALabel from "../ALabel/ALabel";
import ATranslation from "../../ATranslation/ATranslation";

import UiClearButtonMixinProps from "../mixins/UiClearButtonMixinProps";
import UiMixinProps from "../mixins/UiMixinProps";

import UiAPI from "../compositionApi/UiAPI";
import UiClearButtonAPI from "../compositionApi/UiClearButtonAPI";
import UiDependenciesAPI from "../compositionApi/UiDependenciesAPI";
import UiLabelFloatAPI from "../compositionApi/UiLabelFloatAPI";

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
      componentStyleHideDependencies,
    } = UiDependenciesAPI(props);

    const {
      ariaRequired,
      changeModel,
      clearModel,
      disabledLocal,
      idLocal,
      isError,
      isModel,
      labelLocal,
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

    const {
      isLabelFloatLocal,
    } = UiLabelFloatAPI(props);

    const type = toRef(props, "type");
    const options = toRef(props, "options");
    const typeLocal = computed(() => {
      return "type" in options.value ?
        options.value.type :
        type.value;
    });

    const typeForInput = computed(() => {
      if (typeLocal.value === "integer") {
        return "text";
      }
      return type.value;
    });

    const inputRef = ref(undefined);
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
        inputRef.value.value = value;
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
      componentStyleHideDependencies,

      ariaRequired,
      clearModel,
      disabledLocal,
      idLocal,
      isError,
      isModel,
      labelLocal,
      requiredLocal,

      clearButtonClassLocal,
      isClearButtonLocal,

      iconPrependLocal,
      onInput,
      typeForInput,
      typeLocal,

      inputRef,
      isLabelFloatLocal,
      onFocus,
      onBlur,
    };
  },
  render() {
    return h("div", {
      style: this.componentStyleHideDependencies,
    }, [
      h("div", {
        class: ["a_form_element__parent", {
          a_form_element__parent_float: this.isLabelFloatLocal,
          a_form_element__parent_not_empty: this.isModel,
          a_form_element__parent_float_has_icon_prepend: this.iconPrependLocal,
        }],
      }, [
        this.labelLocal && h(ALabel, {
          id: this.idLocal,
          label: this.labelLocal,
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
            ref: "inputRef",
            id: this.idLocal,
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
            ariaInvalid: this.isError,
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
      ]),
    ]);
  },
};
