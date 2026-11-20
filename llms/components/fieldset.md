# AFieldset (Fieldset Group)

The **AFieldset** component is used to group form elements into a logical set. It supports various features, such as error display, help text, content collapse/expand, and customization of styles for child elements.

## Basic usage

*props: `model-value`, `label`, `children`*

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
  name: "PageFieldsetBasic",
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
    ];
    const model = ref(undefined);
    
    return {
      children,
      model,
    };
  },
};
```

## Model change function

In this example, the **change** function is responsible for updating the component's model. The function takes three arguments: the model **model**, the component identifier **id**, and all passed **props**. This approach allows flexible handling of model changes and performing additional actions such as logging or validation.

*props: `change`, `model-value`*

```html
<a-fieldset
  :change="changeModel"
  :children="children"
  :model-value="model"
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
  name: "PageFieldsetChange",
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
    ];
    const model = ref(undefined);
    
    const changeModel = ({ model: _model, id, props }) => {
      model.value = _model;
      console.log(id, props);
    };
    
    return {
      children,
      changeModel,
      model,
    };
  },
};
```

## Help text

This example shows how to use **help-text** to add a help text below the input field. The help text provides additional information to the user about the expected data in this field.

*props: `help-text`*

```html
<a-fieldset
  v-model="model"
  :children="children"
  help-text="Aloha"
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
  name: "PageFieldsetHelpText",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "aloha.text2",
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "aloha.checkbox2",
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

## Error display

This example shows how to use **errors** to display error messages below the input field. Error messages help the user understand which data was entered incorrectly and how to correct it.

*props: `errors`*

```html
<a-fieldset
  v-model="model"
  :children="children"
  errors="Aloha"
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
  name: "PageFieldsetError",
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
    ];
    const model = ref(undefined);
    
    return {
      children,
      model,
    };
  },
};
```

## Using **label-description**

This example shows how to use **label-description** to add additional description to the component label. This allows providing the user with more detailed information about the purpose of the field.

*props: `label-description`*

```html
<a-fieldset
  v-model="model"
  :children="children"
  label="Fieldset"
  label-description="Aloha"
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
  name: "PageFieldsetLabelDescription",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "aloha.text2",
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "aloha.checkbox2",
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

## Label for screen reader

This example shows how to use **label-screen-reader**. It allows you to set a hidden label that will only be visible to screen readers.

*props: `label-screen-reader`*

```html
<a-fieldset
  v-model="model"
  :children="children"
  label="Fieldset"
></a-fieldset>
<a-fieldset
  v-model="model"
  :children="children"
  class="a_mt_3"
  label-screen-reader="Fieldset"
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
  name: "PageFieldsetLabelScreenReader",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "label.text",
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "label.checkbox",
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

## Collapse/expand

This example demonstrates how to use **collapsible** and **is-collapsed** in the component. The **collapsible** property allows the group of items to be collapsible, while **is-collapsed** sets the initial collapsed state. The example also demonstrates the use of the **toggle-collapse** event, which is triggered when the group is collapsed or expanded.

*props: `collapsible`, `is-collapsed`; emits: `toggle-collapse`*

```html
<a-fieldset
  v-model="model1"
  :children="children1"
  :collapsible="true"
  label="Aloha"
  @toggle-collapse="toggleCollapse"
></a-fieldset>
<div>model1: {{ model1 }}</div>
<a-fieldset
  v-model="model2"
  :children="children2"
  :collapsible="true"
  class="a_mt_3"
  label="Aloha"
  @toggle-collapse="toggleCollapse"
></a-fieldset>
<div>model2: {{ model2 }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetCollapse",
  components: {
    AFieldset,
  },
  setup() {
    const children1 = [
      {
        type: "text",
        label: "Text",
        id: "aloha1.text",
      },
    ];
    const children2 = [
      {
        type: "text",
        label: "Text",
        id: "aloha2.text",
      },
    ];
    const model1 = ref(undefined);
    const model2 = ref(undefined);
    
    const toggleCollapse = ({ isCollapsed, id, props }) => {
      console.log(isCollapsed, id, props);
    };

    return {
      children1,
      children2,
      model1,
      model2,
      toggleCollapse,
    };
  },
};
```

## Border display

This example demonstrates how to use **has-border** to control the display of borders. In the first example, the border is enabled, making the items more prominent. In the second example, the border is disabled, giving the items a more minimalist appearance.

*props: `has-border`*

