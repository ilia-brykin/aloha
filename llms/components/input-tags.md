# AInputTags (Input tags)

**AInputTags** enters several free values in one field, e.g. keywords or e-mail recipients. The model is an array of strings.

Accessibility:

- The field is a normal text input with a label. A hint for screen readers explains the keys: Enter or a comma adds a value, Backspace in the empty field removes the last one.
- Every tag has a remove button with the text "Remove …". After a click the focus goes back to the input.
- Added and removed values, duplicates and the limit are announced in a live region.
- Pasted text is split into several values.

Keyboard on the values: ArrowLeft at the start of the field goes to the values, the arrows go between them, Home / End to the first / last one, Delete or Backspace removes the value and the focus stays on the values, ArrowRight after the last one goes back to the field. With data or url the field is a combobox like **ACombobox** (`role="combobox"`, the suggestions in a listbox). "+N" (max-visible-tags) has aria-expanded, its name contains the visible text. The counter of max-tags is read with the field.

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

## Suggestions

With data (or url) the field shows suggestions like **ACombobox**: groups, disabled suggestions, filter, in-body and the bottom sheet. Enter or a click adds the suggestion, chosen values are no suggestions. is-add-all adds all found suggestions (button under the list or Ctrl+Enter).

```html
<a-input-tags
  v-model="model"
  :data="skills"
  :is-add-all="true"
  key-group="area"
  label="_A_INPUT_TAGS_EXAMPLE_SKILLS_"
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
    const model = ref([]);
    // groups (key-group); "add all" under the list and Ctrl+Enter
    const skills = [
      { id: "vue", label: "Vue", area: "Frontend" },
      { id: "react", label: "React", area: "Frontend" },
      { id: "svelte", label: "Svelte", area: "Frontend" },
      { id: "node", label: "Node.js", area: "Backend" },
      { id: "python", label: "Python", area: "Backend" },
      { id: "go", label: "Go", area: "Backend" },
    ];

    return {
      model,
      skills,
    };
  },
};
```

## Only from the list and limits

is-only-from-list accepts only values of the suggestions. max-tags limits the number and shows a counter, max-visible-tags hides more values behind "+N", is-remove-all shows a button that removes all values.

