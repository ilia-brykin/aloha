import {
  computed,
  h,
  toRef,
  withDirectives,
} from "vue";

import AMenuPanelLink from "./AMenuPanelLink/AMenuPanelLink";

import ASafeHtml from "../directives/ASafeHtml";

import AKeyParent from "../ui/const/AKeyParent";
import AKeyLabel from "../ui/const/AKeyLabel";

import {
  get, isNil,
} from "lodash-es";

export default {
  name: "AMenuSearchGroup",
  props: {
    dataKeyById: {
      type: Object,
      required: true,
    },
    dataProParentChildren: {
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
    const groupIndex = toRef(props, "groupIndex");
    const idsSearchVisible = toRef(props, "idsSearchVisible");
    const items = toRef(props, "items");
    const dataKeyById = toRef(props, "dataKeyById");
    const isSearchBreadcrumbsAll = toRef(props, "isSearchBreadcrumbsAll");

    const isGroupVisible = computed(() => {
      return !!idsSearchVisible.value.main[groupIndex.value];
    });

    const getParentLabels = ({ labels = [], item }) => {
      if (item[AKeyParent]) {
        const PARENT = dataKeyById.value[item[AKeyParent]];
        const LABEL = get(PARENT, AKeyLabel);
        if (!isNil(LABEL)) {
          labels.push(LABEL);
        }
        return getParentLabels({ labels, item: PARENT });
      } 
      return labels;
    };

    const labelsGroup = computed(() => {
      let labels = [];
      const itemFirst = items.value[0] || {};
      if (isSearchBreadcrumbsAll.value) {
        labels = getParentLabels({ labels, item: itemFirst });
      } else {
        const LABEL = get(dataKeyById.value, `${ itemFirst[AKeyParent] }.${ AKeyLabel }`);
        if (!isNil(LABEL)) {
          labels.push(LABEL);
        }
      }
      return labels;
    });

    const hasLabelsGroup = computed(() => {
      return labelsGroup.value.length > 0;
    });

    return {
      hasLabelsGroup,
      isGroupVisible,
      labelsGroup,
    };
  },
  render() {
    if (this.isGroupVisible) {
      return [
        this.hasLabelsGroup ?
          this.labelsGroup.map(label => {
            return h("dt", null, [
              withDirectives(h("div", {
                class: "a_menu__list_header a_menu__list_header_search",
              }), [
                [ASafeHtml, label],
              ]),
            ]);
          }) :
          h("dt"),
        this.items.map(item => {
          return h(AMenuPanelLink, {
            item,
            dataProParentChildren: this.dataProParentChildren,
            isLinkInSearchPanel: true,
            modelSearch: this.modelSearch,
            idsSearchVisible: this.idsSearchVisible,
          }, this.$slots);
        }),
      ];
    }
    return "";
  },
};
