import {
  h,
  withDirectives,
} from "vue";

import ASafeHtml from "../../directives/ASafeHtml";

import ATabAPI from "../compositionAPI/ATabAPI";

export default {
  name: "ATabsContent",
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
  },
  setup(props) {
    const {
      idForContent,
      idLocal,
      isActive,
    } = ATabAPI(props);

    return {
      idForContent,
      idLocal,
      isActive,
    };
  },
  render() {
    let content = "";
    if (this.tab.slotContent && this.$slots[this.tab.slotContent]) {
      content = this.$slots[this.tab.slotContent]({
        tab: this.tab,
        tabIndex: this.index,
        isActive: this.isActive,
        indexActiveTab: this.indexActiveTabLocal,
        contentId: this.idForContent,
        parentId: this.parentId,
      });
    } else if (this.$slots.content) {
      content = this.$slots.content({
        tab: this.tab,
        tabIndex: this.index,
        isActive: this.isActive,
        indexActiveTab: this.indexActiveTabLocal,
        contentId: this.idForContent,
        parentId: this.parentId,
      });
    } else if (this.tab.content) {
      content = withDirectives(h("div"), [
        [ASafeHtml, this.tab.content],
      ]);
    }

    return h("div", {
      id: this.idForContent,
      role: "tabpanel",
      class: ["a_tabs__content", {
        a_tabs__content_show: this.isActive,
      }],
      ariaLabelledby: this.idLocal,
    }, [
      content,
    ]);
  },
};
