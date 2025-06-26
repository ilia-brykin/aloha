import {
  ref,
} from "vue";


export const uiValidatedJsonErrorLabels = ref({});

export function setErrorLabel({ id, label }) {
  uiValidatedJsonErrorLabels.value[id] = label;
}
