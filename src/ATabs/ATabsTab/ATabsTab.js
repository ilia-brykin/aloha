import {
  h,
} from "vue";

import AElement from "../../AElement/AElement";
import ATranslation from "../../ATranslation/ATranslation";

import ATabAPI from "../compositionAPI/ATabAPI";
import AttributesAPI from "./compositionAPI/AttributesAPI";
import ChangeAPI from "./compositionAPI/ChangeAPI";
import DisabledAPI from "./compositionAPI/DisabledAPI";
import LabelAPI from "./compositionAPI/LabelAPI";
import TitleAPI from "./compositionAPI/TitleAPI";

import placements from "../../const/placements";

export default {
  name: "ATabsTab",
  props: {
    activeTabIdLocal: {
      type: [String, Number],
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    index: {
      type: Number,
      required: true,
    },
    isTitleHtml: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    keyDisabled: {
      type: String,
      required: false,
      default: undefined,
    },
    keyId: {
      type: String,
      required: false,
      default: undefined,
    },
    keyLabel: {
      type: String,
      required: false,
      default: "label",
    },
    keyTitle: {
      type: String,
      required: false,
      default: "title",
    },
    parentId: {
      type: String,
      required: true,
    },
    tab: {
      type: Object,
      required: true,
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
      tabIdLocal,
    } = ATabAPI(props);

    const {
      isDisabled,
    } = DisabledAPI(props);

    const {
      tabindexLocal,
    } = AttributesAPI({
      isDisabled,
    });

    const {
      changeTabLocal,
      keydownTab,
    } = ChangeAPI(props, context, {
      isDisabled,
      tabIdLocal,
    });

    const {
      labelLocal,
    } = LabelAPI(props);

    const {
      titleLocal,
    } = TitleAPI(props);

    return {
      changeTabLocal,
      idForContent,
      idLocal,
      isActive,
      isDisabled,
      keydownTab,
      labelLocal,
      tabindexLocal,
      tabIdLocal,
      titleLocal,
    };
  },
  render() {
    let tab = "";
    if (this.tab.slotTab && this.$slots[this.tab.slotTab]) {
      tab = this.$slots[this.tab.slotTab]({
        activeTabId: this.activeTabIdLocal,
        contentId: this.idForContent,
        index: this.index,
        isActive: this.isActive,
        parentId: this.parentId,
        tab: this.tab,
        tabId: this.tabIdLocal,
      });
    } else if (this.$slots.tab) {
      tab = this.$slots.tab({
        activeTabId: this.activeTabIdLocal,
        contentId: this.idForContent,
        index: this.index,
        isActive: this.isActive,
        parentId: this.parentId,
        tab: this.tab,
        tabId: this.tabIdLocal,
      });
    } else if (this.labelLocal) {
      tab = h(ATranslation, {
        html: this.labelLocal,
        tag: "span",
      });
    }

    return h("li", {
      class: [
        "a_tabs__list__item",
        this.tab.classLi,
      ],
    }, [
      h(AElement, {
        id: this.idLocal,
        "aria-controls": this.idForContent,
        ariaDisabled: this.isDisabled,
        ariaSelected: this.isActive,
        class: [
          "a_tabs__list__link",
          this.tab.class,
          {
            a_tabs__list__link_active: this.isActive,
            a_tabs__list__link_disabled: this.isDisabled,
          },
        ],
        classDefault: "",
        isTitleHtml: this.isTitleHtml,
        role: "tab",
        tabindex: this.tabindexLocal,
        tag: "a",
        titlePlacement: this.titlePlacement,
        type: "button",
        title: this.titleLocal,
        onClick: this.changeTabLocal,
        onKeydown: this.keydownTab,
      }, () => [
        tab,
      ]),
    ]);
  },
};
