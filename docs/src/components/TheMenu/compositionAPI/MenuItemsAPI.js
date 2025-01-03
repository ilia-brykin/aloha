import ComponentItemsAPI from "./ComponentItemsAPI";
import CssItemsAPI from "./CssItemsAPI";
import DirectiveItemsAPI from "./DirectiveItemsAPI";
import FunctionItemsAPI from "./FunctionItemsAPI";
import InstallationItemsAPI from "./InstallationItemsAPI";
import MigrationItemsAPI from "./MigrationItemsAPI";
import PluginsItemsAPI from "./PluginsItemsAPI";
import RestItemsAPI from "./RestItemsAPI";

export default function MenuItemsAPI() {
  const {
    installationItems,
  } = InstallationItemsAPI();

  const {
    migrationItems,
  } = MigrationItemsAPI();

  const {
    pluginsItems,
  } = PluginsItemsAPI();

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
    installationItems,
    migrationItems,
    pluginsItems,
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
