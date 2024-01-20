export default function DirectiveItemsAPI() {
  const directiveItems = {
    id: "directives",
    label: "Directives",
    icon: "CodeSquare",
    children: [
      {
        id: "OnHooks",
        label: "OnHooks",
        to: {
          name: "PageOnHooks",
        }
      },
    ],
  };

  return {
    directiveItems,
  };
}
