# AButton (Button)

The **AButton** component is a versatile button with extensive customization options via props. It integrates with [AElement](element.md) for rendering and allows customization of accessibility, classes, identifiers, loading states, and other parameters. It supports customization of appearance, text, icons, and event handling such as clicks, making it a powerful tool for UI design.

## Basic usage

There are many CSS classes that you can use with the button.

*props: `class`*

```html
<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-button
    class="a_btn a_btn_link"
    text="link"
    @click="onAlert('link')"
  ></a-button>
  <a-button
    class="a_btn a_btn_primary"
    text="primary"
    @click="onAlert('primary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_secondary"
    text="secondary"
    @click="onAlert('secondary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_tertiary"
    text="tertiary"
    @click="onAlert('tertiary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_success"
    text="success"
    @click="onAlert('success')"
  ></a-button>
  <a-button
    class="a_btn a_btn_info"
    text="info"
    @click="onAlert('info')"
  ></a-button>
  <a-button
    class="a_btn a_btn_warning"
    text="warning"
    @click="onAlert('warning')"
  ></a-button>
  <a-button
    class="a_btn a_btn_danger"
    text="danger"
    @click="onAlert('danger')"
  ></a-button>
  <a-button
    class="a_btn a_btn_dark"
    text="dark"
    @click="onAlert('dark')"
  ></a-button>
  <a-button
    class="a_btn a_btn_light"
    text="light"
    @click="onAlert('light')"
  ></a-button>
</div>
```

```js
import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonBasic",
  components: {
    AButton,
  },
  setup() {
    const onAlert = type => {
      alert(type);
    };
    
     return {
      onAlert,
    };
  },
};
```

## Outline Buttons

Need a button but not the bold background colors they bring? Replace the default modifier classes with the .a_btn_outline_* classes to remove all background images and colors on any button.

*props: `class`*

```html
<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-button
    class="a_btn a_btn_outline_primary"
    text="outline-primary"
    @click="onAlert('outline-primary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_secondary"
    text="outline-secondary"
    @click="onAlert('outline-secondary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_tertiary"
    text="outline-tertiary"
    @click="onAlert('outline-tertiary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_success"
    text="outline-success"
    @click="onAlert('outline-success')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_info"
    text="outline-info"
    @click="onAlert('outline-info')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_warning"
    text="outline-warning"
    @click="onAlert('outline-warning')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_danger"
    text="outline-danger"
    @click="onAlert('outline-danger')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_dark"
    text="outline-dark"
    @click="onAlert('outline-dark')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_light"
    text="outline-light"
    @click="onAlert('outline-light')"
  ></a-button>
</div>
```

```js
import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonOutline",
  components: {
    AButton,
  },
  setup() {
    const onAlert = type => {
      alert(type);
    };
    
     return {
      onAlert,
    };
  },
};
```

## Transparent buttons

If you need a button that blends with the background instead of covering it, replace the default modifier classes with the .a_btn_transparent* classes.

*props: `class`*

```html
<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-button
    class="a_btn a_btn_transparent_primary"
    text="transparent-primary"
    @click="onAlert('transparent-primary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_secondary"
    text="transparent-secondary"
    @click="onAlert('transparent-secondary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_tertiary"
    text="transparent-tertiary"
    @click="onAlert('transparent-tertiary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_success"
    text="transparent-success"
    @click="onAlert('transparent-success')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_info"
    text="transparent-info"
    @click="onAlert('transparent-info')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_warning"
    text="transparent-warning"
    @click="onAlert('transparent-warning')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_danger"
    text="transparent-danger"
    @click="onAlert('transparent-danger')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_dark"
    text="transparent-dark"
    @click="onAlert('transparent-dark')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_light"
    text="transparent-light"
    @click="onAlert('transparent-light')"
  ></a-button>
</div>
```

```js
import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonTransparent",
  components: {
    AButton,
  },
  setup() {
    const onAlert = type => {
      alert(type);
    };
    
     return {
      onAlert,
    };
  },
};
```

## Button Sizes

Feeling like having larger or smaller buttons? Add .a_btn_large or .a_btn_small for additional sizes.

*props: `class`*

```html
<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-button
    class="a_btn a_btn_primary a_btn_large"
    text="large"
    @click="onAlert('large')"
  ></a-button>
  <a-button
    class="a_btn a_btn_primary a_btn_small"
    text="small"
    @click="onAlert('small')"
  ></a-button>
</div>
```

