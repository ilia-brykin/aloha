# ABreadcrumb (Breadcrumb)

**ABreadcrumb** shows the path to the current page in a navigation landmark with an ordered list.

## Basic usage

Parent pages use `href`. Items without a destination are text. The last item is always the current page: text with `aria-current="page"`, even if it has a destination. An empty list renders nothing. `separator` changes the decorative separator, which is hidden from screen readers.

```html
<a-breadcrumb
  :items="items"
  separator="/"
></a-breadcrumb>
```

```js
import {
  ABreadcrumb,
} from "aloha-vue";

export default {
  name: "PageBreadcrumbBasic",
  components: {
    ABreadcrumb,
  },
  setup() {
    const items = [
      { label: "Home", href: import.meta.env.BASE_URL },
      { label: "Components" },
      { label: "Breadcrumb" },
    ];

    return {
      items,
    };
  },
};
```

## Vue Router

`to` accepts a path or route object and uses **ALink**. Only the last item is marked as the current page. `label` and `aria-label` accept translation keys and update when the language changes.

```html
<a-breadcrumb
  :items="items"
></a-breadcrumb>
```

```js
import {
  ABreadcrumb,
} from "aloha-vue";

export default {
  name: "PageBreadcrumbRouter",
  components: {
    ABreadcrumb,
  },
  setup() {
    const items = [
      { id: "home", label: "Home", to: { name: "PageStart" } },
      { id: "start", label: "Getting started", to: { name: "PageQuickStart" } },
      { id: "breadcrumb", label: "Breadcrumb" },
    ];

    return {
      items,
    };
  },
};
```

## Icons and placeholders

`icon` shows an icon in front of an item, e.g. a house for the start page. `label` can contain placeholders like `{{ number }}`; the values come from the prop `extra` or from `item.extra`.

*props: `extra`*

```html
<a-breadcrumb
  :items="items"
  :extra="{ number: 2026114 }"
/>
```

```js
import {
  ABreadcrumb,
} from "aloha-vue";

// i18n: "_A_BREADCRUMB_EXAMPLE_ORDER_": "Order {{ number }}"

export default {
  components: {
    ABreadcrumb,
  },
  setup() {
    const items = [
      { label: "_A_BREADCRUMB_EXAMPLE_HOME_", href: "/", icon: "House" },
      { label: "_A_BREADCRUMB_EXAMPLE_ORDERS_", href: "/orders" },
      // the placeholder {{ number }} comes from the prop extra (or from item.extra)
      { label: "_A_BREADCRUMB_EXAMPLE_ORDER_" },
    ];

    return {
      items,
    };
  },
};
```

## Long trail

With `max-items` a deep trail is shortened to the first item, a button `…` and the last items. The button has a text for screen readers with the number of hidden levels. After a click all items are shown and the focus moves to the first item that was hidden.

*props: `max-items`*

```html
<!-- Home › … › Laptops › Aloha Book 14 -->
<a-breadcrumb
  :items="items"
  :max-items="3"
/>
```

```js
import {
  ABreadcrumb,
} from "aloha-vue";

export default {
  components: {
    ABreadcrumb,
  },
  setup() {
    const items = [
      { label: "Home", href: "/", icon: "House" },
      { label: "Products", href: "/products" },
      { label: "Electronics", href: "/products/electronics" },
      { label: "Computers", href: "/products/electronics/computers" },
      { label: "Laptops", href: "/products/electronics/computers/laptops" },
      { label: "Aloha Book 14" },
    ];

    return {
      items,
    };
  },
};
```

## ABreadcrumb

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| aria-label | String | "_A_BREADCRUMB_ARIA_LABEL_" |  | Accessible name of the navigation. Accepts a translation key; use distinct names for multiple breadcrumb navigations. |
| extra | Object |  |  | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like **"_WELCOME_{{foo}}_{{bar}}_"**, which is translated as **"Welcome {{ foo }}: {{ bar }}"**, you can pass an object like **{ foo: "abc", bar: "123" }**, and the result will be the translation **"Welcome abc: 123"**. |
| items | Array | [] |  | Items ordered from the root to the current page. See the item fields below. |
| max-items | Number |  |  | Maximum number of visible items (at least 2). A longer trail shows the first item, a button `…` and the last `max-items - 1` items. The button shows all items and moves the focus to the first item that was hidden. A new `items` array is collapsed again. |
| separator | String | "›" |  | Decorative separator between items, hidden from screen readers. An empty string shows no separator. |

## items

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| extra | Object |  |  | Values for the placeholders of this `label`. Overrides the prop `extra` of the component. |
| href | String |  |  | URL of a parent page. Ignored on the last item. |
| icon | String |  |  | Icon in front of the text, a name registered with `AIconPlugin`. It is decorative and hidden from screen readers. |
| id | String / Number |  |  | Optional stable key. The item index is used when omitted. |
| label | String / Number / Object / Array |  | yes | Visible text or translation key, as supported by ATranslation. |
| to | String / Object |  |  | Vue Router destination of a parent page. Takes precedence over href; ignored on the last item. |

## Translations

| key | en |
| --- | --- |
| `_A_BREADCRUMB_ARIA_LABEL_` | Breadcrumb |
| `_A_BREADCRUMB_SHOW_HIDDEN_` | Show hidden levels ({{ count }}) |

## CSS variables (`scss/components/ABreadcrumb.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_breadcrumb_gap` |  | Gap between items and around separators. |
| `--a_breadcrumb_separator_color` |  | Color of the decorative separators. |
| `--a_breadcrumb_current_color` |  | Color of the current page. |
| `--a_breadcrumb_icon_gap` |  | Gap between the icon and the text of an item. |
| `--a_breadcrumb_more_padding_x` |  | Horizontal padding of the "…" button of a collapsed trail. |
