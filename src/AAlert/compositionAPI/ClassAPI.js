import {
  computed,
  toRef,
} from "vue";

export default function ClassAPI(props) {
  const closable = toRef(props, "closable");
  const type = toRef(props, "type");

  const alertClassLocal = computed(() => {
    let alertClass = `a_alert a_alert_${ type.value }`;
    if (closable.value) {
      alertClass += " a_alert_closable";
    }
    return alertClass;
  });

  return {
    alertClassLocal,
  };
}
