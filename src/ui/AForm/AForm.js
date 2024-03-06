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
  typesContainer,
} from "../const/AUiTypes";
import {
  get,
  isNil,
} from "lodash-es";

export default {
  name: "AForm",
  props: {
    classColumns: {
      type: [String, Object],
      required: false,
      default: "a_columns a_columns_count_12 a_columns_gab_2"
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

    const componentTypesMapping = {
      ...AUiComponents,
      ...AUiContainerComponents,
    };

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
      return "";
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
      this.showErrors ?
        h(AErrors, {
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
          return h(this.componentTypesMapping[item.type], {
            key: itemIndex,
            modelValue: IS_CONTAINER ? this.modelValueLocal : get(this.modelValueLocal, item.id),
            modelDependencies: this.modelValueLocal,
            class: classColumn,
            errors: this.errors[item.id],
            errorsAll: this.errors,
            idPrefix: this.idPrefix,
            excludeRenderAttributes: this.excludeRenderAttributes,
            "onUpdate:modelValue": model => this.onUpdateModelLocal({ item, model }),
            ...item,
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
