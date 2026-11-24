import {
  computed,
  onBeforeUnmount,
  onUpdated,
  ref,
  toRef,
  watch,
} from "vue";

const FOCUSABLE = "a[href], button, input, select, textarea, [tabindex]:not([tabindex=\"-1\"]), [contenteditable=\"true\"]";

/**
 * aria-describedby belongs to the element with the focus, not to the wrapper of the tooltip:
 * the focused element inside, else the wrapper when it is focusable (tag="button"), else the first focusable element inside.
 *
 * render-description "always": the text of the tooltip is always in the DOM as a hidden element and aria-describedby
 * always points to it, so a screen reader reads it also without focus (browse mode) and right at the focus.
 * "visible": aria-describedby points to the tooltip only while it is open (behavior of 2.x).
 */
export default function DescribedbyAPI(props, {
  componentRef = ref(undefined),
  descriptionId = ref(""),
  focusedElement = ref(undefined),
  isTitleVisible = ref(false),
  titleId = ref(""),
}) {
  const isHide = toRef(props, "isHide");
  const renderDescription = toRef(props, "renderDescription");
  const withoutAriaDescribedby = toRef(props, "withoutAriaDescribedby");

  const isDescriptionRendered = computed(() => {
    return renderDescription.value === "always" &&
      !withoutAriaDescribedby.value &&
      !isHide.value;
  });

  const describedbyId = computed(() => {
    return isDescriptionRendered.value ? descriptionId.value : titleId.value;
  });

  const isDescribedbyActive = computed(() => {
    if (withoutAriaDescribedby.value || isHide.value) {
      return false;
    }
    return isDescriptionRendered.value || isTitleVisible.value;
  });

  let describedElement;
  let describedId;

  const getRoot = () => {
    return componentRef.value?.$el || componentRef.value;
  };

  const getTarget = () => {
    const ROOT = getRoot();
    if (!ROOT?.matches) {
      return undefined;
    }
    if (focusedElement.value && ROOT.contains(focusedElement.value)) {
      return focusedElement.value;
    }
    if (ROOT.matches(FOCUSABLE)) {
      return ROOT;
    }
    return ROOT.querySelector(FOCUSABLE) || ROOT;
  };

  const getIds = el => {
    return (el.getAttribute("aria-describedby") || "").split(/\s+/).filter(Boolean);
  };

  // own ids of aria-describedby stay
  const addId = (el, id) => {
    const IDS = getIds(el);
    if (IDS.indexOf(id) === -1) {
      el.setAttribute("aria-describedby", [...IDS, id].join(" "));
    }
  };

  const removeId = (el, id) => {
    const IDS = getIds(el).filter(item => item !== id);
    if (IDS.length) {
      el.setAttribute("aria-describedby", IDS.join(" "));
    } else {
      el.removeAttribute("aria-describedby");
    }
  };

  const updateDescribedby = () => {
    const TARGET = isDescribedbyActive.value ? getTarget() : undefined;
    const ID = describedbyId.value;
    if (describedElement && (describedElement !== TARGET || describedId !== ID)) {
      removeId(describedElement, describedId);
      describedElement = undefined;
    }
    if (TARGET) {
      addId(TARGET, ID);
      describedElement = TARGET;
      describedId = ID;
    }
  };

  watch([isDescribedbyActive, describedbyId, focusedElement, componentRef], updateDescribedby, { flush: "post" });
  // the content of the default slot can change (e.g. another button)
  onUpdated(updateDescribedby);

  onBeforeUnmount(() => {
    if (describedElement) {
      removeId(describedElement, describedId);
    }
  });

  return {
    isDescriptionRendered,
  };
}
