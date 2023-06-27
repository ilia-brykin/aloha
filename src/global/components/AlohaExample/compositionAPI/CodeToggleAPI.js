import {
  computed,
  ref,
} from "vue";

export default function CodeToggleAPI() {
  const isCodeVisible = ref(false);

  const toggleCode = () => {
    isCodeVisible.value = !isCodeVisible.value;
  };

  const btnToggleCodeTitle = computed(() => {
    return isCodeVisible.value ?
      "_HIDE_SOURCE_" :
      "_VIEW_SOURCE_";
  });

  return {
    btnToggleCodeTitle,
    isCodeVisible,
    toggleCode,
  };
}
