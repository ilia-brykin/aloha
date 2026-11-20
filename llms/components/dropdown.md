# ADropdown (Dropdown)

The ADropdown component is a dropdown component for Vue.js that allows you to display a list of actions in a dropdown menu. This documentation provides information on how to use the component and describes the available props.

## Basic usage

*props: `actions`*

```html
<a-dropdown
  :actions="dropdownActions"
></a-dropdown>
```

```js
import { 
  ADropdown,
} from "aloha-vue";
    
export default {
  name: "PageDropdownBasic",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "_A_DROPDOWN_ACTION_0_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_1_",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};
```

## Customizable Button Text

This documentation describes the **button-text** prop, which allows you to customize the text of the dropdown button.

*props: `button-text`*

```html
<a-dropdown
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_NUMBER_"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :button-text="{ desktop: '_A_DROPDOWN_BUTTON_TEXT_DESKTOP_', mobile: '_A_DROPDOWN_BUTTON_TEXT_MOBILE_' }"
></a-dropdown>
```

```js
import { 
  ADropdown,
} from "aloha-vue";
    
export default {
  name: "PageDropdownButtonText",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "_A_DROPDOWN_ACTION_0_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_1_",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};
```

## Customizable Button Class

The class of the dropdown button can be customized using the **button-class** prop.

*props: `button-text`*

```html
<a-dropdown
  :actions="dropdownActions"
  button-class="a_btn a_btn_primary"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-class="a_btn a_btn_success"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-class="a_btn a_btn_info"
></a-dropdown>
```

```js
import { 
  ADropdown,
} from "aloha-vue";
    
export default {
  name: "PageDropdownButtonClass",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "_A_DROPDOWN_ACTION_0_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_1_",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};
```

## Customizable Button Icons

Icons before and after the text of the dropdown button can be customized using the props **button-icon-left** and **button-icon-right**.

*props: `button-icon-left`, `button-icon-right`*

```html
<a-dropdown
  :actions="dropdownActions"
  button-icon-left="Gear"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-icon-right="Files"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-icon-left="Duplicate"
  button-icon-right="Gear"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :button-icon-right="{ desktop: 'Gear', mobile: 'Files' }"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
></a-dropdown>
```

```js
import { 
  ADropdown,
} from "aloha-vue";
    
export default {
  name: "PageDropdownButtonIcons",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "_A_DROPDOWN_ACTION_0_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_1_",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};
```

## Dropdown Button Loading State

The loading state of the dropdown button can be customized using the props **button-loading** and **button-loading-align**.

*props: `button-loading`, `button-loading-align`*

```html
<a-dropdown
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
  :button-loading="true"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
  :button-loading="true"
  button-loading-align="left"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
  :button-loading="true"
  button-loading-align="right"
></a-dropdown>
```

```js
import { 
  ADropdown,
} from "aloha-vue";
    
export default {
  name: "PageDropdownButtonLoading",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "_A_DROPDOWN_ACTION_0_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_1_",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};
```

## Nested action groups

You can group dropdown actions by one or more fields using the **key-group** prop. Like in **ASelect**, pass a string for one level or an array for nested grouping.

*props: `actions, key-group`*

```html
<a-dropdown
  :actions="dropdownActions"
  :key-group="['group', 'section', 'subsection']"
  button-text="_A_DROPDOWN_BUTTON_TEXT_GROUPED_ACTIONS_"
></a-dropdown>
```

