# AGroupButtonDropdown (Grouped buttons and links)

This component allows you to flexibly configure a group of buttons and links.

## Basic usage

This example shows three buttons without additional configuration.

*props: `actions`*

```html
<a-group-button-dropdown
  :actions="actions"
></a-group-button-dropdown>
```

```js
import { 
  AGroupButtonDropdown,
} from "aloha-vue";
    
export default {
  name: "PageGroupButtonDropdownBasic",
  components: {
    AGroupButtonDropdown,
  },
  setup() {
    const actions = [
      {
        text: "Action 1",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 2",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 3",
        type: "button",
        callback: () => {},
      },
    ];
    
     return {
      actions,
    };
  },
};
```

## Different renderings

The actions can be displayed in different ways: as a simple row, as a dropdown, or as a combination of buttons and a dropdown.

*props: `index-first-dropdown-action`, `index-first-dropdown-action-mobile`, `actions.classButton`*

```html
<a-group-button-dropdown
  :actions="actions"
  :index-first-dropdown-action="-1"
  :index-first-dropdown-action-mobile="-1"
></a-group-button-dropdown>
<a-group-button-dropdown
  class="a_mt_3"
  :actions="actions"
  :index-first-dropdown-action="0"
  :index-first-dropdown-action-mobile="0"
></a-group-button-dropdown>
<a-group-button-dropdown
  class="a_mt_3"
  :actions="actions"
  :index-first-dropdown-action="1"
  :index-first-dropdown-action-mobile="1"
></a-group-button-dropdown>
<a-group-button-dropdown
  class="a_mt_3"
  :actions="actions"
  :index-first-dropdown-action="2"
  :index-first-dropdown-action-mobile="2"
></a-group-button-dropdown>
<a-group-button-dropdown
  class="a_mt_3"
  :actions="actions"
  :index-first-dropdown-action="3"
  :index-first-dropdown-action-mobile="3"
></a-group-button-dropdown>
```

```js
import { 
  AGroupButtonDropdown,
} from "aloha-vue";
    
export default {
  name: "PageGroupButtonDropdownIndexFirstDropdownAction",
  components: {
    AGroupButtonDropdown,
  },
  setup() {
    const actions = [
      {
        text: "Action 1",
        type: "button",
        classButton: "a_btn a_btn_primary",
        callback: () => {},
      },
      {
        text: "Action 2",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 3",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 4",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 5",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 6",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
    ];
    
     return {
      actions,
    };
  },
};
```

## One or two buttons

The component is rendered differently depending on the number of actions.

*props: `index-first-dropdown-action`, `index-first-dropdown-action-mobile`, `actions.classButton`*

```html
<a-group-button-dropdown
  :actions="actions1"
  :index-first-dropdown-action="1"
  :index-first-dropdown-action-mobile="1"
></a-group-button-dropdown>
<a-group-button-dropdown
  class="a_mt_3"
  :actions="actions2"
  :index-first-dropdown-action="1"
  :index-first-dropdown-action-mobile="1"
></a-group-button-dropdown>
<a-group-button-dropdown
  class="a_mt_3"
  :actions="actions3"
  :index-first-dropdown-action="1"
  :index-first-dropdown-action-mobile="1"
></a-group-button-dropdown>
<a-group-button-dropdown
  class="a_mt_3"
  :actions="actions6"
  :index-first-dropdown-action="1"
  :index-first-dropdown-action-mobile="1"
></a-group-button-dropdown>
```

```js
import { 
  AGroupButtonDropdown,
} from "aloha-vue";
    
export default {
  name: "PageGroupButtonDropdownIndexFirstDropdownActionOne",
  components: {
    AGroupButtonDropdown,
  },
  setup() {
    const actions1 = [
      {
        text: "Action 1",
        type: "button",
        classButton: "a_btn a_btn_primary",
        callback: () => {},
      },
    ];

    const actions2 = [
      {
        text: "Action 1",
        type: "button",
        classButton: "a_btn a_btn_primary",
        callback: () => {},
      },
      {
        text: "Action 2",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
    ];

    const actions3 = [
      {
        text: "Action 1",
        type: "button",
        classButton: "a_btn a_btn_primary",
        callback: () => {},
      },
      {
        text: "Action 2",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 3",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
    ];

    const actions6 = [
      {
        text: "Action 1",
        type: "button",
        classButton: "a_btn a_btn_primary",
        callback: () => {},
      },
      {
        text: "Action 2",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 3",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 4",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 5",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 6",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
    ];
    
     return {
      actions1,
      actions2,
      actions3,
      actions6,
    };
  },
};
```

