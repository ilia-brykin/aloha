# APagination (Pagination)

The **APagination** component renders navigation for large data sets. It combines per-page controls, desktop and mobile layouts, and emits **update:limit** / **update:offset** events so the consuming view can stay in sync with the current page.

## Basic usage

```html
<div 
  class="page_pagination__items"
>
  <div 
    v-for="blockNumber in blockNumbers"
    :key="blockNumber"
    class="page_pagination__item"
  >
    <span class="page_pagination__item_index">{{ blockNumber }}</span>
  </div>
</div>
<a-pagination
  :limit="limit"
  :limits-per-page="limitsPerPage"
  :max-pages="maxPages"
  :offset="offset"
  :rows-length="rowsLength"
  :total-count="totalCount"
  @update:limit="updateLimit"
  @update:offset="updateOffset"
></a-pagination>
```

```js
import {
  computed,
  ref,
} from "vue";
import {
  APagination,
} from "aloha-vue";
    
export default {
  name: "PagePaginationBasic",
  components: {
    APagination,
  },
  setup() {
    const totalCount = ref(87);
    const limit = ref(10);
    const maxPages = ref(5);
    const offset = ref(0);
    
    const limitsPerPage = [
      "10",
      "25",
      "50",
      "100",
    ];
    
    const rowsLength = computed(() => {
      const remaining = totalCount.value - offset.value;
    
      if (remaining <= 0) {
        return 0;
      }
    
      return Math.min(remaining, limit.value);
    });
    
    const blockNumbers = computed(() => Array.from(
      {
        length: rowsLength.value,
      },
      (_, index) => offset.value + index + 1,
    ));
    
    const updateLimit = value => {
      limit.value = value;
      offset.value = 0;
    };
    
    const updateOffset = value => {
      offset.value = value;
    };
    
    return {
      blockNumbers,
      totalCount,
      limit,
      limitsPerPage,
      maxPages,
      offset,
      rowsLength,
      updateLimit,
      updateOffset,
    };
  },
};
```

## Limits per page

Use the ordered multiselect to configure the values passed to **limits-per-page**. The selection controls which per-page limits (5, 10, 25, 50, 75, 100) are available.

*props: `limits-per-page`*

```html
<a-multiselect-ordered
  v-model="limitsPerPageModel"
  :data="limitsPerPageOptions"
  :is-data-simple-array="true"
  class="a_mb_4"
  label="_A_PAGINATION_LIMITS_PER_PAGE_LABEL_"
></a-multiselect-ordered>
<div 
  class="page_pagination__items"
>
  <div 
    v-for="blockNumber in blockNumbers"
    :key="blockNumber"
    class="page_pagination__item"
  >
    <span class="page_pagination__item_index">{{ blockNumber }}</span>
  </div>
</div>
<a-pagination
  :limit="limit"
  :limits-per-page="limitsPerPageModel"
  :max-pages="maxPages"
  :offset="offset"
  :rows-length="rowsLength"
  :total-count="totalCount"
  @update:limit="updateLimit"
  @update:offset="updateOffset"
></a-pagination>
```

```js
import {
  computed,
  ref,
} from "vue";
import {
  AMultiselectOrdered,
  APagination,
} from "aloha-vue";
    
export default {
  name: "PagePaginationLimitsPerPage",
  components: {
    AMultiselectOrdered,
    APagination,
  },
  setup() {
    const totalCount = ref(143);
    const limit = ref(10);
    const maxPages = ref(5);
    const offset = ref(0);
    const limitsPerPageOptions = [
      "5",
      "10",
      "25",
      "50",
      "75",
      "100",
    ];
    const limitsPerPageModel = ref([...limitsPerPageOptions]);

    const rowsLength = computed(() => {
      const remaining = totalCount.value - offset.value;

      if (remaining <= 0) {
        return 0;
      }

      return Math.min(remaining, limit.value);
    });
    
    const blockNumbers = computed(() => Array.from(
      {
        length: rowsLength.value,
      },
      (_, index) => offset.value + index + 1,
    ));
    
    const updateLimit = value => {
      limit.value = value;
      offset.value = 0;
    };
    
    const updateOffset = value => {
      offset.value = value;
    };
    
    return {
      blockNumbers,
      totalCount,
      limit,
      limitsPerPageModel,
      limitsPerPageOptions,
      maxPages,
      offset,
      rowsLength,
      updateLimit,
      updateOffset,
    };
  },
};
```

## Maximum pages

Adjust the slider to control the **max-pages** value (1-10) and see how many page buttons are rendered at once.

*props: `max-pages`*

```html
<a-slider
  v-model="maxPages"
  :max="10"
  :min="1"
  :step="1"
  class="a_mb_4"
  label="_A_PAGINATION_MAX_PAGES_LABEL_"
></a-slider>
<div 
  class="page_pagination__items"
>
  <div 
    v-for="blockNumber in blockNumbers"
    :key="blockNumber"
    class="page_pagination__item"
  >
    <span class="page_pagination__item_index">{{ blockNumber }}</span>
  </div>
</div>
<a-pagination
  :limit="limit"
  :limits-per-page="limitsPerPage"
  :max-pages="maxPages"
  :offset="offset"
  :rows-length="rowsLength"
  :total-count="totalCount"
  @update:limit="updateLimit"
  @update:offset="updateOffset"
></a-pagination>
```

