# ACombobox (Combobox)

**ACombobox** is a text field with suggestions: the text is free, a suggestion fills it. Unlike **ASelect** the value is the text, not an entry of a list. The suggestions come from the data or from the server.

Accessibility (WAI-ARIA combobox): the input has `role="combobox"` and the focus stays in it, `aria-activedescendant` shows the active suggestion. ArrowDown and ArrowUp move in the list, Alt+ArrowDown opens it, Enter takes the active suggestion, Escape closes the list and then clears the text, Tab leaves the field. The number of suggestions is read in a live region, the found text is marked.

## Basic usage

The data are filtered by the text (also in the middle of a word). **select** gets the chosen suggestion with id, label and item; an own text is also allowed.

```html
<a-combobox
  v-model="model"
  :data="cities"
  label="_A_COMBOBOX_EXAMPLE_CITY_"
  @select="selected = $event"
/>
<pre>v-model: {{ model }}, select: {{ selected }}</pre>
```

```js
import {
  ref,
} from "vue";

import {
  ACombobox,
} from "aloha-vue";

export default {
  components: {
    ACombobox,
  },
  setup() {
    const model = ref("");
    // select: { id, label, item } of the chosen suggestion; the text can also be own
    const selected = ref(undefined);
    const cities = [
      { id: "berlin", label: "Berlin" },
      { id: "bern", label: "Bern" },
      { id: "bremen", label: "Bremen" },
      { id: "hamburg", label: "Hamburg" },
      { id: "hannover", label: "Hannover" },
      { id: "munich", label: "München" },
      { id: "vienna", label: "Wien" },
      { id: "zurich", label: "Zürich" },
    ];

    return {
      cities,
      model,
      selected,
    };
  },
};
```

## Options of the list

An array of strings with is-data-simple-array. min-length 0 and open-on-focus show the list at the focus, max-items limits it.

```html
<a-combobox
  v-model="model"
  :data="languages"
  :is-data-simple-array="true"
  :max-items="5"
  :min-length="0"
  :open-on-focus="true"
  label="_A_COMBOBOX_EXAMPLE_LANGUAGE_"
/>
```

```js
import {
  ref,
} from "vue";

import {
  ACombobox,
} from "aloha-vue";

export default {
  components: {
    ACombobox,
  },
  setup() {
    const model = ref("");
    const languages = ["Deutsch", "English", "Español", "Français", "Hrvatski", "Italiano", "Nederlands", "Polski", "Русский", "Українська", "العربية"];

    return {
      languages,
      model,
    };
  },
};
```

## Suggestions of the server

With url the field asks the server after a pause (search-timeout): GET url?search=text (search-api-key). The server filters, an older answer does not replace a newer one, a spinner shows the loading. The file of these docs is static and gives all entries back.

```html
<a-combobox
  v-model="model"
  :search-timeout="300"
  :url="url"
  label="_A_COMBOBOX_EXAMPLE_SEARCH_"
  search-api-key="search"
/>
```

```js
import {
  ref,
} from "vue";

import {
  ACombobox,
} from "aloha-vue";

export default {
  components: {
    ACombobox,
  },
  setup() {
    const model = ref("");
    // GET url?search=<text> after a pause of 300 ms; an older answer does not replace a newer one
    const url = `${ import.meta.env.BASE_URL }assets/mock/select-base.json`;

    return {
      model,
      url,
    };
  },
};
```

## In a form

