import {
  computed,
  toRef,
} from "vue";

export default function LabelIdAPI(props) {
  const groupIndex = toRef(props, "groupIndex");
  const groupLabel = toRef(props, "groupLabel");
  const menuId = toRef(props, "menuId");
  const paneIndex = toRef(props, "paneIndex");

  const labelId = computed(() => {
    return `${ menuId.value }_${ paneIndex.value }_${ groupIndex.value }_label`;
  });

  const ariaLabelledbyObj = computed(() => {
    if (groupLabel.value) {
      return {
        "aria-labelledby": labelId.value,
      };
    }
    return {};
  });

  return {
    ariaLabelledbyObj,
    labelId,
  };
}
