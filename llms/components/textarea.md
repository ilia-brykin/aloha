# ATextarea (Multiline text field)

The **ATextarea** component provides the functionality of a text field with various settings such as scalability, a clear button, and the ability to resize. The component also supports labels, help text, and error display.

## Basic usage

*props: `model-value`, `label`*

```html
<a-textarea
  v-model="model"
  label="Textarea"
></a-textarea>
<div>model:</div>
<pre>{{ model }}</pre>
```

```js
import {
  ref,
} from "vue";

import { 
  ATextarea,
} from "aloha-vue";
    
export default {
  name: "PageTextareaBasic",
  components: {
    ATextarea,
  },
  setup() {
    const model = ref("Aloha");
    
    return {
      model,
    };
  },
};
```

## Label position

**label-position** sets where the label is shown: `"float"` – inside the empty field, it moves to the border on focus or with a value; `"inset"` – always inside the field, small above the value; `"top"` – above the field. The default for all form elements is set with **AFormPlugin** (`labelPosition`). **is-label-float** still works, but is deprecated.

*props: `label-position`*

```html
<a-textarea
  v-model="model"
  label="label-position: float"
  label-position="float"
></a-textarea>
<a-textarea
  v-model="model"
  label="label-position: inset"
  label-position="inset"
></a-textarea>
<a-textarea
  v-model="model"
  label="label-position: top"
  label-position="top"
></a-textarea>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  ATextarea,
} from "aloha-vue";

export default {
  name: "PageTextareaLabelPosition",
  components: {
    ATextarea,
  },
  setup() {
    const model = ref("Aloha");

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
<a-textarea
  :change="changeModel"
  :model-value="model"
  label="Textarea"
></a-textarea>
<div>model:</div>
<pre>{{ model }}</pre>
```

```js
import {
  ref,
} from "vue";

import { 
  ATextarea,
} from "aloha-vue";
    
export default {
  name: "PageTextareaChange",
  components: {
    ATextarea,
  },
  setup() {
    const model = ref("Aloha");
    
    const changeModel = ({ model: _model, id, props }) => {
      model.value = _model;
      console.log(id, props);
    };
    
    return {
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
<a-textarea
  v-model="model"
  help-text="Aloha"
  label="Textarea"
></a-textarea>
```

```js
import {
  ref,
} from "vue";

import { 
  ATextarea,
} from "aloha-vue";
    
export default {
  name: "PageTextareaHelpText",
  components: {
    ATextarea,
  },
  setup() {
    const model = ref("Aloha");
    
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
<a-textarea
  v-model="model"
  errors="Aloha"
  label="Textarea"
></a-textarea>
```

```js
import {
  ref,
} from "vue";

import { 
  ATextarea,
} from "aloha-vue";
    
export default {
  name: "PageTextareaErrors",
  components: {
    ATextarea,
  },
  setup() {
    const model = ref("Aloha");
    
    return {
      model,
    };
  },
};
```

## Error icon

This example shows how to display a custom error icon when the component has validation errors. If the component has an input field, the icon is shown inside it; otherwise, it is displayed next to the control. The icon is rendered only if both **errors** and **error-icon** are provided.

*props: `errors`, `error-icon`*

```html
<a-textarea
  v-model="model"
  :error-icon="errorIcon"
  errors="Aloha"
  label="Textarea"
></a-textarea>
```

```js
import {
  ref,
} from "vue";

import { 
  ATextarea,
} from "aloha-vue";
    
export default {
  name: "PageTextareaErrorIcon",
  components: {
    ATextarea,
  },
  setup() {
    const model = ref("Aloha");
    const errorIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\"><path d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"/></svg>";
    
    return {
      errorIcon,
      model,
    };
  },
};
```

## Using **label-description**

This example shows how to use **label-description** to add additional description to the component label. This allows providing the user with more detailed information about the purpose of the field.

*props: `label-description`*

```html
<a-textarea
  v-model="model"
  label-position="top"
  label="Textarea"
  label-description="Aloha"
></a-textarea>
```

