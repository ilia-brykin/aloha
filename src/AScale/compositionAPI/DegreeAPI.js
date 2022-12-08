import {
  computed,
  toRef,
} from "vue";

const MAX_DEGREE = 30;
export default function DegreeAPI(props) {
  const value = toRef(props, "value");

  const degree = computed(() => {
    return MAX_DEGREE * value.value / 100;
    // 30 - 100
    // x - value
  });

  return {
    degree,
  };
}
