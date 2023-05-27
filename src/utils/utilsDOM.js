export function scrollToElement({ element, isMiddleOfScreen = true, behavior = "smooth" }) {
  if (isMiddleOfScreen) {
    window.scroll({
      top: element.offsetTop - window.innerHeight / 2,
      behavior,
    });
  } else {
    element.scrollIntoView();
  }
}

export function setFocusToElement({ element, selector }) {
  const ELEMENT = element ? element : document.querySelector(selector);
  if (ELEMENT) {
    if (!ELEMENT.hasAttribute("tabindex")) {
      ELEMENT.setAttribute("tabindex", "-1");
      ELEMENT.focus();
      ELEMENT.removeAttribute("tabindex");
    } else {
      ELEMENT.focus();
    }
  }
}
