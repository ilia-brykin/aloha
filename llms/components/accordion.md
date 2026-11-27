# AAccordion (Accordion)

**AAccordion** shows sections that can be opened and closed, e.g. questions and answers. Every header is a button in a heading (WAI-ARIA accordion pattern): it works with Tab, Enter and Space, and a screen reader announces whether the section is open.

## Basic usage

The items are in `data` with `label` and `content`. Only one item is open at a time. The header button is in an `h3`, the level is set with `header-tag`.

*props: `data`, `header-tag`*

```html
<a-accordion
  :data="data"
/>
```

```js
import {
  AAccordion,
} from "aloha-vue";

export default {
  components: {
    AAccordion,
  },
  data() {
    return {
      data: [
        {
          label: "_A_ACCORDION_EXAMPLE_SHIPPING_",
          content: "_A_ACCORDION_EXAMPLE_SHIPPING_CONTENT_",
        },
        {
          label: "_A_ACCORDION_EXAMPLE_PAYMENT_",
          content: "_A_ACCORDION_EXAMPLE_PAYMENT_CONTENT_",
        },
        {
          label: "_A_ACCORDION_EXAMPLE_RETURNS_",
          content: "_A_ACCORDION_EXAMPLE_RETURNS_CONTENT_",
        },
      ],
    };
  },
};
```

## Several open items

With `always-open` several items can be open at the same time. `with-gap` separates the items.

*props: `always-open`, `with-gap`*

```html
<a-accordion
  :data="data"
  :always-open="true"
  :with-gap="true"
/>
```

```js
import {
  AAccordion,
} from "aloha-vue";

export default {
  components: {
    AAccordion,
  },
  data() {
    return {
      data: [
        {
          label: "_A_ACCORDION_EXAMPLE_SHIPPING_",
          content: "_A_ACCORDION_EXAMPLE_SHIPPING_CONTENT_",
        },
        {
          label: "_A_ACCORDION_EXAMPLE_PAYMENT_",
          content: "_A_ACCORDION_EXAMPLE_PAYMENT_CONTENT_",
        },
        {
          label: "_A_ACCORDION_EXAMPLE_RETURNS_",
          content: "_A_ACCORDION_EXAMPLE_RETURNS_CONTENT_",
        },
      ],
    };
  },
};
```

## One item always open

With `one-item-always-open` one item always stays open, here the first one from `ids-for-open-default`. The open item can not be closed: its button has `aria-disabled="true"` but stays focusable, so a screen reader still reads it.

*props: `one-item-always-open`, `ids-for-open-default`*

```html
<a-accordion
  :data="data"
  :ids-for-open-default="idsForOpenDefault"
  :one-item-always-open="true"
/>
```

```js
import {
  AAccordion,
} from "aloha-vue";

export default {
  components: {
    AAccordion,
  },
  data() {
    return {
      data: [
        {
          label: "_A_ACCORDION_EXAMPLE_SHIPPING_",
          content: "_A_ACCORDION_EXAMPLE_SHIPPING_CONTENT_",
        },
        {
          label: "_A_ACCORDION_EXAMPLE_PAYMENT_",
          content: "_A_ACCORDION_EXAMPLE_PAYMENT_CONTENT_",
        },
        {
          label: "_A_ACCORDION_EXAMPLE_RETURNS_",
          content: "_A_ACCORDION_EXAMPLE_RETURNS_CONTENT_",
        },
      ],
      idsForOpenDefault: ["0"],
    };
  },
};
```

## v-model

`v-model` contains the ids of the open items. The id of an item is its index, nested ids are joined with `_` (e.g. `0_1`). Here the buttons open and close all items.

*props: `model-value`, `always-open`*

```html
<div class="a_mb_3">
  <a-button
    class="a_btn a_btn_secondary a_mr_2"
    text="_A_ACCORDION_EXAMPLE_OPEN_ALL_"
    @click="openAll"
  />
  <a-button
    class="a_btn a_btn_secondary"
    text="_A_ACCORDION_EXAMPLE_CLOSE_ALL_"
    @click="closeAll"
  />
</div>
<a-accordion
  v-model="idsOpen"
  :data="data"
  :always-open="true"
/>
<p class="a_mt_3">v-model: {{ idsOpen }}</p>
```

```js
import {
  AAccordion,
  AButton,
} from "aloha-vue";

export default {
  components: {
    AAccordion,
    AButton,
  },
  data() {
    return {
      data: [
        {
          label: "_A_ACCORDION_EXAMPLE_SHIPPING_",
          content: "_A_ACCORDION_EXAMPLE_SHIPPING_CONTENT_",
        },
        {
          label: "_A_ACCORDION_EXAMPLE_PAYMENT_",
          content: "_A_ACCORDION_EXAMPLE_PAYMENT_CONTENT_",
        },
        {
          label: "_A_ACCORDION_EXAMPLE_RETURNS_",
          content: "_A_ACCORDION_EXAMPLE_RETURNS_CONTENT_",
        },
      ],
      idsOpen: ["1"],
    };
  },
  methods: {
    openAll() {
      this.idsOpen = ["0", "1", "2"];
    },

    closeAll() {
      this.idsOpen = [];
    },
  },
};
```

