# APopover (Popover)

**APopover** shows a small window at a button with own content: text, links, fields and buttons. Unlike **ATooltip** the content is interactive, unlike **AModal** the page stays usable.

Accessibility: a native button with `aria-haspopup="dialog"` and `aria-expanded` opens a non-modal `role="dialog"`, named by the header or by the button. The focus goes to the first element of the content, Escape and the close button give it back to the button. In the container in body Tab after the last element goes to the element after the button. Inside **AModal** Escape closes only the popover. With hover the popover can be hovered and Escape closes it (WCAG 1.4.13).

## Basic usage

A button with a header and a text. A click outside, Escape and the close button close the popover.

```html
<a-popover
  button-text="_A_POPOVER_EXAMPLE_BUTTON_"
  header="_A_POPOVER_EXAMPLE_HEADER_"
>
  <a-translation
    class="a_mb_0"
    tag="p"
    text="_A_POPOVER_EXAMPLE_TEXT_"
  />
</a-popover>
```

## Form in the popover

The focus goes to the first field. The slots default, header and footer get **close**: it closes the popover and gives the focus back to the button.

```html
<a-popover
  button-text="_A_POPOVER_EXAMPLE_RENAME_"
  header="_A_POPOVER_EXAMPLE_RENAME_"
>
  <a-input
    v-model="name"
    label="_A_POPOVER_EXAMPLE_NAME_"
  />
  <template #footer="{ close }">
    <a-button
      class="a_btn a_btn_secondary"
      text="_A_POPOVER_EXAMPLE_CANCEL_"
      @click="close"
    />
    <a-button
      class="a_btn a_btn_primary"
      text="_A_POPOVER_EXAMPLE_SAVE_"
      @click="save(close)"
    />
  </template>
</a-popover>
<p v-if="saved">{{ saved }}</p>
```

```js
import {
  ref,
} from "vue";

import {
  AButton,
  AInput,
  APopover,
} from "aloha-vue";

export default {
  components: {
    AButton,
    AInput,
    APopover,
  },
  setup() {
    const name = ref("Report 2026");
    const saved = ref("");
    // close() of the slot: the popover closes and the focus goes back to the button
    const save = close => {
      saved.value = name.value;
      close();
    };

    return {
      name,
      save,
      saved,
    };
  },
};
```

## Button with an icon

A button with only an icon needs a name: button-text-screen-reader (without it the name is "Show details"). The icon is a name of **AIconPlugin**.

```html
<a-popover
  button-class="a_btn a_btn_link"
  button-icon-left="ChatSquareText"
  button-text-screen-reader="_A_POPOVER_EXAMPLE_HELP_"
  button-title="_A_POPOVER_EXAMPLE_HELP_"
  header="_A_POPOVER_EXAMPLE_HELP_"
  placement="right"
>
  <a-translation
    class="a_mb_0"
    tag="p"
    text="_A_POPOVER_EXAMPLE_HELP_TEXT_"
  />
</a-popover>
```

## Placement

The popover changes the side when there is no space (flip) and stays in the window (shift). "auto" chooses the side with the most space.

```html
<a-select
  v-model="placement"
  :data="placements"
  :deselectable="false"
  key-id="id"
  key-label="id"
  label="placement"
  type="select"
/>
<a-popover
  :placement="placement"
  button-text="_A_POPOVER_EXAMPLE_BUTTON_"
>
  <a-translation
    class="a_mb_0"
    tag="p"
    text="_A_POPOVER_EXAMPLE_TEXT_"
  />
</a-popover>
```

```js
import {
  ref,
} from "vue";

import {
  APlacements,
  APopover,
  ASelect,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    APopover,
    ASelect,
    ATranslation,
  },
  setup() {
    const placement = ref("top");
    // "auto…": the side with the most space
    const placements = APlacements.map(id => ({ id }));

    return {
      placement,
      placements,
    };
  },
};
```

## Open on hover

trigger="hover" opens the popover after open-delay and closes it after close-delay. The popover can be hovered, Escape closes it. The keyboard uses the button as before, a click keeps the popover open.

