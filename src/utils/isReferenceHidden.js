const OVERFLOW_CLIPS = /(auto|scroll|hidden|clip|overlay)/;

const intersect = (a, b) => ({
  top: Math.max(a.top, b.top),
  left: Math.max(a.left, b.left),
  bottom: Math.min(a.bottom, b.bottom),
  right: Math.min(a.right, b.right),
});

/**
 * The button / the field of a popup is scrolled out of the view: outside of the window or of a parent
 * that scrolls or clips (overflow). A popup that covers the reference does not count (small screen).
 * Not the middleware "hide" of floating-ui: it checks the clipping parents of the popup, a popup in a
 * parent with overflow made a visible field "hidden".
 * A reference without a size is not laid out (display: none, jsdom): not "scrolled out".
 * A popup larger than the window (small screen) needs the scroll of the page to be used: it stays open.
 */
export function isReferenceHidden(reference, floating) {
  const RECT = reference?.getBoundingClientRect?.();
  if (!RECT || (RECT.width <= 0 && RECT.height <= 0)) {
    return false;
  }
  const FLOATING_RECT = floating?.getBoundingClientRect?.();
  if (FLOATING_RECT && (FLOATING_RECT.height > window.innerHeight || FLOATING_RECT.width > window.innerWidth)) {
    return false;
  }
  let clip = { top: 0, left: 0, bottom: window.innerHeight, right: window.innerWidth };
  for (let element = reference.parentElement; element && element !== document.body && element !== document.documentElement; element = element.parentElement) {
    const STYLE = getComputedStyle(element);
    if (OVERFLOW_CLIPS.test(`${ STYLE.overflowX } ${ STYLE.overflowY }`)) {
      clip = intersect(clip, element.getBoundingClientRect());
    }
  }
  return RECT.bottom <= clip.top || RECT.top >= clip.bottom || RECT.right <= clip.left || RECT.left >= clip.right;
}
