# ADisclosure (Show/hide content)

The component allows users to show or hide text content by clicking on a button. The button toggles between "Show More" and "Show Less," depending on whether the full text content is already displayed or not.

## Basic usage

*props: `text-less`, `text-more`*

```html
<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
></a-disclosure>
```

```js
import { 
  ADisclosure,
} from "aloha-vue";
    
export default {
  name: "PageDisclosureBasic",
  components: {
    ADisclosure,
  },
  setup() {
    const textLess = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.";
    const textMore = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
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
      textLess,
      textMore,
    };
  },
};
```

## Disabling the "Show More/Show Less" Button

In this example, you will learn how to disable the "Show More/Show Less" button in the component, preventing users from toggling the text content, even if the button is visible.

*props: `disabled`*

```html
<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  :disabled="true"
></a-disclosure>
```

```js
import { 
  ADisclosure,
} from "aloha-vue";
    
export default {
  name: "PageDisclosureDisabled",
  components: {
    ADisclosure,
  },
  setup() {
    const textLess = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.";
    const textMore = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
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
      textLess,
      textMore,
    };
  },
};
```

## Securely Displaying HTML Content

In this example, you will learn how to securely display HTML content in the component using the **html-less** and **html-more** props. These props allow you to use HTML-formatted text while implementing security measures to prevent malicious code. It utilizes the DOMPurify.sanitize() method to clean the content and ensure no harmful code is present in the displayed HTML output.

*props: `html-less`, `html-more`*

```html
<a-disclosure
  :html-less="htmlLess"
  :html-more="htmlMore"
></a-disclosure>
```

```js
import { 
  ADisclosure,
} from "aloha-vue";
    
export default {
  name: "PageDisclosureHtml",
  components: {
    ADisclosure,
  },
  setup() {
    const htmlLess = `<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna.</p>`;
    const htmlMore = `<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
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
      htmlLess,
      htmlMore,
    };
  },
};
```

## Displaying Trusted HTML Content

This example explains how to safely display trusted HTML content in the component using the safe-html-less and safe-html-more props. These props allow direct display of HTML-formatted text when you are confident that the provided HTML code is trustworthy and does not contain harmful elements. Unlike the previous props (html-less and html-more), HTML content is rendered here without using DOMPurify.sanitize().

*props: `safe-html-less`, `safe-html-more`*

```html
<a-disclosure
  :safe-html-less="htmlLess"
  :safe-html-more="htmlMore"
></a-disclosure>
```

```js
import { 
  ADisclosure,
} from "aloha-vue";
    
