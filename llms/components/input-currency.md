# AInputCurrency (Currency input field)

The **AInputCurrency** component provides the ability to input and format currency values. The component supports various options, such as currency symbol management, selection of separators, and automatic rounding of numbers.

## Basic usage

*props: `model-value`, `label`*

```html
<a-input-currency
  v-model="model"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyBasic",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
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
<a-input-currency
  v-model="model"
  label="label-position: float"
  label-position="float"
></a-input-currency>
<a-input-currency
  v-model="model"
  label="label-position: inset"
  label-position="inset"
></a-input-currency>
<a-input-currency
  v-model="model"
  label="label-position: top"
  label-position="top"
></a-input-currency>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  AInputCurrency,
} from "aloha-vue";

export default {
  name: "PageInputCurrencyLabelPosition",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);

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
<a-input-currency
  :change="changeModel"
  :model-value="model"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyChange",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
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
<a-input-currency
  v-model="model"
  help-text="Aloha"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyHelpText",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
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
<a-input-currency
  v-model="model"
  :error-icon="errorIcon"
  errors="Aloha"
  label="Input currency"
></a-input-currency>
```

```js
import {
  ref,
} from "vue";

import {
  AInputCurrency,
} from "aloha-vue";

export default {
  name: "PageInputCurrencyErrorIcon",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(245);
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

*props: `errors`*

```html
<a-input-currency
  v-model="model"
  errors="Aloha"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyErrors",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
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
<a-input-currency
  v-model="model"
  label-position="top"
  label="Input"
  label-description="Aloha"
></a-input-currency>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyLabelDescription",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
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
<a-input-currency
  v-model="model"
  label="Input"
></a-input-currency>
<a-input-currency
  v-model="model"
  class="a_mt_3"
  label-screen-reader="Input"
></a-input-currency>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyLabelScreenReader",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
    return {
      model,
    };
  },
};
```

## Currency symbols and their positions

This example demonstrates how to use **currency-symbol** and **currency-symbol-position** to display the currency symbol in the input field. In the first field, the **'%'** symbol is displayed to the right of the entered value. In the second and third fields, the **'$'** symbol is displayed to the left of the value. This allows flexible customization of currency symbol display depending on the requirements.

*props: `currency-symbol`, `currency-symbol-position`*

```html
<a-input-currency
  v-model="model"
  currency-symbol-position="right"
  currency-symbol="%"
  label="Input"
></a-input-currency>
<a-input-currency
  v-model="model"
  class="a_mt_3"
  currency-symbol-position="left"
  currency-symbol="$"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencySymbol",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
    return {
      model,
    };
  },
};
```

## Types of control elements

This example demonstrates how to use **controls-type** to configure the display of control elements in the input field. In the first field, control elements are disabled, while in the second, '+' and '-' buttons are used to increase or decrease the value. This allows selecting the most appropriate way to control the value depending on the requirements.

*props: `controls-type`*

```html
<a-input-currency
  v-model="model"
  controls-type="none"
  label="Input"
></a-input-currency>
<a-input-currency
  v-model="model"
  class="a_mt_3"
  controls-type="plus-minus"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyControlsType",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
    return {
      model,
    };
  },
};
```

## Decimal separator

This example demonstrates how to use **decimal-divider** to configure the decimal separator in the input field. In the first field, a comma **','** is used as the separator, while in the second, a period **'.'** is used. This allows selecting the appropriate format for displaying decimal values depending on regional settings or user preferences. Important: The decimal separator and the thousands separator must be different.

*props: `decimal-divider`*

```html
<a-input-currency
  v-model="model"
  decimal-divider=","
  thousand-divider="."
  label="Input"
></a-input-currency>
<a-input-currency
  v-model="model"
  class="a_mt_3"
  decimal-divider="."
  thousand-divider=","
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyDecimalDivider",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
    return {
      model,
    };
  },
};
```

## Max and min limits

This example demonstrates how to use **max** and **min** to limit the values that can be entered in the field. In the first field, input is limited to a range from **1** to **20**, while in the second, it is limited to a range from **-10.05** to **19.05**. These properties help control the allowable range of input numbers.

*props: `max`, `min`*

```html
<a-input-currency
  v-model="model"
  :max="20"
  :min="1"
  label="1 - 20"
></a-input-currency>
<a-input-currency
  v-model="model"
  :max="19.05"
  :min="-10.05"
  class="a_mt_3"
  label="-10.05 - 19.05"
></a-input-currency>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyMaxMin",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
    return {
      model,
    };
  },
};
```

## Model type

This example demonstrates how to use **model-type** to define the type of data that will be stored in the model. In the first case, the value is stored as a **number**, while in the second, it is stored as a **string**. This property allows flexible management of the data type in the model depending on the application's requirements.

*props: `model-type`*

```html
<a-input-currency
  v-model="model"
  label="number"
  model-type="number"
