# APaginationPages (Pagination pages)

The **APaginationPages** component renders page navigation only. It emits **update:offset** so the parent can load the next slice of items while keeping the current page in sync.

Accessibility: the pages are native buttons in a **nav** with a name. The current page has **aria-current="page"** and stays focusable, the disabled buttons have the attribute **disabled**. When the focused button becomes disabled (e.g. "next" on the last page), the focus goes to the current page. "…" is hidden for the screen reader. In right-to-left the arrows are mirrored.

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

## First and last page

With **show-edges** the first and the last page are always shown, a gap is shown as "…": 1 … 8 9 10 11 12 … 30.

```html
<a-pagination-pages
  :limit="limit"
  :offset="offset"
  :show-edges="true"
  :total-count="totalCount"
  @update:offset="updateOffset"
/>
```

```js
import {
  ref,
  computed,
} from "vue";

import {
  APaginationPages,
} from "aloha-vue";

export default {
  components: {
    APaginationPages,
  },
  setup() {
    const totalCount = ref(300);
    const limit = ref(10);
    const offset = ref(90);
    const rowsLength = computed(() => {
      return Math.max(Math.min(totalCount.value - offset.value, limit.value), 0);
    });
    const updateOffset = value => {
      offset.value = value;
    };

    return {
      limit,
      offset,
      rowsLength,
      totalCount,
      updateOffset,
    };
  },
};
```

## Go to page

**show-jumper** shows a field to go to a page. Only whole numbers from 1 to the last page are accepted, otherwise an error is announced and the focus stays in the field.

```html
<a-pagination-pages
  :limit="limit"
  :offset="offset"
  :show-edges="true"
  :show-jumper="true"
  :total-count="totalCount"
  @update:offset="updateOffset"
/>
```

```js
import {
  ref,
  computed,
} from "vue";

import {
  APaginationPages,
} from "aloha-vue";

export default {
  components: {
    APaginationPages,
  },
  setup() {
    const totalCount = ref(500);
    const limit = ref(10);
    const offset = ref(0);
    const rowsLength = computed(() => {
      return Math.max(Math.min(totalCount.value - offset.value, limit.value), 0);
    });
    const updateOffset = value => {
      offset.value = value;
    };

    return {
      limit,
      offset,
      rowsLength,
      totalCount,
      updateOffset,
    };
  },
};
```

## v-model:page and change

Instead of **offset** the page can be bound with **v-model:page**. The event **change** gets **{ page, offset, limit }** after every change of the page.

```html
<a-pagination-pages
  v-model:page="page"
  :limit="10"
  :total-count="87"
  @change="onChange"
/>
<pre>page: {{ page }}, change: {{ lastChange }}</pre>
```

```js
import {
  ref,
} from "vue";

import {
  APaginationPages,
} from "aloha-vue";

export default {
  components: {
    APaginationPages,
  },
  setup() {
    const page = ref(3);
    const lastChange = ref(undefined);
    // change: { page, offset, limit }
    const onChange = value => {
      lastChange.value = value;
    };

    return {
      lastChange,
      onChange,
      page,
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
      {
        id: "infinite",
        label: "_A_PAGINATION_PAGES_MODE_INFINITE_",
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

## Infinite scroll

The mode **infinite** loads the next rows when the button "Load more" comes near the view (**IntersectionObserver**). The button stays for the keyboard and the screen reader, the status with the count of the shown rows is announced.

```html
<a-pagination-pages
  :limit="limit"
  :total-count="totalCount"
  mode="infinite"
  @update:limit="updateLimit"
/>
```

```js
import {
  ref,
} from "vue";

import {
  APaginationPages,
} from "aloha-vue";

export default {
  components: {
    APaginationPages,
  },
  setup() {
    const totalCount = ref(60);
    const limit = ref(10);
    // the button and the scroll add the next rows: limit 10 -> 20 -> 30
    const updateLimit = value => {
      limit.value = value;
    };

    return {
      limit,
      totalCount,
      updateLimit,
    };
  },
};
```

## Hide a single page

With **hide-on-single-page** the navigation is not shown when all rows fit on one page.

```html
<a-button
  class="a_btn a_btn_outline_primary"
  text="total-count: 8"
  @click="totalCount = 8"
/>
<a-button
  class="a_btn a_btn_outline_primary"
  text="total-count: 80"
  @click="totalCount = 80"
/>
<a-pagination-pages
  v-model:page="page"
  :hide-on-single-page="true"
  :limit="10"
  :total-count="totalCount"
/>
```

```js
import {
  ref,
} from "vue";

import {
  AButton,
  APaginationPages,
} from "aloha-vue";

export default {
  components: {
    AButton,
    APaginationPages,
  },
  setup() {
    const totalCount = ref(8);
    const page = ref(1);

    return {
      page,
      totalCount,
    };
  },
};
```

## Sizes

**size**: **small**, **medium**, **large**.

```html
<a-pagination-pages
  v-model:page="page"
  :limit="10"
  :total-count="87"
  size="small"
/>
<a-pagination-pages
  v-model:page="page"
  :limit="10"
  :total-count="87"
/>
<a-pagination-pages
  v-model:page="page"
  :limit="10"
  :total-count="87"
  size="large"
/>
```

```js
import {
  ref,
} from "vue";

import {
  APaginationPages,
} from "aloha-vue";

export default {
  components: {
    APaginationPages,
  },
  setup() {
    const page = ref(1);
    const sizes = ["small", "medium", "large"];

    return {
      page,
      sizes,
    };
  },
};
```

## Slots

The slots **first**, **previous**, **next**, **last** replace the icon of the arrow, the slot **page** the number. The content of the slots is only visual (aria-hidden), the screen reader reads the texts of the prop **texts**.

```html
<a-pagination-pages
  v-model:page="page"
  :limit="10"
  :total-count="87"
  mode="short"