```js
import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonSizes",
  components: {
    AButton,
  },
  setup() {
    const onAlert = type => {
      alert(type);
    };
    
     return {
      onAlert,
    };
  },
};
```

## Grouping buttons horizontally

Group a set of buttons in a single row.

*props: `class`*

```html
<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <div
    class="a_btn_group"
    role="group"
  >
    <a-button
      class="a_btn a_btn_primary"
      text="primary"
      @click="onAlert('primary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_secondary"
      text="secondary"
      @click="onAlert('secondary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_success"
      text="success"
      @click="onAlert('success')"
    ></a-button>
    <a-button
      class="a_btn a_btn_info"
      text="info"
      @click="onAlert('info')"
    ></a-button>
  </div>
  <div
    class="a_btn_group"
    role="group"
  >
    <a-button
      class="a_btn a_btn_outline_primary"
      text="outline-primary"
      @click="onAlert('outline-primary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_secondary"
      text="outline-secondary"
      @click="onAlert('outline-secondary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_success"
      text="outline-success"
      @click="onAlert('outline-success')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_info"
      text="outline-info"
      @click="onAlert('outline-info')"
    ></a-button>
  </div>
</div>
```

```js
import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonGroup",
  components: {
    AButton,
  },
  setup() {
    const onAlert = type => {
      alert(type);
    };
    
     return {
      onAlert,
    };
  },
};
```

## Grouping buttons vertically

Stack buttons in a vertical column.

*props: `class`*

```html
<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <div
    class="a_btn_group_vertical"
    role="group"
  >
    <a-button
      class="a_btn a_btn_primary"
      text="primary"
      @click="onAlert('primary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_secondary"
      text="secondary"
      @click="onAlert('secondary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_success"
      text="success"
      @click="onAlert('success')"
    ></a-button>
    <a-button
      class="a_btn a_btn_info"
      text="info"
      @click="onAlert('info')"
    ></a-button>
  </div>
  <div
    class="a_btn_group_vertical"
    role="group"
  >
    <a-button
      class="a_btn a_btn_outline_primary"
      text="outline-primary"
      @click="onAlert('outline-primary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_secondary"
      text="outline-secondary"
      @click="onAlert('outline-secondary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_success"
      text="outline-success"
      @click="onAlert('outline-success')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_info"
      text="outline-info"
      @click="onAlert('outline-info')"
    ></a-button>
  </div>
</div>
```

```js
import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonGroupVertical",
  components: {
    AButton,
  },
  setup() {
    const onAlert = type => {
      alert(type);
    };
    
     return {
      onAlert,
    };
  },
};
```

## Table-based grouping of buttons

You can group buttons in a table format.

*props: `class`*

```html
<div
  class="a_btn_group_vertical"
  role="group"
>
  <div
    class="a_btn_group"
    role="group"
  >
    <a-button
      class="a_btn a_btn_outline_primary"
      text="outline-primary"
      @click="onAlert('outline-primary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_secondary"
      text="outline-secondary"
      @click="onAlert('outline-secondary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_success"
      text="outline-success"
      @click="onAlert('outline-success')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_info"
      text="outline-info"
      @click="onAlert('outline-info')"
    ></a-button>
  </div>
  <div
    class="a_btn_group"
    role="group"
  >
    <a-button
      class="a_btn a_btn_outline_primary"
      text="outline-primary"
      @click="onAlert('outline-primary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_secondary"
      text="outline-secondary"
      @click="onAlert('outline-secondary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_success"
      text="outline-success"
      @click="onAlert('outline-success')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_info"
      text="outline-info"
      @click="onAlert('outline-info')"
    ></a-button>
  </div>
  <div
    class="a_btn_group"
    role="group"
  >
    <a-button
      class="a_btn a_btn_outline_primary"
      text="outline-primary"
      @click="onAlert('outline-primary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_secondary"
      text="outline-secondary"
      @click="onAlert('outline-secondary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_success"
      text="outline-success"
      @click="onAlert('outline-success')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_info"
      text="outline-info"
      @click="onAlert('outline-info')"
    ></a-button>
  </div>
</div>
```

```js
import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonGroupHorizontalVertical",
  components: {
    AButton,
  },
  setup() {
    const onAlert = type => {
      alert(type);
    };
    
     return {
      onAlert,
    };
  },
};
```

## Button group size

Instead of applying button size classes to each button within a group, simply add .a_btn_group_large or .a_btn_group_small to each .a_btn_group, including any nested ones if you have multiple levels of nesting.

