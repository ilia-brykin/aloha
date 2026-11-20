# ASelect (Select)

ASelect is a component that allows users to make one or more choices from a predefined list of options.

## Basic usage

*props: `model-value`, `data`, `key-id`, `key-label`, `label`, `type`*

```html
<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  type="select"
></a-select>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectBasic",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "Aloha 1",
        id: "aloha_1",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};
```

## Label position

**label-position** sets where the label is shown: `"float"` – inside the empty field, it moves to the border on focus or with a value; `"inset"` – always inside the field, small above the value; `"top"` – above the field. The default for all form elements is set with **AFormPlugin** (`labelPosition`). **is-label-float** still works, but is deprecated.

*props: `label-position`*

```html
<a-select
  v-model="model"
  label="label-position: float"
  label-position="float"
  :data="data"
  key-id="id"
  key-label="label"
></a-select>
<a-select
  v-model="model"
  label="label-position: inset"
  label-position="inset"
  :data="data"
  key-id="id"
  key-label="label"
></a-select>
<a-select
  v-model="model"
  label="label-position: top"
  label-position="top"
  :data="data"
  key-id="id"
  key-label="label"
></a-select>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  ASelect,
} from "aloha-vue";

export default {
  name: "PageSelectLabelPosition",
  components: {
    ASelect,
  },
  setup() {
    const model = ref("1");
    const data = [
      {
        id: "1",
        label: "Aloha",
      },
      {
        id: "2",
        label: "Hola",
      },
    ];

    return {
      data,
      model,
    };
  },
};
```

## Using **label-description**

This example shows how to use **label-description** to add additional description to the component label. This allows providing the user with more detailed information about the purpose of the field.

*props: `label-description`*

```html
<a-select
  v-model="model"
  :data="data"
  label-position="top"
  key-id="id"
  key-label="label"
  label="Select"
  label-description="Aloha"
  type="select"
></a-select>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectLabelDescription",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "Aloha 1",
        id: "aloha_1",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};
```

## Error icon

This example shows how to display a custom error icon when the component has validation errors. If the component has an input field, the icon is shown inside it; otherwise, it is displayed next to the control. The icon is rendered only if both **errors** and **error-icon** are provided.

*props: `errors`, `error-icon`*

```html
<a-select
  v-model="model"
  :data="data"
  :error-icon="errorIcon"
  errors="Aloha"
  key-id="id"
  key-label="label"
  label="Select"
  type="select"
></a-select>
```

```js
import {
  ref,
} from "vue";

import {
  ASelect,
} from "aloha-vue";

export default {
  name: "PageSelectErrorIcon",
  components: {
    ASelect,
  },
  setup() {
    const model = ref(undefined);
    const errorIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\"><path d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"/></svg>";
    const data = [
      {
        label: "Aloha 1",
        id: "aloha_1",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
      },
    ];

    return {
      data,
      errorIcon,
      model,
    };
  },
};
```

## Grouping

Select options in a dropdown can be customized by grouping them by one or multiple keys. This can be useful for cases where one choice overrides all others, like a "None of the above" or "Select All" option.

*props: `key-group`*

```html
<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  :key-group="['alohaBR', 'aloha']"
  label="Aloha"
  type="select"
></a-select>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectGroup",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "Aloha 0",
        id: "aloha_0",
        aloha: "",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 6",
        id: "aloha_6",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 7",
        id: "aloha_7",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 8",
        id: "aloha_8",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};
```

## Search

Select options values can be filtered based on the search query. This is useful for components with a long list of options, makeing it easier for users for find and choose the needed option.

*props: `search`*

```html
<a-select
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :search="true"
  :search-in-group="true"
  key-id="id"
  key-label="label"
  label="Aloha group"
></a-select>
<div>model: {{ model }}</div>
<a-select
  v-model="model"
  :data="data"
  :search="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-select>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectSearch",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "Aloha -1",
        id: "aloha_-1",
        aloha: "",
      },
      {
        label: "Aloha 0",
        id: "aloha_0",
        aloha: "",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 6",
        id: "aloha_6",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 7",
        id: "aloha_7",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 8",
        id: "aloha_8",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};
```

## Search in **HTML** text

This example demonstrates how to use the `search-text-in-html` prop to perform a search only on the visible text from the **HTML**, ignoring **HTML** tags.

