export function scrollToElement({ element, isMiddleOfScreen = true }) {
  if (isMiddleOfScreen) {
    window.scroll({
      top: element.offsetTop - window.innerHeight / 2,
      behavior: "smooth",
    });
  } else {
    element.scrollIntoView();
  }
}
