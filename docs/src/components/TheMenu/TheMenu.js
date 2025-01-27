import {
  AMenu,
} from "aloha-vue";

import MenuItemsAPI from "./compositionAPI/MenuItemsAPI";

export default {
  name: "TheMenu",
  components: {
    AMenu,
  },
  setup() {
    const {
      menuItems,
    } = MenuItemsAPI();

    return {
      menuItems,
    };
  },
};
