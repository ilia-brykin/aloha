import {
  computed,
  toRef,
} from "vue";

export default function ClassAPI(props) {
  const type = toRef(props, "type");

  const alertClassLocal = computed(() => {
    return `a_alert a_alert_${ type.value }`;
  });

  return {
    alertClassLocal,
  };
}
