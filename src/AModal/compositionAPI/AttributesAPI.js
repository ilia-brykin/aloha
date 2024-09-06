import {
  computed,
  toRef,
} from "vue";

export default function AttributesAPI(props) {
  const backdropZIndex = toRef(props, "backdropZIndex");
  const zIndex = toRef(props, "zIndex");

  const stylesZIndexModal = computed(() => {
    const STYLES = {};

    if (zIndex.value) {
      STYLES["--a_modal_zindex"] = zIndex.value;
    }

    return STYLES;
  });

  const stylesBackdrop = computed(() => {
    const STYLES = {};

    if (backdropZIndex.value) {
      STYLES["--a__backdrop_zindex"] = backdropZIndex.value;
    }

    return STYLES;
  });

  return {
    stylesBackdrop,
    stylesZIndexModal,
  };
}
