# ASelectStyle (Style Selection)

Component for selecting styles from a predefined set of styles

## Basic usage

*props: `model-value`, `type`*

```html
<a-select-style
  v-model="model1"
  label="Select"
  type="select"
></a-select-style>
<div>model1: {{ model1 }}</div>
<a-select-style
  v-model="model2"
  class="a_mt_3"
  label="Multiselect"
  type="multiselect"
></a-select-style>
<div>model2: {{ model2 }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ASelectStyle,
} from "aloha-vue";
    
export default {
  name: "PageSelectStyleBasic",
  components: {
    ASelectStyle,
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

## Label position

**label-position** sets where the label is shown: `"float"` – inside the empty field, it moves to the border on focus or with a value; `"inset"` – always inside the field, small above the value; `"top"` – above the field. The default for all form elements is set with **AFormPlugin** (`labelPosition`). **is-label-float** still works, but is deprecated.

*props: `label-position`*

```html
<a-select-style
  v-model="model"
  label="label-position: float"
  label-position="float"
  type="select"
></a-select-style>
<a-select-style
  v-model="model"
  label="label-position: inset"
  label-position="inset"
  type="select"
></a-select-style>
<a-select-style
  v-model="model"
  label="label-position: top"
  label-position="top"
  type="select"
></a-select-style>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  ASelectStyle,
} from "aloha-vue";

