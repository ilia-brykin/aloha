import {
  h,
} from "vue";

import AErrors from "../AErrors/AErrors";
import ARequired from "../ARequired/ARequired";

import AUiComponents from "../AUiComponents";
import AUiContainerComponents from "../AUiContainerComponents";

import HideAPI from "./compositionAPI/HideAPI";
import ModelAPI from "./compositionAPI/ModelAPI";
import RequiredAPI from "./compositionAPI/RequiredAPI";
import UIExcludeRenderAttributesAPI from "../compositionApi/UIExcludeRenderAttributesAPI";

import {
  formPluginOptions,
} from "../../plugins/AFormPlugin";
import {
  typesContainer,
} from "../const/AUiTypes";
import {
  get,
  isNil,
} from "lodash-es";

export default {
  name: "AForm",
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    classColumns: {
      type: [String, Object],
      required: false,
      default: "a_columns a_columns_count_12 a_columns_gap_2"
    },
    classColumnDefault: {
      type: [String, Object],
      required: false,
      default: "a_column a_column_12"
    },
    data: {
      type: Array,
      required: true,
    },
    excludeRenderAttributes: {
      type: Array,
      required: false,
      default: () => [],
    },
    errors: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    idPrefix: {
      type: String,
      required: false,
      default: undefined,
    },
    isHide: {
      type: Boolean,
      required: false,
    },
    isRender: {
      type: Boolean,
      required: false,
      default: true,
    },
    isRequired: {
      type: Boolean,
      required: false,
    },
    modelValue: {
      type: Object,
      required: false,
      default: undefined,
    },
    showErrors: {
      type: Boolean,
      required: false,
      default: true,
    },
    tag: {
      type: String,
      required: false,
      default: "form",
    },
    textRequired: {
      type: String,
      required: false,
      default: undefined,
    },
    textErrorHeader: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  emits: [
    "update:modelValue",
    "change",
  ],
  setup(props, content) {
    const {
      attributesToExcludeFromRender,
    } = UIExcludeRenderAttributesAPI(props);

    const {
      modelValueLocal,
      onUpdateModelLocal,
    } = ModelAPI(props, content);

    const {
      styleFormHide,
    } = HideAPI(props);

    const {
      isRequiredLocal,
    } = RequiredAPI(props);

    const componentTypesMapping = () => ({
      ...AUiComponents,
      ...AUiContainerComponents,
      ...formPluginOptions.components,
      ...formPluginOptions.containerComponents,
    });

    return {
      attributesToExcludeFromRender,
      componentTypesMapping,
      isRequiredLocal,
      modelValueLocal,
      onUpdateModelLocal,
      styleFormHide,
    };
  },
  render() {
    if (!this.isRender) {
      return null;
    }

    return h(this.tag, {
      class: "a_form",
      style: this.styleFormHide,
    }, [
      this.$slots.formPrepend ?
        this.$slots.formPrepend() :
        "",

      this.isRequiredLocal ? h(ARequired, {
        text: this.textRequired,
      }) : "",
      this.$slots.formPrependAfterRequired ?
        this.$slots.formPrependAfterRequired() :
        "",
      this.showErrors ?
        h(AErrors, {
          alwaysTranslate: this.alwaysTranslate,
          errors: this.errors,
          closable: false,
          optionsList: this.data,
          idPrefix: this.idPrefix,
          textErrorHeader: this.textErrorHeader,
        }) :
        "",
      h("div", {
        class: this.classColumns,
      }, [
        this.$slots.formDataPrepend ?
          this.$slots.formDataPrepend() :
          "",
        ...this.data.map((item, itemIndex) => {
          const IS_CONTAINER = typesContainer.value[item.type];
          let classColumn;
          if (isNil(item.classColumn)) {
            classColumn = this.classColumnDefault;
          } else if (item.classColumn) {
            classColumn = item.classColumn;
          }
          const COMPONENT = this.componentTypesMapping()[item.type];
          return h(COMPONENT, {
            key: itemIndex,
            alwaysTranslate: this.alwaysTranslate,
            modelValue: IS_CONTAINER ? this.modelValueLocal : get(this.modelValueLocal, item.id),
            modelDependencies: IS_CONTAINER ? this.modelValueLocal : undefined,
            class: classColumn,
            errors: this.errors[item.id],
            errorsAll: IS_CONTAINER ? this.errors : undefined,
            idPrefix: this.idPrefix,
            excludeRenderAttributes: this.excludeRenderAttributes,
            "onUpdate:modelValue": model => this.onUpdateModelLocal({ item, model }),
            ...item,
            classColumn: undefined,
            ...this.attributesToExcludeFromRender,
          }, this.$slots);
        }),

        this.$slots.formDataAppend ?
          this.$slots.formDataAppend() :
          "",
      ]),
      this.$slots.formAppend ?
        this.$slots.formAppend() :
        "",
    ]);
  },
};
