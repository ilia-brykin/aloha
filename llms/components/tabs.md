# ATabs (Tabs)

The **ATabs** component is used for organizing content through tabs. Each tab contains a title and corresponding content, which is displayed when the tab is activated. Various settings are supported, such as vertical or horizontal layout, disabling tabs, allowing **HTML** in titles, and controlling the behavior of the active tab.

## Basic usage

*props: `data`*

```html
<a-tabs
  :data="data"
></a-tabs>
```

```js
import { 
  ATabs,
} from "aloha-vue";
    
export default {
  name: "PageTabsBasic",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
      },
    ];
    
    return {
      data,
    };
  },
};
```

## Disabling tabs

This example shows how to use **disabled** to disable all tabs. When set to **true**, users cannot interact with the tabs.

*props: `disabled`*

```html
<a-tabs
  :data="data"
  :disabled="true"
></a-tabs>
```

```js
import { 
  ATabs,
} from "aloha-vue";
    
export default {
  name: "PageTabsDisabled",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
      },
    ];
    
    return {
      data,
    };
  },
};
```

## Disabling specific tabs

This example shows how to use **key-disabled** to disable specific tabs. Tabs with **disabled** set to **true** will not be interactive.

*props: `key-disabled`*

```html
<a-tabs
  :data="data"
  key-disabled="disabled"
></a-tabs>
```

```js
import { 
  ATabs,
} from "aloha-vue";
    
export default {
  name: "PageTabsKeyDisabled",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
        disabled: true,
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
        disabled: true,
      },
      {
        label: "_A_TABS_TAB_4_",
        content: "_A_TABS_CONTENT_4_",
        disabled: false,
      },
    ];
    
    return {
      data,
    };
  },
};
```

## Key for tab labels

This example shows how to use **key-label** to specify an alternative field for tab labels. In this case, the **name** key is used instead of the **label** key for tab names.

*props: `key-label`*

```html
<a-tabs
  :data="data"
  key-label="name"
></a-tabs>
```

```js
import { 
  ATabs,
} from "aloha-vue";
    
export default {
  name: "PageTabsKeyLabel",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        name: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        name: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        name: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
      },
    ];
    
    return {
      data,
    };
  },
};
```

## Key for displaying content

This example shows how to use **key-content** to define which field in the data will be used as the content associated with each tab. Instead of the default **content** key, **aloha** is used to display the content associated with each tab.

*props: `key-content`*

```html
<a-tabs
  :data="data"
  key-content="aloha"
></a-tabs>
```

```js
import { 
  ATabs,
} from "aloha-vue";
    
export default {
  name: "PageTabsKeyContent",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        aloha: "<strong>_A_TABS_CONTENT_1_</strong>",
      },
      {
        label: "_A_TABS_TAB_2_",
        aloha: "<strong>_A_TABS_CONTENT_2_</strong>",
      },
      {
        label: "_A_TABS_TAB_3_",
        aloha: "<strong>_A_TABS_CONTENT_3_</strong>",
      },
    ];
    
    return {
      data,
    };
  },
};
```

## Key for tab titles

This example shows how to use **key-title** to define which data field will be used as the title for the tabs. Instead of the default title, you can use another key, such as **label**.

*props: `key-title`*

```html
<a-tabs
  :data="data"
  key-title="label"
></a-tabs>
```

```js
import { 
  ATabs,
} from "aloha-vue";
    
export default {
  name: "PageTabsKeyTitle",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
      },
    ];
    
    return {
      data,
    };
  },
};
```

## **HTML** in tab titles

This example shows how to use **is-title-html** to allow **HTML** content in tab titles. In addition, the **key-title** property is used to specify the key from which the **HTML** content for the tab titles is taken.

*props: `is-title-html`, `key-title`*

```html
<a-tabs
  :data="data"
  :is-title-html="true"
  key-title="label"
></a-tabs>
```

```js
import { 
  ATabs,
} from "aloha-vue";
    
export default {
  name: "PageTabsTitleHtml",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
      },
    ];
    
    return {
      data,
    };
  },
};
```

