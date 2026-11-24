# AShowMore (Show more)

The 'AShowMore' component makes it possible to hide part of the content of a web page and show it when needed.

With `text-length` the rest of the text is not in the page: the button has `aria-expanded` and `aria-controls`. With `height` the whole content is in the page and a screen reader reads it anyway: the button tells that it can be ignored. A link or button in the cut part opens the content when it gets the focus. After the click the focus stays on the button; only if the button disappears (`show-less="false"`), it goes to the content.

## Basic usage

*slots: `default`*

```html
<a-show-more>
  <ul>
    <li>1 aloha</li>
    <li>2 aloha</li>
    <li>3 aloha</li>
    <li>4 aloha</li>
    <li>5 aloha</li>
    <li>6 aloha</li>
    <li>7 aloha</li>
    <li>8 aloha</li>
    <li>9 aloha</li>
    <li>10 aloha</li>
    <li>11 aloha</li>
    <li>12 aloha</li>
  </ul>
</a-show-more>
```

## Disabled

Disabled state of AShowMore. The user is not allowed to interact with the component when it is in a disabled state.

*props: `disabled`*

```html
<a-show-more 
  :disabled="true"
>
  <ul>
    <li>1 aloha</li>
    <li>2 aloha</li>
    <li>3 aloha</li>
    <li>4 aloha</li>
    <li>5 aloha</li>
    <li>6 aloha</li>
    <li>7 aloha</li>
    <li>8 aloha</li>
    <li>9 aloha</li>
    <li>10 aloha</li>
    <li>11 aloha</li>
    <li>12 aloha</li>
  </ul>
</a-show-more>
```

## HTML

The content of the component can be defined in HTML format. Sanitization is applied to this content.

*props: `html`*

```html
<a-show-more 
  :html="html"
></a-show-more>
```

```js
import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreHtml",
  components: {
    AShowMore,
  },
  setup() {
    const html = `<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`;

    return {
      html,
    };
  },
};
```

## Safe HTML

The content of the component can be defined in safe HTML format. Sanitization is not applied to this content.

*props: `safe-html`*

```html
<a-show-more 
  :safe-html="html"
></a-show-more>
```

```js
import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreSafeHtml",
  components: {
    AShowMore,
  },
  setup() {
    const html = `<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`;

    return {
      html,
    };
  },
};
```

## Text

The content of the component can be defined as plain text.

*props: `text`*

```html
<a-show-more 
  :text="text"
></a-show-more>
```

```js
import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreText",
  components: {
    AShowMore,
  },
  setup() {
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`;

    return {
      text,
    };
  },
};
```

## Text length

The maximum number of characters after which the rest of the text is hidden. The text is cut at the end of a word and gets an ellipsis (…).

*props: `text`, `text-length`*

```html
<a-show-more 
  :text="text"
  :text-length="200"
></a-show-more>
<a-show-more 
  class="a_mt_2"
  :text="text2"
  :text-length="200"
></a-show-more>
```

```js
import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreTextLength",
  components: {
    AShowMore,
  },
  setup() {
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`;

    const text2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu v..enatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo.`;

    return {
      text,
      text2,
    };
  },
};
```

## The height of the HTML block

If this height is exceeded, a button will be shown. The unit of measure is pixel.

*props: `height`*

```html
<a-show-more 
  :html="html"
  :height="500"
></a-show-more>
```

```js
import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreHeight",
  components: {
    AShowMore,
  },
  setup() {
    const html = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`;

    return {
      html,
    };
  },
};
```

## Links in the cut part

Press Tab through the links: when a link in the cut part gets the focus, the content opens, so the focus is always visible (WCAG 2.4.11).

*props: `height`*

```html
<a-show-more
  :height="80"
>
  <p
    v-for="index in 5"
    :key="index"
  >
    <span>{{ index }}. Lorem ipsum dolor sit amet. </span>
    <a
      href="#"
      @click.prevent
    >Link {{ index }}</a>
  </p>
</a-show-more>
```

## Don't show less

Determines whether, after opening more text, the user would be offered a button to return the component to its closed state.

*props: `show-less`*

```html
<a-show-more 
  :html="html"
  :show-less="false"
></a-show-more>
```

```js
import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreNotLess",
  components: {
    AShowMore,
  },
  setup() {
    const html = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`;

    return {
      html,
    };
  },
};
```

## CSS for button

It is possible to customize CSS for the button and its parent.

*props: `btn-class`, `btn-parent-class`*

```html
<a-show-more 
  :html="html"
  btn-class="a_btn a_btn_primary"
  btn-parent-class="a_text_left"