*props: `class`*

```html
<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <div
    class="a_btn_group a_btn_group_large"
    role="group"
  >
    <a-button
      class="a_btn a_btn_primary"
      text="primary"
      @click="onAlert('primary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_secondary"
      text="secondary"
      @click="onAlert('secondary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_success"
      text="success"
      @click="onAlert('success')"
    ></a-button>
    <a-button
      class="a_btn a_btn_info"
      text="info"
      @click="onAlert('info')"
    ></a-button>
  </div>
  <div
    class="a_btn_group a_btn_group_small"
    role="group"
  >
    <a-button
      class="a_btn a_btn_outline_primary"
      text="outline-primary"
      @click="onAlert('outline-primary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_secondary"
      text="outline-secondary"
      @click="onAlert('outline-secondary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_success"
      text="outline-success"
      @click="onAlert('outline-success')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_info"
      text="outline-info"
      @click="onAlert('outline-info')"
    ></a-button>
  </div>
</div>
```

```js
import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonGroupSizes",
  components: {
    AButton,
  },
  setup() {
    const onAlert = type => {
      alert(type);
    };
    
     return {
      onAlert,
    };
  },
};
```

## Using icon props

The AButton component allows you to display icons on the left and right side of the button by using the ":icon-left" and ":icon-right" props. You can define different icons for different devices to achieve a customizable display.

*props: `icon-left`, `icon-right`*

```html
<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-button
    class="a_btn a_btn_primary"
    icon-left="Upload"
    title="Upload"
    @click="onAlert('icon-left')"
  ></a-button>
  <a-button
    class="a_btn a_btn_primary"
    icon-left="Upload"
    text="Aloha"
    @click="onAlert('icon-left & text')"
  ></a-button>
  <a-button
    class="a_btn a_btn_primary"
    icon-right="Upload"
    text="Aloha"
    @click="onAlert('icon-right & text')"
  ></a-button>
  <a-button
    class="a_btn a_btn_primary"
    icon-left="Upload"
    icon-right="Upload"
    text="Aloha"
    @click="onAlert('icon-left & text & icon-right')"
  ></a-button>
  <a-button
    class="a_btn a_btn_primary"
    icon-left="Upload"
    icon-right="Upload"
    title="Upload"
    @click="onAlert('icon-left & icon-right')"
  ></a-button>
</div>
```

```js
import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonIcons",
  components: {
    AButton,
  },
  setup() {
    const onAlert = type => {
      alert(type);
    };
    
     return {
      onAlert,
    };
  },
};
```

## Disabling the button

The AButton component allows you to disable the button by using the "disabled" prop. This visually and functionally disables the button, making it non-interactive.

*props: `disabled`*

```html
<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-button
    class="a_btn a_btn_primary"
    text="primary"
    :disabled="true"
    @click="onAlert('primary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_secondary"
    text="secondary"
    :disabled="true"
    @click="onAlert('secondary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_tertiary"
    text="tertiary"
    :disabled="true"
    @click="onAlert('tertiary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_success"
    text="success"
    :disabled="true"
    @click="onAlert('success')"
  ></a-button>
  <a-button
    class="a_btn a_btn_info"
    text="info"
    :disabled="true"
    @click="onAlert('info')"
  ></a-button>
  <a-button
    class="a_btn a_btn_warning"
    text="warning"
    :disabled="true"
    @click="onAlert('warning')"
  ></a-button>
  <a-button
    class="a_btn a_btn_danger"
    text="danger"
    :disabled="true"
    @click="onAlert('danger')"
  ></a-button>
  <a-button
    class="a_btn a_btn_dark"
    text="dark"
    :disabled="true"
    @click="onAlert('dark')"
  ></a-button>
  <a-button
    class="a_btn a_btn_light"
    text="light"
    :disabled="true"
    @click="onAlert('light')"
  ></a-button>
  <a-button
    class="a_ml_2"
    text="switch"
    :is-switch="true"
    :disabled="true"
  ></a-button>
  <a-button
    class="a_ml_2"
    text="switch active"
    :is-switch="true"
    :model-switch="true"
    :disabled="true"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_primary"
    text="outline-primary"
    :disabled="true"
    @click="onAlert('outline-primary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_secondary"
    text="outline-secondary"
    :disabled="true"
    @click="onAlert('outline-secondary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_tertiary"
    text="outline-tertiary"
    :disabled="true"
    @click="onAlert('outline-tertiary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_success"
    text="outline-success"
    :disabled="true"
    @click="onAlert('outline-success')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_info"
    text="outline-info"
    :disabled="true"
    @click="onAlert('outline-info')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_warning"
    text="outline-warning"
    :disabled="true"
    @click="onAlert('outline-warning')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_danger"
    text="outline-danger"
    :disabled="true"
    @click="onAlert('outline-danger')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_dark"
    text="outline-dark"
    :disabled="true"
    @click="onAlert('outline-dark')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_light"
    text="outline-light"
    :disabled="true"
    @click="onAlert('outline-light')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_primary"
    text="transparent-primary"
    :disabled="true"
    @click="onAlert('transparent-primary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_secondary"
    text="transparent-secondary"
    :disabled="true"
    @click="onAlert('transparent-secondary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_tertiary"
    text="transparent-tertiary"
    :disabled="true"
    @click="onAlert('transparent-tertiary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_success"
    text="transparent-success"
    :disabled="true"
    @click="onAlert('transparent-success')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_info"
    text="transparent-info"
    :disabled="true"
    @click="onAlert('transparent-info')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_warning"
    text="transparent-warning"
    :disabled="true"
    @click="onAlert('transparent-warning')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_danger"
    text="transparent-danger"
    :disabled="true"
    @click="onAlert('transparent-danger')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_dark"
    text="transparent-dark"
    :disabled="true"
    @click="onAlert('transparent-dark')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_light"
    text="transparent-light"
    :disabled="true"
    @click="onAlert('transparent-light')"
  ></a-button>
</div>
```

