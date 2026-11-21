# ARadio (Radio buttons)

The **ARadio** component represents a set of radio buttons, where the user can select only one item from the given options. The component supports various settings such as group collapsing, button group display, search functionality, and many others.

## Basic usage

*props: `data`, `model-value`, `label`*

```html
<a-radio
  v-model="model"
  :data="data"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioBasic",
  components: {
    ARadio,
  },
  setup() {
    const data = [
      {
        value: "aloha_1",
        label: "Aloha 1",
      },
      {
        value: "aloha_2",
        label: "Aloha 2",
      },
      {
        value: "aloha_3",
        label: "Aloha 3",
      },
      {
        value: "aloha_4",
        label: "Aloha 4",
      },
    ];
    const model = ref(undefined);
    
    return {
      data,
      model,
    };
  },
};
```

## Model change function

In this example, the **change** function is responsible for updating the component's model. The function takes three arguments: the model **model**, the component identifier **id**, and all passed **props**. This approach allows flexible handling of model changes and performing additional actions such as logging or validation.

*props: `change`, `model-value`*

```html
<a-radio
  :change="changeModel"
  :data="data"
  :model-value="model"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioChange",
  components: {
    ARadio,
  },
  setup() {
    const data = [
      {
        value: "aloha_1",
        label: "Aloha 1",
      },
      {
        value: "aloha_2",
        label: "Aloha 2",
      },
      {
        value: "aloha_3",
        label: "Aloha 3",
      },
      {
        value: "aloha_4",
        label: "Aloha 4",
      },
    ];
    const model = ref(undefined);
    
    const changeModel = ({ model: _model, id, props }) => {
      model.value = _model;
      console.log(id, props);
    };
    
    return {
      changeModel,
      data,
      model,
    };
  },
};
```

## Help text

This example shows how to use **help-text** to add a help text below the input field. The help text provides additional information to the user about the expected data in this field.

*props: `help-text`*

```html
<a-radio
  v-model="model"
  :data="data"
  help-text="Aloha"
  label="Radio"
></a-radio>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioHelpText",
  components: {
    ARadio,
  },
  setup() {
    const data = [
      {
        value: "aloha_1",
        label: "Aloha 1",
      },
      {
        value: "aloha_2",
        label: "Aloha 2",
      },
      {
        value: "aloha_3",
        label: "Aloha 3",
      },
      {
        value: "aloha_4",
        label: "Aloha 4",
      },
    ];
    const model = ref(undefined);
    
    return {
      data,
      model,
    };
  },
};
```

## Error display

This example shows how to use **errors** to display error messages below the input field. Error messages help the user understand which data was entered incorrectly and how to correct it.

*props: `errors`*

```html
<a-radio
  v-model="model"
  :data="data"
  errors="Aloha"
  label="Radio"
></a-radio>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioError",
  components: {
    ARadio,
  },
  setup() {
    const data = [
      {
        value: "aloha_1",
        label: "Aloha 1",
      },
      {
        value: "aloha_2",
        label: "Aloha 2",
      },
      {
        value: "aloha_3",
        label: "Aloha 3",
      },
      {
        value: "aloha_4",
        label: "Aloha 4",
      },
    ];
    const model = ref(undefined);
    
    return {
      data,
      model,
    };
  },
};
```

## Using **label-description**

This example shows how to use **label-description** to add additional description to the component label. This allows providing the user with more detailed information about the purpose of the field.

*props: `label-description`*

```html
<a-radio
  v-model="model"
  :data="data"
  label="Radio"
  label-description="Aloha"
></a-radio>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioLabelDescription",
  components: {
    ARadio,
  },
  setup() {
    const data = [
      {
        value: "aloha_1",
        label: "Aloha 1",
      },
      {
        value: "aloha_2",
        label: "Aloha 2",
      },
      {
        value: "aloha_3",
        label: "Aloha 3",
      },
      {
        value: "aloha_4",
        label: "Aloha 4",
      },
    ];
    const model = ref(undefined);
    
    return {
      data,
      model,
    };
  },
};
```

## Label for screen reader

This example shows how to use **label-screen-reader**. It allows you to set a hidden label that will only be visible to screen readers.

*props: `label-screen-reader`*

```html
<a-radio
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label-screen-reader="Aloha"
></a-radio>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioLabelScreenReader",
  components: {
    ARadio,
  },
  setup() {
    const data = [
      {
        label: "Aloha 0",
        id: "aloha_0",
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
      },
      {
        label: "Aloha 6",
        id: "aloha_6",
      },
      {
        label: "Aloha 7",
        id: "aloha_7",
      },
      {
        label: "Aloha 8",
        id: "aloha_8",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};
```

## Item grouping

This example demonstrates how to use **key-group** and **key-group-label-callback** to group items and set group names in the component. In the first case, simple grouping by **alohaBR** and **aloha** keys is used. In the second example, the **key-group-label-callback** callback function is additionally applied to dynamically determine group names based on the data.

*props: `key-group`, `key-group-label-callback`*

