import {
  computed,
  h,
  toRef,
} from "vue";

import AErrors from "../AErrors/AErrors";
import ARequired from "../ARequired/ARequired";

import ACheckbox from "../ACheckbox/ACheckbox";
import AInput from "../AInput/AInput";
import AOneCheckbox from "../AOneCheckbox/AOneCheckbox";
import ARadio from "../ARadio/ARadio";
import ASelect from "../ASelect/ASelect";
import ASwitch from "../ASwitch/ASwitch";
import ATextarea from "../ATextarea/ATextarea";

import {
  cloneDeep, forEach,
} from "lodash-es";

export default {
  name: "AForm",
  props: {
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
      text: AInput,
      integer: AInput,
      number: AInput,
      natural: AInput,
      password: AInput,
      email: AInput,
      textarea: ATextarea,
      select: ASelect,
      multiselect: ASelect,
      oneCheckbox: AOneCheckbox,
      checkbox: ACheckbox,
      radio: ARadio,
      switch: ASwitch,
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
      }),
      h("div", {
        class: "a_columns a_columns_count_12 a_columns_gab_2",
      }, [
        ...this.data.map((item, itemIndex) => {
          return h(this.componentTypesMapping[item.type], {
            key: itemIndex,
            modelValue: this.modelValueLocal[item.id],
            modelDependencies: this.modelValueLocal,
            class: ["a_column", item.classColumn || "a_column_12"],
            errors: this.errors[item.id],
            "onUpdate:modelValue": model => this.onUpdateModelLocal({ item, model }),
            ...item,
          });
        }),
      ]),
    ]);
  },
};
