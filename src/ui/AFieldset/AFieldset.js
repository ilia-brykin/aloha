import {
  h,
  resolveComponent,
  toRef,
} from "vue";

import AButton from "../../AButton/AButton";
import AErrorsText from "../AErrorsText/AErrorsText";
import AFormHelpText from "../AFormHelpText/AFormHelpText";
import ATranslation from "../../ATranslation/ATranslation";
import AUiComponents from "../AUiComponents";

import UiMixinProps from "../mixins/UiMixinProps";

import TextAfterLabelAPI from "../ACheckbox/compositionAPI/TextAfterLabelAPI";
import UiAPI from "../compositionApi/UiAPI";
import UiCollapseAPI from "../compositionApi/UiCollapseAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";

import AUiTypesContainer from "../const/AUiTypesContainer";
import {
  cloneDeep, get,
  isNil,
  set,
} from "lodash-es";

export default {
  name: "AFieldset",
  mixins: [
    UiMixinProps,
  ],
  props: {
    children: {
      type: Array,
      required: false,
      default: () => [],
    },
    classColumns: {
      type: [String, Object],
      required: false,
      default: "a_columns a_columns_count_12 a_columns_gab_2",
    },
    collapse: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    hasBorder: {
      type: Boolean,
      required: false,
      default: true,
    },
    isCollapsed: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    modelValue: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    slotName: {
      type: String,
      required: false,
      default: undefined,
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

    const {
      textAfterLabel,
    } = TextAfterLabelAPI(props);

    const modelValue = toRef(props, "modelValue");
    const onUpdateModelLocal = ({ item, model }) => {
      if (AUiTypesContainer[item.type]) {
        context.emit("update:modelValue", model);
      } else {
        const MODEL_VALUE = cloneDeep(modelValue.value);
        set(MODEL_VALUE, item.id, cloneDeep(model));
        context.emit("update:modelValue", MODEL_VALUE);
      }
    };

    const onUpdateDataLocal = ({ item, dataKeyByKeyId }) => {
      context.emit("updateData", { item, dataKeyByKeyId });
    };

    const {
      iconCollapse,
      initIsCollapsedLocal,
      isCollapsedLocal,
      titleCollapse,
      toggleCollapse,
    } = UiCollapseAPI(props, context);

    initIsCollapsedLocal();

    return {
      ariaDescribedbyLocal,
      changeModel,
      clearModel,
      componentStyleHide,
      componentTypesMapping,
      errorsId,
      helpTextId,
      htmlIdLocal,
      iconCollapse,
      isCollapsedLocal,
      isErrors,
      onUpdateDataLocal,
      onUpdateModelLocal,
      textAfterLabel,
      titleCollapse,
      toggleCollapse,
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
          a_fieldset_collapsed: this.isCollapsedLocal,
        }],
        "aria-describedby": this.ariaDescribedbyLocal,
      }, [
        this.label && h(ATranslation, {
          tag: "legend",
          class: [
            "a_legend",
            {
              a_legend_invalid: this.isErrors,
            },
            this.labelClass,
          ],
          html: this.label,
          textAfter: this.textAfterLabel,
        }),
        this.collapse && h(AButton, {
          class: "a_fieldset__btn_collapse a_btn a_btn_transparent_secondary",
          iconLeft: this.iconCollapse,
          title: this.titleCollapse,
          textScreenReader: this.titleCollapse,
          onClick: this.toggleCollapse,
        }),
        h("div", {
          class: [
            this.classColumns,
            "a_fieldset__content",
          ],
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
              modelValue: IS_CONTAINER ? this.modelValue : get(this.modelValue, item.id),
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
          this.slotName &&
          this.$slots[this.slotName] &&
          this.$slots[this.slotName]({
            id: this.htmlIdLocal,
          }),
        ]),
      ]),
      h(AFormHelpText, {
        id: this.helpTextId,
        html: this.helpText,
        extra: this.extra,
      }),
      this.isErrors && h(AErrorsText, {
        id: this.errorsId,
        errors: this.errors,
      }),
    ]);
  },
};
