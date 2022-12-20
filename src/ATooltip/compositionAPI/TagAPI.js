import {
  computed,
  resolveComponent,
  toRef,
} from "vue";

const COMPONENTS = ["RouterLink", "router-link"];

export default function TagAPI(props) {
  const tag = toRef(props, "tag");

  const tagLocal = computed(() => {
    if (COMPONENTS.indexOf(tag.value) !== -1) {
      return resolveComponent(tag.value);
    }
    return tag.value;
  });

  return {
    tagLocal,
  };
}
