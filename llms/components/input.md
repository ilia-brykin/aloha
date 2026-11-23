# AInput (Text field)

The **AInput** component provides data input functionality with support for various data types such as **text**, **password**, **number**, **email**, and others. The component supports icon display, a clear button, and the ability to show/hide the password.

## Basic usage

*props: `model-value`, `label`*

```html
<a-input
  v-model="model"
  label="Input"
></a-input>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AInput,
} from "aloha-vue";
    
export default {
  name: "PageInputBasic",
  components: {
    AInput,
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
<a-input
  v-model="model"
  label="label-position: float"
  label-position="float"
></a-input>
<a-input
  v-model="model"
  label="label-position: inset"
  label-position="inset"
></a-input>
<a-input
  v-model="model"
  label="label-position: top"
  label-position="top"
></a-input>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  AInput,
} from "aloha-vue";

export default {
  name: "PageInputLabelPosition",
  components: {
    AInput,
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
<a-input
  :change="changeModel"
  :model-value="model"
  label="Input"
></a-input>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AInput,
} from "aloha-vue";
    
export default {
  name: "PageInputChange",
  components: {
    AInput,
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
<a-input
  v-model="model"
  help-text="Aloha"
  label="Input"
></a-input>
```

```js
import {
  ref,
} from "vue";

import { 
  AInput,
} from "aloha-vue";
    
export default {
  name: "PageInputHelpText",
  components: {
    AInput,
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
<a-input
  v-model="model"
  errors="Aloha"
  label="Input"
></a-input>
```

```js
import {
  ref,
} from "vue";

import { 
  AInput,
} from "aloha-vue";
    
export default {
  name: "PageInputErrors",
  components: {
    AInput,
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
<a-input
  v-model="model"
  :error-icon="errorIcon"
  errors="Aloha"
  label="Input"
></a-input>
```

```js
import {
  ref,
} from "vue";

import { 
  AInput,
} from "aloha-vue";

export default {
  name: "PageInputErrorIcon",
  components: {
    AInput,
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
<a-input
  v-model="model"
  label-position="top"
  label="Input"
  label-description="Aloha"
></a-input>
```

```js
import {
  ref,
} from "vue";

import { 
  AInput,
} from "aloha-vue";
    
export default {
  name: "PageInputLabelDescription",
  components: {
    AInput,
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
<a-input
  v-model="model"
  label="Input"
></a-input>
<a-input
  v-model="model"
  class="a_mt_3"
  label-screen-reader="Input"
></a-input>
```

```js
import {
  ref,
} from "vue";

import { 
  AInput,
} from "aloha-vue";
    
export default {
  name: "PageInputLabelScreenReader",
  components: {
    AInput,
  },
  setup() {
    const model = ref("Aloha");
    
    return {
      model,
    };
  },
};
```

## Password input field

This example shows how to use an input field with the type **password** and the ability to toggle password visibility using **show-password**. In the first field, the user can switch between showing and hiding the password, while in the second field this feature is disabled.

*props: `type="password"`, `show-password`*

```html
<a-input
  v-model="model"
  :show-password="true"
  label="Input"
  type="password"
></a-input>
<a-input
  v-model="model"
  :show-password="false"
  class="a_mt_3"
  label="Input"
  type="password"
></a-input>
```

```js
import {
  ref,
} from "vue";

import { 
  AInput,
} from "aloha-vue";
    
export default {
  name: "PageInputPassword",
  components: {
    AInput,
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
<a-input
  :model-value="model1"
  :readonly="true"
  label="Input1"
  type="text"
></a-input>
<a-input
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="Input2"
  type="text"
></a-input>
<a-input
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  help-text="Aloha"
  label="Input3"
  readonly-default="-"
  type="text"
></a-input>
```

```js
import {
  ref,
} from "vue";
import { 
  AInput,
} from "aloha-vue";
    
export default {
  name: "PageInputReadonly",
  components: {
    AInput,
  },
  setup() {
    const model1 = ref("Aloha1");
    const model2 = ref("Aloha2");
    const model3 = ref(undefined);
    
    return {
      model1,
      model2,
      model3,
    };
  },
};
```

## **Readonly** fields for password

An example of how **password** input fields are displayed in **readonly** mode. The password value is hidden using a specified symbol, the number of symbols is controlled via **readonly-password-length**, and the symbol itself via **readonly-password-symbol**. The last field shows a variant where **show-password** is enabled and the value is fully visible.

*props: `readonly`, `readonly-password-length`, `readonly-password-symbol`, `show-password`, `type="password"`*

```html
<a-input
  :model-value="model"
  :readonly="true"
  :show-password="false"
  label="Input1"
  type="password"
></a-input>
<a-input
  :model-value="model"
  :readonly-password-length="3"
  :readonly="true"
  :show-password="false"
  class="a_mt_3"
  label="Input2"
  type="password"
></a-input>
<a-input
  :model-value="model"
  :readonly-password-length="3"
  :readonly="true"
  :show-password="false"
  class="a_mt_3"
  label="Input3"
  readonly-password-symbol="x"
  type="password"
></a-input>
<a-input
  :model-value="model"
  :readonly="true"
  :show-password="true"
  label="Input4"
  type="password"
></a-input>
```

