import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  AKeyId,
} from "../../const/AKeys";
import {
  setFocusToElement,
} from "../../utils/utilsDOM";
import {
  findIndex,
  isNil,
} from "lodash-es";

export default function ActiveAPI(props, {
  dataLocal = computed(() => []),
}) {
  const id = toRef(props, "id");
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

  const setFocus = ({ nextSlideIndex }) => {
    setTimeout(() => {
      const HTML_ID = `${ id.value }_tab_${ nextSlideIndex + 1 }`;
      setFocusToElement({
        selector: `#${ HTML_ID }`,
      });
    });
  };

  const toNextSlide = ({ withFocus } = {}) => {
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

    if (withFocus) {
      setFocus({ nextSlideIndex });
    }
  };

  const toPreviousSlide = ({ withFocus } = {}) => {
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

    if (withFocus) {
      setFocus({ nextSlideIndex });
    }
  };

  return {
    activeId,
    changeActiveId,
    initActiveId,
    toNextSlide,
    toPreviousSlide,
  };
}
