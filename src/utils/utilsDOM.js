import {
  focusableSelector,
} from "../const/AFocusableElements";

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

function isElementVisible(element) {
  const rect = element.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
}

export function setFocusToNextFocusableElement({ element } = {}) {
  const focusableElements = document.querySelectorAll(focusableSelector);
  const currentElement = element || document.activeElement;
  const currentIndex = Array.from(focusableElements).indexOf(currentElement);

  if (currentIndex !== -1) {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= focusableElements.length) {
      nextIndex = 0;
    }
    let nextElement = focusableElements[nextIndex];

    while (nextIndex < focusableElements.length && !isElementVisible(nextElement)) {
      nextIndex++;
      if (nextIndex >= focusableElements.length) {
        nextIndex = 0;
      }
      nextElement = focusableElements[nextIndex];
    }

    if (nextIndex < focusableElements.length) {
      nextElement.focus();
    }
  }
}

export function setFocusToPreviousFocusableElement({ element } = {}) {
  const focusableElements = document.querySelectorAll(focusableSelector);
  const currentElement = element || document.activeElement;
  const currentIndex = Array.from(focusableElements).indexOf(currentElement);

  if (currentIndex !== -1) {
    let previousIndex = currentIndex - 1;
    if (previousIndex < 0) {
      previousIndex = focusableElements.length - 1;
    }
    let previousElement = focusableElements[previousIndex];

    while (previousIndex >= 0 && !isElementVisible(previousElement)) {
      previousIndex--;
      if (previousIndex < 0) {
        previousIndex = focusableElements.length - 1;
      }
      previousElement = focusableElements[previousIndex];
    }

    if (previousIndex >= 0) {
      previousElement.focus();
    }
  }
}
