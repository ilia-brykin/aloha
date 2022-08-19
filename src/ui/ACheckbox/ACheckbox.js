import {
  h, toRef,
} from "vue";

import ACheckboxItem from "./ACheckboxItem";

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
      helpTextId,
      idLocal,
      isError,
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
      helpTextId,
      idLocal,
      isError,

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
            "aria-describedby": this.ariaDescribedbyLocal,
          }, [
            this.label && h("legend", {
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
              });
            })
          ]),
        ]),
        this.helpText && h("div", {
          id: this.helpTextId,
          class: "a_form_element__help_text",
          innerHTML: this.helpText,
        }),
      ]),
    ]);
  },
};
