# ANavbar (Navbar)

**ANavbar** is a horizontal navigation: links, submenus with any number of levels, a logo and buttons in the slots. Items that do not fit go into the button "…", on a small screen the navigation opens in a drawer.

Accessibility: a `nav` landmark with a name and the WAI-ARIA pattern *disclosure navigation* (no menu roles). A submenu opens with a native button with `aria-expanded` and `aria-controls`, the current page has `aria-current="page"`. Arrows move between the items, ArrowDown and ArrowRight open a level, ArrowLeft and Escape close it and give the focus back to its button. A click or the focus outside closes all submenus.

Mobile: below the breakpoint of **AMobilePlugin** a button opens the navigation as accordion in **ADrawer**.

## Basic usage

Links with `href` or `to`, a button with a submenu (levels without limit), an item with a link and a submenu (split). `isActive` marks the current page and the way to it, the event `navigate` comes after a click on a link.

```html
<a-navbar
  :data="data"
  @navigate="onNavigate"
>
  <template v-slot:start>
    <strong>Aloha</strong>
  </template>
  <template v-slot:end>
    <a-button
      class="a_btn a_btn_primary"
      text="Login"
    />
  </template>
</a-navbar>
<div class="a_mt_3">navigate: {{ lastLabel }}</div>
```

```js
import {
  computed,
  ref,
} from "vue";

import {
  AButton,
  ANavbar,
} from "aloha-vue";

const DATA = [
  { id: "home", label: "Home", href: "#navbar_home" },
  {
    id: "products",
    label: "Products",
    children: [
      { id: "laptops", label: "Laptops", href: "#navbar_laptops" },
      {
        id: "accessories",
        label: "Accessories",
        children: [
          { id: "bags", label: "Bags", href: "#navbar_bags" },
          {
            id: "cables",
            label: "Cables",
            children: [
              { id: "usb", label: "USB", href: "#navbar_usb" },
              { id: "hdmi", label: "HDMI", href: "#navbar_hdmi" },
            ],
          },
        ],
      },
      { id: "phones", label: "Phones", href: "#navbar_phones", disabled: true },
    ],
  },
  {
    id: "docs",
    label: "Docs",
    href: "#navbar_docs",
    children: [
      { id: "start", label: "Quick start", href: "#navbar_start" },
      { id: "api", label: "API", href: "#navbar_api" },
    ],
  },
  { id: "contact", label: "Contact", href: "#navbar_contact" },
];

export default {
  name: "PageNavbarBasic",
  components: {
    AButton,
    ANavbar,
  },
  setup() {
    const activeId = ref("home");
    const lastLabel = ref("");

    // isActive: aria-current="page" and the way to it
    const setActive = items => items.map(item => ({
      ...item,
      isActive: item.id === activeId.value,
      children: item.children && setActive(item.children),
    }));

    const data = computed(() => setActive(DATA));

    const onNavigate = ({ item }) => {
      activeId.value = item.id;
      lastLabel.value = item.label;
    };

    return {
      data,
      lastLabel,
      onNavigate,
    };
  },
};
```

## Overflow

`more`: the items that do not fit go into the button "…" (ResizeObserver). `wrap`: a second line. `scroll`: horizontal scroll.

```html
<a-radio
  v-model="overflow"
  :data="dataOverflow"
  :is-inline="true"
  label="overflow"
/>
<div
  class="a_mt_3"
  style="max-width: 30rem;"
>
  <a-navbar
    :data="data"
    :overflow="overflow"
  />
</div>
```

