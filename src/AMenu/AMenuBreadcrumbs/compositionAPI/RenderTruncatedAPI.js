import {
  computed,
  ref,
} from "vue";

import {
  aLast,
} from "../../../utils/utilsArray";


export default function RenderTruncatedAPI({
  breadcrumbsItems = computed(() => []),
  breadcrumbsTruncatedOffset = ref(0),
}) {
  const breadcrumbsItemsDropdown = ref([]);
  const breadcrumbsItemsTruncated = ref([]);
  const breadcrumbsWidth = ref(0);
  const indexRenderedItem = ref(undefined);
  const isRenderedAll = ref(false);
  const itemsWidth = ref(0);
  const itemsWidthList = ref([]);

  const addItemInBreadcrumbsItemsTruncated = () => {
    if (indexRenderedItem.value < 0) {
      isRenderedAll.value = true;
      return;
    }
    breadcrumbsItemsTruncated.value.unshift(breadcrumbsItems.value[indexRenderedItem.value]);
    indexRenderedItem.value--;
  };

  const addDropdownItems = () => {
    breadcrumbsItemsDropdown.value = breadcrumbsItems.value.slice(0, indexRenderedItem.value + 1);
    isRenderedAll.value = true;
  };

  const removeItem = () => {
    if (breadcrumbsItemsTruncated.value.length <= 1 ||
      (itemsWidth.value + breadcrumbsTruncatedOffset.value <= breadcrumbsWidth.value)) {
      addDropdownItems();
      return;
    }
    breadcrumbsItemsTruncated.value.splice(0, 1);
    indexRenderedItem.value++;
    itemsWidth.value -= aLast(itemsWidthList.value);
    itemsWidthList.value.pop();
    removeItem();
  };

  const renderItem = el => {
    const OFFSET_WIDTH = el.offsetWidth;
    itemsWidth.value += OFFSET_WIDTH;
    itemsWidthList.value.push(OFFSET_WIDTH);
    if (itemsWidth.value >= breadcrumbsWidth.value) {
      removeItem();
    } else {
      addItemInBreadcrumbsItemsTruncated();
    }
  };

  const renderParent = el => {
    indexRenderedItem.value = breadcrumbsItems.value.length - 1;
    addItemInBreadcrumbsItemsTruncated();
    breadcrumbsWidth.value = el.offsetWidth;
  };

  return {
    breadcrumbsItemsDropdown,
    breadcrumbsItemsTruncated,
    isRenderedAll,
    renderItem,
    renderParent,
  };
}
