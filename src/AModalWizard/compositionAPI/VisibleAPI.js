import {
  ref,
  nextTick,
} from "vue";

export default function VisibleAPI() {
  const isWizardVisible = ref(undefined);

  const initWizard = () => {
    nextTick().then(
      () => {
        isWizardVisible.value = true;
      },
    );
  };

  return {
    initWizard,
    isWizardVisible,
  };
}