```js
import {
  ref,
} from "vue";

import {
  ANavbar,
  ARadio,
} from "aloha-vue";

export default {
  name: "PageNavbarOverflow",
  components: {
    ANavbar,
    ARadio,
  },
  setup() {
    const overflow = ref("more");
    const dataOverflow = [
      { label: "more", value: "more" },
      { label: "wrap", value: "wrap" },
      { label: "scroll", value: "scroll" },
    ];
    const data = [
      { id: "home", label: "Home", href: "#navbar_home" },
      { id: "news", label: "News", href: "#navbar_news" },
      { id: "products", label: "Products", children: [
        { id: "laptops", label: "Laptops", href: "#navbar_laptops" },
        { id: "phones", label: "Phones", href: "#navbar_phones" },
      ] },
      { id: "services", label: "Services", href: "#navbar_services" },
      { id: "support", label: "Support", href: "#navbar_support" },
      { id: "blog", label: "Blog", href: "#navbar_blog" },
      { id: "careers", label: "Careers", href: "#navbar_careers" },
      { id: "contact", label: "Contact", href: "#navbar_contact" },
    ];

    return {
      data,
      dataOverflow,
      overflow,
    };
  },
};
```

## Hover

With `trigger="hover"` the submenus open with `open-delay` and close with `close-delay`. The click and the keyboard still work.

```html
<a-navbar
  :data="data"
  :open-delay="100"
  :close-delay="300"
  trigger="hover"
/>
```

```js
import {
  ANavbar,
} from "aloha-vue";

export default {
  name: "PageNavbarHover",
  components: {
    ANavbar,
  },
  setup() {
    const data = [
      { id: "home", label: "Home", href: "#navbar_home" },
      {
        id: "products",
        label: "Products",
        children: [
          { id: "laptops", label: "Laptops", href: "#navbar_laptops" },
          {
            id: "accessories",
            label: "Accessories",
            children: [
              { id: "bags", label: "Bags", href: "#navbar_bags" },
              {
                id: "cables",
                label: "Cables",
                children: [
                  { id: "usb", label: "USB", href: "#navbar_usb" },
                  { id: "hdmi", label: "HDMI", href: "#navbar_hdmi" },
                ],
              },
            ],
          },
          { id: "phones", label: "Phones", href: "#navbar_phones", disabled: true },
        ],
      },
      {
        id: "docs",
        label: "Docs",
        href: "#navbar_docs",
        children: [
          { id: "start", label: "Quick start", href: "#navbar_start" },
          { id: "api", label: "API", href: "#navbar_api" },
        ],
      },
      { id: "contact", label: "Contact", href: "#navbar_contact" },
    ];

    return {
      data,
    };
  },
};
```

## Slot item

Own content of every item, e.g. a counter. The slot gets item, level, isOpen and isMore.

```html
<a-navbar
  :data="data"
>
  <template v-slot:item="{ item }">
    <span>{{ item.label }}</span>
    <span
      v-if="item.count"
      class="a_badge a_badge_danger a_ms_2"
    >{{ item.count }}</span>
  </template>
</a-navbar>
```

