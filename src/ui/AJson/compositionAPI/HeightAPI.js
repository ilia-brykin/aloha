import {
  computed,
  toRef,
} from "vue";

export default function HeightAPI(props) {
  const heightCss = toRef(props, "heightCss");

  const styleHeight = computed(() => {
    if (heightCss.value) {
      return `height: ${ heightCss.value }`;
    }

    return undefined;
  });

  const styleMaxHeight = computed(() => {
    if (heightCss.value) {
      return `max-height: ${ heightCss.value }`;
    }

    return undefined;
  });

  return {
    styleHeight,
    styleMaxHeight,
  };
}
