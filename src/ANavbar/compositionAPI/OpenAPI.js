import {
  onBeforeUnmount,
  ref,
  toRef,
  watch,
} from "vue";

/**
 * The open submenus as one path: "2.0.1" means the item 2, in it 0, in it 1 are open (disclosure navigation).
 * A click outside, the focus outside and Escape close them; hover with a delay (trigger "hover").
 */
export default function OpenAPI(props, {
  // the bar and the navigation in the drawer (mobile)
  getContainers = () => [],
}) {
  const closeDelay = toRef(props, "closeDelay");
  const openDelay = toRef(props, "openDelay");

  const openPath = ref("");
  let timer;

  const isOpen = path => openPath.value === path || openPath.value.startsWith(`${ path }.`);

  const getParentPath = path => path.split(".").slice(0, -1).join(".");

  const open = path => {
    clearTimeout(timer);
    openPath.value = path;
  };

  const close = path => {
    clearTimeout(timer);
    if (isOpen(path)) {
      openPath.value = getParentPath(path);
    }
  };

  const closeAll = () => {
    clearTimeout(timer);
    openPath.value = "";
  };

  const toggle = path => {
    if (isOpen(path)) {
      close(path);
    } else {
      open(path);
    }
  };

  const openLater = path => {
    clearTimeout(timer);
    timer = setTimeout(() => open(path), openDelay.value);
  };

  const closeLater = path => {
    clearTimeout(timer);
    timer = setTimeout(() => close(path), closeDelay.value);
  };

  const isInside = element => !!element && getContainers().some(container => container?.contains(element));

  const onDocumentPointerdown = $event => {
    if (!isInside($event.target)) {
      closeAll();
    }
  };

  // the focus left the navigation (Tab after the last item, a click in a field)
  const onFocusout = $event => {
    if ($event.relatedTarget && !isInside($event.relatedTarget)) {
      closeAll();
    }
  };

  watch(openPath, (value, valueOld) => {
    if (value && !valueOld) {
      document.addEventListener("pointerdown", onDocumentPointerdown);
    } else if (!value) {
      document.removeEventListener("pointerdown", onDocumentPointerdown);
    }
  });

  onBeforeUnmount(() => {
    clearTimeout(timer);
    document.removeEventListener("pointerdown", onDocumentPointerdown);
  });

  return {
    close,
    closeAll,
    closeLater,
    getParentPath,
    isOpen,
    onFocusout,
    open,
    openLater,
    openPath,
    toggle,
  };
}
