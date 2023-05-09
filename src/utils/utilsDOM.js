export function scrollToElement({ element, isMiddleOfScreen = true, behavior = "smooth" }) {
  if (isMiddleOfScreen) {
    console.log("element.offsetTop", element.offsetTop);
    window.scroll({
      top: element.offsetTop - window.innerHeight / 2,
      behavior,
    });
  } else {
    element.scrollIntoView();
  }
}
