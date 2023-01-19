import {
  computed,
  toRef,
} from "vue";

export default function ATabAPI(props) {
  const parentId = toRef(props, "parentId");
  const index = toRef(props, "index");
  const indexActiveTabLocal = toRef(props, "indexActiveTabLocal");

  const isActive = computed(() => {
    return indexActiveTabLocal.value === index.value;
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
  };
}
