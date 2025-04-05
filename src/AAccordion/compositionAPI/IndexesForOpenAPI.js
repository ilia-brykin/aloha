import {
  computed,
  toRef,
  watch,
} from "vue";

import {
  AKeyId,
} from "../../const/AKeys";
import {
  forEach,
  get,
  isNil,
} from "lodash-es";

export default function IndexesForOpenAPI(props, {
  idsForOpen = computed(() => []),
  dataWithIds = computed(() => []),
}) {
  const indexesForOpen = toRef(props, "indexesForOpen");
  const keyChildren = toRef(props, "keyChildren");

  const getPathForIndexForOpen = ({ indexForOpen }) => {
    let path = `${ indexForOpen }`.replaceAll(".", `.${ keyChildren.value }.`);
    path += `.${ AKeyId }`;
    return path;
  };

  const setIdsFromIndexesForOpen = ({ isInit } = {}) => {
    if (isInit && !indexesForOpen.value.length) {
      return;
    }
    const IDS_FOR_OPEN = [];
    if (keyChildren.value) {
      forEach(indexesForOpen.value, indexForOpen => {
        const ID = get(dataWithIds.value, getPathForIndexForOpen({ indexForOpen }));
        if (!isNil(ID)) {
          IDS_FOR_OPEN.push(ID);
        }
      });
    } else {
      forEach(indexesForOpen.value, indexForOpen => {
        const ID = get(dataWithIds.value, `${ indexForOpen }.${ AKeyId }`);
        if (!isNil(ID)) {
          IDS_FOR_OPEN.push(ID);
        }
      });
    }
    idsForOpen.value = IDS_FOR_OPEN;
  };

  const initIdsFromIndexesForOpen = () => {
    setIdsFromIndexesForOpen({ isInit: true });
  };

  watch(indexesForOpen, () => {
    setIdsFromIndexesForOpen();
  });

  return {
    initIdsFromIndexesForOpen,
  };
}
