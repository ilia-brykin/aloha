import {
  computed,
  toRef,
} from "vue";

export default function PopperContainerAPI(props) {
  const popperContainerId = toRef(props, "popperContainerId");

  const popperContainerIdSelector = computed(() => {
    return `#${ popperContainerId.value }`;
  });

  const addPopperContainerInBody = () => {
    const ELEMENT_CONTAINER = document.getElementById(popperContainerId.value);
    if (!ELEMENT_CONTAINER) {
      const POPPER_CONTAINER = document.createElement("div");
      POPPER_CONTAINER.id = popperContainerId.value;
      POPPER_CONTAINER.className = "a_popup_container";
      POPPER_CONTAINER.setAttribute("aria-hidden", "true");
      document.body.appendChild(POPPER_CONTAINER);
    }
  };

  return {
    addPopperContainerInBody,
    popperContainerIdSelector,
  };
}
