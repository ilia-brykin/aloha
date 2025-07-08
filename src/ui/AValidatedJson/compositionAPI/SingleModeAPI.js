import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  get,
  isEmpty,
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
  const typedBaseId = toRef(props, "typedBaseId");
  const typedChildren = toRef(props, "typedChildren");

  const singleModeModelCheckbox = ref(undefined);

  const labelCheckbox = computed(() => {
    return modeOptions.value?.labelCheckbox || "_A_VALIDATED_JSON_SINGLE_LABEL_CHECKBOX_";
  });

  const isFormTyped = computed(() => {
    return !(isEmpty(typedChildren.value) || !typedBaseId.value);
  });

  const modelTyped = computed(() => {
    return get(modelValue.value, typedBaseId.value);
  });

  const dataFormTyped = computed(() => {
    if (modelTyped.value &&
      typedChildren.value[modelTyped.value]?.length) {
      return typedChildren.value[modelTyped.value];
    }

    return [];
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
      if (!isFormTyped.value) {
        return childrenFiltered.value;
      }

      const CHILDREN = [
        ...childrenFiltered.value,
        ...dataFormTyped.value,
      ];

      return CHILDREN;
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
