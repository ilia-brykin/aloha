import {
  computed,
  toRef,
} from "vue";

export default function ResizeClass(props) {
  const resize = toRef(props, "resize");

  const RESIZE_CLASS_MAPPING = {
    v: "a_textarea_resize_v",
    h: "a_textarea_resize_h",
    none: "a_textarea_resize_none",
    auto: "",
  };

  const resizeClass = computed(() => {
    return RESIZE_CLASS_MAPPING[resize.value];
  });

  return {
    resizeClass,
  };
}
