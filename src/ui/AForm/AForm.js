import {
  computed,
  h,
  toRef,
} from "vue";

import AFieldset from "../AFieldset/AFieldset";
import AErrors from "../AErrors/AErrors";
import ARequired from "../ARequired/ARequired";

import AUiComponents from "../AUiComponents";

import {
  cloneDeep,
  forEach,
} from "lodash-es";

export default {
  name: "AForm",
  props: {
    idPrefix: {
      type: String,
      required: false,
      default: undefined,
    },
    data: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: Object,
      required: false,
      default: undefined,
    },
    errors: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    textRequired: {
      type: String,
      required: false,
      default: undefined,
    },
    isRequired: {
      type: Boolean,
      required: false,
    },
  },
  emits: [
    "update:modelValue",
    "change",
  ],
  setup(props, { emit }) {
    const componentTypesMapping = {
      fieldset: AFieldset,
      ...AUiComponents,
    };

    const modelValue = toRef(props, "modelValue");
    const modelValueLocal = computed(() => {
      return modelValue.value || {};
    });

    const onUpdateModelLocal = ({ item, model }) => {
      const MODEL_VALUE = cloneDeep(modelValueLocal.value);
      MODEL_VALUE[item.id] = cloneDeep(model);
      emit("update:modelValue", MODEL_VALUE);
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

    return {
      componentTypesMapping,
      isRequiredLocal,
      modelValueLocal,
      onUpdateModelLocal,
    };
  },
  render() {
    return h("form", {
      class: "a_form",
    }, [
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
          });
        }),
      ]),
    ]);
  },
};
