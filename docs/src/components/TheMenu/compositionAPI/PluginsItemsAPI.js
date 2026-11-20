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
        id: "PageMobilePlugin",
        label: "Mobile plugin",
        class: "test_menu_mobile_plugin",
        to: {
          name: "PageMobilePlugin",
        },
      },
      {
        id: "PagePropsDefaultPlugin",
        label: "Props default plugin",
        class: "test_menu_props_default_plugin",
        to: {
          name: "PagePropsDefaultPlugin",
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
