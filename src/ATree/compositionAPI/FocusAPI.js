import {
  computed,
  nextTick,
  ref,
  toRef,
} from "vue";

export default function FocusAPI(props, {
  isNodeExpanded,
  isNodeVisible,
  rootNodes,
}) {
  const selected = toRef(props, "selected");

  const focusedKey = ref(undefined);
  // The elements of the nodes by key, filled while rendering
  const elements = new Map();

  const setElement = ({ key, element }) => {
    if (element) {
      elements.set(key, element);
    } else {
      elements.delete(key);
    }
  };

  // The nodes in the order they are shown
  const visibleNodes = computed(() => {
    const RESULT = [];
    const ADD = nodes => {
      nodes.forEach(node => {
        if (!isNodeVisible(node)) {
          return;
        }
        RESULT.push(node);
        if (node.children && isNodeExpanded(node)) {
          ADD(node.children);
        }
      });
    };
    ADD(rootNodes.value);
    return RESULT;
  });

  // Roving tabindex: one node is in the tab order
  const tabbableKey = computed(() => {
    const KEYS = visibleNodes.value.map(node => node.key);
    if (KEYS.includes(focusedKey.value)) {
      return focusedKey.value;
    }
    if (KEYS.includes(selected.value)) {
      return selected.value;
    }
    return KEYS[0];
  });

  const focusNode = async({ key }) => {
    focusedKey.value = key;
    await nextTick();
    const ELEMENT = elements.get(key);
    if (ELEMENT) {
      ELEMENT.focus();
    }
  };

  const onFocusNode = ({ node }) => {
    focusedKey.value = node.key;
  };

  return {
    focusNode,
    focusedKey,
    onFocusNode,
    setElement,
    tabbableKey,
    visibleNodes,
  };
}
