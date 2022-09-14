import {
  computed,
  h,
  toRef,
} from "vue";

import AErrors from "../AErrors/AErrors";
import ARequired from "../ARequired/ARequired";

import AUiComponents from "../AUiComponents";
import AUiContainerComponents from "../AUiContainerComponents";

import AUiTypesContainer from "../const/AUiTypesContainer";
import {
  cloneDeep,
  forEach,
} from "lodash-es";

export default {
  name: "AForm",
  props: {
    data: {
      type: Array,
      required: true,
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
  },
  emits: [
    "update:modelValue",
    "change",
  ],
  setup(props, { emit }) {
    const componentTypesMapping = {
      ...AUiComponents,
      ...AUiContainerComponents,
    };

    const modelValue = toRef(props, "modelValue");
    const modelValueLocal = computed(() => {
      return modelValue.value || {};
    });

    const onUpdateModelLocal = ({ item, model }) => {
      if (AUiTypesContainer[item.type]) {
        emit("update:modelValue", model);
      } else {
        const MODEL_VALUE = cloneDeep(modelValueLocal.value);
        MODEL_VALUE[item.id] = cloneDeep(model);
        emit("update:modelValue", MODEL_VALUE);
      }
    };

    const isRequired = toRef(props, "isRequired");
    const data = toRef(props, "data");
    const isRequiredLocal = computed(() => {
      if (isRequired.value) {
        return true;
      }
      let isRequiredInData = false;
      forEach(data.value, item => {
        if (item.required) {
          isRequiredInData = true;
          return false;
        }
      });
      return isRequiredInData;
    });

    const isHide = toRef(props, "isHide");
    const styleFormHide = computed(() => {
      return isHide.value ? "display: none;" : "";
    });

    return {
      componentTypesMapping,
      isRequiredLocal,
      modelValueLocal,
      onUpdateModelLocal,
      styleFormHide,
    };
  },
  render() {
    return this.isRender && h(this.tag, {
      class: "a_form",
      style: this.styleFormHide,
    }, [
      this.$slots.formPrepend && this.$slots.formPrepend(),
      this.isRequiredLocal && h(ARequired, {
        text: this.textRequired,
      }),
      h(AErrors, {
        errors: this.errors,
        isDismissible: false,
        optionsList: this.data,
        idPrefix: this.idPrefix,
      }),
      h("div", {
        class: "a_columns a_columns_count_12 a_columns_gab_2",
      }, [
        this.$slots.formDataPrepend && this.$slots.formDataPrepend(),
        ...this.data.map((item, itemIndex) => {
          const IS_FIELDSET = item.type === "fieldset";
          return h(this.componentTypesMapping[item.type], {
            key: itemIndex,
            modelValue: IS_FIELDSET ? this.modelValueLocal : this.modelValueLocal[item.id],
            modelDependencies: this.modelValueLocal,
            class: ["a_column", item.classColumn || "a_column_12"],
            errors: this.errors[item.id],
            errorsAll: this.errors,
            idPrefix: this.idPrefix,
            "onUpdate:modelValue": model => this.onUpdateModelLocal({ item, model }),
            ...item,
          }, this.$slots);
        }),
        this.$slots.formDataAppend && this.$slots.formDataAppend(),
      ]),
      this.$slots.formAppend && this.$slots.formAppend(),
    ]);
  },
};