```js
import {
  ADropdown,
} from "aloha-vue";

export default {
  name: "PageDropdownGroup",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "_A_DROPDOWN_ACTION_OVERVIEW_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_RECENT_ACTIVITY_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_CREATE_INVOICE_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_BUSINESS_",
        section: "_A_DROPDOWN_GROUP_FINANCE_",
        subsection: "_A_DROPDOWN_GROUP_INVOICES_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_EXPENSE_REPORT_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_BUSINESS_",
        section: "_A_DROPDOWN_GROUP_FINANCE_",
        subsection: "_A_DROPDOWN_GROUP_REPORTS_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_EMAIL_CAMPAIGN_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_BUSINESS_",
        section: "_A_DROPDOWN_GROUP_MARKETING_",
        subsection: "_A_DROPDOWN_GROUP_CAMPAIGNS_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_INBOX_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_COMMUNICATION_",
        section: "_A_DROPDOWN_GROUP_EMAIL_",
        subsection: "_A_DROPDOWN_GROUP_MESSAGES_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_MEETING_NOTES_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_COMMUNICATION_",
        section: "_A_DROPDOWN_GROUP_MEETINGS_",
        subsection: "_A_DROPDOWN_GROUP_NOTES_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_FRONTEND_BOARD_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_DEVELOPMENT_",
        section: "_A_DROPDOWN_GROUP_PROJECTS_",
        subsection: "_A_DROPDOWN_GROUP_FRONTEND_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_BACKEND_BOARD_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_DEVELOPMENT_",
        section: "_A_DROPDOWN_GROUP_PROJECTS_",
        subsection: "_A_DROPDOWN_GROUP_BACKEND_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_DEPLOYMENTS_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_DEVELOPMENT_",
        section: "_A_DROPDOWN_GROUP_RELEASE_",
        subsection: "_A_DROPDOWN_GROUP_PRODUCTION_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_USERS_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_SETTINGS_",
        section: "_A_DROPDOWN_GROUP_ACCESS_",
        subsection: "_A_DROPDOWN_GROUP_TEAM_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_API_TOKENS_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_SETTINGS_",
        section: "_A_DROPDOWN_GROUP_ACCESS_",
        subsection: "_A_DROPDOWN_GROUP_SECURITY_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_APPEARANCE_",
        type: "button",
        group: "_A_DROPDOWN_GROUP_SETTINGS_",
        section: "_A_DROPDOWN_GROUP_WORKSPACE_",
        subsection: "_A_DROPDOWN_GROUP_THEME_",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};
```

## Hide empty groups

Groups that do not contain visible actions are not rendered. This is useful when actions are hidden dynamically using the **isHidden** flag.

*props: `actions, key-group`*

```html
<a-one-checkbox
  v-model="isDevelopmentVisible"
  :is-width-auto="true"
  label="_A_DROPDOWN_BUTTON_TEXT_TOGGLE_DEVELOPMENT_"
></a-one-checkbox>

<a-one-checkbox
  v-model="isSettingsVisible"
  :is-width-auto="true"
  label="_A_DROPDOWN_BUTTON_TEXT_TOGGLE_SETTINGS_"
></a-one-checkbox>

<a-dropdown
  :actions="dropdownActions"
  :key-group="['group', 'section']"
  button-text="_A_DROPDOWN_BUTTON_TEXT_HIDE_EMPTY_GROUPS_"
></a-dropdown>
```

```js
import {
  computed,
  ref,
} from "vue";

import {
  ADropdown,
} from "aloha-vue";
import AOneCheckbox from "../../../../../../src/ui/AOneCheckbox/AOneCheckbox";

export default {
  name: "PageDropdownGroupHideEmpty",
  components: {
    ADropdown,
    AOneCheckbox,
  },
  setup() {
    const isDevelopmentVisible = ref(true);
    const isSettingsVisible = ref(true);

    const dropdownActions = computed(() => {
      return [
        {
          text: "_A_DROPDOWN_ACTION_INVOICES_",
          type: "button",
          group: "_A_DROPDOWN_GROUP_BUSINESS_",
          section: "_A_DROPDOWN_GROUP_FINANCE_",
          callback: () => {},
        },
        {
          text: "_A_DROPDOWN_ACTION_MESSAGES_",
          type: "button",
          group: "_A_DROPDOWN_GROUP_COMMUNICATION_",
          section: "_A_DROPDOWN_GROUP_INBOX_",
          callback: () => {},
        },
        {
          text: "_A_DROPDOWN_ACTION_FRONTEND_BOARD_",
          type: "button",
          group: "_A_DROPDOWN_GROUP_DEVELOPMENT_",
          section: "_A_DROPDOWN_GROUP_PROJECTS_",
          callback: () => {},
          isHidden: !isDevelopmentVisible.value,
        },
        {
          text: "_A_DROPDOWN_ACTION_DEPLOYMENTS_",
          type: "button",
          group: "_A_DROPDOWN_GROUP_DEVELOPMENT_",
          section: "_A_DROPDOWN_GROUP_RELEASE_",
          callback: () => {},
          isHidden: !isDevelopmentVisible.value,
        },
        {
          text: "_A_DROPDOWN_ACTION_USERS_",
          type: "button",
          group: "_A_DROPDOWN_GROUP_SETTINGS_",
          section: "_A_DROPDOWN_GROUP_ACCESS_",
          callback: () => {},
          isHidden: !isSettingsVisible.value,
        },
        {
          text: "_A_DROPDOWN_ACTION_SECURITY_",
          type: "button",
          group: "_A_DROPDOWN_GROUP_SETTINGS_",
          section: "_A_DROPDOWN_GROUP_WORKSPACE_",
          callback: () => {},
          isHidden: !isSettingsVisible.value,
        },
      ];
    });

    return {
      dropdownActions,
      isDevelopmentVisible,
      isSettingsVisible,
    };
  },
};
```

