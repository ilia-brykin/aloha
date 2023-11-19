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
  isMenuOpen = computed(() => false),
  panelParentsOpen = ref([]),
}) {
  const menuId = toRef(props, "menuId");

  const cleanupPopper = ref({});

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

  const startPopper = () => {
    if (isMenuOpen.value) {
      return;
    }
    const CLEANUP_POPPER = clone(cleanupPopper.value);
    forEach(panelParentsOpen.value, id => {
      if (cleanupPopper.value[id]) {
        delete CLEANUP_POPPER[id];
        return;
      }
      const LINK_ELEMENT = getElementLink({ id });
      const PANEL_ELEMENT = getElementPanel({ id });
      cleanupPopper.value[id] = autoUpdate(
        LINK_ELEMENT,
        PANEL_ELEMENT,
        () => {
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
    forEach(CLEANUP_POPPER, id => {
      if (cleanupPopper.value[id]) {
        cleanupPopper.value[id]();
        delete cleanupPopper.value[id];
      }
    });
  };

  const destroyPopover = () => {
    forEach(cleanupPopper.value, (item, key) => {
      if (item) {
        item();
        delete cleanupPopper.value[key];
      }
    });
  };

  return {
    destroyPopover,
    startPopper,
  };
}
