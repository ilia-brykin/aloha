import {
  computed,
  ref,
  toRef,
} from "vue";

export default function ErrorsAPI(props) {
  const errors = toRef(props, "errors");

  const errorsLocal = ref(undefined);

  const errorsComputed = computed(() => {
    return {
      ...errors.value || {},
      ...errorsLocal.value || {},
    };
  });

  const deleteErrorsLocal = () => {
    errorsLocal.value = undefined;
  };

  return {
    deleteErrorsLocal,
    errorsComputed,
    errorsLocal,
  };
}