*props: `search`, `search-text-in-html`, `key-title`, `key-title-callback`*

```html
<a-select
  v-model="model1"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :search-in-group="true"
  :search-text-in-html="true"
  :search="true"
  key-id="id"
  key-label="label"
  key-title="title"
  label="Aloha group 1"
  type="multiselect"
></a-select>
<a-select
  v-model="model1"
  :data="data"
  :key-title-callback="keyTitleCallback"
  :search-text-in-html="true"
  :search="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha 1"
  type="multiselect"
></a-select>
<div>model1: {{ model1 }}</div>
<a-select
  v-model="model2"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :search-in-group="true"
  :search-text-in-html="true"
  :search="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  key-title="title"
  label="Aloha group 2"
  type="select"
></a-select>
<a-select
  v-model="model2"
  :data="data"
  :key-title-callback="keyTitleCallback"
  :search-text-in-html="true"
  :search="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha 2"
  type="select"
></a-select>
<div>model2: {{ model2 }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectSearchTextInHtml",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "<span>Aloha</span> <strong>1</strong>",
        title: "Aloha 1",
        id: "aloha_0",
        aloha: "",
        alohaBR: "<strong>Köln</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>2</strong>",
        title: "Aloha 2",
        id: "aloha_1",
        aloha: "Buba",
        alohaBR: "<strong>Köln</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>3</strong>",
        title: "Aloha 3",
        id: "aloha_2",
        aloha: "Buba",
        alohaBR: "<strong>Köln</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>4</strong>",
        title: "Aloha 4",
        id: "aloha_3",
        aloha: "Sandra",
        alohaBR: "<strong>Köln</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>5</strong>",
        title: "Aloha 5",
        id: "aloha_4",
        aloha: "Sandra",
        alohaBR: "<strong>Köln</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>6</strong>",
        title: "Aloha 6",
        id: "aloha_5",
        aloha: "Coco",
        alohaBR: "<strong>Düsseldorf</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>7</strong>",
        title: "Aloha 7",
        id: "aloha_6",
        aloha: "Coco",
        alohaBR: "<strong>Düsseldorf</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>8</strong>",
        title: "Aloha 8",
        id: "aloha_7",
        aloha: "Alex",
        alohaBR: "<strong>Düsseldorf</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>9</strong>",
        title: "Aloha 9",
        id: "aloha_8",
        aloha: "Alex",
        alohaBR: "<strong>Düsseldorf</strong>",
      },
    ];
    const model1 = ref(["aloha_7"]);
    const model2 = ref("aloha_7");

    const keyTitleCallback = ({ item }) => {
      return `--${ item.title }--`;
    };

    return {
      data,
      keyTitleCallback,
      model1,
      model2,
    };
  },
};
```

## Selected options first

With **show-selected-first**, selected options are displayed directly below the search and action buttons. They keep their groups when grouping is enabled, are separated from the remaining options by one divider, and are not duplicated in the main list.

*props: `show-selected-first`*

```html
<a-select
  v-model="modelSelect"
  :data="data"
  key-id="id"
  key-label="label"
  label="Select"
  :search="true"
  :show-selected-first="true"
  type="select"
></a-select>

<a-select
  v-model="modelMultiselect"
  :data="data"
  key-id="id"
  key-label="label"
  label="Multiselect"
  :is-deselect-all="true"
  :is-select-all="true"
  :search="true"
  :show-selected-first="true"
  type="multiselect"
></a-select>

<a-select
  v-model="modelSelectGrouped"
  :data="data"
  key-group="group"
  key-id="id"
  key-label="label"
  label="Select grouped"
  :search="true"
  :show-selected-first="true"
  type="select"
></a-select>

<a-select
  v-model="modelMultiselectGrouped"
  :data="data"
  key-group="group"
  key-id="id"
  key-label="label"
  label="Multiselect grouped"
  :is-deselect-all="true"
  :is-select-all="true"
  :search="true"
  :show-selected-first="true"
  type="multiselect"
></a-select>
```