```js
import {
  ref,
} from "vue";

import { 
  ATextarea,
} from "aloha-vue";
    
export default {
  name: "PageTextareaLabelDescription",
  components: {
    ATextarea,
  },
  setup() {
    const model = ref("Aloha");
    
    return {
      model,
    };
  },
};
```

## Label for screen reader

This example shows how to use **label-screen-reader**. It allows you to set a hidden label that will only be visible to screen readers.

*props: `label-screen-reader`*

```html
<a-textarea
  v-model="model"
  label="Textarea"
></a-textarea>
<a-textarea
  v-model="model"
  class="a_mt_3"
  label-screen-reader="Textarea"
></a-textarea>
```

```js
import {
  ref,
} from "vue";

import { 
  ATextarea,
} from "aloha-vue";
    
export default {
  name: "PageTextareaLabelScreenReader",
  components: {
    ATextarea,
  },
  setup() {
    const model = ref("Aloha");
    
    return {
      model,
    };
  },
};
```

## Scalable text field

This example demonstrates a text field whose height automatically adjusts to the content. As new lines are added, the text field expands, providing an optimal size to display all entered text.

*props: `is-scalable`*

```html
<a-textarea
  v-model="model"
  :is-scalable="true"
  label="Textarea"
></a-textarea>
<div>model:</div>
<pre>{{ model }}</pre>
```

```js
import {
  ref,
} from "vue";

import { 
  ATextarea,
} from "aloha-vue";
    
export default {
  name: "PageTextareaIsScalable",
  components: {
    ATextarea,
  },
  setup() {
    const model = ref("Aloha");
    
    return {
      model,
    };
  },
};
```

## Text field resizing

This example shows various options for configuring the resizing capabilities of the text field. You can set vertical resizing **(resize='v')**, horizontal resizing **(resize='h')**, completely disable resizing **(resize='none')**, or allow automatic resizing **(resize='auto')**. Each option is demonstrated using the corresponding text field.

*props: `resize`*

```html
<a-textarea
  v-model="model"
  label="resize='v'"
  resize="v"
></a-textarea>
<a-textarea
  v-model="model"
  class="a_mt_3"
  label="resize='h'"
  resize="h"
></a-textarea>
<a-textarea
  v-model="model"
  class="a_mt_3"
  label="resize='none'"
  resize="none"
></a-textarea>
<a-textarea
  v-model="model"
  class="a_mt_3"
  label="resize='auto'"
  resize="auto"
></a-textarea>
<div>model:</div>
<pre>{{ model }}</pre>
```

```js
import {
  ref,
} from "vue";

import { 
  ATextarea,
} from "aloha-vue";
    
export default {
  name: "PageTextareaResize",
  components: {
    ATextarea,
  },
  setup() {
    const model = ref("Aloha");
    
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
<a-textarea
  :model-value="model1"
  :readonly="true"
  label="Textarea 1"
></a-textarea>
<a-textarea
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="Textarea 2"
></a-textarea>
<a-textarea
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  help-text="Aloha"
  label="Textarea 3"
  readonly-default="-"
></a-textarea>
```

