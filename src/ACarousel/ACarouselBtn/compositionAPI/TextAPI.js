import {
  computed,
  toRef,
} from "vue";

export default function TextAPI(props) {
  const texts = toRef(props, "texts");
  const type = toRef(props, "type");

  const btnTitle = computed(() => {
    if (type.value === "previous") {
      return texts.value.previousSlide;
    }

    if (type.value === "next") {
      return texts.value.nextSlide;
    }

    return undefined;
  });

  return {
    btnTitle,
  };
}