```html
<a-popover
  :has-close-button="false"
  button-text="_A_POPOVER_EXAMPLE_HOVER_BUTTON_"
  trigger="hover"
>
  <a-translation
    class="a_mb_0"
    tag="p"
    text="_A_POPOVER_EXAMPLE_HOVER_TEXT_"
  />
</a-popover>
```

## v-model and events

With v-model the state is controlled from outside. open and close get the trigger: **click**, **hover**, **close**, **escape**, **outside**, **focusout**, **api**, **model**. The methods open, close and toggle work with a ref.

```html
<a-button
  class="a_btn a_btn_outline_primary"
  text="_A_POPOVER_EXAMPLE_TOGGLE_"
  @click="isOpen = !isOpen"
/>
<a-popover
  v-model="isOpen"
  :close-on-click-outside="false"
  button-text="_A_POPOVER_EXAMPLE_BUTTON_"
  @close="lastEvent = { close: $event }"
  @open="lastEvent = { open: $event }"
>
  <a-translation
    class="a_mb_0"
    tag="p"
    text="_A_POPOVER_EXAMPLE_TEXT_"
  />
</a-popover>
<pre>v-model: {{ isOpen }}, {{ lastEvent }}</pre>
```

```js
import {
  ref,
} from "vue";

import {
  AButton,
  APopover,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    AButton,
    APopover,
    ATranslation,
  },
  setup() {
    const isOpen = ref(false);
    // open / close get { trigger }: click, hover, close, escape, outside, focusout, api or model
    const lastEvent = ref(undefined);

    return {
      isOpen,
      lastEvent,
    };
  },
};
```

## Own trigger

The slot trigger replaces the button, e.g. with an own **AButton**. **v-bind="attributes"** gives it the id, the ARIA attributes and the events. Use a button: it is focusable and works with Enter and Space.

```html
<a-popover
  header="_A_POPOVER_EXAMPLE_NOTIFICATIONS_"
>
  <template #trigger="{ attributes }">
    <a-button
      v-bind="attributes"
      class="a_btn a_btn_primary"
      icon-left="Bell"
      text="_A_POPOVER_EXAMPLE_NOTIFICATIONS_"
    />
  </template>
  <a-translation
    class="a_mb_0"
    tag="p"
    text="_A_POPOVER_EXAMPLE_NOTIFICATIONS_TEXT_"
  />
</a-popover>
```

## Nested popovers

A popover in a popover: the focus and the clicks in the inner one keep the outer one open, Escape closes the inner one first, a click in the outer one closes only the inner one.

