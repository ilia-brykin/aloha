import {
  h, toRef,
} from "vue";

import ARadioItem from "./ARadioItem";

import UiMixinProps from "../mixins/UiMixinProps";

import UiAPI from "../compositionApi/UiAPI";
import UiDataWithKeyIdAndLabelAPI from "../compositionApi/UiDataWithKeyIdAndLabelAPI";
import UiDependenciesAPI from "../compositionApi/UiDependenciesAPI";

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
      componentStyleHideDependencies,
    } = UiDependenciesAPI(props);

    const {
      changeModel,
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
          h("fieldset", {}, [
            this.label && h("legend", {
              innerHTML: this.label,
            }),
            ...this.dataLocal.map((item, itemIndex) => {
              return h(ARadioItem, {
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
      ]),
    ]);
  },
};
