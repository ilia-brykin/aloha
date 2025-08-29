import {
  toRef,
} from "vue";

export default function SelectAPI(props, { emit }) {
  const disabledDate = toRef(props, "disabledDate");

  const selectDate = ($event, { year, month, day }) => {
    $event.stopPropagation();
    const date = new Date(year, month, day);
    if (disabledDate.value(date)) {
      return;
    }

    emit("select", date);
  };

  return {
    selectDate,
  };
}
