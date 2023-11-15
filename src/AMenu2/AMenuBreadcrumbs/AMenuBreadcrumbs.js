import {
  h,
} from "vue";

import AButton from "../../AButton/AButton";
import ATranslation from "../../ATranslation/ATranslation";
import EventsAPI from "./compositionAPI/EventsAPI";

import ItemsAPI from "./compositionAPI/ItemsAPI";

export default {
  name: "AMenuBreadcrumbs",
  props: {
    breadcrumbsLinkClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    isBreadcrumbsTruncated: {
      type: Boolean,
      required: true,
    },
    isSearchActive: {
      type: Boolean,
      required: true,
    },
    isPanelMain: {
      type: Boolean,
      required: false,
    },
    dataKeyById: {
      type: Object,
      required: true,
    },
    panelParentsOpen: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const {
      breadcrumbsItems,
    } = ItemsAPI(props);

    const {
      goBack,
      goBackKeydown,
    } = EventsAPI();

    return {
      breadcrumbsItems,
      goBack,
      goBackKeydown,
    };
  },
  render() {
    if (this.isSearchActive || this.isPanelMain) {
      return "";
    }

    if (!this.isBreadcrumbsTruncated) {
      return h(ATranslation, {
        ariaLabel: "_A_MENU_2_BREADCRUMB_",
        class: "a_menu_2__breadcrumb a_menu_2__breadcrumb_secondary",
        tag: "nav",
      }, () => [
        h("ul", {
          class: [
            "a_menu_2__breadcrumb__ul",
          ],
        }, [
          this.breadcrumbsItems.map(breadcrumbsItem => {
            const ATTR = breadcrumbsItem.panelParentId ?
              {
                tag: "a",
                class: [
                  "a_menu_2__breadcrumbs__link",
                  this.breadcrumbsLinkClass,
                ],
                role: "button",
                tabindex: 0,
                onClick: () => this.goBack({ parentId: breadcrumbsItem.panelParentId }),
                onKeydown: $event => this.goBackKeydown({ $event, parentId: breadcrumbsItem.panelParentId }),
              } :
              {
                class: "a_menu_2__breadcrumbs__link",
                tag: "strong",
              };
            return h("li", {
              class: "a_menu_2__breadcrumbs__item",
            }, [
              h(AButton, {
                text: breadcrumbsItem.label,
                title: breadcrumbsItem.label,
                ...ATTR,
              }),
            ]);
          }),
        ]),
      ]);
    }
  },
};
