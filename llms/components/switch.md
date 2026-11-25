# ASwitch (Switch)

The **ASwitch** component is a switch with support for various states that can be bound to a data model. The component supports both two-state and three-state modes, as well as the display of custom labels.

Accessibility: the field is a native **checkbox** with **role="switch"**, the screen reader announces the state "on" or "off". The name is the **label**, not the changing text of the state. Space and **Enter** toggle. With **is-three-state** the field stays a **checkbox** with the state "mixed" for the empty value.

## Basic usage

*props: `model-value`*

```html
<a-switch
  v-model="model"
></a-switch>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PageSwitchBasic",
  components: {
    ASwitch,
  },
  setup() {
    const model = ref(false);
    
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
<a-switch
  :change="changeModel"
  :model-value="model"
></a-switch>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PageSwitchChange",
  components: {
    ASwitch,
  },
  setup() {
    const model = ref(false);
    
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
<a-switch
  v-model="model"
  help-text="Aloha"
></a-switch>
```

```js
import {
  ref,
} from "vue";

import { 
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PageSwitchHelpText",
  components: {
    ASwitch,
  },
  setup() {
    const model = ref(false);
    
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
<a-switch
  v-model="model"
  :error-icon="errorIcon"
  errors="Aloha"
  label="ASwitch"
></a-switch>
```

```js
import {
  ref,
} from "vue";

import {
  ASwitch,
} from "aloha-vue";

export default {
  name: "PageSwitchErrorIcon",
  components: {
    ASwitch,
  },
  setup() {
    const model = ref(false);
    const errorIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\"><path d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"/></svg>";

    return {
      errorIcon,
      model,
    };
  },
};
```

## Error display

This example shows how to use **errors** to display error messages below the input field. Error messages help the user understand which data was entered incorrectly and how to correct it.

*props: `errors`, `label`*

```html
<a-switch
  v-model="model"
  errors="Aloha"
  label="ASwitch"
></a-switch>
```

```js
import {
  ref,
} from "vue";

import { 
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PageSwitchErrors",
  components: {
    ASwitch,
  },
  setup() {
    const model = ref(false);
    
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
<a-switch
  v-model="model"
  label="Switch"
  label-description="Aloha"
></a-switch>
```

```js
import {
  ref,
} from "vue";

import { 
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PageSwitchLabelDescription",
  components: {
    ASwitch,
  },
  setup() {
    const model = ref(false);
    
    return {
      model,
    };
  },
};
```

## Default value

This example demonstrates how to use the **default** prop to set the initial value of the component when no model value is provided.

*props: `default`*

```html
<a-switch
  v-model="model"
  :change="changeModel"
  :default="true"
></a-switch>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PageSwitchChange",
  components: {
    ASwitch,
  },
  setup() {
    const model = ref(undefined);

    const changeModel = ({ init }) => {
      console.log("changeModel init", init);
    };
    
    return {
      changeModel,
      model,
    };
  },
};
```

## Label for screen reader

This example shows how to use **label-screen-reader**. It allows you to set a hidden label that will only be visible to screen readers.

*props: `label-screen-reader`*

```html
<a-switch
  v-model="model"
  label="ASwitch"
></a-switch>
<a-switch
  v-model="model"
  class="a_mt_3"
  label-screen-reader="ASwitch"
></a-switch>
```

```js
import {
  ref,
} from "vue";

import { 
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PageSwitchLabelScreenReader",
  components: {
    ASwitch,
  },
  setup() {
    const model = ref(false);
    
    return {
      model,
    };
  },
};
```

## Using **true-label** and **false-label**

This example demonstrates how to use **true-label** and **false-label** to set the displayed labels of the switch. When the model value corresponds to the **true** state, the switch displays the label **1**, and when in the **false** state, it displays the label **0**.

*props: `false-label`, `true-label`*

```html
<a-switch
  v-model="model"
  false-label="0"
  true-label="1"
></a-switch>
```

```js
import {
  ref,
} from "vue";

import { 
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PageSwitchTrueFalseLabel",
  components: {
    ASwitch,
  },
  setup() {
    const model = ref(false);
    
    return {
      model,
    };
  },
};
```

## Using **true-value** and **false-value**

This example demonstrates how to use **true-value** and **false-value** to set the values assigned to the model when switching. When the switch is in the **true** state, the model value becomes '1'. In the **false** state, the model value becomes '0'.

