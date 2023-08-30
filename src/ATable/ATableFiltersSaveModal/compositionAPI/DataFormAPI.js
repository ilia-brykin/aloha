import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  forEach,
} from "lodash-es";

export default function DataFormAPI(props, {
  model = ref({}),
}) {
  const filtersSaved = toRef(props, "filtersSaved");

  const filtersSavedLabels = computed(() => {
    const LABELS = {};
    forEach(filtersSaved.value, filter => {
      LABELS[filter.label] = true;
    });
    return LABELS;
  });

  const isUpdate = computed(() => {
    return filtersSavedLabels.value[model.value.name];
  });

  const helpText = computed(() => {
    if (isUpdate.value) {
      return "_A_TABLE_FILTER_SAVE_MODAL_NAME_HELP_TEXT_{{name}}_";
    }
    return undefined;
  });

  const dataForm = computed(() => {
    return [
      {
        id: "name",
        label: "_A_TABLE_FILTER_SAVE_LABEL_NAME_",
        type: "text",
        required: true,
        extra: {
          name: model.value.name || "",
        },
        helpText: helpText.value,
      },
    ];
  });

  return {
    dataForm,
    isUpdate,
  };
}