```html
<a-fieldset
  v-model="model"
  :children="children"
  :has-border="true"
  label="Fieldset"
></a-fieldset>
<a-fieldset
  v-model="model"
  :children="children"
  :has-border="false"
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
  name: "PageFieldsetHasBorder",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "border.text",
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "border.checkbox",
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

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| attributes-fieldset | Object | () => ({}) |  | **HTML** attributes to be added to the **fieldset** tag. |
| change | Function | () => {} |  | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| children | Array | () => [] |  | An array of child elements that will be rendered inside the component. Each element in the array is an object with parameters such as **type**, **label**, **id**, and other properties for configuring and displaying the child element. |
| class-column-default | String / Object | a_column a_column_12 |  | Sets a **CSS** class for all child elements unless a separate **classColumn** is specified for a specific element in the **children** array. This makes it easy to manage the display of all child elements at once. |
| class-columns | String / Object | a_columns a_columns_count_12 |  | **CSS** classes that will be applied to the container where child elements from the **children** prop are placed. These classes control the number of columns, spacing between them, and their responsive behavior. |
| class-fieldset | String / Object |  |  | **CSS** classes that will be applied to the **fieldset** tag containing the group of controls. This allows customizing the appearance of the group of form elements. |
| collapsible | Boolean |  |  | Specifies whether the group of checkboxes can be collapsed and expanded. If set to **true**, the group can be toggled by the user. |
| dependencies | Array / Object |  |  | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| disabled | Boolean |  |  | Determines whether the component is disabled. If set to **true**, the component becomes inactive and the user cannot interact with it. |
| errors | String / Array |  |  | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| errors-all | Object | () => ({}) |  | An object containing errors for all child elements passed through **children**. Each error should be specified for the corresponding element by its **id**. |
| exclude-render-attributes | Array | () => [] |  | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final **DOM**. |
| extra | Object |  |  | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like **"_WELCOME_{{foo}}_{{bar}}_"**, which is translated as **"Welcome {{ foo }}: {{ bar }}"**, you can pass an object like **{ foo: "abc", bar: "123" }**, and the result will be the translation **"Welcome abc: 123"**. |
| has-border | Boolean | true |  | Specifies whether the item should have a border. If set to **true**, a border will be displayed around the item. |
| help-text | String |  |  | Help text displayed below the component. Provides the user with additional information or instruction. |
| html-id | String |  |  | Sets the **HTML ID** of the element. Can be used to uniquely identify the component on the page. |
| id | String / Number | () => uniqueId("a_fieldset_") |  | The identifier of the component, which can be used to track or refer to the component in the code. |
| id-prefix | String |  |  | Prefix for the component's **ID**. Used to create a unique identifier based on the specified prefix. |
| is-collapsed | Boolean |  |  | Specifies the initial collapsed state of the checkbox group. If set to **true**, the group will be collapsed when the page loads. |
| is-hide | Boolean |  |  | Determines whether the component should be hidden. If set to **true**, the component is not displayed on the page. |
| is-render | Boolean | true |  | Indicates whether the component should be rendered. If set to **false**, the component will not be created in the **DOM**. |
| label | String / Number |  |  | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| label-class | String / Object |  |  | **CSS** class(es) applied to the label. Allows customizing the label's style. |
| label-description | String |  |  | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| label-screen-reader | String / Number |  |  | Label intended for screen readers. Useful for improving accessibility. |
| model-dependencies | Object | () => ({}) |  | Determines model dependencies that may affect the visibility or behavior of the component. |
| model-value | Object | () => ({}) |  | The current model value associated with the component. Used to manage the data displayed in the component. |
| readonly | Boolean |  |  | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| readonly-default | String |  |  | The default text that is shown if the value is missing in read-only mode. |
| required | Boolean |  |  | Indicates whether the component is required. If set to **true**, the component requires user input. |
| slot-name | String |  |  | The name of the main slot used to insert custom content into the component. |
| texts | Object | () => ({         collapseClose: "_A_FIELDSET_COLLAPSE_CLOSE_",         collapseOpen: "_A_FIELDSET_COLLAPSE_OPEN_",       }) |  | Allows you to customize the text for the collapse and expand actions of the component. By default, **_A_FIELDSET_COLLAPSE_CLOSE_** is used for closing and **_A_FIELDSET_COLLAPSE_OPEN_** for opening. |
| use-flat-errors | Boolean | true |  | _A_PROPS_USE_FLAT_ERRORS_DESCRIPTION_ |
| use-flat-model | Boolean | true |  | _A_PROPS_USE_FLAT_MODEL_DESCRIPTION_ |
| use-html-id-as-key | Boolean | false |  | Use **htmlId** instead of the index as the key for form elements |

## Events

| name | type | description |
| --- | --- | --- |
| update-data | Function | An event triggered when the component data is updated. It can be used to perform actions after the data has been changed or updated, such as re-sorting or filtering items. |
| toggle-collapse | Function | The event is triggered when the user collapses or expands the group of items. |
| update:model-value | Function | Event triggered when the component's model value is updated. Used to synchronize data between the component and the parent component. |

## Translations

| key | en |
| --- | --- |
| `_A_FIELDSET_COLLAPSE_OPEN_` | Open |
| `_A_FIELDSET_COLLAPSE_CLOSE_` | Close |

## CSS variables (`scss/components/ui/AFieldset.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_fieldset_padding_x` |  | Horizontal padding of the fieldset. Also the position of the collapse button. |
| `--a_fieldset_padding_top` |  | Top padding of the fieldset. |
| `--a_fieldset_padding_bottom` |  | Bottom padding of the fieldset. |
| `--a_fieldset_border_radius` |  | Corner radius of the fieldset. |
| `--a_fieldset_border_color` |  | Border color of the fieldset. |
| `--a_fieldset_border_width` |  | Border width of the fieldset. |
| `--a_fieldset_invalid_color` |  | Border color of the fieldset when it has errors. |
| `--a_fieldset_legend_bg` |  | Background behind the legend and the collapse button on the border. |
| `--a_legend_padding_x` |  | Horizontal padding of the legend. |
| `--a_legend_color` |  | Text color of the legend. |
| `--a_legend_font_size` |  | Font size of the legend. |
| `--a_legend_invalid_color` |  | Text color of the legend when the fieldset has errors. |
| `--a_legend_font_weight` |  | Font weight of the legend. |