## Border for the active tab

This example shows how to use **is-boxed** to determine whether a border will be displayed around the active tab. The first example has the border enabled, and the second one has it disabled.

*props: `is-boxed`*

```html
<a-tabs
  :data="data"
  :is-boxed="true"
></a-tabs>
<a-tabs
  :data="data"
  :is-boxed="false"
  class="a_mt_3"
></a-tabs>
```

```js
import { 
  ATabs,
} from "aloha-vue";
    
export default {
  name: "PageTabsIsBoxed",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
      },
    ];
    
    return {
      data,
    };
  },
};
```

## Vertical tabs

This example shows how to use **is-vertical** to arrange the tabs vertically or horizontally. The first two examples demonstrate vertical tabs, while the third shows horizontal tabs.

*props: `is-vertical`*

```html
<a-tabs
  :data="data"
  :is-vertical="true"
></a-tabs>
<a-tabs
  :data="data"
  :is-boxed="true"
  :is-vertical="true"
  class="a_mt_3"
></a-tabs>
<a-tabs
  :data="data"
  :is-vertical="false"
  class="a_mt_3"
></a-tabs>
```

```js
import { 
  ATabs,
} from "aloha-vue";
    
export default {
  name: "PageTabsIsVertical",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
      },
    ];
    
    return {
      data,
    };
  },
};
```

## Unique identifier for tabs

This example shows how to use **key-id** to improve performance during tab rendering. Using a unique identifier for each tab allows faster determination of the active tab. If **key-id** is not specified, the tab index is used.

*props: `key-id`*

```html
<a-tabs
  :data="data"
  key-id="id"
></a-tabs>
```

```js
import { 
  ATabs,
} from "aloha-vue";
    
export default {
  name: "PageTabsKeyId",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
        id: "1",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
        id: "2",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
        id: "3",
      },
    ];
    
    return {
      data,
    };
  },
};
```

## Active tab on initialization

This example shows how to use **key-active** to set the active tab upon component initialization. If the **active** field in the tab data is set to **true**, that tab will be active during the initial render.

*props: `key-active`*

```html
<a-tabs
  :data="data"
  key-active="active"
></a-tabs>
```

```js
import { 
  ATabs,
} from "aloha-vue";
    
export default {
  name: "PageTabsKeyActive",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
        active: true,
      },
      {
        label: "_A_TABS_TAB_4_",
        content: "_A_TABS_CONTENT_4_",
      },
    ];
    
    return {
      data,
    };
  },
};
```

## Setting active tab by **ID** or index

This example demonstrates how to use **active-tab-id** to set the active tab upon rendering. The value of **active-tab-id** can be an **ID** if **key-id** is used, or the tab's index if **key-id** is not defined. The component automatically watches for changes in this property.

*props: `active-tab-id`*

```html
<a-tabs
  :data="data1"
  active-tab-id="3"
  key-id="id"
></a-tabs>
<a-tabs
  :active-tab-id="2"
  :data="data2"
  class="a_mt_3"
></a-tabs>
```

```js
import { 
  ATabs,
} from "aloha-vue";
    
export default {
  name: "PageTabsActiveTabId",
  components: {
    ATabs,
  },
  setup() {
    const data1 = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
        id: "1",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
        id: "2",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
        id: "3",
      },
      {
        label: "_A_TABS_TAB_4_",
        content: "_A_TABS_CONTENT_4_",
        id: "4",
      },
    ];
    
    const data2 = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
      },
      {
        label: "_A_TABS_TAB_4_",
        content: "_A_TABS_CONTENT_4_",
      },
    ];
    
    return {
      data1,
      data2,
    };
  },
};
```

## Tab changes only through event

This example shows how to use **is-change-outside**. When set to **true**, clicking on an inactive tab will not automatically activate it. Instead, the **change** event and the **active-tab-id** property must be used to change the active tab.

*props: `is-change-outside`, `active-tab-id`; emits: `change`*

```html
<a-tabs
  :data="data"
  :active-tab-id="activeTabId"
  :is-change-outside="true"
  key-id="id"
  @change="changeTab"
></a-tabs>
```

