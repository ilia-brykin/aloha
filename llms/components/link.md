# ALink (Link)

Provides a connection to an internal or external source that the user can access by clicking or keyboard tapping.

## Basic usage

*props: `text`, `href`, `to`*

```html
<a-Link
  text="https://github.com/"
  href="https://github.com/"
>
</a-Link>
<a-Link
  class="a_ml_2"
  text="Aloha"
  :to="{ name: 'PageButton' }"
>
</a-Link>
<a-Link
  class="a_ml_2"
  text="Aloha"
  to="/button"
>
</a-Link>
```

## CSS classes

CSS classes enable different visual representations of the component.

*props: `class`*

```html
<a-link
  class="a_btn a_btn_link"
  text="link"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_primary a_ml_2"
  text="primary"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_secondary a_ml_2"
  text="secondary"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_tertiary a_ml_2"
  text="tertiary"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2"
  text="success"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_info a_ml_2"
  text="info"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_warning a_ml_2"
  text="warning"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_danger a_ml_2"
  text="danger"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_dark a_ml_2"
  text="dark"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_light a_ml_2"
  text="light"
  href="https://github.com/"
>
</a-link>
```

## Outline CSS classes

In addition to modifier CSS classes, outline classes can be used to remove the colorful background, leaving the outline.

*props: `class`*

```html
<a-link
  class="a_btn a_btn_outline_primary"
  text="outline-primary"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_secondary a_ml_2"
  text="outline-secondary"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_tertiary a_ml_2"
  text="outline-tertiary"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_success a_ml_2"
  text="outline-success"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_info a_ml_2"
  text="outline-info"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_warning a_ml_2"
  text="outline-warning"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_danger a_ml_2"
  text="outline-danger"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_dark a_ml_2"
  text="outline-dark"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_light a_ml_2"
  text="outline-light"
  href="https://github.com/"
>
</a-link>
```

## Transparent CSS clases

In addition to modifier CSS classes, transparent classes can be used to blend the link into background.

*props: `class`*

```html
<a-link
  class="a_btn a_btn_transparent_primary"
  text="transparent-primary"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_secondary a_ml_2"
  text="transparent-secondary"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_tertiary a_ml_2"
  text="transparent-tertiary"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_success a_ml_2"
  text="transparent-success"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_info a_ml_2"
  text="transparent-info"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_warning a_ml_2"
  text="transparent-warning"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_danger a_ml_2"
  text="transparent-danger"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_dark a_ml_2"
  text="transparent-dark"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_light a_ml_2"
  text="transparent-light"
  href="https://github.com/"
>
</a-link>
```

## Size CSS classes

Additional sizes of the component are also achievable using CSS.

*props: `class`*

```html
<a-link
  class="a_btn a_btn_primary a_btn_large"
  text="large"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_primary a_btn_small a_ml_2"
  text="small"
  href="https://github.com/"
>
</a-link>
```

## Groups (CSS)

Series of ALink components can be wrapped in a group using CSS.

```html
<div
  class="a_btn_group"
>
  <a-link
    class="a_btn a_btn_primary"
    text="primary"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_secondary"
    text="secondary"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_success"
    text="success"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_info"
    text="info"
    href="https://github.com/"
  >
  </a-link>
</div>
<div
  class="a_btn_group a_ml_3"
>
  <a-link
    class="a_btn a_btn_outline_primary"
    text="outline-primary"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_outline_secondary"
    text="outline-secondary"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_outline_success"
    text="outline-success"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_outline_info"
    text="outline-info"
    href="https://github.com/"
  >
  </a-link>
</div>
```

## Vertical groups (CSS)

Series of ALink components can be wrapped in a group vertically using CSS.

```html
<div
  class="a_btn_group_vertical"
>
  <a-link
    class="a_btn a_btn_primary"
    text="primary"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_secondary"
    text="secondary"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_success"
    text="success"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_info"
    text="info"
    href="https://github.com/"
  >
  </a-link>
</div>
<div
  class="a_btn_group_vertical a_ml_3"
>
  <a-link
    class="a_btn a_btn_outline_primary"
    text="outline-primary"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_outline_secondary"
    text="outline-secondary"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_outline_success"
    text="outline-success"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_outline_info"
    text="outline-info"
    href="https://github.com/"
  >
  </a-link>
</div>
```

