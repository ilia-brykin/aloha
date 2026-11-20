# AGroup (Group)

AGroup is a component for displaying and managing grouped form elements or options. It supports labels, help text, errors, grouping, sorting, search, and other settings for flexible data presentation.

## Basic usage

*props: `model-value`, `children`*

```html
<a-group
  v-model="model"
  :children="childrenGroup"
></a-group>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AGroup,
} from "aloha-vue";
    
export default {
  name: "PageGroupBasic",
  components: {
    AGroup,
  },
  setup() {
    const childrenGroup = [
      {
        id: "text1",
        type: "text",
        label: "Input",
        labelClass: "a_column a_column_3 a_column_12_touch a_text_right",
        classColumn: "a_column a_column_5 a_column_12_touch",
      },
    ];
    const model = ref({
      text1: "Aloha",
    });
    
    return {
      childrenGroup,
      model,
    };
  },
};
```
