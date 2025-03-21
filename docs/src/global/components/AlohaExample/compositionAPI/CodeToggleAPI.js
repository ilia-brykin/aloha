import {
  computed,
  ref,
  toRef,
} from "vue";

export default function CodeToggleAPI(props) {
  const isCodeVisibleDefault = toRef(props, "isCodeVisibleDefault");

  const isCodeVisible = ref(undefined);

  const initIsCodeVisible = () => {
    isCodeVisible.value = isCodeVisibleDefault.value;
  };

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
    initIsCodeVisible,
    isCodeVisible,
    toggleCode,
  };
}