## Horizontal and vertical ALink groups (CSS)

Series of ALink components can be wrapped in a group vertically and horizontally using CSS.

```html
<div
  class="a_btn_group_vertical"
>
  <div
    class="a_btn_group"
  >
    <a-link
      class="a_btn a_btn_outline_primary"
      text="outline-primary"
      href="https://github.com/"
    >
    </a-link>
    <a-link
      class="a_btn a_btn_outline_secondary"
      text="outline-secondary"
      href="https://github.com/"
    >
    </a-link>
    <a-link
      class="a_btn a_btn_outline_success"
      text="outline-success"
      href="https://github.com/"
    >
    </a-link>
    <a-link
      class="a_btn a_btn_outline_info"
      text="outline-info"
      href="https://github.com/"
    >
    </a-link>
  </div>
  <div
    class="a_btn_group"
  >
    <a-link
      class="a_btn a_btn_outline_primary"
      text="outline-primary"
      href="https://github.com/"
    >
    </a-link>
    <a-link
      class="a_btn a_btn_outline_secondary"
      text="outline-secondary"
      href="https://github.com/"
    >
    </a-link>
    <a-link
      class="a_btn a_btn_outline_success"
      text="outline-success"
      href="https://github.com/"
    >
    </a-link>
    <a-link
      class="a_btn a_btn_outline_info"
      text="outline-info"
      href="https://github.com/"
    >
    </a-link>
  </div>
  <div
    class="a_btn_group"
  >
    <a-link
      class="a_btn a_btn_outline_primary"
      text="outline-primary"
      href="https://github.com/"
    >
    </a-link>
    <a-link
      class="a_btn a_btn_outline_secondary"
      text="outline-secondary"
      href="https://github.com/"
    >
    </a-link>
    <a-link
      class="a_btn a_btn_outline_success"
      text="outline-success"
      href="https://github.com/"
    >
    </a-link>
    <a-link
      class="a_btn a_btn_outline_info"
      text="outline-info"
      href="https://github.com/"
    >
    </a-link>
  </div>
</div>
```

## Group sizing (CSS)

CSS sizing can be applied to each group in place of applying sizing class to each ALink separately.

```html
<div
  class="a_btn_group a_btn_group_large"
>
  <a-link
    class="a_btn a_btn_primary"
    text="primary"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_secondary"
    text="secondary"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_success"
    text="success"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_info"
    text="info"
    href="https://github.com/"
  >
  </a-link>
</div>
<div
  class="a_btn_group a_btn_group_small a_ml_3"
>
  <a-link
    class="a_btn a_btn_outline_primary"
    text="outline-primary"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_outline_secondary"
    text="outline-secondary"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_outline_success"
    text="outline-success"
    href="https://github.com/"
  >
  </a-link>
  <a-link
    class="a_btn a_btn_outline_info"
    text="outline-info"
    href="https://github.com/"
  >
  </a-link>
</div>
```

## Adding icons to links

A custom icon can be provided in place of, or next to the anchor text.

*props: `icon-left`, `icon-right`*

```html
<a-link
  class="a_btn a_btn_primary"
  icon-left="Gear"
  title="GitHub"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_primary a_ml_2"
  icon-left="Gear"
  text="Aloha"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_primary a_ml_2"
  icon-right="Gear"
  text="Aloha"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_primary a_ml_2"
  icon-left="Gear"
  icon-right="Gear"
  text="Aloha"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_primary a_ml_2"
  icon-left="Gear"
  icon-right="Gear"
  title="GitHub"
  href="https://github.com/"
>
</a-link>
```

## Disabled

When a disabled state is applied to ALink, the user is not allowed to interact with the component.

*props: `disabled`*

