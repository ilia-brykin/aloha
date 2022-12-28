import {
  computed,
  h,
  toRef,
  withDirectives,
} from "vue";

import AErrorsText from "../AErrorsText/AErrorsText";
import ALabel from "../ALabel/ALabel";
import AUiComponents from "../AUiComponents";

import ASafeHtml from "../../directives/ASafeHtml";

import UiMixinProps from "../mixins/UiMixinProps";

import UiAPI, { getHtmlId } from "../compositionApi/UiAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";

import {
  cloneDeep,
} from "lodash-es";

export default {
  name: "AGroup",
  mixins: [
    UiMixinProps,
  ],
  props: {
    modelValue: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    children: {
      type: Array,
      required: false,
      default: () => [],
    },
    classColumns: {
      type: [String, Object],
      required: false,
      default: "a_columns_count_12 a_columns_gab_2",
    },
  },
  setup(props, context) {
    const componentTypesMapping = {
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
      const MODEL_VALUE = cloneDeep(modelValue.value);
      MODEL_VALUE[item.id] = cloneDeep(model);
      context.emit("update:modelValue", MODEL_VALUE);
    };

    const children = toRef(props, "children");
    const idPrefix = toRef(props, "idPrefix");

    const firstChild = computed(() => {
      return children.value[0] || {};
    });

    const htmlIdFirstChild = computed(() => {
      return getHtmlId({
        id: firstChild.value.id,
        idPrefix: firstChild.value.idPrefix || idPrefix.value,
        htmlId: firstChild.value.htmlId,
      });
    });

    return {
      componentTypesMapping,
      firstChild,
      htmlIdFirstChild,
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
      h("div", {
        id: this.htmlIdLocal,
        role: "group",
        tabindex: -1,
        class: [this.inputClass, {
          a_group_invalid: this.isErrors,
        }],
        "aria-describedby": this.ariaDescribedbyLocal,
      }, [
        h("div", {
          class: ["a_columns", this.classColumns],
        }, [
          this.firstChild.label && h(ALabel, {
            id: this.htmlIdFirstChild,
            label: this.firstChild.label,
            labelClass: ["a_column", this.firstChild.labelClass],
            required: this.firstChild.required,
            type: this.firstChild.type,
            isLabelFloat: false,
          }),
          this.children.map((item, itemIndex) => {
            return h(this.componentTypesMapping[item.type], {
              key: itemIndex,
              modelValue: this.modelValue[item.id],
              modelDependencies: this.modelValue,
              class: ["a_column", item.classColumn || "a_column_2"],
              errors: this.errorsAll[item.id],
              idPrefix: item.idPrefix || this.idPrefix,
              "onUpdate:modelValue": model => this.onUpdateModelLocal({ item, model }),
              ...item,
              label: itemIndex === 0 ? undefined : item.label,
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