## Nested items

Nested items are in `children`. Their headings get the next level (`h4`). With `key-id` the ids come from the items (e.g. `shipping_abroad`). `indexes-for-open` opens items by their indexes, nested indexes are joined with a dot (`0.1`).

*props: `key-children`, `key-id`, `indexes-for-open`*

```html
<a-accordion
  :data="data"
  :indexes-for-open="indexesForOpen"
  key-id="id"
/>
```

```js
import {
  AAccordion,
} from "aloha-vue";

export default {
  components: {
    AAccordion,
  },
  data() {
    return {
      data: [
        {
          id: "shipping",
          label: "_A_ACCORDION_EXAMPLE_SHIPPING_",
          content: "_A_ACCORDION_EXAMPLE_SHIPPING_CONTENT_",
          children: [
            {
              id: "germany",
              label: "_A_ACCORDION_EXAMPLE_GERMANY_",
              content: "_A_ACCORDION_EXAMPLE_GERMANY_CONTENT_",
            },
            {
              id: "abroad",
              label: "_A_ACCORDION_EXAMPLE_ABROAD_",
              content: "_A_ACCORDION_EXAMPLE_ABROAD_CONTENT_",
            },
          ],
        },
        {
          id: "payment",
          label: "_A_ACCORDION_EXAMPLE_PAYMENT_",
          content: "_A_ACCORDION_EXAMPLE_PAYMENT_CONTENT_",
        },
      ],
      indexesForOpen: ["0", "0.1"],
    };
  },
};
```

## Slots

An item with `slotButton` and `slotContent` gets its own slots for the header and the content. With `isRenderBodyByFirstOpen` the content is rendered only when the item is opened for the first time.

*props: `key-is-render-body-by-first-open`*

```html
<a-accordion
  :data="data"
>
  <template v-slot:returnsButton>
    <a-translation
      tag="span"
      text="_A_ACCORDION_EXAMPLE_RETURNS_"
    />
    <a-translation
      class="a_badge a_badge_success a_ml_2"
      tag="span"
      text="_A_ACCORDION_EXAMPLE_NEW_"
    />
  </template>
  <template v-slot:returnsContent>
    <a-translation
      tag="p"
      text="_A_ACCORDION_EXAMPLE_RETURNS_CONTENT_"
    />
    <a-button
      class="a_btn a_btn_primary"
      text="_A_ACCORDION_EXAMPLE_RETURN_BTN_"
    />
  </template>
</a-accordion>
```

```js
import {
  AAccordion,
  AButton,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    AAccordion,
    AButton,
    ATranslation,
  },
  data() {
    return {
      data: [
        {
          label: "_A_ACCORDION_EXAMPLE_SHIPPING_",
          content: "_A_ACCORDION_EXAMPLE_SHIPPING_CONTENT_",
        },
        {
          slotButton: "returnsButton",
          slotContent: "returnsContent",
          isRenderBodyByFirstOpen: true,
        },
      ],
    };
  },
};
```

## Disabled item

`disabled: true` in an item disables its button: it can not be opened and is skipped by Tab. The prop `disabled` disables all items.

*props: `disabled`*

```html
<a-accordion
  :data="data"
/>
```

