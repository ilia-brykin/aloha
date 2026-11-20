# ASelectIcon (Icon selector)

A component based on **ASelect** that allows selecting one or multiple icons available in the system. Supports search, grouping, display customization, and icon management.

## Basic usage

*props: `model-value`, `type`*

```html
<a-select-icon
  v-model="model1"
  label="Select"
  type="select"
></a-select-icon>
<div>model1: {{ model1 }}</div>
<a-select-icon
  v-model="model2"
  class="a_mt_3"
  label="Multiselect"
  type="multiselect"
></a-select-icon>
<div>model2: {{ model2 }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ASelectIcon,
} from "aloha-vue";
    
export default {
  name: "PageSelectIconBasic",
  components: {
    ASelectIcon,
  },
  setup() {
    const model1 = ref(undefined);
    const model2 = ref(undefined);

    return {
      model1,
      model2,
    };
  },
};
```

## Label position

**label-position** sets where the label is shown: `"float"` – inside the empty field, it moves to the border on focus or with a value; `"inset"` – always inside the field, small above the value; `"top"` – above the field. The default for all form elements is set with **AFormPlugin** (`labelPosition`). **is-label-float** still works, but is deprecated.

*props: `label-position`*

```html
<a-select-icon
  v-model="model"
  label="label-position: float"
  label-position="float"
  type="select"
></a-select-icon>
<a-select-icon
  v-model="model"
  label="label-position: inset"
  label-position="inset"
  type="select"
></a-select-icon>
<a-select-icon
  v-model="model"
  label="label-position: top"
  label-position="top"
  type="select"
></a-select-icon>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  ASelectIcon,
} from "aloha-vue";

export default {
  name: "PageSelectIconLabelPosition",
  components: {
    ASelectIcon,
  },
  setup() {
    const model = ref(undefined);

    return {
      model,
    };
  },
};
```

## Model change function

In this example, the **change** function is responsible for updating the component's model. The function takes three arguments: the model **model**, the component identifier **id**, and all passed **props**. This approach allows flexible handling of model changes and performing additional actions such as logging or validation.

*props: `change`, `model-value`*

```html
<a-select-icon
  :change="changeModel1"
  :model-value="model1"
  label="Select 1"
></a-select-icon>
<div>model1: {{ model1 }}</div>
<a-select-icon
  :change="changeModel2"
  :model-value="model2"
  class="a_mt_3"
  label="Select 2"
  type="multiselect"
></a-a-select-icon>
<div>model1: {{ model1 }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ASelectIcon,
} from "aloha-vue";
    
export default {
  name: "PageSelectIconChange",
  components: {
    ASelectIcon,
  },
  setup() {
    const model1 = ref(undefined);
    const model2 = ref(undefined);

    const changeModel1 = ({ model: _model, id, props, item, currentModel }) => {
      model1.value = _model;
      console.log(id, props, item, currentModel);
    };
    const changeModel2 = ({ model: _model, id, props, item, currentModel }) => {
      model2.value = _model;
      console.log(id, props, item, currentModel);
    };
    
    return {
      changeModel1,
      changeModel2,
      model1,
      model2,
    };
  },
};
```

## Help text

This example shows how to use **help-text** to add a help text below the input field. The help text provides additional information to the user about the expected data in this field.

*props: `help-text`*

```html
<a-select-icon
  v-model="model"
  help-text="Aloha"
  label="Select"
></a-select-icon>
```

```js
import {
  ref,
} from "vue";

import { 
  ASelectIcon,
} from "aloha-vue";
    
export default {
  name: "PageSelectIconHelpText",
  components: {
    ASelectIcon,
  },
  setup() {
    const model = ref(undefined);
    
    return {
      model,
    };
  },
};
```

## Error display

This example shows how to use **errors** to display error messages below the input field. Error messages help the user understand which data was entered incorrectly and how to correct it.

*props: `errors`*

```html
<a-select-icon
  v-model="model"
  errors="Aloha"
  label="Select"
></a-select-icon>
```

```js
import {
  ref,
} from "vue";

import { 
  ASelectIcon,
} from "aloha-vue";
    
export default {
  name: "PageSelectIconErrors",
  components: {
    ASelectIcon,
  },
  setup() {
    const model = ref(undefined);
    
    return {
      model,
    };
  },
};
```

## Using **label-description**

This example shows how to use **label-description** to add additional description to the component label. This allows providing the user with more detailed information about the purpose of the field.