```js
import { 
  ATabs,
} from "aloha-vue";
    
export default {
  name: "PageTabsIsChangeOutside",
  components: {
    ATabs,
  },
  setup() {
    const activeTabId = ref("1");
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
        id: "1",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
        id: "2",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
        id: "3",
      },
      {
        label: "_A_TABS_TAB_4_",
        content: "_A_TABS_CONTENT_4_",
        id: "4",
      },
    ];

    const changeTab = ({ $event, tab, tabId, index }) => {
      console.log("$event, tab, tabId, index", $event, tab, tabId, index);
      activeTabId.value = tabId;
    };
    
    return {
      activeTabId,
      changeTab,
      data,
    };
  },
};
```

## Static slots for tabs and content

This example shows how to use static slots **tab** and **content** to customize the tab and content display. Slot arguments provide access to **activeTabId**, **contentId**, **index**, **isActive**, **parentId**, **tab**, **tabId**.

*props: `data`; slots: `tab`, `content`*

```html
<a-tabs
  :data="data"
  key-id="id"
>
  <template
    v-slot:tab="{ activeTabId, contentId, index, isActive, parentId, tab, tabId }"
  >
    <span>{{ index + 1 }}</span>
    <a-element
      :icon-left="tab.icon"
      class="a_ml_2"
      type="text"
    ></a-element>
    <a-translation
      :text="tab.name"
      class="a_ml_2"
      tag="span"
    ></a-translation>
  </template>
  
  <template
    v-slot:content="{ activeTabId, contentId, index, isActive, parentId, tab, tabId }"
  >
    <span>{{ tab.content }}</span>
  </template>
</a-tabs>
```

```js
import {
  AElement,
  ATabs,
  ATranslation,
} from "aloha-vue";
    
export default {
  name: "PageTabsStaticSlots",
  components: {
    AElement,
    ATabs,
    ATranslation,
  },
  setup() {
    const data = [
      {
        id: "1",
        name: "_A_TABS_TAB_1_",
        icon: "Gear",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        id: "2",
        name: "_A_TABS_TAB_2_",
        icon: "CodeSquare",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        id: "3",
        name: "_A_TABS_TAB_3_",
        icon: "EjectFill",
        content: "_A_TABS_CONTENT_3_",
      },
      {
        id: "4",
        name: "_A_TABS_TAB_4_",
        icon: "InputCursor",
        content: "_A_TABS_CONTENT_4_",
      },
    ];
    
    return {
      data,
    };
  },
};
```

## Dynamic slots for tabs and content

This example demonstrates how to use dynamic slots **slotTab** and **slotContent**, where the names are specified in the **data** array. If a name and the corresponding slot are provided, they will replace the default tab and content. Slot arguments provide access to **activeTabId**, **contentId**, **index**, **isActive**, **parentId**, **tab**, **tabId**.

*props: `data`; slots: `slotTab`, `slotContent`*

```html
<a-tabs
  :data="data"
  key-id="slotTab"
>
  <template
    v-slot:tab1="{ activeTabId, contentId, index, isActive, parentId, tab, tabId }"
  >
    <a-translation
      class="a_mr_2"
      tag="span"
      text="_A_TABS_TAB_"
    ></a-translation>
    <span>{{ index + 1 }}</span>
  </template>
  
  <template
    v-slot:tab2="{ activeTabId, contentId, index, isActive, parentId, tab, tabId }"
  >
    <a-translation
      class="a_mr_2"
      tag="span"
      text="_A_TABS_TAB_"
    ></a-translation>
    <span>{{ index + 1 }}</span>
  </template>
  
  <template
    v-slot:tab3="{ activeTabId, contentId, index, isActive, parentId, tab, tabId }"
  >
    <a-translation
      class="a_mr_2"
      tag="span"
      text="_A_TABS_TAB_"
    ></a-translation>
    <span>{{ index + 1 }}</span>
  </template>
  
  <template
    v-slot:content1="{ activeTabId, contentId, index, isActive, parentId, tab, tabId }"
  >
    <span>{{ tabId }}</span>
  </template>
  
  <template
    v-slot:content2="{ activeTabId, contentId, index, isActive, parentId, tab, tabId }"
  >
    <span>{{ tabId }}</span>
  </template>
  
  <template
    v-slot:content3="{ activeTabId, contentId, index, isActive, parentId, tab, tabId }"
  >
    <span>{{ tabId }}</span>
  </template>
</a-tabs>
```

