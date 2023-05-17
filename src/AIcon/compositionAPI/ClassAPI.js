import {
  computed,
  toRef,
} from "vue";

export default function ClassAPI(props) {
  const icon = toRef(props, "icon");

  const iconClass = computed(() => {
    return `a_icon_${ icon.value || "_NoImage" }`;
  });

  return {
    iconClass,
  };
}
