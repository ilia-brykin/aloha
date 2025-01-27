import {
  toRef,
} from "vue";

export default function ToggleAPI(props, {
  showTitle = () => {
  },
  closeTitle = () => {
  },
  closeTitleWithTimer = () => {
  },
}) {
  const isHide = toRef(props, "isHide");

  const onMouseenter = () => {
    if (isHide.value) {
      return;
    }
    showTitle();
  };

  const onMouseleave = () => {
    closeTitleWithTimer();
  };

  const onFocus = () => {
    if (isHide.value) {
      return;
    }
    showTitle();
  };

  const onBlur = () => {
    closeTitle();
  };

  return {
    onBlur,
    onFocus,
    onMouseenter,
    onMouseleave,
  };
}
