# AFieldset (Child elements **children**)

This page covers the use of **children** in the **AFieldset** component, as well as related properties such as **class-column-default** for customizing the classes of individual child elements, **class-columns** for the parent container, and **errors-all** for displaying child element errors.

## Basic usage

*props: `children`*

```html
<a-fieldset
  v-model="model"
  :children="children"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetChildrenBasic",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "aloha.text",
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "aloha.checkbox",
      },
      {
        type: "currency",
        label: "Currency",
        id: "aloha.currency",
      },
      {
        type: "date",
        label: "Date",
        id: "aloha.date",
      },
      {
        type: "file",
        label: "File",
        id: "aloha.file",
      },
    ];
    const model = ref(undefined);
    
    return {
      children,
      model,
    };
  },
};
```

## Child component dependencies

Use **dependencies** as an object for one condition or as an array when all conditions must match. Inside **AFieldset**, the current model is supplied to child UI components automatically, so **modelDependencies** does not need to be passed manually.

*props: `children`, `dependencies`, `model-dependencies`*

```html
<a-fieldset
  v-model="model"
  :children="children"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  AFieldset,
} from "aloha-vue";

export default {
  name: "PageFieldsetChildrenDependencies",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "switch",
        label: "Show details",
        id: "showDetails",
      },
      {
        type: "radio",
        label: "Detail type",
        id: "detailType",
        data: [
          { label: "Basic", value: "basic" },
          { label: "Advanced", value: "advanced" },
        ],
      },
      {
        type: "text",
        label: "Details",
        id: "details",
        dependencies: {
          id: "showDetails",
          value: true,
        },
      },
      {
        type: "dateRange",
        label: "Period",
        id: "period",
        dependencies: {
          id: "showDetails",
          value: true,
        },
      },
      {
        type: "template",
        id: "advancedHint",
        html: "Advanced details are enabled.",
        dependencies: [
          { id: "showDetails", value: true },
          { id: "detailType", value: "advanced" },
        ],
      },
    ];
    const model = ref({
      showDetails: false,
      detailType: "basic",
    });

    return {
      children,
      model,
    };
  },
};
```

## Class for child elements

This example shows how to use **class-column-default**. It allows you to set **CSS** classes for all child elements in **children**, unless a specific element has its own class. In the example, the first element explicitly sets the class **a_column a_column_12**, while the rest will use the class specified in the **class-column** of the component.

*props: `class-column-default`*

```html
<a-fieldset
  v-model="model"
  :children="children"
  class-column-default="a_column a_column_6 a_column_12_touch"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetChildrenClassColumn",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "aloha1.text",
        classColumn: "a_column a_column_12"
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "aloha1.checkbox",
      },
      {
        type: "currency",
        label: "Currency",
        id: "aloha1.currency",
      },
      {
        type: "date",
        label: "Date",
        id: "aloha1.date",
      },
      {
        type: "file",
        label: "File",
        id: "aloha1.file",
      },
    ];
    const model = ref(undefined);
    
    return {
      children,
      model,
    };
  },
};
```

## Classes for parent container

This example shows how to use **class-columns** to manage **CSS** classes for the parent container where child elements are displayed. These classes allow you to configure the grid, spacing, and column behavior based on the device.

*props: `class-columns`*

```html
<a-fieldset
  v-model="model"
  :children="children"
  class-column-default="a_column a_column_4 a_column_8_touch"
  class-columns="a_columns a_columns_count_8 a_columns_gap_y_1 a_columns_gap_x_1"
  label="Fieldset"
></a-fieldset>
<a-fieldset
  v-model="model"
  :children="children"
  class-columns="a_columns a_columns_count_12 a_columns_gap_y_4"
  class="a_mt_3"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetChildrenClassColumns",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "aloha2.text",
        classColumn: "a_column a_column_12"
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "aloha2.checkbox",
      },
      {
        type: "currency",
        label: "Currency",
        id: "aloha2.currency",
      },
      {
        type: "date",
        label: "Date",
        id: "aloha2.date",
      },
      {
        type: "file",
        label: "File",
        id: "aloha2.file",
      },
    ];
    const model = ref(undefined);
    
    return {
      children,
      model,
    };
  },
};
```

## Errors for child elements

This example shows how to use **errors-all** to pass an object with errors for child elements defined in **children**. Each child element can have its own error message displayed if validation fails.

*props: `errors-all`*

```html
<a-fieldset
  v-model="model"
  :children="children"
  :errors-all="errorsAll"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetChildrenErrorsAll",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "aloha3.text",
        classColumn: "a_column a_column_12"
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "aloha3.checkbox",
      },
      {
        type: "currency",
        label: "Currency",
        id: "aloha3.currency",
      },
      {
        type: "date",
        label: "Date",
        id: "aloha3.date",
      },
    ];
    const errorsAll = {
      aloha3: {
        text: "error",
        checkbox: "error",
        currency: "error",
        date: "error",
      },
    };
    const model = ref(undefined);
    
    return {
      children,
      errorsAll,
      model,
    };
  },
};
```

