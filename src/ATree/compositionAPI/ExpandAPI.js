import {
  ref,
  toRef,
  watch,
} from "vue";

import {
  isArray,
} from "lodash-es";

export default function ExpandAPI(props, {
  emit,
  getNode,
  isFiltering,
  isNodeVisible,
  nodesByKey,
  rootNodes,
}) {
  const defaultExpandLevel = toRef(props, "defaultExpandLevel");
  const expanded = toRef(props, "expanded");
  const isAccordion = toRef(props, "isAccordion");
  const isExpandAll = toRef(props, "isExpandAll");

  const expandedKeys = ref(new Set());

  const setExpandedKeys = keys => {
    expandedKeys.value = new Set(keys);
  };

  const emitExpanded = () => {
    emit("update:expanded", [...expandedKeys.value]);
  };

  const initExpanded = () => {
    if (isArray(expanded.value)) {
      setExpandedKeys(expanded.value);
      return;
    }
    const KEYS = [];
    nodesByKey.value.forEach(node => {
      if (node.children && (isExpandAll.value || node.level <= defaultExpandLevel.value)) {
        KEYS.push(node.key);
      }
    });
    setExpandedKeys(KEYS);
    // So v-model:expanded knows the initial state
    emitExpanded();
  };

  watch(expanded, () => {
    if (isArray(expanded.value)) {
      setExpandedKeys(expanded.value);
    }
  });

  // While filtering, the ancestors of the matching nodes are open
  const isNodeExpanded = node => {
    if (node.isLeaf) {
      return false;
    }
    if (isFiltering.value) {
      return (node.children || []).some(isNodeVisible);
    }
    return expandedKeys.value.has(node.key);
  };

  const expandNode = ({ node, $event }) => {
    if (!node || node.isLeaf || expandedKeys.value.has(node.key)) {
      return;
    }
    const KEYS = new Set(expandedKeys.value);
    if (isAccordion.value) {
      const SIBLINGS = node.parent ? node.parent.children : rootNodes.value;
      SIBLINGS.forEach(sibling => {
        if (sibling.key !== node.key) {
          KEYS.delete(sibling.key);
        }
      });
    }
    KEYS.add(node.key);
    expandedKeys.value = KEYS;
    emit("expand", { item: node.item, key: node.key, $event });
    emitExpanded();
  };

  const collapseNode = ({ node, $event }) => {
    if (!node || !expandedKeys.value.has(node.key)) {
      return;
    }
    const KEYS = new Set(expandedKeys.value);
    KEYS.delete(node.key);
    expandedKeys.value = KEYS;
    emit("collapse", { item: node.item, key: node.key, $event });
    emitExpanded();
  };

  const toggleNode = ({ node, $event }) => {
    if (expandedKeys.value.has(node.key)) {
      collapseNode({ node, $event });
    } else {
      expandNode({ node, $event });
    }
  };

  const expandAll = () => {
    const KEYS = [];
    nodesByKey.value.forEach(node => {
      if (node.children) {
        KEYS.push(node.key);
      }
    });
    setExpandedKeys(KEYS);
    emitExpanded();
  };

  const collapseAll = () => {
    setExpandedKeys([]);
    emitExpanded();
  };

  const expandToKey = key => {
    const KEYS = new Set(expandedKeys.value);
    let parent = getNode(key)?.parent;
    while (parent) {
      KEYS.add(parent.key);
      parent = parent.parent;
    }
    expandedKeys.value = KEYS;
  };

  return {
    collapseAll,
    collapseNode,
    expandAll,
    expandNode,
    expandToKey,
    expandedKeys,
    initExpanded,
    isNodeExpanded,
    toggleNode,
  };
}