## Custom group sorting

Use **sort-order-group** to control the order of group headings and **key-group-label-callback** to customize group labels.

*props: `key-group, key-group-label-callback, sort-order-group`*

```html
<a-dropdown
  :actions="dropdownActions"
  :key-group-label-callback="groupLabelCallback"
  button-text="_A_DROPDOWN_BUTTON_TEXT_ASC_GROUPS_"
  key-group="priority"
  sort-order-group="asc"
></a-dropdown>

<a-dropdown
  :actions="dropdownActions"
  :key-group-label-callback="groupLabelCallback"
  button-text="_A_DROPDOWN_BUTTON_TEXT_DESC_GROUPS_"
  class="a_ml_4"
  key-group="priority"
  sort-order-group="desc"
></a-dropdown>
```

```js
import {
  ADropdown,
} from "aloha-vue";

export default {
  name: "PageDropdownGroupSort",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "_A_DROPDOWN_ACTION_DEPLOY_NOW_",
        type: "button",
        priority: "_A_DROPDOWN_GROUP_PRIORITY_MEDIUM_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_RESTART_WORKER_",
        type: "button",
        priority: "_A_DROPDOWN_GROUP_PRIORITY_CRITICAL_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_ARCHIVE_REPORT_",
        type: "button",
        priority: "_A_DROPDOWN_GROUP_PRIORITY_LOW_",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_SYNC_CONTACTS_",
        type: "button",
        priority: "_A_DROPDOWN_GROUP_PRIORITY_NORMAL_",
        callback: () => {},
      },
    ];

    const groupLabelCallback = ({ group }) => {
      const labels = {
        _A_DROPDOWN_GROUP_PRIORITY_CRITICAL_: "_A_DROPDOWN_GROUP_LABEL_PRIORITY_CRITICAL_",
        _A_DROPDOWN_GROUP_PRIORITY_LOW_: "_A_DROPDOWN_GROUP_LABEL_PRIORITY_LOW_",
        _A_DROPDOWN_GROUP_PRIORITY_MEDIUM_: "_A_DROPDOWN_GROUP_LABEL_PRIORITY_MEDIUM_",
        _A_DROPDOWN_GROUP_PRIORITY_NORMAL_: "_A_DROPDOWN_GROUP_LABEL_PRIORITY_NORMAL_",
      };

      return labels[group] || group;
    };

    return {
      dropdownActions,
      groupLabelCallback,
    };
  },
};
```

## Dropdown Content in Body or Directly After Dropdown Button

The **in-body** prop controls whether the dropdown content should be rendered in the body or directly after the dropdown button.

*props: `in-body`*

```html
<a-dropdown
  :actions="dropdownActions"
  :in-body="true"
  button-text="_A_DROPDOWN_BUTTON_TEXT_IN_BODY_TRUE_"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :in-body="false"
  button-text="_A_DROPDOWN_BUTTON_TEXT_IN_BODY_FALSE_"
></a-dropdown>
```

```js
import { 
  ADropdown,
} from "aloha-vue";
    
export default {
  name: "PageDropdownInBody",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "_A_DROPDOWN_ACTION_0_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_1_",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};
```

## Close When Trigger Leaves Viewport

