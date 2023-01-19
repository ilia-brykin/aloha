import {
  ref,
  toRef,
  watch,
} from "vue";

import {
  forEach,
  isNil,
} from "lodash-es";

export default function ActiveAPI(props, { emit }) {
  const indexActiveTab = toRef(props, "indexActiveTab");
  const data = toRef(props, "data");
  const isChangeOutside = toRef(props, "isChangeOutside");

  const indexActiveTabLocal = ref(0);

  const setIndexActiveTabLocal = () => {
    if (!isNil(indexActiveTab.value)) {
      indexActiveTabLocal.value = indexActiveTab.value;
    }
  };

  const initTabActiveIndex = () => {
    setIndexActiveTabLocal();

    if (!isNil(indexActiveTabLocal.value)) {
      return;
    }

    forEach(data.value, (item, index) => {
      if (item.active) {
        indexActiveTabLocal.value = index;
        return false;
      }
    });
  };

  const changeTab = ({ $event, tab, tabIndex }) => {
    if (indexActiveTabLocal.value === tabIndex) {
      return;
    }
    if (!isChangeOutside.value) {
      indexActiveTabLocal.value = tabIndex;
    }
    emit("change", { $event, tab, tabIndex });
  };

  watch(indexActiveTab, () => {
    setIndexActiveTabLocal();
  });

  return {
    changeTab,
    indexActiveTabLocal,
    initTabActiveIndex,
  };
}
