import {
  h, toRef,
} from "vue";

import ACheckboxItem from "./ACheckboxItem";
import AErrorsText from "../AErrorsText/AErrorsText";

import UiMixinProps from "../mixins/UiMixinProps";

import UiAPI from "../compositionApi/UiAPI";
import UiDataWithKeyIdAndLabelAPI from "../compositionApi/UiDataWithKeyIdAndLabelAPI";
import UiDependenciesAPI from "../compositionApi/UiDependenciesAPI";

export default {
  name: "ACheckbox",
  mixins: [
    UiMixinProps,
  ],
  props: {
    modelValue: {
      type: Array,
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
    isDataSimpleArray: {
      type: Boolean,
      required: false,
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
      idLocal,
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
      componentStyleHideDependencies,

      ariaDescribedbyLocal,
      errorsId,
      helpTextId,
      idLocal,
      isErrors,

      dataLocal,

      onChangeModelValue,
      onFocus,
      onBlur,
    };
  },
  render() {
    return h("div", {
      style: this.componentStyleHideDependencies,
    }, [
      h("div", {
        class: ["a_form_element__parent"],
      }, [
        h("div", {
          class: "a_form_element",
        }, [
          h("fieldset", {
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
              return h(ACheckboxItem, {
                id: this.idLocal,
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
