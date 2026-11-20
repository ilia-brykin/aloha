# AMultiselectOrdered (Ordered Multiselect)

The component allows selecting multiple items with the ability to set their order. Supports sorting, deleting, and moving items within the list.

## Basic usage

*props: `data`, `model-value`, `label`*

```html
<a-multiselect-ordered
  v-model="model1"
  :data="data"
  key-id="value"
  key-label="label"
  label="Select 1"
></a-multiselect-ordered>
<div>model1: {{ model1 }}</div>
<a-multiselect-ordered
  v-model="model2"
  :data="data"
  class="a_mt_3"
  key-id="value"
  key-label="label"
  label="Select 2"
></a-multiselect-ordered>
<div>model2: {{ model2 }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AMultiselectOrdered,
} from "aloha-vue";
    
export default {
  name: "PageMultiselectOrderedBasic",
  components: {
    AMultiselectOrdered,
  },
  setup() {
    const data = [
      {
        value: "aloha_1",
        label: "Aloha 1",
      },
      {
        value: "aloha_2",
        label: "Aloha 2",
      },
      {
        value: "aloha_3",
        label: "Aloha 3",
      },
      {
        value: "aloha_4",
        label: "Aloha 4",
      },
    ];
    const model1 = ref(["aloha_4", "aloha_2"]);
    const model2 = ref(undefined);
    
    return {
      data,
      model1,
      model2,
    };
  },
};
```

## Grouped extra data

This example shows how to group items from **data-extra** with **key-group**. The **data** and **data-extra** arrays use the same grouping configuration and may contain separate groups.

*props: `data-extra`, `key-group`*

```html
<a-multiselect-ordered
  v-model="model"
  :data="data"
  :data-extra="dataExtra"
  key-id="value"
  key-label="label"
  key-group="group"
  label="Grouped data extra"
  :search="true"
  :search-in-group="true"
></a-multiselect-ordered>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  AMultiselectOrdered,
} from "aloha-vue";

export default {
  name: "PageMultiselectOrderedDataExtra",
  components: {
    AMultiselectOrdered,
  },
  setup() {
    const data = [
      {
        value: "aloha_1",
        label: "Aloha 1",
        group: "Main",
      },
      {
        value: "aloha_2",
        label: "Aloha 2",
        group: "Main",
      },
    ];
    const dataExtra = [
      {
        value: "extra_1",
        label: "Extra 1",
        group: "Recommended",
      },
      {
        value: "extra_2",
        label: "Extra 2",
        group: "Other",
      },
      {
        value: "extra_3",
        label: "Extra 3",
        group: "Other",
      },
    ];
    const model = ref([]);

    return {
      data,
      dataExtra,
      model,
    };
  },
};
```

## Model change function

In this example, the **change** function is responsible for updating the component's model. The function takes three arguments: the model **model**, the component identifier **id**, and all passed **props**. This approach allows flexible handling of model changes and performing additional actions such as logging or validation.

*props: `change`, `model-value`*

```html
<a-multiselect-ordered
  :change="changeModel"
  :model-value="model"
  :data="data"
  key-id="value"
  key-label="label"
  label="Select"
></a-multiselect-ordered>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AMultiselectOrdered,
} from "aloha-vue";
    
export default {
  name: "PageMultiselectOrderedChange",
  components: {
    AMultiselectOrdered,
  },
  setup() {
    const data = [
      {
        value: "aloha_1",
        label: "Aloha 1",
      },
      {
        value: "aloha_2",
        label: "Aloha 2",
      },
      {
        value: "aloha_3",
        label: "Aloha 3",
      },
      {
        value: "aloha_4",
        label: "Aloha 4",
      },
    ];
    const model = ref(["aloha_4", "aloha_2"]);
    
    const changeModel = ({ model: _model, id, props }) => {
      model.value = _model;
      console.log(id, props);
    };
    
    return {
      changeModel,
      data,
      model,
    };
  },
};
```

## Help text

This example shows how to use **help-text** to add a help text below the input field. The help text provides additional information to the user about the expected data in this field.

*props: `help-text`*

```html
<a-multiselect-ordered
  v-model="model"
  :data="data"
  help-text="Aloha"
  key-id="value"
  key-label="label"
  label="Select"
></a-multiselect-ordered>
```