```html
<a-link
  class="a_btn a_btn_link"
  text="primary"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_primary a_ml_2"
  text="primary"
  :disabled="true"
  :to="{ name: 'PageButton' }"
>
</a-link>
<a-link
  class="a_btn a_btn_secondary a_ml_2"
  text="secondary"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_tertiary a_ml_2"
  text="tertiary"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2"
  text="success"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_info a_ml_2"
  text="info"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_warning a_ml_2"
  text="warning"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_danger a_ml_2"
  text="danger"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_dark a_ml_2"
  text="dark"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_light a_ml_2"
  text="light"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_primary a_ml_2"
  text="outline-primary"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_secondary a_ml_2"
  text="outline-secondary"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_tertiary a_ml_2"
  text="outline-tertiary"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_success a_ml_2"
  text="outline-success"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_info a_ml_2"
  text="outline-info"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_warning a_ml_2"
  text="outline-warning"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_danger a_ml_2"
  text="outline-danger"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_dark a_ml_2"
  text="outline-dark"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_outline_light a_ml_2"
  text="outline-light"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_primary a_ml_2"
  text="transparent-primary"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_secondary a_ml_2"
  text="transparent-secondary"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_tertiary a_ml_2"
  text="transparent-tertiary"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_success a_ml_2"
  text="transparent-success"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_info a_ml_2"
  text="transparent-info"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_warning a_ml_2"
  text="transparent-warning"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_danger a_ml_2"
  text="transparent-danger"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_dark a_ml_2"
  text="transparent-dark"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_transparent_light a_ml_2"
  text="transparent-light"
  :disabled="true"
  href="https://github.com/"
>
</a-link>
```

## Loading

A spinner can be placed on either side of anchor text to indicate a loading state.

*props: `loading`, `loading-align`*

```html
<a-link
  class="a_btn a_btn_primary"
  :loading="loading"
  loading-align="left"
  text="loading-align=\"left\""
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_primary a_ml_2"
  :loading="loading"
  loading-align="right"
  text="loading-align=\"right\""
  href="https://github.com/"
>
</a-link>
<a-button
  class="a_btn a_btn_secondary a_ml_5"
  text="a-button toggle"
  @click="toggleLoading"
>
</a-button>
```

```js
import {
  ref,
} from "vue";

import {
  AButton,
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkLoading",
  components: {
    AButton,
    ALink,
  },
  setup() {
    const loading = ref(true);

    const toggleLoading = () => {
      loading.value = !loading.value;
    };

    return {
      loading,
      toggleLoading,
    };
  },
};
```

## Text Before/After

A custom character or text can be added before of after the anchor text.

*props: `text-before`, `text-after`*

```html
<a-link
  class="a_btn a_btn_primary"
  text="_SHOW_MORE_"
  text-after=" €"
  text-before="$ "
  href="https://github.com/"
>
</a-link>
```

## Customizing the Text Tag in the "ALink" Component

This example shows how to customize the text tag in the "ALink" component in Vue.js. By default, the text is rendered in a "span" tag. By using the "text-tag" prop, the text tag can be flexibly customized to use various HTML tags such as "strong", "em", or others.

*props: `text-tag`*

```html
<a-link
  class="a_btn a_btn_secondary"
  text="Aloha"
  text-tag="strong"
  href="https://github.com/"
></a-link>
```

## Safe HTML

The anchor text can be specified in HTML format using the safe-html parameter. This content is considered safe and will not be sanitized.

*props: `safe-html`*

```html
<a-link
  class="a_btn a_btn_primary"
  safe-html="_A_LINK_EXAMPLE_HTML_"
>
</a-link>
<a-link
  class="a_btn a_btn_primary a_ml_2"
  safe-html="<span onclick='alert(\"Aloha\")'>Aloha</button>"
>
</a-link>
```

## HTML

The anchor text can be specified in HTML format. The content will be sanitized.

*props: `html`*

```html
<a-link
  class="a_btn a_btn_primary"
  html="_A_LINK_EXAMPLE_HTML_"
>
</a-link>
<a-link
  class="a_btn a_btn_primary a_ml_2"
  html="<span onclick='alert(\"Aloha\")'>Aloha</button>"
>
</a-link>
```

