import {
  computed,
  toRef,
} from "vue";

export default function ClassAPI(props) {
  const isDismissible = toRef(props, "isDismissible");
  const type = toRef(props, "type");

  const alertClassLocal = computed(() => {
    let alertClass = `a_alert a_alert_${ type.value }`;
    if (isDismissible.value) {
      alertClass += " a_alert_dismissible";
    }
    return alertClass;
  });

  return {
    alertClassLocal,
  };
}
