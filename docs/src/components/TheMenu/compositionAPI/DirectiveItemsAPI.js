export default function DirectiveItemsAPI() {
  const directiveItems = {
    id: "directives",
    label: "Directives",
    icon: "CodeSquare",
    class: "test_menu_directives",
    children: [
      {
        id: "OnHooks",
        label: "OnHooks",
        class: "test_menu_on_hooks",
        to: {
          name: "PageOnHooks",
        },
      },
    ],
  };

  return {
    directiveItems,
  };
}
