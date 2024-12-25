export default function PluginsItemsAPI() {
  const pluginsItems = {
    id: "plugins",
    label: "Plugins",
    icon: "Plugin",
    children: [
      {
        id: "PageAlertPlugin",
        label: "Alert plugin",
        to: {
          name: "PageAlertPlugin",
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
        id: "PageLoadingPlugin",
        label: "Loading plugin",
        to: {
          name: "PageLoadingPlugin",
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