```js
import {
  computed,
  ref,
} from "vue";
import {
  APagination,
  ASlider,
} from "aloha-vue";
    
export default {
  name: "PagePaginationMaxPages",
  components: {
    APagination,
    ASlider,
  },
  setup() {
    const totalCount = ref(143);
    const limit = ref(10);
    const maxPages = ref(5);
    const offset = ref(0);
    const limitsPerPage = [
      "10",
      "25",
      "50",
      "100",
    ];
    
    const rowsLength = computed(() => {
      const remaining = totalCount.value - offset.value;
    
      if (remaining <= 0) {
        return 0;
      }
    
      return Math.min(remaining, limit.value);
    });
    
    const blockNumbers = computed(() => Array.from(
      {
        length: rowsLength.value,
      },
      (_, index) => offset.value + index + 1,
    ));
    
    const updateLimit = value => {
      limit.value = value;
      offset.value = 0;
    };
    
    const updateOffset = value => {
      offset.value = value;
    };
    
    return {
      blockNumbers,
      totalCount,
      limit,
      limitsPerPage,
      maxPages,
      offset,
      rowsLength,
      updateLimit,
      updateOffset,
    };
  },
};
```

## Disabled state

This example shows how to toggle the **disabled** prop to block all pagination controls while rows are being refreshed. Use the switch to enable or disable navigation with a single click.

*props: `disabled`*

```html
<a-switch
  class="a_mb_4"
  v-model="isDisabled"
  label="_LBL_DISABLED_"
></a-switch>
<div 
  class="page_pagination__items"
>
  <div 
    v-for="blockNumber in blockNumbers"
    :key="blockNumber"
    class="page_pagination__item"
  >
    <span class="page_pagination__item_index">{{ blockNumber }}</span>
  </div>
</div>
<a-pagination
  :disabled="isDisabled"
  :limit="limit"
  :limits-per-page="limitsPerPage"
  :max-pages="maxPages"
  :offset="offset"
  :rows-length="rowsLength"
  :total-count="totalCount"
  @update:limit="updateLimit"
  @update:offset="updateOffset"
></a-pagination>
```

