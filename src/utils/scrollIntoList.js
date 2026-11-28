/**
 * The option is made visible in its list: only the list scrolls, never the page
 * (scrollIntoView scrolls all parents, also the page, e.g. before floating-ui placed the popup).
 */
export function scrollIntoList(option, list) {
  if (!option || !list) {
    return;
  }
  const LIST_RECT = list.getBoundingClientRect();
  const OPTION_RECT = option.getBoundingClientRect();
  if (OPTION_RECT.top < LIST_RECT.top) {
    list.scrollTop -= LIST_RECT.top - OPTION_RECT.top;
  } else if (OPTION_RECT.bottom > LIST_RECT.bottom) {
    list.scrollTop += OPTION_RECT.bottom - LIST_RECT.bottom;
  }
}
