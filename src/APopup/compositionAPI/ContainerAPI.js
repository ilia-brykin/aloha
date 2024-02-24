import {
  computed,
  toRef,
} from "vue";

export default function ContainerAPI(props) {
  const containerParentId = toRef(props, "containerParentId");
  const inBody = toRef(props, "inBody");

  const containerParentIdSelector = computed(() => {
    return `#${ containerParentId.value }`;
  });

  const addPopperContainerInBody = () => {
    const ELEMENT_CONTAINER = document.getElementById(containerParentId.value);
    if (!ELEMENT_CONTAINER && inBody.value) {
      const POPPER_CONTAINER = document.createElement("div");
      POPPER_CONTAINER.id = containerParentId.value;
      POPPER_CONTAINER.className = "a_popup_container";
      POPPER_CONTAINER.setAttribute("aria-hidden", "true");
      document.body.prepend(POPPER_CONTAINER);
    }
  };

  return {
    addPopperContainerInBody,
    containerParentIdSelector,
  };
}