## Spacing between button and dropdown

The dropdown can be displayed with or without spacing from the buttons.

*props: `has-divider-before-dropdown`*

```html
<a-group-button-dropdown
  :actions="actions"
  :index-first-dropdown-action="1"
  :index-first-dropdown-action-mobile="1"
  :has-divider-before-dropdown="true"
></a-group-button-dropdown>
<a-group-button-dropdown
  class="a_mt_3"
  :actions="actions"
  :index-first-dropdown-action="1"
  :index-first-dropdown-action-mobile="1"
  :has-divider-before-dropdown="false"
></a-group-button-dropdown>
```

```js
import { 
  AGroupButtonDropdown,
} from "aloha-vue";
    
export default {
  name: "PageGroupButtonDropdownHasDividerBeforeDropdown",
  components: {
    AGroupButtonDropdown,
  },
  setup() {
    const actions = [
      {
        text: "Action 1",
        type: "button",
        classButton: "a_btn a_btn_primary",
        callback: () => {},
      },
      {
        text: "Action 2",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 3",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 4",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 5",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 6",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
    ];
    
     return {
      actions,
    };
  },
};
```

## Button classes

You can assign button classes in a specific order. For example, the first button can always be **primary**, the second always **secondary**, and so on.

*props: `actions-classes`*

```html
<a-group-button-dropdown
  :actions="actions"
  :index-first-dropdown-action="6"
  :index-first-dropdown-action-mobile="6"
  :actions-classes="['a_btn a_btn_primary', 'a_btn a_btn_secondary', 'a_btn a_btn_info', 'a_btn a_btn_info', 'a_btn a_btn_info', 'a_btn a_btn_info']"
></a-group-button-dropdown>
<a-group-button-dropdown
  class="a_mt_3"
  :actions="actions"
  :index-first-dropdown-action="3"
  :index-first-dropdown-action-mobile="3"
  :actions-classes="['a_btn a_btn_primary', 'a_btn a_btn_secondary', 'a_btn a_btn_secondary', 'a_btn a_btn_primary']"
></a-group-button-dropdown>
```

```js
import { 
  AGroupButtonDropdown,
} from "aloha-vue";
    
export default {
  name: "PageGroupButtonDropdownActionsClasses",
  components: {
    AGroupButtonDropdown,
  },
  setup() {
    const actions = [
      {
        text: "Action 1",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 2",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 3",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 4",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 5",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 6",
        type: "button",
        callback: () => {},
      },
    ];
    
     return {
      actions,
    };
  },
};
```

## Disabled

All buttons and the dropdown can be disabled.

*props: `disabled`*

```html
<a-group-button-dropdown
  :actions="actions"
  :index-first-dropdown-action="2"
  :index-first-dropdown-action-mobile="2"
  :disabled="true"
></a-group-button-dropdown>
<a-group-button-dropdown
  class="a_mt_3"
  :actions="actions"
  :index-first-dropdown-action="1"
  :index-first-dropdown-action-mobile="1"
  :disabled="true"
></a-group-button-dropdown>
```

```js
import { 
  AGroupButtonDropdown,
} from "aloha-vue";
    
export default {
  name: "PageGroupButtonDropdownDisabled",
  components: {
    AGroupButtonDropdown,
  },
  setup() {
    const actions = [
      {
        text: "Action 1",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 2",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 3",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 4",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 5",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 6",
        type: "button",
        callback: () => {},
      },
    ];
    
     return {
      actions,
    };
  },
};
```

## Dropdown button configuration

The dropdown button can be configured. All props of **ADropdown** can be used inside the **dropdown-attributes** object.

*props: `dropdown-attributes`*