```js
import {
  ref,
} from "vue";

import {
  ASelect,
} from "aloha-vue";

export default {
  components: {
    ASelect,
  },
  setup() {
    const data = [
      { id: 1, label: "Apple", group: "Fruit" },
      { id: 2, label: "Banana", group: "Fruit" },
      { id: 3, label: "Cherry", group: "Fruit" },
      { id: 4, label: "Orange", group: "Fruit" },
      { id: 5, label: "Carrot", group: "Vegetables" },
      { id: 6, label: "Tomato", group: "Vegetables" },
      { id: 7, label: "Broccoli", group: "Vegetables" },
      { id: 8, label: "Cucumber", group: "Vegetables" },
      { id: 9, label: "Milk", group: "Dairy" },
      { id: 10, label: "Cheese", group: "Dairy" },
      { id: 11, label: "Yogurt", group: "Dairy" },
      { id: 12, label: "Butter", group: "Dairy" },
      { id: 13, label: "Bread", group: "Bakery" },
      { id: 14, label: "Croissant", group: "Bakery" },
      { id: 15, label: "Baguette", group: "Bakery" },
      { id: 16, label: "Pretzel", group: "Bakery" },
    ];
    const modelSelect = ref(2);
    const modelMultiselect = ref([2, 6, 10, 14]);
    const modelSelectGrouped = ref(7);
    const modelMultiselectGrouped = ref([1, 5, 9, 13]);

    return {
      data,
      modelMultiselect,
      modelMultiselectGrouped,
      modelSelect,
      modelSelectGrouped,
    };
  },
};
```

## Disabling by key

Select option values in a dropdown can be disabled based on the object key for each option.

*props: `key-disabled`*

```html
<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  :key-group="['alohaBR', 'aloha']"
  key-disabled="disabled"
  label="Aloha group"
></a-select>
<div>model: {{ model }}</div>
<a-select
  v-model="model"
  class="a_mt_3"
  :data="data"
  key-id="id"
  key-label="label"
  key-disabled="disabled"
  label="Aloha"
></a-select>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectKeyDisabled",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "Aloha -1",
        id: "aloha_-1",
        aloha: "",
        disabled: true,
      },
      {
        label: "Aloha 0",
        id: "aloha_0",
        aloha: "",
        alohaBR: "Köln",
        disabled: true,
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
        aloha: "Buba",
        alohaBR: "Köln",
        disabled: true,
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
        aloha: "Buba",
        alohaBR: "Köln",
        disabled: true,
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 6",
        id: "aloha_6",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 7",
        id: "aloha_7",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 8",
        id: "aloha_8",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};
```

## Internationalization

Translations of labels are supported for dropdown options. Search is also supported with localized, translated options.

*props: `translate-data`*

```html
<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  :search="true"
  :translate-data="true"
  type="select"
></a-select>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectTranslateData",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "_A_SELECT_ELEMENT_0_",
        id: "aloha_0",
      },
      {
        label: "_A_SELECT_ELEMENT_1_",
        id: "aloha_1",
      },
      {
        label: "_A_SELECT_ELEMENT_2_",
        id: "aloha_2",
      },
      {
        label: "_A_SELECT_ELEMENT_3_",
        id: "aloha_3",
      },
      {
        label: "_A_SELECT_ELEMENT_4_",
        id: "aloha_4",
      },
      {
        label: "_A_SELECT_ELEMENT_5_",
        id: "aloha_5",
      },
      {
        label: "_A_SELECT_ELEMENT_6_",
        id: "aloha_6",
      },
      {
        label: "_A_SELECT_ELEMENT_7_",
        id: "aloha_7",
      },
      {
        label: "_A_SELECT_ELEMENT_8_",
        id: "aloha_8",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};
```

## Extra data

This example demonstrates how to use **data-extra** in the component. The first example passes extra data as an array of arrays. The second passes an array of objects and groups it with **key-group**, using the same grouping mechanism as **data**.

*props: `data-extra`, `key-group`*

