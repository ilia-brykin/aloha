# ATable (Table with pagination)

## Simple pagination

The pagination can be configured with **:pagination="{ use: true }"**.

*props: `pagination.use`*

```html
<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_LABEL_"
  key-id="id"
  :pagination="{ use: true }"
>
</a-table>
```

```js
import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTablePaginationExample",
  components: {
    ATable,
  },
  setup() {
     const columns = [
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_2_",
      },
      {
        id: "column3",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_3_",
      },
      {
        id: "column4",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_4_",
      },
      {
        id: "column5",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_5_",
      },
    ];

    const data = ref([]);

    const setData = () => {
      const DATA = [];
      times(1001, item => {
        DATA.push({
          id: item,
          aloha: `aloha ${ item }`,
        });
      });
      data.value = DATA;
    };

    setData();
    
    return {
      columns,
      data,
    };
  },
};
```

## Number of items per page

The number of items per page can be set by using **:pagination="{ use: true, limitsPerPage: ['5', '10', '25', '50', '100', '200'] }"**.

*props: `pagination.limitsPerPage`*

```html
<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_LIMIT_LABEL_"
  key-id="id"
  :pagination="{ use: true, limitsPerPage: ['5', '10', '25', '50', '100', '200'] }"
>
</a-table>
```

```js
import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTablePaginationLimit",
  components: {
    ATable,
  },
  setup() {
     const columns = [
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_2_",
      },
      {
        id: "column3",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_3_",
      },
      {
        id: "column4",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_4_",
      },
      {
        id: "column5",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_5_",
      },
    ];

    const data = ref([]);

    const setData = () => {
      const DATA = [];
      times(1001, item => {
        DATA.push({
          id: item,
          aloha: `aloha ${ item }`,
        });
      });
      data.value = DATA;
    };

    setData();
    
    return {
      columns,
      data,
    };
  },
};
```

## Default number of items per page

The default number of items per page can be set by using **:pagination="{ use: true, limitsPerPage: ['5', '10', '25', '50', '100', '200'], limitStart: 5 }"**.

*props: `pagination.limitStart`*

```html
<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_LIMIT_START_LABEL_"
  key-id="id"
  :pagination="{ use: true, limitsPerPage: ['5', '10', '25', '50', '100', '200'], limitStart: 5 }"
>
</a-table>
```

```js
import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTablePaginationLimitStart",
  components: {
    ATable,
  },
  setup() {
     const columns = [
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_2_",
      },
      {
        id: "column3",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_3_",
      },
      {
        id: "column4",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_4_",
      },
      {
        id: "column5",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_5_",
      },
    ];

    const data = ref([]);

    const setData = () => {
      const DATA = [];
      times(1001, item => {
        DATA.push({
          id: item,
          aloha: `aloha ${ item }`,
        });
      });
      data.value = DATA;
    };

    setData();
    
    return {
      columns,
      data,
    };
  },
};
```

## Maximum number of pages in the pagination

The maximum number of pages in the pagination can be set by using **:pagination="{ use: true, maxPages: 7 }"**.

*props: `pagination.maxPages`*

```html
<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_LABEL_"
  key-id="id"
  :pagination="{ use: true, maxPages: 7 }"
>
</a-table>
```

```js
import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTablePaginationMaxItems",
  components: {
    ATable,
  },
  setup() {
     const columns = [
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_2_",
      },
      {
        id: "column3",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_3_",
      },
      {
        id: "column4",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_4_",
      },
      {
        id: "column5",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_5_",
      },
    ];

    const data = ref([]);

    const setData = () => {
      const DATA = [];
      times(1001, item => {
        DATA.push({
          id: item,
          aloha: `aloha ${ item }`,
        });
      });
      data.value = DATA;
    };

    setData();
    
    return {
      columns,
      data,
    };
  },
};
```

## Disabling pagination

The pagination can be disabled with **:pagination="{ use: true, disabled: true }"**.

*props: `pagination.disabled`*

```html
<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_DISABLED_LABEL_"
  key-id="id"
  :pagination="{ use: true, disabled: true }"
>
</a-table>
```