export default {
  name: "PageSelectStyleLabelPosition",
  components: {
    ASelectStyle,
  },
  setup() {
    const model = ref(undefined);

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
<a-select-style
  :change="changeModel1"
  :model-value="model1"
  label="Select 1"
></a-select-style>
<div>model1: {{ model1 }}</div>
<a-select-style
  :change="changeModel2"
  :model-value="model2"
  class="a_mt_3"
  label="Select 2"
  type="multiselect"
></a-select-style>
<div>model1: {{ model1 }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ASelectStyle,
} from "aloha-vue";
    
export default {
  name: "PageSelectStyleChange",
  components: {
    ASelectStyle,
  },
  setup() {
    const model1 = ref(undefined);
    const model2 = ref(undefined);

    const changeModel1 = ({ model: _model, id, props, item, currentModel }) => {
      model1.value = _model;
      console.log(id, props, item, currentModel);
    };
    const changeModel2 = ({ model: _model, id, props, item, currentModel }) => {
      model2.value = _model;
      console.log(id, props, item, currentModel);
    };
    
    return {
      changeModel1,
      changeModel2,
      model1,
      model2,
    };
  },
};
```

## Help text

This example shows how to use **help-text** to add a help text below the input field. The help text provides additional information to the user about the expected data in this field.

*props: `help-text`*

```html
<a-select-style
  v-model="model"
  help-text="Aloha"
  label="Select"
></a-select-style>
```

```js
import {
  ref,
} from "vue";

import { 
  ASelectStyle,
} from "aloha-vue";
    
export default {
  name: "PageSelectStyleHelpText",
  components: {
    ASelectStyle,
  },
  setup() {
    const model = ref(undefined);
    
    return {
      model,
    };
  },
};
```

## Error display

This example shows how to use **errors** to display error messages below the input field. Error messages help the user understand which data was entered incorrectly and how to correct it.

*props: `errors`*

```html
<a-select-style
  v-model="model"
  errors="Aloha"
  label="Select"
></a-select-style>
```

```js
import {
  ref,
} from "vue";

import { 
  ASelectIcon,
} from "aloha-vue";
    
export default {
  name: "PageSelectStyleErrors",
  components: {
    ASelectIcon,
  },
  setup() {
    const model = ref(undefined);
    
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
<a-select-style
  v-model="model"
  label-position="top"
  label="Select"
  label-description="Aloha"
  type="select"
></a-select-style>
```

```js
import {
  ref,
} from "vue";

import { 
  ASelectStyle,
} from "aloha-vue";
    
export default {
  name: "PageSelectStyleLabelDescription",
  components: {
    ASelectStyle,
  },
  setup() {
    const model = ref(undefined);

    return {
      model,
    };
  },
};
```

## Group Filtering

Group filtering allows displaying only specific style groups

*props: `filter-groups`*

```html
<a-select-style
  v-model="model1"
  :filter-groups="['display', 'color']"
  label="Select"
  type="select"
></a-select-style>
<div>model1: {{ model1 }}</div>
<a-select-style
  v-model="model2"
  :filter-groups="{ flex: ['align_items', 'justify_content'], background_color: true}"
  class="a_mt_3"
  label="Multiselect"
  type="multiselect"
></a-select-style>
<div>model2: {{ model2 }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ASelectStyle,
} from "aloha-vue";
    
export default {
  name: "PageSelectStyleFilterGroups",
  components: {
    ASelectStyle,
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

## Extended Data

Extended data allows adding additional styles to the component

*props: `data-extended`*

```html
<a-select-style
  v-model="model1"
  :data-extended="dataExtended"
  :filter-groups="['display', 'color']"
  label="Select"
  type="select"
></a-select-style>
<div>model1: {{ model1 }}</div>
```

```js
import {
  ref,
} from "vue";

import { 
  ASelectStyle,
} from "aloha-vue";
    
export default {
  name: "PageSelectStyleDataExtended",
  components: {
    ASelectStyle,
  },
  setup() {
    const dataExtended = [
      {
        label: "_A_SELECT_STYLES_VALUE_BG_ALOHA_",
        value: "a_bg_aloha",
        group: "background_color",
        groupName: "_A_SELECT_STYLES_GROUP_BACKGROUND_COLOR_",
      },
    ];
    const model1 = ref(undefined);

    return {
      dataExtended,
      model1,
    };
  },
};
```

## **Readonly** display mode

In this example, the component is used in **readonly** mode, where the value is displayed as text and cannot be modified by the user.

*props: `readonly`, `readonly-default`*

```html
<a-select-style
  :model-value="model1"
  :readonly="true"
  label="Select 1"
  type="select"
></a-select-style>
<a-select-style
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="Select 2"
  type="multiselect"
></a-select-style>
<a-select-style
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Select 3"
  type="select"
></a-select-style>
<a-select-style
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Select 4"
  type="multiselect"
></a-select-style>
<a-select-style
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  help-text="Aloha"
  label="Select 5"
  readonly-default="-"
  type="select"
></a-select-style>
```

```js
import {
  ref,
} from "vue";

import { 
  ASelectStyle,
} from "aloha-vue";
    
export default {
  name: "PageSelectStyleReadonly",
  components: {
    ASelectStyle,
  },
  setup() {
    const model1 = ref("a_color_primary");
    const model2 = ref(["a_d_flex", "a_bg_secondary"]);
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
| button-class | String |  |  | Additional CSS class of the button that opens the list. |
| button-class-default | String / Object | a_form_control a_select_toggle |  | Default CSS classes of the button that opens the list. Replace them to change the look completely. |
| caret-icon | String / Object | ChevronDown |  | Icon next to the button that opens the list. The default is a downward arrow. |
| change | Function | () => {} |  | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| class | String / Object |  |  | CSS class or class object of the outer container of the component. |
| count-multiselect | Number | 4 |  | Multiselect: how many selected items are shown in the button. The others are summarized as "+N more". |
| data | Array |  |  | An array of data used to generate the items. |
| data-extended | Array | () => [] |  | Array of objects with additional styles for the component |
| dependencies | Array / Object |  |  | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| deselectable | Boolean | true |  | Select: the selected item can be deselected by clicking it again. |
| disabled | Boolean |  |  | Determines whether the component is disabled. If set to **true**, the component becomes inactive and the user cannot interact with it. |
| errors | String / Array |  |  | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| exceeded-items-deletable | Boolean | true |  | Multiselect: shows a button that removes the selected items beyond count-multiselect. |
| exclude-render-attributes | Array | () => [] |  | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final **DOM**. |
| extra | Object |  |  | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like **"_WELCOME_{{foo}}_{{bar}}_"**, which is translated as **"Welcome {{ foo }}: {{ bar }}"**, you can pass an object like **{ foo: "abc", bar: "123" }**, and the result will be the translation **"Welcome abc: 123"**. |
| filter-groups | Array / Object |  |  | Array or object for filtering style groups |
| has-caret | Boolean | true |  | Shows the icon next to the button that opens the list. |
| help-text | String |  |  | Help text displayed below the component. Provides the user with additional information or instruction. |
| html-id | String |  |  | Sets the **HTML ID** of the element. Can be used to uniquely identify the component on the page. |
| id | String / Number | () => uniqueId("a_select_styles_") |  | The identifier of the component, which can be used to track or refer to the component in the code. |
| id-prefix | String |  |  | Prefix for the component's **ID**. Used to create a unique identifier based on the specified prefix. |
| in-body | Boolean | true |  | The list is rendered in the container popper-container-id at the end of the body, otherwise directly after the button. |
| is-close-by-click | Boolean |  |  | Closes the list after an item is chosen. By default: yes for select, no for multiselect. |
| is-deselect-all | Boolean | false |  | Display the button. Clicking it will deselect all items in the list. |
| is-hide | Boolean |  |  | Determines whether the component should be hidden. If set to **true**, the component is not displayed on the page. |
| is-label-float | Boolean |  |  | Determines whether the label of the component should be positioned above the field. If **true**, the label will move above the text field when focused or when content is present. Deprecated, use label-position. |
| is-render | Boolean | true |  | Indicates whether the component should be rendered. If set to **false**, the component will not be created in the **DOM**. |
| is-select-all | Boolean | false |  | Display the button. Clicking it will automatically select all items from the list. |
| is-selection-closeable | Boolean | true |  | Multiselect: all selected items are shown in the button. If false, only the count is shown when there are more than count-multiselect. |
| key-disabled | String |  |  | Specifies the key in the data object that determines whether the item will be disabled (unselectable). |
| key-disabled-callback | Function |  |  | A function to determine whether an item should be disabled. Returns `true` to disable a specific item. Accepts an object with item data: `{ item }`. |
| key-group | String / Number / Array | () => ["groupName", "subGroupName"] |  | A key or array of keys used to group data by specific categories. This property allows grouping items into groups. |
| key-group-label-callback | Function |  |  | A callback function that takes two arguments **({ group, item })** and returns the group name. It is used to dynamically determine group names based on the provided data. |
| key-id | String | value |  | The key in the data object that will be used as the identifier for each item. |
| key-label | String | label |  | The key in the data object that specifies the label text for each item. |
| key-label-callback | Function |  |  | A callback function used to generate the label text based on the item data. This allows dynamically creating labels based on complex logic. |
| key-title-callback | Function | ({ item }) => getTranslatedText({         placeholder: item.label,       }) |  | A callback function used to generate the title based on the item data. This allows dynamically creating titles based on complex logic. |
| label | String / Number |  |  | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| label-class | String / Object |  |  | **CSS** class(es) applied to the label. Allows customizing the label's style. |
| label-description | String |  |  | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| label-position | "float" / "inset" / "top" | "float" |  | Position of the label: "float", "inset" or "top". The default comes from the component plugin or AFormPlugin (labelPosition). |
| label-screen-reader | String / Number |  |  | Label intended for screen readers. Useful for improving accessibility. |
| max-count-multiselect | Number |  |  | Multiselect: maximum number of items that can be selected. |
| menu-width-type | String | as_button |  | Width of the list: "as_button" (as wide as the button) or "by_content" (as wide as its content). |
| model-dependencies | Object | () => ({}) |  | Determines model dependencies that may affect the visibility or behavior of the component. |
| model-value | String / Array |  |  | The current model value associated with the component. Used to manage the data displayed in the component. |
| options | Object | () => ({}) |  | Additional data object available within the component, in slots, or custom logic. |
| placeholder | String |  |  | Specifies the placeholder text that will be displayed in the input field until the user enters data. The placeholder helps the user understand what data is expected in the field. |
| placement | String | bottom-end |  | Position of the list relative to the button. |
| popper-container-id | String | a_select_container |  | ID of the container at the end of the body in which the list is rendered (with in-body). |
| readonly | Boolean |  |  | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| readonly-default | String |  |  | The default text that is shown if the value is missing in read-only mode. |
| required | Boolean |  |  | Indicates whether the component is required. If set to **true**, the component requires user input. |
| search | Boolean |  |  | Determines whether the search feature is supported. If set to **true**, users will be able to search within the group. |
| search-timeout | Number | 0 |  | Specifies the delay time in milliseconds before performing the search. Useful for preventing excessive requests during fast text input by the user. |
| select-menu-class | String / Object |  |  | Additional CSS class of the list. |
| slot-name | String |  |  | The name of the main slot used to insert custom content into the component. |
| sort-order | String | asc |  | Specifies the sort order of items. Possible values: **asc** (ascending) or **desc** (descending). |
| sort-order-group | String | asc |  | Specifies the sort order of groups if the items are grouped. Possible values: **asc** (ascending) or **desc** (descending). |
| text-deselect-all | String | _A_SELECT_DESELECT_ALL_ |  | Text of the “Deselect all” button. |
| text-select-all | String | _A_SELECT_SELECT_ALL_ |  | Text of the “Select all” button. |
| type | String | select |  | Component type: **select**, **selectStyle**, **multiselect**, **multiselectStyle** |

## Events

| name | type | description |
| --- | --- | --- |
| update:model-value | Function | Event triggered when the component's model value is updated. Used to synchronize data between the component and the parent component. |
| focus | Function | Event triggered when the component gains focus. Useful for tracking user interaction with the element. |
| blur | Function | Event triggered when the component loses focus. Used to validate or save data when the user leaves the field. |
| open | Function | Emitted when the list is opened. |

## Translations

| key | en |
| --- | --- |
| `_A_SELECT_STYLES_GROUP_DISPLAY_` | Display `display` |
| `_A_SELECT_STYLES_SUB_GROUP_MOBILE_` | Mobile `mobile` |
| `_A_SELECT_STYLES_SUB_GROUP_TABLET_` | Tablet `tablet` |
| `_A_SELECT_STYLES_SUB_GROUP_TOUCH_` | Touch `touch` |
| `_A_SELECT_STYLES_SUB_GROUP_DESKTOP_` | Desktop `desktop` |
| `_A_SELECT_STYLES_SUB_GROUP_WIDESCREEN_` | Widescreen `widescreen` |
| `_A_SELECT_STYLES_SUB_GROUP_FULLHD_` | Full HD `fullhd` |
| `_A_SELECT_STYLES_SUB_GROUP_LARGE_` | Large `large` |
| `_A_SELECT_STYLES_GROUP_FLEX_` | Flex `flex` |
| `_A_SELECT_STYLES_SUB_GROUP_FLEX_DIRECTION_` | Flex direction `flex-direction` |
| `_A_SELECT_STYLES_SUB_GROUP_JUSTIFY_CONTENT_` | Justify content `justify-content` |
| `_A_SELECT_STYLES_SUB_GROUP_ALIGN_ITEMS_` | Align items `align-items` |
| `_A_SELECT_STYLES_SUB_GROUP_ALIGN_SELF_` | Align self `align-self` |
| `_A_SELECT_STYLES_SUB_GROUP_JUSTIFY_SELF_` | Justify self `justify-self` |
| `_A_SELECT_STYLES_SUB_GROUP_FLEX_WRAP_` | Flex wrap `flex-wrap` |
| `_A_SELECT_STYLES_SUB_GROUP_ALIGN_CONTENT_` | Align content `align-content` |
| `_A_SELECT_STYLES_GROUP_TEXT_ALIGN_` | Text align `text-align` |
| `_A_SELECT_STYLES_GROUP_TEXT_WRAPPING_` | Text wrap `text-wrap` |
| `_A_SELECT_STYLES_GROUP_LINE_LIMITING_` | Line limiting `line-limiting` |
| `_A_SELECT_STYLES_GROUP_TEXT_TRANSFORM_` | Text transform `text-transform` |
| `_A_SELECT_STYLES_GROUP_FONT_WEIGHT_` | Font weight `font-weight` |
| `_A_SELECT_STYLES_GROUP_LINE_HEIGHT_` | Line height `line-height` |
| `_A_SELECT_STYLES_GROUP_FONT_SIZE_` | Font size `font-size` |
| `_A_SELECT_STYLES_GROUP_MARGIN_` | Margin `margin` |
| `_A_SELECT_STYLES_GROUP_PADDING_` | Padding `padding` |
| `_A_SELECT_STYLES_GROUP_COLOR_` | Color `color` |
| `_A_SELECT_STYLES_GROUP_BACKGROUND_COLOR_` | Background color `background-color` |
| `_A_SELECT_STYLES_VALUE_D_INLINE_` | Inline |
| `_A_SELECT_STYLES_VALUE_D_INLINE_BLOCK_` | Inline block |
| `_A_SELECT_STYLES_VALUE_D_BLOCK_` | Block |
| `_A_SELECT_STYLES_VALUE_D_FLEX_` | Flex |
| `_A_SELECT_STYLES_VALUE_D_INLINE_FLEX_` | Inline flex |
| `_A_SELECT_STYLES_VALUE_D_NONE_` | None |
| `_A_SELECT_STYLES_VALUE_FLEX_ROW_` | Row |
| `_A_SELECT_STYLES_VALUE_FLEX_COLUMN_` | Column |
| `_A_SELECT_STYLES_VALUE_FLEX_ROW_REVERSE_` | Row (reverse) |
| `_A_SELECT_STYLES_VALUE_FLEX_COLUMN_REVERSE_` | Column (reverse) |
| `_A_SELECT_STYLES_VALUE_JUSTIFY_CONTENT_START_` | Start |
| `_A_SELECT_STYLES_VALUE_JUSTIFY_CONTENT_END_` | End |
| `_A_SELECT_STYLES_VALUE_JUSTIFY_CONTENT_CENTER_` | Center |
| `_A_SELECT_STYLES_VALUE_JUSTIFY_CONTENT_BETWEEN_` | Between |
| `_A_SELECT_STYLES_VALUE_JUSTIFY_CONTENT_AROUND_` | Around |
| `_A_SELECT_STYLES_VALUE_JUSTIFY_CONTENT_EVENLY_` | Evenly |
| `_A_SELECT_STYLES_VALUE_ALIGN_ITEMS_START_` | Start |
| `_A_SELECT_STYLES_VALUE_ALIGN_ITEMS_END_` | End |
| `_A_SELECT_STYLES_VALUE_ALIGN_ITEMS_CENTER_` | Center |
| `_A_SELECT_STYLES_VALUE_ALIGN_ITEMS_BASELINE_` | Baseline |
| `_A_SELECT_STYLES_VALUE_ALIGN_ITEMS_STRETCH_` | Stretch |
| `_A_SELECT_STYLES_VALUE_ALIGN_SELF_AUTO_` | Auto |
| `_A_SELECT_STYLES_VALUE_ALIGN_SELF_START_` | Start |
| `_A_SELECT_STYLES_VALUE_ALIGN_SELF_END_` | End |
| `_A_SELECT_STYLES_VALUE_ALIGN_SELF_CENTER_` | Center |
| `_A_SELECT_STYLES_VALUE_ALIGN_SELF_BASELINE_` | Baseline |
| `_A_SELECT_STYLES_VALUE_ALIGN_SELF_STRETCH_` | Stretch |
| `_A_SELECT_STYLES_VALUE_JUSTIFY_SELF_AUTO_` | Auto |
| `_A_SELECT_STYLES_VALUE_JUSTIFY_SELF_START_` | Start |
| `_A_SELECT_STYLES_VALUE_JUSTIFY_SELF_END_` | End |
| `_A_SELECT_STYLES_VALUE_JUSTIFY_SELF_CENTER_` | Center |
| `_A_SELECT_STYLES_VALUE_JUSTIFY_SELF_BASELINE_` | Baseline |
| `_A_SELECT_STYLES_VALUE_JUSTIFY_SELF_STRETCH_` | Stretch |
| `_A_SELECT_STYLES_VALUE_FLEX_WRAP_` | Wrap |
| `_A_SELECT_STYLES_VALUE_FLEX_NOWRAP_` | No wrap |
| `_A_SELECT_STYLES_VALUE_FLEX_WRAP_REVERSE_` | Wrap (reverse) |
| `_A_SELECT_STYLES_VALUE_ALIGN_CONTENT_START_` | Start |
| `_A_SELECT_STYLES_VALUE_ALIGN_CONTENT_END_` | End |
| `_A_SELECT_STYLES_VALUE_ALIGN_CONTENT_CENTER_` | Center |
| `_A_SELECT_STYLES_VALUE_ALIGN_CONTENT_BETWEEN_` | Between |
| `_A_SELECT_STYLES_VALUE_ALIGN_CONTENT_AROUND_` | Around |
| `_A_SELECT_STYLES_VALUE_ALIGN_CONTENT_STRETCH_` | Stretch |
| `_A_SELECT_STYLES_VALUE_TEXT_LEFT_` | Left |
| `_A_SELECT_STYLES_VALUE_TEXT_CENTER_` | Center |
| `_A_SELECT_STYLES_VALUE_TEXT_RIGHT_` | Right |
| `_A_SELECT_STYLES_VALUE_TEXT_JUSTIFY_` | Justify |
| `_A_SELECT_STYLES_VALUE_TEXT_WRAP_` | Wrap |
| `_A_SELECT_STYLES_VALUE_TEXT_NOWRAP_` | No wrap |
| `_A_SELECT_STYLES_VALUE_TEXT_BREAK_` | Break words |
| `_A_SELECT_STYLES_VALUE_TEXT_WRAP_HYPHENS_` | Wrap with hyphens |
| `_A_SELECT_STYLES_VALUE_TEXT_TRUNCATE_` | Truncate |
| `_A_SELECT_STYLES_VALUE_TEXT_CLAMP_` | Limit to 1 line |
| `_A_SELECT_STYLES_VALUE_TEXT_CLAMP_2_` | Limit to 2 lines |
| `_A_SELECT_STYLES_VALUE_TEXT_CLAMP_3_` | Limit to 3 lines |
| `_A_SELECT_STYLES_VALUE_TEXT_CLAMP_4_` | Limit to 4 lines |
| `_A_SELECT_STYLES_VALUE_TEXT_CLAMP_5_` | Limit to 5 lines |
| `_A_SELECT_STYLES_VALUE_TEXT_LOWERCASE_` | Lowercase |
| `_A_SELECT_STYLES_VALUE_TEXT_UPPERCASE_` | Uppercase |
| `_A_SELECT_STYLES_VALUE_TEXT_CAPITALIZE_` | Capitalize |
| `_A_SELECT_STYLES_VALUE_TEXT_UNDERLINE_` | Underline |
| `_A_SELECT_STYLES_VALUE_TEXT_LINE_THROUGH_` | Line through |
| `_A_SELECT_STYLES_VALUE_TEXT_DECORATION_NONE_` | No decoration |
| `_A_SELECT_STYLES_VALUE_TEXT_BOLD_` | Bold |
| `_A_SELECT_STYLES_VALUE_TEXT_BOLDER_` | Bolder |
| `_A_SELECT_STYLES_VALUE_TEXT_SEMIBOLD_` | Semibold |
| `_A_SELECT_STYLES_VALUE_TEXT_LIGHT_` | Light |
| `_A_SELECT_STYLES_VALUE_TEXT_LIGHTER_` | Lighter |
| `_A_SELECT_STYLES_VALUE_TEXT_ITALIC_` | Italic |
| `_A_SELECT_STYLES_VALUE_TEXT_NORMAL_` | Normal |
| `_A_SELECT_STYLES_VALUE_LINE_HEIGHT_1_` | Line height 1 |
| `_A_SELECT_STYLES_VALUE_LINE_HEIGHT_SMALL_` | Small line height |
| `_A_SELECT_STYLES_VALUE_LINE_HEIGHT_BASE_` | Base line height |
| `_A_SELECT_STYLES_VALUE_LINE_HEIGHT_LARGE_` | Large line height |
| `_A_SELECT_STYLES_VALUE_FS_1_` | Font size 1 |
| `_A_SELECT_STYLES_VALUE_FS_2_` | Font size 2 |
| `_A_SELECT_STYLES_VALUE_FS_3_` | Font size 3 |
| `_A_SELECT_STYLES_VALUE_FS_4_` | Font size 4 |
| `_A_SELECT_STYLES_VALUE_FS_5_` | Font size 5 |
| `_A_SELECT_STYLES_VALUE_FS_6_` | Font size 6 |
| `_A_SELECT_STYLES_VALUE_FS_7_` | Font size 7 |
| `_A_SELECT_STYLES_VALUE_P_1_` | Padding 1 |
| `_A_SELECT_STYLES_VALUE_PT_1_` | Padding top 1 |
| `_A_SELECT_STYLES_VALUE_PR_1_` | Padding right 1 |
| `_A_SELECT_STYLES_VALUE_PB_1_` | Padding bottom 1 |
| `_A_SELECT_STYLES_VALUE_PL_1_` | Padding left 1 |
| `_A_SELECT_STYLES_VALUE_PX_1_` | Padding horizontal 1 |
| `_A_SELECT_STYLES_VALUE_PY_1_` | Padding vertical 1 |
| `_A_SELECT_STYLES_VALUE_P_2_` | Padding 2 |
| `_A_SELECT_STYLES_VALUE_PT_2_` | Padding top 2 |
| `_A_SELECT_STYLES_VALUE_PR_2_` | Padding right 2 |
| `_A_SELECT_STYLES_VALUE_PB_2_` | Padding bottom 2 |
| `_A_SELECT_STYLES_VALUE_PL_2_` | Padding left 2 |
| `_A_SELECT_STYLES_VALUE_PX_2_` | Padding horizontal 2 |
| `_A_SELECT_STYLES_VALUE_PY_2_` | Padding vertical 2 |
| `_A_SELECT_STYLES_VALUE_P_3_` | Padding 3 |
| `_A_SELECT_STYLES_VALUE_PT_3_` | Padding top 3 |
| `_A_SELECT_STYLES_VALUE_PR_3_` | Padding right 3 |
| `_A_SELECT_STYLES_VALUE_PB_3_` | Padding bottom 3 |
| `_A_SELECT_STYLES_VALUE_PL_3_` | Padding left 3 |
| `_A_SELECT_STYLES_VALUE_PX_3_` | Padding horizontal 3 |
| `_A_SELECT_STYLES_VALUE_PY_3_` | Padding vertical 3 |
| `_A_SELECT_STYLES_VALUE_P_4_` | Padding 4 |
| `_A_SELECT_STYLES_VALUE_PT_4_` | Padding top 4 |
| `_A_SELECT_STYLES_VALUE_PR_4_` | Padding right 4 |
| `_A_SELECT_STYLES_VALUE_PB_4_` | Padding bottom 4 |
| `_A_SELECT_STYLES_VALUE_PL_4_` | Padding left 4 |
| `_A_SELECT_STYLES_VALUE_PX_4_` | Padding horizontal 4 |
| `_A_SELECT_STYLES_VALUE_PY_4_` | Padding vertical 4 |
| `_A_SELECT_STYLES_VALUE_P_5_` | Padding 5 |
| `_A_SELECT_STYLES_VALUE_PT_5_` | Padding top 5 |
| `_A_SELECT_STYLES_VALUE_PR_5_` | Padding right 5 |
| `_A_SELECT_STYLES_VALUE_PB_5_` | Padding bottom 5 |
| `_A_SELECT_STYLES_VALUE_PL_5_` | Padding left 5 |
| `_A_SELECT_STYLES_VALUE_PX_5_` | Padding horizontal 5 |
| `_A_SELECT_STYLES_VALUE_PY_5_` | Padding vertical 5 |
| `_A_SELECT_STYLES_VALUE_P_6_` | Padding 6 |
| `_A_SELECT_STYLES_VALUE_PT_6_` | Padding top 6 |
| `_A_SELECT_STYLES_VALUE_PR_6_` | Padding right 6 |
| `_A_SELECT_STYLES_VALUE_PB_6_` | Padding bottom 6 |
| `_A_SELECT_STYLES_VALUE_PL_6_` | Padding left 6 |
| `_A_SELECT_STYLES_VALUE_PX_6_` | Padding horizontal 6 |
| `_A_SELECT_STYLES_VALUE_PY_6_` | Padding vertical 6 |
| `_A_SELECT_STYLES_VALUE_P_AUTO_` | Padding auto |
| `_A_SELECT_STYLES_VALUE_PT_AUTO_` | Padding top auto |
| `_A_SELECT_STYLES_VALUE_PR_AUTO_` | Padding right auto |
| `_A_SELECT_STYLES_VALUE_PB_AUTO_` | Padding bottom auto |
| `_A_SELECT_STYLES_VALUE_PL_AUTO_` | Padding left auto |
| `_A_SELECT_STYLES_VALUE_PX_AUTO_` | Padding horizontal auto |
| `_A_SELECT_STYLES_VALUE_PY_AUTO_` | Padding vertical auto |
| `_A_SELECT_STYLES_VALUE_P_0_` | Padding 0 |
| `_A_SELECT_STYLES_VALUE_PT_0_` | Padding top 0 |
| `_A_SELECT_STYLES_VALUE_PR_0_` | Padding right 0 |
| `_A_SELECT_STYLES_VALUE_PB_0_` | Padding bottom 0 |
| `_A_SELECT_STYLES_VALUE_PL_0_` | Padding left 0 |
| `_A_SELECT_STYLES_VALUE_PX_0_` | Padding horizontal 0 |
| `_A_SELECT_STYLES_VALUE_PY_0_` | Padding vertical 0 |
| `_A_SELECT_STYLES_VALUE_M_1_` | Margin 1 |
| `_A_SELECT_STYLES_VALUE_MT_1_` | Margin top 1 |
| `_A_SELECT_STYLES_VALUE_MR_1_` | Margin right 1 |
| `_A_SELECT_STYLES_VALUE_MB_1_` | Margin bottom 1 |
| `_A_SELECT_STYLES_VALUE_ML_1_` | Margin left 1 |
| `_A_SELECT_STYLES_VALUE_MX_1_` | Margin horizontal 1 |
| `_A_SELECT_STYLES_VALUE_MY_1_` | Margin vertical 1 |
| `_A_SELECT_STYLES_VALUE_M_2_` | Margin 2 |
| `_A_SELECT_STYLES_VALUE_MT_2_` | Margin top 2 |
| `_A_SELECT_STYLES_VALUE_MR_2_` | Margin right 2 |
| `_A_SELECT_STYLES_VALUE_MB_2_` | Margin bottom 2 |
| `_A_SELECT_STYLES_VALUE_ML_2_` | Margin left 2 |
| `_A_SELECT_STYLES_VALUE_MX_2_` | Margin horizontal 2 |
| `_A_SELECT_STYLES_VALUE_MY_2_` | Margin vertical 2 |
| `_A_SELECT_STYLES_VALUE_M_3_` | Margin 3 |
| `_A_SELECT_STYLES_VALUE_MT_3_` | Margin top 3 |
| `_A_SELECT_STYLES_VALUE_MR_3_` | Margin right 3 |
| `_A_SELECT_STYLES_VALUE_MB_3_` | Margin bottom 3 |
| `_A_SELECT_STYLES_VALUE_ML_3_` | Margin left 3 |
| `_A_SELECT_STYLES_VALUE_MX_3_` | Margin horizontal 3 |
| `_A_SELECT_STYLES_VALUE_MY_3_` | Margin vertical 3 |
| `_A_SELECT_STYLES_VALUE_M_4_` | Margin 4 |
| `_A_SELECT_STYLES_VALUE_MT_4_` | Margin top 4 |
| `_A_SELECT_STYLES_VALUE_MR_4_` | Margin right 4 |
| `_A_SELECT_STYLES_VALUE_MB_4_` | Margin bottom 4 |
| `_A_SELECT_STYLES_VALUE_ML_4_` | Margin left 4 |
| `_A_SELECT_STYLES_VALUE_MX_4_` | Margin horizontal 4 |
| `_A_SELECT_STYLES_VALUE_MY_4_` | Margin vertical 4 |
| `_A_SELECT_STYLES_VALUE_M_5_` | Margin 5 |
| `_A_SELECT_STYLES_VALUE_MT_5_` | Margin top 5 |
| `_A_SELECT_STYLES_VALUE_MR_5_` | Margin right 5 |
| `_A_SELECT_STYLES_VALUE_MB_5_` | Margin bottom 5 |
| `_A_SELECT_STYLES_VALUE_ML_5_` | Margin left 5 |
| `_A_SELECT_STYLES_VALUE_MX_5_` | Margin horizontal 5 |
| `_A_SELECT_STYLES_VALUE_MY_5_` | Margin vertical 5 |
| `_A_SELECT_STYLES_VALUE_M_6_` | Margin 6 |
| `_A_SELECT_STYLES_VALUE_MT_6_` | Margin top 6 |
| `_A_SELECT_STYLES_VALUE_MR_6_` | Margin right 6 |
| `_A_SELECT_STYLES_VALUE_MB_6_` | Margin bottom 6 |
| `_A_SELECT_STYLES_VALUE_ML_6_` | Margin left 6 |
| `_A_SELECT_STYLES_VALUE_MX_6_` | Margin horizontal 6 |
| `_A_SELECT_STYLES_VALUE_MY_6_` | Margin vertical 6 |
| `_A_SELECT_STYLES_VALUE_M_AUTO_` | Margin auto |
| `_A_SELECT_STYLES_VALUE_MT_AUTO_` | Margin top auto |
| `_A_SELECT_STYLES_VALUE_MR_AUTO_` | Margin right auto |
| `_A_SELECT_STYLES_VALUE_MB_AUTO_` | Margin bottom auto |
| `_A_SELECT_STYLES_VALUE_ML_AUTO_` | Margin left auto |
| `_A_SELECT_STYLES_VALUE_MX_AUTO_` | Margin horizontal auto |
| `_A_SELECT_STYLES_VALUE_MY_AUTO_` | Margin vertical auto |
| `_A_SELECT_STYLES_VALUE_M_0_` | Margin 0 |
| `_A_SELECT_STYLES_VALUE_MT_0_` | Margin top 0 |
| `_A_SELECT_STYLES_VALUE_MR_0_` | Margin right 0 |
| `_A_SELECT_STYLES_VALUE_MB_0_` | Margin bottom 0 |
| `_A_SELECT_STYLES_VALUE_ML_0_` | Margin left 0 |
| `_A_SELECT_STYLES_VALUE_MX_0_` | Margin horizontal 0 |
| `_A_SELECT_STYLES_VALUE_MY_0_` | Margin vertical 0 |
| `_A_SELECT_STYLES_VALUE_COLOR_PRIMARY_` | Primary color |
| `_A_SELECT_STYLES_VALUE_COLOR_SECONDARY_` | Secondary color |
| `_A_SELECT_STYLES_VALUE_COLOR_TERTIARY_` | Tertiary color |
| `_A_SELECT_STYLES_VALUE_COLOR_TEXT_` | Text color |
| `_A_SELECT_STYLES_VALUE_COLOR_INFO_` | Info color |
| `_A_SELECT_STYLES_VALUE_COLOR_SUCCESS_` | Success color |
| `_A_SELECT_STYLES_VALUE_COLOR_WARNING_` | Warning color |
| `_A_SELECT_STYLES_VALUE_COLOR_DANGER_` | Danger color |
| `_A_SELECT_STYLES_VALUE_COLOR_LINK_` | Link color |
| `_A_SELECT_STYLES_VALUE_COLOR_WHITE_` | White |
| `_A_SELECT_STYLES_VALUE_COLOR_BLACK_` | Black |
| `_A_SELECT_STYLES_VALUE_COLOR_GRAY_100_` | Gray 100 |
| `_A_SELECT_STYLES_VALUE_COLOR_GRAY_200_` | Gray 200 |
| `_A_SELECT_STYLES_VALUE_COLOR_GRAY_300_` | Gray 300 |
| `_A_SELECT_STYLES_VALUE_COLOR_GRAY_400_` | Gray 400 |
| `_A_SELECT_STYLES_VALUE_COLOR_GRAY_500_` | Gray 500 |
| `_A_SELECT_STYLES_VALUE_COLOR_GRAY_600_` | Gray 600 |
| `_A_SELECT_STYLES_VALUE_COLOR_GRAY_700_` | Gray 700 |
| `_A_SELECT_STYLES_VALUE_COLOR_GRAY_800_` | Gray 800 |
| `_A_SELECT_STYLES_VALUE_COLOR_GRAY_900_` | Gray 900 |
| `_A_SELECT_STYLES_VALUE_COLOR_TRANSPARENT_` | Transparent |
| `_A_SELECT_STYLES_VALUE_BG_PRIMARY_` | Primary background |
| `_A_SELECT_STYLES_VALUE_BG_SECONDARY_` | Secondary background |
| `_A_SELECT_STYLES_VALUE_BG_TERTIARY_` | Tertiary background |
| `_A_SELECT_STYLES_VALUE_BG_TEXT_` | Text background |
| `_A_SELECT_STYLES_VALUE_BG_INFO_` | Info background |
| `_A_SELECT_STYLES_VALUE_BG_SUCCESS_` | Success background |
| `_A_SELECT_STYLES_VALUE_BG_WARNING_` | Warning background |
| `_A_SELECT_STYLES_VALUE_BG_DANGER_` | Danger background |
| `_A_SELECT_STYLES_VALUE_BG_LINK_` | Link background |
| `_A_SELECT_STYLES_VALUE_BG_WHITE_` | White background |
| `_A_SELECT_STYLES_VALUE_BG_BLACK_` | Black background |
| `_A_SELECT_STYLES_VALUE_BG_GRAY_100_` | Gray background 100 |
| `_A_SELECT_STYLES_VALUE_BG_GRAY_200_` | Gray background 200 |
| `_A_SELECT_STYLES_VALUE_BG_GRAY_300_` | Gray background 300 |
| `_A_SELECT_STYLES_VALUE_BG_GRAY_400_` | Gray background 400 |
| `_A_SELECT_STYLES_VALUE_BG_GRAY_500_` | Gray background 500 |
| `_A_SELECT_STYLES_VALUE_BG_GRAY_600_` | Gray background 600 |
| `_A_SELECT_STYLES_VALUE_BG_GRAY_700_` | Gray background 700 |
| `_A_SELECT_STYLES_VALUE_BG_GRAY_800_` | Gray background 800 |
| `_A_SELECT_STYLES_VALUE_BG_GRAY_900_` | Gray background 900 |
| `_A_SELECT_STYLES_VALUE_BG_TRANSPARENT_` | Transparent background |