```html
<a-group-button-dropdown
  :actions="actions"
  :index-first-dropdown-action="2"
  :index-first-dropdown-action-mobile="2"
  :dropdown-attributes="{ buttonText: '_A_GROUP_BUTTON_DROPDOWN_OTHER_ACTIONS_', buttonClass: 'a_btn a_btn_primary' }"
></a-group-button-dropdown>
<a-group-button-dropdown
  class="a_mt_3"
  :actions="actions"
  :index-first-dropdown-action="1"
  :index-first-dropdown-action-mobile="1"
  :dropdown-attributes="{ buttonText: '_A_GROUP_BUTTON_DROPDOWN_OTHER_ACTIONS_', buttonIconLeft: 'Gear' }"
></a-group-button-dropdown>
```

```js
import { 
  AGroupButtonDropdown,
} from "aloha-vue";
    
export default {
  name: "PageGroupButtonDropdownDropdownAttributes",
  components: {
    AGroupButtonDropdown,
  },
  setup() {
    const actions = [
      {
        text: "Action 1",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 2",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 3",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 4",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 5",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 6",
        type: "button",
        callback: () => {},
      },
    ];
    
     return {
      actions,
    };
  },
};
```

## Extra classes for actions

Each action can define its own additional CSS class via the **classExtra** field.

*props: `actions.classExtra`*

```html
<a-group-button-dropdown
  :actions="actions"
  :index-first-dropdown-action="2"
  :index-first-dropdown-action-mobile="2"
></a-group-button-dropdown>
```

```js
import { 
  AGroupButtonDropdown,
} from "aloha-vue";
    
export default {
  name: "PageGroupButtonDropdownActionsClasses",
  components: {
    AGroupButtonDropdown,
  },
  setup() {
    const actions = [
      {
        text: "Action 1",
        type: "button",
        callback: () => {},
        classExtra: "test_action1",
      },
      {
        text: "Action 2",
        type: "button",
        callback: () => {},
        classExtra: "test_action2",
      },
      {
        text: "Action 3",
        type: "button",
        callback: () => {},
        classExtra: "test_action3",
      },
      {
        text: "Action 4",
        type: "button",
        callback: () => {},
        classExtra: "test_action4",
      },
      {
        text: "Action 5",
        type: "button",
        callback: () => {},
        classExtra: "test_action5",
      },
      {
        text: "Action 6",
        type: "button",
        callback: () => {},
        classExtra: "test_action6",
      },
    ];
    
     return {
      actions,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| actions | Array | () => [] |  | A list of actions. `type`: `button`, `link`, `divider`, `header`, `template`. `type: "header"` starts a group with a heading. |
| actions-classes | Array | () => ["a_btn a_btn_primary", "a_btn a_btn_secondary"] |  | An array of CSS classes applied to inline actions by position. |
| actions-ids | Array | () => [] |  | An array of IDs assigned to actions by position when the action itself does not define an `id`. |
| btn-group-class | String / Array / Object | a_btn_group |  | CSS classes for the wrapper that groups inline buttons and links. |
| disabled | Boolean |  |  | Indicator of a disabled state. |
| dropdown-attributes | Object | () => ({}) |  | Additional dropdown attributes that are not defined as props. |
| has-divider-before-dropdown | Boolean | true |  | Determines whether spacing is added before the dropdown part when both inline actions and dropdown actions are rendered. |
| index-first-dropdown-action | Number | 1 |  | The index of the first action that should be moved into the dropdown on desktop. A value of `-1` disables dropdown grouping. |
| index-first-dropdown-action-mobile | Number | 0 |  | The index of the first action that should be moved into the dropdown on mobile. A value of `-1` disables dropdown grouping. |
| inner-flag-has-actions | Boolean |  |  | Internal flag updated via `v-model:inner-flag-has-actions` to indicate whether the component has visible actions after filtering. |
| min-dropdown-actions | Number | 2 |  | Minimum number of actions required to render the dropdown part. If there are fewer actions, they remain inline. |

## Events

| name | type | description |
| --- | --- | --- |
| update:innerFlagHasActions | Function | Emitted when the internal visibility flag for actions changes after filtering. |
