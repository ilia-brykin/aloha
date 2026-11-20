# ATable (_A_TABLE_COMPONENT_NAME_)

_A_TABLE_COMPONENT_DESCRIPTION_

## _A_TABLE_GROUP_COMPLEX_HEADER_

_A_TABLE_GROUP_COMPLEX_DESCRIPTION_

```html
<a-table
  ref="aloha"
  :columns="columns"
  :data="data"
  :is-loading-options="isLoadingOptions"
  label="Example table"
  :row-actions="rowActions"
  :table-actions="tableActions"
  :multiple-actions="multipleActions"
  preview="right"
  :is-quick-search="true"
  :is-action-column-visible="true"
  :is-columns-dnd="true"
  :pagination="{ use: true, limitsPerPage: ['10', '25', '50', '100', '500'] }"
  :is-pagination="true"
  :filter="{ filters }"
  :rows-footer="rowsFooter"
  :is-loading-table="false"
  :is-loading-multiple-actions="false"
  :views="views"
  :model-view="modelView"
  v-model:modelQuickSearch="modelQuickSearch"
  :modelFilters="modelFilters"
  :model-columns-ordering="modelColumnsOrdering"
  :model-columns-visible="modelColumnsVisible"
  @change-columns-ordering="changeColumnsOrdering"
  :update-model-filters-local="updateModelFiltersLocal"
  @toggle-preview="togglePreview"
  @update-model-filters="updateModelFilters"
  @update-view="updateView"
  @update:model-columns-visible="changeModelColumnsVisible"
  @init-table="initTable"
>
</a-table>
```

```js
import {
  ref,
} from "vue";

import AButton from "aloha-vue/src/AButton/AButton";
    
export default {
  name: "PageButtonComplex",
  components: {
    AButton,
  },
  setup() {
    const loading = ref(true);

    const toggleLoading = () => {
      loading.value = !loading.value;
    };
    
    return {
      loading,
      toggleLoading,
    };
  },
};
```

## _A_TABLE_GROUP_COMPLEX_HEADER_

_A_TABLE_GROUP_COMPLEX_DESCRIPTION_

*props: `dropdown`*

```html
<a-table
  ref="aloha"
  :columns="columns"
  :data="data"
  :is-loading-options="isLoadingOptions"
  label="Example table"
  :row-actions="rowActions"
  :table-actions="tableActions"
  :multiple-actions="multipleActions"
  preview="right"
  :is-quick-search="true"
  :is-action-column-visible="true"
  :is-columns-dnd="true"
  :pagination="{ use: true, limitsPerPage: ['10', '25', '50', '100', '500'] }"
  :is-pagination="true"
  :filter="{ filters }"
  :rows-footer="rowsFooter"
  :is-loading-table="false"
  :is-loading-multiple-actions="false"
  :views="views"
  :model-view="modelView"
  v-model:modelQuickSearch="modelQuickSearch"
  :modelFilters="modelFilters"
  :model-columns-ordering="modelColumnsOrdering"
  :model-columns-visible="modelColumnsVisible"
  @change-columns-ordering="changeColumnsOrdering"
  :update-model-filters-local="updateModelFiltersLocal"
  @toggle-preview="togglePreview"
  @update-model-filters="updateModelFilters"
  @update-view="updateView"
  @update:model-columns-visible="changeModelColumnsVisible"
  @init-table="initTable"
>
</a-table>
```

```js
import {
  ref,
} from "vue";

import AButton from "aloha-vue/src/AButton/AButton";
    
export default {
  name: "PageButtonComplex",
  components: {
    AButton,
  },
  setup() {
    const loading = ref(true);

    const toggleLoading = () => {
      loading.value = !loading.value;
    };
    
    return {
      loading,
      toggleLoading,
    };
  },
};
```