></a-show-more>
```

```js
import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreBtnClass",
  components: {
    AShowMore,
  },
  setup() {
    const html = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`;

    return {
      html,
    };
  },
};
```

## Icons for button

You can customize the icons for the button.

*props: `btn-icon-left-less`, `btn-icon-right-less`, `btn-icon-left-more`, `btn-icon-right-more`*

```html
<a-show-more 
  :html="html"
  btn-icon-left-less="ChevronUp"
  btn-icon-right-less="ChevronUp"
  btn-icon-left-more="ChevronDown"
  btn-icon-right-more="ChevronDown"
></a-show-more>
```

```js
import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreBtnIcons",
  components: {
    AShowMore,
  },
  setup() {
    const html = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`;

    return {
      html,
    };
  },
};
```

## Title

An additional information in text form can be displayed when the mouse hovers over the buttons for displaying and hiding more text.

*props: `btn-title-less`, `btn-title-more`*

```html
<a-show-more 
  :html="html"
  btn-title-less="_A_SHOW_MORE_GROUP_TITLE_LESS_"
  btn-title-more="_A_SHOW_MORE_GROUP_TITLE_MORE_"
></a-show-more>
```

```js
import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreBtnTitle",
  components: {
    AShowMore,
  },
  setup() {
    const html = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`;

    return {
      html,
    };
  },
};
```

## HTML title

An additional information in HTML format can be displayed when the mouse hovers over the buttons for displaying and hiding more text.

*props: `btn-title-less`, `btn-title-more`, `is-btn-title-html`*

```html
<a-show-more 
  :html="html"
  btn-title-less="_A_SHOW_MORE_GROUP_TITLE_LESS_"
  btn-title-more="_A_SHOW_MORE_GROUP_TITLE_MORE_"
  :is-btn-title-html="true"
></a-show-more>
<a-show-more 
  class="a_mt_2"
  :html="html"
  btn-title-less="<strong>Aloha</strong>"
  btn-title-more="<strong>Aloha</strong>"
  :is-btn-title-html="true"
></a-show-more>
```

```js
import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreBtnTitleHtml",
  components: {
    AShowMore,
  },
  setup() {
    const html = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`;

    return {
      html,
    };
  },
};
```

## Texts for button

It is possible to customize texts for the button.

*props: `btn-text-more`, `btn-text-less`*

```html
<a-show-more 
  :html="html"
  btn-text-more="Show more aloha"
  btn-text-less="Show less aloha"
></a-show-more>
```

```js
import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreTexts",
  components: {
    AShowMore,
  },
  setup() {
    const html = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`;

    return {
      html,
    };
  },
};
```

## All text is displayed by default

The component can initially be displayed in an open state.

*props: `is-open-default`*

```html
<a-show-more 
  :html="html"
  :is-open-default="true"
></a-show-more>
```

```js
import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreOpenDefault",
  components: {
    AShowMore,
  },
  setup() {
    const html = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`;

    return {
      html,
    };
  },
};
```

## v-model

`v-model` contains whether the content is open and also opens or closes it from outside. The event `toggle` still comes.

*props: `model-value`*

```html
<a-show-more
  v-model="isOpen"
  :text="text"
  :text-length="60"
/>
<p class="a_my_3">v-model: {{ isOpen }}</p>
<a-button
  class="a_btn a_btn_secondary"
  text="_A_SHOW_MORE_EXAMPLE_TOGGLE_"
  @click="isOpen = !isOpen"
/>
```

```js
import {
  ref,
} from "vue";

import {
  AButton,
  AShowMore,
} from "aloha-vue";

export default {
  components: {
    AButton,
    AShowMore,
  },
  setup() {
    const isOpen = ref(false);
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.";

    return {
      isOpen,
      text,
    };
  },
};
```

## Slots

You can use slots with parameters: **isButtonVisible**, **isOpen**.

*slots: `button`, `default`*

```html
<a-show-more 
  btn-text-less=""
  btn-text-more=""
>
  <template
    v-slot:button="{ isButtonVisible, isOpen }"
  >
    <span>{{ isOpen ? "Show less" : "Show more" }}</span>
  </template>
  
  <template
    v-slot:default="{ isButtonVisible, isOpen }"
  >
    <p>isButtonVisible: {{ isButtonVisible }}</p>
    <p>isOpen: {{ isOpen }}</p>
    <ul>
      <li>1 aloha</li>
      <li>2 aloha</li>
      <li>3 aloha</li>
      <li>4 aloha</li>
      <li>5 aloha</li>
      <li>6 aloha</li>
      <li>7 aloha</li>
      <li>8 aloha</li>
      <li>9 aloha</li>
      <li>10 aloha</li>
      <li>11 aloha</li>
      <li>12 aloha</li>
    </ul>
  </template>
  
</a-show-more>
```

## Events

Emit toggle allows, when changing the status of the component, to call the method with one argument "isOpen", which is an indicator of the open state of the component.

*emits: `toggle`*

```html
<a-show-more 
  :html="html"
  @toggle="onToggle"