```html
<a-select
  v-model="model1"
  :data="data"
  :data-extra="dataExtraArrayOfArrays"
  key-id="id"
  key-label="label"
  label="Data extra (Array of Arrays)"
  :search="true"
></a-select>
<div>model1: {{ model1 }}</div>
<a-select
  v-model="model2"
  class="a_mt_3"
  :data="data"
  :data-extra="dataExtraArrayOfObjects"
  key-id="id"
  key-label="label"
  key-group="group"
  label="Grouped data extra (Array of Objects)"
  :search="true"
></a-select>
<div>model2: {{ model2 }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectDataExtra",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "Aloha -1",
        id: "aloha_-1",
        aloha: "",
      },
      {
        label: "Aloha 0",
        id: "aloha_0",
        aloha: "",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 6",
        id: "aloha_6",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 7",
        id: "aloha_7",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 8",
        id: "aloha_8",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
    ];
    const dataExtraArrayOfArrays = [
      ["extra_id_1", "Extra 1"],
      ["extra_id_2", "Extra 2"],
    ];
    const dataExtraArrayOfObjects = [
      {
        label: "Extra 1",
        id: "extra_id_1",
        group: "Recommended",
      },
      {
        label: "Extra 2",
        id: "extra_id_2",
        group: "Other",
      },
      {
        label: "Extra 3",
        id: "extra_id_3",
        group: "Other",
      },
    ];
    const model1 = ref(undefined);
    const model2 = ref(undefined);

    return {
      data,
      dataExtraArrayOfArrays,
      dataExtraArrayOfObjects,
      model1,
      model2,
    };
  },
};
```

## Exclusive option

An exclusive option can be defines as a special choice that, when selected, prevents the selection of any other options or deselects all previously chosen options.

*props: `exclusive-option-label`, `exclusive-option-value`, `is-exclusive-option-enabled`*

```html
<a-select
  v-model="model"
  :data="data"
  :exclusive-option-label="exclusiveOptionLabel"
  :exclusive-option-value="exclusiveOptionValue"
  :is-exclusive-option-enabled="true"
  key-id="id"
  key-label="label"
  label="Aloha 1"
  type="multiselect"
></a-select>
<div>model: {{ model }}</div>
<a-select
  v-model="model"
  :data="data"
  :exclusive-option-label="exclusiveOptionLabel"
  :exclusive-option-value="exclusiveOptionValue"
  :is-deselect-all="true"
  :is-exclusive-option-enabled="true"
  :is-select-all="true"
  :search="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha 2"
  type="multiselect"
></a-select>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";
import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectExclusiveOption",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "Aloha 1",
        id: "aloha_1",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
      },
    ];
    const exclusiveOptionLabel = '_A_SELECT_EXCLUSIVE_';    
    const exclusiveOptionValue = 'aloha_exclusive';
    const model = ref(undefined);

    return {
      codeHtml,
      codeJs,
      data,
      exclusiveOptionLabel,
      exclusiveOptionValue,
      model,
    };
  },
};
```

## **Readonly** display mode

In this example, the component is used in **readonly** mode, where the value is displayed as text and cannot be modified by the user.

*props: `readonly`, `readonly-default`*

```html
<a-select
  :model-value="model1"
  :data="data"
  :readonly="true"
  key-id="id"
  key-label="label"
  label="Select 1"
  type="select"
></a-select>
<a-select
  :model-value="model2"
  :data="data"
  :readonly="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Select 2"
  type="multiselect"
></a-select>
<a-select
  :model-value="model3"
  :data="data"
  :readonly="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Select 3"
  type="select"
></a-select>
<a-select
  :model-value="model3"
  :data="data"
  :readonly="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Select 4"
  type="multiselect"
></a-select>
<a-select
  :model-value="model3"
  :data="data"
  :readonly="true"
  class="a_mt_3"
  help-text="Aloha"
  key-id="id"
  key-label="label"
  label="Select 5"
  readonly-default="-"
  type="select"
></a-select>
```

```js
import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectReadonly",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "Aloha -1",
        id: "aloha_-1",
      },
      {
        label: "Aloha 0",
        id: "aloha_0",
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
      },
      {
        label: "Aloha 6",
        id: "aloha_6",
      },
      {
        label: "Aloha 7",
        id: "aloha_7",
      },
      {
        label: "Aloha 8",
        id: "aloha_8",
      },
    ];
    const model1 = ref("aloha_7");
    const model2 = ref(["aloha_6", "aloha_7"]);
    const model3 = ref(undefined);

    return {
      data,
      model1,
      model2,
      model3,
    };
  },
};
```

## _A_SELECT_GROUP_MODE_ONE_PER_GROUP_HEADER_

_A_SELECT_GROUP_MODE_ONE_PER_GROUP_DESCRIPTION_

*props: `mode='one_per_group'`*

