import {
  computed,
  toRef,
} from "vue";

export default function TypeAPI(props) {
  const format = toRef(props, "format");
  const formatSave = toRef(props, "formatSave");
  const timePrecision = toRef(props, "timePrecision");
  const type = toRef(props, "type");

  const formatDefaultKeyByType = {
    date: "DD.MM.YYYY",
    time: "HH:mm:ss",
    datetime: "DD.MM.YYYY HH:mm:ss",
    month: "MM",
    year: "YYYY",
  };
  const formatSaveDefaultKeyByType = {
    date: "YYYY-MM-DD",
    time: "YYYY-MM-DD[T]HH:mm:ss.SSSZ",
    datetime: "YYYY-MM-DD[T]HH:mm:ss.SSSZ",
    month: "YYYY-MM-DD[T]HH:mm:ss.SSSZ",
    year: "YYYY-MM-DD[T]HH:mm:ss.SSSZ",
  };

  const formatSaveLocal = computed(() => {
    if (formatSave.value) {
      return formatSave.value;
    }

    return formatSaveDefaultKeyByType[type.value];
  });

  const formatLocal = computed(() => {
    if (format.value) {
      return format.value;
    }

    if (type.value === "time" || type.value === "datetime") {
      if (timePrecision.value === "hour") {
        return type.value === "time" ? "HH" : "DD.MM.YYYY HH";
      }

      if (timePrecision.value === "minute") {
        return type.value === "time" ? "HH:mm" : "DD.MM.YYYY HH:mm";
      }
    }

    return formatDefaultKeyByType[type.value];
  });

  return {
    formatLocal,
    formatSaveLocal,
  };
}