```html
<a-radio
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  key-id="id"
  key-label="label"
  label="key-group"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :key-group-label-callback="onGroupLabelCallback"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="key-group + key-group-callback"
></a-radio>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioGroup",
  components: {
    ARadio,
  },
  setup() {
    const data = [
      {
        label: "Aloha 0",
        id: "aloha_0",
        aloha: "",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 6",
        id: "aloha_6",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 7",
        id: "aloha_7",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 8",
        id: "aloha_8",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
    ];
    const model = ref(undefined);
    
    const onGroupLabelCallback = ({ group, item }) => {
      if (group === "_not_grouped") {
        return "---";
      }

      if (group === "Alex") {
        return `-${ group }-`;
      }

      return group;
    };

    return {
      data,
      model,
      onGroupLabelCallback,
    };
  },
};
```

## Retrieve invalid entries

Loads radio options from local JSON files and renders missing selected values inside a separate invalid entries group.

*props: `url`, `url-retrieve`*

```html
<a-radio
  v-model="model1"
  key-id="id"
  key-label="label"
  label="Radio with retrieve"
  :url="url"
  :url-retrieve="urlRetrieve"
/>
<div>model1: {{ model1 }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  ARadio,
} from "aloha-vue";

export default {
  name: "PageRadioRetrieve",
  components: {
    ARadio,
  },
  setup() {
    const model1 = ref("aloha_10");
    const url = `${ import.meta.env.BASE_URL }assets/mock/select-base.json`;
    const urlRetrieve = `${ import.meta.env.BASE_URL }assets/mock/select-retrieve.json`;

    return {
      model1,
      url,
      urlRetrieve,
    };
  },
};
```

## URL template

The value of `file` replaces `{{ file }}` in `url`. Choose another data source to reload the options and clear the selection. The examples load existing local JSON files.

*props: `url`, `url-template-data`*

```html
<a-select
  v-model="templateDataBasic.file"
  :data="sources"
  :translate-data="true"
  key-id="id"
  key-label="label"
  label="_A_UI_URL_TEMPLATE_SOURCE_"
  type="select"
/>
<a-radio
  v-model="modelBasic"
  :url="urlBasic"
  :url-template-data="templateDataBasic"
  key-id="id"
  key-label="label"
  label="_A_UI_URL_TEMPLATE_OPTIONS_"
/>
<div>model: {{ modelBasic }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  ARadio,
  ASelect,
} from "aloha-vue";

export default {
  components: {
    ARadio,
    ASelect,
  },
  setup() {
    const sources = [
      { id: "base", label: "_A_UI_URL_TEMPLATE_SOURCE_FIRST_" },
      { id: "retrieve", label: "_A_UI_URL_TEMPLATE_SOURCE_SECOND_" },
    ];
    const modelBasic = ref(undefined);
    const templateDataBasic = ref({ file: "base" });
    const urlBasic = `${ import.meta.env.BASE_URL }assets/mock/select-{{ file }}.json`;

    return {
      modelBasic,
      sources,
      templateDataBasic,
      urlBasic,
    };
  },
};
```

## Nested paths and reactive data

A placeholder such as `{{ source.file }}` supports nested object paths. Changing the data source changes the resolved URL, reloads the options and clears the selection. Select an option, then edit the note: it is not used in the URL, so the URL watcher does not run, no new request is sent and the selection is preserved. Replacing `urlTemplateData` with another object that produces the same URL has the same effect.

*props: `url`, `url-template-data`*

```html
<a-select
  v-model="templateDataReactive.source.file"
  :data="sources"
  :translate-data="true"
  key-id="id"
  key-label="label"
  label="_A_UI_URL_TEMPLATE_SOURCE_"
  type="select"
/>
<a-input
  v-model="templateDataReactive.note"
  label="_A_UI_URL_TEMPLATE_NOTE_"
/>
<a-radio
  v-model="modelReactive"
  :url="urlReactive"
  :url-template-data="templateDataReactive"
  key-id="id"
  key-label="label"
  label="_A_UI_URL_TEMPLATE_OPTIONS_"
/>
<div>model: {{ modelReactive }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  AInput,
  ARadio,
  ASelect,
} from "aloha-vue";

export default {
  components: {
    AInput,
    ARadio,
    ASelect,
  },
  setup() {
    const sources = [
      { id: "base", label: "_A_UI_URL_TEMPLATE_SOURCE_FIRST_" },
      { id: "retrieve", label: "_A_UI_URL_TEMPLATE_SOURCE_SECOND_" },
    ];
    const modelReactive = ref(undefined);
    const templateDataReactive = ref({ source: { file: "base" }, note: "" });
    const urlReactive = `${ import.meta.env.BASE_URL }assets/mock/select-{{ source.file }}.json`;

    return {
      modelReactive,
      sources,
      templateDataReactive,
      urlReactive,
    };
  },
};
```

## Item search

This example demonstrates how to use **search** to add search functionality to the items in the component. This feature allows users to easily find the required items in a large data set.

*props: `search`*

```html
<a-radio
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :search="true"
  :search-in-group="true"
  key-id="id"
  key-label="label"
  label="Aloha group"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  :search="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioSearch",
  components: {
    ARadio,
  },
  setup() {
    const data = [
      {
        label: "Aloha 0",
        id: "aloha_0",
        aloha: "",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 6",
        id: "aloha_6",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 7",
        id: "aloha_7",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 8",
        id: "aloha_8",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};
```

