export default function PluginsItemsAPI() {
  const pluginsItems = {
    id: "plugins",
    label: "Plugins",
    icon: "Plugin",
    children: [
      {
        id: "scale",
        label: "Icons plugin",
        to: {
          name: "PageIconsPlugin",
        },
      },
    ],
  };

  return {
    pluginsItems,
  };
}