```js
import {
  computed,
  ref,
} from "vue";
import {
  APagination,
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PagePaginationDisabled",
  components: {
    APagination,
    ASwitch,
  },
  setup() {
    const totalCount = ref(123);
    const isDisabled = ref(true);
    const limit = ref(10);
    const maxPages = ref(5);
    const offset = ref(0);
        
    const limitsPerPage = [
      "10",
      "25",
      "50",
      "100",
    ];
    
    const rowsLength = computed(() => {
      const remaining = totalCount.value - offset.value;
    
      if (remaining <= 0) {
        return 0;
      }
    
      return Math.min(remaining, limit.value);
    });
    
    const blockNumbers = computed(() => Array.from(
      {
        length: rowsLength.value,
      },
      (_, index) => offset.value + index + 1,
    ));
    
    const updateLimit = value => {
      limit.value = value;
      offset.value = 0;
    };
    
    const updateOffset = value => {
      offset.value = value;
    };
    
    return {
      blockNumbers,
      totalCount,
      isDisabled,
      limit,
      limitsPerPage,
      maxPages,
      offset,
      rowsLength,
      updateLimit,
      updateOffset,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| disabled | Boolean |  |  | Disables all pagination controls. Useful while rows are being reloaded or when navigation must be blocked. |
| limit | Number |  | yes | Number of rows that should be returned per page. The component emits **update:limit** when the user selects a new value. |
| limits-per-page | Array | () => ["10", "25", "50", "100"] |  | List of options that appear in the per-page selector. Values can be strings or numbers and usually mirror the backend limits. |
| max-pages | Number | 5 |  | Maximum amount of numbered page buttons that may be shown at once before truncation with ellipsis. |
| offset | Number |  | yes | Index of the first row that belongs to the current page. The component emits **update:offset** every time the user navigates. |
| rows-length | Number |  | yes | How many rows are actually rendered on the current page. Needed to correctly display the 'from-to' counter when the last page is incomplete. |
| modes | Object | () => ({   perPage: {     mode: "group",     position: 0,     showTextCountFromTo: true,   },   pagination: {     mode: "normal",     position: 1,   }, }) |  | Configuration for per-page controls and the pager. Use **perPage** and **pagination** to define **mode** (inline/group/select or normal/short/loadMore), **position**, and **showTextCountFromTo**. |
| texts | Object | () => ({   pagesFirstPage: "_A_PAGINATION_FIRST_PAGE_",   pagesLastPage: "_A_PAGINATION_LAST_PAGE_",   pagesMobile: "_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_",   pagesNavigation: "_A_PAGINATION_NAVIGATION_",   pagesNextPage: "_A_PAGINATION_NEXT_PAGE_",   pagesPreviousPage: "_A_PAGINATION_PREVIOUS_PAGE_",   pagesToPage: "_A_PAGINATION_TO_PAGE_{{page}}_",   countFromTo: "_A_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_",   countPerPage: "_A_COUNT_PER_PAGE_",   countPerPageItem: "_A_COUNT_PER_PAGE_ITEM_{{count}}_", }) |  | Object with translation keys or custom texts for page navigation labels and per-page counters. |
| total-count | Number |  | yes | Total number of items in the entire data set. This value drives the **from-to** counter and the number of available pages. |

## Translations

| key | en |
| --- | --- |
| `_A_COUNT_PER_PAGE_` | Per page: |
| `_A_COUNT_PER_PAGE_ITEM_{{count}}_` | Items per page: |
| `_A_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_` | {{ start }} to {{ current }} of {{ count }} |
| `_A_PAGINATION_FIRST_PAGE_` | To first page |
| `_A_PAGINATION_LAST_PAGE_` | To last page |
| `_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_` | {{ currentPage }} of {{ allPages }} |
| `_A_PAGINATION_NAVIGATION_` | Pagination navigation |
| `_A_PAGINATION_NEXT_PAGE_` | To next page |
| `_A_PAGINATION_PREVIOUS_PAGE_` | To previous page |
| `_A_PAGINATION_TO_PAGE_{{page}}_` | To page {{ page }} |

## CSS variables (`scss/utils/pagination.scss`, `scss/components/APagination.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_pagination_padding_x` |  | Horizontal padding of a page link. Changed by .pagination_sm and .pagination_lg. |
| `--a_pagination_padding_y` |  | Vertical padding of a page link. Changed by .pagination_sm and .pagination_lg. |
| `--a_pagination_font_size` |  | Font size of a page link. |
| `--a_pagination_color` |  | Text color of a page link. |
| `--a_pagination_bg` |  | Background of a page link. |
| `--a_pagination_border_width` |  | Border width of a page link. |
| `--a_pagination_border_color` |  | Border color of a page link. |
| `--a_pagination_border_radius` |  | Corner radius of the first and the last page link. |
| `--a_pagination_hover_color` |  | Text color of a hovered page link. |
| `--a_pagination_hover_bg` |  | Background of a hovered page link. |
| `--a_pagination_hover_border_color` |  | Border color of a hovered page link. |
| `--a_pagination_focus_color` |  | Text color of a page link with keyboard focus. |
| `--a_pagination_focus_bg` |  | Background of a page link with keyboard focus. |
| `--a_pagination_focus_box_shadow` |  | Focus ring of a page link. |
| `--a_pagination_active_color` |  | Text color of the current page. |
| `--a_pagination_active_bg` |  | Background of the current page. |
| `--a_pagination_active_border_color` |  | Border color of the current page. |
| `--a_pagination_disabled_color` |  | Text color of a disabled link. |
| `--a_pagination_disabled_bg` |  | Background of a disabled link. |
| `--a_pagination_disabled_border_color` |  | Border color of a disabled link. |
| `--a_pagination_bg` |  | Background of the panel around the pagination and the page size select. |
| `--a_pagination_font_size` |  | Font size of the panel and the page links. Changed by the size classes. |
| `--a_pagination_padding` |  | Padding of the panel. |
| `--a_pagination_border_radius` |  | Corner radius of the panel. |
| `--a_pagination_link_padding_x` |  | Horizontal padding of a page link. Changed by the size classes. |
| `--a_pagination_link_padding_y` |  | Vertical padding of a page link. Changed by the size classes. |
| `--a_pagination_link_color` |  | Text color of a page link. |
| `--a_pagination_link_bg` |  | Background of a page link. |
| `--a_pagination_link_border_width` |  | Border width of a page link. |
| `--a_pagination_link_border_color` |  | Border color of a page link. |
| `--a_pagination_link_border_radius` |  | Corner radius of the first and the last page link. Changed by the size classes. |
| `--a_pagination_link_hover_color` |  | Text color of a hovered page link. |
| `--a_pagination_link_hover_bg` |  | Background of a hovered page link. |
| `--a_pagination_link_hover_border_color` |  | Border color of a hovered page link. |
| `--a_pagination_link_focus_color` |  | Text color of a page link with keyboard focus. |
| `--a_pagination_link_focus_bg` |  | Background of a page link with keyboard focus. |
| `--a_pagination_link_focus_box_shadow` |  | Focus ring of a page link. |
| `--a_pagination_link_active_color` |  | Text color of the current page. |
| `--a_pagination_link_active_bg` |  | Background of the current page. |
| `--a_pagination_link_active_border_color` |  | Border color of the current page. |
| `--a_pagination_link_disabled_color` |  | Text color of a disabled link (e.g. "previous" on the first page). |
| `--a_pagination_link_disabled_bg` |  | Background of a disabled link. |
| `--a_pagination_link_disabled_border_color` |  | Border color of a disabled link. |