```js
import { 
  ATabs,
} from "aloha-vue";
import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
    
export default {
  name: "PageTabsDynamicSlots",
  components: {
    ATabs,
    ATranslation,
  },
  setup() {
    const data = [
      {
        slotTab: "tab1",
        slotContent: "content1",
      },
      {
        slotTab: "tab2",
        slotContent: "content2",
      },
      {
        slotTab: "tab3",
        slotContent: "content3",
      },
    ];
    
    return {
      data,
    };
  },
};
```

## Example with settings and tab management

This example demonstrates how to use the **a-tabs** component with various settings, including the ability to add or remove tabs. The form allows changes to parameters such as disabling tabs, arranging them vertically or horizontally, toggling the border around active tabs, and using **HTML** for tab titles. Additionally, it implements dynamic tab addition and deletion.

```html
<a-form
  v-model="model"
  :data="dataForm"
>
  <template
    v-slot:deleteButton
  >
    <div>
      <a-element
        :disabled="!model.deleteTab"
        class="a_btn a_btn_primary"
        text="_A_GLOBAL_DELETE_"
        type="button"
        @click="deleteTab"
      ></a-element>
    </div>
  </template>
  
  <template
    v-slot:deleteButton
  >
    <div>
      <a-element
        :disabled="!model.addTab"
        class="a_btn a_btn_primary"
        text="_A_GLOBAL_ADD_"
        type="button"
        @click="deleteTab"
      ></a-element>
    </div>
  </template>
</a-form>
<a-tabs
  :data="data"
  :disabled="model.disabled"
  :is-boxed="model.isBoxed"
  :is-title-html="model.isTitleHtml"
  :is-vertical="model.isVertical"
  :title-placement="model.titlePlacement"
  key-content="label"
  key-title="label"
></a-tabs>
```

