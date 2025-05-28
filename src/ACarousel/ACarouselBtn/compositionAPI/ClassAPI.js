import {
  computed,
  toRef,
} from "vue";

export default function ClassAPI(props) {
  const type = toRef(props, "type");

  const btnClass = computed(() => {
    return `a_carousel__arrow_${ type.value }`;
  });

  return {
    btnClass,
  };
}
