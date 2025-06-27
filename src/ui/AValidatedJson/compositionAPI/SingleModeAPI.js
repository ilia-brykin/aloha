import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  isNil,
  size,
} from "lodash-es";

export default function SingleModeAPI(props, {
  childrenFiltered = computed(() => []),
  htmlIdLocal = computed(() => undefined),
  updateModelValue = () => {},
}) {
  const mode = toRef(props, "mode");
  const modelValue = toRef(props, "modelValue");
  const modeOptions = toRef(props, "modeOptions");
  const readonly = toRef(props, "readonly");
  const required = toRef(props, "required");

  const singleModeModelCheckbox = ref(undefined);

  const labelCheckbox = computed(() => {
    return modeOptions.value?.labelCheckbox || "_A_VALIDATED_JSON_SINGLE_LABEL_CHECKBOX_";
  });

  const changeModelSingleModeCheckbox = ({ model }) => {
    singleModeModelCheckbox.value = model;

    if (!model) {
      updateModelValue(undefined);
    }
  };

  const showSingleModeChildren = computed(() => {
    if ((isNil(singleModeModelCheckbox.value) && size(modelValue.value) > 0) ||
      required.value ||
      singleModeModelCheckbox.value) {
      return true;
    }

    return false;
  });

  const singleModeDataFormCheckbox = computed(() => {
    return {
      class: "a_column a_column_12",
      modelValue: showSingleModeChildren.value,
      type: "oneCheckbox",
      falseValue: false,
      id: `${ htmlIdLocal.value }_show_form_checkbox`,
      label: labelCheckbox.value,
      change: changeModelSingleModeCheckbox,
    };
  });

  const singleModeChildren = computed(() => {
    if (showSingleModeChildren.value) {
      return childrenFiltered.value;
    }

    return [];
  });

  const initSingleModeModelCheckbox = () => {
    if (mode.value !== "single") {
      return;
    }

    if (!readonly.value && size(modelValue.value) === 0) {
      singleModeModelCheckbox.value = modeOptions.value.optionalSingleDefault;
    }
  };

  return {
    initSingleModeModelCheckbox,
    singleModeChildren,
    singleModeDataFormCheckbox,
  };
}