```js
import {
  ref,
} from "vue";

import { 
  AMultiselectOrdered,
} from "aloha-vue";
    
export default {
  name: "PageMultiselectOrderedHelpText",
  components: {
    AMultiselectOrdered,
  },
  setup() {
    const data = [
      {
        value: "aloha_1",
        label: "Aloha 1",
      },
      {
        value: "aloha_2",
        label: "Aloha 2",
      },
      {
        value: "aloha_3",
        label: "Aloha 3",
      },
      {
        value: "aloha_4",
        label: "Aloha 4",
      },
    ];
    const model = ref(["aloha_4", "aloha_2"]);
    
    return {
      data,
      model,
    };
  },
};
```

## Error display

This example shows how to use **errors** to display error messages below the input field. Error messages help the user understand which data was entered incorrectly and how to correct it.

*props: `errors`*

```html
<a-multiselect-ordered
  v-model="model"
  :data="data"
  errors="Aloha"
  key-id="value"
  key-label="label"
  label="Select"
></a-multiselect-ordered>
```

```js
import {
  ref,
} from "vue";

import { 
  AMultiselectOrdered,
} from "aloha-vue";
    
export default {
  name: "PageMultiselectOrderedErrors",
  components: {
    AMultiselectOrdered,
  },
  setup() {
    const data = [
      {
        value: "aloha_1",
        label: "Aloha 1",
      },
      {
        value: "aloha_2",
        label: "Aloha 2",
      },
      {
        value: "aloha_3",
        label: "Aloha 3",
      },
      {
        value: "aloha_4",
        label: "Aloha 4",
      },
    ];
    const model = ref(["aloha_4", "aloha_2"]);
    
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
<a-multiselect-ordered
  v-model="model"
  :data="data"
  key-id="value"
  key-label="label"
  label="Select"
  label-description="Aloha"
></a-multiselect-ordered>
```

```js
import {
  ref,
} from "vue";

import { 
  AMultiselectOrdered,
} from "aloha-vue";
    
export default {
  name: "PageMultiselectOrderedLabelDescription",
  components: {
    AMultiselectOrdered,
  },
  setup() {
    const data = [
      {
        value: "aloha_1",
        label: "Aloha 1",
      },
      {
        value: "aloha_2",
        label: "Aloha 2",
      },
      {
        value: "aloha_3",
        label: "Aloha 3",
      },
      {
        value: "aloha_4",
        label: "Aloha 4",
      },
    ];
    const model = ref(["aloha_4", "aloha_2"]);
    
    return {
      data,
      model,
    };
  },
};
```

## Retrieve invalid entries

Loads ordered multiselect options from local JSON files and renders missing selected values inside a separate invalid entries group.

*props: `url`, `url-retrieve`*

```html
<a-multiselect-ordered
  v-model="model1"
  key-id="id"
  key-label="label"
  label="Ordered list with retrieve"
  select-label="Add value"
  :url="url"
  :url-retrieve="urlRetrieve"
/>
<div>model1: {{ model1 }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  AMultiselectOrdered,
} from "aloha-vue";

export default {
  name: "PageMultiselectOrderedRetrieve",
  components: {
    AMultiselectOrdered,
  },
  setup() {
    const model1 = ref(["aloha_2", "aloha_10", "aloha_11"]);
    const url = `${ import.meta.env.BASE_URL }assets/mock/select-base.json`;
    const urlRetrieve = `${ import.meta.env.BASE_URL }assets/mock/select-retrieve.json`;

    return {
      model1,
      url,
      urlRetrieve,
    };
  },
};
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
<a-multiselect-ordered
  v-model="modelBasic"
  :url="urlBasic"
  :url-template-data="templateDataBasic"
  key-id="id"
  key-label="label"
  label="_A_UI_URL_TEMPLATE_OPTIONS_"
  select-label="_A_UI_URL_TEMPLATE_ADD_"
/>
<div>model: {{ modelBasic }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  AMultiselectOrdered,
  ASelect,
} from "aloha-vue";

export default {
  components: {
    AMultiselectOrdered,
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
<a-multiselect-ordered
  v-model="modelReactive"
  :url="urlReactive"
  :url-template-data="templateDataReactive"
  key-id="id"
  key-label="label"
  label="_A_UI_URL_TEMPLATE_OPTIONS_"
  select-label="_A_UI_URL_TEMPLATE_ADD_"
/>
<div>model: {{ modelReactive }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  AInput,
  AMultiselectOrdered,
  ASelect,
} from "aloha-vue";

export default {
  components: {
    AInput,
    AMultiselectOrdered,
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

## Buttons for “Select All” and “Deselect All”

An example of displaying buttons for bulk selection or deselection. You can show both buttons or only one, depending on the interface needs.

*props: `is-select-all`, `is-deselect-all`*

```html
<a-multiselect-ordered
  v-model="model1"
  :data="data"
  :is-deselect-all="true"
  :is-select-all="true"
  key-id="value"
  key-label="label"
  label="Select 1"