></a-input-currency>
<a-input-currency
  v-model="model"
  class="a_mt_3"
  label="string"
  model-type="string"
></a-input-currency>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyModelType",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
    return {
      model,
    };
  },
};
```

## Value change step

This example demonstrates how to use **step** to set the step value in the **AInputCurrency** component. In the first case, the step is set to **2**, allowing the value to be increased or decreased by **2** units at a time. In the second case, the step is set to **0.01**, allowing more precise control of the value using control buttons. This property is useful for setting the precision of numerical data entry.

*props: `step`, `controls-type`*

```html
<a-input-currency
  v-model="model"
  :step="2"
  controls-type="plus-minus"
  label="step 2"
></a-input-currency>
<a-input-currency
  v-model="model"
  :step="0.01"
  class="a_mt_3"
  controls-type="plus-minus"
  label="step 0.01"
></a-input-currency>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyStep",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
    return {
      model,
    };
  },
};
```

## Decimal part length

This example demonstrates how to use **decimal-part-length** to set the number of digits after the decimal separator in the **AInputCurrency** component. In the first case, the length of the decimal part is set to **0**, meaning no decimal part is displayed. In the second example, the length is set to **1**, allowing one digit after the decimal point. In the following examples, the length of the decimal part is set to **2** and **4**, allowing more precise display of decimal values.

*props: `decimal-part-length`*

```html
<a-input-currency
  v-model="model"
  :decimal-part-length="0"
  label="decimal-part-length 0"
></a-input-currency>
<a-input-currency
  v-model="model"
  :decimal-part-length="1"
  class="a_mt_3"
  label="decimal-part-length 1"
></a-input-currency>
<a-input-currency
  v-model="model"
  :decimal-part-length="2"
  class="a_mt_3"
  label="decimal-part-length 2"
></a-input-currency>
<a-input-currency
  v-model="model"
  :decimal-part-length="4"
  class="a_mt_3"
  label="decimal-part-length 4"
></a-input-currency>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyDecimalPartLength",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
    return {
      model,
    };
  },
};
```

## Thousands separator

This example demonstrates how to use the **thousand-divider** property to set the thousands separator in the **AInputCurrency** component. In the first case, a comma **','** is used as the thousands separator. In the second example, a period **'.'** is used as the separator. In the third example, a space **' '** is used as the separator, while in the last example, there is no separator, allowing numbers to be displayed without thousands separation. Important: The decimal separator and the thousands separator must be different.

*props: `thousand-divider`*

```html
<a-input-currency
  v-model="model"
  thousand-divider=","
  decimal-divider="."
  label="thousand-divider=','"
></a-input-currency>
<a-input-currency
  v-model="model"
  thousand-divider="."
  decimal-divider=","
  class="a_mt_3"
  label="thousand-divider='.'"
></a-input-currency>
<a-input-currency
  v-model="model"
  thousand-divider=" "
  class="a_mt_3"
  label="thousand-divider=' '"
></a-input-currency>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyThousandDivider",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
    return {
      model,
    };
  },
};
```

## Validation on change

This example demonstrates how to use **validation-on-change** in the **AInputCurrency** component. In the first example, value validation is not performed with each change, as **validation-on-change** is set to **false**. In the second example, when **validation-on-change** is set to **true**, the entered values are validated immediately upon change.

*props: `validation-on-change`*

```html
<a-input-currency
  v-model="model"
  :validation-on-change="false"
  label="validation-on-change=false"
></a-input-currency>
<a-input-currency
  v-model="model"
  :validation-on-change="true"
  class="a_mt_3"
  label="validation-on-change=true"