```js
import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonDisabled",
  components: {
    AButton,
  },
  setup() {
    const onAlert = type => {
      alert(type);
    };
    
     return {
      onAlert,
    };
  },
};
```

## Disabled button with aria-disabled

The AButton component allows you to display the button as disabled and set the corresponding accessibility properties. You can use the "aria-disabled" prop to indicate the disabled state. This allows you to use events like focus or hover while the button is not clickable.

*props: `aria-disabled`*

```html
<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_primary"
    text="primary"
    @click="onAlert('primary')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_secondary"
    text="secondary"
    @click="onAlert('secondary')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_tertiary"
    text="tertiary"
    @click="onAlert('tertiary')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_success"
    text="success"
    @click="onAlert('success')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_info"
    text="info"
    @click="onAlert('info')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_warning"
    text="warning"
    @click="onAlert('warning')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_danger"
    text="danger"
    @click="onAlert('danger')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_dark"
    text="dark"
    @click="onAlert('dark')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_light"
    text="light"
    @click="onAlert('light')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    :is-switch="true"
    class="a_ml_2"
    text="switch"
  ></a-button>
  <a-button
    :aria-disabled="true"
    :is-switch="true"
    :model-switch="true"
    class="a_ml_2"
    text="switch active"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_outline_primary"
    text="outline-primary"
    @click="onAlert('outline-primary')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_outline_secondary"
    text="outline-secondary"
    @click="onAlert('outline-secondary')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_outline_tertiary"
    text="outline-tertiary"
    @click="onAlert('outline-tertiary')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_outline_success"
    text="outline-success"
    @click="onAlert('outline-success')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_outline_info"
    text="outline-info"
    @click="onAlert('outline-info')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_outline_warning"
    text="outline-warning"
    @click="onAlert('outline-warning')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_outline_danger"
    text="outline-danger"
    @click="onAlert('outline-danger')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_outline_dark"
    text="outline-dark"
    @click="onAlert('outline-dark')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_outline_light"
    text="outline-light"
    @click="onAlert('outline-light')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_transparent_primary"
    text="transparent-primary"
    @click="onAlert('transparent-primary')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_transparent_secondary"
    text="transparent-secondary"
    @click="onAlert('transparent-secondary')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_transparent_tertiary"
    text="transparent-tertiary"
    @click="onAlert('transparent-tertiary')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_transparent_success"
    text="transparent-success"
    @click="onAlert('transparent-success')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_transparent_info"
    text="transparent-info"
    @click="onAlert('transparent-info')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_transparent_warning"
    text="transparent-warning"
    @click="onAlert('transparent-warning')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_transparent_danger"
    text="transparent-danger"
    @click="onAlert('transparent-danger')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_transparent_dark"
    text="transparent-dark"
    @click="onAlert('transparent-dark')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_transparent_light"
    text="transparent-light"
    @click="onAlert('transparent-light')"
  ></a-button>
</div>
```

