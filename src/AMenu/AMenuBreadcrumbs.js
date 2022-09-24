import {
  computed,
  h,
  toRef,
} from "vue";

import AMenuBreadcrumbsItem from "./AMenuBreadcrumbsItem";

import {
  forEach,
  get,
} from "lodash-es";


export default {
  name: "AMenuBreadcrumbs",
  props: {
    itemsKeyById: {
      type: Object,
      required: true,
    },
    isBreadcrumbsAll: {
      type: Boolean,
      required: true,
    },
    keyLabel: {
      type: String,
      required: true,
    },
    panelParentsOpen: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const keyLabel = toRef(props, "keyLabel");
    const itemsKeyById = toRef(props, "itemsKeyById");

    const panelParentsOpen = toRef(props, "panelParentsOpen");
    const isBreadcrumbsAll = toRef(props, "isBreadcrumbsAll");

    const setBreadcrumbsItem = panelParentId => {
      return {
        label: get(itemsKeyById.value, `${ panelParentId }.${ keyLabel.value }`),
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
    return h("div", {
      class: "a_menu__breadcrumbs"
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
