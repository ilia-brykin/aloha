export default function scrollIntoView(container, selected) {
  if (!selected) {
    container.scrollTop = 0;
    return;
  }

  const OFFSET_PARENTS = [];
  let pointer = selected.offsetParent;
  while (pointer && container !== pointer && container.contains(pointer)) {
    OFFSET_PARENTS.push(pointer);
    pointer = pointer.offsetParent;
  }
  const TOP = selected.offsetTop + OFFSET_PARENTS.reduce((prev, curr) => (prev + curr.offsetTop), 0);
  const BOTTOM = TOP + selected.offsetHeight;
  const VIEW_RECT_TOP = container.scrollTop;
  const VIEW_RECT_BOTTOM = VIEW_RECT_TOP + container.clientHeight;

  if (TOP < VIEW_RECT_TOP) {
    container.scrollTop = TOP;
  } else if (BOTTOM > VIEW_RECT_BOTTOM) {
    container.scrollTop = BOTTOM - container.clientHeight;
  }
}