```js
import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonAriaDisabled",
  components: {
    AButton,
  },
  setup() {
    const onAlert = type => {
      alert(type);
    };
    
     return {
      onAlert,
    };
  },
};
```

## Button with loading state and loading indicator alignment

The AButton component allows you to display the button with a loading state and a loading indicator. You can also set the alignment of the loading indicator. This can be useful to indicate that a specific operation is running in the background and the user needs to wait for completion.

*props: `loading`, `loading-align`*

```html
<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-button
    class="a_btn a_btn_primary"
    :loading="loading"
    loading-align="left"
    text="loading-align="left""
    @click="toggleLoading"
  ></a-button>
  <a-button
    class="a_btn a_btn_primary"
    :loading="loading"
    loading-align="right"
    text="loading-align="right""
    @click="toggleLoading"
  ></a-button>
</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonLoading",
  components: {
    AButton,
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

## Additional Text Inside the Button

The AButton component allows you to display additional text inside the button. This can be useful for adding predefined text before or after the actual button text.

*props: `text-after`, `text-before`*

```html
<a-button
  class="a_btn a_btn_primary"
  text="_SHOW_MORE_"
  text-after=" €"
  text-before="$ "
></a-button>
```

## Changing the text tag in the "AButton" component

This example shows how to customize the text tag in the "AButton" component in Vue.js. By default, the text is rendered in a "span" tag. However, by using the "text-tag" prop, the text tag can be flexibly customized to use different HTML tags like "strong", "em" or others.

*props: `text-tag`*

```html
<a-button
  class="a_btn a_btn_secondary"
  text="Aloha"
  text-tag="strong"
></a-button>
```

## Using Safe HTML Content as a String inside the Button

The AButton component allows you to use safe HTML content as a string inside the button. By enabling the "safe-html" prop and passing an HTML string, the provided HTML content is treated as trusted and directly inserted via the JavaScript "innerHTML" attribute.

*props: `safe-html`*

```html
<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-button
    class="a_btn a_btn_primary"
    safe-html="_A_BUTTON_EXAMPLE_HTML_"
  ></a-button>
  <a-button
    class="a_btn a_btn_primary"
    safe-html="<span onclick='alert("Aloha")'>Aloha</button>"
  ></a-button>
</div>
```

## Safely displaying HTML content using DomPurify

The AButton component allows you to safely display HTML content without fully trusting it. By using the "html" prop and the DomPurify library, the provided HTML content is sanitized and securely rendered in the button.

*props: `html`*

```html
<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-button
    class="a_btn a_btn_primary"
    html="_A_BUTTON_EXAMPLE_HTML_"
  ></a-button>
  <a-button
    class="a_btn a_btn_primary"
    html="<span onclick='alert("Aloha")'>Aloha</span>"
  ></a-button>
</div>
```

## Customizable Text for Different Devices

The AButton component allows you to customize the button's text for different devices. By using the ":text" prop as an object, you can define different text for mobile and desktop devices.

*props: `text (as object)`*

```html
<a-button
  class="a_btn a_btn_primary"
  :text="{ mobile: 'Aloha', desktop: 'Aloha-desktop' }"
></a-button>
```

## Concatenating Titles in a Prop

The AButton component allows you to concatenate multiple titles in a prop. By using the ":title" prop as an array, you can specify multiple elements that will be merged into a single title for the button.

*props: `title (as array)`*

```html
<a-button
  class="a_btn a_btn_primary"
  :title="['Aloha', '$(Aloha)']"
  text="Aloha"
></a-button>
```

## Displaying HTML Title and Title Placement

The AButton component allows you to display the title as HTML and control the title placement. By using the ":is-title-html", ":title", and ":title-placement" props, you can use HTML titles and set the positioning of the title.

*props: `is-title-html`, `title`, `title-placement`, `title-attributes`*

```html
<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-button
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: top"
    title-placement="top"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
  <a-button
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: auto"
    title-placement="auto"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
  <a-button
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: auto-start"
    title-placement="auto-start"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
  <a-button
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: auto-end"
    title-placement="auto-end"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
  <a-button
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: top-start"
    title-placement="top-start"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
  <a-button
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: top-end"
    title-placement="top-end"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
  <a-button
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: right"
    title-placement="right"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
  <a-button
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: right-start"
    title-placement="right-start"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
  <a-button
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: right-end"
    title-placement="right-end"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
  <a-button
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: bottom"
    title-placement="bottom"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
  <a-button
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: bottom-start"
    title-placement="bottom-start"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
  <a-button
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: bottom-end"
    title-placement="bottom-end"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
  <a-button
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: left"
    title-placement="left"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
  <a-button
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: left-start"
    title-placement="left-start"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
  <a-button
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: left-end"
    title-placement="left-end"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
  <a-button
    :is-title-html="true"
    :title-attributes="{ maxWidth: 150 }"
    class="a_btn a_btn_success"
    text="placement: auto, html-title max-width 150"
    title-placement="auto"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
