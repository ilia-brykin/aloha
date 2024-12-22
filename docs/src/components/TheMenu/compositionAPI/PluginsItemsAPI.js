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
        id: "PagePageTabTitlePlugin",
        label: "page tab title plugin",
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
