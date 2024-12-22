export default function InstallationItemsAPI() {
  const installationItems = {
    id: "installation",
    label: "Installation",
    icon: "BoxArrowInDown",
    children: [
      {
        id: "scale",
        label: "Quick start",
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
