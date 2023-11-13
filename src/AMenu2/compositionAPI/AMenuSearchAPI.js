import {
  computed,
  ref,
} from "vue";

import AKeyId from "../../const/AKeyId";
import AKeyLabel from "../../const/AKeyLabel";
import {
  forEach,
} from "lodash-es";


export default function AMenuSearchAPI(props, {
  dataProParent = computed(() => ({
    main: [],
    children: {},
  })),
}) {
  const modelSearch = ref("");

  const updateModelSearch = model => {
    modelSearch.value = model;
  };

  const isSearchActive = computed(() => {
    return !!modelSearch.value;
  });

  const resetSearch = () => {
    if (isSearchActive.value) {
      modelSearch.value = "";
    }
  };

  const dataProParentList = computed(() => {
    const ITEMS = [];
    if (dataProParent.value.main.length) {
      ITEMS.push(dataProParent.value.main);
    }
    forEach(dataProParent.value.children, childPanelItems => {
      ITEMS.push(childPanelItems);
    });
    return ITEMS;
  });

  const idsSearchVisible = computed(() => {
    const IDS = {
      main: {},
      rest: {},
    };
    if (isSearchActive.value) {
      const RE = new RegExp(modelSearch.value, "gi");
      forEach(dataProParentList.value, (items, index) => {
        let isVisible = false;
        forEach(items, item => {
          const ITEM_LABEL = item[AKeyLabel];
          if (`${ ITEM_LABEL }`.search(RE) !== -1) {
            const ITEM_ID = item[AKeyId];
            IDS.rest[ITEM_ID] = true;
            isVisible = true;
          }
        });
        if (isVisible) {
          IDS.main[index] = true;
        }
      });
    }
    return IDS;
  });


  return {
    idsSearchVisible,
    isSearchActive,
    dataProParentList,
    modelSearch,
    resetSearch,
    updateModelSearch,
  };
}
