import {
  computed,
  toRef,
} from "vue";

export default function IconAPI(props) {
  const icon = toRef(props, "icon");
  const iconAlign = toRef(props, "iconAlign");

  const isIconLeft = computed(() => {
    return icon.value && iconAlign.value === "left";
  });

  const isIconRight = computed(() => {
    return icon.value && iconAlign.value === "right";
  });

  return {
    isIconLeft,
    isIconRight,
  };
}
