import {
  ref,
  watch,
} from "vue";

export default function FocusAPI({
  stepActiveComputed,
}) {
  const tabContentRef = ref(undefined);

  watch(stepActiveComputed, () => {
    setTimeout(() => {
      tabContentRef.value && tabContentRef.value.focus();
    });
  });

  return {
    tabContentRef,
  };
}