</div>
```

## In the example below, the title is displayed as translated text with a parameter. The number parameter is passed via the extra attribute.

Display of HTML titles with translation and parameters

*props: `is-title-html`, `title`, `extra`*

```html
<a-button
  :extra="{ number: 2 }"
  :is-title-html="true"
  class="a_btn a_btn_success"
  text="extra"
  title="_A_BUTTON_EXAMPLE_BIG_TITLE_{{number}}_"
></a-button>
```

## Using the "stop" prop to stop event propagation

Setting the "stop" prop to a boolean value can be used to control whether the event should be propagated or not. The example shows two different scenarios: one with "stop" set to "true" and one set to "false".

*props: `stop`*

```html
<div
  @click="showAlert"
>
  <a-button
    class="a_btn a_btn_primary"
    text="stopPropagation: :stop=\"true\""
    :stop="true"
  ></a-button>
</div>
<div
  class="a_mt_4"
  @click="showAlert"
>
  <a-button
    class="a_btn a_btn_primary"
    text="stopPropagation: :stop=\"false\""
    :stop="false"
  ></a-button>
</div>
```

```js
import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonStop",
  components: {
    AButton,
  },
  setup() {
    const showAlert = () => {
      alert("Aloha");
    };

    return {
      showAlert,
    };
  },
};
```

## Using the Default Slot

The AButton component allows you to place custom content inside the button by using the default slot ":slots='default'". The content placed in the slot will be shown inside the button.

*slots: `default`*

```html
<a-button
  class="a_btn a_btn_primary"
>
  <span>(Aloha)</span>
</a-button>
```

## Using the "buttonPrepend" Slot

The AButton component allows you to display additional content before the text inside the button by using the "buttonPrepend" slot. The content placed in the slot will be shown before the text inside the button.

*slots: `buttonPrepend`*

```html
<a-button
  class="a_btn a_btn_primary"
  text="Aloha"
>
  <template
    v-slot:buttonPrepend
  >
    <span>(***)</span>
  </template>
</a-button>
```

## Using the "buttonAppend" Slot

The AButton component allows you to display additional content after the text inside the button by using the "buttonAppend" slot. The content placed in the slot will be shown after the text inside the button.

*slots: `buttonAppend`*

```html
<a-button
  class="a_btn a_btn_primary"
  text="Aloha"
>
  <template
    v-slot:buttonAppend
  >
    <span>(***)</span>
  </template>
</a-button>
```

## Using the "buttonTitle" Slot for HTML Title

The AButton component allows you to define custom HTML content for the button's title by using the "buttonTitle" slot along with the ":is-title-html" prop. The content placed in the slot will be used as an HTML title for the button.

*props: `is-title-html`; slots: `buttonTitle`*

```html
<a-button
  :is-title-html="true"
  class="a_btn a_btn_primary"
  text="Aloha"
>
  <template
    v-slot:buttonTitle
  >
    <strong>(***Aloha***)</strong>
  </template>
</a-button>
```

## Using Button Switch Mode

The AButton component allows you to use the button as a button switch, with two states (active/inactive). By using the ":is-switch" and ":model-switch" props, you can enable the button switch and control the state. The button is rendered as a "button" element with the "aria-pressed" attribute to indicate the state.

*props: `is-switch`, `model-switch`*

```html
<a-button
  :is-switch="true"
  :model-switch="modelSwitch"
  text="(***)"
  @click="toggleModelSwitch"
></a-button>
```

```js
import {
  ref,
} from "vue";

