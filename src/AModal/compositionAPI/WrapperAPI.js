import {
  computed,
  toRef,
} from "vue";

export default function WrapperAPI(props) {
  const stop = toRef(props, "stop");

  const clickWrapperStoppPropagationEventMap = computed(() => {
    if (stop.value) {
      return {
        onClick: $event => $event.stopPropagation(),
      };
    }
    return {};
  });

  return {
    clickWrapperStoppPropagationEventMap,
  };
}
