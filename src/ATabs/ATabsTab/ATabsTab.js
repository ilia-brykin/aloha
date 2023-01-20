import {
  h,
  withDirectives,
} from "vue";

import ATooltip from "../../ATooltip/ATooltip";

import ASafeHtml from "../../directives/ASafeHtml";

import ATabAPI from "../compositionAPI/ATabAPI";
import AttributesAPI from "./compositionAPI/AttributesAPI";
import ChangeAPI from "./compositionAPI/ChangeAPI";
import placements from "../../const/placements";

export default {
  name: "ATabsTab",
  props: {
    parentId: {
      type: String,
      required: true,
    },
    tab: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    indexActiveTabLocal: {
      type: Number,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    titlePlacement: {
      type: String,
      required: false,
      default: "top",
      validator: placement => placements.indexOf(placement) !== -1,
    },
  },
  emits: [
    "changeTab",
  ],
  setup(props, context) {
    const {
      idForContent,
      idLocal,
      isActive,
    } = ATabAPI(props);

    const {
      isDisabled,
      tabindexLocal,
    } = AttributesAPI(props);

    const {
      changeTabLocal,
      keydownTab,
    } = ChangeAPI(props, context, {
      isDisabled,
    });

    return {
      changeTabLocal,
      idForContent,
      idLocal,
      isActive,
      isDisabled,
      keydownTab,
      tabindexLocal,
    };
  },
  render() {
    return h(ATooltip, {
      tag: "li",
      placement: this.titlePlacement,
      isHide: !this.tab.title,
      class: [
        "a_tabs__list__item",
        this.tab.classLi,
      ],
    }, {
      default: () => [
        h("a", {
          id: this.idLocal,
          class: ["a_tabs__list__link", this.tab.class, {
            a_tabs__list__link_active: this.isActive,
            a_tabs__list__link_disabled: this.isDisabled,
          }],
          role: "tab",
          ariaDisabled: this.tab.disabled,
          ariaControls: this.idForContent,
          ariaSelected: this.isActive,
          tabindex: this.tabindexLocal,
          onClick: this.changeTabLocal,
          onKeydown: this.keydownTab,
        }, [
          this.tab.slotTab && this.$slots[this.tab.slotTab] ?
            this.$slots[this.tab.slotTab]({
              tab: this.tab,
              tabIndex: this.index,
              isActive: this.isActive,
              isDisabled: this.isDisabled,
              indexActiveTab: this.indexActiveTabLocal,
              tabId: this.idLocal,
              parentId: this.parentId,
            }) :
            withDirectives(h("span"), [
              [ASafeHtml, this.tab.label],
            ]),
        ]),
      ],
      title: () => withDirectives(h("div"), [
        [ASafeHtml, this.tab.title],
      ])
    });
  },
};
