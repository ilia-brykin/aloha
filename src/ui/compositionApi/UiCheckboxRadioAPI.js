import {
  computed,
  toRef,
} from "vue";

export default function UiCheckboxRadioAPI(props) {
  const options = toRef(props, "options");
  const data = toRef(props, "data");
  const dataLocal = computed(() => {
    return "data" in options.value ?
      options.value.data :
      data.value;
  });

  const keyId = toRef(props, "keyId");
  const keyIdLocal = computed(() => {
    return "keyId" in options.value ?
      options.value.keyId :
      keyId.value;
  });

  const keyLabel = toRef(props, "keyLabel");
  const keyLabelLocal = computed(() => {
    return "keyLabel" in options.value ?
      options.value.keyLabel :
      keyLabel.value;
  });


  return {
    dataLocal,
    keyIdLocal,
    keyLabelLocal,
  };
}