```js
import {
  computed,
  ref,
} from "vue";

import { 
  AElement,
  AForm,
  ATabs,
} from "aloha-vue";
    
export default {
  name: "PageTabsComplex",
  components: {
    AElement,
    AForm,
    ATabs,
  },
  setup() {
    const data = ref([
      {
        id: 1,
        label: "Lorem",
      },
      {
        id: 2,
        label: "ipsum",
      },
      {
        id: 3,
        label: "dolor",
      },
      {
        id: 4,
        label: "sit",
      },
      {
        id: 5,
        label: "amet",
      },
      {
        id: 6,
        label: "consectetur",
      },
      {
        id: 7,
        label: "adipisicing",
      },
      {
        id: 8,
        label: "elit",
      },
      {
        id: 9,
        label: "Maxime",
      },
      {
        id: 10,
        label: "mollitia",
      },
      {
        id: 11,
        label: "molestiae",
      },
      {
        id: 12,
        label: "quas",
      },
      {
        id: 13,
        label: "vel",
      },
      {
        id: 14,
        label: "sint",
      },
    ]);
    const model = ref({
      disabled: false,
      isBoxed: false,
      isTitleHtml: false,
      isVertical: false,
      titlePlacement: "top",
    });

    const dataForm = computed(() => {
      return [
        {
          id: "disabled",
          label: "_A_TABS_LABEL_DISABLED_",
          type: "switch",
          classColumn: "a_column a_column_6 a_column_12_touch",
        },
        {
          id: "isBoxed",
          label: "_A_TABS_LABEL_IS_BOXED_",
          type: "switch",
          classColumn: "a_column a_column_6 a_column_12_touch",
        },
        {
          id: "isTitleHtml",
          label: "_A_TABS_LABEL_IS_TITLE_HTML_",
          type: "switch",
          classColumn: "a_column a_column_6 a_column_12_touch",
        },
        {
          id: "isVertical",
          label: "_A_TABS_LABEL_IS_VERTICAL_",
          type: "switch",
          classColumn: "a_column a_column_6 a_column_12_touch",
        },
        {
          id: "titlePlacement",
          label: "_A_TABS_LABEL_TITLE_PLACEMENT_",
          type: "select",
          data: placements,
          isDataSimpleArray: true,
          deselectable: false,
          labelPosition: "top",
        },
        {
          id: "deleteTabs",
          label: "_A_TABS_LABEL_DELETE_TABS_",
          type: "fieldset",
          classColumn: "a_column a_column_6 a_column_12_touch",
          children: [
            {
              id: "deleteTab",
              label: "_A_TABS_TAB_",
              type: "select",
              data: data.value,
              labelPosition: "top",
              keyLabel: "label",
              keyId: "id",
              search: true,
            },
            {
              type: "template",
              slotName: "deleteButton",
            },
          ],
        },
        {
          id: "addTabs",
          label: "_A_TABS_LABEL_ADD_TABS_",
          type: "fieldset",
          classColumn: "a_column a_column_6 a_column_12_touch",
          children: [
            {
              id: "addTab",
              label: "_A_TABS_TAB_",
              type: "text",
              labelPosition: "top",
            },
            {
              type: "template",
              slotName: "addButton",
            },
          ],
        },
      ];
    });

    const deleteTab = () => {
      const TAB_INDEX = findIndex(data.value, ["id", model.value.deleteTab]);
      if (TAB_INDEX !== -1) {
        data.value.splice(TAB_INDEX, 1);
      }
      model.value.deleteTab = undefined;
    };

    const addTab = () => {
      const LAST_ID = data.value[data.value.length - 1]?.id || 0;
      data.value.push({
        label: model.value.addTab,
        id: LAST_ID + 1,
      });

      model.value.addTab = undefined;
    };
    
    return {
      addTab,
      data,
      dataForm,
      deleteTab,
      model,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| active-tab-id | String / Number |  |  | Defines the **ID** or index of the active tab. If **key-id** is not set, the tab index is used. The component tracks changes to this value to update the active tab. |
| data | Array |  | yes | The array of data describing the tabs. Each element in the array is an object with properties for the tab's title, content, and other settings. |
| disabled | Boolean |  |  | Disables tab interaction. If set to **true**, tabs cannot be switched. |
| id | String | () => uniqueId("a_tabs_") |  | Unique identifier for the component |
| is-boxed | Boolean |  |  | Determines whether the active tab will be surrounded by a border. If set to **true**, a border will be displayed. |
| is-change-outside | Boolean |  |  | If set to **true**, the tab will not change automatically when clicked. You must use the **change** event to update **active-tab-id**. |
| is-title-html | Boolean |  |  | Determines whether the tooltip should be interpreted as **HTML**. If set to **true**, the content of the tooltip will be displayed with **HTML** formatting. |
| is-vertical | Boolean |  |  | Specifies whether the tabs will be arranged vertically or horizontally. If set to **true**, tabs will be displayed vertically. |
| key-active | String | active |  | Defines the key used to activate a tab when initializing the component. If the field specified by **key-active** is set to **true**, the corresponding tab will be activated. |
| key-content | String | content |  | Allows specifying the key for the data that will be used as the content for each tab. |
| key-disabled | String |  |  | Key to disable individual tabs. If the tab's key value is **true**, the tab will be disabled. |
| key-id | String |  |  | Unique identifier for the tabs. If **key-id** is not specified, the tab index is used. |
| key-label | String | label |  | Key for specifying the field that will be used for the tab labels. |
| key-title | String | title |  | Allows specifying the key for the data that will be used for the tab titles. |
| title-placement | String | top |  | Specifies the position of the tooltip relative to the element. Various positions are supported, such as **top**, **bottom**, **left**, **right**, and others. This property only works if **isTitleHtml** is set to **true**. |

## Slots

| name | description |
| --- | --- |
| content | Static slot for customizing the tab's content display. Slot arguments include: **activeTabId**, **contentId**, **index**, **isActive**, **parentId**, **tab**, **tabId**. |
| slotContent | Dynamic slot for customizing the tab's content display. The slot name is specified in the **data** array for each tab. Slot arguments include: **activeTabId**, **contentId**, **index**, **isActive**, **parentId**, **tab**, **tabId**. |
| slotTab | Dynamic slot for customizing the tab's display. The slot name is specified in the **data** array for each tab. Slot arguments include: **activeTabId**, **contentId**, **index**, **isActive**, **parentId**, **tab**, **tabId**. |
| tab | Static slot for customizing the tab's display. Slot arguments include: **activeTabId**, **contentId**, **index**, **isActive**, **parentId**, **tab**, **tabId**. |

## Events

| name | type | description |
| --- | --- | --- |
| change | Function | The event triggered when a tab is clicked. Returns an object with the following arguments: **$event** — event information, **tab** — tab data, **tabId** — unique identifier for the tab or its index, **index** — the tab's index in the data array. |

## CSS variables (`scss/components/ATabs.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_tabs_display` |  | Display of the root element. Vertical tabs use flex. |
| `--a_tabs_padding` |  | Padding of the root element. |
| `--a_tabs_font_size` |  | Font size of the tab list. Changed by the size classes (small, medium, large). |
| `--a_tabs_border_width` |  | Width of the line under the tab list and of the content border. |
| `--a_tabs_border_color` |  | Color of the line under the tab list and of the content border. |
| `--a_tabs_border_radius` |  | Top corner radius of a tab (left corners in vertical tabs). |
| `--a_tabs_contents_border_radius` |  | Corner radius of the content box. |
| `--a_tabs_content_padding` |  | Padding of the content of a tab. |
| `--a_tabs_link_border_width` |  | Border width of a tab. |
| `--a_tabs_link_border_color` |  | Border color of a tab. |
| `--a_tabs_link_color` |  | Text color of an inactive tab. |
| `--a_tabs_link_font_weight` |  | Font weight of an inactive tab. |
| `--a_tabs_link_bg` |  | Background of an inactive tab. |
| `--a_tabs_link_padding_x` |  | Horizontal padding of a tab. Changed by the size classes. |
| `--a_tabs_link_padding_y` |  | Vertical padding of a tab. Changed by the size classes. |
| `--a_tabs_link_cursor` |  | Cursor over a tab. |
| `--a_tabs_link_color_active` |  | Text color of the active tab. |
| `--a_tabs_link_active_font_weight` |  | Font weight of the active tab. |
| `--a_tabs_indicator_width` |  | Thickness of the indicator line. |
| `--a_tabs_indicator_inset` |  | Distance of the indicator from the tab edges. |
| `--a_tabs_indicator_color` |  | Indicator color of an inactive tab. |
| `--a_tabs_indicator_hover_color` |  | Indicator color of a hovered tab. |
| `--a_tabs_indicator_active_color` |  | Indicator color of the active tab. |
| `--a_tabs_link_hover_color` |  | Text color of a hovered tab. |
| `--a_tabs_link_hover_bg` |  | Background of a hovered tab. |
| `--a_tabs_boxed_link_active_border_color` |  | Border color of the active tab in boxed tabs (top, right, bottom, left). The bottom side has the tab background, so the tab joins the content. |
| `--a_tabs_boxed_link_active_bg` |  | Background of the active tab in boxed tabs. |
| `--a_tabs_boxed_link_active_color` |  | Text color of the active tab in boxed tabs. |
| `--a_tabs_boxed_link_bg_hover` |  | Background of a hovered tab in boxed tabs. |
| `--a_tabs_link_disabled_cursor` |  | Cursor over a disabled tab. |
| `--a_tabs_link_disabled_border_color` |  | Border color of a disabled tab. |
| `--a_tabs_link_disabled_color` |  | Text color of a disabled tab. |
| `--a_tabs_link_disabled_bg` |  | Background of a disabled tab. |
