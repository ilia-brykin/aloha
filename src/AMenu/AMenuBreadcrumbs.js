import {
  computed,
  h,
  toRef,
} from "vue";

import AMenuBreadcrumbsItem from "./AMenuBreadcrumbsItem";

import {
  forEach,
  get,
  keyBy,
} from "lodash-es";


export default {
  name: "AMenuBreadcrumbs",
  props: {
    items: {
      type: Array,
      required: true,
    },
    isBreadcrumbsAll: {
      type: Boolean,
      required: true,
    },
    keyId: {
      type: String,
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
    const keyId = toRef(props, "keyId");
    const keyLabel = toRef(props, "keyLabel");
    const items = toRef(props, "items");
    const itemsKeyById = computed(() => {
      return keyBy(items.value, keyId.value);
    });

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
      itemsKeyById,
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