## Search in **HTML** text

This example demonstrates how to use the `search-text-in-html` prop to perform a search only on the visible text from the **HTML**, ignoring **HTML** tags.

*props: `search`, `search-text-in-html`*

```html
<a-radio
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :search-in-group="true"
  :search-text-in-html="true"
  :search="true"
  key-id="id"
  key-label="label"
  label="Aloha group"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  :search-text-in-html="true"
  :search="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioSearchTextInHtml",
  components: {
    ARadio,
  },
  setup() {
    const data = [
      {
        label: "<span>Aloha</span> <strong>1</strong>",
        id: "aloha_0",
        aloha: "",
        alohaBR: "<strong>Köln</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>2</strong>",
        id: "aloha_1",
        aloha: "Buba",
        alohaBR: "<strong>Köln</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>3</strong>",
        id: "aloha_2",
        aloha: "Buba",
        alohaBR: "<strong>Köln</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>4</strong>",
        id: "aloha_3",
        aloha: "Sandra",
        alohaBR: "<strong>Köln</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>5</strong>",
        id: "aloha_4",
        aloha: "Sandra",
        alohaBR: "<strong>Köln</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>6</strong>",
        id: "aloha_5",
        aloha: "Coco",
        alohaBR: "<strong>Düsseldorf</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>7</strong>",
        id: "aloha_6",
        aloha: "Coco",
        alohaBR: "<strong>Düsseldorf</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>8</strong>",
        id: "aloha_7",
        aloha: "Alex",
        alohaBR: "<strong>Düsseldorf</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>9</strong>",
        id: "aloha_8",
        aloha: "Alex",
        alohaBR: "<strong>Düsseldorf</strong>",
      },
    ];
    const model = ref("aloha_7");

    return {
      data,
      model,
    };
  },
};
```

## Disabling individual items

This example demonstrates how to use **key-disabled** to disable specific items in the component. This allows flexible control over the availability of items based on the data.

*props: `key-disabled`*

```html
<a-radio
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  key-disabled="disabled"
  key-id="id"
  key-label="label"
  label="Aloha group"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  class="a_mt_3"
  key-disabled="disabled"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioKeyDisabled",
  components: {
    ARadio,
  },
  setup() {
    const data = [
      {
        label: "Aloha 0",
        id: "aloha_0",
        aloha: "",
        alohaBR: "Köln",
        disabled: true,
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
        aloha: "Buba",
        alohaBR: "Köln",
        disabled: true,
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
        aloha: "Buba",
        alohaBR: "Köln",
        disabled: true,
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 6",
        id: "aloha_6",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 7",
        id: "aloha_7",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 8",
        id: "aloha_8",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};
```

## Translatable items

This example demonstrates how to use **translate-data** in the component. The data provided contains labels with keys that are automatically translated based on localization settings. This allows displaying translated values depending on the selected language.

*props: `translate-data`*

```html
<a-radio
  v-model="model"
  :data="data"
  :translate-data="true"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioTranslateData",
  components: {
    ARadio,
  },
  setup() {
    const data = [
      {
        label: "_A_UI_ELEMENT_0_",
        id: "aloha_0",
      },
      {
        label: "_A_UI_ELEMENT_1_",
        id: "aloha_1",
      },
      {
        label: "_A_UI_ELEMENT_2_",
        id: "aloha_2",
      },
      {
        label: "_A_UI_ELEMENT_3_",
        id: "aloha_3",
      },
      {
        label: "_A_UI_ELEMENT_4_",
        id: "aloha_4",
      },
      {
        label: "_A_UI_ELEMENT_5_",
        id: "aloha_5",
      },
      {
        label: "_A_UI_ELEMENT_6_",
        id: "aloha_6",
      },
      {
        label: "_A_UI_ELEMENT_7_",
        id: "aloha_7",
      },
      {
        label: "_A_UI_ELEMENT_8_",
        id: "aloha_8",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};
```

## Button group

This example demonstrates how to use **is-button-group** and **class-button-group-default** in the component. The first property allows displaying the items as a group of buttons, creating a more interactive interface. The second property customizes the appearance of the button group by setting a styling class.

*props: `is-button-group`, `class-button-group-default`*

```html
<a-radio
  v-model="model"
  :data="data"
  :is-button-group="true"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  :is-button-group="true"
  class="a_mt_3"
  class-button-group-default="a_btn a_btn_outline_secondary a_text_nowrap"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  :is-button-group="true"
  :key-group="['alohaBR', 'aloha']"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioIsButtonGroup",
  components: {
    ARadio,
  },
  setup() {
    const data = [
      {
        label: "Aloha 0",
        id: "aloha_0",
        aloha: "",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 6",
        id: "aloha_6",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 7",
        id: "aloha_7",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 8",
        id: "aloha_8",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};
```

## Collapse/expand