Open a dropdown and scroll the container so its button leaves the visible area. With **is-close-by-button-invisible-in-viewport** set to **true**, the dropdown closes automatically; with **false**, it stays open.

*props: `is-close-by-button-invisible-in-viewport`*

```html
<div
  style="max-height: 14rem; overflow: auto; padding: 1rem;"
>
  <div style="height: 26rem;">
    <p>
      <a-translation
        tag="span"
        text="_A_DROPDOWN_SCROLL_HELP_"
      ></a-translation>
    </p>

    <div style="margin-top: 6rem;">
      <a-dropdown
        :actions="dropdownActions"
        :is-close-by-button-invisible-in-viewport="true"
        button-text="_A_DROPDOWN_BUTTON_TEXT_CLOSE_ON_INVISIBLE_TRUE_"
      ></a-dropdown>
    </div>

    <div style="margin-top: 6rem;">
      <a-dropdown
        :actions="dropdownActions"
        :is-close-by-button-invisible-in-viewport="false"
        button-text="_A_DROPDOWN_BUTTON_TEXT_CLOSE_ON_INVISIBLE_FALSE_"
      ></a-dropdown>
    </div>
  </div>
</div>
```

```js
import {
  ADropdown,
  ATranslation,
} from "aloha-vue";

export default {
  name: "PageDropdownCloseByButtonInvisibleInViewport",
  components: {
    ADropdown,
    ATranslation,
  },
  setup() {
    const dropdownActions = [
      {
        text: "_A_DROPDOWN_ACTION_0_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_1_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_2_",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};
```

## Customizable Dropdown Triggers

The ADropdown component for Vue.js provides the ability to customize the triggers for the dropdown. This documentation describes the **triggers** prop, which defines the array of triggers.

*props: `triggers`*

```html
<a-dropdown
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_"
  :triggers="['click']"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_TRIGGER_FOCUS_"
  :triggers="['focus']"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_TRIGGER_HOVER_"
  :triggers="['hover']"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_FOCUS_"
  :triggers="['click', 'focus']"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_HOVER_"
  :triggers="['click', 'hover']"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_TRIGGER_FOCUS_HOVER_"
  :triggers="['focus', 'hover']"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_FOCUS_HOVER_"
  :triggers="['click', 'focus', 'hover']"
></a-dropdown>
```

```js
import { 
  ADropdown,
} from "aloha-vue";
    
export default {
  name: "PageDropdownTriggers",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "_A_DROPDOWN_ACTION_0_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_1_",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};
```

## Customizable Caret Icon

The dropdown's caret icon can be customized.

*props: `caret-icon`*

```html
<a-dropdown
  :actions="dropdownActions"
  caret-icon="EjectFill"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  caret-icon="Gear"
></a-dropdown>
```

```js
import { 
  ADropdown,
} from "aloha-vue";
    
export default {
  name: "PageDropdownCaretIcon",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "_A_DROPDOWN_ACTION_0_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_1_",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};
```

## Customizable Caret Icon Display

The ADropdown component for Vue.js allows you to customize the display of the caret icon. This documentation describes the **has-caret** prop, which controls whether the caret icon is displayed or not.

*props: `has-caret`*

```html
<a-dropdown
  :actions="dropdownActions"
  :has-caret="true"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :has-caret="false"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
></a-dropdown>
```

```js
import { 
  ADropdown,
} from "aloha-vue";
    
export default {
  name: "PageDropdownHasCaret",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "_A_DROPDOWN_ACTION_0_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_1_",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};
```

## Readonly Dropdown Button

This documentation describes the **readonly** prop, which makes the dropdown button non-interactive.

*props: `has-caret`*

```html
<a-dropdown
  :actions="dropdownActions"
  :readonly="true"
  button-text="_A_DROPDOWN_BUTTON_TEXT_READONLY_TRUE_"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :readonly="false"
  button-text="_A_DROPDOWN_BUTTON_TEXT_READONLY_FALSE_"
></a-dropdown>
```