*props: `label-description`*

```html
<a-select-icon
  v-model="model"
  label-position="top"
  label="Select"
  label-description="Aloha"
></a-select-icon>
```

```js
import {
  ref,
} from "vue";

import { 
  ASelectIcon,
} from "aloha-vue";
    
export default {
  name: "PageSelectIconLabelDescription",
  components: {
    ASelectIcon,
  },
  setup() {
    const model = ref(undefined);
    
    return {
      model,
    };
  },
};
```

## **Readonly** display mode

In this example, the component is used in **readonly** mode, where the value is displayed as text and cannot be modified by the user.

*props: `readonly`, `readonly-default`*

```html
<a-select-icon
  :model-value="model1"
  :readonly="true"
  label="Select 1"
  type="select"
></a-select-icon>
<a-select-icon
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="Select 2"
  type="multiselect"
></a-select-icon>
<a-select-icon
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Select 3"
  type="select"
></a-select-icon>
<a-select-icon
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Select 4"
  type="multiselect"
></a-select-icon>
<a-select-icon
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  help-text="Aloha"
  label="Select 5"
  readonly-default="-"
  type="select"
></a-select-icon>
```

```js
import {
  ref,
} from "vue";

import { 
  ASelectIcon,
} from "aloha-vue";
    
export default {
  name: "PageSelectIconReadonly",
  components: {
    ASelectIcon,
  },
  setup() {
    const model1 = ref("ArrowRightCircle");
    const model2 = ref(["Boxes", "ChevronBarExpand"]);
    const model3 = ref(undefined);

    return {
      model1,
      model2,
      model3,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| button-class | String |  |  | Additional CSS class of the button that opens the list. |
| button-class-default | String / Object | a_form_control a_select_toggle |  | Default CSS classes of the button that opens the list. Replace them to change the look completely. |
| caret-icon | String / Object | ChevronDown |  | Icon next to the button that opens the list. The default is a downward arrow. |
| change | Function | () => {} |  | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| class | String / Object |  |  | CSS class or class object of the outer container of the component. |
| count-multiselect | Number | 4 |  | Multiselect: how many selected items are shown in the button. The others are summarized as "+N more". |
| data | Array |  |  | An array of data used to generate the items. |
| dependencies | Array / Object |  |  | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| deselectable | Boolean | true |  | Select: the selected item can be deselected by clicking it again. |
| disabled | Boolean |  |  | Determines whether the component is disabled. If set to **true**, the component becomes inactive and the user cannot interact with it. |
| errors | String / Array |  |  | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| exceeded-items-deletable | Boolean | true |  | Multiselect: shows a button that removes the selected items beyond count-multiselect. |
| exclude-render-attributes | Array | () => [] |  | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final **DOM**. |
| extra | Object |  |  | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like **"_WELCOME_{{foo}}_{{bar}}_"**, which is translated as **"Welcome {{ foo }}: {{ bar }}"**, you can pass an object like **{ foo: "abc", bar: "123" }**, and the result will be the translation **"Welcome abc: 123"**. |
| has-caret | Boolean | true |  | Shows the icon next to the button that opens the list. |
| help-text | String |  |  | Help text displayed below the component. Provides the user with additional information or instruction. |
| html-id | String |  |  | Sets the **HTML ID** of the element. Can be used to uniquely identify the component on the page. |
| id | String / Number | () => uniqueId("a_select_icon_") |  | The identifier of the component, which can be used to track or refer to the component in the code. |
| id-prefix | String |  |  | Prefix for the component's **ID**. Used to create a unique identifier based on the specified prefix. |
| in-body | Boolean | true |  | The list is rendered in the container popper-container-id at the end of the body, otherwise directly after the button. |
| is-close-by-click | Boolean |  |  | Closes the list after an item is chosen. By default: yes for select, no for multiselect. |
| is-deselect-all | Boolean | false |  | Display the button. Clicking it will deselect all items in the list. |
| is-hide | Boolean |  |  | Determines whether the component should be hidden. If set to **true**, the component is not displayed on the page. |
| is-label-float | Boolean |  |  | Determines whether the label of the component should be positioned above the field. If **true**, the label will move above the text field when focused or when content is present. Deprecated, use label-position. |
| is-render | Boolean | true |  | Indicates whether the component should be rendered. If set to **false**, the component will not be created in the **DOM**. |
| is-select-all | Boolean | false |  | Display the button. Clicking it will automatically select all items from the list. |
| is-selection-closeable | Boolean | true |  | Multiselect: all selected items are shown in the button. If false, only the count is shown when there are more than count-multiselect. |
| key-disabled | String |  |  | Specifies the key in the data object that determines whether the item will be disabled (unselectable). |
| key-disabled-callback | Function |  |  | A function to determine whether an item should be disabled. Returns `true` to disable a specific item. Accepts an object with item data: `{ item }`. |
| key-group | String / Number / Array | () => ["groupName", "subGroupName"] |  | A key or array of keys used to group data by specific categories. This property allows grouping items into groups. |
| key-group-label-callback | Function |  |  | A callback function that takes two arguments **({ group, item })** and returns the group name. It is used to dynamically determine group names based on the provided data. |
| key-id | String | value |  | The key in the data object that will be used as the identifier for each item. |
| key-label | String | label |  | The key in the data object that specifies the label text for each item. |
| key-label-callback | Function |  |  | A callback function used to generate the label text based on the item data. This allows dynamically creating labels based on complex logic. |
| key-title | String |  |  | The key in the data object that specifies the title for each item. |
| key-title-callback | Function |  |  | A callback function used to generate the title based on the item data. This allows dynamically creating titles based on complex logic. |
| label | String / Number |  |  | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| label-class | String / Object |  |  | **CSS** class(es) applied to the label. Allows customizing the label's style. |
| label-description | String |  |  | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| label-position | "float" / "inset" / "top" | "float" |  | Position of the label: "float", "inset" or "top". The default comes from the component plugin or AFormPlugin (labelPosition). |
| label-screen-reader | String / Number |  |  | Label intended for screen readers. Useful for improving accessibility. |
| max-count-multiselect | Number |  |  | Multiselect: maximum number of items that can be selected. |
| menu-width-type | String | as_button |  | Width of the list: "as_button" (as wide as the button) or "by_content" (as wide as its content). |
| model-dependencies | Object | () => ({}) |  | Determines model dependencies that may affect the visibility or behavior of the component. |
| model-value | String / Array |  |  | The current model value associated with the component. Used to manage the data displayed in the component. |
| options | Object | () => ({}) |  | Additional data object available within the component, in slots, or custom logic. |
| placeholder | String |  |  | Specifies the placeholder text that will be displayed in the input field until the user enters data. The placeholder helps the user understand what data is expected in the field. |
| placement | String | bottom-end |  | Position of the list relative to the button. |
| popper-container-id | String | a_select_container |  | ID of the container at the end of the body in which the list is rendered (with in-body). |
| readonly | Boolean |  |  | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| readonly-default | String |  |  | The default text that is shown if the value is missing in read-only mode. |
| required | Boolean |  |  | Indicates whether the component is required. If set to **true**, the component requires user input. |
| search | Boolean |  |  | Determines whether the search feature is supported. If set to **true**, users will be able to search within the group. |
| search-text-in-html | Boolean |  |  | If set to `true`, the search will be performed on the text extracted from the rendered **HTML**. This allows searching only visible text shown to the user, ignoring tags and attributes. |
| search-timeout | Number | 0 |  | Specifies the delay time in milliseconds before performing the search. Useful for preventing excessive requests during fast text input by the user. |
| select-menu-class | String / Object |  |  | Additional CSS class of the list. |
| slot-name | String | icon |  | The name of the main slot used to insert custom content into the component. |
| sort-order | String | asc |  | Specifies the sort order of items. Possible values: **asc** (ascending) or **desc** (descending). |
| text-deselect-all | String | _A_SELECT_DESELECT_ALL_ |  | Text of the “Deselect all” button. |
| text-select-all | String | _A_SELECT_SELECT_ALL_ |  | Text of the “Select all” button. |
| type | String | select |  | Defines the selector type. Supported values are **select**, **selectIcon**, **multiselect**, and **multiselectIcon**. |

## Events

| name | type | description |
| --- | --- | --- |
| update:model-value | Function | Event triggered when the component's model value is updated. Used to synchronize data between the component and the parent component. |
| focus | Function | Event triggered when the component gains focus. Useful for tracking user interaction with the element. |
| blur | Function | Event triggered when the component loses focus. Used to validate or save data when the user leaves the field. |
| open | Function | Emitted when the list is opened. |
