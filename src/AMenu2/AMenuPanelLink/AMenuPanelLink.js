import {
  h,
  withDirectives,
} from "vue";

import AIcon from "../../AIcon/AIcon";
import ATooltip from "../../ATooltip/ATooltip";
import ATranslation from "../../ATranslation/ATranslation";

import ASafeHtml from "../../directives/ASafeHtml";

import AttributesAPI from "./compositionAPI/AttributesAPI";
import TitleAPI from "./compositionAPI/TitleAPI";
import MainPanelLinkActiveAPI from "./compositionAPI/MainPanelLinkActiveAPI";
import SlotAPI from "./compositionAPI/SlotAPI";
import LabelAPI from "./compositionAPI/LabelAPI";
import ChildrenAPI from "./compositionAPI/ChildrenAPI";
import LinkAPI from "./compositionAPI/LinkAPI";
import EventsAPI from "./compositionAPI/EventsAPI";

export default {
  name: "AMenuPanelLink",
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
      id,
      tabindex,
    } = AttributesAPI(props);

    const {
      isPanelMainLinkActive,
    } = MainPanelLinkActiveAPI(props, {
      id,
    });

    const {
      countChildren,
    } = ChildrenAPI(props, {
      id,
    });

    const {
      isTitleHtml,
      title,
    } = TitleAPI(props, {
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
      isPanelMainLinkActive,
      isLinkDisabled,
      isLinkVisible,
      isTitleHtml,
      label,
      labelWithoutFilter,
      onKeydown,
      openSubMenu,
      tabindex,
      title,
      toLocal,
    };
  },
  render() {
    if (!this.isLinkVisible) {
      return "";
    }
    const ICON_AND_TEXT = [
      this.icon && h(AIcon, {
        class: ["a_menu_2__link__icon", this.item.iconClass],
        icon: this.icon,
      }),
      h("span", {
        class: "a_menu_2__link__text",
      }, [
        this.title && h("span", {
          class: "a_position_absolute_all",
          title: this.title,
          ariaHidden: true,
        }),
        withDirectives(h("span"), [
          [ASafeHtml, this.label],
        ]),
      ]),
    ];

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
        this.item.to ?
          h(ATooltip, {
            tag: "RouterLink",
            placement: "right",
            minWidth: this.item.titleHtmlMinWidth,
            width: this.item.titleHtmlWidth,
            maxWidth: this.item.titleHtmlMaxWidth,
            isHide: !this.isTitleHtml,
            class: ["a_menu_2__link a_menu_2__link__text_truncated", {
              a_menu_2__link_disabled: this.isLinkDisabled,
              a_menu_2__link_active: this.isPanelMainLinkActive,
            }],
            to: this.toLocal,
            tabindex: this.tabindex,
            onClick: this.clickLink,
          }, {
            default: () => ICON_AND_TEXT,
            title: () => withDirectives(h("div"), [
              [ASafeHtml, this.item.titleHtml],
            ])
          }) :
          h(ATranslation, {
            tag: "a",
            class: [
              "a_menu_2__link a_menu_2__link_btn a_menu_2__link__text_truncated",
              {
                a_menu_2__link_active: this.isPanelMainLinkActive,
              },
            ],
            ariaLabel: "_OPEN_SUBMENU_",
            role: "button",
            tabindex: this.tabindex,
            onClick: this.openSubMenu,
            onKeydown: this.onKeydown,
          }, () => [
            h("span", {
              class: "a_menu_2__link__counter",
            }, [
              h("span", {
                ariaHidden: true, // TODO: ariaLabel
              }, this.countChildren),
              h(AIcon, {
                class: "a_menu_2__link__counter__icon",
                icon: "ChevronRight",
              })
            ]),
            ...ICON_AND_TEXT,
          ]),
    ]);
  },
};
