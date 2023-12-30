import {
  computed,
  ref, toRef,
} from "vue";

export default function CodeToggleAPI(props) {
  const isCodeVisibleDefault = toRef(props, "isCodeVisibleDefault");

  const isCodeVisible = ref(isCodeVisibleDefault.value);

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