```js
import {
  ref,
} from "vue";

import { 
  ATextarea,
} from "aloha-vue";
    
export default {
  name: "PageTextareaReadonly",
  components: {
    ATextarea,
  },
  setup() {
    const model1 = ref("Aloha\nHola");
    const model2 = ref(undefined);
    
    return {
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
| autocomplete | String |  |  | Specifies whether the field should support autocomplete, similar to the **autocomplete** attribute in **HTML**. |
| change | Function | () => {} |  | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| clear-button-class | String / Object |  |  | Specifies the **CSS** class that will be applied to the clear button. This allows customization of the button's appearance according to design requirements. |
| dependencies | Array / Object |  |  | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| disabled | Boolean |  |  | Determines whether the component is disabled. If set to **true**, the component becomes inactive and the user cannot interact with it. |
| errors | String / Array |  |  | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| error-icon | String / Object |  |  | Specifies the icon displayed when the component has validation errors. If the component has an input field, the icon is shown inside it; otherwise, it is displayed next to the control. The icon is shown only when **errors** is present. |
| exclude-render-attributes | Array | () => [] |  | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final **DOM**. |
| extra | Object |  |  | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like **"_WELCOME_{{foo}}_{{bar}}_"**, which is translated as **"Welcome {{ foo }}: {{ bar }}"**, you can pass an object like **{ foo: "abc", bar: "123" }**, and the result will be the translation **"Welcome abc: 123"**. |
| help-text | String |  |  | Help text displayed below the component. Provides the user with additional information or instruction. |
| html-id | String |  |  | Sets the **HTML ID** of the element. Can be used to uniquely identify the component on the page. |
| id | String / Number | () => uniqueId("a_textarea_") |  | The identifier of the component, which can be used to track or refer to the component in the code. |
| id-prefix | String |  |  | Prefix for the component's **ID**. Used to create a unique identifier based on the specified prefix. |
| input-attributes | Object | () => ({}) |  | An object of attributes applied directly to the input element. Allows adding or customizing additional input attributes. |
| input-class | String / Object |  |  | **CSS** class(es) applied to the input element. Allows styling the component according to your requirements. |
| is-clear-button | Boolean | true |  | Determines whether the clear button should be displayed. If **true**, a button will be shown next to the text field, allowing the user to clear its content. |
| is-hide | Boolean |  |  | Determines whether the component should be hidden. If set to **true**, the component is not displayed on the page. |
| is-label-float | Boolean |  |  | Determines whether the label of the component should be positioned above the field. If **true**, the label will move above the text field when focused or when content is present. Deprecated, use label-position. |
| is-render | Boolean | true |  | Indicates whether the component should be rendered. If set to **false**, the component will not be created in the **DOM**. |
| is-scalable | Boolean |  |  | Determines whether the height of the text field should change based on the content. If this parameter is set to **true**, the height of the text field will automatically adjust as characters are added or removed. |
| label | String / Number |  |  | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| label-class | String / Object |  |  | **CSS** class(es) applied to the label. Allows customizing the label's style. |
| label-description | String |  |  | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| label-position | "float" / "inset" / "top" | "float" |  | Position of the label: "float", "inset" or "top". The default comes from the component plugin or AFormPlugin (labelPosition). |
| label-screen-reader | String / Number |  |  | Label intended for screen readers. Useful for improving accessibility. |
| maxlength | String / Number |  |  | Sets the maximum number of characters that can be entered into the field. If this limit is exceeded, further input will be prohibited. |
| model-dependencies | Object | () => ({}) |  | Determines model dependencies that may affect the visibility or behavior of the component. |
| model-undefined | String / Number / Object / Array / Boolean |  |  | The value used to reset the model to an undefined state. Useful for clearing the model value. |
| model-value | String / Number |  |  | The current model value associated with the component. Used to manage the data displayed in the component. |
| placeholder | String / Number / Object |  |  | Specifies the placeholder text that will be displayed in the input field until the user enters data. The placeholder helps the user understand what data is expected in the field. |
| readonly | Boolean |  |  | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| readonly-default | String |  |  | The default text that is shown if the value is missing in read-only mode. |
| required | Boolean |  |  | Indicates whether the component is required. If set to **true**, the component requires user input. |
| resize | String | v |  | Defines how the user can resize the text field. Available options: **'v'** — vertical resizing, **'h'** — horizontal resizing, **'none'** — resizing is disabled, **'auto'** — resizing is automatic. |
| rows | String / Number |  |  | Sets the number of rows for the text field. |

## Events

| name | type | description |
| --- | --- | --- |
| update:model-value | Function | Event triggered when the component's model value is updated. Used to synchronize data between the component and the parent component. |
| focus | Function | Event triggered when the component gains focus. Useful for tracking user interaction with the element. |
| blur | Function | Event triggered when the component loses focus. Used to validate or save data when the user leaves the field. |
