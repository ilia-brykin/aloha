import {
  computed,
  toRef,
} from "vue";

export default function DegreeAPI(props) {
  const value = toRef(props, "value");
  const maxDegree = toRef(props, "maxDegree");

  const degree = computed(() => {
    return maxDegree.value * value.value / 100;

    /*
     * 30 - 100
     * x - value
     */
  });

  return {
    degree,
  };
}
