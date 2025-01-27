import {
  computed,
  toRef,
} from "vue";

export default function HideAPI(props) {
  const isHide = toRef(props, "isHide");

  const styleFormHide = computed(() => {
    return isHide.value ? "display: none;" : "";
  });

  return {
    styleFormHide,
  };
}