```html
<a-select
  v-model="model"
  :data="data"
  :translate-data="true"
  key-group="group"
  key-id="id"
  key-label="label"
  label="Aloha"
  mode="one_per_group"
  type="multiselect"
></a-select>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectModeOnePerGroup",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "_TXT_POSITIVE_",
        id: "koeln_true",
        group: "Köln",
      },
      {
        label: "_TXT_NEGATIVE_",
        id: "koeln_false",
        group: "Köln",
      },
      {
        label: "_TXT_NEUTRAL_",
        id: "koeln_null",
        group: "Köln",
      },
      {
        label: "_TXT_POSITIVE_",
        id: "bonn_true",
        group: "Bonn",
      },
      {
        label: "_TXT_NEGATIVE_",
        id: "bonn_false",
        group: "Bonn",
      },
      {
        label: "_TXT_NEUTRAL_",
        id: "bonn_null",
        group: "Bonn",
      },
      {
        label: "_TXT_POSITIVE_",
        id: "duesseldorf_true",
        group: "Düsseldorf",
      },
      {
        label: "_TXT_NEGATIVE_",
        id: "duesseldorf_false",
        group: "Düsseldorf",
      },
      {
        label: "_TXT_NEUTRAL_",
        id: "duesseldorf_null",
        group: "Düsseldorf",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};
```

## _A_SELECT_GROUP_LABEL_NOT_FOUND_HEADER_

_A_SELECT_GROUP_LABEL_NOT_FOUND_DESCRIPTION_

*props: `labelNotFound`*

```html
<a-select
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :search="true"
  :search-in-group="true"
  key-id="id"
  key-label="label"
  label="Aloha group"
></a-select>
<div>model: {{ model }}</div>
<a-select
  v-model="model"
  :data="data"
  :search="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-select>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectLabelNotFound",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "Aloha -1",
        id: "aloha_-1",
        aloha: "",
      },
      {
        label: "Aloha 0",
        id: "aloha_0",
        aloha: "",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 6",
        id: "aloha_6",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 7",
        id: "aloha_7",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 8",
        id: "aloha_8",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};
```

## Retrieve from local JSON

Loads the base list and retrieve candidates from local JSON files without a backend. Missing selected values are fetched through the retrieve callback and marked as invalid entries when they are not present in the base list.

```html
<a-select
  v-model="model1"
  :show-not-found="true"
  key-id="id"
  key-label="label"
  label="Select with retrieve"
  label-not-found="_A_SELECT_LABEL_NOT_FOUND_"
  type="select"
  :url="url"
  :url-retrieve="urlRetrieve"
/>
<div>model1: {{ model1 }}</div>

<a-select
  v-model="model2"
  :show-not-found="true"
  key-id="id"
  key-label="label"
  label="Multiselect with retrieve"
  label-not-found="_A_SELECT_LABEL_NOT_FOUND_"
  type="multiselect"
  :url="url"
  :url-retrieve="urlRetrieve"
/>
<div>model2: {{ model2 }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  ASelect,
} from "aloha-vue";

export default {
  name: "PageSelectRetrieve",
  components: {
    ASelect,
  },
  setup() {
    const model1 = ref("aloha_10");
    const model2 = ref(["aloha_2", "aloha_10", "aloha_11", "aloha_998", "aloha_999"]);
    const url = `${ import.meta.env.BASE_URL }assets/mock/select-base.json`;
    const urlRetrieve = `${ import.meta.env.BASE_URL }assets/mock/select-retrieve.json`;

    return {
      model1,
      model2,
      url,
      urlRetrieve,
    };
  },
};

/*
app.use(ADataRetrievePlugin, {
  callbacks: {
    retrieve: async ({ modelArray = [], url = "" }) => {
      const response = await fetch(url);
      const data = await response.json();

      return data.filter(item => modelArray.includes(item.id));
    },
  },
});
*/
```

## URL template

The value of `file` replaces `{{ file }}` in `url`. Choose another data source to reload the options and clear the selection. The examples load existing local JSON files.

*props: `url`, `url-template-data`*

