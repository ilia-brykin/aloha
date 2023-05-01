import {
  ref,
} from "vue";

export const alertPluginOptions = ref({
  propsDefault: {
    alertClass: undefined,
    hasIcon: false,
    html: undefined,
    icon: undefined,
    iconClass: undefined,
    isDismissible: undefined,
    isVisible: false,
    textClose: "_ALERT_CLOSE_",
    type: "danger",
  },
  icons: {
    success: "AlertSuccess",
    danger: "AlertDanger",
    info: "AlertInfo",
    warning: "AlertWarning",
  },
});


export default {
  install: (app, {
    propsDefault = {},
    icons = {},
  } = {}) => {
    alertPluginOptions.value.propsDefault = {
      ...alertPluginOptions.value.propsDefault,
      ...propsDefault,
    };
    alertPluginOptions.value.icons = {
      ...alertPluginOptions.value.icons,
      ...icons,
    };
  },
};
