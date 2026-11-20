# ARouterLinkConfig (Router link config)

_A_INPUT_NUMBER_COMPONENT_DESCRIPTION_

## Basic usage

*props: `model-value`, `label`*

```html
<a-input-number
  v-model="model1"
  label="Input 1"
></a-input-number>
<div class="a_mb_3">model1: {{ model1 }}</div>
<a-input-number
  v-model="model2"
  label="Input 2"
></a-input-number>
<div class="a_mb_3">model2: {{ model2 }}</div>
<a-input-number
  v-model="model3"
  label="Input 3"
></a-input-number>
<div>model3: {{ model3 }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AInputNumber,
} from "aloha-vue";
    
export default {
  name: "PageInputNumberBasic",
  components: {
    AInputNumber,
  },
  setup() {
    const model1 = ref(10);
    const model2 = ref(10000);
    const model3 = ref(10000.98);
    
    return {
      model1,
      model2,
      model3,
    };
  },
};
```

## Label position

**label-position** sets where the label is shown: `"float"` – inside the empty field, it moves to the border on focus or with a value; `"inset"` – always inside the field, small above the value; `"top"` – above the field. The default for all form elements is set with **AFormPlugin** (`labelPosition`). **is-label-float** still works, but is deprecated.

*props: `label-position`*

```html
<a-input-number
  v-model="model"
  label="label-position: float"
  label-position="float"
></a-input-number>
<a-input-number
  v-model="model"
  label="label-position: inset"
  label-position="inset"
></a-input-number>
<a-input-number
  v-model="model"
  label="label-position: top"
  label-position="top"
></a-input-number>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  AInputNumber,
} from "aloha-vue";

export default {
  name: "PageInputNumberLabelPosition",
  components: {
    AInputNumber,
  },
  setup() {
    const model = ref(10);

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
<a-input-number
  v-model="model"
  :error-icon="errorIcon"
  errors="Aloha"
  label="Input number"
></a-input-number>
```

```js
import {
  ref,
} from "vue";

import {
  AInputNumber,
} from "aloha-vue";

export default {
  name: "PageInputNumberErrorIcon",
  components: {
    AInputNumber,
  },
  setup() {
    const model = ref(25);
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
<a-input-number
  v-model="model"
  label-position="top"
  label="Input"
  label-description="Aloha"
></a-input-number>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AInputNumber,
} from "aloha-vue";
    
export default {
  name: "PageInputNumberLabelDescription",
  components: {
    AInputNumber,
  },
  setup() {
    const model = ref(10);
    
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
<a-input-number
  :model-value="model1"
  :readonly="true"
  label="Input 1"
></a-input-number>
<a-input-number
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="Input 2"
></a-input-number>
<a-input-number
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Input 3"
></a-input-number>
<a-input-number
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  help-text="Aloha"
  label="Input 4"
  readonly-default="-"
></a-input-number>
```

```js
import {
  ref,
} from "vue";

import { 
  AInputNumber,
} from "aloha-vue";
    
export default {
  name: "PageInputNumberReadonly",
  components: {
    AInputNumber,
  },
  setup() {
    const model1 = ref(10);
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

## Events

| name | type | description |
| --- | --- | --- |
| update:model-value | Function | Event triggered when the component's model value is updated. Used to synchronize data between the component and the parent component. |
| focus | Function | Event triggered when the component gains focus. Useful for tracking user interaction with the element. |
| blur | Function | Event triggered when the component loses focus. Used to validate or save data when the user leaves the field. |

## Translations

| key | en |
| --- | --- |
| `_A_ROUTER_LINK_CONFIG_HELP_TEXT_PARAM_` | Dynamic parameters are used in routes to pass data within the path. They are denoted by a colon `:` before the parameter name, for example: `/user/:id`. When navigating, this parameter is replaced with a specific value, such as: `/user/123`. |
| `_A_ROUTER_LINK_CONFIG_HELP_TEXT_QUERY_` | URL parameters allow passing additional information in the request. They are added after the `?` symbol in the address bar and follow the format "key=value". For example: `?limit=10&sort=asc`. |
| `_A_ROUTER_LINK_CONFIG_HELP_TEXT_ROUTE_` | The address determines where the link will navigate. It can be static (e.g., `/home`) or contain dynamic parameters (e.g., `/user/:id`). Select the address for navigation. |
| `_A_ROUTER_LINK_CONFIG_HELP_TEXT_TARGET_` | Defines where the link will open. Available options: in the same window (`_self`), in a new window or tab (`_blank`), in the parent frame (`_parent`), or in the outermost frame (`_top`). |
| `_A_ROUTER_LINK_CONFIG_LABEL_PARAM_` | Dynamic parameters |
| `_A_ROUTER_LINK_CONFIG_LABEL_QUERY_` | URL parameters |
| `_A_ROUTER_LINK_CONFIG_LABEL_ROUTE_` | Select address |
| `_A_ROUTER_LINK_CONFIG_LABEL_TARGET_` | target attribute |

model1: {{ model1 }}

## type "integerNonNegative"

model2: {{ model2 }}

## type "integerPositive"

model3: {{ model3 }}

## type "integer"

model4: {{ model4 }}

## CSS variables (`scss/components/ui/AInputNumber.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_input_number_width` |  | Width of the number field. |
| `--a_input_number_max_width` |  | Maximum width of the number field. |
| `--a_input_number_min_width` |  | Minimum width of the number field. |
| `--a_input_number_controls_bg` |  | Background of the increase and decrease buttons. |
| `--a_input_number_controls_border_color` |  | Border color of the increase and decrease buttons. |