*props: `false-value`, `true-value`*

```html
<a-switch
  v-model="model"
  :false-value="0"
  :true-value="1"
></a-switch>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PageSwitchTrueFalseValue",
  components: {
    ASwitch,
  },
  setup() {
    const model = ref(0);
    
    return {
      model,
    };
  },
};
```

## Three-State mode

This example demonstrates how to use a switch in three-state mode using **is-three-state**, **default-value**, and **default-label**. When the switch is in an intermediate state, the model value is set to **default-value** (in this case, **null**), and the label **Default** is displayed. This mode allows the switch to have three states: **true**, **false**, and a default state.

*props: `is-three-state`, `default-value`, `default-label`*

```html
<a-switch
  v-model="model"
  :default-value="null"
  :is-three-state="true"
  default-label="Default"
></a-switch>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PageSwitchThreeState",
  components: {
    ASwitch,
  },
  setup() {
    const model = ref(null);
    
    return {
      model,
    };
  },
};
```

## Using **title** and **is-title-html** properties

This example demonstrates how to use **title** and **is-title-html** properties in the switch component. In the first switch, the tooltip is displayed with HTML interpretation, as **is-title-html** is set to **true**. In the second example, the HTML code in the tooltip is not interpreted because **is-title-html** is set to **false**. Both switches display a tooltip with the text **Aloha** on hover.

*props: `title`, `is-title-html`*

```html
<a-switch
  v-model="model"
  :is-title-html="true"
  title="Aloha"
></a-switch>
<a-switch
  v-model="model"
  :is-title-html="false"
  class="a_mt_3"
  title="Aloha"
></a-switch>
```

```js
import {
  ref,
} from "vue";

import { 
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PageSwitchTitle",
  components: {
    ASwitch,
  },
  setup() {
    const model = ref(0);
    
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
<a-switch
  :model-value="model1"
  :readonly="true"
  label="Switch 1"
></a-switch>
<a-switch
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="Switch 2"
></a-switch>
<a-switch
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Switch 3"
></a-switch>
<a-switch
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  help-text="Aloha"
  label="Switch 4"
  readonly-default="-"
></a-switch>
```

