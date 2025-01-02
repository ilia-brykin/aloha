import {
  h,
} from "vue";

import AButton from "../../AButton/AButton";
import AIcon from "../../AIcon/AIcon";
import ALink from "../../ALink/ALink";

import ActiveAPI from "./compositionAPI/ActiveAPI";
import AttributesAPI from "./compositionAPI/AttributesAPI";
import ChildrenAPI from "./compositionAPI/ChildrenAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import IdAPI from "./compositionAPI/IdAPI";
import LabelAPI from "./compositionAPI/LabelAPI";
import LinkAPI from "./compositionAPI/LinkAPI";
import LinkOpenAPI from "./compositionAPI/LinkOpenAPI";
import SlotAPI from "./compositionAPI/SlotAPI";
import TabindexAPI from "./compositionAPI/TabindexAPI";
import TitleAPI from "./compositionAPI/TitleAPI";

export default {
  name: "AMenuPanelLink",
  inject: [
    "isPanelMain",
    "showCountChildren",
  ],
  props: {
    dataProParentChildren: {
      type: Object,
      required: true,
    },
    idsSearchVisible: {
      type: Object,
      required: false,
      default: undefined,
    },
    isLinkInSearchPanel: {
      type: Boolean,
      required: false,
    },
    isPanelOpen: {
      type: Boolean,
      required: false,
    },
    item: {
      type: Object,
      required: true,
    },
    keyIcon: {
      type: String,
      required: false,
      default: undefined,
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
      currentSlot,
    } = SlotAPI(props);

    const {
      isItemLink,
      isLinkDisabled,
      toLocal,
    } = LinkAPI(props);

    const {
      label,
      labelWithoutFilter,
    } = LabelAPI(props);

    const {
      icon,
      iconClassLocal,
      id,
    } = AttributesAPI(props);

    const {
      isLinkActive,
    } = ActiveAPI(props, {
      id,
    });

    const {
      linkId,
    } = IdAPI(props, {
      id,
    });

    const {
      isLinkOpen,
      isLinkOpenPanelMain,
      isLinkOpenPanelSecondaryMenuClose,
    } = LinkOpenAPI(props, {
      id,
    });

    const {
      tabindex,
    } = TabindexAPI(props);

    const {
      countChildren,
    } = ChildrenAPI(props, {
      id,
    });

    const {
      isTitleHtml,
      titleLocal,
      titleAttributes,
    } = TitleAPI(props, {
      isItemLink,
      isLinkOpenPanelMain,
      isLinkOpenPanelSecondaryMenuClose,
      labelWithoutFilter,
    });

    const {
      clickLink,
      onKeydown,
      openSubMenu,
    } = EventsAPI(props, {
      id,
    });

    return {
      clickLink,
      countChildren,
      currentSlot,
      icon,
      iconClassLocal,
      isItemLink,
      isLinkActive,
      isLinkDisabled,
      isLinkOpen,
      isTitleHtml,
      label,
      labelWithoutFilter,
      linkId,
      onKeydown,
      openSubMenu,
      tabindex,
      titleAttributes,
      titleLocal,
      toLocal,
    };
  },
  render() {
    return h("li", {
      class: "a_menu_2__listitem",
    }, [
      this.isLinkInSearchPanel && h("span", {
        class: "a_menu_2__breadcrumbs__item__divider",
        ariaHidden: true,
      }, "/"),
      this.currentSlot && this.$slots[this.currentSlot] ?
        this.$slots[this.currentSlot]({
          id: this.linkId,
          item: this.item,
          clickLink: this.clickLink,
          countChildren: this.countChildren,
          isLinkActive: this.isLinkActive,
          isLinkOpen: this.isLinkOpen,
          isPanelOpen: this.isPanelOpen,
          isPanelMain: this.isPanelMain,
          label: this.label,
          labelWithoutFilter: this.labelWithoutFilter,
          onKeydown: this.onKeydown,
          openSubMenu: this.openSubMenu,
          tabindex: this.tabindex,
        }) :
        this.isItemLink ?
          h(ALink, {
            id: this.linkId,
            class: ["a_menu_2__link a_menu_2__link__text_truncated", {
              a_menu_2__link_disabled: this.isLinkDisabled,
              a_menu_2__link_active: this.isLinkActive,
              a_menu_2__link_panel_main: this.isPanelMain,
            }],
            html: this.label,
            iconClass: this.iconClassLocal,
            iconLeft: this.icon,
            isTitleHtml: this.isTitleHtml,
            tabindex: this.tabindex,
            textAriaHidden: true,
            textClass: "a_menu_2__link__text aloha_element__ml_0",
            textScreenReader: this.titleLocal,
            title: this.titleLocal,
            titleAttributes: this.titleAttributes,
            titlePlacement: "right",
            to: this.toLocal,
            onClick: this.clickLink,
          }) :
          h(AButton, {
            id: this.linkId,
            class: [
              "a_menu_2__link a_menu_2__link_btn a_menu_2__link__text_truncated",
              {
                a_menu_2__link_open: this.isLinkOpen,
                a_menu_2__link_active: this.isLinkActive,
                a_menu_2__link_panel_main: this.isPanelMain,
              },
            ],
            html: this.label,
            iconClass: this.iconClassLocal,
            iconLeft: this.icon,
            isTitleHtml: this.isTitleHtml,
            role: "button",
            tabindex: this.tabindex,
            tag: "a",
            textAriaHidden: true,
            textClass: "a_menu_2__link__text aloha_element__ml_0",
            textScreenReader: this.titleLocal,
            title: this.titleLocal,
            titleAttributes: this.titleAttributes,
            titlePlacement: "right",
            onClick: this.openSubMenu,
            onKeydown: this.onKeydown,
          }, () => [
            h("span", {
              class: "a_menu_2__link__counter aloha_element__ml_0",
            }, [
              this.showCountChildren && h("span", {
                ariaHidden: true,
              }, this.countChildren),
              h(AIcon, {
                class: "a_menu_2__link__counter__icon",
                icon: "MenuChevronRight",
              })
            ]),
          ]),
    ]);
  },
};
