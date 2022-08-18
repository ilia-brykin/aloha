import {
  h,
} from "vue";

import ARadioItem from "./ARadioItem";

import UiMixinProps from "../mixins/UiMixinProps";

import UiAPI from "../compositionApi/UiAPI";
import UiCheckboxRadioIsWidthAutoAPI from "../compositionApi/UiCheckboxRadioIsWidthAutoAPI";
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
      ariaRequired,
      changeModel,
      disabledLocal,
      idLocal,
      isError,
      labelLocal,
      onBlur,
      onFocus,
      requiredLocal,
    } = UiAPI(props, context);

    const {
      dataLocal,
    } = UiDataWithKeyIdAndLabelAPI(props);

    const {
      isWidthAutoLocal,
    } = UiCheckboxRadioIsWidthAutoAPI(props);


    const onChangeModelValue = ({ model, $event }) => {
      if (disabledLocal.value) {
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

      ariaRequired,
      disabledLocal,
      idLocal,
      isError,
      labelLocal,
      requiredLocal,

      dataLocal,

      isWidthAutoLocal,

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
            this.labelLocal && h("legend", {
              innerHTML: this.labelLocal,
            }),
            ...this.dataLocal.map((item, itemIndex) => {
              return h(ARadioItem, {
                id: this.idLocal,
                key: itemIndex,
                dataItem: item,
                itemIndex,
                options: this.options,
                modelValue: this.modelValue,
                onChangeModelValue: this.onChangeModelValue,
                disabled: this.disabledLocal,
                isWidthAuto: this.isWidthAutoLocal,
              });
            })
          ]),
        ]),
      ]),
    ]);
  },
};
