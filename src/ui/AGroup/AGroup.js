import {
  computed,
  h,
  toRef,
} from "vue";

import AErrorsText from "../AErrorsText/AErrorsText";
import AFormHelpText from "../AFormHelpText/AFormHelpText";
import ALabel from "../ALabel/ALabel";
import AUiComponents from "../AUiComponents";

import UiMixinProps from "../mixins/UiMixinProps";

import UiAPI, {
  getHtmlId,
} from "../compositionApi/UiAPI";
import SpecificTypeAPI from "./compositionAPI/SpecificTypeAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";

import {
  cloneDeep,
  get,
  isNil,
  set,
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
      default: "a_columns a_columns_count_12 a_columns_gab_2",
    },
  },
  emits: [
    "updateData",
  ],
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
      set(MODEL_VALUE, item.id, cloneDeep(model));
      context.emit("update:modelValue", MODEL_VALUE);
    };

    const onUpdateDataLocal = ({ item, dataKeyByKeyId }) => {
      context.emit("updateData", { item, dataKeyByKeyId });
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

    const {
      specificAttributes,
    } = SpecificTypeAPI(props);

    return {
      componentTypesMapping,
      firstChild,
      htmlIdFirstChild,
      onUpdateModelLocal,
      onUpdateDataLocal,

      componentStyleHide,

      specificAttributes,

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
          class: this.classColumns,
        }, [
          this.firstChild.label && h(ALabel, {
            id: this.htmlIdFirstChild,
            label: this.firstChild.label,
            labelClass: this.firstChild.labelClass,
            required: this.firstChild.required,
            type: this.firstChild.type,
            isLabelFloat: false,
          }),
          this.children.map((item, itemIndex) => {
            let classColumn;
            if (isNil(item.classColumn)) {
              classColumn = "a_column a_column_12";
            } else if (item.classColumn) {
              classColumn = item.classColumn;
            }
            return h("div", {
              class: classColumn,
            }, [
              h(this.componentTypesMapping[item.type], {
                key: itemIndex,
                modelValue: get(this.modelValue, item.id),
                modelDependencies: this.modelValue,
                errors: this.errorsAll[item.id],
                idPrefix: item.idPrefix || this.idPrefix,
                "onUpdate:modelValue": model => this.onUpdateModelLocal({ item, model }),
                onUpdateData: ({ dataKeyByKeyId }) => this.onUpdateDataLocal({ item, dataKeyByKeyId }),
                ...item,
                ...this.specificAttributes[item.id],
                label: itemIndex === 0 ? undefined : item.label,
                slotAppend: undefined,
              }, this.$slots),
              (item.slotAppend && this.$slots[item.slotAppend]) ?
                this.$slots[item.slotAppend]({ item, itemIndex }) :
                "",
            ]);
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