```html
<a-input-tags
  v-model="model"
  :data="languages"
  :is-data-simple-array="true"
  :is-only-from-list="true"
  :is-remove-all="true"
  :max-tags="6"
  :max-visible-tags="3"
  :min-length="0"
  :open-on-focus="true"
  label="_A_INPUT_TAGS_EXAMPLE_LANGUAGES_"
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
    const model = ref(["Deutsch", "English", "Español", "Français"]);
    const languages = ["Deutsch", "English", "Español", "Français", "Italiano", "Nederlands", "Polski", "Русский", "Українська", "Hrvatski", "العربية"];

    return {
      languages,
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
| data | Array | [] |  | Local suggestions: objects (key-id, key-label) or strings (is-data-simple-array). |
| dependencies | Array / Object |  |  | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| disabled | Boolean |  |  | Determines whether the component is disabled. If set to **true**, the component becomes inactive and the user cannot interact with it. |
| errors | String / Array |  |  | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| exclude-render-attributes | Array | [] |  | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final **DOM**. |
| extra | Object |  |  | Variables for translations. |
| filter-callback | Function |  |  | Own filter of the local data: **({ item, label, search }) => boolean**. |
| filter-mode | String | "contains" |  | contains: the text in any place, startsWith: only at the start. |
| help-text | String |  |  | Help text displayed below the component. Provides the user with additional information or instruction. |
| html-id | String |  |  | Sets the **HTML ID** of the element. Can be used to uniquely identify the component on the page. |
| id | String / Number | uniqueId("a_input_tags_") |  | The identifier of the component, which can be used to track or refer to the component in the code. |
| id-prefix | String |  |  | Prefix for the component's **ID**. Used to create a unique identifier based on the specified prefix. |
| ignore-diacritics | Boolean | true |  | The search ignores diacritics: munchen finds München, the mark covers the original chars. |
| in-body | Boolean | true |  | The list is in a container in body and placed at the field (floating-ui): a parent with overflow: hidden (table, modal) does not cut it. |
| inline-autocomplete | Boolean | false |  | The first suggestion completes the text in the field, the added part is selected (`aria-autocomplete="both"`). |
| input-attributes | Object | {} |  | An object of attributes applied directly to the input element. Allows adding or customizing additional input attributes. |
| input-class | String / Object |  |  | **CSS** class(es) applied to the input element. Allows styling the component according to your requirements. |
| is-add-all | Boolean | false |  | Shows a button "add all" under the suggestions, Ctrl+Enter does the same; disabled suggestions and max-tags are respected. |
| is-bottom-sheet-on-mobile | Boolean | true |  | On a small screen (AMobilePlugin) the list is a panel at the bottom of the window, above the virtual keyboard (visualViewport). The focus stays in the field. |
| is-data-simple-array | Boolean |  |  | The data are an array of strings or numbers. |
| is-hide | Boolean |  |  | Determines whether the component should be hidden. If set to **true**, the component is not displayed on the page. |
| is-only-from-list | Boolean |  |  | Only values of the suggestions (also typed or pasted, without the case and diacritics); another text is announced and not added. |
| is-remove-all | Boolean | false |  | Shows a button under the field that removes all values; the removal is announced, the focus goes to the field. |
| is-render | Boolean | true |  | Indicates whether the component should be rendered. If set to **false**, the component will not be created in the **DOM**. |
| key-disabled | String |  |  | Key in the data: a true value shows the suggestion as disabled, it can not be chosen. |
| key-group | String |  |  | Key of the group in the data: the suggestions of a group stay together under a header. |
| key-id | String | "id" |  | Key of the id in the data. |
| key-label | String | "label" |  | Key of the text of a suggestion in the data. |
| key-label-callback | Function |  |  | Text of a suggestion from a function: **({ item }) => …**. |
| label | String / Number |  |  | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| label-class | String / Object |  |  | **CSS** class(es) applied to the label. Allows customizing the label's style. |
| label-description | String |  |  | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| label-screen-reader | String / Number |  |  | Label intended for screen readers. Useful for improving accessibility. |
| max-items | Number | 10 |  | Maximum number of suggestions. |
| max-tags | Number |  |  | Maximum number of values. When it is reached, no more values are added and the limit is announced. |
| max-visible-tags | Number |  |  | Number of visible values; the others are behind a button "+N" (aria-expanded) that shows them. |
| min-length | Number | 1 |  | Number of characters from which the list opens. |
| model-dependencies | Object | {} |  | Determines model dependencies that may affect the visibility or behavior of the component. |
| model-undefined | Array / Object / String | [] |  | The value used to reset the model to an undefined state. Useful for clearing the model value. |
| model-value | Array |  |  | The current model value associated with the component. Used to manage the data displayed in the component. |
| open-on-focus | Boolean | false |  | Opens the list at the focus (with min-length 0 also without text). |
| placeholder | String |  |  | Specifies the placeholder text that will be displayed in the input field until the user enters data. The placeholder helps the user understand what data is expected in the field. |
| popper-container-id | String | "a_tooltip_container" |  | Id of the container in body for in-body and the bottom sheet. |
| readonly | Boolean |  |  | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| readonly-default | String | "" |  | The default text that is shown if the value is missing in read-only mode. |
| required | Boolean | false |  | Indicates whether the component is required. If set to **true**, the component requires user input. |
| search-api-key | String | "search" |  | Name of the parameter of the text for the server. |
| search-timeout | Number | 300 |  | Pause in ms before the request to the server. |
| separators | Array | ["Enter", ","] |  | Keys that add the typed text as a value, default `["Enter", ","]`. One-character separators and line breaks also split pasted text. |
| texts | Object |  |  | All texts of the field: **added**, **removed**, **duplicate**, **max**, **remove**, **hint**, **removeAll**, **removedAll**, **showMore**, **showLess**, **counter**, **onlyFromList**, **addAll**, **hintAddAll**, **loading**, **noResults**, **results**. Every missing key keeps its default, the defaults can be set with **AComponentsPlugin**. |
| translate-data | Boolean |  |  | The texts of the data are translation keys. |
| type | String | "tags" |  | Type of the element in `AForm`: `type: "tags"`. |
| url | String |  |  | Address of the server for the suggestions (it filters by the text). |
| url-params | Object |  |  | Other parameters of the request. |
| url-template-data | Object | {} |  | Values for placeholders in the url: **api/{{ id }}/**. |
| z-index | Number / String |  |  | Stack order of the list. Without it the token --a_combobox_z_index: above modals, so the list in AModal is visible. Set a smaller value if the list must stay under own fixed layers. |

## Events

| name | type | description |
| --- | --- | --- |
| select | Function | A suggestion was taken (Enter or click): **{ id, label, item }**. |
| update:modelValue | Function | The new values (v-model), an array of strings. |

## Slots

| name | description |
| --- | --- |
| option | Own content of a suggestion. Props: **{ item, label, parts, highlight, isActive, isDisabled, index }**. |

## Methods

| name | description |
| --- | --- |
| focus | Sets the focus to the input. |

## Translations

| key | en |
| --- | --- |
| `_A_COMBOBOX_LOADING_` | Loading suggestions… |
| `_A_COMBOBOX_NO_RESULTS_` | No suggestions |
| `_A_COMBOBOX_RESULTS_{{count}}_` | {{ count }} suggestions available |
| `_A_INPUT_TAGS_ADDED_` | Added: {{ tag }} |
| `_A_INPUT_TAGS_ADD_ALL_` | Add all ({{ count }}) |
| `_A_INPUT_TAGS_COUNTER_` | {{ count }} of {{ max }} values |
| `_A_INPUT_TAGS_DUPLICATE_` | {{ tag }} is already in the list |
| `_A_INPUT_TAGS_HINT_` | Enter or comma adds a value, Backspace in the empty field removes the last one. ArrowLeft at the start goes to the values, Delete removes the value. |
| `_A_INPUT_TAGS_HINT_ADD_ALL_` | Ctrl+Enter adds all suggestions. |
| `_A_INPUT_TAGS_MAX_` | No more than {{ max }} values |
| `_A_INPUT_TAGS_ONLY_FROM_LIST_` | {{ tag }} is not in the list |
| `_A_INPUT_TAGS_REMOVED_` | Removed: {{ tag }} |
| `_A_INPUT_TAGS_REMOVED_ALL_` | All values removed ({{ count }}) |
| `_A_INPUT_TAGS_REMOVE_` | Remove {{ tag }} |
| `_A_INPUT_TAGS_REMOVE_ALL_` | Remove all |
| `_A_INPUT_TAGS_SHOW_LESS_` | Show fewer values |
| `_A_INPUT_TAGS_SHOW_MORE_` | Show {{ count }} more values |

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
