export default function PopperContainerAPI() {
  const ID_POPPER_CONTAINER = "a_tooltip_container";
  const addPopperContainerInBody = () => {
    const ELEMENT_CONTAINER = document.getElementById(ID_POPPER_CONTAINER);
    if (!ELEMENT_CONTAINER) {
      const POPPER_CONTAINER = document.createElement("div");
      POPPER_CONTAINER.id = ID_POPPER_CONTAINER;
      POPPER_CONTAINER.className = "a_popup_container";
      POPPER_CONTAINER.setAttribute("aria-hidden", "true");
      document.body.appendChild(POPPER_CONTAINER);
    }
  };

  return {
    addPopperContainerInBody,
  };
}
