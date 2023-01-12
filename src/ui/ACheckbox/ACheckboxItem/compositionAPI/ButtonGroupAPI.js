import {
  computed,
  toRef,
} from "vue";

export default function ButtonGroupAPI(props) {
  const dataItem = toRef(props, "dataItem");
  const isButtonGroup = toRef(props, "isButtonGroup");
  const classButtonGroupDefault = toRef(props, "classButtonGroupDefault");

  const classButton = computed(() => {
    if (isButtonGroup.value) {
      return dataItem.value.classButton || classButtonGroupDefault.value;
    }
    return undefined;
  });

  return {
    classButton,
  };
}
