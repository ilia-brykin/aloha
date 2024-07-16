import {
  focusableSelector,
} from "../const/AFocusableElements";

/**
 * Scrolls the window to the specified element.
 *
 * @param {object} options - The options for scrolling.
 * @param {Element} options.element - The element to scroll to.
 * @param {boolean} [options.isMiddleOfScreen=true] - Determines whether to scroll the element to the middle of the screen. Defaults to true.
 * @param {string} [options.behavior="smooth"] - The scroll behavior. Defaults to "smooth".
 *
 * @return {void}
 */
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

/**
 * Sets focus to a given element or element selector.
 *
 * @param {Object} options - The options for setting focus.
 * @param {HTMLElement} options.element - The element to set focus to.
 * @param {string} options.selector - The selector of the element to set focus to.
 *
 * @return {void}
 */
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

/**
 * Sets focus to the next focusable element.
 *
 * @param {Object} [options] - The options for setting focus.
 * @param {Element} [options.element] - The current element. If not provided, the active element will be used.
 *
 * @returns {void}
 */
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

/**
 * Sets focus to the previous focusable element.
 *
 * @param {Object} options - The options for setting focus to the previous focusable element.
 * @param {HTMLElement} options.element - The current element. If not provided, the current active element will be used.
 *
 * @return {void}
 */
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

/**
 * Generates a unique CSS selector for a given element.
 *
 * @param {Object} options - The options object.
 * @param {Element} options.element - The DOM element for which to generate the selector.
 * @returns {string} The unique CSS selector for the element.
 */
export function getUniqueSelector({ element }) {
  if (element.id) {
    return `#${ element.id }`;
  }

  const path = [];
  while (element) {
    const tag = element.tagName;
    path.unshift(
        element.className ? `${ tag }.${ element.className.replace(/\s+/g, ".") }` : tag
    );
    const siblings = parent.children;
    if (siblings?.length && siblings.length > 1) {
      path[0] += `:nth-child(${ Array.prototype.indexOf.call(siblings, element) + 1 })`;
    }
    element = element.parentElement;
  }

  return path.join(" > ");
}