export default {
  name: "PageDisclosureSafeHtml",
  components: {
    ADisclosure,
  },
  setup() {
    const htmlLess = `<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna.</p>`;
    const htmlMore = `<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
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
      htmlLess,
      htmlMore,
    };
  },
};
```

## Controlling the Visibility of the "Show More/Show Less" Button

In this example, you will learn how to control the visibility of the "Show More/Show Less" button in the component using the **show-less** prop to determine whether the button should be displayed or not.

*props: `show-less`*

```html
<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  :show-less="false"
></a-disclosure>
```

```js
import { 
  ADisclosure,
} from "aloha-vue";
    
export default {
  name: "PageDisclosureNotLess",
  components: {
    ADisclosure,
  },
  setup() {
    const textLess = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.";
    const textMore = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
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
      textLess,
      textMore,
    };
  },
};
```

## Customizing CSS Classes for the "Show More/Show Less" Button and Its Parent Element

This example explains how to influence the appearance of the "Show More/Show Less" button in the component by customizing CSS classes. It uses the **btn-class** prop to set the CSS classes for the button itself and the **btn-parent-class** prop to specify the CSS class for the parent element of the button. These customizations allow you to style the button's appearance and positioning according to your preferences.

*props: `btn-class`, `btn-parent-class`*

```html
<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  btn-class="a_btn a_btn_primary"
  btn-parent-class="a_text_left"
></a-disclosure>
```

```js
import { 
  ADisclosure,
} from "aloha-vue";
    
export default {
  name: "PageDisclosureBtnClass",
  components: {
    ADisclosure,
  },
  setup() {
    const textLess = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.";
    const textMore = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
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
      textLess,
      textMore,
    };
  },
};
```

## Button Icons

This example demonstrates how to use icons in the component to enhance the "Show More/Show Less" button and convey information about the button's state. You can place icons on both the left and right sides of the button. It utilizes props to set the icons for shorter and longer text content.

*props: `btn-icon-left-less`, `btn-icon-right-less`, `btn-icon-left-more`, `btn-icon-right-more`*

```html
<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  btn-icon-left-less="ChevronUp"
  btn-icon-right-less="ChevronUp"
  btn-icon-left-more="ChevronDown"
  btn-icon-right-more="ChevronDown"
></a-disclosure>
```

```js
import { 
  ADisclosure,
} from "aloha-vue";
    
export default {
  name: "PageDisclosureBtnIcons",
  components: {
    ADisclosure,
  },
  setup() {
    const textLess = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.";
    const textMore = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
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
      textLess,
      textMore,
    };
  },
};
```

## Customizing Title Texts for the "Show More/Show Less" Button

This example shows how to individually customize title texts for the "Show More/Show Less" button in the component. This allows you to provide user-friendly and meaningful titles for the button to give users a clear idea of what happens when they click the button.

*props: `btn-title-less`, `btn-title-more`*

```html
<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  btn-title-less="_A_DISCLOSURE_GROUP_TITLE_LESS_"
  btn-title-more="_A_DISCLOSURE_GROUP_TITLE_MORE_"
></a-disclosure>
```

```js
import { 
  ADisclosure,
} from "aloha-vue";
    
export default {
  name: "PageDisclosureBtnTitle",
  components: {
    ADisclosure,
  },
  setup() {
    const textLess = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.";
    const textMore = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
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
      textLess,
      textMore,
    };
  },
};
```

## HTML-Formatted Titles for the "Show More/Show Less" Button

This example demonstrates how to use HTML-formatted titles for the "Show More/Show Less" button in the component. By using the **is-btn-title-html** prop, you can specify that the provided button titles should be interpreted and rendered as HTML.

*props: `btn-title-less`, `btn-title-more`, `is-btn-title-html`*

```html
<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  btn-title-less="_A_DISCLOSURE_GROUP_TITLE_LESS_"
  btn-title-more="_A_DISCLOSURE_GROUP_TITLE_MORE_"
  :is-btn-title-html="true"
></a-disclosure>
<a-disclosure
  class="a_mt_2"
  :text-less="textLess"
  :text-more="textMore"
  btn-title-less="<strong>Aloha</strong>"
  btn-title-more="<strong>Aloha</strong>"
  :is-btn-title-html="true"
></a-disclosure>
```

```js
import { 
  ADisclosure,
} from "aloha-vue";
    
export default {
  name: "PageDisclosureBtnTitleHtml",
  components: {
    ADisclosure,
  },
  setup() {
    const textLess = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.";
    const textMore = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
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
      textLess,
      textMore,
    };
  },
};
```

## Customizing Default Texts for the "Show More/Show Less" Button

In this example, you will learn how to customize the default texts for the "Show More/Show Less" button in the component.

*props: `btn-text-less`, `btn-text-more`*

```html
<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  btn-text-less="Show less aloha"
  btn-text-more="Show more aloha"
></a-disclosure>
```

```js
import { 
  ADisclosure,
} from "aloha-vue";
    
export default {
  name: "PageDisclosureBtnTexts",
  components: {
    ADisclosure,
  },
  setup() {
    const textLess = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.";
    const textMore = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
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
      textLess,
      textMore,
    };
  },
};
```

## Default Display of Extended Text Content

This example explains how to control the default display of the extended text content in the component. Using the **is-open-default** prop, you can specify whether the extended text content **(text-more)** should be displayed by default when the page initially loads.

*props: `is-open-default`*

```html
<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  :is-open-default="true"
></a-disclosure>
```

```js
import { 
  ADisclosure,
} from "aloha-vue";
    
export default {
  name: "PageDisclosureOpenDefault",
  components: {
    ADisclosure,
  },
  setup() {
    const textLess = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.";
    const textMore = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
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
      textLess,
      textMore,
    };
  },
};
```

## Using Slots for Custom Styling

This example demonstrates how to use slots to individually style the different parts of the component. It utilizes three slots: **button**, **less**, and **more** to customize the button and the underlying text sections.

*slots: `button`, `less`, `more`*

```html
<a-disclosure
  btn-text-less=""
  btn-text-more=""
>
  <template
    v-slot:button="{ isButtonVisible, isOpen }"
  >
    <span>{{ isOpen ? "Show less" : "Show more" }}</span>
  </template>
  
  <template
    v-slot:less="{ isButtonVisible, isOpen }"
  >
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.</p>
  </template>
  
  <template
    v-slot:more="{ isButtonVisible, isOpen }"
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
</a-disclosure>
```

## Responding to the "Show More/Show Less" Button Click Using Emits

This example shows how to respond to the "Show More/Show Less" button click in the component by listening to the **toggle** event. This allows you to execute custom functions when the button is clicked and monitor the current state of the component.

*emits: `toggle`*

```html
<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  @toggle="onToggle"
></a-disclosure>
```

```js
import { 
  ADisclosure,
} from "aloha-vue";
    
export default {
  name: "PageDisclosureEvents",
  components: {
    ADisclosure,
  },
  setup() {
    const textLess = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.";
    const textMore = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
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

    const onToggle = ({ isOpen }) => {
      console.log("isOpen", isOpen);
    };

    return {
      onToggle,
      textLess,
      textMore,
    };
  },
};
```

## Exposes

*exposes: `buttonRef`, `containerRef`, `isOpen`, `toggleButton`*

```html
<div
  class="a_btn_group"
>
  <a-button
    class="a_btn a_btn_outline_primary"
    text="_A_DISCLOSURE_TEXT_TOGGLE_WITH_IS_OPEN_"
    @click="toggleShowWithIsOpen"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_primary"
    text="_A_DISCLOSURE_TEXT_TOGGLE_WITH_TOGGLE_BUTTON_"
    @click="toggleShowWithToggleButton"
  ></a-button>
</div>
<a-disclosure
  ref="disclosureRef"
  :text-less="textLess"
  :text-more="textMore"
></a-disclosure>
```

```js
import {
  nextTick,
  onMounted,
  ref,
} from "vue";

import {
  AButton,
  ADisclosure,
} from "aloha-vue";
    
export default {
  name: "PageDisclosureExposes",
  components: {
    AButton,
    ADisclosure,
  },
  setup() {
    const textLess = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.";
    const textMore = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
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

    const disclosureRef = ref(undefined);

    const toggleShowWithIsOpen = () => {
      disclosureRef.value.isOpen = !disclosureRef.value.isOpen;
    };

    const toggleShowWithToggleButton = () => {
      disclosureRef.value.toggleButton();
    };

    onMounted(() => {
      disclosureRef.value.containerRef.setAttribute("class", "a_bg_gray_200");
      nextTick().then(
        () => {
          disclosureRef.value.buttonRef.$el.setAttribute("class", "a_btn a_btn_primary");
        }
      );
    });

    return {
      disclosureRef,
      textLess,
      textMore,
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
| btn-attributes | Object | {} |  | Props or HTML attributes for the "Show More/Show Less" button **(AButton)** |
| btn-class | String / Object | a_btn a_btn_link a_p_0 |  | The CSS classes for the "Show More/Show Less" button. |
| btn-icon-left-less | String |  |  | The icon displayed on the left side of the "Show Less" button. |
| btn-icon-left-more | String |  |  | The icon displayed on the left side of the "Show More" button. |
| btn-icon-right-less | String |  |  | The icon displayed on the right side of the "Show Less" button. |
| btn-icon-right-more | String |  |  | The icon displayed on the right side of the "Show More" button. |
| btn-id | String |  |  | ID for the "Show More/Show Less" button. |
| btn-parent-class | String | a_text_center |  | The CSS class for the parent element of the button. |
| btn-text-less | String | _A_DISCLOSURE_LESS_ |  | The text for the "Show Less" button. |
| btn-text-more | String | _A_DISCLOSURE_MORE_ |  | The text for the "Show More" button. |
| btn-title-less | String |  |  | The title text for the "Show Less" button. |
| btn-title-more | String |  |  | The title text for the "Show More" button. |
| btn-title-placement | String |  |  | The placement of the HTML title. |
| disabled | Boolean | false |  | A boolean value indicating whether the "Show More/Show Less" button should be disabled. |
| html-less | String |  |  | A string containing the shorter HTML-formatted text content to be displayed when the user clicks "Show Less." This content is secured using DOMPurify.sanitize() to prevent malicious code. |
| html-more | String |  |  | A string containing the longer HTML-formatted text content to be displayed when the user clicks "Show More." This content is secured using DOMPurify.sanitize() to prevent malicious code. |
| id | String |  |  | ID for the component. |
| is-btn-title-html | Boolean |  |  | A boolean value indicating whether the provided button titles should be interpreted and rendered as HTML. |
| is-open-default | Boolean | false |  | A boolean value indicating whether the extended text content **(text-more)** should be displayed by default. |
| safe-html-less | String |  |  | A string containing the shorter HTML-formatted text content to be displayed when the user clicks "Show Less." Note that this content is rendered directly and should only be used when you are confident that the HTML code is trustworthy and poses no security risks. |
| safe-html-more | String |  |  | A string containing the longer HTML-formatted text content to be displayed when the user clicks "Show More." Note that this content is rendered directly and should only be used when you are confident that the HTML code is trustworthy and poses no security risks. |
| show-less | Boolean | true |  | A boolean value indicating whether the "Show Less" button should be displayed. |
| show-more | Boolean | true |  | A boolean value indicating whether the "Show More" button should be displayed. |
| text-less | String |  |  | The shorter text content to be displayed when the user clicks "Show Less." |
| text-more | String |  |  | The longer text content to be displayed when the user clicks "Show More." |

## Slots

| name | description |
| --- | --- |
| button | Here, you can customize the content of the "Show More/Show Less" button. You have access to the values **isButtonVisible** and **isOpen**, which provide information about the button's visibility and current state. |
| less | This slot allows you to customize the shorter text content displayed when the user clicks "Show Less." You have access to the values **isButtonVisible** and **isOpen**, which provide information about the button's visibility and current state. |
| more | This slot allows you to customize the longer text content displayed when the user clicks "Show More." You have access to the values **isButtonVisible** and **isOpen**, which provide information about the button's visibility and current state. |

## Events

| name | type | description |
| --- | --- | --- |
| toggle | Function | This event is triggered when the user clicks the "Show More/Show Less" button. It returns an object containing information about the current state of the component, including **isOpen**. |

## Exposes

| name | type | description |
| --- | --- | --- |
| buttonRef | Object | A Ref object pointing to the DOM element of the "Show More/Show Less" button in the component. This allows you to manipulate the button element directly or access events such as clicks. |
| containerRef | Object | A Ref object pointing to the DOM element of the container element of the component. This can be useful for controlling the container element or accessing its properties. |
| isOpen | Boolean | A boolean value indicating whether the extended text content is currently displayed (true) or not (false). You can use this value to monitor the state of the component and respond accordingly. |
| toggleButton | Function | A function that can be called to toggle the state of the component, thereby showing or hiding the extended text content. |

## Translations

| key | en |
| --- | --- |
| `_A_DISCLOSURE_MORE_` | Show more |
| `_A_DISCLOSURE_LESS_` | Show less |