></a-multiselect-ordered>
<a-multiselect-ordered
  v-model="model2"
  :data="data"
  :is-deselect-all="true"
  class="a_mt_3"
  key-id="value"
  key-label="label"
  label="Select 2"
></a-multiselect-ordered>
<a-multiselect-ordered
  v-model="model3"
  :data="data"
  :is-select-all="true"
  class="a_mt_3"
  key-id="value"
  key-label="label"
  label="Select 3"
></a-multiselect-ordered>
```

```js
import {
  ref,
} from "vue";

import { 
  AMultiselectOrdered,
} from "aloha-vue";
    
export default {
  name: "PageMultiselectOrderedSelectDeselectAll",
  components: {
    AMultiselectOrdered,
  },
  setup() {
    const data = [
      {
        value: "aloha_1",
        label: "Aloha 1",
      },
      {
        value: "aloha_2",
        label: "Aloha 2",
      },
      {
        value: "aloha_3",
        label: "Aloha 3",
      },
      {
        value: "aloha_4",
        label: "Aloha 4",
      },
    ];
    const model1 = ref(["aloha_4", "aloha_2"]);
    const model2 = ref([]);
    const model3 = ref([]);
    
    return {
      data,
      model1,
      model2,
      model3,
    };
  },
};
```

## Search in **HTML** text

This example demonstrates how to use the `search-text-in-html` prop to perform a search only on the visible text from the **HTML**, ignoring **HTML** tags.

*props: `search`, `search-text-in-html`*

```html
<a-multiselect-ordered
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :search-in-group="true"
  :search-text-in-html="true"
  :search="true"
  key-id="id"
  key-label="label"
  label="Aloha group"
></a-multiselect-ordered>
<a-multiselect-ordered
  v-model="model"
  :data="data"
  :search-text-in-html="true"
  :search="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-multiselect-ordered>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AMultiselectOrdered,
} from "aloha-vue";
    
export default {
  name: "PageMultiselectOrderedSearchTextInHtml",
  components: {
    AMultiselectOrdered,
  },
  setup() {
    const data = [
      {
        label: "<span>Aloha</span> <strong>1</strong>",
        id: "aloha_0",
        aloha: "",
        alohaBR: "<strong>Köln</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>2</strong>",
        id: "aloha_1",
        aloha: "Buba",
        alohaBR: "<strong>Köln</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>3</strong>",
        id: "aloha_2",
        aloha: "Buba",
        alohaBR: "<strong>Köln</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>4</strong>",
        id: "aloha_3",
        aloha: "Sandra",
        alohaBR: "<strong>Köln</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>5</strong>",
        id: "aloha_4",
        aloha: "Sandra",
        alohaBR: "<strong>Köln</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>6</strong>",
        id: "aloha_5",
        aloha: "Coco",
        alohaBR: "<strong>Düsseldorf</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>7</strong>",
        id: "aloha_6",
        aloha: "Coco",
        alohaBR: "<strong>Düsseldorf</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>8</strong>",
        id: "aloha_7",
        aloha: "Alex",
        alohaBR: "<strong>Düsseldorf</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>9</strong>",
        id: "aloha_8",
        aloha: "Alex",
        alohaBR: "<strong>Düsseldorf</strong>",
      },
    ];
    const model = ref("aloha_7");

    return {
      data,
      model,
    };
  },
};
```

## **Readonly** display mode

In this example, the component is used in **readonly** mode, where the value is displayed as text and cannot be modified by the user.

*props: `readonly`, `readonly-default`*

```html
<a-multiselect-ordered
  v-model="model1"
  :data="data"
  :readonly="true"
  key-id="value"
  key-label="label"
  label="Select 1"
