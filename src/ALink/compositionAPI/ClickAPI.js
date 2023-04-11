import {
  toRef,
} from "vue";

export default function ClickAPI(props, { emit }) {
  const onClick = $event => {
    const prevent = toRef(props, "prevent");
    const stop = toRef(props, "stop");
    const disabled = toRef(props, "disabled");

    if (prevent.value) {
      $event.preventDefault();
    }
    if (stop.value) {
      $event.stopPropagation();
    }
    if (disabled.value) {
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
