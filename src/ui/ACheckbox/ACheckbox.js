import {
  h,
} from "vue";

import ACheckboxItem from "./ACheckboxItem";

import UiMixinProps from "../mixins/UiMixinProps";

import UiAPI from "../compositionApi/UiAPI";
import UiCheckboxRadioAPI from "../compositionApi/UiCheckboxRadioAPI";
import UiCheckboxRadioIsWidthAutoAPI from "../compositionApi/UiCheckboxRadioIsWidthAutoAPI";

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
  },
  setup(props, context) {
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
      keyIdLocal,
      keyLabelLocal,
    } = UiCheckboxRadioAPI(props);

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
      ariaRequired,
      disabledLocal,
      idLocal,
      isError,
      labelLocal,
      requiredLocal,

      dataLocal,
      keyIdLocal,
      keyLabelLocal,

      isWidthAutoLocal,

      onChangeModelValue,
      onFocus,
      onBlur,
    };
  },
  render() {
    return h("div", {
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
            return h(ACheckboxItem, {
              id: this.idLocal,
              key: itemIndex,
              dataItem: item,
              itemIndex,
              options: this.options,
              modelValue: this.modelValue,
              onChangeModelValue: this.onChangeModelValue,
              disabled: this.disabledLocal,
              isWidthAuto: this.isWidthAutoLocal,
              keyId: this.keyIdLocal,
              keyLabel: this.keyLabelLocal,
            });
          })
        ]),
      ]),
    ]);
  },
};
