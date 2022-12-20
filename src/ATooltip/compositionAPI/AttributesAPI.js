import {
  computed,
  toRef,
} from "vue";

export default function AttributesAPI(props) {
  const id = toRef(props, "id");
  const maxWidth = toRef(props, "maxWidth");

  const ariaDescribedby = computed(() => {
    return `${ id.value }_title`;
  });

  const tooltipStyles = computed(() => {
    if (maxWidth.value) {
      return `max-width: ${ maxWidth.value }px`;
    }
    return undefined;
  });

  return {
    ariaDescribedby,
    tooltipStyles,
  };
}
