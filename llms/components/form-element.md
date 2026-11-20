# AFormElement (Form element)

A wrapper component for dynamically displaying various form elements based on the provided type. It allows rendering different components (form elements) by passing the required parameters, events, and slots. Simplifies form building based on configuration data.

## Basic usage

*props: `model-value`, `label`, `type`*

```html
<a-form-element
  v-model="model1"
  :required="true"
  label="Input"
  type="text"
></a-form-element>
<div>model1: {{ model1 }}</div>
<a-form-element
  v-model="model2"
  :required="true"
  class="a_mt_3"
  label="Checkbox"
  help-text="Aloha"
  type="oneCheckbox"
></a-form-element>
<div>model2: {{ model2 }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  AFormElement,
} from "aloha-vue";
    
export default {
  name: "PageFormElementBasic",
  components: {
    AFormElement,
  },
  setup() {
    const model1 = ref("1234");
    const model2 = ref(true);
    
    return {
      model1,
      model2,
    };
  },
};
```

## **Readonly** display mode

In this example, the component is used in **readonly** mode, where the value is displayed as text and cannot be modified by the user.

*props: `readonly`, `readonly-default`*

```html
<a-form-element
  :model-value="model1"
  :readonly="true"
  label="Input"
  type="text"
></a-form-element>
<a-form-element
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="Checkbox"
  help-text="Aloha"
  type="oneCheckbox"
></a-form-element>
<a-form-element
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Textarea"
  readonly-default="-"
  type="textarea"
></a-form-element>
```

```js
import {
  ref,
} from "vue";

import {
  AFormElement,
} from "aloha-vue";
    
export default {
  name: "PageFormElementReadonly",
  components: {
    AFormElement,
  },
  setup() {
    const model1 = ref("1234");
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
| disabled | Boolean |  |  | Determines whether the component is disabled. If set to **true**, the component becomes inactive and the user cannot interact with it. |
| errors | String / Array |  |  | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| exclude-render-attributes | Array | () => [] |  | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final **DOM**. |
| extra | Object |  |  | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like **"_WELCOME_{{foo}}_{{bar}}_"**, which is translated as **"Welcome {{ foo }}: {{ bar }}"**, you can pass an object like **{ foo: "abc", bar: "123" }**, and the result will be the translation **"Welcome abc: 123"**. |
| help-text | String |  |  | Help text displayed below the component. Provides the user with additional information or instruction. |
| html-id | String |  |  | Sets the **HTML ID** of the element. Can be used to uniquely identify the component on the page. |
| id | String / Number |  |  | The identifier of the component, which can be used to track or refer to the component in the code. |
| id-prefix | String |  |  | Prefix for the component's **ID**. Used to create a unique identifier based on the specified prefix. |
| is-hide | Boolean |  |  | Determines whether the component should be hidden. If set to **true**, the component is not displayed on the page. |
| is-render | Boolean | true |  | Indicates whether the component should be rendered. If set to **false**, the component will not be created in the **DOM**. |
| label | String / Number |  |  | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| label-class | String / Object |  |  | **CSS** class(es) applied to the label. Allows customizing the label's style. |
| label-description | String |  |  | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| label-screen-reader | String / Number |  |  | Label intended for screen readers. Useful for improving accessibility. |
| model-dependencies | Object | () => ({}) |  | Determines model dependencies that may affect the visibility or behavior of the component. |
| model-value | String / Number |  |  | The current model value associated with the component. Used to manage the data displayed in the component. |
| options | Object | () => ({}) |  | An object with additional parameters to be passed to the component specified in the **type** parameter. Useful for passing any **props** not explicitly described in **AFormElement** but supported by the rendered component. |
| required | Boolean |  |  | Indicates whether the component is required. If set to **true**, the component requires user input. |
| readonly | Boolean |  |  | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| readonly-default | String |  |  | The default text that is shown if the value is missing in read-only mode. |
| type | String | text |  | The type of component to render. Used to select the appropriate form element, for example: **input**, **select**, **checkbox**, **group**, **fieldset**, etc. |

## Events

| name | type | description |
| --- | --- | --- |
| update:model-value | Function | Event triggered when the component's model value is updated. Used to synchronize data between the component and the parent component. |