```js
import {
  ref,
} from "vue";
import { 
  AInput,
} from "aloha-vue";
    
export default {
  name: "PageInputReadonlyPassword",
  components: {
    AInput,
  },
  setup() {
    const model1 = ref("Aloha");
    
    return {
      model,
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
| icon-prepend | String |  |  | Specifies the icon that will be displayed before the input field. This icon can be used to enhance the visual perception or indicate the type of input data. |
| id | String / Number | () => uniqueId("a_input_") |  | The identifier of the component, which can be used to track or refer to the component in the code. |
| id-prefix | String |  |  | Prefix for the component's **ID**. Used to create a unique identifier based on the specified prefix. |
| input-attributes | Object | () => ({}) |  | An object of attributes applied directly to the input element. Allows adding or customizing additional input attributes. |
| input-class | String / Object |  |  | **CSS** class(es) applied to the input element. Allows styling the component according to your requirements. |
| is-clear-button | Boolean | true |  | Determines whether the clear button should be displayed. If **true**, a button will be shown next to the text field, allowing the user to clear its content. |
| is-hide | Boolean |  |  | Determines whether the component should be hidden. If set to **true**, the component is not displayed on the page. |
| is-label-float | Boolean |  |  | Determines whether the label of the component should be positioned above the field. If **true**, the label will move above the text field when focused or when content is present. Deprecated, use label-position. |
| is-render | Boolean | true |  | Indicates whether the component should be rendered. If set to **false**, the component will not be created in the **DOM**. |
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
| readonly-password-length | Number | 8 |  | The number of characters displayed in read-only mode for the password field. It does not depend on the actual value length. |
| readonly-password-symbol | String | * |  | The symbol used to mask the value of the password field in read-only mode. |
| required | Boolean |  |  | Indicates whether the component is required. If set to **true**, the component requires user input. |
| show-password | Boolean | true |  | Works when the input type is **password**. Allows toggling the visibility of the entered password, giving the user the option to see the password being typed. |
| step | String / Number |  |  | Used for **number** or **integer** types. Specifies the step for changing the value, for example, when increasing or decreasing the number using keyboard arrows. |
| type | String | text |  | Defines the type of input value. Various data types are supported, such as **text**, **password**, **number**, **integer**, **email**, and others. |

## Events

| name | type | description |
| --- | --- | --- |
| update:model-value | Function | Event triggered when the component's model value is updated. Used to synchronize data between the component and the parent component. |
| focus | Function | Event triggered when the component gains focus. Useful for tracking user interaction with the element. |
| blur | Function | Event triggered when the component loses focus. Used to validate or save data when the user leaves the field. |

## Translations

| key | en |
| --- | --- |
| `_A_INPUT_SHOW_PASSWORD_` | Show password |
| `_A_INPUT_HIDE_PASSWORD_` | Hide password |

## CSS variables (`scss/components/ui/ui.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_form_element_error_color` |  | Color of error texts, error labels and the error icon of form elements. |
| `--a_form_element_label_float_top` |  | Vertical position of a float label while the field is empty and not focused. |
| `--a_form_element_label_float_color` |  | Color of a float label while it is inside the empty field. |
| `--a_form_element_label_float_active_color` |  | Color of a float label after it moved to the border (field focused or filled). |
| `--a_form_element_label_float_bg` |  | Background behind a float label on the border. Set it to the background of the surrounding area. |
| `--a_form_element_label_inset_space` |  | Extra height of the field for an inset label (labelPosition "inset"). |
| `--a_form_element_label_inset_top` |  | Top position of an inset label when the field is focused or filled. |
| `--a_form_element_help_text_color` |  | Color of the help text below the field. |
| `--a_form_element_error_color` |  | Color of error texts, error labels and the error icon of form elements. |
| `--a_form_control_height` |  | Minimum height of the field. |
| `--a_form_control_padding_x` |  | Horizontal padding of the field. |
| `--a_form_control_padding_y` |  | Vertical padding of the field. |
| `--a_form_control_font_size` |  | Font size of the field. |
| `--a_form_control_color` |  | Text color of the field. |
| `--a_form_control_bg` |  | Background of the field. |
| `--a_form_control_border_width` |  | Border width of the field. |
| `--a_form_control_border_color` |  | Border color of the field. |
| `--a_form_control_border_radius` |  | Corner radius of the field. |
| `--a_form_control_hover_border_color` |  | Border color of the field on hover. |
| `--a_form_control_focus_border_color` |  | Border color of the focused field. The focus ring is drawn in addition. |
| `--a_form_control_placeholder_color` |  | Color of the placeholder text. |
| `--a_form_control_disabled_color` |  | Text color of a disabled field. |
| `--a_form_control_disabled_bg` |  | Background of a disabled field. |
| `--a_form_control_disabled_border_color` |  | Border color of a disabled field. |
