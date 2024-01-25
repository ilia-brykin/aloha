import {
  ref,
} from "vue";

export default function FocusAPI() {
  const componentRef = ref(undefined);

  const setFocusToComponent = () => {
    componentRef.value?.focus();
  };

  return {
    componentRef,
    setFocusToComponent,
  };
}
