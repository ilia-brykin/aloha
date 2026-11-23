# AInputTags (Input tags)

**AInputTags** enters several free values in one field, e.g. keywords or e-mail recipients. The model is an array of strings.

Accessibility:

- The field is a normal text input with a label. A hint for screen readers explains the keys: Enter or a comma adds a value, Backspace in the empty field removes the last one.
- Every tag has a remove button with the text "Remove …". After a click the focus goes back to the input.
- Added and removed values, duplicates and the limit are announced in a live region.
- Pasted text is split into several values.

## Basic usage

Type a value and press Enter or a comma. The text that is still in the field is added when the field loses the focus.

```html
<a-input-tags
  v-model="model"
  label="_A_INPUT_TAGS_EXAMPLE_KEYWORDS_"
  placeholder="_A_INPUT_TAGS_EXAMPLE_KEYWORDS_PLACEHOLDER_"
  help-text="_A_INPUT_TAGS_EXAMPLE_KEYWORDS_HELP_"
/>
<pre>{{ model }}</pre>
```

```js
import {
  ref,
} from "vue";

import {
  AInputTags,
} from "aloha-vue";

export default {
  components: {
    AInputTags,
  },
  setup() {
    const model = ref(["vue", "accessibility"]);

    return {
      model,
    };
  },
};
```

## E-mail recipients

`separators` adds a semicolon and a space, so a list of addresses can be typed or pasted. `max-tags` limits the number of recipients. `input-attributes` gives the mobile keyboard for e-mail addresses.

*props: `separators`, `max-tags`*

```html
<!-- Enter, comma, semicolon or space add a recipient, at most 5 -->
<a-input-tags
  v-model="model"
  label="_A_INPUT_TAGS_EXAMPLE_RECIPIENTS_"
  :separators="['Enter', ',', ';', ' ']"
  :max-tags="5"
  :input-attributes="{ type: 'email', inputmode: 'email' }"
  help-text="_A_INPUT_TAGS_EXAMPLE_RECIPIENTS_HELP_"
/>
```

```js
import {
  ref,
} from "vue";

import {
  AInputTags,
} from "aloha-vue";

export default {
  components: {
    AInputTags,
  },
  setup() {
    const model = ref(["anna@example.com"]);

    return {
      model,
    };
  },
};
```

## In a form

In `AForm` the element has the type `tags`.

```html
<a-form
  v-model="model"
  :data="dataForm"
/>
<pre>{{ model }}</pre>
```

```js
import {
  ref,
} from "vue";

import {
  AForm,
} from "aloha-vue";

export default {
  components: {
    AForm,
  },
  setup() {
    const dataForm = [
      {
        type: "text",
        id: "title",
        label: "_A_FORM_EXAMPLE_TITLE_",
      },
      {
        type: "tags",
        id: "keywords",
        label: "_A_INPUT_TAGS_EXAMPLE_KEYWORDS_",
        required: true,
        maxTags: 10,
      },
    ];
    const model = ref({
      title: "Aloha",
      keywords: ["vue"],
    });

    return {
      dataForm,
      model,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| allow-duplicates | Boolean | false |  | Allows the same value more than once. Without it a duplicate (case-insensitive) is not added and announced. |
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| change | Function | () => {} |  | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| dependencies | Array / Object |  |  | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| disabled | Boolean |  |  | Determines whether the component is disabled. If set to **true**, the component becomes inactive and the user cannot interact with it. |
| errors | String / Array |  |  | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| exclude-render-attributes | Array | [] |  | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final **DOM**. |
| extra | Object |  |  | Variables for translations. |
| help-text | String |  |  | Help text displayed below the component. Provides the user with additional information or instruction. |
| html-id | String |  |  | Sets the **HTML ID** of the element. Can be used to uniquely identify the component on the page. |
| id | String / Number | uniqueId("a_input_tags_") |  | The identifier of the component, which can be used to track or refer to the component in the code. |
| id-prefix | String |  |  | Prefix for the component's **ID**. Used to create a unique identifier based on the specified prefix. |
| input-attributes | Object | {} |  | An object of attributes applied directly to the input element. Allows adding or customizing additional input attributes. |
| input-class | String / Object |  |  | **CSS** class(es) applied to the input element. Allows styling the component according to your requirements. |
| is-hide | Boolean |  |  | Determines whether the component should be hidden. If set to **true**, the component is not displayed on the page. |
| is-render | Boolean | true |  | Indicates whether the component should be rendered. If set to **false**, the component will not be created in the **DOM**. |
| label | String / Number |  |  | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| label-class | String / Object |  |  | **CSS** class(es) applied to the label. Allows customizing the label's style. |
| label-description | String |  |  | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| label-screen-reader | String / Number |  |  | Label intended for screen readers. Useful for improving accessibility. |
| max-tags | Number |  |  | Maximum number of values. When it is reached, no more values are added and the limit is announced. |
| model-dependencies | Object | {} |  | Determines model dependencies that may affect the visibility or behavior of the component. |
| model-undefined | Array / Object / String | [] |  | The value used to reset the model to an undefined state. Useful for clearing the model value. |
| model-value | Array |  |  | The current model value associated with the component. Used to manage the data displayed in the component. |
| placeholder | String |  |  | Specifies the placeholder text that will be displayed in the input field until the user enters data. The placeholder helps the user understand what data is expected in the field. |
| readonly | Boolean |  |  | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| readonly-default | String | "" |  | The default text that is shown if the value is missing in read-only mode. |
| required | Boolean | false |  | Indicates whether the component is required. If set to **true**, the component requires user input. |
| separators | Array | ["Enter", ","] |  | Keys that add the typed text as a value, default `["Enter", ","]`. One-character separators and line breaks also split pasted text. |
| type | String | "tags" |  | Type of the element in `AForm`: `type: "tags"`. |

## Methods

| name | description |
| --- | --- |
| focus | Sets the focus to the input. |

## Translations

| key | en |
| --- | --- |
| `_A_INPUT_TAGS_ADDED_` | Added: {{ tag }} |
| `_A_INPUT_TAGS_DUPLICATE_` | {{ tag }} is already in the list |
| `_A_INPUT_TAGS_HINT_` | Enter or comma adds a value, Backspace in the empty field removes the last one. |
| `_A_INPUT_TAGS_MAX_` | No more than {{ max }} values |
| `_A_INPUT_TAGS_REMOVE_` | Remove {{ tag }} |
| `_A_INPUT_TAGS_REMOVED_` | Removed: {{ tag }} |

## CSS variables (`scss/components/ui/AInputTags.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_input_tags_gap` |  | Space between the tags and the input. |
| `--a_input_tags_input_min_width` |  | Minimum width of the input; below it the input moves to the next line. |
| `--a_input_tags_tag_gap` |  | Space between the text and the remove button of a tag. |
| `--a_input_tags_tag_padding_x` |  | Horizontal padding of a tag. |
| `--a_input_tags_tag_padding_y` |  | Vertical padding of a tag. |
| `--a_input_tags_tag_color` |  | Text color of a tag. |
| `--a_input_tags_tag_bg` |  | Background of a tag. |
| `--a_input_tags_tag_border_radius` |  | Corner radius of a tag. |
| `--a_input_tags_remove_hover_bg` |  | Background of the remove button on hover. |
