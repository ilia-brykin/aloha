// functions of ANotificationAPI() and the options of addNotification
export default function FunctionsAPI() {
  const dataFunctions = [
    {
      name: "addNotification(options)",
      description: "_A_NOTIFICATION_FUNCTIONS_ADD_DESCRIPTION_",
    },
    {
      name: "removeNotification(id)",
      description: "_A_NOTIFICATION_FUNCTIONS_REMOVE_DESCRIPTION_",
    },
    {
      name: "clearNotifications({ container })",
      description: "_A_NOTIFICATION_FUNCTIONS_CLEAR_DESCRIPTION_",
    },
    {
      name: "setNotificationTimeout(timeout)",
      description: "_A_NOTIFICATION_FUNCTIONS_SET_TIMEOUT_DESCRIPTION_",
    },
    {
      name: "pauseNotifications(container) / resumeNotifications(container)",
      description: "_A_NOTIFICATION_FUNCTIONS_PAUSE_DESCRIPTION_",
    },
  ];

  const dataOptions = [
    {
      name: "text",
      description: "_A_NOTIFICATION_OPTIONS_TEXT_DESCRIPTION_",
      type: "String / Object",
      default: undefined,
    },
    {
      name: "title",
      description: "_A_NOTIFICATION_OPTIONS_TITLE_DESCRIPTION_",
      type: "String",
      default: undefined,
    },
    {
      name: "type",
      description: "_A_NOTIFICATION_OPTIONS_TYPE_DESCRIPTION_",
      type: "String",
      default: "\"success\"",
    },
    {
      name: "timeout",
      description: "_A_NOTIFICATION_OPTIONS_TIMEOUT_DESCRIPTION_",
      type: "Number",
      default: "5000",
    },
    {
      name: "extra",
      description: "_A_NOTIFICATION_OPTIONS_EXTRA_DESCRIPTION_",
      type: "Object",
      default: undefined,
    },
    {
      name: "alwaysTranslate",
      description: "_A_NOTIFICATION_OPTIONS_ALWAYS_TRANSLATE_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
    },
    {
      name: "icon",
      description: "_A_NOTIFICATION_OPTIONS_ICON_DESCRIPTION_",
      type: "String",
      default: undefined,
    },
    {
      name: "announce",
      description: "_A_NOTIFICATION_OPTIONS_ANNOUNCE_DESCRIPTION_",
      type: "String",
      default: "\"alert\"",
    },
    {
      name: "actions",
      description: "_A_NOTIFICATION_OPTIONS_ACTIONS_DESCRIPTION_",
      type: "Array",
      default: undefined,
    },
    {
      name: "component",
      description: "_A_NOTIFICATION_OPTIONS_COMPONENT_DESCRIPTION_",
      type: "Object",
      default: undefined,
    },
    {
      name: "props",
      description: "_A_NOTIFICATION_OPTIONS_PROPS_DESCRIPTION_",
      type: "Object",
      default: undefined,
    },
    {
      name: "container",
      description: "_A_NOTIFICATION_OPTIONS_CONTAINER_DESCRIPTION_",
      type: "String",
      default: undefined,
    },
    {
      name: "deduplicate",
      description: "_A_NOTIFICATION_OPTIONS_DEDUPLICATE_DESCRIPTION_",
      type: "Boolean",
      default: "true",
    },
    {
      name: "useValuesFromObject",
      description: "_A_NOTIFICATION_OPTIONS_USE_VALUES_FROM_OBJECT_DESCRIPTION_",
      type: "Boolean",
      default: "true",
    },
  ];

  return {
    dataFunctions,
    dataOptions,
  };
}
