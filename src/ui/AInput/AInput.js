import {
  computed,
  h,
  toRef,
} from "vue";

import AFormElementBtnClear from "../../AFormElement/AFormElementBtnClear/AFormElementBtnClear";
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
  },
  setup(props, context) {
    const {
      ariaRequired,
      changeModel,
      clearModel,
      disabledLocal,
      isModel,
      requiredLocal,
    } = UiAPI(props, context);

    const {
      clearButtonClassLocal,
      isClearButtonLocal,
    } = UiClearButtonAPI(props, {
      isModel,
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

    const inputClassLocal = computed(() => {
      return {};
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

    return {
      ariaRequired,
      clearModel,
      disabledLocal,
      isModel,
      requiredLocal,

      clearButtonClassLocal,
      isClearButtonLocal,

      ariaInvalid,
      inputClassLocal,
      onInput,
      typeForInput,
      typeLocal,
    };
  },
  render() {
    return h("div", {
      class: "a_form_element__parent",
    }, [
      this.label && h(ALabel, {
        id: this.id,
        label: this.label,
        labelClass: this.labelClass,
        required: this.requiredLocal,
        type: this.typeLocal,
      }),
      h("div", {
        class: "a_form_element",
      }, [
        h("input", {
          id: this.id,
          ref: "input",
          value: this.modelValue,
          type: this.typeForInput,
          class: [
            "a_input",
            this.inputClass,
            this.inputClassLocal,
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
