import {
  computed,
  inject,
  ref,
  toRef,
} from "vue";

import {
  get,
} from "lodash-es";

export default function VisibleAPI(props) {
  const item = toRef(props, "item");

  const keyIsRender = inject("keyIsRender");
  const keyIsRenderBodyByFirstOpen = inject("keyIsRenderBodyByFirstOpen");

  const isOpenFirst = ref(false);

  const isRenderBodyByFirstOpen = computed(() => {
    if (keyIsRenderBodyByFirstOpen.value) {
      return get(item.value, keyIsRenderBodyByFirstOpen.value);
    }
    return undefined;
  });

  const isBodyVisible = computed(() => {
    if (isRenderBodyByFirstOpen.value) {
      return isOpenFirst.value;
    }
    return true;
  });

  const isRender = computed(() => {
    if (keyIsRender.value) {
      return !!get(item.value, keyIsRender.value, true);
    }
    return true;
  });

  return {
    isBodyVisible,
    isOpenFirst,
    isRender,
  };
}
