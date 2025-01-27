import {
  ref,
} from "vue";

export default function FocusAPI() {
  const componentRef = ref(undefined);

  const setFocusToComponent = () => {
    componentRef.value?.focus({ preventScroll: true });

    /*
     * smooth scrolling to element nearest alignment
     * componentRef.value?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth", });
     */
  };

  return {
    componentRef,
    setFocusToComponent,
  };
}
