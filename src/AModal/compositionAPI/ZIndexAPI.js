import {
  computed,
  ref,
  toRef,
} from "vue";

export default function ZIndexAPI(props) {
  const backdropZIndex = toRef(props, "backdropZIndex");
  const zIndex = toRef(props, "zIndex");

  const countOpenedModals = ref(0);

  const stylesZIndexModal = computed(() => {
    const STYLES = {};

    if (zIndex.value) {
      STYLES["--a_modal_z_index"] = zIndex.value;
    } else if (countOpenedModals.value > 1) {
      STYLES["--a_modal_z_index"] = 1055 + countOpenedModals.value - 1;
    }

    return STYLES;
  });

  const stylesBackdrop = computed(() => {
    const STYLES = {};

    if (backdropZIndex.value) {
      STYLES["--a_backdrop_z_index"] = backdropZIndex.value;
    } else if (countOpenedModals.value > 1) {
      STYLES["--a_backdrop_z_index"] = 1054 + countOpenedModals.value - 1;
    }

    return STYLES;
  });

  const checkOpenedModals = () => {
    const ELEMENTS = document.querySelectorAll(".a_backdrop");
    countOpenedModals.value = ELEMENTS?.length || 0;
  };

  return {
    checkOpenedModals,
    countOpenedModals,
    stylesBackdrop,
    stylesZIndexModal,
  };
}
