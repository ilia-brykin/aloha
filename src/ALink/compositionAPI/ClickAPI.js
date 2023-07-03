import {
  toRef,
} from "vue";

export default function ClickAPI(props, { emit }) {
  const disabled = toRef(props, "disabled");
  const stop = toRef(props, "stop");
  const onClick = $event => {
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
