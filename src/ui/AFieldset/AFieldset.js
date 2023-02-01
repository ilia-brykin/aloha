import {
  h,
  resolveComponent,
  toRef,
  withDirectives,
} from "vue";

import AErrorsText from "../AErrorsText/AErrorsText";
import AUiComponents from "../AUiComponents";

import ASafeHtml from "../../directives/ASafeHtml";

import UiMixinProps from "../mixins/UiMixinProps";

import UiAPI from "../compositionApi/UiAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";

import AUiTypesContainer from "../const/AUiTypesContainer";
import {
  cloneDeep,
  isNil,
} from "lodash-es";

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
    hasBorder: {
      type: Boolean,
      required: false,
      default: true,
    },
    classColumns: {
      type: [String, Object],
      required: false,
      default: "a_columns a_columns_count_12 a_columns_gab_2",
    },
  },
  emits: [
    "updateData",
  ],
  setup(props, context) {
    const componentTypesMapping = {
      fieldset: resolveComponent("AFieldset"),
      ...AUiComponents
    };

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
      if (AUiTypesContainer[item.type]) {
        context.emit("update:modelValue", model);
      } else {
        const MODEL_VALUE = cloneDeep(modelValue.value);
        MODEL_VALUE[item.id] = cloneDeep(model);
        context.emit("update:modelValue", MODEL_VALUE);
      }
    };

    const onUpdateDataLocal = ({ item, dataKeyByKeyId }) => {
      context.emit("updateData", { item, dataKeyByKeyId });
    };

    return {
      componentTypesMapping,
      onUpdateModelLocal,
      onUpdateDataLocal,

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
        class: ["a_fieldset", this.inputClass, {
          a_fieldset_invalid: this.isErrors,
          a_fieldset_no_border: !this.hasBorder,
        }],
        "aria-describedby": this.ariaDescribedbyLocal,
      }, [
        this.label && withDirectives(h("legend", {
          class: ["a_legend", {
            a_legend_invalid: this.isErrors,
          }],
        }), [
          [ASafeHtml, this.label],
        ]),
        h("div", {
          class: this.classColumns,
        }, [
          this.children.map((item, itemIndex) => {
            const IS_CONTAINER = AUiTypesContainer[item.type];
            let classColumn;
            if (isNil(item.classColumn)) {
              classColumn = "a_column a_column_12";
            } else if (item.classColumn) {
              classColumn = item.classColumn;
            }
            return h(this.componentTypesMapping[item.type], {
              key: itemIndex,
              modelValue: IS_CONTAINER ? this.modelValue : this.modelValue[item.id],
              modelDependencies: this.modelValue,
              class: classColumn,
              errors: this.errorsAll[item.id],
              errorsAll: this.errorsAll,
              idPrefix: this.idPrefix,
              "onUpdate:modelValue": model => this.onUpdateModelLocal({ item, model }),
              onUpdateData: ({ dataKeyByKeyId }) => this.onUpdateDataLocal({ item, dataKeyByKeyId }),
              ...item,
            }, this.$slots);
          }),
        ]),
      ]),
      this.helpText && withDirectives(h("div", {
        id: this.helpTextId,
        class: "a_form_element__help_text",
      }), [
        [ASafeHtml, this.helpText],
      ]),
      this.isErrors && h(AErrorsText, {
        id: this.errorsId,
        errors: this.errors,
      }),
    ]);
  },
};