></a-input-currency>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyValidationOnChange",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
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
<a-input-currency
  v-model="model"
  help-text="Aloha"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyReadonly",
  components: {
    AInputCurrency,
  },
  setup() {
    const model1 = ref(10.02);
    const model2 = ref(10000);
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
| autocomplete | String |  |  | Specifies whether the field should support autocomplete, similar to the **autocomplete** attribute in **HTML**. |
| change | Function | () => {} |  | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| clear-button-class | String / Object |  |  | Specifies the **CSS** class that will be applied to the clear button. This allows customization of the button's appearance according to design requirements. |
| controls-type | String | none |  | Defines the type of control elements that will be displayed next to the input field. Possible values are: **plus-minus** (increment and decrement buttons), **arrows** (arrows for changing values), or **none** (no control elements). |
| currency-symbol | String | € |  | Specifies the currency symbol that will be displayed in the input field, such as **$**, **€**, or **₽**. |
| currency-symbol-position | String | right |  | Determines the position of the currency symbol relative to the entered value. Possible values are: **left** (to the left of the value) or **right** (to the right of the value). |
| decimal-divider | String | , |  | Specifies the symbol that will be used as the decimal separator. Possible values are **.** (period) or **,** (comma). |
| decimal-part-length | Number | 2 |  | Defines the number of digits after the decimal separator that will be displayed in the value. |
| dependencies | Array / Object |  |  | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| disabled | Boolean |  |  | Determines whether the component is disabled. If set to **true**, the component becomes inactive and the user cannot interact with it. |
| errors | String / Array |  |  | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| error-icon | String / Object |  |  | Specifies the icon displayed when the component has validation errors. If the component has an input field, the icon is shown inside it; otherwise, it is displayed next to the control. The icon is shown only when **errors** is present. |
| exclude-render-attributes | Array | () => [] |  | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final **DOM**. |
| extra | Object |  |  | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like **"_WELCOME_{{foo}}_{{bar}}_"**, which is translated as **"Welcome {{ foo }}: {{ bar }}"**, you can pass an object like **{ foo: "abc", bar: "123" }**, and the result will be the translation **"Welcome abc: 123"**. |
| help-text | String |  |  | Help text displayed below the component. Provides the user with additional information or instruction. |
| html-id | String |  |  | Sets the **HTML ID** of the element. Can be used to uniquely identify the component on the page. |
| icon-prepend | String |  |  | Specifies the icon that will be displayed before the input field. This icon can be used to enhance the visual perception or indicate the type of input data. |
| id | String / Number | () => uniqueId("a_input_currency_") |  | The identifier of the component, which can be used to track or refer to the component in the code. |
| id-prefix | String |  |  | Prefix for the component's **ID**. Used to create a unique identifier based on the specified prefix. |
| input-attributes | Object | () => ({}) |  | An object of attributes applied directly to the input element. Allows adding or customizing additional input attributes. |
| input-class | String / Object |  |  | **CSS** class(es) applied to the input element. Allows styling the component according to your requirements. |
| input-width | String | 200 |  | Sets the width of the input field. The value can be specified in pixels or percentages. |
| integer-part-max-length | Number | 15 |  | Defines the maximum length of the integer part of the value, expressed in the number of digits. |
| is-clear-button | Boolean | true |  | Determines whether the clear button should be displayed. If **true**, a button will be shown next to the text field, allowing the user to clear its content. |
| is-hide | Boolean |  |  | Determines whether the component should be hidden. If set to **true**, the component is not displayed on the page. |
| is-label-float | Boolean |  |  | Determines whether the label of the component should be positioned above the field. If **true**, the label will move above the text field when focused or when content is present. Deprecated, use label-position. |
| is-render | Boolean | true |  | Indicates whether the component should be rendered. If set to **false**, the component will not be created in the **DOM**. |
| label | String / Number |  |  | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| label-class | String / Object |  |  | **CSS** class(es) applied to the label. Allows customizing the label's style. |
| label-description | String |  |  | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| label-position | "float" / "inset" / "top" | "float" |  | Position of the label: "float", "inset" or "top". The default comes from the component plugin or AFormPlugin (labelPosition). |
| label-screen-reader | String / Number |  |  | Label intended for screen readers. Useful for improving accessibility. |
| max | Number |  |  | Specifies the maximum value that can be entered in the field. |
| min | Number |  |  | Specifies the minimum value that can be entered in the field. |
| model-dependencies | Object | () => ({}) |  | Determines model dependencies that may affect the visibility or behavior of the component. |
| model-type | String | number |  | Determines the type of data that will be stored in the model. Possible values are **number** (numeric value) or **string** (string value). |
| model-undefined | String / Number / Object / Array / Boolean |  |  | The value used to reset the model to an undefined state. Useful for clearing the model value. |
| model-value | String / Number |  |  | The current model value associated with the component. Used to manage the data displayed in the component. |
| placeholder | String / Number / Object |  |  | Specifies the placeholder text that will be displayed in the input field until the user enters data. The placeholder helps the user understand what data is expected in the field. |
| readonly | Boolean |  |  | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| readonly-default | String |  |  | The default text that is shown if the value is missing in read-only mode. |
| required | Boolean |  |  | Indicates whether the component is required. If set to **true**, the component requires user input. |
| step | Number | 1 |  | Used for **number** or **integer** types. Specifies the step for changing the value, for example, when increasing or decreasing the number using keyboard arrows. |
| thousand-divider | String | . |  | Specifies the symbol used for separating thousands in the value. Possible values are **.** (period), **,** (comma), or an empty string (no separator). |
| validation-on-change | Boolean | false |  | If set to **true**, validation of the entered value will be performed with each change in the field. |

## Events

| name | type | description |
| --- | --- | --- |
| update:model-value | Function | Event triggered when the component's model value is updated. Used to synchronize data between the component and the parent component. |
| focus | Function | Event triggered when the component gains focus. Useful for tracking user interaction with the element. |
| blur | Function | Event triggered when the component loses focus. Used to validate or save data when the user leaves the field. |
