import {
  computed,
  toRef,
} from "vue";

import {
  get,
} from "lodash-es";

export default function ATabAPI(props) {
  const activeTabIdLocal = toRef(props, "activeTabIdLocal");
  const index = toRef(props, "index");
  const keyId = toRef(props, "keyId");
  const parentId = toRef(props, "parentId");
  const tab = toRef(props, "tab");

  const tabIdLocal = computed(() => {
    if (keyId.value) {
      return get(tab.value, keyId.value);
    }

    return index.value;
  });

  const isActive = computed(() => {
    return activeTabIdLocal.value === tabIdLocal.value;
  });

  const idLocal = computed(() => {
    return `${ parentId.value }_${ index.value }`;
  });

  const idForContent = computed(() => {
    return `${ idLocal.value }_content`;
  });

  return {
    idForContent,
    idLocal,
    isActive,
    tabIdLocal,
  };
}
