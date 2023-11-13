import {
  computed,
  h,
  toRef,
} from "vue";

import ATranslation from "../ATranslation/ATranslation";

import AMenuBreadcrumbsItem from "./AMenuBreadcrumbsItem";

import AKeyLabel from "../const/AKeyLabel";
import {
  forEach,
  get,
} from "lodash-es";


export default {
  name: "AMenuBreadcrumbs",
  props: {
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
    const dataKeyById = toRef(props, "dataKeyById");

    const panelParentsOpen = toRef(props, "panelParentsOpen");
    const isBreadcrumbsTruncated = toRef(props, "isBreadcrumbsTruncated");

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
      if (isBreadcrumbsTruncated.value) {
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
    if (this.isPanelMain) {
      return h("div", {
        class: "a_menu_2__breadcrumb a_menu_2__breadcrumb_main",
      }, [
        h(ATranslation, {
          tag: "strong",
          text: "_A_MENU_2_MAIN_MENU_",
        }),
      ]);
    }
    return h("div", {
      class: "a_menu_2__breadcrumb a_menu_2__breadcrumb_secondary"
    }, [
      this.breadcrumbsItems.map(breadcrumbsItem => {
        return h(AMenuBreadcrumbsItem, {
          label: breadcrumbsItem.label,
          panelParentId: breadcrumbsItem.panelParentId,
        });
      }),
    ]);
  },
};
