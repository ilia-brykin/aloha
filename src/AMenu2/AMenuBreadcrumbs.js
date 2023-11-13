import {
  computed,
  h,
  toRef,
} from "vue";

import AMenuBreadcrumbsItem from "./AMenuBreadcrumbsItem";

import AKeyLabel from "../const/AKeyLabel";
import {
  forEach,
  get,
} from "lodash-es";


export default {
  name: "AMenuBreadcrumbs",
  props: {
    isBreadcrumbsAll: {
      type: Boolean,
      required: true,
    },
    isBreadcrumbsLinkTruncated: {
      type: Boolean,
      required: true,
    },
    isSearchActive: {
      type: Boolean,
      required: true,
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
    const dataKeyById = toRef(props, "dataKeyById");

    const panelParentsOpen = toRef(props, "panelParentsOpen");
    const isBreadcrumbsAll = toRef(props, "isBreadcrumbsAll");

    const setBreadcrumbsItem = panelParentId => {
      return {
        label: get(dataKeyById.value, `${ panelParentId }.${ AKeyLabel }`),
        panelParentId,
      };
    };

    const breadcrumbsItems = computed(() => {
      if (!panelParentsOpen.value.length) {
        return [];
      }
      const BREADCRUMBS_ITEMS = [];
      if (isBreadcrumbsAll.value) {
        forEach(panelParentsOpen.value, panelParentId => {
          BREADCRUMBS_ITEMS.push(setBreadcrumbsItem(panelParentId));
        });
      } else {
        BREADCRUMBS_ITEMS.push(setBreadcrumbsItem(panelParentsOpen.value[panelParentsOpen.value.length - 1]));
      }
      return BREADCRUMBS_ITEMS;
    });

    return {
      breadcrumbsItems,
    };
  },
  render() {
    if (this.isSearchActive) {
      return "";
    }
    return h("div", {
      class: "a_menu_2__breadcrumbs"
    }, [
      this.breadcrumbsItems.map(breadcrumbsItem => {
        return h(AMenuBreadcrumbsItem, {
          label: breadcrumbsItem.label,
          panelParentId: breadcrumbsItem.panelParentId,
          isBreadcrumbsLinkTruncated: this.isBreadcrumbsLinkTruncated,
        });
      }),
    ]);
  },
};
