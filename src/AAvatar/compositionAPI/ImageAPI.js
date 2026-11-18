import {
  computed,
  ref,
  toRef,
  watch,
} from "vue";

export default function ImageAPI(props, { emit }) {
  const src = toRef(props, "src");

  const hasImageError = ref(false);

  const isImageVisible = computed(() => {
    return !!src.value && !hasImageError.value;
  });

  const onImageError = $event => {
    hasImageError.value = true;
    emit("error", { $event, src: src.value });
  };

  watch(src, () => {
    hasImageError.value = false;
  });

  return {
    isImageVisible,
    onImageError,
  };
}
