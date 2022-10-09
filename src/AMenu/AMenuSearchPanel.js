import {
  h,
} from "vue";

import AMenuSearchGroup from "./AMenuSearchGroup";

export default {
  name: "AMenuSearchPanel",
  props: {
    dataKeyById: {
      type: Object,
      required: true,
    },
    dataProParentList: {
      type: Array,
      required: true,
    },
    idsSearchVisible: {
      type: Object,
      required: true,
    },
    isSearchActive: {
      type: Boolean,
      required: true,
    },
    modelSearch: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  render() {
    if (this.isSearchActive) {
      return h("div", {
        class: "a_menu__panel a_menu__panel_opened a_menu__panel_search",
      }, [
        h("dl", null, [
          this.dataProParentList.map((items, groupIndex) => {
            return h(AMenuSearchGroup, {
              items,
              key: groupIndex,
              groupIndex,
              dataKeyById: this.dataKeyById,
              idsSearchVisible: this.idsSearchVisible,
              modelSearch: this.modelSearch,
            });
          }),
        ]),
      ]);
    }
    return "";
  },
};