This example demonstrates how to use **collapsible** and **is-collapsed** in the component. The **collapsible** property allows the group of items to be collapsible, while **is-collapsed** sets the initial collapsed state. The example also demonstrates the use of the **toggle-collapse** event, which is triggered when the group is collapsed or expanded.

*props: `collapsible`, `is-collapsed`; emits: `toggle-collapse`*

```html
<a-radio
  v-model="model"
  :collapsible="true"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  @toggle-collapse="toggleCollapse"
></a-radio>
<a-radio
  v-model="model"
  :collapsible="true"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
  @toggle-collapse="toggleCollapse"
></a-radio>
<a-radio
  v-model="model"
  :collapsible="true"
  :data="data"
  :is-collapsed="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
  @toggle-collapse="toggleCollapse"
></a-radio>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioCollapse",
  components: {
    ARadio,
  },
  setup() {
    const data = [
      {
        label: "Aloha 0",
        id: "aloha_0",
        aloha: "",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 6",
        id: "aloha_6",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 7",
        id: "aloha_7",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 8",
        id: "aloha_8",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
    ];
    const model = ref(undefined);
    
    const toggleCollapse = ({ isCollapsed, id, props }) => {
      console.log(isCollapsed, id, props);
    };

    return {
      data,
      model,
      toggleCollapse,
    };
  },
};
```

## Extra data

This example demonstrates how to use **data-extra** in the component. The first example passes extra data as an array of arrays. The second passes an array of objects and groups it with **key-group**, using the same grouping mechanism as **data**.

*props: `data-extra`, `key-group`*

```html
<a-radio
  v-model="model1"
  :data-extra="dataExtraArrayOfArrays"
  :data="data"
  :search="true"
  key-id="id"
  key-label="label"
  label="Data extra (Array of Arrays)"
></a-radio>
<div>model1: {{ model1 }}</div>
<a-radio
  v-model="model2"
  :data-extra="dataExtraArrayOfObjects"
  :data="data"
  :search="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  key-group="group"
  label="Grouped data extra (Array of Objects)"
></a-radio>
<div>model2: {{ model2 }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioDataExtra",
  components: {
    ARadio,
  },
  setup() {
    const data = [
      {
        label: "Aloha 0",
        id: "aloha_0",
        aloha: "",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 6",
        id: "aloha_6",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 7",
        id: "aloha_7",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 8",
        id: "aloha_8",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
    ];
    const dataExtraArrayOfArrays = [
      ["extra_id_1", "Extra 1"],
      ["extra_id_2", "Extra 2"],
    ];
    const dataExtraArrayOfObjects = [
      {
        label: "Extra 1",
        id: "extra_id_1",
        group: "Recommended",
      },
      {
        label: "Extra 2",
        id: "extra_id_2",
        group: "Other",
      },
      {
        label: "Extra 3",
        id: "extra_id_3",
        group: "Other",
      },
    ];
    const model1 = ref(undefined);
    const model2 = ref(undefined);

    return {
      data,
      dataExtraArrayOfArrays,
      dataExtraArrayOfObjects,
      model1,
      model2,
    };
  },
};
```

## Inline

This example demonstrates how to use **inline** to display items inline.

*props: `inline`*

```html
<a-radio
  v-model="model"
  :data="data"
  :inline="true"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  :inline="true"
  :key-group="['alohaBR', 'aloha']"
  key-id="id"
  key-label="label"
  label="Aloha group"
></a-radio>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioInline",
  components: {
    ARadio,
  },
  setup() {
    const data = [
      {
        label: "Aloha 0",
        id: "aloha_0",
        aloha: "",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 6",
        id: "aloha_6",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 7",
        id: "aloha_7",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 8",
        id: "aloha_8",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};
```

## Two columns

This example demonstrates how to use **class-data-parent** to set **CSS** classes that control the display of items. In the first example, the items are arranged in two columns using the **a_list_columns a_list_columns_2** classes. In the second example, additional classes are used for responsive display at different screen resolutions, such as **desktop**, **widescreen**, and **fullhd**.

*props: `class-data-parent`*

```html
<a-radio
  v-model="model"
  :data="data"
  class-data-parent="a_list_columns a_list_columns_2"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  class-data-parent="a_list_columns a_list_columns_2_desktop a_list_columns_2_widescreen a_list_columns_2_fullhd"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioTwoColumns",
  components: {
    ARadio,
  },
  setup() {
    const data = [
      {
        label: "Aloha 0",
        id: "aloha_0",
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
      },
      {
        label: "Aloha 6",
        id: "aloha_6",
      },
      {
        label: "Aloha 7",
        id: "aloha_7",
      },
      {
        label: "Aloha 8",
        id: "aloha_8",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};
```

## Border display

This example demonstrates how to use **has-border** to control the display of borders. In the first example, the border is enabled, making the items more prominent. In the second example, the border is disabled, giving the items a more minimalist appearance.

*props: `has-border`*

```html
<a-radio
  v-model="model"
  :data="data"
  :has-border="true"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  :has-border="false"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioHasBorder",
  components: {
    ARadio,
  },
  setup() {
    const data = [
      {
        label: "Aloha 0",
        id: "aloha_0",
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
      },
      {
        label: "Aloha 6",
        id: "aloha_6",
      },
      {
        label: "Aloha 7",
        id: "aloha_7",
      },
      {
        label: "Aloha 8",
        id: "aloha_8",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};
```

