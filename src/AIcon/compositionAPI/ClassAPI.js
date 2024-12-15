import {
  computed,
  toRef,
} from "vue";

export default function ClassAPI(props, {
  isIconSvg = computed(() => false),
}) {
  const icon = toRef(props, "icon");

  const iconClass = computed(() => {
    if (isIconSvg.value) {
      return undefined;
    }

    return `a_icon_${ icon.value || "_NoImage" }`;
  });

  return {
    iconClass,
  };
}
