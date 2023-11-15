import {
  h,
} from "vue";

import AButton from "../../AButton/AButton";
import AIcon from "../../AIcon/AIcon";
import ALink from "../../ALink/ALink";

import AttributesAPI from "./compositionAPI/AttributesAPI";
import ChildrenAPI from "./compositionAPI/ChildrenAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import LabelAPI from "./compositionAPI/LabelAPI";
import LinkAPI from "./compositionAPI/LinkAPI";
import MainPanelLinkOpenAPI from "./compositionAPI/MainPanelLinkOpenAPI";
import SlotAPI from "./compositionAPI/SlotAPI";
import TitleAPI from "./compositionAPI/TitleAPI";

export default {
  name: "AMenuPanelLink",
  inject: [
    "showCountChildren",
  ],
  props: {
    dataProParentChildren: {
      type: Object,
      required: true,
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
    isLinkInSearchPanel: {
      type: Boolean,
      required: false,
    },
    modelSearch: {
      type: String,
      required: false,
      default: undefined,
    },
    idsSearchVisible: {
      type: Object,
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
      isLinkVisible,
      toLocal,
    } = LinkAPI(props);

    const {
      label,
      labelWithoutFilter,
    } = LabelAPI(props, {
      isLinkVisible,
    });

    const {
      icon,
      iconClassLocal,
      id,
      tabindex,
    } = AttributesAPI(props);

    const {
      isPanelMainLinkOpen,
    } = MainPanelLinkOpenAPI(props, {
      id,
    });

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
      isPanelMainLinkOpen,
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
      isPanelMainLinkOpen,
      isItemLink,
      isLinkDisabled,
      isLinkVisible,
      isTitleHtml,
      label,
      labelWithoutFilter,
      onKeydown,
      openSubMenu,
      tabindex,
      titleLocal,
      titleAttributes,
      toLocal,
    };
  },
  render() {
    if (!this.isLinkVisible) {
      return "";
    }

    return h("li", {
      class: "a_menu_2__listitem",
    }, [
      this.currentSlot && this.$slots[this.currentSlot] ?
        this.$slots[this.currentSlot]({
          item: this.item,
          isPanelOpen: this.isPanelOpen,
          clickLink: this.clickLink,
          openSubMenu: this.openSubMenu,
          onKeydown: this.onKeydown,
          countChildren: this.countChildren,
          label: this.label,
          labelWithoutFilter: this.labelWithoutFilter,
          tabindex: this.tabindex,
        }) :
        this.isItemLink ?
          h(ALink, {
            class: ["a_menu_2__link a_menu_2__link__text_truncated", {
              a_menu_2__link_disabled: this.isLinkDisabled,
            }],
            html: this.label,
            iconClass: this.iconClassLocal,
            iconLeft: this.icon,
            isTitleHtml: this.isTitleHtml,
            tabindex: this.tabindex,
            textAreaHidden: true,
            textClass: "a_menu_2__link__text",
            textScreenReader: this.titleLocal,
            title: this.titleLocal,
            titleAttributes: this.titleAttributes,
            titlePlacement: "right",
            to: this.toLocal,
            onClick: this.clickLink,
          }) :
          h(AButton, {
            class: [
              "a_menu_2__link a_menu_2__link_btn a_menu_2__link__text_truncated",
              {
                a_menu_2__link_open: this.isPanelMainLinkOpen,
              },
            ],
            html: this.label,
            iconClass: this.iconClassLocal,
            iconLeft: this.icon,
            isTitleHtml: this.isTitleHtml,
            role: "button",
            tabindex: this.tabindex,
            tag: "a",
            textAreaHidden: true,
            textClass: "a_menu_2__link__text",
            textScreenReader: this.titleLocal,
            title: this.titleLocal,
            titleAttributes: this.titleAttributes,
            titlePlacement: "right",
            onClick: this.openSubMenu,
            onKeydown: this.onKeydown,
          }, () => [
            h("span", {
              class: "a_menu_2__link__counter aloha_btn__ml_0",
            }, [
              this.showCountChildren && h("span", {
                ariaHidden: true,
              }, this.countChildren),
              h(AIcon, {
                class: "a_menu_2__link__counter__icon",
                icon: "ChevronRight",
              })
            ]),
          ]),
    ]);
  },
};
