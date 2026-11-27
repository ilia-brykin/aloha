# AEmptyState (Empty state)

**AEmptyState** shows that there is no data: an icon, a title, a text and buttons. Use it in tables, lists and trees, e.g. "No entries yet" or "Nothing found".

## Basic usage

An empty list with a button for the first entry. `header-tag` makes the title a heading of the right level. The class `a_tile` adds a frame.

*props: `icon`, `header-text`, `header-tag`, `text`*

```html
<a-empty-state
  class="a_tile"
  icon="Inbox"
  header-tag="h3"
  header-text="_A_EMPTY_STATE_EXAMPLE_BASIC_HEADER_"
  text="_A_EMPTY_STATE_EXAMPLE_BASIC_TEXT_"
>
  <a-button
    class="a_btn a_btn_primary"
    icon-left="PlusLg"
    text="_A_EMPTY_STATE_EXAMPLE_BASIC_BTN_"
  />
</a-empty-state>
```

## Nothing found

The empty state appears when the search has no results. It is inside an element with `role="status"` that is always in the page, so a screen reader announces it. An element with `role="status"` that is added together with its content is often not announced. The placeholder `{{ search }}` comes from `extra`.

*props: `extra`*

```html
<a-input
  v-model="search"
  label="_A_EMPTY_STATE_EXAMPLE_SEARCH_LABEL_"
  model-undefined=""
/>
<ul v-if="itemsFiltered.length">
  <li v-for="item in itemsFiltered" :key="item">{{ item }}</li>
</ul>

<!-- the live region is always in the page, only its content changes -->
<div role="status">
  <a-empty-state
    v-if="!itemsFiltered.length"
    icon="Search"
    header-text="_A_EMPTY_STATE_EXAMPLE_SEARCH_HEADER_"
    text="_A_EMPTY_STATE_EXAMPLE_SEARCH_TEXT_"
    :extra="{ search }"
  >
    <a-button
      class="a_btn a_btn_secondary"
      text="_A_EMPTY_STATE_EXAMPLE_SEARCH_BTN_"
      @click="search = ''"
    />
  </a-empty-state>
</div>
```

```js
import {
  computed,
  ref,
} from "vue";

import {
  AButton,
  AEmptyState,
  AInput,
} from "aloha-vue";

// i18n: "_A_EMPTY_STATE_EXAMPLE_SEARCH_HEADER_": "Nothing found for \"{{ search }}\""

export default {
  components: {
    AButton,
    AEmptyState,
    AInput,
  },
  setup() {
    const items = ["Honolulu", "Hilo", "Kailua", "Lahaina", "Waikiki"];
    const search = ref("xyz");

    const itemsFiltered = computed(() => {
      const SEARCH = search.value.trim().toLowerCase();
      return items.filter(item => item.toLowerCase().includes(SEARCH));
    });

    return {
      itemsFiltered,
      search,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| extra | Object |  |  | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like **"_WELCOME_{{foo}}_{{bar}}_"**, which is translated as **"Welcome {{ foo }}: {{ bar }}"**, you can pass an object like **{ foo: "abc", bar: "123" }**, and the result will be the translation **"Welcome abc: 123"**. |
| header-tag | String | "p" |  | Tag of the title. `p` by default, so the heading structure of the page stays correct. Set a heading level (e.g. `h2`, `h3`) if the empty state is a section of its own. The default can be changed for the whole app with `AComponentsPlugin`. |
| header-text | String |  |  | Title. Accepts a translation key. |
| icon | String |  |  | Icon above the title, a name registered with `AIconPlugin`. It is decorative and hidden from screen readers. |
| text | String |  |  | Text below the title. Accepts a translation key. |

## Slots

| name | description |
| --- | --- |
| default | Buttons or links below the text, e.g. to create the first entry or to reset the filters. |
| icon | Own content instead of the prop `icon`, e.g. an illustration. It is hidden from screen readers. |

## CSS variables (`scss/components/AEmptyState.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_empty_state_padding` |  | Padding around the content. |
| `--a_empty_state_gap` |  | Space between the icon, the title and the text. |
| `--a_empty_state_color` |  | Color of the text. |
| `--a_empty_state_icon_size` |  | Size of the icon. |
| `--a_empty_state_icon_color` |  | Color of the icon. |
| `--a_empty_state_title_font_size` |  | Font size of the title. |
| `--a_empty_state_title_font_weight` |  | Font weight of the title. |
| `--a_empty_state_title_color` |  | Color of the title. |
| `--a_empty_state_text_max_width` |  | Maximum width of the text, for readable lines. |
| `--a_empty_state_actions_margin_top` |  | Additional space above the buttons. |
