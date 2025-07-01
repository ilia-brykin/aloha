import {
  remPx,
} from "../compositionAPI/ARemPxAPI";

export default {
  install() {
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
      }
    });

    observer.observe(probe);
  },
};