```js
import { 
  ADropdown,
} from "aloha-vue";
    
export default {
  name: "PageDropdownHasCaret",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "_A_DROPDOWN_ACTION_0_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_1_",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| actions | Array | () => [] |  | A list of actions to choose from. |
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| button-attributes | Object | () => ({}) |  | Additional attributes for customizing the dropdown button. The attributes are passed as an object containing the names of the desired attributes and their corresponding values. |
| button-class | String / Object | a_btn a_btn_secondary |  | Specifies an additional class for the dropdown button. |
| button-icon-attributes | Object | () => ({}) |  | Additional attributes for the dropdown button icon. The attributes are passed as an object containing the names of the desired attributes and their corresponding values. |
| button-icon-class | String |  |  | Specifies an additional class for the dropdown button icon. |
| button-icon-left | String / Object |  |  | Defines the icon on the left side of the dropdown button. The icon name is passed as a string, or different icons for different devices can be defined as an object. |
| button-icon-right | String / Object |  |  | Defines the icon on the right side of the dropdown button. The icon name is passed as a string, or different icons for different devices can be defined as an object. |
| button-icon-tag | String |  |  | Specifies a custom HTML tag for the dropdown button icon. |
| button-is-title-html | Boolean |  |  | Determines whether the tooltip displayed on mouse hover over the link will be in plain text or HTML format. |
| button-loading | Boolean | false |  | Displays a loading indicator on the dropdown button. |
| button-loading-align | String | right |  | CSS positioning of the loading indicator on the dropdown button. |
| button-loading-class | String / Object | a_spinner_small |  | CSS class for the dropdown button loading indicator. |
| button-prevent | Boolean |  |  | Determines whether the default behavior of event handlers for the dropdown button will be prevented. |
| button-stop | Boolean |  |  | Specifies whether further event propagation for the dropdown button will be stopped. |
| button-tag | String | button |  | Specifies the HTML tag to be used for the dropdown button. |
| button-text | String / Number / Object / Array |  |  | A string or object containing the dropdown button text for different devices. The keys 'mobile' and 'desktop' are used to define the appropriate text for each device. |
| button-text-aria-hidden | Boolean | false |  | Determines whether the dropdown button text will be hidden from screen readers. |
| button-text-class | String |  |  | CSS class for the dropdown button text. |
| button-text-screen-reader | String / Number / Object / Array |  |  | Dropdown button text for screen readers. |
| button-title | String / Number / Object / Array |  |  | One or more additional pieces of information that will be displayed when hovering over the dropdown button. |
| button-title-placement | String | top |  | The position relative to the dropdown button where the tooltip will be displayed. It only works if is-title-html is set to true. |
| caret-icon | String | ChevronDown |  | Caret icon next to the dropdown button. The default is a downward arrow. |
| class | String / Object |  |  | Additional CSS class for the dropdown menu. |
| disabled | Boolean |  |  | Indicator of a disabled state. |
| dropdown-attributes | Object | () => ({}) |  | Additional dropdown attributes that are not defined as props. |
| dropdown-class | String |  |  | Additional CSS class for the dropdown menu. |
| dropdown-render-default | Boolean |  |  | Determines whether the dropdown menu will initially be open. The default value is false. |
| dropdown-tag | String | ul |  | Specifies the HTML tag to be used for dropdown menu elements. The default value is ul. |
| elements-for-arrows | String | a[href]:not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), area[href]:not([tabindex='-1']), input:not([disabled]):not([tabindex='-1']), select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), iframe:not([tabindex='-1']), [tabindex]:not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1']) |  | Defines the elements that can be navigated with the arrows within the drop-down menu. |
| extra | Object |  |  | Additional values used for insertion into translations. |
| key-group | String / Number / Array |  |  | A field name or an array of field names used to group actions. Arrays create nested groups. |
| key-group-label-callback | Function |  |  | Callback for customizing the displayed label of a group. |
| floating-flip | Object | () => ({}) |  | Configuration for the flip function. It optimizes the visibility of the dropdown menu by changing its position along the x-axis to keep it in view when the preferred position is out of bounds. |
| floating-shift | Object | () => ({ use: true, crossAxis: true, padding: 20 }) |  | Configuration for the shift function. It optimizes the visibility of the dropdown menu by changing its position along the y-axis to keep it in view when the preferred position is out of bounds. |
| has-caret | Boolean | true |  | Determines whether there is an icon next to the dropdown button. The default value is true. |
| id | String | () => uniqueId("a_dropdown_btn_") |  | Specifies a unique ID for the HTML element corresponding to the dropdown menu. |
| in-body | Boolean | false |  | Determines whether the content of the dropdown menu is generated in the body or immediately after the dropdown button. |
| is-close-by-click-inside | Boolean | true |  | Determines whether the component will close when the user clicks inside it. |
| is-close-by-click-outside | Boolean | true |  | Determines whether the component will close when the user clicks outside it. |
| is-close-by-button-invisible-in-viewport | Boolean | true |  | Determines whether the dropdown closes automatically when its trigger button leaves the visible viewport of the scrollable area. |
| is-hide-without-action-and-slot | Boolean | true |  | Determines whether the dropdown menu will exist at all if there are no selectable options or defined slots. |
| is-list-width-same-with-button | Boolean |  |  | Determines whether the width of the dropdown button is the same as the width of the selection list. |
| lock-arrows-navigation | Boolean | true |  | Determines whether arrow key navigation within the dropdown menu is allowed. |
| lock-tab-navigation | Boolean | true |  | Determines whether Tab key navigation within the dropdown menu is allowed. |
| menu-width | Number |  |  | Sets a fixed width for the dropdown menu in pixels. |
| persist | Boolean | true |  | Determines whether the dropdown menu will remain open after the user interacts with other elements until explicitly closed. |
| placement | String | bottom-start |  | The position at which the dropdown menu will open. |
| popper-container-id | String | a_tooltip_container |  | ID of the container element that holds the dropdown menu options. |
| readonly | Boolean | false |  | Determines whether the dropdown button is in a readonly state without hover or focus effects. |
| sort-order-group | String |  |  | Controls sorting of group labels. Possible values: **asc** and **desc**. |
| triggers | Array | () => ["click"] |  | A list of events that trigger the opening or closing of the dropdown menu. |
| use-escape | Boolean | true |  | Determines whether the Esc key can be used to close the dropdown menu. |
| use-rem | Boolean | true |  | Determines whether the **menu-width** value should be scaled according to the root font size before being applied. |

## CSS variables (`scss/utils/dropdown.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_dropdown_min_width` |  | Minimum width of the menu. |
| `--a_dropdown_max_height` |  | Maximum height of the menu. Longer menus scroll. |
| `--a_dropdown_padding_x` |  | Horizontal padding inside the menu. |
| `--a_dropdown_padding_y` |  | Vertical padding inside the menu. |
| `--a_dropdown_group_indent` |  | Indent of nested groups. Deeper levels use multiples of it. |
| `--a_dropdown_font_size` |  | Font size of the menu. |
| `--a_dropdown_color` |  | Text color of the menu. |
| `--a_dropdown_bg` |  | Background of the menu. |
| `--a_dropdown_border_color` |  | Border color of the menu. |
| `--a_dropdown_border_radius` |  | Corner radius of the menu. |
| `--a_dropdown_border_width` |  | Border width of the menu. |
| `--a_dropdown_box_shadow` |  | Shadow of the menu. |
| `--a_dropdown_divider_color` |  | Color of a divider between items. |
| `--a_dropdown_divider_margin_y` |  | Space above and below a divider. |
| `--a_dropdown_link_color` |  | Text color of an item. |
| `--a_dropdown_link_hover_color` |  | Text color of a hovered item. |
| `--a_dropdown_link_hover_bg` |  | Background of a hovered item. |
| `--a_dropdown_link_active_color` |  | Text color of the active (selected or pressed) item. |
| `--a_dropdown_link_active_bg` |  | Background of the active (selected or pressed) item. |
| `--a_dropdown_link_disabled_color` |  | Text color of a disabled item. |
| `--a_dropdown_item_padding_x` |  | Horizontal padding of an item. |
| `--a_dropdown_item_padding_y` |  | Vertical padding of an item. |
| `--a_dropdown_item_border_radius` |  | Corner radius of an item. |
| `--a_dropdown_header_color` |  | Text color of a header or group label. |
| `--a_dropdown_header_padding_x` |  | Horizontal padding of a header or group label. |
| `--a_dropdown_header_padding_y` |  | Vertical padding of a header or group label. |
