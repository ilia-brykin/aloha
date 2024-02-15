import ComponentItemsAPI from "./ComponentItemsAPI";
import CssItemsAPI from "./CssItemsAPI";
import DirectiveItemsAPI from "./DirectiveItemsAPI";
import FunctionItemsAPI from "./FunctionItemsAPI";
import RestItemsAPI from "./RestItemsAPI";

export default function MenuItemsAPI() {
  const {
    componentItems,
  } = ComponentItemsAPI();

  const {
    cssItems,
  } = CssItemsAPI();

  const {
    directiveItems,
  } = DirectiveItemsAPI();

  const {
    functionItems,
  } = FunctionItemsAPI();

  const {
    restItems,
  } = RestItemsAPI();

  const menuItems = [
    {
      id: "PageStart",
      label: "Start",
      to: {
        name: "PageStart",
      },
      icon: "Aloha",
    },
    componentItems,
    cssItems,
    directiveItems,
    functionItems,
    restItems,
  ];

  return {
    menuItems,
  };
}
