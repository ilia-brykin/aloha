export default function MethodsAPI() {
  const dataMethods = [
    {
      name: "expandAll()",
      description: "_A_TREE_METHODS_EXPANDALL_",
    },
    {
      name: "collapseAll()",
      description: "_A_TREE_METHODS_COLLAPSEALL_",
    },
    {
      name: "expandToKey(key)",
      description: "_A_TREE_METHODS_EXPANDTOKEY_KEY_",
    },
    {
      name: "focus({ key })",
      description: "_A_TREE_METHODS_FOCUS_KEY_",
    },
    {
      name: "setSelected(key)",
      description: "_A_TREE_METHODS_SETSELECTED_KEY_",
    },
    {
      name: "checkNode({ key, checked })",
      description: "_A_TREE_METHODS_CHECKNODE_KEY_CHECKED_",
    },
    {
      name: "setCheckedKeys(keys)",
      description: "_A_TREE_METHODS_SETCHECKEDKEYS_KEYS_",
    },
    {
      name: "getCheckedItems({ isLeafOnly })",
      description: "_A_TREE_METHODS_GETCHECKEDITEMS_ISLEAFONLY_",
    },
    {
      name: "getHalfCheckedKeys()",
      description: "_A_TREE_METHODS_GETHALFCHECKEDKEYS_",
    },
    {
      name: "getNode(key)",
      description: "_A_TREE_METHODS_GETNODE_KEY_",
    },
  ];

  return {
    dataMethods,
  };
}
