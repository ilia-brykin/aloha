# APaginationPages (Pagination pages)

The **APaginationPages** component renders page navigation only. It emits **update:offset** so the parent can load the next slice of items while keeping the current page in sync.

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
<a-pagination-pages
  :limit="limit"
  :max-pages="maxPages"
  :offset="offset"
  :total-count="totalCount"
  @update:offset="updateOffset"
></a-pagination-pages>
```

```js
import {
  computed,
  ref,
} from "vue";
import {
  APaginationPages,
} from "aloha-vue";
    
export default {
  name: "PagePaginationPagesBasic",
  components: {
    APaginationPages,
  },
  setup() {
    const totalCount = ref(87);
    const limit = ref(10);
    const maxPages = ref(5);
    const offset = ref(0);

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

    const updateOffset = value => {
      offset.value = value;
    };

    return {
      blockNumbers,
      limit,
      maxPages,
      offset,
      rowsLength,
      totalCount,
      updateOffset,
    };
  },
};
```

## Maximum pages

Use the slider to change **max-pages** and see how the button range is trimmed.

*props: `max-pages`*

```html
<a-slider
  v-model="maxPages"
  :max="10"
  :min="1"
  :step="1"
  class="a_mb_4"
  label="_A_PAGINATION_PAGES_MAX_PAGES_LABEL_"
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
<a-pagination-pages
  :limit="limit"
  :max-pages="maxPages"
  :offset="offset"
  :total-count="totalCount"
  @update:offset="updateOffset"
></a-pagination-pages>
```

```js
import {
  computed,
  ref,
} from "vue";
import {
  APaginationPages,
  ASlider,
} from "aloha-vue";
    
export default {
  name: "PagePaginationPagesMaxPages",
  components: {
    APaginationPages,
    ASlider,
  },
  setup() {
    const totalCount = ref(143);
    const limit = ref(10);
    const maxPages = ref(5);
    const offset = ref(0);

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

    const updateOffset = value => {
      offset.value = value;
    };

    return {
      blockNumbers,
      limit,
      maxPages,
      offset,
      rowsLength,
      totalCount,
      updateOffset,
    };
  },
};
```

## Navigation mode

Choose between the **short**, **normal** and **loadMore** layouts. **loadMore** shows a button that adds the next rows (event **update:limit**) and a status with the count of the shown rows, read by the screen reader after every click.

*props: `mode`*

```html
<div class="a_columns a_columns_count_12 a_mb_3">
  <div class="a_column a_column_6 a_column_12_touch">
  <a-select
    v-model="mode"
    :data="modeOptions"
    :deselectable="false"
    :translate-data="true"
    key-id="id"
    key-label="label"
    label="_A_PAGINATION_PAGES_MODE_LABEL_"
    type="select"
  ></a-select>
</div>
</div>

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
<a-pagination-pages
  :mode="mode"
  :limit="limit"
  :offset="offset"
  :total-count="totalCount"
  @update:limit="updateLimit"
  @update:offset="updateOffset"
></a-pagination-pages>
```

```js
import {
  computed,
  ref,
  watch,
} from "vue";
import {
  APaginationPages,
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PagePaginationPagesMode",
  components: {
    APaginationPages,
    ASelect,
  },
  setup() {
    const totalCount = ref(87);
    const limit = ref(10);
    const offset = ref(0);
    const mode = ref("short");
    const modeOptions = [
      {
        id: "short",
        label: "_A_PAGINATION_PAGES_MODE_SHORT_",
      },
      {
        id: "normal",
        label: "_A_PAGINATION_PAGES_MODE_NORMAL_",
      },
      {
        id: "loadMore",
        label: "_A_PAGINATION_PAGES_MODE_LOAD_MORE_",
      },
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

    const updateOffset = value => {
      offset.value = value;
    };

    // "loadMore": the next rows are added to the shown rows
    const updateLimit = value => {
      limit.value = value;
    };

    watch(mode, () => {
      limit.value = 10;
      offset.value = 0;
    });

    return {
      blockNumbers,
      limit,
      mode,
      modeOptions,
      offset,
      rowsLength,
      totalCount,
      updateLimit,
      updateOffset,
    };
  },
};
```

## Disabled state

Toggle **disabled** to block all page navigation.

*props: `disabled`*

```html
<a-switch
  v-model="isDisabled"
  class="a_mb_4"
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
<a-pagination-pages
  :disabled="isDisabled"
  :limit="limit"
  :max-pages="maxPages"
  :offset="offset"
  :total-count="totalCount"
  @update:offset="updateOffset"
></a-pagination-pages>
```

```js
import {
  computed,
  ref,
} from "vue";
import {
  APaginationPages,
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PagePaginationPagesDisabled",
  components: {
    APaginationPages,
    ASwitch,
  },
  setup() {
    const totalCount = ref(87);
    const limit = ref(10);
    const maxPages = ref(5);
    const offset = ref(0);
    const isDisabled = ref(true);

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

    const updateOffset = value => {
      offset.value = value;
    };

    return {
      blockNumbers,
      isDisabled,
      limit,
      maxPages,
      offset,
      rowsLength,
      totalCount,
      updateOffset,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| disabled | Boolean |  |  | Disables page buttons and navigation controls. |
| limit | Number |  | yes | Number of items per page. Together with **offset** it defines the current page. |
| max-pages | Number | 5 |  | Maximum amount of page buttons that may be shown at once. |
| mode | String | normal |  | Navigation layout mode: **normal**, **short**, or **loadMore**. |
| offset | Number |  | yes | Index of the first item on the current page. The component emits **update:offset** when navigation changes. |
| texts | Object | () => ({   pagesFirstPage: "_A_PAGINATION_FIRST_PAGE_",   pagesLastPage: "_A_PAGINATION_LAST_PAGE_",   pagesLoadMore: "_A_PAGINATION_LOAD_MORE_",   pagesMobile: "_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_",   pagesNavigation: "_A_PAGINATION_NAVIGATION_",   pagesNextPage: "_A_PAGINATION_NEXT_PAGE_",   pagesPreviousPage: "_A_PAGINATION_PREVIOUS_PAGE_",   pagesToPage: "_A_PAGINATION_TO_PAGE_{{page}}_", }) |  | Object with translation keys or text labels used by the pager. |
| total-count | Number |  | yes | Total number of items in the data set. Used to calculate the number of pages and the button range. |

## Translations

| key | en |
| --- | --- |
| `_A_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_` | {{ start }} to {{ current }} of {{ count }} |
| `_A_PAGINATION_FIRST_PAGE_` | To first page |
| `_A_PAGINATION_LAST_PAGE_` | To last page |
| `_A_PAGINATION_LOAD_MORE_` | Load more |
| `_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_` | {{ currentPage }} of {{ allPages }} |
| `_A_PAGINATION_NAVIGATION_` | Pagination navigation |
| `_A_PAGINATION_NEXT_PAGE_` | To next page |
| `_A_PAGINATION_PREVIOUS_PAGE_` | To previous page |
| `_A_PAGINATION_TO_PAGE_{{page}}_` | To page {{ page }} |
