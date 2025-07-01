import {
  ref,
} from "vue";

export const remPx = ref(getRemPx());

export default function ARemPxAPI() {
  return {
    remPx,
  };
}

function getRemPx() {
  const testEl = document.createElement("div");
  testEl.style.height = "1rem";
  testEl.style.position = "absolute";
  testEl.style.visibility = "hidden";
  document.body.appendChild(testEl);
  const value = testEl.offsetHeight;
  testEl.remove();

  return value;
}
