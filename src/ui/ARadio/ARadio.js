import {
  h, toRef,
} from "vue";

import AErrorsText from "../AErrorsText/AErrorsText";
import ARadioItem from "./ARadioItem";

import UiMixinProps from "../mixins/UiMixinProps";

import UiAPI from "../compositionApi/UiAPI";
import UiDataWithKeyIdAndLabelAPI from "../compositionApi/UiDataWithKeyIdAndLabelAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";

export default {
  name: "ARadio",
  mixins: [
    UiMixinProps,
  ],
  props: {
    modelValue: {
      type: [String, Number],
      required: false,
    },
    isWidthAuto: {
      type: Boolean,
      required: false,
    },
    data: {
      type: Array,
      required: false,
      default: () => [],
    },
    keyId: {
      type: String,
      required: false,
      default: "value",
    },
    keyLabel: {
      type: String,
      required: false,
      default: "label",
    },
    keyLabelCallback: {
      type: Function,
      required: false,
      default: undefined,
    },
    isDataSimpleArray: {
      type: Boolean,
      required: false,
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
      onBlur,
      onFocus,
    } = UiAPI(props, context);

    const {
      dataLocal,
    } = UiDataWithKeyIdAndLabelAPI(props);

    const disabled = toRef(props, "disabled");
    const onChangeModelValue = ({ model, $event }) => {
      if (disabled.value) {
        return;
      }
      setTimeout(() => {
        changeModel({
          model,
          $event,
        });
      });
    };

    return {
      componentStyleHide,

      ariaDescribedbyLocal,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,

      dataLocal,

      onChangeModelValue,
      onFocus,
      onBlur,
    };
  },
  render() {
    return this.isRender && h("div", {
      style: this.componentStyleHide,
    }, [
      h("div", {
        class: ["a_form_element__parent"],
      }, [
        h("div", {
          class: "a_form_element",
        }, [
          h("fieldset", {
            id: this.htmlIdLocal,
            tabindex: -1,
            class: ["a_fieldset", {
              a_fieldset_invalid: this.isErrors,
            }],
            "aria-describedby": this.ariaDescribedbyLocal,
          }, [
            this.label && h("legend", {
              class: ["a_legend", {
                a_legend_invalid: this.isErrors,
              }],
              innerHTML: this.label,
            }),
            ...this.dataLocal.map((item, itemIndex) => {
              return h(ARadioItem, {
                id: this.htmlIdLocal,
                key: itemIndex,
                dataItem: item,
                itemIndex,
                modelValue: this.modelValue,
                onChangeModelValue: this.onChangeModelValue,
                disabled: this.disabled,
                isWidthAuto: this.isWidthAuto,
                isErrors: this.isErrors,
              });
            })
          ]),
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
