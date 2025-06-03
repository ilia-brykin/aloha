import {
  h,
} from "vue";

import AErrors from "../AErrors/AErrors";
import ARequired from "../ARequired/ARequired";

import HideAPI from "./compositionAPI/HideAPI";
import ModelAPI from "./compositionAPI/ModelAPI";
import RequiredAPI from "./compositionAPI/RequiredAPI";
import UIExcludeRenderAttributesAPI from "../compositionApi/UIExcludeRenderAttributesAPI";

import AUiComponents from "../AUiComponents";
import AUiContainerComponents from "../AUiContainerComponents";
import {
  AFormPluginOptions,
} from "../../plugins/AFormPlugin";
import {
  typesContainer,
} from "../const/AUiTypes";
import {
  get,
  isNil,
  isUndefined,
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
      default: "a_columns a_columns_count_12 a_columns_gap_2",
    },
    classColumnDefault: {
      type: [String, Object],
      required: false,
      default: "a_column a_column_12",
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
    readonly: {
      type: Boolean,
      required: false,
    },
    readonlyDefault: {
      type: String,
      required: false,
      default: "",
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
    useFlatErrors: {
      type: Boolean,
      required: false,
      default: true,
    },
    useFlatModel: {
      type: Boolean,
      required: false,
      default: true,
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
      ...AFormPluginOptions.components,
      ...AFormPluginOptions.containerComponents,
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

      this.isRequiredLocal ?
        h(ARequired, {
          text: this.textRequired,
        }) :
        "",
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
          useFlatErrors: this.useFlatErrors,
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

          const MODEL_VALUE = (IS_CONTAINER && !this.useFlatModel) ||
            !IS_CONTAINER ?
            get(this.modelValueLocal, item.id) :
            this.modelValueLocal;

          return h(COMPONENT, {
            key: itemIndex,
            alwaysTranslate: this.alwaysTranslate,
            modelValue: MODEL_VALUE,
            modelAll: IS_CONTAINER ? this.modelValueLocal : undefined,
            modelDependencies: IS_CONTAINER ? this.modelValueLocal : undefined,
            class: classColumn,
            errors: this.errors[item.id],
            errorsAll: IS_CONTAINER ? this.errors : undefined,
            useFlatErrors: IS_CONTAINER ? this.useFlatErrors : undefined,
            useFlatModel: IS_CONTAINER ? this.useFlatModel : undefined,
            idPrefix: this.idPrefix,
            excludeRenderAttributes: this.excludeRenderAttributes,
            ...item,
            change: ({ currentModel, id, item: _item, model, props, fullModel }) => this.onUpdateModelLocal({
              currentModel, id, item: _item, model, props, component: item, fullModel,
            }),
            readonly: this.readonly || item.readonly,
            readonlyDefault: "readonlyDefault" in item && !isUndefined(item.readonlyDefault) ? item.readonlyDefault : this.readonlyDefault,
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
