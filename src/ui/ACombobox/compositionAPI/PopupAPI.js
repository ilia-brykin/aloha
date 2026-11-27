import {
  computed,
  onBeforeUnmount,
  ref,
  toRef,
  watch,
} from "vue";

import {
  autoUpdate,
  computePosition,
  flip,
  offset,
  shift,
  size,
} from "@floating-ui/vue";

import AMobileAPI from "../../../compositionAPI/AMobileAPI";

/**
 * Where the list is:
 * - in the field (CSS under the input);
 * - in-body: in the container in body, placed with floating-ui (not cut by a parent with overflow: hidden);
 * - bottom sheet on a small screen (AMobilePlugin): at the bottom of the window, above the virtual keyboard.
 */
export default function PopupAPI(props, {
  inputRef = ref(undefined),
  isMounted = ref(false),
  isPopupVisible = computed(() => false),
  popupRef = ref(undefined),
}) {
  const inBody = toRef(props, "inBody");
  const isBottomSheetOnMobile = toRef(props, "isBottomSheetOnMobile");

  const {
    isMobileWidth,
  } = AMobileAPI();

  const isSheet = computed(() => !!(isBottomSheetOnMobile.value && isMobileWidth.value));
  // before the mount there is no container in body (SSR, first render)
  const isTeleported = computed(() => isMounted.value && (inBody.value || isSheet.value));
  const sheetBottom = ref(0);
  let cleanup;

  // the virtual keyboard makes the visual viewport smaller: the sheet stays above it
  const updateSheetBottom = () => {
    const VIEWPORT = window.visualViewport;
    sheetBottom.value = VIEWPORT ?
      Math.max(window.innerHeight - VIEWPORT.height - VIEWPORT.offsetTop, 0) :
      0;
  };

  const stop = () => {
    cleanup?.();
    cleanup = undefined;
    window.visualViewport?.removeEventListener("resize", updateSheetBottom);
    window.visualViewport?.removeEventListener("scroll", updateSheetBottom);
  };

  const start = () => {
    stop();
    const INPUT = inputRef.value;
    const POPUP = popupRef.value;
    if (!isPopupVisible.value || !INPUT || !POPUP) {
      return;
    }
    // the CSS places the sheet and the list in the field
    Object.assign(POPUP.style, { left: "", top: "", width: "", maxHeight: "" });
    if (isSheet.value) {
      updateSheetBottom();
      window.visualViewport?.addEventListener("resize", updateSheetBottom);
      window.visualViewport?.addEventListener("scroll", updateSheetBottom);
      return;
    }
    if (!isTeleported.value) {
      return;
    }
    cleanup = autoUpdate(INPUT, POPUP, () => {
      computePosition(INPUT, POPUP, {
        placement: "bottom-start",
        middleware: [
          offset(4),
          flip(),
          shift({ padding: 8 }),
          // as wide as the field, not higher than the free space
          size({
            apply({ availableHeight, elements, rects }) {
              Object.assign(elements.floating.style, {
                width: `${ rects.reference.width }px`,
                maxHeight: `${ Math.max(availableHeight - 8, 120) }px`,
              });
            },
          }),
        ],
      }).then(({ x, y }) => {
        // the list can be closed while the position is computed
        if (!popupRef.value) {
          return;
        }
        Object.assign(popupRef.value.style, {
          left: `${ x }px`,
          top: `${ y }px`,
        });
      });
    });
  };

  watch([isPopupVisible, isSheet, isTeleported], start, { flush: "post" });

  onBeforeUnmount(stop);

  return {
    isSheet,
    isTeleported,
    sheetBottom,
  };
}