## Nested element structure

This example demonstrates the ability to create a nested element structure of unlimited depth using the **AFieldset** component. Each child element can contain its own nested elements, allowing flexible data structure and rendering control. For example, here, the first and second **fieldset** contain their own child elements such as text fields and checkboxes.

*props: `children`*

```html
<a-fieldset
  v-model="model"
  :children="children"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetChildrenTree",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text 1",
        id: "aloha4.text1",
      },
      {
        type: "fieldset",
        label: "Fieldset 1",
        id: "aloha4.fieldset1",
        children: [
          {
            type: "text",
            label: "Text 2",
            id: "aloha4.text2",
          },
          {
            type: "oneCheckbox",
            label: "Checkbox",
            id: "aloha4.checkbox",
          },
        ],
      },
      {
        type: "fieldset",
        label: "Fieldset 2",
        id: "aloha4.fieldset2",
        children: [
          {
            type: "text",
            label: "Text 3",
            id: "aloha4.text3",
          },
          {
            type: "currency",
            label: "Currency",
            id: "aloha4.currency",
          },
        ],
      },
      {
        type: "date",
        label: "Date",
        id: "aloha4.date",
      },
    ];
    const model = ref(undefined);
    
    return {
      children,
      model,
    };
  },
};
```

## **Readonly** display mode

In this example, the component is used in **readonly** mode, where the value is displayed as text and cannot be modified by the user.

*props: `readonly`, `readonly-default`*

```html
<a-fieldset
  :model-value="model1"
  :children="children1"
  :readonly="true"
  label="Fieldset 1"
></a-fieldset>
<a-fieldset
  :model-value="model2"
  :children="children2"
  :readonly="true"
  class="a_mt_3"
  help-text="Aloha"
  label="Fieldset 2"
  readonly-default="-"
></a-fieldset>
```

```js
import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetChildrenReadonly",
  components: {
    AFieldset,
  },
  setup() {
    const children1 = [
      {
        type: "text",
        label: "Text 1",
        id: "aloha5.text1",
      },
      {
        type: "fieldset",
        label: "Fieldset 1",
        id: "aloha5.fieldset1",
        children: [
          {
            type: "text",
            label: "Text 2",
            id: "aloha5.text2",
          },
          {
            type: "oneCheckbox",
            label: "Checkbox",
            id: "aloha5.checkbox",
          },
        ],
      },
      {
        type: "fieldset",
        label: "Fieldset 2",
        id: "aloha5.fieldset2",
        children: [
          {
            type: "text",
            label: "Text 3",
            id: "aloha5.text3",
          },
          {
            type: "currency",
            label: "Currency",
            id: "aloha5.currency",
          },
        ],
      },
      {
        type: "date",
        label: "Date",
        id: "aloha5.date",
      },
    ];
    const children2 = [
      {
        type: "text",
        label: "Text 1",
        id: "aloha6.text1",
        readonlyDefault: "---",
      },
      {
        type: "fieldset",
        label: "Fieldset 1",
        id: "aloha6.fieldset1",
        children: [
          {
            type: "text",
            label: "Text 2",
            id: "aloha6.text2",
          },
          {
            type: "oneCheckbox",
            label: "Checkbox",
            id: "aloha6.checkbox",
            readonlyDefault: "---",
          },
        ],
      },
      {
        type: "fieldset",
        label: "Fieldset 2",
        id: "aloha6.fieldset2",
        children: [
          {
            type: "text",
            label: "Text 3",
            id: "aloha6.text3",
          },
          {
            type: "currency",
            label: "Currency",
            id: "aloha6.currency",
          },
        ],
      },
      {
        type: "date",
        label: "Date",
        id: "aloha6.date",
      },
    ];
    const model1 = ref({
      aloha5: {
        text2: "Aloha",
        date: "2022-01-01",
      },
    });
    const model2 = ref(undefined);
    
    return {
      children1,
      children2,
      model1,
      model2,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| children | Array | () => [] |  | An array of child elements that will be rendered inside the component. Each element in the array is an object with parameters such as **type**, **label**, **id**, and other properties for configuring and displaying the child element. |
| dependencies | Array / Object |  |  | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| class-column-default | String / Object | a_column a_column_12 |  | Sets a **CSS** class for all child elements unless a separate **classColumn** is specified for a specific element in the **children** array. This makes it easy to manage the display of all child elements at once. |
| class-columns | String / Object | a_columns a_columns_count_12 |  | **CSS** classes that will be applied to the container where child elements from the **children** prop are placed. These classes control the number of columns, spacing between them, and their responsive behavior. |
| errors-all | Object | () => ({}) |  | An object containing errors for all child elements passed through **children**. Each error should be specified for the corresponding element by its **id**. |
| model-dependencies | Object |  |  | Determines model dependencies that may affect the visibility or behavior of the component. |