## Simple data array

This example demonstrates how to use **is-data-simple-array** to work with a simple array of strings. The data is presented as an array of strings, where each string is a separate list item. This simplifies the process of displaying and managing items without the need for objects.

*props: `is-data-simple-array`*

```html
<a-radio
  v-model="model"
  :data="data"
  :is-data-simple-array="true"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioIsDataSimpleArray",
  components: {
    ARadio,
  },
  setup() {
    const data = [
      "Aloha 1",
      "Aloha 2",
      "Aloha 3",
      "Aloha 4",
      "Aloha 5",
      "Aloha 6",
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};
```

## Auto width

This example demonstrates how to use **is-width-auto** to control the width of items. When set to **true**, the width of items automatically adjusts to their content. When set to **false**, the width is fixed and determined by styles or the parent container.

*props: `is-width-auto`*

```html
<a-radio
  v-model="model"
  :data="data"
  :is-width-auto="true"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  :is-width-auto="false"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioIsWidthAuto",
  components: {
    ARadio,
  },
  setup() {
    const data = [
      {
        label: "Aloha 0",
        id: "aloha_0",
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
      },
      {
        label: "Aloha 6",
        id: "aloha_6",
      },
      {
        label: "Aloha 7",
        id: "aloha_7",
      },
      {
        label: "Aloha 8",
        id: "aloha_8",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};
```

## Label configuration function

This example demonstrates how to use **key-label-callback** to dynamically generate labels for items. The function passed as the value receives the item data and returns a string that will be used as the label.

*props: `key-label-callback`*

```html
<a-radio
  v-model="model"
  :data="data"
  :key-label-callback="onKeyLabelCallback"
  key-id="id"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioKeyLabelCallback",
  components: {
    ARadio,
  },
  setup() {
    const data = [
      {
        label: "Aloha 0",
        id: "aloha_0",
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
      },
      {
        label: "Aloha 6",
        id: "aloha_6",
      },
      {
        label: "Aloha 7",
        id: "aloha_7",
      },
      {
        label: "Aloha 8",
        id: "aloha_8",
      },
    ];
    const model = ref(undefined);
    
    const onKeyLabelCallback = ({ item }) => {
      return `--${ item.label }--`;
    };

    return {
      data,
      model,
      onKeyLabelCallback,
    };
  },
};
```

## Title configuration

This example demonstrates how to use **key-title** and **key-title-callback** to set the titles of items. In the first case, the title of each item is statically set using the **key-title** property. In the second example, the title is dynamically generated using the **key-title-callback** function, which takes the item data and returns a string to be displayed.

*props: `key-title`, `key-title-callback`*

```html
<a-radio
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  key-title="label"
  label="Aloha"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  :key-title-callback="onKeyTitleCallback"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioKeyTitle",
  components: {
    ARadio,
  },
  setup() {
    const data = [
      {
        label: "Aloha 0",
        id: "aloha_0",
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
      },
      {
        label: "Aloha 6",
        id: "aloha_6",
      },
      {
        label: "Aloha 7",
        id: "aloha_7",
      },
      {
        label: "Aloha 8",
        id: "aloha_8",
      },
    ];
    const model = ref(undefined);
    
    const onKeyLabelCallback = ({ item }) => {
      return `--${ item.label }--`;
    };

    return {
      data,
      model,
      onKeyLabelCallback,
    };
  },
};
```

## Sort order

This example demonstrates how to use **sort-order** to set the sort order of items. In the first case, no sort order is set, in the second, the items are sorted in ascending order (**asc**), and in the third, in descending order (**desc**). This allows you to customize the display order of items.

*props: `sort-order`*

```html
<a-radio
  v-model="model"
  :data="data"
  :sort-order="undefined"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
  sort-order="asc"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
  sort-order="desc"
></a-radio>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioSortOrder",
  components: {
    ARadio,
  },
  setup() {
    const data = [
      {
        label: "Aloha 8",
        id: "aloha_8",
      },
      {
        label: "Aloha 0",
        id: "aloha_0",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
      },
      {
        label: "Aloha 6",
        id: "aloha_6",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
      },
      {
        label: "Aloha 7",
        id: "aloha_7",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};
```

## Group sort order

This example demonstrates how to use **sort-order-group** to specify the sort order of groups of items. In the first case, no sort order is set, in the second, the groups are sorted in ascending order (**asc**), and in the third, in descending order (**desc**). This allows you to customize the display order of item groups.

*props: `sort-order-group`*

```html
<a-radio
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :sort-order-group="undefined"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
  sort-order-group="asc"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
  sort-order-group="desc"
></a-radio>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioSortOrderGroup",
  components: {
    ARadio,
  },
  setup() {
    const data = [
      {
        label: "Aloha 0",
        id: "aloha_0",
        aloha: "",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 6",
        id: "aloha_6",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 7",
        id: "aloha_7",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 8",
        id: "aloha_8",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
    ];
    const model = ref(undefined);
    
    return {
      data,
      model,
    };
  },
};
```

