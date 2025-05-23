import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  AKeyId,
} from "../../const/AKeys";
import {
  findIndex,
  isNil,
} from "lodash-es";

export default function ActiveAPI(props, {
  dataLocal = computed(() => []),
}) {
  const modelValue = toRef(props, "modelValue");

  const activeId = ref(undefined);

  const initActiveId = () => {
    if (isNil(modelValue.value)) {
      activeId.value = dataLocal.value?.[0]?.[AKeyId];
    } else {
      activeId.value = modelValue.value;
    }
  };

  const changeActiveId = ({ id }) => {
    activeId.value = id;
  };

  const toNextSlide = () => {
    const ACTIVE_INDEX = findIndex(dataLocal.value, [AKeyId, activeId.value]);
    let nextSlideIndex;

    if (ACTIVE_INDEX === -1 || ACTIVE_INDEX >= dataLocal.value.length - 1) {
      nextSlideIndex = 0;
    } else {
      nextSlideIndex = ACTIVE_INDEX + 1;
    }

    changeActiveId({
      id: dataLocal.value?.[nextSlideIndex]?.[AKeyId],
    });
  };

  const toPreviousSlide = () => {
    const ACTIVE_INDEX = findIndex(dataLocal.value, [AKeyId, activeId.value]);
    let nextSlideIndex;

    if (ACTIVE_INDEX === -1 || ACTIVE_INDEX <= 0) {
      nextSlideIndex = dataLocal.value.length - 1;
    } else {
      nextSlideIndex = ACTIVE_INDEX - 1;
    }

    changeActiveId({
      id: dataLocal.value?.[nextSlideIndex]?.[AKeyId],
    });
  };

  return {
    activeId,
    changeActiveId,
    initActiveId,
    toNextSlide,
    toPreviousSlide,
  };
}