```js
import {
  AAccordion,
} from "aloha-vue";

export default {
  components: {
    AAccordion,
  },
  data() {
    return {
      data: [
        {
          label: "_A_ACCORDION_EXAMPLE_SHIPPING_",
          content: "_A_ACCORDION_EXAMPLE_SHIPPING_CONTENT_",
        },
        {
          label: "_A_ACCORDION_EXAMPLE_PAYMENT_",
          content: "_A_ACCORDION_EXAMPLE_PAYMENT_CONTENT_",
        },
        {
          label: "_A_ACCORDION_EXAMPLE_RETURNS_",
          content: "_A_ACCORDION_EXAMPLE_RETURNS_CONTENT_",
          disabled: true,
        },
      ],
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| always-open | Boolean | false |  | Several items can be open at the same time. Without it, opening an item closes the others except its parents. |
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| class-body | String / Object | "" |  | Class of the content of every item. |
| class-button | String / Object |  |  | Class of the header button of every item. |
| class-header | String / Object | "" |  | Class of the heading around the header button of every item. |
| data | Array |  | yes | Items of the accordion with a label, a content and optional nested items. Other keys of an item: `disabled`, `readonly`, `isCaret`, `extra`, `slotButton`, `slotContent`, `id` (id of the header button). |
| disabled | Boolean |  |  | Disables all items. A single item is disabled with `disabled: true` in the item. |
| extra | Object |  |  | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like **"_WELCOME_{{foo}}_{{bar}}_"**, which is translated as **"Welcome {{ foo }}: {{ bar }}"**, you can pass an object like **{ foo: "abc", bar: "123" }**, and the result will be the translation **"Welcome abc: 123"**. |
| header-tag | String | "h3" |  | Heading around the header button (WAI-ARIA accordion). `h3` by default, nested items get the next level (at most `h6`). Set the level that fits the page, e.g. `h2`. A tag that is not a heading (e.g. `div`) is used as it is. |
| id | String | "accordion_…" |  | Prefix of the ids of the header buttons and the panels. Every accordion gets its own id by default. |
| ids-for-open-default | Array | [] |  | Ids of the items that are open at the start. The id of an item is its index or the value of `key-id`, nested ids are joined with `_` (e.g. `0_1`). To change the open items later use `v-model`. |
| indexes-for-open | Array | [] |  | Indexes of the items that are open. Nested indexes are joined with a dot (e.g. `0.1`). Every change of the array opens these items. |
| is-caret | Boolean | true |  | Shows the open/close icon on the right of the header. For a single item: `isCaret`. |
| key-children | String | "children" |  | Key of the nested items in an item. |
| key-class-body | String | "classBody" |  | Key of an item with an own class of its content. |
| key-class-button | String | "classButton" |  | Key of an item with an own class of its header button. |
| key-class-header | String | "classHeader" |  | Key of an item with an own class of its heading. |
| key-content | String | "content" |  | Key of the content of an item. Accepts a translation key and HTML, the HTML is sanitized. |
| key-id | String |  |  | Key of an item with its id. Without it the index of the item is used. |
| key-is-render | String | "isRender" |  | Key of an item: `false` hides the item. |
| key-is-render-body-by-first-open | String | "isRenderBodyByFirstOpen" |  | Key of an item: `true` renders the content only when the item is opened for the first time, e.g. for heavy content. |
| key-label | String | "label" |  | Key of the label of an item. Accepts a translation key and HTML, the HTML is sanitized. |
| model-value | Array |  |  | Ids of the open items (`v-model`), e.g. `['0', '1_0']`. Every opening and closing updates it. |
| one-item-always-open | Boolean | false |  | One item always stays open. Its button can not close it and has `aria-disabled="true"`. Has no effect with `always-open`. |
| prevent | Boolean |  |  | Calls `preventDefault()` on the click of a header. |
| readonly | Boolean |  |  | The headers are text, not buttons: the items can not be opened or closed. |
| stop | Boolean |  |  | Calls `stopPropagation()` on the click of a header, e.g. inside a clickable element. |
| with-gap | Boolean |  |  | Space between the items, every item gets rounded corners. |

## Slots

| name | description |
| --- | --- |
| accordionButton | Content of every header button, before the label. Props: `item`, `itemIndex`, `parentsIds`, `parentIndexes`, `id`, `currentId`. |
| accordionContent | Content of every item instead of `content`. Props: `item`, `itemIndex`, `parentsIds`, `parentIndexes`, `id`, `currentId`. |
| [item.slotButton] | Slot for the header button of one item, its name is in `slotButton`. Props as in `accordionButton`. |
| [item.slotContent] | Slot for the content of one item, its name is in `slotContent`. Props as in `accordionContent`. |

## Events

| name | type | description |
| --- | --- | --- |
| toggle | Function | An item was opened or closed. Argument: `{ idsForOpen, currentId, parentsIds, isOpen, $event, item }`. |
| update:modelValue | Function | Ids of the open items changed (`v-model`). |

## CSS variables (`scss/utils/accordion.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_accordion_color` |  | Text color of an item. |
| `--a_accordion_bg` |  | Background of an item. |
| `--a_accordion_font_size` |  | Font size of the accordion. |
| `--a_accordion_border_color` |  | Border color of the items. |
| `--a_accordion_border_width` |  | Border width of the items. |
| `--a_accordion_border_radius` |  | Corner radius of the first and last item, or of every item with a gap. |
| `--a_accordion_btn_padding_x` |  | Horizontal padding of the header button. |
| `--a_accordion_btn_padding_y` |  | Vertical padding of the header button. |
| `--a_accordion_btn_color` |  | Text color of a closed header button. |
| `--a_accordion_btn_bg` |  | Background of a closed header button. |
| `--a_accordion_btn_icon_width` |  | Size of the open/close icon. |
| `--a_accordion_btn_focus_box_shadow` |  | Focus ring of the header button. |
| `--a_accordion_btn_hover_bg` |  | Background of a hovered header button. |
| `--a_accordion_btn_disabled_color` |  | Text color of a disabled header button. |
| `--a_accordion_body_padding_x` |  | Horizontal padding of the content. |
| `--a_accordion_body_padding_y` |  | Vertical padding of the content. |
| `--a_accordion_active_color` |  | Text color of an open header button. |
| `--a_accordion_active_bg` |  | Background of an open header button. |
| `--a_accordion_with_gap_margin_bottom` |  | Space between items when they are separated by a gap. |
