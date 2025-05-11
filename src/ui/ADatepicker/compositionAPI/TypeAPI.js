import {
  computed,
  toRef,
} from "vue";

export default function TypeAPI(props) {
  const format = toRef(props, "format");
  const formatSave = toRef(props, "formatSave");
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
    time: "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]",
    datetime: "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]",
    month: "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]",
    year: "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]",
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

    return formatDefaultKeyByType[type.value];
  });

  return {
    formatLocal,
    formatSaveLocal,
  };
}
