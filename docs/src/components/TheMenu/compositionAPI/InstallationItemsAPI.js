export default function InstallationItemsAPI() {
  const installationItems = {
    id: "installation",
    label: "Installation",
    icon: "BoxArrowInDown",
    class: "test_menu_installation",
    children: [
      {
        id: "scale",
        label: "Quick start",
        class: "test_menu_scale",
        to: {
          name: "PageQuickStart",
        },
      },
    ],
  };

  return {
    installationItems,
  };
}
