import {
  onBeforeUnmount,
  ref,
  toRef,
  watch,
} from "vue";

const FOCUSABLE = "a[href], button, input, select, textarea, [tabindex]:not([tabindex=\"-1\"]), [contenteditable=\"true\"]";

/**
 * aria-describedby belongs to the element with the focus, not to the wrapper of the tooltip:
 * the focused element inside, else the wrapper when it is focusable (tag="button"), else the first focusable element inside.
 */
export default function DescribedbyAPI(props, {
  componentRef = ref(undefined),
  focusedElement = ref(undefined),
  isTitleVisible = ref(false),
  titleId = ref(""),
}) {
  const withoutAriaDescribedby = toRef(props, "withoutAriaDescribedby");

  let describedElement;

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
  const addId = el => {
    const IDS = getIds(el);
    if (IDS.indexOf(titleId.value) === -1) {
      el.setAttribute("aria-describedby", [...IDS, titleId.value].join(" "));
    }
  };

  const removeId = el => {
    const IDS = getIds(el).filter(item => item !== titleId.value);
    if (IDS.length) {
      el.setAttribute("aria-describedby", IDS.join(" "));
    } else {
      el.removeAttribute("aria-describedby");
    }
  };

  const updateDescribedby = () => {
    if (describedElement) {
      removeId(describedElement);
      describedElement = undefined;
    }
    if (isTitleVisible.value && !withoutAriaDescribedby.value) {
      describedElement = getTarget();
      if (describedElement) {
        addId(describedElement);
      }
    }
  };

  watch(isTitleVisible, updateDescribedby, { flush: "post" });

  onBeforeUnmount(() => {
    if (describedElement) {
      removeId(describedElement);
    }
  });

  return {
    updateDescribedby,
  };
}