## Responsive

Different anchor texts can be specified for different screen sizes.

*props: `text (as object)`*

```html
<a-link
  class="a_btn a_btn_primary"
  :text="{ mobile: 'Aloha', desktop: 'Aloha-desktop' }"
  href="https://github.com/"
>
</a-link>
```

## Title

Additional piece(s) of information can be shown when a mouse hovers over component.

*props: `title (as array)`*

```html
<a-link
  class="a_btn a_btn_primary"
  :title="['Aloha', '$(Aloha)']"
  text="Aloha"
  href="https://github.com/"
>
</a-link>
```

## HTML Tooltip

A multi-line information in HTML format can be shown when a mouse hovers over component.

*props: `title`, `is-title-html`, `title-placement`*

```html
<a-link
  class="a_btn a_btn_success a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: top"
  :is-title-html="true"
  title-placement="top"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2 a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: auto"
  :is-title-html="true"
  title-placement="auto"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2 a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: auto-start"
  :is-title-html="true"
  title-placement="auto-start"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2 a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: auto-end"
  :is-title-html="true"
  title-placement="auto-end"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2 a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: top-start"
  :is-title-html="true"
  title-placement="top-start"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2 a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: top-end"
  :is-title-html="true"
  title-placement="top-end"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2 a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: right"
  :is-title-html="true"
  title-placement="right"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2 a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: right-start"
  :is-title-html="true"
  title-placement="right-start"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2 a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: right-end"
  :is-title-html="true"
  title-placement="right-end"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2 a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: bottom"
  :is-title-html="true"
  title-placement="bottom"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2 a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: bottom-start"
  :is-title-html="true"
  title-placement="bottom-start"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2 a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: bottom-end"
  :is-title-html="true"
  title-placement="bottom-end"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2 a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: left"
  :is-title-html="true"
  title-placement="left"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2 a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: left-start"
  :is-title-html="true"
  title-placement="left-start"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2 a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: left-end"
  :is-title-html="true"
  title-placement="left-end"
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_success a_ml_2 a_mt_2"
  title="_A_LINK_EXAMPLE_BIG_TITLE_"
  text="placement: auto, html-title max-width 150"
  :is-title-html="true"
  title-placement="auto"
  :title-attributes="{ maxWidth: 150 }"
  href="https://github.com/"
>
</a-link>
```

## Default slot

Instead of text parameter,a default slot can be used to define custom anchor content.

*slots: `default`*

```html
<a-link
  class="a_btn a_btn_primary"
  href="https://github.com/"
>
  <span>(Aloha)</span>
</a-link>
```

## Prepend slot

A content to be preppended to anchor text can be defined by using prependLink slot.

*slots: `linkPrepend`*

```html
<a-link
  class="a_btn a_btn_primary"
  text="Aloha"
  href="https://github.com/"
>
  <template
    v-slot:linkPrepend
  >
    <span>(***)</span>
  </template>
</a-link>
```

## Append slot

A content to be appended to anchor text can be defined by using appendLink slot.

*slots: `linkAppend`*

```html
<a-link
  class="a_btn a_btn_primary"
  text="Aloha"
  href="https://github.com/"
>
  <template
    v-slot:linkAppend
  >
    <span>(***)</span>
  </template>
</a-link>
```

## Title slot

A custom content can be defined to be shown when a mouse hovers over component by using linkTitle slot.

*slots: `linkTitle`*

```html
<a-link
  class="a_btn a_btn_primary"
  text="Aloha"
  :is-title-html="true"
  href="https://github.com/"
>
  <template
    v-slot:linkTitle
  >
    <strong>(***Aloha***)</strong>
  </template>
</a-link>
```

## Complex usage

An example of a more complex usage of  ALink component.

