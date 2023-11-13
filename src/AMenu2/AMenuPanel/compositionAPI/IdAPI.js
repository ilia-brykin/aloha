import {
  computed,
  toRef,
} from "vue";

export default function IdAPI(props) {
  const parentId = toRef(props, "parentId");

  const panelId = computed(() => {
    return `a_menu_2_panel_${ parentId.value || "" }`;
  });

  return {
    panelId,
  };
}