```js
import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTablePaginationDisabled",
  components: {
    ATable,
  },
  setup() {
     const columns = [
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_2_",
      },
      {
        id: "column3",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_3_",
      },
      {
        id: "column4",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_4_",
      },
      {
        id: "column5",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_5_",
      },
    ];

    const data = ref([]);

    const setData = () => {
      const DATA = [];
      times(1001, item => {
        DATA.push({
          id: item,
          aloha: `aloha ${ item }`,
        });
      });
      data.value = DATA;
    };

    setData();
    
    return {
      columns,
      data,
    };
  },
};
```

## Pagination outside of the component (server-side pagination)

The server-side pagination can be specified by using **:pagination="{ use: true, isOutside: true }"**. The parameter **:count-all-rows="999"** specifies the total number of items in a table. Emit **change-limit** is called when changing the number of items per page. Emit **change-offset** is called when changing the pagination.

*props: `pagination.isOutside`, `count-all-rows`; emits: `change-limit`, `change-offset`*

```html
<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_LABEL_"
  key-id="id"
  :pagination="{ use: true, maxPages: 7 }"
>
</a-table>
```

```js
import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTablePaginationMaxItems",
  components: {
    ATable,
  },
  setup() {
     const columns = [
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_2_",
      },
      {
        id: "column3",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_3_",
      },
      {
        id: "column4",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_4_",
      },
      {
        id: "column5",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_5_",
      },
    ];

    const data = ref([]);

    const setData = () => {
      const DATA = [];
      times(1001, item => {
        DATA.push({
          id: item,
          aloha: `aloha ${ item }`,
        });
      });
      data.value = DATA;
    };

    setData();
    
    return {
      columns,
      data,
    };
  },
};
```

## Position of the pagination

`pagination.position`: `"top"` above the table, `"bottom"` below it, `"y"` above and below.

*props: `pagination.position`*

```html
<a-table
  :columns="columns"
  :data="data"
  :pagination="{ use: true, position: 'top' }"
  key-id="id"
  label="_A_TABLE_GROUP_PAGINATION_POSITION_TOP_LABEL_"
></a-table>
<a-table
  :columns="columns"
  :data="data"
  :pagination="{ use: true, position: 'bottom' }"
  class="a_mt_5"
  key-id="id"
  label="_A_TABLE_GROUP_PAGINATION_POSITION_BOTTOM_LABEL_"
></a-table>
<a-table
  :columns="columns"
  :data="data"
  :pagination="{ use: true, position: 'y' }"
  class="a_mt_5"
  key-id="id"
  label="_A_TABLE_GROUP_PAGINATION_POSITION_Y_LABEL_"
></a-table>
```

```js
import {
  ref,
} from "vue";
import {
  ATable.
} from "aloha-vue";
    
export default {
  name: "PageTablePaginationPosition",
  components: {
    ATable,
  },
  setup() {
     const columns = [
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_2_",
      },
      {
        id: "column3",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_3_",
      },
      {
        id: "column4",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_4_",
      },
      {
        id: "column5",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_5_",
      },
    ];

    const data = ref([]);

    const setData = () => {
      const DATA = [];
      times(1001, item => {
        DATA.push({
          id: item,
          aloha: `aloha ${ item }`,
        });
      });
      data.value = DATA;
    };

    setData();
    
    return {
      columns,
      data,
    };
  },
};
```

## Translations

| key | en |
| --- | --- |
| `_A_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_` | {{ start }} to {{ current }} of {{ count }} |
| `_A_COUNT_PER_PAGE_` | Per page: |
| `_A_COUNT_PER_PAGE_ITEM_{{count}}_` | Items per page: |
| `_A_PAGINATION_NAVIGATION_` | Pagination navigation |
| `_A_PAGINATION_FIRST_PAGE_` | To first page |
| `_A_PAGINATION_PREVIOUS_PAGE_` | To previous page |
| `_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_` | {{ currentPage }} of {{ allPages }} |
| `_A_PAGINATION_TO_PAGE_{{page}}_` | To page {{ page }} |
| `_A_PAGINATION_NEXT_PAGE_` | To next page |
| `_A_PAGINATION_LAST_PAGE_` | To last page |
