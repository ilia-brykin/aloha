export default function PluginsItemsAPI() {
  const pluginsItems = {
    id: "plugins",
    label: "Plugins",
    icon: "Plugin",
    class: "test_menu_plugins",
    children: [
      {
        id: "PageAlertPlugin",
        label: "Alert plugin",
        class: "test_menu_alert_plugin",
        to: {
          name: "PageAlertPlugin",
        },
      },

      {
        id: "PageIconsPlugin",
        label: "Icons plugin",
        class: "test_menu_icons_plugin",
        to: {
          name: "PageIconsPlugin",
        },
      },
      {
        id: "PageLoadingPlugin",
        label: "Loading plugin",
        class: "test_menu_loading_plugin",
        to: {
          name: "PageLoadingPlugin",
        },
      },
      {
        id: "PageMobilePlugin",
        label: "Mobile plugin",
        class: "test_menu_mobile_plugin",
        to: {
          name: "PageMobilePlugin",
        },
      },
      {
        id: "PageSpinnerPlugin",
        label: "Spinner plugin",
        class: "test_menu_spinner_plugin",
        to: {
          name: "PageSpinnerPlugin",
        },
      },
      {
        id: "PagePageTabTitlePlugin",
        label: "Page tab title plugin",
        class: "test_menu_tab_title_plugin",
        to: {
          name: "PagePageTabTitlePlugin",
        },
      },
    ],
  };

  return {
    pluginsItems,
  };
}
