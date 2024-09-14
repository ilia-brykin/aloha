import {
  computed,
  toRef,
} from "vue";

export default function ClassAPI(props) {
  const align = toRef(props, "align");
  const size = toRef(props, "size");
  const textAlign = toRef(props, "textAlign");

  const classAlign = computed(() => {
    return `a_text_${ align.value }`;
  });

  const classForBox = computed(() => {
    return textAlign.value === "left" ?
      "a_cloak__box_text_left" :
      "a_cloak__box_text_right";
  });

  const classTextSize = computed(() => {
    return `a_fs_${ size.value }`;
  });

  return {
    classAlign,
    classForBox,
    classTextSize,
  };
}
