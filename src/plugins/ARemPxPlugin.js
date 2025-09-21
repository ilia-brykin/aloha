import {
  defaultRemPx,
  remPx,
} from "../compositionAPI/ARemPxAPI";

import {
  isBrowser,
} from "../utils/isBrowser";

export default {
  install(app, {
    changeFontSize = () => {},
    defaultRemPx: _defaultRemPx = 16,
  } = {}) {
    defaultRemPx.value = _defaultRemPx;
    if (!isBrowser()) {
      return;
    }

    const probe = document.createElement("div");
    probe.style.position = "absolute";
    probe.style.visibility = "hidden";
    probe.style.height = "1rem";
    probe.style.width = "1rem";
    document.body.appendChild(probe);

    const observer = new ResizeObserver(() => {
      const newRem = probe.offsetHeight;
      if (newRem !== remPx.value) {
        remPx.value = newRem;
        changeFontSize(newRem);
      }
    });

    observer.observe(probe);
  },
};