```js
import {
  ref,
} from "vue";

import { 
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PageSwitchReadonly",
  components: {
    ASwitch,
  },
  setup() {
    const model1 = ref(false);
    const model2 = ref(true);
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
| change | Function | () => {} |  | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| default | Boolean / String / Number |  |  | Sets the default value used to initialize the component when **model-value** is undefined. |
| default-label | String | _A_SWITCH_DEFAULT_LABEL_ |  | If the model value does not match **falseValue** and **trueValue**, this label is displayed. |
| default-value | Boolean / String / Number |  |  | Used only when **isThreeState** is set to **true**, for representing the third state of the model. |
| dependencies | Array / Object |  |  | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| disabled | Boolean |  |  | Determines whether the component is disabled. If set to **true**, the component becomes inactive and the user cannot interact with it. |
| errors | String / Array |  |  | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| error-icon | String / Object |  |  | Specifies the icon displayed when the component has validation errors. If the component has an input field, the icon is shown inside it; otherwise, it is displayed next to the control. The icon is shown only when **errors** is present. |
| exclude-render-attributes | Array | () => [] |  | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final **DOM**. |
| extra | Object |  |  | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like **"_WELCOME_{{foo}}_{{bar}}_"**, which is translated as **"Welcome {{ foo }}: {{ bar }}"**, you can pass an object like **{ foo: "abc", bar: "123" }**, and the result will be the translation **"Welcome abc: 123"**. |
| false-label | String | _A_SWITCH_FALSE_LABEL_ |  | The label displayed when the switch is in the **false** state. |
| false-value | Boolean / String / Number | false |  | The value assigned to the model when the switch is in the **false** state. |
| full-width | Boolean |  |  | If set to **true**, the switch takes up the full available width. |
| help-text | String |  |  | Help text displayed below the component. Provides the user with additional information or instruction. |
| html-id | String |  |  | Sets the **HTML ID** of the element. Can be used to uniquely identify the component on the page. |
| id | String / Number | () => uniqueId("a_switch_") |  | The identifier of the component, which can be used to track or refer to the component in the code. |
| id-prefix | String |  |  | Prefix for the component's **ID**. Used to create a unique identifier based on the specified prefix. |
| input-attributes | Object | () => ({}) |  | An object of attributes applied directly to the input element. Allows adding or customizing additional input attributes. |
| input-class | String / Object |  |  | **CSS** class(es) applied to the input element. Allows styling the component according to your requirements. |
| is-hide | Boolean |  |  | Determines whether the component should be hidden. If set to **true**, the component is not displayed on the page. |
| is-render | Boolean | true |  | Indicates whether the component should be rendered. If set to **false**, the component will not be created in the **DOM**. |
| is-three-state | Boolean | false |  | Used for a three-state switch: **trueValue**, **falseValue**, and **defaultValue**. |
| is-title-html | Boolean |  |  | Determines whether the tooltip should be interpreted as **HTML**. If set to **true**, the content of the tooltip will be displayed with **HTML** formatting. |
| label | String / Number |  |  | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| label-class | String / Object |  |  | **CSS** class(es) applied to the label. Allows customizing the label's style. |
| label-description | String |  |  | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| label-screen-reader | String / Number |  |  | Label intended for screen readers. Useful for improving accessibility. |
| model-dependencies | Object | () => ({}) |  | Determines model dependencies that may affect the visibility or behavior of the component. |
| model-undefined | String / Number / Object / Array / Boolean |  |  | The value used to reset the model to an undefined state. Useful for clearing the model value. |
| model-value | Boolean / String / Number |  |  | The current model value associated with the component. Used to manage the data displayed in the component. |
| readonly | Boolean |  |  | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| readonly-default | String |  |  | The default text that is shown if the value is missing in read-only mode. |
| required | Boolean |  |  | Indicates whether the component is required. If set to **true**, the component requires user input. |
| title | String / Number / Object / Array |  |  | Sets the text of the tooltip that will appear when hovering over an element. The tooltip can be presented as plain text or an object for different devices (e.g., desktops and mobile devices). |
| title-placement | String | top |  | Specifies the position of the tooltip relative to the element. Various positions are supported, such as **top**, **bottom**, **left**, **right**, and others. This property only works if **isTitleHtml** is set to **true**. |
| true-label | String | _A_SWITCH_TRUE_LABEL_ |  | The label displayed when the switch is in the **true** state. |
| true-value | Boolean / String / Number | true |  | The value assigned to the model when the switch is in the **true** state. |

## Events

| name | type | description |
| --- | --- | --- |
| update:model-value | Function | Event triggered when the component's model value is updated. Used to synchronize data between the component and the parent component. |
| focus | Function | Event triggered when the component gains focus. Useful for tracking user interaction with the element. |
| blur | Function | Event triggered when the component loses focus. Used to validate or save data when the user leaves the field. |

## Translations

| key | en |
| --- | --- |
| `_A_SWITCH_DEFAULT_LABEL_` | Not selected |
| `_A_SWITCH_FALSE_LABEL_` | No |
| `_A_SWITCH_TRUE_LABEL_` | Yes |

## CSS variables (`scss/components/ui/ASwitch.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_switch_button_border_radius` |  | Corner radius of the track and the knob. |
| `--a_switch_button_label_border_radius` |  | Corner radius of the label area (visible on hover). |
| `--a_switch_button_track_left` |  | Distance of the track from the left edge of the label. |
| `--a_switch_button_track_width` |  | Width of the track. |
| `--a_switch_button_track_height` |  | Height of the track. |
| `--a_switch_button_knob_size` |  | Size of the knob. |
| `--a_switch_button_knob_gap` |  | Space between the knob and the edge of the track. |
| `--a_switch_button_bg` |  | Background of the track when off. |
| `--a_switch_button_inner_bg` |  | Color of the knob. |
| `--a_switch_button_active_bg` |  | Background and border color of the track when on. |
| `--a_switch_button_inactive_bg` |  | Background and border color of the track when the value is neither on nor off (undefined). |
| `--a_switch_hover_focus_bg` |  | Background of the label area on hover. |
| `--a_switch_button_border_color` |  | Border color of the track when off. |
| `--a_switch_button_invalid_color` |  | Border color of the track and color of the knob when the field has errors. |
| `--a_switch_button_disabled_bg` |  | Background of the track when disabled. |
| `--a_switch_button_disabled_inner_bg` |  | Color of the knob when disabled. |
| `--a_switch_button_disabled_border_color` |  | Border color of the track when disabled. |