```html
<a-popover
  button-text="_A_POPOVER_EXAMPLE_BUTTON_"
  header="_A_POPOVER_EXAMPLE_HEADER_"
>
  <a-translation
    tag="p"
    text="_A_POPOVER_EXAMPLE_TEXT_"
  />
  <a-popover
    button-class="a_btn a_btn_link"
    button-text="_A_POPOVER_EXAMPLE_HELP_"
    placement="right"
  >
    <a-translation
      class="a_mb_0"
      tag="p"
      text="_A_POPOVER_EXAMPLE_HELP_TEXT_"
    />
  </a-popover>
</a-popover>
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| button-attributes | Object | () => ({}) |  | Attributes of the button. |
| button-class | String / Object / Array | "a_btn a_btn_secondary" |  | Class of the button. The default can be set with **AComponentsPlugin**. |
| button-icon-left | String / Object |  |  | Icon of the button: a name of **AIconPlugin** or an SVG. |
| button-icon-right | String / Object |  |  | Icon of the button: a name of **AIconPlugin** or an SVG. |
| button-text | String / Number |  |  | Text of the button. Accepts a translation key. |
| button-text-screen-reader | String / Number |  |  | Name of the button for the screen reader, e.g. for a button with only an icon. |
| button-title | String / Number |  |  | Tooltip of the button. |
| close-delay | Number | 200 |  | trigger hover: delay in ms before closing. |
| close-on-click-outside | Boolean | true |  | A click outside closes the popover. |
| close-on-focus-out | Boolean | true |  | The popover closes when the focus leaves the button and the popover. |
| disabled | Boolean |  |  | Disables the button. |
| extra | Object |  |  | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like **"_WELCOME_{{foo}}_{{bar}}_"**, which is translated as **"Welcome {{ foo }}: {{ bar }}"**, you can pass an object like **{ foo: "abc", bar: "123" }**, and the result will be the translation **"Welcome abc: 123"**. |
| focus-on-open | String | "first" |  | Focus after opening: first (the first element of the content), popover (the popover) or none. Opening by hover does not move the focus. |
| has-arrow | Boolean | true |  | Shows the arrow to the button. |
| has-close-button | Boolean | true |  | Shows the close button in the header. |
| header | String / Number |  |  | Header of the popover, also the name of the dialog. Accepts a translation key. |
| header-tag | String | "div" |  | Tag of the header, e.g. h2 for a heading of the page structure. |
| id | String | uniqueId("a_popover_") |  | Unique identifier for the component |
| in-body | Boolean | true |  | The popover is in a container in body, so a parent with overflow: hidden does not cut it. |
| is-bottom-sheet-on-mobile | Boolean | true |  | On a small screen (**AMobilePlugin**) the popover is a panel at the bottom of the window with a backdrop, without the arrow. |
| model-value | Boolean |  |  | Open state for v-model. Without it the popover has its own state. |
| offset | Number | 8 |  | Distance to the button in px. |
| open-delay | Number | 100 |  | trigger hover: delay in ms before opening. |
| placement | String | "bottom" |  | Side of the popover: top, right, bottom, left (with -start / -end) or auto. |
| popover-attributes | Object | () => ({}) |  | Attributes of the popover. |
| popover-class | String / Object / Array |  |  | Class of the popover. |
| popper-container-id | String | "a_tooltip_container" |  | Id of the container in body for in-body. |
| trigger | String | "click" |  | click (default) or hover. With hover the keyboard still uses the button. |
| use-escape | Boolean | true |  | Escape closes the popover. |
| z-index | Number / String |  |  | Stack order. Without it the token --a_popover_z_index: above modals, so a popover in AModal is visible. Set a smaller value if the popover must stay under own fixed layers. |

## Events

| name | type | description |
| --- | --- | --- |
| close | Function | After closing: **{ trigger }**. |
| open | Function | After opening: **{ trigger }**. |
| update:modelValue | Function | The new open state (v-model). |

## Slots

| name | description |
| --- | --- |
| button | Own content of the button. |
| default | Content of the popover. Props: **{ close }**. |
| footer | Footer, e.g. buttons. Props: **{ close }**. |
| header | Own header instead of the prop header, also the name of the dialog. Props: **{ close }**. |
| trigger | Own element instead of the button. Bind **attributes** to it (id, ARIA, events). Props: **{ attributes, isOpen, close }**. |

## Methods

| name | description |
| --- | --- |
| close | Closes the popover. |
| open | Opens the popover. |
| toggle | Opens or closes the popover. |

## Translations

| key | en |
| --- | --- |
| `_A_POPOVER_BUTTON_` | Show details |
| `_A_POPOVER_CLOSE_` | Close |

## CSS variables (`scss/components/APopover.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_popover_z_index` |  | Stack order of the popover and the backdrop of the bottom sheet, above modals. The prop z-index sets it. |
| `--a_popover_backdrop_bg` |  | Backdrop behind the bottom sheet. |
| `--a_popover_sheet_max_height` |  | Maximum height of the bottom sheet. |
| `--a_popover_bg` |  | Background of the popover and its arrow. |
| `--a_popover_color` |  | Text color of the popover. |
| `--a_popover_font_size` |  | Font size of the popover. |
| `--a_popover_border_width` |  | Border width of the popover and its arrow. |
| `--a_popover_border_color` |  | Border color of the popover, its arrow and the footer. |
| `--a_popover_border_radius` |  | Corner radius of the popover. |
| `--a_popover_box_shadow` |  | Shadow of the popover. |
| `--a_popover_max_width` |  | Maximum width of the popover. Not wider than the window. |
| `--a_popover_max_height` |  | Maximum height of the body. Longer content scrolls. |
| `--a_popover_padding_x` |  | Horizontal padding of the header, the body and the footer. |
| `--a_popover_padding_y` |  | Vertical padding of the header, the body and the footer. |
| `--a_popover_title_font_size` |  | Font size of the header. |
| `--a_popover_title_font_weight` |  | Font weight of the header. |
| `--a_popover_arrow_size` |  | Size of the arrow (side of the rotated square). |