```html
<a-link
  class="a_btn a_btn_primary"
  :text="{ desktop: 'Aloha' }"
  :text-before="{ desktop: '$ ' }"
  :icon-left="{ desktop: 'Gear', mobile: 'Code' }"
  :icon-right="{ mobile: 'Code' }"
  :title="{ desktop: 'Aloha' }"
  :text-aria-hidden="true"
  :text-screen-reader="{ desktop: 'Aloha', mobile: 'Aloha-mobile' }"
  href="https://github.com/"
>
</a-link>
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| attributes | Object | () => ({}) |  | Non-prop attributes to be passed to component. |
| class | String / Object |  |  | An extra CSS class. |
| class-default | String | a_element |  | Defines the base CSS class for the element, setting a general visual default style. |
| class-default-hidden | String | a_element__hidden |  | Specifies a CSS class to hide the element, used to control the visibility of the element in different contexts. |
| class-disabled | String | disabled |  | Specifies the CSS class applied to the link when it is disabled. |
| disabled | Boolean |  |  | Indicator of disabled state. |
| extra | Object |  |  | Extra values used in translation placeholders. |
| href | String |  |  | Specifies the URL of the page the link goes to. |
| html | String / Number / Object / Array |  |  | Anchor text in HTML format. |
| html-screen-reader | String / Number / Object / Array |  |  | Anchor content in HTML format for screen reader. |
| icon-attributes | Object | () => ({}) |  | Non-prop attributes to be passed to icon. |
| icon-class | String / Object |  |  | A CSS class for icon. |
| icon-left | String / Object |  |  | Name of the icon to be shown to the left of anchor text. |
| icon-right | String / Object |  |  | Name of the icon to be shown to the right of anchor text. |
| icon-tag | String |  |  | Tag of the inline HTML element which will then be used to display icon. |
| id | String | () => uniqueId("a_link_") |  | Specifies a unique ID for the HTML element corresponding to link. |
| is-title-html | Boolean |  |  | Specifies if the regular title or HTML tooltip are shown when a mouse hovers over component. |
| loading | Boolean | false |  | Displays spinner next to anchor text that indicates loading. |
| loading-align | String | right |  | A CSS alignment of the loading spinner. |
| loading-class | String / Object | a_spinner_small |  | A CSS class for loading spinner. |
| prevent-keyboard-repeat | Boolean | false |  | Prevents repeated activation while a keyboard key is held down. When enabled, repeated **Enter** and **Space** key events are ignored after the first press. |
| safe-html | String / Number / Object / Array |  |  | Anchor content in HTML format to be displayed. |
| safe-html-screen-reader | String / Number / Object / Array |  |  | Anchor content in HTML format for screen reader, without sanitation. |
| target | String |  |  | Specifies where the linked content will be open after clicking the link. |
| text | String / Number / Object / Array |  |  | Anchor text to be displayed. |
| text-after | String / Number / Object |  |  | Additional character or text displayed to the right of the anchor text. |
| text-aria-hidden | Boolean |  |  | Anchor text hidden from screen readers. |
| text-before | String / Number / Object |  |  | Additional character or text displayed to the left of the anchor text. |
| text-class | String |  |  | Additional CSS class for anchor text. |
| text-screen-reader | String / Number / Object / Array |  |  | Anchor text for screen reader. |
| text-tag | String | span |  | This prop allows you to customize the HTML tag in which the text within the link is rendered. |
| title | String / Number / Object / Array |  |  | Additional piece(s) of information to be shown when a mouse hovers over component. |
| title-attributes | Object | {} |  | Provides an object to set additional HTML attributes for the title of the element, allowing detailed customization of its behavior and style. |
| title-placement | String | top |  | A position relative to the link where the title will be displayed. |
| title-z-index | String / Number | auto |  | Sets the "z-index" for the element's title, determining its stacking order in the context of other overlapping elements. |
| to | Object / String |  |  | Internal link to another component by using Vue Router. |

## Slots

| name | description |
| --- | --- |
| linkAppend | Appends custom content to the anchor text. |
| linkPrepend | Prepends custom content to the anchor text. |
| linkTitle | Displays custom information when a mouse hovers over component. |
| default | Can be used to define the anchor content of the link. |