```js
import {
  ANavbar,
} from "aloha-vue";

export default {
  name: "PageNavbarSlotItem",
  components: {
    ANavbar,
  },
  setup() {
    const data = [
      { id: "inbox", label: "Inbox", href: "#navbar_inbox", count: 12 },
      { id: "tasks", label: "Tasks", children: [
        { id: "open", label: "Open", href: "#navbar_open", count: 3 },
        { id: "done", label: "Done", href: "#navbar_done" },
      ] },
      { id: "settings", label: "Settings", href: "#navbar_settings" },
    ];

    return {
      data,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| close-delay | Number | 200 |  | Delay (ms) before a submenu closes when the pointer leaves it (trigger hover). |
| data | Array | () => [] |  | The items: `id`, `label`, `to`, `href`, `target`, `icon`, `isActive`, `disabled`, `children`. |
| drawer-placement | String | "left" |  | Side of the drawer on mobile: left or right. |
| extra | Object |  |  | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like **"_WELCOME_{{foo}}_{{bar}}_"**, which is translated as **"Welcome {{ foo }}: {{ bar }}"**, you can pass an object like **{ foo: "abc", bar: "123" }**, and the result will be the translation **"Welcome abc: 123"**. |
| id | String | () => uniqueId("a_navbar_") |  | Id of the navigation. The buttons and submenus get ids from it. |
| is-end-in-drawer | Boolean | false |  | Mobile: the slot end is shown in the drawer instead of the bar. |
| is-mobile-menu | Boolean | true |  | Mobile (AMobilePlugin): a button opens the navigation in a drawer. False: the bar on every screen. |
| is-sticky | Boolean | false |  | The bar stays at the top while the page scrolls. |
| key-children | String | "children" |  | Key of the child items. |
| key-id | String | "id" |  | Key of the id of an item. |
| key-label | String | "label" |  | Key of the text of an item. |
| label | String |  |  | Name of the navigation landmark. Without it: the text navigation of texts. |
| open-delay | Number | 100 |  | Delay (ms) before a submenu opens on hover (trigger hover). |
| overflow | String | "more" |  | What happens to the items that do not fit: `more`, `wrap` or `scroll`. |
| texts | Object | {} |  | Own texts: `drawer`, `more`, `navigation`, `submenu`, `toggle`. A missing key falls back to the default. |
| trigger | String | "click" |  | `click` (default) or `hover`. |

## Events

| name | type | description |
| --- | --- | --- |
| navigate | Function | After a click on a link: { item }. The submenus and the drawer are closed. |

## Slots

| name | description |
| --- | --- |
| end | Content at the end of the bar, e.g. buttons. |
| item | Own content of an item: { item, level, isOpen, isMore }. |
| start | Content at the start of the bar, e.g. a logo. |

## Translations

| key | en |
| --- | --- |
| `_A_NAVBAR_DRAWER_` | Menu |
| `_A_NAVBAR_MORE_` | More |
| `_A_NAVBAR_NAVIGATION_` | Main navigation |
| `_A_NAVBAR_SUBMENU_` | Submenu: {{ label }} |
| `_A_NAVBAR_TOGGLE_` | Open the menu |

## CSS variables (`scss/components/ANavbar.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_navbar_bg` |  | Background of the bar. |
| `--a_navbar_color` |  | Text color of the bar and the submenus. |
| `--a_navbar_border_color` |  | Border under the bar and of the submenus. |
| `--a_navbar_border_width` |  | Width of the border under the bar. |
| `--a_navbar_gap` |  | Space between start, the list and end. |
| `--a_navbar_items_gap` |  | Space between the items of the bar. |
| `--a_navbar_min_height` |  | Minimum height of the bar. |
| `--a_navbar_padding_x` |  | Horizontal padding of the bar. |
| `--a_navbar_padding_y` |  | Vertical padding of the bar. |
| `--a_navbar_z_index` |  | Stack order of the sticky bar. |
| `--a_navbar_link_color` |  | Text color of a link or a button. |
| `--a_navbar_link_hover_color` |  | Text color of a hovered link. |
| `--a_navbar_link_hover_bg` |  | Background of a hovered link. |
| `--a_navbar_link_active_color` |  | Color of the current page and the way to it. |
| `--a_navbar_link_active_font_weight` |  | Font weight of the current page. |
| `--a_navbar_active_border_width` |  | Line under the current page in the bar. |
| `--a_navbar_link_padding_x` |  | Horizontal padding of a link. |
| `--a_navbar_link_padding_y` |  | Vertical padding of a link. |
| `--a_navbar_link_border_radius` |  | Corner radius of a link. |
| `--a_navbar_submenu_bg` |  | Background of a submenu. |
| `--a_navbar_submenu_min_width` |  | Minimum width of a submenu. |
| `--a_navbar_submenu_padding` |  | Padding of a submenu. |
| `--a_navbar_submenu_border_radius` |  | Corner radius of a submenu. |
| `--a_navbar_submenu_box_shadow` |  | Shadow of a submenu. |
| `--a_navbar_submenu_z_index` |  | Stack order of a submenu. |
| `--a_navbar_accordion_indent` |  | Indent of a level in the drawer. |
