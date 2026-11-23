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

## ABreadcrumb

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| ariaLabel | String | "_A_BREADCRUMB_ARIA_LABEL_" |  | Accessible name of the navigation. Accepts a translation key; use distinct names for multiple breadcrumb navigations. |
| items | Array | [] |  | Items ordered from the root to the current page. See the item fields below. |
| separator | String | "›" |  | Decorative separator between items. An empty string hides its text. |

## items

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| href | String | undefined |  | URL of a parent page. Ignored on the last item. |
| id | String \| Number | undefined |  | Optional stable key. The item index is used when omitted. |
| label | String \| Number \| Object \| Array | undefined | yes | Visible text or translation key, as supported by ATranslation. |
| to | String \| Object | undefined |  | Vue Router destination of a parent page. Takes precedence over href; ignored on the last item. |

## Translations

| key | en |
| --- | --- |
| `_A_BREADCRUMB_ARIA_LABEL_` | Breadcrumb |

## CSS variables (`scss/components/ABreadcrumb.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_breadcrumb_gap` |  | Gap between items and around separators. |
| `--a_breadcrumb_separator_color` |  | Color of the decorative separators. |
| `--a_breadcrumb_current_color` |  | Color of the current page. |
