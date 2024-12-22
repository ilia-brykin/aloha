export default function PluginsItemsAPI() {
  const pluginsItems = {
    id: "plugins",
    label: "Plugins",
    icon: "Plugin",
    children: [
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