## Using Array as a Model

This example demonstrates how to use **is-model-array**. It allows you to set an array as the data model for the radio buttons. The selected item is recorded in the model array.

*props: `is-model-array`*

```html
<a-radio
  v-model="model"
  :data="data"
  :is-model-array="true"
  :key-group="['alohaBR', 'aloha']"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioSearch",
  components: {
    ARadio,
  },
  setup() {
    const data = [
      {
        label: "Aloha 0",
        id: "aloha_0",
        aloha: "",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 6",
        id: "aloha_6",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 7",
        id: "aloha_7",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 8",
        id: "aloha_8",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};
```

## Focus and blur

This example shows how the component reacts to gaining and losing focus. The "`focusin`" event is triggered once when the focus enters the component for the first time. The "`focusout`" event is triggered only when the focus fully leaves the component.

*emits: `focusin`, `focusout`*

```html
<a-radio
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :search="true"
  key-id="id"
  key-label="label"
  label="Radio1"
  @focusin="focusin1"
  @focusout="focusout1"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :is-button-group="true"
  :search="true"
  class="a_mt_5"
  key-id="id"
  key-label="label"
  label="Radio2"
  class-button-group-default="a_btn a_btn_outline_secondary a_text_nowrap"
  @focusin="focusin2"
  @focusout="focusout2"
></a-radio>
```

```js
import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioFocusBlur",
  components: {
    ARadio,
  },
  setup() {
    const data = [
      {
        label: "Aloha 0",
        id: "aloha_0",
        aloha: "",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 6",
        id: "aloha_6",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 7",
        id: "aloha_7",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 8",
        id: "aloha_8",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
    ];
    const model = ref(undefined);
    
    const focusin1 = ({ event, props }) => {
      console.log("focusin1", event, props);
    };

    const focusin2 = ({ event, props }) => {
      console.log("focusin2", event, props);
    };
    const focusout1 = ({ event, props }) => {
      console.log("focusout1", event, props);
    };

    const focusout2 = ({ event, props }) => {
      console.log("focusout2", event, props);
    };
    
    return {
      data,
      focusin1,
      focusin2,
      focusout1,
      focusout2,
      model,
    };
  },
};
```

## **Readonly** display mode

In this example, the component is used in **readonly** mode, where the value is displayed as text and cannot be modified by the user.

*props: `readonly`, `readonly-default`*

```html
<a-radio
  :model-value="model1"
  :data="data"
  :readonly="true"
  label="Radio 1"
></a-radio>
<a-radio
  :model-value="model2"
  :data="data"
  :is-model-array="true"
  :readonly="true"
  class="a_mt_3"
  label="Radio 2"
></a-radio>
<a-radio
  :model-value="model3"
  :data="data"
  :readonly="true"
  class="a_mt_3"
  label="Radio 3"
></a-radio>
<a-radio
  :model-value="model3"
  :data="data"
  :readonly="true"
  class="a_mt_3"
  label="Radio 4"
  readonly-default="-"
></a-radio>
```

