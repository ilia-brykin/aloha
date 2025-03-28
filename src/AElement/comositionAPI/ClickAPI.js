import {
  toRef,
} from "vue";

export default function ClickAPI(props, { emit }) {
  const prevent = toRef(props, "prevent");
  const stop = toRef(props, "stop");
  const disabled = toRef(props, "disabled");
  const ariaDisabled = toRef(props, "ariaDisabled");

  const onClick = $event => {
    if (prevent.value) {
      $event.preventDefault();
    }
    if (stop.value) {
      $event.stopPropagation();
    }
    if (disabled.value || ariaDisabled.value) {
      return;
    }
    emit("click", {
      props,
      $event,
    });
  };

  return {
    onClick,
  };
}
