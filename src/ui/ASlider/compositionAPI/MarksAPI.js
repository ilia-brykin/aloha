import {
  computed,
  toRef,
} from "vue";

export default function MarksAPI(props) {
  const marks = toRef(props, "marks");
  const max = toRef(props, "max");
  const min = toRef(props, "min");


  const markList = computed(() => {
    if (!marks.value) {
      return [];
    }

    const marksKeys = Object.keys(marks.value);
    return marksKeys
      .map(parseFloat)
      .sort((a, b) => a - b)
      .filter(point => point <= max.value && point >= min.value)
      .map(point => ({
        point,
        position: (point - min.value) * 100 / (max.value - min.value),
        mark: marks.value[point],
      }));
  });

  return {
    markList,
  };
}
