import {
  h,
  toRef,
} from "vue";

import AErrorsText from "../AErrorsText/AErrorsText";
import AUiComponents from "../AUiComponents";

import UiMixinProps from "../mixins/UiMixinProps";

import UiAPI from "../compositionApi/UiAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";
import { cloneDeep } from "lodash-es";

export default {
  name: "AFieldset",
  mixins: [
    UiMixinProps,
  ],
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
    children: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  setup(props, context) {
    const componentTypesMapping = AUiComponents;

    const {
      componentStyleHide,
    } = UiStyleHideAPI(props);

    const {
      ariaDescribedbyLocal,
      changeModel,
      clearModel,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
    } = UiAPI(props, context);

    const modelValue = toRef(props, "modelValue");
    const onUpdateModelLocal = ({ item, model }) => {
      const MODEL_VALUE = cloneDeep(modelValue.value);
      MODEL_VALUE[item.id] = cloneDeep(model);
      context.emit("update:modelValue", MODEL_VALUE);
    };

    return {
      componentTypesMapping,
      onUpdateModelLocal,

      componentStyleHide,

      ariaDescribedbyLocal,
      changeModel,
      clearModel,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
    };
  },
  render() {
    return this.isRender && h("div", {
      style: this.componentStyleHide,
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
        h("div", {
          class: "a_columns a_columns_count_12 a_columns_gab_2",
        }, [
          this.children.map((item, itemIndex) => {
            return h(this.componentTypesMapping[item.type], {
              key: itemIndex,
              modelValue: this.modelValue[item.id],
              modelDependencies: this.modelValue,
              class: ["a_column", item.classColumn || "a_column_12"],
              errors: this.errorsAll[item.id],
              idPrefix: this.idPrefix,
              "onUpdate:modelValue": model => this.onUpdateModelLocal({ item, model }),
              ...item,
            }, this.$slots);
          }),
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
    ]);
  },
};
