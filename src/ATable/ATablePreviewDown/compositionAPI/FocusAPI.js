import {
  ref,
} from "vue";

export default function FocusAPI() {
  const componentRef = ref(undefined);

  const setFocusToComponent = () => {
    componentRef.value?.focus({ preventScroll: true });
  };

  return {
    componentRef,
    setFocusToComponent,
  };
}
