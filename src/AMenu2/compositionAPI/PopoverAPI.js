import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  getElementId,
} from "../utils/utils";
import {
  autoUpdate,
  computePosition,
  flip,
  limitShift,
  shift
} from "@floating-ui/vue";
import {
  clone,
  forEach,
} from "lodash-es";

export default function PopoverAPI(props, {
  menuRef = ref(undefined),
  isMenuOpen = computed(() => false),
  panelParentsOpen = ref([]),
}) {
  const menuId = toRef(props, "menuId");

  const cleanupPopper = ref({});
  const isEventCloseClickStarted = ref(false);

  const getElementLink = ({ id }) => {
    const ID = getElementId({
      menuId: menuId.value,
      id,
      suffix: "link",
    });
    return document.getElementById(ID);
  };

  const getElementPanel = ({ id }) => {
    const ID = getElementId({
      menuId: menuId.value,
      id,
      suffix: "panel",
    });
    return document.getElementById(ID);
  };

  const onClickEvent = $event => {
    if (!menuRef.value.contains($event.target)) {
      panelParentsOpen.value = [];
    }
  };

  const setEventCloseClick = () => {
    if (!isEventCloseClickStarted.value) {
      isEventCloseClickStarted.value = true;
      document.addEventListener("click", onClickEvent);
    }
  };

  const destroyEventCloseClick = () => {
    isEventCloseClickStarted.value = false;
    document.removeEventListener("click", onClickEvent);
  };

  const cleanupPopperCurrent = key => {
    if (cleanupPopper.value[key]) {
      cleanupPopper.value[key]();
      delete cleanupPopper.value[key];
      const PANEL_ELEMENT = getElementPanel({ id: key });
      PANEL_ELEMENT.style.removeProperty("left");
      PANEL_ELEMENT.style.removeProperty("top");
    }
  };

  const startPopper = () => {
    if (isMenuOpen.value) {
      return;
    }
    setEventCloseClick();
    const CLEANUP_POPPER = clone(cleanupPopper.value);
    forEach(panelParentsOpen.value, id => {
      if (cleanupPopper.value[id]) {
        delete CLEANUP_POPPER[id];
        return;
      }
      const LINK_ELEMENT = getElementLink({ id });
      const PANEL_ELEMENT = getElementPanel({ id });
      if (!LINK_ELEMENT ||
        !PANEL_ELEMENT) {
        return;
      }
      cleanupPopper.value[id] = autoUpdate(
        LINK_ELEMENT,
        PANEL_ELEMENT,
        () => {
          if (!LINK_ELEMENT ||
            !PANEL_ELEMENT) {
            return;
          }
          computePosition(
            LINK_ELEMENT,
            PANEL_ELEMENT,
            {
              placement: "right",
              middleware: [
                flip(),
                shift({ limiter: limitShift() }),
              ]
            },
          ).then(({ x, y }) => {
            Object.assign(PANEL_ELEMENT.style, {
              left: `${ x }px`,
              top: `${ y }px`,
            });
          });
        }
      );
    });
    forEach(CLEANUP_POPPER, (_, key) => {
      cleanupPopperCurrent(key);
    });
  };

  const destroyPopover = () => {
    forEach(cleanupPopper.value, (_, key) => {
      cleanupPopperCurrent(key);
    });
    destroyEventCloseClick();
  };

  return {
    destroyPopover,
    startPopper,
  };
}
