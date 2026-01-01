import {
  computed,
  toRef,
} from "vue";

import {
  isFunction,
} from "lodash-es";

export default function TextsAPI(props, {
  currentItem = computed(() => 1),
  maxItems = computed(() => 1),
}) {
  const texts = toRef(props, "texts");

  const textFirstPage = computed(() => {
    return texts.value.pagesFirstPage || "_A_PAGINATION_FIRST_PAGE_";
  });

  const textLastPage = computed(() => {
    return texts.value.pagesLastPage || "_A_PAGINATION_LAST_PAGE_";
  });

  const textNavigation = computed(() => {
    return texts.value.pagesNavigation || "_A_PAGINATION_NAVIGATION_";
  });

  const textNextPage = computed(() => {
    return texts.value.pagesNextPage || "_A_PAGINATION_NEXT_PAGE_";
  });

  const textPreviousPage = computed(() => {
    return texts.value.pagesPreviousPage || "_A_PAGINATION_PREVIOUS_PAGE_";
  });

  const textMobile = computed(() => {
    if (isFunction(texts.value.pagesMobile)) {
      return texts.value.pagesMobile({
        currentPage: currentItem.value,
        allPages: maxItems.value,
      });
    }

    return texts.value.pagesMobile || "_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_";
  });

  const isTextToPageFunction = computed(() => {
    return isFunction(texts.value.pagesToPage);
  });

  const textToPage = computed(() => {
    return texts.value.pagesToPage || "_A_PAGINATION_TO_PAGE_{{page}}_";
  });

  const getTextToPage = ({ page }) => {
    if (isTextToPageFunction.value) {
      return texts.value.pagesToPage({ page });
    }

    return undefined;
  };

  return {
    getTextToPage,
    isTextToPageFunction,
    textFirstPage,
    textLastPage,
    textMobile,
    textNavigation,
    textNextPage,
    textPreviousPage,
    textToPage,
  };
}
