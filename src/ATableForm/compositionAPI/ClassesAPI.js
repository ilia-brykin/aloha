import {
  computed,
  toRef,
} from "vue";

export default function ClassesAPI(props) {
  const classes = toRef(props, "actionsClasses");

  const classesLocal = computed(() => {
    return {
      actionDelete: "a_btn a_btn_transparent_danger",
      actionEdit: "a_btn a_btn_transparent_primary",
      actionEditCancel: "a_btn a_btn_transparent_primary",
      actionEditSave: "a_btn a_btn_transparent_primary",
      actionAddRow: "a_btn a_btn_outline_primary",
      ...classes.value,
    };
  });

  return {
    classesLocal,
  };
}
