import {
  computed,
  toRef,
} from "vue";

export default function ClassesAPI(props) {
  const classes = toRef(props, "actionsClasses");

  const classesLocal = computed(() => {
    return {
      delete: "a_btn a_btn_transparent_danger",
      edit: "a_btn a_btn_transparent_primary",
      editCancel: "a_btn a_btn_transparent_primary",
      editSave: "a_btn a_btn_transparent_primary",
      addRow: "a_btn a_btn_outline_primary",
      ...classes.value,
    };
  });

  return {
    classesLocal,
  };
}
