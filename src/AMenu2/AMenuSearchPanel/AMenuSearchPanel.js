import {
  h,
  provide,
} from "vue";

import AMenuSearchPanelBreadcrumbs from "../AMenuSearchPanelBreadcrumbs/AMenuSearchPanelBreadcrumbs";
import ATranslation from "../../ATranslation/ATranslation";

import NoneFoundAPI from "./compositionAPI/NoneFoundAPI";
import TextAPI from "./compositionAPI/TextAPI";

import AKeyId from "../../const/AKeyId";

export default {
  name: "AMenuSearchPanel",
  props: {
    breadcrumbsLinkClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    breadcrumbsTruncatedDropdownProps: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    dataProParentChildren: {
      type: Object,
      required: true,
    },
    isSearchActive: {
      type: Boolean,
      required: true,
    },
    isSearchBreadcrumbsTruncated: {
      type: Boolean,
      required: false,
      default: false,
    },
    itemsWithSearch: {
      type: Array,
      required: true,
    },
    menuId: {
      type: String,
      required: true,
    },
    modelSearch: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  setup(props) {
    const {
      isNoneFound,
    } = NoneFoundAPI(props);

    const {
      textLocal,
    } = TextAPI(props, {
      isNoneFound,
    });

    provide("isPanelMain", false);
    provide("isChildPanelOpen", false);

    return {
      isNoneFound,
      textLocal,
    };
  },
  render() {
    if (this.isSearchActive) {
      return h("div", {
        class: "a_menu_2__panels__main a_menu_2__panel_search",
      }, [
        h("div", {
          class: "a_menu_2__navbar_top_sub",
        }, [
          h(ATranslation, {
            class: "a_menu_2__navbar_top_sub__text",
            tag: "strong",
            text: this.textLocal,
            extra: {
              count: this.itemsWithSearch.length,
            },
          }),
        ]),
        !this.isNoneFound && h("div", {
          class: "a_vertical_scroll",
        }, [
          h("div", {
            class: "a_scroll_content",
          }, [
            h("ul", {
              class: "a_menu_2__listview",
            }, [
              this.itemsWithSearch.map(item => {
                return h(AMenuSearchPanelBreadcrumbs, {
                  key: item[AKeyId],
                  breadcrumbsLinkClass: this.breadcrumbsLinkClass,
                  breadcrumbsTruncatedDropdownProps: this.breadcrumbsTruncatedDropdownProps,
                  dataProParentChildren: this.dataProParentChildren,
                  item,
                  menuId: this.menuId,
                  modelSearch: this.modelSearch,
                }, this.$slots);
              }),
            ]),
          ]),
        ]),
      ]);
    }

    return "";
  },
};