```html
<a-select
  v-model="templateDataBasic.file"
  :data="sources"
  :translate-data="true"
  key-id="id"
  key-label="label"
  label="_A_UI_URL_TEMPLATE_SOURCE_"
  type="select"
/>
<a-select
  v-model="modelBasic"
  :url="urlBasic"
  :url-template-data="templateDataBasic"
  key-id="id"
  key-label="label"
  label="_A_UI_URL_TEMPLATE_OPTIONS_"
  type="select"
/>
<div>model: {{ modelBasic }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  ASelect,
} from "aloha-vue";

export default {
  components: {
    ASelect,
  },
  setup() {
    const sources = [
      { id: "base", label: "_A_UI_URL_TEMPLATE_SOURCE_FIRST_" },
      { id: "retrieve", label: "_A_UI_URL_TEMPLATE_SOURCE_SECOND_" },
    ];
    const modelBasic = ref(undefined);
    const templateDataBasic = ref({ file: "base" });
    const urlBasic = `${ import.meta.env.BASE_URL }assets/mock/select-{{ file }}.json`;

    return {
      modelBasic,
      sources,
      templateDataBasic,
      urlBasic,
    };
  },
};
```

## Nested paths and reactive data

A placeholder such as `{{ source.file }}` supports nested object paths. Changing the data source changes the resolved URL, reloads the options and clears the selection. Select an option, then edit the note: it is not used in the URL, so the URL watcher does not run, no new request is sent and the selection is preserved. Replacing `urlTemplateData` with another object that produces the same URL has the same effect.

*props: `url`, `url-template-data`*

```html
<a-select
  v-model="templateDataReactive.source.file"
  :data="sources"
  :translate-data="true"
  key-id="id"
  key-label="label"
  label="_A_UI_URL_TEMPLATE_SOURCE_"
  type="select"
/>
<a-input
  v-model="templateDataReactive.note"
  label="_A_UI_URL_TEMPLATE_NOTE_"
/>
<a-select
  v-model="modelReactive"
  :url="urlReactive"
  :url-template-data="templateDataReactive"
  key-id="id"
  key-label="label"
  label="_A_UI_URL_TEMPLATE_OPTIONS_"
  type="select"
/>
<div>model: {{ modelReactive }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  AInput,
  ASelect,
} from "aloha-vue";

export default {
  components: {
    AInput,
    ASelect,
  },
  setup() {
    const sources = [
      { id: "base", label: "_A_UI_URL_TEMPLATE_SOURCE_FIRST_" },
      { id: "retrieve", label: "_A_UI_URL_TEMPLATE_SOURCE_SECOND_" },
    ];
    const modelReactive = ref(undefined);
    const templateDataReactive = ref({ source: { file: "base" }, note: "" });
    const urlReactive = `${ import.meta.env.BASE_URL }assets/mock/select-{{ source.file }}.json`;

    return {
      modelReactive,
      sources,
      templateDataReactive,
      urlReactive,
    };
  },
};
```

model: {{ model }}

modelArr: {{ modelArr }}

modelArr2: {{ modelArr2 }}

## CSS variables (`scss/components/ui/ASelect.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_select_border_radius` |  | Corner radius of the selected items with a remove button (closeable items). |
| `--a_select_min_width` |  | Minimum width of the select field. |
| `--a_select_closeable_item_bg` |  | Background of a selected item with a remove button (closeable items). |
| `--a_select_toggle_padding_right` |  | Right padding of the select field, room for the arrow and the clear button. |
| `--a_select_divider_margin_y` |  | Vertical space around a divider in the dropdown menu. |
| `--a_select_divider_bg` |  | Color of a divider in the dropdown menu. |
| `--a_select_border_radius` |  | Corner radius of the selected items with a remove button (closeable items). |
| `--a_select_menu_max_height` |  | Maximum height of the option list. Longer lists scroll. |
| `--a_select_menu_max_width` |  | Maximum width of the dropdown menu. |
| `--a_select_menu_color` |  | Text color of the dropdown menu. |
| `--a_select_menu_bg` |  | Background of the dropdown menu. |
| `--a_select_menu_border_color` |  | Border color of the dropdown menu. |
| `--a_select_menu_border_radius` |  | Corner radius of the dropdown menu. |
| `--a_select_menu_box_shadow` |  | Shadow of the dropdown menu. |
| `--a_select_menu_padding` |  | Padding of the dropdown menu. |
| `--a_select_menu_link_color` |  | Text color of an option. |
| `--a_select_menu_link_hover_color` |  | Text color of an option on hover. |
| `--a_select_menu_link_hover_bg` |  | Background of an option on hover. |
| `--a_select_menu_link_border_radius` |  | Corner radius of an option. |
| `--a_select_menu_link_disabled_color` |  | Text color of a disabled option. |
