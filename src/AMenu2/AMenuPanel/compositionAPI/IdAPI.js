import {
  computed,
  toRef,
} from "vue";

export default function IdAPI(props) {
  const menuId = toRef(props, "menuId");
  const parentId = toRef(props, "parentId");

  const panelId = computed(() => {
    return `${ menuId.value }_panel_${ parentId.value || "" }`;
  });

  return {
    panelId,
  };
}