>
  <template #previous>
    <span>← Back</span>
  </template>
  <template #next>
    <span>Next →</span>
  </template>
</a-pagination-pages>
<a-pagination-pages
  v-model:page="page"
  :limit="10"
  :total-count="87"
>
  <template #page="{ page: number, isActive }">
    <strong v-if="isActive">[{{ number }}]</strong>
    <span v-else>{{ number }}</span>
  </template>
</a-pagination-pages>
```

```js
import {
  ref,
} from "vue";

import {
  APaginationPages,
} from "aloha-vue";

export default {
  components: {
    APaginationPages,
  },
  setup() {
    const page = ref(1);

    return {
      page,
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
| hide-on-single-page | Boolean |  |  | Hides the navigation when there is only one page. |
| icon-first | String / Object | ChevronDoubleLeft (SVG) |  | Icon of the arrow button: a name of **AIconPlugin** or an SVG. In right-to-left it is mirrored. |
| icon-last | String / Object | ChevronDoubleRight (SVG) |  | Icon of the arrow button: a name of **AIconPlugin** or an SVG. In right-to-left it is mirrored. |
| icon-next | String / Object | ChevronRight (SVG) |  | Icon of the arrow button: a name of **AIconPlugin** or an SVG. In right-to-left it is mirrored. |
| icon-previous | String / Object | ChevronLeft (SVG) |  | Icon of the arrow button: a name of **AIconPlugin** or an SVG. In right-to-left it is mirrored. |
| id | String | uniqueId("a_pagination_pages_") |  | Id of the navigation, the field of **show-jumper** uses it as prefix. |
| limit | Number |  | yes | Number of items per page. Together with **offset** it defines the current page. |
| max-pages | Number | 5 |  | Maximum amount of page buttons that may be shown at once. |
| mode | String | "normal" |  | Mode: **normal**, **short**, **loadMore**, **infinite**. **loadMore** shows the button "Load more", **infinite** loads also by scrolling. |
| offset | Number | 0 |  | Offset of the first row. An offset behind the last page shows the last page. Not needed with **v-model:page**. |
| page | Number |  |  | Current page (from 1) for **v-model:page**. If it is set, it is used instead of **offset**. |
| show-edges | Boolean |  |  | Always shows the first and the last page, a gap as "…". |
| show-jumper | Boolean |  |  | Shows a field to go to a page. |
| size | String | "medium" |  | Size: **small**, **medium**, **large**. |
| texts | Object | () => ({   pagesFirstPage: "_A_PAGINATION_FIRST_PAGE_",   pagesJumperButton: "_A_PAGINATION_JUMPER_BUTTON_",   pagesJumperError: "_A_PAGINATION_JUMPER_ERROR_{{allPages}}_",   pagesJumperLabel: "_A_PAGINATION_JUMPER_LABEL_",   pagesJumperOf: "_A_PAGINATION_JUMPER_OF_{{allPages}}_",   pagesLastPage: "_A_PAGINATION_LAST_PAGE_",   pagesLoadMore: "_A_PAGINATION_LOAD_MORE_",   pagesMobile: "_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_",   pagesNavigation: "_A_PAGINATION_NAVIGATION_",   pagesNextPage: "_A_PAGINATION_NEXT_PAGE_",   pagesPreviousPage: "_A_PAGINATION_PREVIOUS_PAGE_",   pagesToPage: "_A_PAGINATION_TO_PAGE_{{page}}_", }) |  | Object with translation keys or text labels used by the pager. |
| total-count | Number |  | yes | Total number of items in the data set. Used to calculate the number of pages and the button range. |

## Events

| name | type | description |
| --- | --- | --- |
| change | Function | After a change of the page: **{ page, offset, limit }**. |
| update:limit | Function | Modes **loadMore** and **infinite**: the new limit (more rows) and **{ loadMore: true }**. |
| update:offset | Function | The new offset (**v-model:offset**). |
| update:page | Function | The new page (**v-model:page**). |

## Slots

| name | description |
| --- | --- |
| first | Content of the arrow button instead of the icon (only visual). Props: **{ disabled }**. |
| last | Content of the arrow button instead of the icon (only visual). Props: **{ disabled }**. |
| next | Content of the arrow button instead of the icon (only visual). Props: **{ disabled }**. |
| page | Content of a page button instead of the number (only visual). Props: **{ page, isActive }**. |
| previous | Content of the arrow button instead of the icon (only visual). Props: **{ disabled }**. |

## Translations

| key | en |
| --- | --- |
| `_A_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_` | {{ start }} to {{ current }} of {{ count }} |
| `_A_PAGINATION_FIRST_PAGE_` | To first page |
| `_A_PAGINATION_JUMPER_BUTTON_` | Go |
| `_A_PAGINATION_JUMPER_ERROR_{{allPages}}_` | Enter a page from 1 to {{ allPages }}. |
| `_A_PAGINATION_JUMPER_LABEL_` | Go to page |
| `_A_PAGINATION_JUMPER_OF_{{allPages}}_` | of {{ allPages }} |
| `_A_PAGINATION_LAST_PAGE_` | To last page |
| `_A_PAGINATION_LOAD_MORE_` | Load more |
| `_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_` | {{ currentPage }} of {{ allPages }} |
| `_A_PAGINATION_NAVIGATION_` | Pagination navigation |
| `_A_PAGINATION_NEXT_PAGE_` | To next page |
| `_A_PAGINATION_PREVIOUS_PAGE_` | To previous page |
| `_A_PAGINATION_TO_PAGE_{{page}}_` | To page {{ page }} |
