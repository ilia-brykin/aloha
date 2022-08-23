import {
  computed,
  toRef,
} from "vue";

import {
  get,
} from "lodash-es";

export default function ATabAPI(props) {
  const parentId = toRef(props, "parentId");
  const index = toRef(props, "index");
  const idLocal = computed(() => {
    return `${ parentId.value }_${ index.value }`;
  });

  const idForContent = computed(() => {
    return `${ idLocal.value }_content`;
  });

  const tab = toRef(props, "tab");
  const keyId = toRef(props, "keyId");
  const tabId = computed(() => {
    return get(tab.value, keyId.value);
  });

  const idForActiveTab = toRef(props, "idForActiveTab");
  const isActive = computed(() => {
    return idForActiveTab.value === tabId.value;
  });

  return {
    idForContent,
    idLocal,
    isActive,
  };
}