import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonSwitch",
  components: {
    AButton,
  },
  setup() {
    const modelSwitch = ref(false);

    const toggleModelSwitch = () => {
      modelSwitch.value = !modelSwitch.value;
    };

    return {
      modelSwitch,
      toggleModelSwitch,
    };
  },
};
```

## Using complex props and events

The AButton component allows you to use various complex props and events to customize and control the button with advanced functionality. In the following example, multiple props and an event are used to configure the button and control the loading state.

*props: `class`, `loading`, `loading-align`, `text`, `text-before`, `icon-left`, `icon-right`, `title`, `text-aria-hidden`, `text-screen-reader`*

```html
<a-button
  class="a_btn a_btn_primary"
  :icon-left="{ desktop: 'EyeFill', mobile: 'EyeSlash' }"
  :icon-right="{ mobile: 'EyeSlash' }"
  :loading="loading"
  :text-aria-hidden="true"
  :text-before="{ desktop: '$ ' }"
  :text-screen-reader="{ desktop: 'Aloha', mobile: 'Aloha-mobile' }"
  :text="{ desktop: 'Aloha' }"
  :title="{ desktop: 'Aloha' }"
  class="a_btn a_btn_primary"
  loading-align="left"
  @click="toggleLoading"
></a-button>
```

```js
import {
  ref,
} from "vue";

