import {
  isBrowser,
} from "../../utils/isBrowser";

/**
 * The user asked the system for less motion: no animation and no automatic rotation.
 *
 * @return {boolean}
 */
export function prefersReducedMotion() {
  if (!isBrowser() || !window.matchMedia) {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function getTabHtmlId({ parentId, index }) {
  return `${ parentId }_tab_${ index + 1 }`;
}

export function getItemHtmlId({ parentId, index }) {
  return `${ parentId }_item_${ index + 1 }`;
}

export function getAutoplayHtmlId({ parentId }) {
  return `${ parentId }_autoplay`;
}
