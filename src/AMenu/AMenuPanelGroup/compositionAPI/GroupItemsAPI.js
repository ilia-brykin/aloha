import {
  computed,
  toRef,
} from "vue";

export default function GroupItemsAPI(props) {
  const groupItems = toRef(props, "groupItems");

  const hasItems = computed(() => {
    return groupItems.value.length > 0;
  });

  return {
    hasItems,
  };
}
