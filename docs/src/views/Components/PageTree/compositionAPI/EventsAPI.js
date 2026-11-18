export default function EventsAPI() {
  const dataEvents = [
    {
      name: "update:model-value",
      description: "_A_TREE_EVENTS_UPDATE_MODEL_VALUE_",
    },
    {
      name: "update:selected",
      description: "_A_TREE_EVENTS_UPDATE_SELECTED_",
    },
    {
      name: "update:expanded",
      description: "_A_TREE_EVENTS_UPDATE_EXPANDED_",
    },
    {
      name: "node-click",
      description: "_A_TREE_EVENTS_NODE_CLICK_",
    },
    {
      name: "check",
      description: "_A_TREE_EVENTS_CHECK_",
    },
    {
      name: "expand",
      description: "_A_TREE_EVENTS_EXPAND_",
    },
    {
      name: "collapse",
      description: "_A_TREE_EVENTS_COLLAPSE_",
    },
    {
      name: "load-error",
      description: "_A_TREE_EVENTS_LOAD_ERROR_",
    },
  ];

  return {
    dataEvents,
  };
}
