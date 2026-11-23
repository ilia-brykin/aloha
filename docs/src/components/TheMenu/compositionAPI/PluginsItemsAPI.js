export default function PluginsItemsAPI() {
  const pluginsItems = {
    id: "plugins",
    label: "Plugins",
    icon: "Plugin",
    class: "test_menu_plugins",
    children: [
      {
        id: "PageComponentsPlugin",
        label: "Components plugin",
        class: "test_menu_components_plugin",
        to: {
          name: "PageComponentsPlugin",
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
