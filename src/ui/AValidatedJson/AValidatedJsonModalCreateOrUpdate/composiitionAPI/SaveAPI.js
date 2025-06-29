import {
  computed,
  ref,
  toRef,
} from "vue";

export default function SaveAPI(props, {
  isAnyRequiredElementEmpty = computed(() => false),
  model = ref({}),
}) {
  const close = toRef(props, "close");

  const save = () => {
    if (isAnyRequiredElementEmpty.value) {
      return;
    }

    close.value({ model: model.value });
  };

  return {
    save,
  };
}
