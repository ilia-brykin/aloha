import {
  ref,
} from "vue";


export const aValidatedJsonErrorLabels = ref({});

export function setErrorLabel({ parentId, id, label }) {
  aValidatedJsonErrorLabels.value[parentId] = aValidatedJsonErrorLabels.value[parentId] || {};
  aValidatedJsonErrorLabels.value[parentId][id] = label;
}

export default function AValidatedJsonErrorLabelsAPI() {
  return {
    aValidatedJsonErrorLabels,
    setErrorLabel,
  };
}