In **AForm** the field has `type: "combobox"`.

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
        type: "combobox",
        id: "city",
        label: "_A_COMBOBOX_EXAMPLE_CITY_",
        required: true,
        data: [
          { id: "berlin", label: "Berlin" },
          { id: "bern", label: "Bern" },
          { id: "bremen", label: "Bremen" },
          { id: "hamburg", label: "Hamburg" },
          { id: "hannover", label: "Hannover" },
          { id: "munich", label: "München" },
          { id: "vienna", label: "Wien" },
          { id: "zurich", label: "Zürich" },
        ],
      },
    ];
    const model = ref({
      city: "Hamburg",
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
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| change | Function | () => {} |  | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| data | Array | [] |  | Local suggestions: objects (key-id, key-label) or strings (is-data-simple-array). |
| dependencies | Array / Object |  |  | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| disabled | Boolean |  |  | Determines whether the component is disabled. If set to **true**, the component becomes inactive and the user cannot interact with it. |
| errors | String / Array |  |  | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| exclude-render-attributes | Array | [] |  | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final **DOM**. |
| extra | Object |  |  | Variables for translations. |
| help-text | String |  |  | Help text displayed below the component. Provides the user with additional information or instruction. |
| html-id | String |  |  | Sets the **HTML ID** of the element. Can be used to uniquely identify the component on the page. |
| id | String / Number | uniqueId("a_combobox_") |  | The identifier of the component, which can be used to track or refer to the component in the code. |
| id-prefix | String |  |  | Prefix for the component's **ID**. Used to create a unique identifier based on the specified prefix. |
| in-body | Boolean | true |  | The list is in a container in body and placed at the field (floating-ui): a parent with overflow: hidden (table, modal) does not cut it. |
| input-attributes | Object | {} |  | An object of attributes applied directly to the input element. Allows adding or customizing additional input attributes. |
| input-class | String / Object |  |  | **CSS** class(es) applied to the input element. Allows styling the component according to your requirements. |
| is-bottom-sheet-on-mobile | Boolean | true |  | On a small screen (AMobilePlugin) the list is a panel at the bottom of the window, above the virtual keyboard (visualViewport). The focus stays in the field. |
| is-clear-button | Boolean | true |  | Shows a button that clears the text. The default can be set with **AComponentsPlugin**. |
| is-data-simple-array | Boolean |  |  | The data are an array of strings or numbers. |
| is-hide | Boolean |  |  | Determines whether the component should be hidden. If set to **true**, the component is not displayed on the page. |
| is-render | Boolean | true |  | Indicates whether the component should be rendered. If set to **false**, the component will not be created in the **DOM**. |
| key-id | String | "id" |  | Key of the id in the data. |
| key-label | String | "label" |  | Key of the text of a suggestion in the data. |
| key-label-callback | Function |  |  | Text of a suggestion from a function: **({ item }) => …**. |
| label | String / Number |  |  | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| label-class | String / Object |  |  | **CSS** class(es) applied to the label. Allows customizing the label's style. |
| label-description | String |  |  | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| label-screen-reader | String / Number |  |  | Label intended for screen readers. Useful for improving accessibility. |
| max-items | Number | 10 |  | Maximum number of suggestions. |
| min-length | Number | 1 |  | Number of characters from which the list opens. |
| model-dependencies | Object | {} |  | Determines model dependencies that may affect the visibility or behavior of the component. |
| model-undefined | String / Number / Object / Array / Boolean | "" |  | The value used to reset the model to an undefined state. Useful for clearing the model value. |
| model-value | String / Number |  |  | The text of the field (v-model). |
| open-on-focus | Boolean | false |  | Opens the list at the focus (with min-length 0 also without text). |
| placeholder | String |  |  | Specifies the placeholder text that will be displayed in the input field until the user enters data. The placeholder helps the user understand what data is expected in the field. |
| popper-container-id | String | "a_tooltip_container" |  | Id of the container in body for in-body and the bottom sheet. |
| readonly | Boolean |  |  | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| readonly-default | String | "" |  | The default text that is shown if the value is missing in read-only mode. |
| required | Boolean | false |  | Indicates whether the component is required. If set to **true**, the component requires user input. |
| search-api-key | String | "search" |  | Name of the parameter of the text for the server. |
| search-timeout | Number | 300 |  | Pause in ms before the request to the server. |
| translate-data | Boolean |  |  | The texts of the data are translation keys. |
| type | String | "combobox" |  | Type for **AForm**. |
| url | String |  |  | Address of the server for the suggestions (it filters by the text). |
| url-params | Object |  |  | Other parameters of the request. |
| url-template-data | Object | {} |  | Values for placeholders in the url: **api/{{ id }}/**. |

## Events

| name | type | description |
| --- | --- | --- |
| select | Function | A suggestion was taken (Enter or click): **{ id, label, item }**. |
| update:modelValue | Function | The new text (v-model). |

## Translations

| key | en |
| --- | --- |
| `_A_COMBOBOX_LOADING_` | Loading suggestions… |
| `_A_COMBOBOX_NO_RESULTS_` | No suggestions |
| `_A_COMBOBOX_RESULTS_{{count}}_` | {{ count }} suggestions available |

## CSS variables (`scss/components/ui/ACombobox.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_combobox_z_index` |  | Stack order of the list, above modals. |
| `--a_combobox_max_height` |  | Maximum height of the list. Longer lists scroll. In body: not higher than the free space. |
| `--a_combobox_sheet_max_height` |  | Maximum height of the bottom sheet on a small screen. |
| `--a_combobox_padding` |  | Padding inside the list. |
| `--a_combobox_font_size` |  | Font size of the list. |
| `--a_combobox_color` |  | Text color of the list. |
| `--a_combobox_bg` |  | Background of the list. |
| `--a_combobox_border_width` |  | Border width of the list. |
| `--a_combobox_border_color` |  | Border color of the list. |
| `--a_combobox_border_radius` |  | Corner radius of the list. |
| `--a_combobox_box_shadow` |  | Shadow of the list. |
| `--a_combobox_option_padding_x` |  | Horizontal padding of an option. |
| `--a_combobox_option_padding_y` |  | Vertical padding of an option. |
| `--a_combobox_option_border_radius` |  | Corner radius of an option. |
| `--a_combobox_option_hover_bg` |  | Background of a hovered option. |
| `--a_combobox_option_active_color` |  | Text color of the active option (arrow keys). |
| `--a_combobox_option_active_bg` |  | Background of the active option (arrow keys). |
