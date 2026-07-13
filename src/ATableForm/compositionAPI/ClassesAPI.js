import {
  computed,
  toRef,
} from "vue";

export default function ClassesAPI(props) {
  const actionsClasses = toRef(props, "actionsClasses");

  const actionsClassesLocal = computed(() => {
    return {
      delete: "a_btn a_btn_transparent_danger",
      edit: "a_btn a_btn_transparent_primary",
      editCancel: "a_btn a_btn_transparent_primary",
      editSave: "a_btn a_btn_transparent_primary",
      addRow: "a_btn a_btn_outline_primary",
      ...actionsClasses.value,
    };
  });

  return {
    actionsClassesLocal,
  };
}
