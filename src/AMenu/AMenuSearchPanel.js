import {
  computed,
  h,
  toRef,
} from "vue";

import AMenuSearchGroup from "./AMenuSearchGroup";

import {
  isEmpty,
} from "lodash-es";

export default {
  name: "AMenuSearchPanel",
  props: {
    dataKeyById: {
      type: Object,
      required: true,
    },
    dataProParentChildren: {
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
    isSearchBreadcrumbsAll: {
      type: Boolean,
      required: false,
      default: false,
    },
    modelSearch: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  setup(props) {
    const idsSearchVisible = toRef(props, "idsSearchVisible");
    const isSearchActive = toRef(props, "isSearchActive");

    const isNoneFound = computed(() => {
      if (isSearchActive.value) {
        return isEmpty(idsSearchVisible.value.rest);
      }
      return false;
    });

    return {
      isNoneFound,
    };
  },
  render() {
    if (this.isSearchActive) {
      return h("div", {
        class: "a_menu__panel a_menu__panel_opened a_menu__panel_search",
      }, [
        this.isNoneFound ? 
          h("div", {
            class: "a_panel__none_found",
          }, "Keine Ergebnisse gefunden.") :
          h("dl", null, [
            this.dataProParentList.map((items, groupIndex) => {
              return h(AMenuSearchGroup, {
                items,
                key: groupIndex,
                groupIndex,
                dataKeyById: this.dataKeyById,
                dataProParentChildren: this.dataProParentChildren,
                idsSearchVisible: this.idsSearchVisible,
                isSearchBreadcrumbsAll: this.isSearchBreadcrumbsAll,
                modelSearch: this.modelSearch,
              }, this.$slots);
            }),
          ]),
      ]);
    }
    return "";
  },
};
