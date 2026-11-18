import {
  computed,
  toRef,
} from "vue";

import {
  isArray,
} from "lodash-es";

/**
 * Checked keys are the model. Without isCheckStrictly checking a node checks its children,
 * and a parent is checked when all its children are checked.
 */
export default function CheckAPI(props, {
  emit,
  getAncestors,
  getDescendants,
  getNode,
  nodesByKey,
}) {
  const isCheckStrictly = toRef(props, "isCheckStrictly");
  const modelValue = toRef(props, "modelValue");

  const checkedKeys = computed(() => new Set(isArray(modelValue.value) ? modelValue.value : []));

  const isChildChecked = node => (node.children || []).some(child => checkedKeys.value.has(child.key) || isChildChecked(child));

  const getCheckedState = node => {
    if (checkedKeys.value.has(node.key)) {
      return "true";
    }
    if (!isCheckStrictly.value && isChildChecked(node)) {
      return "mixed";
    }
    return "false";
  };

  const setCheckedKeys = keys => {
    emit("update:modelValue", [...keys]);
  };

  const checkNode = ({ node, checked, $event }) => {
    if (!node || node.disabled) {
      return;
    }
    const KEYS = new Set(checkedKeys.value);
    const IS_CHECKED = checked ?? checkedKeys.value.has(node.key) === false;
    const CHANGED = [node];
    if (!isCheckStrictly.value) {
      CHANGED.push(...getDescendants(node).filter(child => !child.disabled));
    }
    CHANGED.forEach(item => {
      if (IS_CHECKED) {
        KEYS.add(item.key);
      } else {
        KEYS.delete(item.key);
      }
    });
    if (!isCheckStrictly.value) {
      getAncestors(node).forEach(parent => {
        const IS_ALL = parent.children.every(child => child.disabled || KEYS.has(child.key));
        if (IS_ALL && !parent.disabled) {
          KEYS.add(parent.key);
        } else {
          KEYS.delete(parent.key);
        }
      });
    }
    setCheckedKeys(KEYS);
    emit("check", {
      item: node.item,
      key: node.key,
      checked: IS_CHECKED,
      checkedKeys: [...KEYS],
      $event,
    });
  };

  const getCheckedItems = ({ isLeafOnly = false } = {}) => {
    const RESULT = [];
    nodesByKey.value.forEach(node => {
      if (checkedKeys.value.has(node.key) && (!isLeafOnly || node.isLeaf)) {
        RESULT.push(node.item);
      }
    });
    return RESULT;
  };

  const getHalfCheckedKeys = () => {
    const RESULT = [];
    nodesByKey.value.forEach(node => {
      if (getCheckedState(node) === "mixed") {
        RESULT.push(node.key);
      }
    });
    return RESULT;
  };

  const isNodeChecked = key => checkedKeys.value.has(key) && !!getNode(key);

  return {
    checkNode,
    getCheckedItems,
    getCheckedState,
    getHalfCheckedKeys,
    isNodeChecked,
    setCheckedKeys,
  };
}
