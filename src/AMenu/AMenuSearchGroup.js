import {
  computed,
  h, toRef,
} from "vue";

import AMenuPanelLink from "./AMenuPanelLink";

import AKeyParent from "../ui/const/AKeyParent";
import AKeyLabel from "../ui/const/AKeyLabel";

import {
  get,
} from "lodash-es";

export default {
  name: "AMenuSearchGroup",
  props: {
    dataKeyById: {
      type: Object,
      required: true,
    },
    groupIndex: {
      type: Number,
      required: true,
    },
    idsSearchVisible: {
      type: Object,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    modelSearch: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  setup(props) {
    const groupIndex = toRef(props, "groupIndex");
    const idsSearchVisible = toRef(props, "idsSearchVisible");
    const items = toRef(props, "items");
    const dataKeyById = toRef(props, "dataKeyById");

    const isGroupVisible = computed(() => {
      return !!idsSearchVisible.value.main[groupIndex.value];
    });

    const labelGroup = computed(() => {
      const itemFirst = items.value[0] || {};
      return get(dataKeyById.value, `${ itemFirst[AKeyParent] }.${ AKeyLabel }`);
    });

    return {
      isGroupVisible,
      labelGroup,
    };
  },
  render() {
    if (this.isGroupVisible) {
      return [
        h("dt", null, [
          this.labelGroup && h("div", {
            class: "a_menu__list_header",
            innerHTML: this.labelGroup,
          })
        ]),
        this.items.map(item => {
          return h(AMenuPanelLink, {
            item,
            isLinkInSearchPanel: true,
            modelSearch: this.modelSearch,
            idsSearchVisible: this.idsSearchVisible,
          });
        }),
      ];
    }
    return "";
  },
};
