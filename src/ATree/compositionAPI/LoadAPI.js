import {
  ref,
  toRef,
} from "vue";

export default function LoadAPI(props, {
  emit,
  loadedChildren,
}) {
  const load = toRef(props, "load");

  const loadingKeys = ref(new Set());

  const setLoading = ({ key, isLoading }) => {
    const KEYS = new Set(loadingKeys.value);
    if (isLoading) {
      KEYS.add(key);
    } else {
      KEYS.delete(key);
    }
    loadingKeys.value = KEYS;
  };

  // Loads the children of a lazy node. On an error the node stays closed and can be loaded again.
  const loadChildren = async({ node }) => {
    if (!node?.isLazy || node.isLoaded || loadingKeys.value.has(node.key)) {
      return true;
    }
    setLoading({ key: node.key, isLoading: true });
    try {
      const CHILDREN = await load.value({ item: node.item, key: node.key, level: node.level });
      loadedChildren.value = {
        ...loadedChildren.value,
        [node.key]: CHILDREN || [],
      };
      return true;
    } catch(error) {
      emit("load-error", { item: node.item, key: node.key, error });
      return false;
    } finally {
      setLoading({ key: node.key, isLoading: false });
    }
  };

  return {
    loadChildren,
    loadingKeys,
  };
}