import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonComplex",
  components: {
    AButton,
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

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| aria-disabled | Boolean |  |  | Specifies whether the button should be marked as disabled. When set to true, the button is displayed as disabled, and the "aria-disabled" accessibility property is added. |
| aria-label | String / Number / Object |  |  | Specifies the ARIA label for the button. You can use a string, number, or object as the value to set the desired label. |
| attributes | Object | () => ({}) |  | Specifies additional attributes for the button. You can use an object to set the desired attributes and their values. |
| class | String / Object |  |  | CSS class |
| class-default | String | a_element |  | Defines the base CSS class for the element, setting a general visual standard style. |
| class-default-hidden | String | a_element__hidden |  | Sets a CSS class to hide the element, used to control the visibility of the element in various contexts. |
| class-disabled | String | disabled |  | Specifies the CSS class to be applied to the button when it is disabled. |
| disabled | Boolean |  |  | Specifies whether the button should be disabled. When set to true, the button is disabled. |
| extra | Object |  |  | Extra object for translation |
| extraData | Any |  |  | Provides additional data for all component slots, enabling the transfer of custom data and information to be used within the slots for more flexible and detailed content customization. |
| html | String / Number / Object / Array |  |  | Specifies the HTML content to be displayed inside the button. |
| html-screen-reader | String / Number / Object / Array |  |  | Specifies the HTML for the screen reader content of the button. You can use a string, number, or object as the value to set the desired HTML content. |
| icon-attributes | Object | () => ({}) |  | Specifies additional attributes for the icons. You can use an object to set the desired attributes and their values for the icons. |
| icon-class | String / Object |  |  | Specifies an additional CSS class for the icons. |
| icon-left | String / Object |  |  | Defines the icon on the left side of the button. You can either specify an icon name as a string or define different icons for different devices as an object. |
| icon-right | String / Object |  |  | Defines the icon on the right side of the button. You can either specify an icon name as a string or define different icons for different devices as an object. |
| icon-tag | String |  |  | Specifies the custom HTML tag for the icons. |
| id | String | () => uniqueId("a_btn_") |  | Specifies a unique ID for the button. If no ID is provided, a unique ID will be automatically generated. |
| is-switch | Boolean |  |  | Specifies whether the button should be used in switch mode. When set to true, the button is rendered as a button switch. |
| is-title-html | Boolean |  |  | Specifies whether the title should be interpreted as HTML. When set to true, the title is rendered as HTML. |
| loading | Boolean | false |  | Specifies whether the button is in the loading state. When set to true, the button is displayed as "loading". |
| loading-align | String | right |  | Specifies the alignment of the loading indicator. You can either specify "left" or "right" as the value. |
| loading-class | String / Object | a_spinner_small |  | Specifies the CSS class for the loading state of the button. You can either provide a string with the CSS class or use an object to specify different CSS classes for different states. |
| model-switch | Boolean |  |  | The model value that controls the state of the button switch. When set to true, the button is enabled (pressed=true); otherwise, the button is disabled (pressed=false). |
| prevent-keyboard-repeat | Boolean | false |  | Prevents repeated activation while a keyboard key is held down. When enabled, repeated **Enter** and **Space** key events are ignored after the first press. |
| prevent | Boolean |  |  | Specifies whether to prevent the default behavior of event handling functions for the button. |
| safe-html | String / Number / Object / Array |  |  | Enables trust in the passed HTML string and allows its rendering in the button. |
| safe-html-screen-reader | String / Number / Object / Array |  |  | Specifies the safe HTML content for the screen reader area. You can either use a string, number, or object to specify different content for different states. |
| stop | Boolean |  |  | Specifies whether to stop the further propagation of the event. |
| tabindex | Number / String |  |  | Specifies the tabindex value for the button. The tabindex can be specified as a number or a string. |
| tag | String |  |  | Specifies the HTML tag to use for rendering the button. |
| text | String / Number / Object / Array |  |  | A string or object that contains the text for different devices. Use the keys "mobile" and "desktop" to specify the corresponding text for each device. |
| text-after | String / Number / Object |  |  | Defines the text to be displayed after the button text. |
| text-aria-hidden | Boolean |  |  | Specifies whether the button text should be marked as aria-hidden="true". |
| text-before | String / Number / Object |  |  | Defines the text to be displayed before the button text. |
| text-class | String |  |  | Specifies the CSS class to apply to the button text. |
| text-screen-reader | String / Number / Object / Array |  |  | Specifies the text to be used for screen readers. |
| text-tag | String | span |  | This prop allows you to customize the HTML tag that displays the text inside the button. |
| title | String / Number / Object / Array |  |  | A string or an array of elements to be concatenated into a single title. |
| title-attributes | Object | {} |  | Provides an object for setting additional HTML attributes for the element's title, enabling detailed customization of its behavior and style. |
| title-placement | String | top |  | The placement of the HTML title. |
| title-z-index | String / Number | auto |  | Sets the z-index for the element's title, determining its overlay order in the context of other overlapping elements. |
| type | String | button |  | Specifies the type of the button. Allowed values are "button", "submit", and "reset". |

## Slots

| name | description |
| --- | --- |
| buttonAppend | The slot that contains the content to be displayed after the text in the button. |
| buttonPrepend | The slot that contains the content to be displayed before the text in the button. |
| buttonTitle | The slot that contains the HTML content to be used as the title for the button. |
| default | The default slot that contains the content for the button. |

## Events

| name | type | description |
| --- | --- | --- |
| click | Function | Emitted when the button is clicked. |

## CSS variables (`scss/utils/button.scss`, `scss/utils/button_close.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_btn_padding_x` |  | Horizontal padding. Changed by .a_btn_small and .a_btn_large. |
| `--a_btn_padding_y` |  | Vertical padding. Changed by .a_btn_small and .a_btn_large. |
| `--a_btn_font_family` |  | Font family. |
| `--a_btn_font_size` |  | Font size. Changed by .a_btn_small and .a_btn_large. |
| `--a_btn_font_weight` |  | Font weight. Link buttons use the normal weight. |
| `--a_btn_line_height` |  | Line height. |
| `--a_btn_color` |  | Text color. Set by the variant classes (e.g. .a_btn_primary, .a_btn_outline_primary). |
| `--a_btn_bg` |  | Background. Set by the variant classes. |
| `--a_btn_border_width` |  | Border width. |
| `--a_btn_border_color` |  | Border color. Set by the variant classes. |
| `--a_btn_border_radius` |  | Corner radius. Changed by .a_btn_small and .a_btn_large. |
| `--a_btn_hover_color` |  | Text color on hover. |
| `--a_btn_hover_bg` |  | Background on hover. |
| `--a_btn_hover_border_color` |  | Border color on hover. |
| `--a_btn_active_color` |  | Text color while pressed, for .active and for a checked checkbox/radio button. |
| `--a_btn_active_bg` |  | Background while pressed, for .active and for a checked checkbox/radio button. |
| `--a_btn_active_border_color` |  | Border color while pressed, for .active and for a checked checkbox/radio button. |
| `--a_btn_disabled_color` |  | Text color of a disabled button. |
| `--a_btn_disabled_bg` |  | Background of a disabled button. |
| `--a_btn_disabled_border_color` |  | Border color of a disabled button. |
| `--a_btn_disabled_opacity` |  | Opacity of a disabled button. |
| `--a_btn_transition` |  | Transition of the colors on hover and press. |
| `--a_btn_close_size` |  | Size of the icon. Relative to the font size, so a font size class makes the button bigger. |
| `--a_btn_close_padding` |  | Padding around the icon. |
| `--a_btn_close_color` |  | Color of the icon. |
| `--a_btn_close_bg` |  | Background. |
| `--a_btn_close_hover_color` |  | Color of the icon on hover. |
| `--a_btn_close_hover_bg` |  | Background on hover. |
| `--a_btn_close_border_radius` |  | Corner radius. |
| `--a_btn_close_disabled_opacity` |  | Opacity of a disabled button. |
