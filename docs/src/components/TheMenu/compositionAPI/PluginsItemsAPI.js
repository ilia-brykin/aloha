export default function PluginsItemsAPI() {
  const pluginsItems = {
    id: "plugins",
    label: "Plugins",
    icon: "Plugin",
    children: [
      {
        id: "PageCloakPlugin",
        label: "Cloak plugin",
        to: {
          name: "PageCloakPlugin",
        },
      },
      {
        id: "PageIconsPlugin",
        label: "Icons plugin",
        to: {
          name: "PageIconsPlugin",
        },
      },
      {
        id: "PageMobilePlugin",
        label: "Mobile plugin",
        to: {
          name: "PageMobilePlugin",
        },
      },
      {
        id: "PageSpinnerPlugin",
        label: "Spinner plugin",
        to: {
          name: "PageSpinnerPlugin",
        },
      },
      {
        id: "PagePageTabTitlePlugin",
        label: "Page tab title plugin",
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