></a-show-more>
```

```js
import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreEvents",
  components: {
    AShowMore,
  },
  setup() {
    const html = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`;
      
    const onToggle = ({ isOpen }) => {
      console.log("isOpen", isOpen);
    };  

    return {
      html,
      onToggle,
    };
  },
};
```

## Exposes: Public Properties

This example shows how to work with Exposes (Public Properties).

*exposes: `buttonRef`, `containerRef`, `isOpen`, `toggleButton`*

```html
<div
  class="a_btn_group"
  role="group"
>
  <a-button
    class="a_btn a_btn_outline_primary"
    text="_A_SHOW_MORE_TEXT_TOGGLE_WITH_IS_OPEN_"
    @click="toggleShowWithIsOpen"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_primary"
    text="_A_SHOW_MORE_TEXT_TOGGLE_WITH_TOGGLE_BUTTON_"
    @click="toggleShowWithToggleButton"
  ></a-button>
</div>
<a-show-more 
  ref="showMoreRef"
  :html="html"
></a-show-more>
```

```js
import {
  nextTick,
  onMounted,
  ref,
} from "vue";

import {
  AButton,
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreExposes",
  components: {
    AButton,
    AShowMore,
  },
  setup() {
    const html = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`;
      
    const showMoreRef = ref(undefined);

    const toggleShowWithIsOpen = () => {
      showMoreRef.value.isOpen = !showMoreRef.value.isOpen;
    };

    const toggleShowWithToggleButton = () => {
      showMoreRef.value.toggleButton();
    };

    onMounted(() => {
      showMoreRef.value.containerRef.setAttribute("class", "a_bg_gray_200");
      nextTick().then(
        () => {
          showMoreRef.value.buttonRef.$el.setAttribute("class", "a_btn a_btn_primary");
        }
      );
    });

    return {
      html,
      showMoreRef,
      toggleShowWithIsOpen,
      toggleShowWithToggleButton,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| btn-attributes | Object | {} |  | Button attributes that are not explicitly defined as props. |
| btn-class | String / Object | a_btn a_btn_link a_p_0 |  | CSS button class for showing and hiding more text. |
| btn-icon-left-less | String |  |  | Left side icon for 'Show less' button. |
| btn-icon-left-more | String |  |  | Left side icon for 'Show more' button. |
| btn-icon-right-less | String |  |  | Right side icon for 'Show less' button. |
| btn-icon-right-more | String |  |  | Right side icon for 'Show more' button. |
| btn-id | String |  |  | ID for the button. |
| btn-parent-class | String | a_text_center |  | CSS class for parent button tag. |
| btn-text-less | String | _A_SHOW_MORE_LESS_ |  | Text for 'Show less' button. |
| btn-text-more | String | _A_SHOW_MORE_MORE_ |  | Text for 'Show more' button. |
| btn-title-less | String |  |  | Title for 'Show less' button. |
| btn-title-more | String |  |  | Title for 'Show more' button. |
| btn-title-placement | String |  |  | Title placement for the button, only works when is-btn-title-html is true. |
| disabled | Boolean | false |  | Whether button is disabled |
| height | Number | 200 |  | The height of the HTML block, if this height is exceeded, a button will be shown. |
| html | String |  |  | HTML to be shown inside the component. |
| id | String |  |  | Specifies a unique ID for the HTML element corresponding to the component. |
| is-btn-title-html | Boolean |  |  | If the title in the HTML format. |
| is-open-default | Boolean | false |  | All text is shown by default. |
| model-value | Boolean |  |  | Open or closed (`v-model`). Without it `is-open-default` sets the start. |
| safe-html | String |  |  | Component content in safe HTML format. |
| show-less | Boolean | true |  | Is button 'Show less' visible. |
| text | String |  |  | Content of the component in plain text format. |
| text-length | String |  |  | Text block length, in characters. |

## Slots

| name | description |
| --- | --- |
| default | Content to be displayed within the component. |
| button | Content displayed inside the button. |

## Events

| name | type | description |
| --- | --- | --- |
| toggle | Function | Triggers when a button is pressed, ({ isOpen }) => {}. |
| update:modelValue | Function | Open or closed changed (`v-model`). Comes together with `toggle`. |

## Exposes

| name | type | description |
| --- | --- | --- |
| buttonRef | Object | Button 'Show more' ref. |
| containerRef | Object | HTML-container ref. |
| isOpen | Boolean | If the 'Show more' button is clicked, and the entire HTML is visible. |
| toggleButton | Function | Function: show more or less. |

## Translations

| key | en |
| --- | --- |
| `_A_SHOW_MORE_MORE_` | Show more |
| `_A_SHOW_MORE_LESS_` | Show less |
| `_A_SHOW_MORE_LESS_SCREEN_READER_` | Show less - Button can be ignored since all content is already readable by screen readers |
| `_A_SHOW_MORE_MORE_SCREEN_READER_` | Show more - Button can be ignored since all content is already readable by screen readers |

## CSS variables (`scss/components/AShowMore.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_show_more_btn_margin_top` |  | Space between the content and the "show more" button. |