```js
import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioReadonly",
  components: {
    ARadio,
  },
  setup() {
    const data = [
      {
        value: "aloha_1",
        label: "Aloha 1",
      },
      {
        value: "aloha_2",
        label: "Aloha 2",
      },
      {
        value: "aloha_3",
        label: "Aloha 3",
      },
      {
        value: "aloha_4",
        label: "Aloha 4",
      },
    ];
    const model1 = ref("aloha_1");
    const model2 = ref(["aloha_4", "aloha_5"]);
    const model3 = ref(undefined);
    
    return {
      data,
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
| api-save-id | String |  |  | A unique identifier for saving data retrieved from the **API**. This can be useful for caching or reusing data within a session. |
| attributes-fieldset | Object | () => ({}) |  | **HTML** attributes to be added to the **fieldset** tag. |
| change | Function | () => {} |  | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| class-button-group-default | String / Object / Array | a_btn a_btn_outline_primary |  | Default **CSS** classes that will be applied to the buttons in the group. These classes can be used to style the buttons in the checkbox or radio button group. |
| class-data-parent | String / Object |  |  | **CSS** classes that are applied to the parent data container. This allows customizing the appearance of the container that holds the data items. |
| class-fieldset | String / Object |  |  | **CSS** classes that will be applied to the **fieldset** tag containing the group of controls. This allows customizing the appearance of the group of form elements. |
| collapsible | Boolean |  |  | Specifies whether the group of checkboxes can be collapsed and expanded. If set to **true**, the group can be toggled by the user. |
| data | Array |  |  | An array of data used to generate the items. |
| data-extra | Array | () => [] |  | An additional array of items not included in the main data array. Its items support the same grouping configuration as **data** through **key-group** and the related group props. |
| merge-data | Boolean | false |  | Determines whether internally loaded data is merged with the **data** prop. Items are merged by their ID; when both sources contain the same ID, the internally loaded item takes precedence. If set to **false**, internally loaded data replaces the **data** prop. |
| dependencies | Array / Object |  |  | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| disabled | Boolean |  |  | Determines whether the component is disabled. If set to **true**, the component becomes inactive and the user cannot interact with it. |
| errors | String / Array |  |  | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| exclude-render-attributes | Array | () => [] |  | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final **DOM**. |
| extra | Object |  |  | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like **"_WELCOME_{{foo}}_{{bar}}_"**, which is translated as **"Welcome {{ foo }}: {{ bar }}"**, you can pass an object like **{ foo: "abc", bar: "123" }**, and the result will be the translation **"Welcome abc: 123"**. |
| has-border | Boolean | true |  | Specifies whether the item should have a border. If set to **true**, a border will be displayed around the item. |
| help-text | String |  |  | Help text displayed below the component. Provides the user with additional information or instruction. |
| html-id | String |  |  | Sets the **HTML ID** of the element. Can be used to uniquely identify the component on the page. |
| id | String / Number | () => uniqueId("a_radio_") |  | The identifier of the component, which can be used to track or refer to the component in the code. |
| id-prefix | String |  |  | Prefix for the component's **ID**. Used to create a unique identifier based on the specified prefix. |
| inline | Boolean |  |  | Specifies whether the checkboxes should be displayed inline. If set to **true**, the checkboxes will be aligned horizontally. |
| is-button-group | Boolean |  |  | Specifies whether the checkboxes should be displayed as buttons. If set to **true**, the checkboxes will be displayed as buttons, which can provide a more visually appealing interface. |
| is-collapsed | Boolean |  |  | Specifies the initial collapsed state of the checkbox group. If set to **true**, the group will be collapsed when the page loads. |
| is-data-simple-array | Boolean |  |  | Determines whether the data array is a simple array of values. If set to **true**, each element of the array will be treated as a simple value without keys. |
| is-hide | Boolean |  |  | Determines whether the component should be hidden. If set to **true**, the component is not displayed on the page. |
| is-model-array | Boolean |  |  | Allows the use of an array (**Array**) as the model. |
| is-render | Boolean | true |  | Indicates whether the component should be rendered. If set to **false**, the component will not be created in the **DOM**. |
| is-width-auto | Boolean |  |  | Specifies whether the width of the checkbox group should automatically adjust to its content. If set to **true**, the width will adjust automatically. |
| key-disabled | String |  |  | Specifies the key in the data object that determines whether the item will be disabled (unselectable). |
| key-disabled-callback | Function |  |  | A function to determine whether an item should be disabled. Returns `true` to disable a specific item. Accepts an object with item data: `{ item }`. |
| key-group | String / Number / Array |  |  | A key or array of keys used to group data by specific categories. This property allows grouping items into groups. |
| key-group-label-callback | Function |  |  | A callback function that takes two arguments **({ group, item })** and returns the group name. It is used to dynamically determine group names based on the provided data. |
| key-id | String | value |  | The key in the data object that will be used as the identifier for each item. |
| key-label | String | label |  | The key in the data object that specifies the label text for each item. |
| key-label-callback | Function |  |  | A callback function used to generate the label text based on the item data. This allows dynamically creating labels based on complex logic. |
| key-title | String |  |  | The key in the data object that specifies the title for each item. |
| key-title-callback | Function |  |  | A callback function used to generate the title based on the item data. This allows dynamically creating titles based on complex logic. |
| label | String / Number |  |  | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| label-class | String / Object |  |  | **CSS** class(es) applied to the label. Allows customizing the label's style. |
| label-description | String |  |  | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| label-screen-reader | String / Number |  |  | Label intended for screen readers. Useful for improving accessibility. |
| loading | Boolean |  |  | Indicates whether the item is in a loading state. If set to **true**, the item displays a loading indicator. |
| model-dependencies | Object | () => ({}) |  | Determines model dependencies that may affect the visibility or behavior of the component. |
| model-undefined | String / Number / Object / Array / Boolean |  |  | The value used to reset the model to an undefined state. Useful for clearing the model value. |
| model-value | Array |  |  | The current model value associated with the component. Used to manage the data displayed in the component. |
| readonly | Boolean |  |  | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| readonly-default | String |  |  | The default text that is shown if the value is missing in read-only mode. |
| required | Boolean |  |  | Indicates whether the component is required. If set to **true**, the component requires user input. |
| search | Boolean |  |  | Determines whether the search feature is supported. If set to **true**, users will be able to search within the group. |
| search-api | Boolean |  |  | Specifies whether item searches will be performed using an **API**. If set to **true**, data will be loaded from the server as the query is entered. |
| search-api-key | String |  |  | The key used to perform the search via **API**. Typically, this is a parameter passed in the server request to filter the data. |
| search-in-group | Boolean |  |  | Enables additional search by group names. |
| search-outside | Boolean |  |  | Determines whether the search will be performed outside the component, for example, via **API** or another external data source. |
| search-text-in-html | Boolean |  |  | If set to `true`, the search will be performed on the text extracted from the rendered **HTML**. This allows searching only visible text shown to the user, ignoring tags and attributes. |
| search-timeout | Number | 0 |  | Specifies the delay time in milliseconds before performing the search. Useful for preventing excessive requests during fast text input by the user. |
| slot-append-name | String |  |  | The name of the slot that will be appended after the component's main content. This allows extending the functionality of the component by adding custom content. |
| slot-name | String |  |  | The name of the main slot used to insert custom content into the component. |
| sort-order | String |  |  | Specifies the sort order of items. Possible values: **asc** (ascending) or **desc** (descending). |
| sort-order-group | String |  |  | Specifies the sort order of groups if the items are grouped. Possible values: **asc** (ascending) or **desc** (descending). |
| texts | Object | () => ({         collapseClose: "_A_FIELDSET_COLLAPSE_CLOSE_",         collapseOpen: "_A_FIELDSET_COLLAPSE_OPEN_",         notElementsWithSearch: "_A_RADIO_HAS_NOT_ELEMENTS_WITH_SEARCH_",         search: "_A_RADIO_SEARCH_",       }) |  | Allows customization of text messages for various actions within the component. This includes texts for collapsing/expanding (**collapseClose** and **collapseOpen**), messages for no elements found during search (**notElementsWithSearch**), and the search field text (**search**). |
| translate-data | Boolean |  |  | Indicates whether the data should be translated before display. If set to **true**, text values will be translated according to the current language settings. |
| url | String |  |  | URL used to load the component’s options. Supports `{{ path }}` placeholders resolved from `url-template-data`. |
| url-retrieve | String |  |  | An optional **URL** used specifically to retrieve already selected values that are missing from the main loaded list. |
| url-params | Object |  |  | Parameters that will be added to the **URL** request when loading data from the server. These parameters allow filtering or modifying the data retrieved from the **API**. |
| url-retrieve-params | Object |  |  | Optional parameters that will be added only to the retrieve request used for loading missing selected values. |
| url-template-data | Object |  |  | Object with values for `{{ path }}` placeholders in `url`, including nested paths such as `{{ source.file }}`. Uses the same placeholder syntax as translations. Changing these values reloads the options and clears the selection only when the resolved URL changes. Does not affect URLs without placeholders; query parameters are passed separately via `url-params`. |

## Events

| name | type | description |
| --- | --- | --- |
| focusin | Function | Triggered when the focus enters the component for the first time. |
| focusout | Function | Triggered when the focus leaves the component completely. |
| update-data | Function | An event triggered when the component data is updated. It can be used to perform actions after the data has been changed or updated, such as re-sorting or filtering items. |
| toggle-collapse | Function | The event is triggered when the user collapses or expands the group of items. |
| update:model-value | Function | Event triggered when the component's model value is updated. Used to synchronize data between the component and the parent component. |

## Translations

| key | en |
| --- | --- |
| `_A_RADIO_HAS_NOT_ELEMENTS_WITH_SEARCH_` | [No items available for selection] |
| `_A_RADIO_SEARCH_` | Search |

## CSS variables (`scss/utils/checkbox_radio.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_custom_control_border_radius` |  | Corner radius of the label area (visible on hover). |
| `--a_custom_control_label_padding` |  | Padding of the label area around the box and the text. |
| `--a_custom_control_label_width` |  | Width of the label area. The class a_custom_control_label_width_auto sets it to auto. |
| `--a_custom_control_label_color` |  | Text color of the label. |
| `--a_custom_control_label_disabled_color` |  | Text color of the label of a disabled checkbox or radio. |
| `--a_custom_control_label_text_margin_left` |  | Space between the box and the label text. |
| `--a_custom_control_hover_bg` |  | Background of the label area on hover. |
| `--a_custom_control_input_width` |  | Width and height of the box (checkbox) or circle (radio). |
| `--a_custom_control_input_bg` |  | Background of an unchecked box. |
| `--a_custom_control_input_border_color` |  | Border color of an unchecked box. |
| `--a_custom_control_input_hover_border_color` |  | Border color of the box on hover. |
| `--a_custom_control_input_border_width` |  | Border width of the box. |
| `--a_custom_control_input_border_radius` |  | Corner radius of the checkbox box. Radio buttons are always round. |
| `--a_custom_control_input_checked_color` |  | Color of the check mark, the indeterminate dash and the radio dot. |
| `--a_custom_control_input_checked_border_color` |  | Border color of a checked or indeterminate box. |
| `--a_custom_control_input_checked_bg` |  | Background of a checked or indeterminate box. |
| `--a_custom_control_input_checked_disabled_bg` |  | Background and border color of a checked box when disabled. |
| `--a_custom_control_input_disabled_bg` |  | Background of an unchecked box when disabled. |
| `--a_custom_control_input_disabled_border_color` |  | Border color of an unchecked box when disabled. |
| `--a_custom_control_error_color` |  | Color of the box border, the checked background and the label when the field has errors. |
| `--a_custom_control_mark_size` |  | Size of the mark inside the box, relative to the box. |
| `--a_custom_control_mark_checkbox` |  | Mask image of the check mark. |
| `--a_custom_control_mark_indeterminate` |  | Mask image of the indeterminate dash. |
| `--a_custom_control_mark_radio` |  | Mask image of the radio dot. |
| `--a_custom_control_mark` |  | Mask image used for the current control. Set from the three mark variables above. |
