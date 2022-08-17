import {
  computed,
  ref,
  toRef,
} from "vue";

import AKeyId from "../../const/AKeyId";
import AKeyLabel from "../../const/AKeyLabel";
import {
  forEach,
  isFunction,
  size,
} from "lodash-es";

export default function ASelectSearchAPI(props, {
  emit,
}, {
  idLocal = computed(() => ""),
  dataLocal = computed(() => []),
}) {
  const modelSearch = ref("");
  const modelSearchOutside = ref("");
  const searchOutsideRef = ref(undefined);

  const options = toRef(props, "options");


  const searchOutside = toRef(props, "searchOutside");
  const searchOutsideLocal = computed(() => {
    return "searchOutside" in options.value ?
      options.value.searchOutside :
      searchOutside.value;
  });

  const search = toRef(props, "search");
  const searchLocal = computed(() => {
    return "search" in options.value ?
      options.value.search :
      search.value;
  });

  const textSearch = toRef(props, "textSearch");
  const textSearchLocal = computed(() => {
    return "textSearch" in options.value ?
      options.value.textSearch :
      textSearch.value;
  });

  const idForButtonSearchOutside = computed(() => {
    return `${ idLocal.value }_search_global`;
  });

  const onSearchOutside = $event => {
    if ($event) {
      $event.preventDefault();
    }
    if (isFunction(options.value.onSearchOutside)) {
      options.value.onSearchOutside({
        model: modelSearchOutside.value,
      });
    } else {
      emit("onSearchOutside", {
        model: modelSearchOutside.value,
      });
    }
  };

  const updateModelSearchOutside = model => {
    modelSearchOutside.value = model;
  };

  const updateModelSearch = model => {
    modelSearch.value = model;
  };

  const elementsHiddenWithSearch = computed(() => {
    const ELEMENTS_HIDDEN = {};
    if (modelSearch.value) {
      const RE = new RegExp(modelSearch.value, "gi");
      forEach(dataLocal.value, element => {
        const ELEMENT_LABEL = element[AKeyLabel];
        const ELEMENT_ID = element[AKeyId];
        if (`${ ELEMENT_LABEL }`.search(RE) === -1) {
          ELEMENTS_HIDDEN[ELEMENT_ID] = true;
        }
      });
    }
    return ELEMENTS_HIDDEN;
  });

  const isAllElementsHidden = computed(() => {
    if (!dataLocal.value.length) {
      return true;
    }
    if (modelSearch.value) {
      return size(elementsHiddenWithSearch.value) === size(dataLocal.value);
    }
    return false;
  });

  return {
    elementsHiddenWithSearch,
    idForButtonSearchOutside,
    isAllElementsHidden,
    modelSearch,
    modelSearchOutside,
    onSearchOutside,
    searchLocal,
    searchOutsideLocal,
    searchOutsideRef,
    textSearchLocal,
    updateModelSearch,
    updateModelSearchOutside,
  };
}
