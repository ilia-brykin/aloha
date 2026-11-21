# AValidatedJson (Validated JSON)

AValidatedJson is a component for editing structured data with validation rules. It supports single-item, list, and JSON modes and helps users manage complex form data safely.

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
  name: "PageValidatedJsonModeList",
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

## valueKey: primitive lists

Use `mode="list"` with `value-key="value"` to edit an array of primitive values, such as strings. The child field with `id="value"` defines the editor for each item, while the model remains a simple array, such as `["Aloha", "Vue"]`. The example also shows duplicate validation with `unique-children-ids` and a read-only view of the same data.

*props: `mode`, `value-key`, `children`, `unique-children-ids`*

```html
<a-validated-json
  v-model="model"
  mode="list"
  value-key="value"
  :children="children"
  :unique-children-ids="['value']"
  element-template="{{ value }}"
/>
```

```js
import { ref } from "vue";
import { AValidatedJson } from "aloha-vue";

export default {
  components: { AValidatedJson },
  setup() {
    const model = ref(["Aloha", "Vue"]);
    const children = [{ id: "value", type: "text", label: "_A_VALIDATED_JSON_COMPONENT_LABEL_VALUE_", required: true }];
    return { model, children };
  },
};
```

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
  name: "PageValidatedJsonModeList",
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
  name: "PageValidatedJsonModeList",
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
