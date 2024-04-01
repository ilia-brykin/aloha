import {
  computed,
  toRef,
} from "vue";

export default function PopperContainerAPI(props) {
  const popperContainerId = toRef(props, "popperContainerId");

  const popperContainerIdSelector = computed(() => {
    return `#${ popperContainerId.value }`;
  });

  const addPopperContainerInBody = ({ className = "a_popup_container" } = {}) => {
    const ELEMENT_CONTAINER = document.getElementById(popperContainerId.value);
    if (!ELEMENT_CONTAINER) {
      const POPPER_CONTAINER = document.createElement("div");
      POPPER_CONTAINER.id = popperContainerId.value;
      POPPER_CONTAINER.className = className;
      document.body.prepend(POPPER_CONTAINER);
    }
  };

  return {
    addPopperContainerInBody,
    popperContainerIdSelector,
  };
}
