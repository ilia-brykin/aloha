import {
  computed,
  ref,
  toRef,
} from "vue";

export default function SingleModeAPI(props) {
  const children = toRef(props, "children");
  const modeOptions = toRef(props, "modeOptions");

  const modelSingleModeCheckbox = ref(false);

  const labelCheckbox = computed(() => {
    return modeOptions.value?.labelCheckbox || "_A_VALIDATED_JSON_SINGLE_LABEL_CHECKBOX_";
  });

  const changeModelSingleModeCheckbox = ({ model }) => {
    modelSingleModeCheckbox.value = model;
  };

  const singleDataFormCheckbox = computed(() => {
    return {
      class: "a_column a_column_12",
      modelValue: modelSingleModeCheckbox.value,
      type: "oneCheckbox",
      id: "show_form_checkbox",
      label: labelCheckbox.value,
      change: changeModelSingleModeCheckbox,
    };
  });

  const singleChildren = computed(() => {
    if (modelSingleModeCheckbox.value) {
      return children.value;
    }

    return [];
  });

  return {
    modelSingleModeCheckbox,
    singleChildren,
    singleDataFormCheckbox,
  };
}