></a-multiselect-ordered>
<a-multiselect-ordered
  v-model="model2"
  :data="data"
  :readonly="true"
  class="a_mt_3"
  key-id="value"
  key-label="label"
  label="Select 2"
></a-multiselect-ordered>
<a-multiselect-ordered
  v-model="model2"
  :data="data"
  :readonly="true"
  class="a_mt_3"
  key-id="value"
  key-label="label"
  label="Select 3"
  readonly-default="-"
></a-multiselect-ordered>
```

```js
import {
  ref,
} from "vue";

import { 
  AMultiselectOrdered,
} from "aloha-vue";
    
export default {
  name: "PageMultiselectOrderedReadonly",
  components: {
    AMultiselectOrdered,
  },
  setup() {
    const data = [
      {
        value: "aloha_1",
        label: "Aloha 1",
      },
      {
        value: "aloha_2",
        label: "Aloha 2",
      },
      {
        value: "aloha_3",
        label: "Aloha 3",
      },
      {
        value: "aloha_4",
        label: "Aloha 4",
      },
    ];
    const model1 = ref(["aloha_4", "aloha_2"]);
    const model2 = ref(undefined);
    
    return {
      data,
      model1,
      model2,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| api-save-id | String |  |  | A unique identifier for saving data retrieved from the **API**. This can be useful for caching or reusing data within a session. |
| attributes-btn-deselect-all | Object | () => ({}) |  | Attributes and props passed to the **AElement** component used for the “Deselect All” button. They allow customizing the behavior, appearance, and accessibility of the button. |
| attributes-btn-select-all | Object | () => ({}) |  | Attributes and props passed to the **AElement** component used for the “Select All” button. They allow customizing the display, behavior, and accessibility of the button. |
| attributes-fieldset | Object | () => ({}) |  | **HTML** attributes to be added to the **fieldset** tag. |
| btn-delete-class | String / Object | a_btn a_btn_primary |  | **CSS** class for the delete button of an item in the selected list. |
| btn-delete-icon | String | Trash |  | Icon for the item delete button. |
| btn-down-class | String / Object | a_btn a_btn_outline_secondary |  | **CSS** class for the button to move an item closer to the end of the list. |
| btn-down-icon | String | ChevronDown |  | Icon for the button to move an item closer to the end of the list. |
| btn-group-class | String | a_btn_group |  | **CSS** class for the container of the control buttons for the selected item. |
| btn-up-class | String / Object | a_btn a_btn_outline_secondary |  | **CSS** class for the button to move an item closer to the beginning of the list. |
| btn-up-icon | String | ChevronUp |  | Icon for the button to move an item closer to the beginning of the list. |
| change | Function | () => {} |  | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| class-fieldset | String / Object |  |  | **CSS** classes that will be applied to the **fieldset** tag containing the group of controls. This allows customizing the appearance of the group of form elements. |
| class-fieldset | String / Object |  |  | **CSS** classes that will be applied to the **fieldset** tag containing the group of controls. This allows customizing the appearance of the group of form elements. |
| data | Array |  |  | An array of data used to generate the items. |
| data-extra | Array | () => [] |  | An additional array of items not included in the main data array. Its items support the same grouping configuration as **data** through **key-group** and the related group props. |
| merge-data | Boolean | false |  | Determines whether internally loaded data is merged with the **data** prop. Items are merged by their ID; when both sources contain the same ID, the internally loaded item takes precedence. If set to **false**, internally loaded data replaces the **data** prop. |
| dependencies | Array / Object |  |  | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| disabled | Boolean |  |  | Determines whether the component is disabled. If set to **true**, the component becomes inactive and the user cannot interact with it. |
| errors | String / Array |  |  | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| exclude-render-attributes | Array | () => [] |  | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final **DOM**. |
| extra | Object |  |  | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like **"_WELCOME_{{foo}}_{{bar}}_"**, which is translated as **"Welcome {{ foo }}: {{ bar }}"**, you can pass an object like **{ foo: "abc", bar: "123" }**, and the result will be the translation **"Welcome abc: 123"**. |
| has-border | Boolean | true |  | Specifies whether the item should have a border. If set to **true**, a border will be displayed around the item. |
| help-text | String |  |  | Help text displayed below the component. Provides the user with additional information or instruction. |
| html-id | String |  |  | Sets the **HTML ID** of the element. Can be used to uniquely identify the component on the page. |
| id | String / Number | () => uniqueId("a_m_select_ordered_") |  | The identifier of the component, which can be used to track or refer to the component in the code. |
| id-prefix | String |  |  | Prefix for the component's **ID**. Used to create a unique identifier based on the specified prefix. |
| is-data-simple-array | Boolean |  |  | Determines whether the data array is a simple array of values. If set to **true**, each element of the array will be treated as a simple value without keys. |
| is-deselect-all | Boolean | false |  | Display the button. Clicking it will deselect all items in the list. |
| is-hide | Boolean |  |  | Determines whether the component should be hidden. If set to **true**, the component is not displayed on the page. |
| is-render | Boolean | true |  | Indicates whether the component should be rendered. If set to **false**, the component will not be created in the **DOM**. |
| is-select-all | Boolean | false |  | Display the button. Clicking it will automatically select all items from the list. |
| key-disabled | String |  |  | Specifies the key in the data object that determines whether the item will be disabled (unselectable). |
| key-disabled-callback | Function |  |  | A function to determine whether an item should be disabled. Returns `true` to disable a specific item. Accepts an object with item data: `{ item }`. |
| key-group | String / Number / Array |  |  | A key or array of keys used to group data by specific categories. This property allows grouping items into groups. |
| key-group-label-callback | Function |  |  | A callback function that takes two arguments **({ group, item })** and returns the group name. It is used to dynamically determine group names based on the provided data. |
| key-id | String | value |  | The key in the data object that will be used as the identifier for each item. |
| key-label | String | label |  | The key in the data object that specifies the label text for each item. |
| key-label-callback | Function |  |  | A callback function used to generate the label text based on the item data. This allows dynamically creating labels based on complex logic. |
| label | String / Number |  |  | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| label-class | String / Object |  |  | **CSS** class(es) applied to the label. Allows customizing the label's style. |
| label-description | String |  |  | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| label-screen-reader | String / Number |  |  | Label intended for screen readers. Useful for improving accessibility. |
| list-item-class | String / Object / Array | a_list_group__item |  | **CSS** class for the list item of selected values. |
| loading | Boolean |  |  | Indicates whether the item is in a loading state. If set to **true**, the item displays a loading indicator. |
| model-dependencies | Object | () => ({}) |  | Determines model dependencies that may affect the visibility or behavior of the component. |
| model-value | Array |  |  | The current model value associated with the component. Used to manage the data displayed in the component. |
| options | Object | () => ({}) |  | Additional data object available within the component, in slots, or custom logic. |
| readonly | Boolean |  |  | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| readonly-default | String |  |  | The default text that is shown if the value is missing in read-only mode. |
| required | Boolean |  |  | Indicates whether the component is required. If set to **true**, the component requires user input. |
| search | Boolean |  |  | Determines whether the search feature is supported. If set to **true**, users will be able to search within the group. |
| search-api | Boolean |  |  | Specifies whether item searches will be performed using an **API**. If set to **true**, data will be loaded from the server as the query is entered. |
| search-api-key | String |  |  | The key used to perform the search via **API**. Typically, this is a parameter passed in the server request to filter the data. |
| search-in-group | Boolean |  |  | Enables additional search by group names. |
| search-outside | Boolean |  |  | Determines whether the search will be performed outside the component, for example, via **API** or another external data source. |
| search-text-in-html | Boolean |  |  | If set to `true`, the search will be performed on the text extracted from the rendered **HTML**. This allows searching only visible text shown to the user, ignoring tags and attributes. |
| search-timeout | Number | 0 |  | Specifies the delay time in milliseconds before performing the search. Useful for preventing excessive requests during fast text input by the user. |
| select-button-class | String |  |  | Additional CSS class of the button that opens the list. |
| select-button-class-default | String / Object | a_form_control a_select_toggle |  | Default CSS classes of the button that opens the list. Replace them to change the look completely. |
| select-caret-icon | String / Object | ChevronDown |  | Icon next to the button that opens the list. The default is a downward arrow. |
| select-has-caret | Boolean | true |  | Shows the icon next to the button that opens the list. |
| select-in-body | Boolean | true |  | The list is rendered in the container popper-container-id at the end of the body, otherwise directly after the button. |
| select-is-close-by-click | Boolean | false |  | Closes the list after an item is chosen. By default: yes for select, no for multiselect. |
| select-is-label-float | Boolean | true |  | Deprecated, use label-position. true → "float", false → "top". |
| select-is-selection-closeable | Boolean | true |  | Multiselect: all selected items are shown in the button. If false, only the count is shown when there are more than count-multiselect. |
| select-label | String / Number | _A_MULTISELECT_ORDERED_LABEL_SELECT_ |  | Label of the field (text or translation key). |
| select-label-class | String / Object |  |  | Additional CSS class of the label. |
| select-label-screenreader | String |  |  | Label that is read only by screen readers. |
| select-menu-class | String / Object |  |  | Additional CSS class of the list. |
| select-menu-width-type | String | as_button |  | Width of the list: "as_button" (as wide as the button) or "by_content" (as wide as its content). |
| select-placeholder | String |  |  | Text in the button when nothing is selected. |
| select-placement | String | bottom-end |  | Position of the list relative to the button. |
| select-popper-container-id | String | a_select_container |  | ID of the container at the end of the body in which the list is rendered (with in-body). |
| slot-name | String |  |  | The name of the main slot used to insert custom content into the component. |
| sort-order | String | asc |  | Specifies the sort order of items. Possible values: **asc** (ascending) or **desc** (descending). |
| sort-order-group | String | asc |  | Specifies the sort order of groups if the items are grouped. Possible values: **asc** (ascending) or **desc** (descending). |
| texts | String | {         btnDeleteTitle: "_A_MULTISELECT_ORDERED_BTN_DELETE_",         btnDownTitle: "_A_MULTISELECT_ORDERED_BTN_DOWN_",         btnGroupAriaLabel: "_A_MULTISELECT_ORDERED_BTN_GROUP_ARIA_LABEL_",         btnUpTitle: "_A_MULTISELECT_ORDERED_BTN_UP_",         deselectAll: "_A_MULTISELECT_ORDERED_DESELECT_ALL_",         groupAllAriaLabel: "_A_MULTISELECT_ORDERED_GROUP_ALL_",         modelEmpty: "_A_MULTISELECT_ORDERED_MODEL_EMPTY_",         selectAll: "_A_MULTISELECT_ORDERED_SELECT_ALL_",       } |  | An object with custom texts to replace default labels such as “Select All”, “Deselect All”, “No items selected”, and others. |
| translate-data | Boolean | false |  | Indicates whether the data should be translated before display. If set to **true**, text values will be translated according to the current language settings. |
| url | String |  |  | URL used to load the component’s options. Supports `{{ path }}` placeholders resolved from `url-template-data`. |
| url-retrieve | String |  |  | An optional **URL** used specifically to retrieve already selected values that are missing from the main loaded list. |
| url-params | Object |  |  | Parameters that will be added to the **URL** request when loading data from the server. These parameters allow filtering or modifying the data retrieved from the **API**. |
| url-retrieve-params | Object |  |  | Optional parameters that will be added only to the retrieve request used for loading missing selected values. |
| url-template-data | Object |  |  | Object with values for `{{ path }}` placeholders in `url`, including nested paths such as `{{ source.file }}`. Uses the same placeholder syntax as translations. Changing these values reloads the options and clears the selection only when the resolved URL changes. Does not affect URLs without placeholders; query parameters are passed separately via `url-params`. |

## Translations

| key | en |
| --- | --- |
| `_A_MULTISELECT_ORDERED_BTN_DELETE_` | Remove from list |
| `_A_MULTISELECT_ORDERED_BTN_DOWN_` | Move closer to the end of the list |
| `_A_MULTISELECT_ORDERED_BTN_GROUP_ARIA_LABEL_` | Actions for |
| `_A_MULTISELECT_ORDERED_BTN_UP_` | Move closer to the beginning of the list |
| `_A_MULTISELECT_ORDERED_DESELECT_ALL_` | Deselect all |
| `_A_MULTISELECT_ORDERED_GROUP_ALL_` | Selection control |
| `_A_MULTISELECT_ORDERED_LABEL_SELECT_` | Select an item |
| `_A_MULTISELECT_ORDERED_MODEL_EMPTY_` | No items selected |
| `_A_MULTISELECT_ORDERED_SELECT_ALL_` | Select all |
