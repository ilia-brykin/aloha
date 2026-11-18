import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  getItemsFromJson,
  getItemValue,
} from "../utils/utils";

import {
  isArray,
  isFunction,
  isNil,
  isUndefined,
} from "lodash-es";

/**
 * Builds the normalized nodes from data or json:
 * { key, label, item, level, parent, children, isLeaf, disabled, index, setSize }
 */
export default function NodesAPI(props) {
  const data = toRef(props, "data");
  const json = toRef(props, "json");
  const keyChildren = toRef(props, "keyChildren");
  const keyDisabled = toRef(props, "keyDisabled");
  const keyId = toRef(props, "keyId");
  const keyIsLeaf = toRef(props, "keyIsLeaf");
  const keyLabel = toRef(props, "keyLabel");
  const load = toRef(props, "load");

  // Children loaded with the prop load, by the key of the parent
  const loadedChildren = ref({});

  const isJson = computed(() => !isUndefined(json.value));

  const items = computed(() => {
    if (isJson.value) {
      return getItemsFromJson(json.value);
    }
    return isArray(data.value) ? data.value : [];
  });

  const isLazy = computed(() => isFunction(load.value));

  const tree = computed(() => {
    const NODES_BY_KEY = new Map();
    let uid = 0;
    const KEYS = {
      id: isJson.value ? "id" : keyId.value,
      label: isJson.value ? "label" : keyLabel.value,
      children: isJson.value ? "children" : keyChildren.value,
      disabled: isJson.value ? undefined : keyDisabled.value,
      isLeaf: isJson.value ? undefined : keyIsLeaf.value,
    };

    const createNodes = ({ list, level, parent }) => {
      return list.map((item, index) => {
        const ID = getItemValue({ item, key: KEYS.id });
        const KEY = isNil(ID) ? `${ parent ? parent.key : "" }/${ index }` : ID;
        const NODE = {
          uid: uid++,
          key: KEY,
          label: getItemValue({ item, key: KEYS.label }) ?? "",
          item,
          level,
          parent,
          index,
          setSize: list.length,
          disabled: !!getItemValue({ item, key: KEYS.disabled }) || !!parent?.disabled,
          isLoaded: false,
        };
        NODES_BY_KEY.set(KEY, NODE);

        let childItems = getItemValue({ item, key: KEYS.children });
        if (!isArray(childItems) && isLazy.value && loadedChildren.value[KEY]) {
          childItems = loadedChildren.value[KEY];
          NODE.isLoaded = true;
        }
        if (isArray(childItems) && childItems.length) {
          NODE.children = createNodes({ list: childItems, level: level + 1, parent: NODE });
          NODE.isLeaf = false;
        } else if (isLazy.value && !isArray(childItems) && !getItemValue({ item, key: KEYS.isLeaf })) {
          // Not loaded yet: the node can be expanded
          NODE.children = undefined;
          NODE.isLeaf = false;
          NODE.isLazy = true;
        } else {
          NODE.children = undefined;
          NODE.isLeaf = true;
        }
        return NODE;
      });
    };

    const ROOT_NODES = createNodes({ list: items.value, level: 1, parent: undefined });
    return {
      nodes: ROOT_NODES,
      nodesByKey: NODES_BY_KEY,
    };
  });

  const rootNodes = computed(() => tree.value.nodes);
  const nodesByKey = computed(() => tree.value.nodesByKey);

  const getNode = key => nodesByKey.value.get(key);

  const getDescendants = node => {
    const RESULT = [];
    const ADD = list => {
      (list || []).forEach(child => {
        RESULT.push(child);
        ADD(child.children);
      });
    };
    ADD(node.children);
    return RESULT;
  };

  const getAncestors = node => {
    const RESULT = [];
    let parent = node?.parent;
    while (parent) {
      RESULT.push(parent);
      parent = parent.parent;
    }
    return RESULT;
  };

  return {
    getAncestors,
    getDescendants,
    getNode,
    isJson,
    isLazy,
    loadedChildren,
    nodesByKey,
    rootNodes,
  };
}
