# AElement (Element)

The **AElement** component is a universal element with advanced configuration through props, allowing customization of accessibility, classes, IDs, loading state, and other parameters. It supports styling, text, icons, and event handling such as click, making it a powerful tool for building interfaces.

## Basic usage

There are several types you can use with the element: **button**, **link**, **text**, **submit**, and **reset**.

*props: `type`*

```html
<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-element
    :to="{ name: 'PageLink' }"
    class="a_btn a_btn_link"
    text="link"
    type="link"
  ></a-element>
  <a-element
    class="a_btn a_btn_primary"
    text="button"
    type="button"
    @click="onAlert('button')"
  ></a-element>
  <a-element
    :prevent="true"
    :stop="true"
    class="a_btn a_btn_secondary"
    text="submit"
    type="submit"
    @click="onAlert('submit')"
  ></a-element>
  <a-element
    class="a_btn a_btn_tertiary"
    text="reset"
    type="reset"
    @click="onAlert('reset')"
  ></a-element>
  <a-element
    text="text"
    type="text"
  ></a-element>
</div>
```

```js
import { 
  AElement,
} from "aloha-vue";
    
export default {
  name: "PageElementBasic",
  components: {
    AElement,
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

## Basic classes

There are many **CSS** classes you can use with the element.

*props: `class`*

```html
<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-element
    class="a_btn a_btn_link"
    text="link"
    type="button"
    @click="onAlert('link')"
  ></a-element>
  <a-element
    class="a_btn a_btn_primary"
    text="primary"
    type="button"
    @click="onAlert('primary')"
  ></a-element>
  <a-element
    class="a_btn a_btn_secondary"
    text="secondary"
    type="button"
    @click="onAlert('secondary')"
  ></a-element>
  <a-element
    class="a_btn a_btn_tertiary"
    text="tertiary"
    type="button"
    @click="onAlert('tertiary')"
  ></a-element>
  <a-element
    class="a_btn a_btn_success"
    text="success"
    type="button"
    @click="onAlert('success')"
  ></a-element>
  <a-element
    class="a_btn a_btn_info"
    text="info"
    type="button"
    @click="onAlert('info')"
  ></a-element>
  <a-element
    class="a_btn a_btn_warning"
    text="warning"
    type="button"
    @click="onAlert('warning')"
  ></a-element>
  <a-element
    class="a_btn a_btn_danger"
    text="danger"
    type="button"
    @click="onAlert('danger')"
  ></a-element>
  <a-element
    class="a_btn a_btn_dark"
    text="dark"
    type="button"
    @click="onAlert('dark')"
  ></a-element>
  <a-element
    class="a_btn a_btn_light"
    text="light"
    type="button"
    @click="onAlert('light')"
  ></a-element>
</div>
```

```js
import { 
  AElement,
} from "aloha-vue";
    
export default {
  name: "PageElementBasicClass",
  components: {
    AElement,
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

## Outline elements

Need an element without strong background colors? Replace the default modifier classes with **.a_btn_outline_*** classes to remove all background images and colors on any element.

*props: `class`*

```html
<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-element
    class="a_btn a_btn_outline_primary"
    text="outline-primary"
    type="button"
    @click="onAlert('outline-primary')"
  ></a-element>
  <a-element
    class="a_btn a_btn_outline_secondary"
    text="outline-secondary"
    type="button"
    @click="onAlert('outline-secondary')"
  ></a-element>
  <a-element
    class="a_btn a_btn_outline_tertiary"
    text="outline-tertiary"
    type="button"
    @click="onAlert('outline-tertiary')"
  ></a-element>
  <a-element
    class="a_btn a_btn_outline_success"
    text="outline-success"
    type="button"
    @click="onAlert('outline-success')"
  ></a-element>
  <a-element
    class="a_btn a_btn_outline_info"
    text="outline-info"
    type="button"
    @click="onAlert('outline-info')"
  ></a-element>
  <a-element
    class="a_btn a_btn_outline_warning"
    text="outline-warning"
    type="button"
    @click="onAlert('outline-warning')"
  ></a-element>
  <a-element
    class="a_btn a_btn_outline_danger"
    text="outline-danger"
    type="button"
    @click="onAlert('outline-danger')"
  ></a-element>
  <a-element
    class="a_btn a_btn_outline_dark"
    text="outline-dark"
    type="button"
    @click="onAlert('outline-dark')"
  ></a-element>
  <a-element
    class="a_btn a_btn_outline_light"
    text="outline-light"
    type="button"
    @click="onAlert('outline-light')"
  ></a-element>
</div>
```

```js
import { 
  AElement,
} from "aloha-vue";
    
export default {
  name: "PageElementOutline",
  components: {
    AElement,
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

## Transparent elements

If you need an element that blends with the background rather than overlaying it, replace standard classes with **.a_btn_transparent*** classes.

*props: `class`*

```html
<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-element
    class="a_btn a_btn_transparent_primary"
    text="transparent-primary"
    type="button"
    @click="onAlert('transparent-primary')"
  ></a-element>
  <a-element
    class="a_btn a_btn_transparent_secondary"
    text="transparent-secondary"
    type="button"
    @click="onAlert('transparent-secondary')"
  ></a-element>
  <a-element
    class="a_btn a_btn_transparent_tertiary"
    text="transparent-tertiary"
    type="button"
    @click="onAlert('transparent-tertiary')"
  ></a-element>
  <a-element
    class="a_btn a_btn_transparent_success"
    text="transparent-success"
    type="button"
    @click="onAlert('transparent-success')"
  ></a-element>
  <a-element
    class="a_btn a_btn_transparent_info"
    text="transparent-info"
    type="button"
    @click="onAlert('transparent-info')"
  ></a-element>
  <a-element
    class="a_btn a_btn_transparent_warning"
    text="transparent-warning"
    type="button"
    @click="onAlert('transparent-warning')"
  ></a-element>
  <a-element
    class="a_btn a_btn_transparent_danger"
    text="transparent-danger"
    type="button"
    @click="onAlert('transparent-danger')"
  ></a-element>
  <a-element
    class="a_btn a_btn_transparent_dark"
    text="transparent-dark"
    type="button"
    @click="onAlert('transparent-dark')"
  ></a-element>
  <a-element
    class="a_btn a_btn_transparent_light"
    text="transparent-light"
    type="button"
    @click="onAlert('transparent-light')"
  ></a-element>
</div>
```

```js
import { 
  AElement,
} from "aloha-vue";
    
export default {
  name: "PageElementTransparent",
  components: {
    AElement,
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

## Element sizes

Want larger or smaller elements? Add **.a_btn_large** or **.a_btn_small** for additional sizing.

*props: `class`*

```html
<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-element
    class="a_btn a_btn_primary a_btn_large"
    text="large"
    type="button"
    @click="onAlert('large')"
  ></a-element>
  <a-element
    class="a_btn a_btn_primary a_btn_small"
    text="small"
    type="button"
    @click="onAlert('small')"
  ></a-element>
</div>
```

```js
import { 
  AElement,
} from "aloha-vue";
    
export default {
  name: "PageElementSizes",
  components: {
    AElement,
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

## Horizontal grouping of elements

Group a series of elements in one row.

*props: `class`*

```html
<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <div
    class="a_btn_group"
    role="group"
  >
    <a-element
      class="a_btn a_btn_primary"
      text="primary"
      type="button"
      @click="onAlert('primary')"
    ></a-element>
    <a-element
      class="a_btn a_btn_secondary"
      text="secondary"
      type="button"
      @click="onAlert('secondary')"
    ></a-element>
    <a-element
      class="a_btn a_btn_success"
      text="success"
      type="button"
      @click="onAlert('success')"
    ></a-element>
    <a-element
      class="a_btn a_btn_info"
      text="info"
      type="button"
      @click="onAlert('info')"
    ></a-element>
  </div>
  <div
    class="a_btn_group"
    role="group"
  >
    <a-element
      class="a_btn a_btn_outline_primary"
      text="outline-primary"
      type="button"
      @click="onAlert('outline-primary')"
    ></a-element>
    <a-element
      class="a_btn a_btn_outline_secondary"
      text="outline-secondary"
      type="button"
      @click="onAlert('outline-secondary')"
    ></a-element>
    <a-element
      class="a_btn a_btn_outline_success"
      text="outline-success"
      type="button"
      @click="onAlert('outline-success')"
    ></a-element>
    <a-element
      class="a_btn a_btn_outline_info"
      text="outline-info"
      type="button"
      @click="onAlert('outline-info')"
    ></a-element>
  </div>
</div>
```

```js
import { 
  AElement,
} from "aloha-vue";
    
export default {
  name: "PageElementGroup",
  components: {
    AElement,
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

## Vertical grouping of elements

Arrange elements in a vertical column.

*props: `class`*

```html
<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <div
    class="a_btn_group_vertical"
    role="group"
  >
    <a-element
      class="a_btn a_btn_primary"
      text="primary"
      type="button"
      @click="onAlert('primary')"
    ></a-element>
    <a-element
      class="a_btn a_btn_secondary"
      text="secondary"
      type="button"
      @click="onAlert('secondary')"
    ></a-element>
    <a-element
      class="a_btn a_btn_success"
      text="success"
      type="button"
      @click="onAlert('success')"
    ></a-element>
    <a-element
      class="a_btn a_btn_info"
      text="info"
      type="button"
      @click="onAlert('info')"
    ></a-element>
  </div>
  <div
    class="a_btn_group_vertical"
    role="group"
  >
    <a-element
      class="a_btn a_btn_outline_primary"
      text="outline-primary"
      type="button"
      @click="onAlert('outline-primary')"
    ></a-element>
    <a-element
      class="a_btn a_btn_outline_secondary"
      text="outline-secondary"
      type="button"
      @click="onAlert('outline-secondary')"
    ></a-element>
    <a-element
      class="a_btn a_btn_outline_success"
      text="outline-success"
      type="button"
      @click="onAlert('outline-success')"
    ></a-element>
    <a-element
      class="a_btn a_btn_outline_info"
      text="outline-info"
      type="button"
      @click="onAlert('outline-info')"
    ></a-element>
  </div>
</div>
```

```js
import { 
  AElement,
} from "aloha-vue";
    
export default {
  name: "PageElementGroupVertical",
  components: {
    AElement,
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

## Tabular grouping of elements

You can group elements in a table layout.

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
    <a-element
      class="a_btn a_btn_outline_primary"
      text="outline-primary"
      type="button"
      @click="onAlert('outline-primary')"
    ></a-element>
    <a-element
      class="a_btn a_btn_outline_secondary"
      text="outline-secondary"
      type="button"
      @click="onAlert('outline-secondary')"
    ></a-element>
    <a-element
      class="a_btn a_btn_outline_success"
      text="outline-success"
      type="button"
      @click="onAlert('outline-success')"
    ></a-element>
    <a-element
      class="a_btn a_btn_outline_info"
      text="outline-info"
      type="button"
      @click="onAlert('outline-info')"
    ></a-element>
  </div>
  <div
    class="a_btn_group"
    role="group"
  >
    <a-element
      class="a_btn a_btn_outline_primary"
      text="outline-primary"
      type="button"
      @click="onAlert('outline-primary')"
    ></a-element>
    <a-element
      class="a_btn a_btn_outline_secondary"
      text="outline-secondary"
      type="button"
      @click="onAlert('outline-secondary')"
    ></a-element>
    <a-element
      class="a_btn a_btn_outline_success"
      text="outline-success"
      type="button"
      @click="onAlert('outline-success')"
    ></a-element>
    <a-element
      class="a_btn a_btn_outline_info"
      text="outline-info"
      type="button"
      @click="onAlert('outline-info')"
    ></a-element>
  </div>
  <div
    class="a_btn_group"
    role="group"
  >
    <a-element
      class="a_btn a_btn_outline_primary"
      text="outline-primary"
      type="button"
      @click="onAlert('outline-primary')"
    ></a-element>
    <a-element
      class="a_btn a_btn_outline_secondary"
      text="outline-secondary"
      type="button"
      @click="onAlert('outline-secondary')"
    ></a-element>
    <a-element
      class="a_btn a_btn_outline_success"
      text="outline-success"
      type="button"
      @click="onAlert('outline-success')"
    ></a-element>
    <a-element
      class="a_btn a_btn_outline_info"
      text="outline-info"
      type="button"
      @click="onAlert('outline-info')"
    ></a-element>
  </div>
</div>
```

```js
import { 
  AElement,
} from "aloha-vue";
    
export default {
  name: "PageElementGroupHorizontalVertical",
  components: {
    AElement,
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

## Group element sizes

Instead of applying size classes to each element in the group, simply add **.a_btn_group_large** or **.a_btn_group_small** to each **.a_btn_group**, including nested groups if you have multiple levels.

*props: `class`*

```html
<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <div
    class="a_btn_group a_btn_group_large"
    role="group"
  >
    <a-element
      class="a_btn a_btn_primary"
      text="primary"
      type="button"
      @click="onAlert('primary')"
    ></a-element>
    <a-element
      class="a_btn a_btn_secondary"
      text="secondary"
      type="button"
      @click="onAlert('secondary')"
    ></a-element>
    <a-element
      class="a_btn a_btn_success"
      text="success"
      type="button"
      @click="onAlert('success')"
    ></a-element>
    <a-element
      class="a_btn a_btn_info"
      text="info"
      type="button"
      @click="onAlert('info')"
    ></a-element>
  </div>
  <div
    class="a_btn_group a_btn_group_small"
    role="group"
  >
    <a-element
      class="a_btn a_btn_outline_primary"
      text="outline-primary"
      type="button"
      @click="onAlert('outline-primary')"
    ></a-element>
    <a-element
      class="a_btn a_btn_outline_secondary"
      text="outline-secondary"
      type="button"
      @click="onAlert('outline-secondary')"
    ></a-element>
    <a-element
      class="a_btn a_btn_outline_success"
      text="outline-success"
      type="button"
      @click="onAlert('outline-success')"
    ></a-element>
    <a-element
      class="a_btn a_btn_outline_info"
      text="outline-info"
      type="button"
      @click="onAlert('outline-info')"
    ></a-element>
  </div>
</div>
```

```js
import { 
  AElement,
} from "aloha-vue";
    
export default {
  name: "PageElementGroupSizes",
  components: {
    AElement,
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

## Using icon properties

The **AElement** component allows displaying icons to the left and right of the element using the "**:icon-left**" and "**:icon-right**" properties. You can define different icons for different devices to achieve a customized look.

*props: `icon-left`, `icon-right`*

```html
<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-element
    class="a_btn a_btn_primary"
    icon-left="Upload"
    type="button"
    @click="onAlert('icon-left')"
  ></a-element>
  <a-element
    class="a_btn a_btn_primary"
    icon-left="Upload"
    text="Aloha"
    type="button"
    @click="onAlert('icon-left & text')"
  ></a-element>
  <a-element
    class="a_btn a_btn_primary"
    icon-right="Upload"
    text="Aloha"
    type="button"
    @click="onAlert('icon-right & text')"
  ></a-element>
  <a-element
    class="a_btn a_btn_primary"
    icon-left="Upload"
    icon-right="Upload"
    text="Aloha"
    type="button"
    @click="onAlert('icon-left & text & icon-right')"
  ></a-element>
  <a-element
    class="a_btn a_btn_primary"
    icon-left="Upload"
    icon-right="Upload"
    type="button"
    @click="onAlert('icon-left & icon-right')"
  ></a-element>
</div>
```

```js
import { 
  AElement,
} from "aloha-vue";
    
export default {
  name: "PageElementIcons",
  components: {
    AElement,
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

## Disabling the element

The **AElement** component allows disabling the element via the "**disabled**" property. This makes the element non-interactive both visually and functionally.

*props: `disabled`*

```html
<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-element
    :disabled="true"
    class="a_btn a_btn_primary"
    text="primary"
    type="button"
    @click="onAlert('primary')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_secondary"
    text="secondary"
    type="button"
    @click="onAlert('secondary')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_tertiary"
    text="tertiary"
    type="button"
    @click="onAlert('tertiary')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_success"
    text="success"
    type="button"
    @click="onAlert('success')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_info"
    text="info"
    type="button"
    @click="onAlert('info')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_warning"
    text="warning"
    type="button"
    @click="onAlert('warning')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_danger"
    text="danger"
    type="button"
    @click="onAlert('danger')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_dark"
    text="dark"
    type="button"
    @click="onAlert('dark')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_light"
    text="light"
    type="button"
    @click="onAlert('light')"
  ></a-element>
  <a-element
    :disabled="true"
    :is-switch="true"
    text="switch"
    type="button"
  ></a-element>
  <a-element
    :disabled="true"
    :is-switch="true"
    :model-switch="true"
    text="switch active"
    type="button"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_outline_primary"
    text="outline-primary"
    type="button"
    @click="onAlert('outline-primary')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_outline_secondary"
    text="outline-secondary"
    type="button"
    @click="onAlert('outline-secondary')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_outline_tertiary"
    text="outline-tertiary"
    type="button"
    @click="onAlert('outline-tertiary')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_outline_success"
    text="outline-success"
    type="button"
    @click="onAlert('outline-success')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_outline_info"
    text="outline-info"
    type="button"
    @click="onAlert('outline-info')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_outline_warning"
    text="outline-warning"
    type="button"
    @click="onAlert('outline-warning')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_outline_danger"
    text="outline-danger"
    type="button"
    @click="onAlert('outline-danger')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_outline_dark"
    text="outline-dark"
    type="button"
    @click="onAlert('outline-dark')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_outline_light"
    text="outline-light"
    type="button"
    @click="onAlert('outline-light')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_transparent_primary"
    text="transparent-primary"
    type="button"
    @click="onAlert('transparent-primary')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_transparent_secondary"
    text="transparent-secondary"
    type="button"
    @click="onAlert('transparent-secondary')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_transparent_tertiary"
    text="transparent-tertiary"
    type="button"
    @click="onAlert('transparent-tertiary')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_transparent_success"
    text="transparent-success"
    type="button"
    @click="onAlert('transparent-success')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_transparent_info"
    text="transparent-info"
    type="button"
    @click="onAlert('transparent-info')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_transparent_warning"
    text="transparent-warning"
    type="button"
    @click="onAlert('transparent-warning')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_transparent_danger"
    text="transparent-danger"
    type="button"
    @click="onAlert('transparent-danger')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_transparent_dark"
    text="transparent-dark"
    type="button"
    @click="onAlert('transparent-dark')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_transparent_light"
    text="transparent-light"
    type="button"
    @click="onAlert('transparent-light')"
  ></a-element>
</div>
```

```js
import { 
  AElement,
} from "aloha-vue";
    
export default {
  name: "PageElementDisabled",
  components: {
    AElement,
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

## Inactive element using **aria-disabled**

The **AElement** component allows rendering an element in an inactive state and setting the appropriate accessibility attributes. To do this, use the "**aria-disabled**" property to indicate the disabled state. This allows events such as focus or hover to work while keeping the element inactive for clicks.

*props: `aria-disabled`*

```html
<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-element
    :aria-disabled="true"
    class="a_btn a_btn_primary"
    text="primary"
    type="button"
    @click="onAlert('primary')"
  ></a-element>
  <a-element
    :aria-disabled="true"
    class="a_btn a_btn_secondary"
    text="secondary"
    type="button"
    @click="onAlert('secondary')"
  ></a-element>
  <a-element
    :aria-disabled="true"
    class="a_btn a_btn_tertiary"
    text="tertiary"
    type="button"
    @click="onAlert('tertiary')"
  ></a-element>
  <a-element
    :aria-disabled="true"
    class="a_btn a_btn_success"
    text="success"
    type="button"
    @click="onAlert('success')"
  ></a-element>
  <a-element
    :aria-disabled="true"
    class="a_btn a_btn_info"
    text="info"
    type="button"
    @click="onAlert('info')"
  ></a-element>
  <a-element
    :aria-disabled="true"
    class="a_btn a_btn_warning"
    text="warning"
    type="button"
    @click="onAlert('warning')"
  ></a-element>
  <a-element
    :aria-disabled="true"
    class="a_btn a_btn_danger"
    text="danger"
    type="button"
    @click="onAlert('danger')"
  ></a-element>
  <a-element
    :aria-disabled="true"
    class="a_btn a_btn_dark"
    text="dark"
    type="button"
    @click="onAlert('dark')"
  ></a-element>
  <a-element
    :aria-disabled="true"
    class="a_btn a_btn_light"
    text="light"
    type="button"
    @click="onAlert('light')"
  ></a-element>
  <a-element
    :aria-disabled="true"
    :is-switch="true"
    text="switch"
    type="button"
  ></a-element>
  <a-element
    :aria-disabled="true"
    :is-switch="true"
    :model-switch="true"
    text="switch active"
    type="button"
  ></a-element>
  <a-element
    :aria-disabled="true"
    class="a_btn a_btn_outline_primary"
    text="outline-primary"
    type="button"
    @click="onAlert('outline-primary')"
  ></a-element>
  <a-element
    :aria-disabled="true"
    class="a_btn a_btn_outline_secondary"
    text="outline-secondary"
    type="button"
    @click="onAlert('outline-secondary')"
  ></a-element>
  <a-element
    :aria-disabled="true"
    class="a_btn a_btn_outline_tertiary"
    text="outline-tertiary"
    type="button"
    @click="onAlert('outline-tertiary')"
  ></a-element>
  <a-element
    :aria-disabled="true"
    class="a_btn a_btn_outline_success"
    text="outline-success"
    type="button"
    @click="onAlert('outline-success')"
  ></a-element>
  <a-element
    :aria-disabled="true"
    class="a_btn a_btn_outline_info"
    text="outline-info"
    type="button"
    @click="onAlert('outline-info')"
  ></a-element>
  <a-element
    :aria-disabled="true"
    class="a_btn a_btn_outline_warning"
    text="outline-warning"
    type="button"
    @click="onAlert('outline-warning')"
  ></a-element>
  <a-element
    :aria-disabled="true"
    class="a_btn a_btn_outline_danger"
    text="outline-danger"
    type="button"
    @click="onAlert('outline-danger')"
  ></a-element>
  <a-element
    :aria-disabled="true"
    class="a_btn a_btn_outline_dark"
    text="outline-dark"
    type="button"
    @click="onAlert('outline-dark')"
  ></a-element>
  <a-element
    :aria-disabled="true"
    class="a_btn a_btn_outline_light"
    text="outline-light"
    type="button"
    @click="onAlert('outline-light')"
  ></a-element>
  <a-element
    :aria-disabled="true"
    class="a_btn a_btn_transparent_primary"
    text="transparent-primary"
    type="button"
    @click="onAlert('transparent-primary')"
  ></a-element>
  <a-element
    :aria-disabled="true"
    class="a_btn a_btn_transparent_secondary"
    text="transparent-secondary"
    type="button"
    @click="onAlert('transparent-secondary')"
  ></a-element>
  <a-element
    :aria-disabled="true"
    class="a_btn a_btn_transparent_tertiary"
    text="transparent-tertiary"
    type="button"
    @click="onAlert('transparent-tertiary')"
  ></a-element>
  <a-element
    :aria-disabled="true"
    class="a_btn a_btn_transparent_success"
    text="transparent-success"
    type="button"
    @click="onAlert('transparent-success')"
  ></a-element>
  <a-element
    :aria-disabled="true"
    class="a_btn a_btn_transparent_info"
    text="transparent-info"
    type="button"
    @click="onAlert('transparent-info')"
  ></a-element>
  <a-element
    :aria-disabled="true"
    class="a_btn a_btn_transparent_warning"
    text="transparent-warning"
    type="button"
    @click="onAlert('transparent-warning')"
  ></a-element>
  <a-element
    :aria-disabled="true"
    class="a_btn a_btn_transparent_danger"
    text="transparent-danger"
    type="button"
    @click="onAlert('transparent-danger')"
  ></a-element>
  <a-element
    :aria-disabled="true"
    class="a_btn a_btn_transparent_dark"
    text="transparent-dark"
    type="button"
    @click="onAlert('transparent-dark')"
  ></a-element>
  <a-element
    :aria-disabled="true"
    class="a_btn a_btn_transparent_light"
    text="transparent-light"
    type="button"
    @click="onAlert('transparent-light')"
  ></a-element>
</div>
```

```js
import { 
  AElement,
} from "aloha-vue";
    
export default {
  name: "PageElementAriaDisabled",
  components: {
    AElement,
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

## Element in loading state and loading indicator alignment

The **AElement** component allows showing the element in a loading state with a loading indicator. You can also specify the alignment of the loading indicator. This is useful for representing a background process that requires the user to wait.

*props: `loading`, `loading-align`*

```html
<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-element
    class="a_btn a_btn_primary"
    :loading="loading"
    loading-align="left"
    text="loading-align="left""
    type="button"
    @click="toggleLoading"
  ></a-element>
  <a-element
    class="a_btn a_btn_primary"
    :loading="loading"
    loading-align="right"
    text="loading-align="right""
    type="button"
    @click="toggleLoading"
  ></a-element>
</div>
```

```js
import {
  ref,
} from "vue";

import { 
  AElement,
} from "aloha-vue";
    
export default {
  name: "PageElementLoading",
  components: {
    AElement,
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

## Additional text inside the element

The **AElement** component allows displaying additional text inside the element. This can be useful for adding predefined text before or after the main text of the element.

*props: `text-after`, `text-before`*

```html
<a-element
  class="a_btn a_btn_primary"
  text="_A_SHOW_MORE_MORE_"
  text-after=" €"
  text-before="$ "
  type="button"
></a-element>
```

## Changing the text tag in the **AElement** component

This example shows how to configure the tag for the text in the **AElement** component in **Vue.js**. By default, the text is rendered inside a **span** tag. However, using the **text-tag** prop, the tag can be customized to use other **HTML** tags such as **strong**, **em**, or others.

*props: `text-tag`*

```html
<a-element
  class="a_btn a_btn_secondary"
  text="Aloha"
  text-tag="strong"
  type="button"
></a-element>
```

## Using safe **HTML** content as a string inside the element

The **AElement** component allows using safe **HTML** content as a string inside the element. When the "**safe-html**" property is enabled and an **HTML** string is passed, the provided **HTML** content is trusted and inserted directly using the **JavaScript** "**innerHTML**" attribute.

*props: `safe-html`*

```html
<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-element
    class="a_btn a_btn_primary"
    safe-html="_A_ELEMENT_EXAMPLE_HTML_"
    type="button"
  ></a-element>
  <a-element
    class="a_btn a_btn_primary"
    safe-html="<span onclick='alert("Aloha")'>Aloha</button>"
    type="button"
  ></a-element>
</div>
```

## Safe display of **HTML** content using **DomPurify**

The **AElement** component allows safely rendering **HTML** content without fully trusting it. Using the "**html**" property and the **DomPurify** library, the provided **HTML** content is sanitized and safely displayed inside the element.

*props: `html`*

```html
<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-element
    class="a_btn a_btn_primary"
    html="_A_ELEMENT_EXAMPLE_HTML_"
    type="button"
  ></a-element>
  <a-element
    class="a_btn a_btn_primary"
    html="<span onclick='alert("Aloha")'>Aloha</span>"
    type="button"
  ></a-element>
</div>
```

## Configuring text for different devices

The **AElement** component allows you to configure the element text for different devices. Using the "**:text**" prop as an object, you can specify different text for mobile and desktop devices.

*props: `text (as object)`*

```html
<a-element
  class="a_btn a_btn_primary"
  :text="{ mobile: 'Aloha', desktop: 'Aloha-desktop' }"
  type="button"
></a-element>
```

## Combining multiple titles into a single attribute

The **AElement** component allows you to combine multiple titles in one attribute. Using the "**:title**" prop as an array, you can specify multiple elements that will be merged into a single title for the element.

*props: `title (as array)`*

```html
<a-element
  :title="['Aloha', '$(Aloha)']"
  class="a_btn a_btn_primary"
  text="Aloha"
  type="button"
></a-element>
```

## Displaying **HTML** title and its placement

The **AElement** component allows displaying the title as **HTML** and controlling its placement. Using the "**:is-title-html**", "**:title**", and "**:title-placement**" props, you can use an **HTML** title and define its placement.

*props: `is-title-html`, `title`, `title-placement`, `title-attributes`*

```html
<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-element
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: top"
    title-placement="top"
    title="_A_ELEMENT_EXAMPLE_BIG_TITLE_"
    type="button"
  ></a-element>
  <a-element
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: auto"
    title-placement="auto"
    title="_A_ELEMENT_EXAMPLE_BIG_TITLE_"
    type="button"
  ></a-element>
  <a-element
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: auto-start"
    title-placement="auto-start"
    title="_A_ELEMENT_EXAMPLE_BIG_TITLE_"
    type="button"
  ></a-element>
  <a-element
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: auto-end"
    title-placement="auto-end"
    title="_A_ELEMENT_EXAMPLE_BIG_TITLE_"
    type="button"
  ></a-element>
  <a-element
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: top-start"
    title-placement="top-start"
    title="_A_ELEMENT_EXAMPLE_BIG_TITLE_"
    type="button"
  ></a-element>
  <a-element
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: top-end"
    title-placement="top-end"
    title="_A_ELEMENT_EXAMPLE_BIG_TITLE_"
    type="button"
  ></a-element>
  <a-element
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: right"
    title-placement="right"
    title="_A_ELEMENT_EXAMPLE_BIG_TITLE_"
    type="button"
  ></a-element>
  <a-element
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: right-start"
    title-placement="right-start"
    title="_A_ELEMENT_EXAMPLE_BIG_TITLE_"
    type="button"
  ></a-element>
  <a-element
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: right-end"
    title-placement="right-end"
    title="_A_ELEMENT_EXAMPLE_BIG_TITLE_"
    type="button"
  ></a-element>
  <a-element
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: bottom"
    title-placement="bottom"
    title="_A_ELEMENT_EXAMPLE_BIG_TITLE_"
    type="button"
  ></a-element>
  <a-element
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: bottom-start"
    title-placement="bottom-start"
    title="_A_ELEMENT_EXAMPLE_BIG_TITLE_"
    type="button"
  ></a-element>
  <a-element
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: bottom-end"
    title-placement="bottom-end"
    title="_A_ELEMENT_EXAMPLE_BIG_TITLE_"
    type="button"
  ></a-element>
  <a-element
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: left"
    title-placement="left"
    title="_A_ELEMENT_EXAMPLE_BIG_TITLE_"
    type="button"
  ></a-element>
  <a-element
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: left-start"
    title-placement="left-start"
    title="_A_ELEMENT_EXAMPLE_BIG_TITLE_"
    type="button"
  ></a-element>
  <a-element
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: left-end"
    title-placement="left-end"
    title="_A_ELEMENT_EXAMPLE_BIG_TITLE_"
    type="button"
  ></a-element>
  <a-element
    :is-title-html="true"
    :title-attributes="{ maxWidth: 150 }"
    class="a_btn a_btn_success"
    text="placement: auto, html-title max-width 150"
    title-placement="auto"
    title="_A_ELEMENT_EXAMPLE_BIG_TITLE_"
    type="button"
  ></a-element>
</div>
```

## The example below shows a translated title with a parameter. The **number** parameter is passed via the **extra** attribute.

Displaying **HTML** title with translation and parameters

*props: `is-title-html`, `title`, `extra`*

```html
<a-element
  :extra="{ number: 2 }"
  :is-title-html="true"
  class="a_btn a_btn_success"
  text="extra"
  title="_A_ELEMENT_EXAMPLE_BIG_TITLE_{{number}}_"
  type="button"
></a-element>
```

## Using the **props** "stop" to stop event propagation

Setting the **props** "stop" to a boolean value can be used to control whether the event should propagate. The example shows two scenarios: one with "stop" set to **true** and the other with **false**.

*props: `stop`*

```html
<div
  @click="showAlert"
>
  <a-element
    :stop="true"
    class="a_btn a_btn_primary"
    text="stopPropagation: :stop="true""
    type="button"
  ></a-element>
</div>
<div
  class="a_mt_4"
  @click="showAlert"
>
  <a-element
    :stop="false"
    class="a_btn a_btn_primary"
    text="stopPropagation: :stop="false""
    type="button"
  ></a-element>
</div>
```

```js
import { 
  AElement,
} from "aloha-vue";
    
export default {
  name: "PageElementStop",
  components: {
    AElement,
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

## Using the default slot

The **AElement** component allows placing custom content inside the element using the default slot "**:slots='default'**". Content placed in this slot will be displayed inside the element.

*slots: `default`*

```html
<a-element
  class="a_btn a_btn_primary"
  type="text"
>
  <span>(Aloha)</span>
</a-element>
```

## Using the "**buttonPrepend**" slot

The **AElement** component allows rendering additional content before the element's text using the "**buttonPrepend**" slot. Content placed in this slot will appear before the element's text.

*slots: `buttonPrepend`*

```html
<a-element
  class="a_btn a_btn_primary"
  text="Aloha"
  type="text"
>
  <template
    v-slot:buttonPrepend
  >
    <span>(***)</span>
  </template>
</a-element>
```

## Using the "**buttonAppend**" slot

The **AElement** component allows rendering additional content after the element's text using the "**buttonAppend**" slot. Content placed in this slot will appear after the element's text.

*slots: `buttonAppend`*

```html
<a-element
  class="a_btn a_btn_primary"
  text="Aloha"
  type="text"
>
  <template
    v-slot:buttonAppend
  >
    <span>(***)</span>
  </template>
</a-element>
```

## Using the "**buttonTitle**" slot for the **HTML** title

The **AElement** component allows specifying custom **HTML** content for the element's title using the "**buttonTitle**" slot in combination with the "**:is-title-html**" attribute. Content placed in this slot will be used as the **HTML** title of the element.

*props: `is-title-html`; slots: `buttonTitle`*

```html
<a-element
  :is-title-html="true"
  class="a_btn a_btn_primary"
  text="Aloha"
  type="text"
>
  <template
    v-slot:buttonTitle
  >
    <strong>(***Aloha***)</strong>
  </template>
</a-element>
```

## Using the element in switch mode

The **AElement** component allows using the element as a switch with two states (on/off). Using the "**:is-switch**" and "**:model-switch**" attributes, you can enable switch mode and control the element's state. The element is rendered as a **button** tag with the **aria-pressed** attribute indicating its state.

*props: `is-switch`, `model-switch`*

```html
<a-element
  :is-switch="true"
  :model-switch="modelSwitch"
  text="(***)"
  type="button"
  @click="toggleModelSwitch"
></a-element>
```

```js
import {
  ref,
} from "vue";

import { 
  AElement,
} from "aloha-vue";
    
export default {
  name: "PageElementSwitch",
  components: {
    AElement,
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

## Using advanced properties and events

The **AElement** component allows using various advanced properties and events for configuring and managing the element. The following example demonstrates several properties and events used to configure the element and manage its loading state.

*props: `class`, `loading`, `loading-align`, `text`, `text-before`, `icon-left`, `icon-right`, `title`, `text-aria-hidden`, `text-screen-reader`*

```html
<a-element
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
  type="button"
  @click="toggleLoading"
></a-element>
```

```js
import {
  ref,
} from "vue";

import { 
  AElement,
} from "aloha-vue";
    
export default {
  name: "PageElementComplex",
  components: {
    AElement,
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
| aria-disabled | Boolean |  |  | Determines whether the element is inactive. If set to **true**, the element will appear as inactive, and the "**aria-disabled**" accessibility attribute will be added. |
| aria-label | String / Number / Object |  |  | Defines the **ARIA** label for the element. You can use a string, number, or object as the value to set the desired label. |
| attributes | Object | () => ({}) |  | Specifies additional attributes for the element. You can use an object to define the required attributes and their values. |
| class | String / Object |  |  | **CSS** class |
| class-default | String | a_element |  | Sets the default style class for the element, establishing its general visual style. |
| class-default-hidden | String | a_element__hidden |  | Defines the class used to hide the element, used for managing its visibility in different contexts. |
| class-disabled | String | disabled |  | Specifies the **CSS** class applied when the element is disabled. |
| disabled | Boolean |  |  | Determines whether the element is disabled. If set to **true**, the element will be non-interactive. |
| exclude-render-attributes | Array | () => [] |  | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final **DOM**. |
| extra | Object |  |  | Additional object for translation |
| extraData | Any |  |  | Provides additional data for all slots of the component, allowing you to pass custom data and information for flexible and detailed slot customization. |
| href | String |  |  | Specifies the URL of the page the link goes to. |
| html | String / Number / Object / Array |  |  | **HTML** content to be rendered inside the element. |
| html-screen-reader | String / Number / Object / Array |  |  | Defines **HTML** content for screen reader accessibility. You can use a string, number, or object to specify the desired **HTML** content. |
| icon-attributes | Object | () => ({}) |  | Defines additional attributes for icons. You can use an object to specify the necessary attributes and their values for icons. |
| icon-class | String / Object |  |  | Specifies an additional **CSS** class for the icons. |
| icon-left | String / Object |  |  | Defines the icon displayed to the left of the element. You can specify the icon name as a string or provide different icons for different devices as an object. |
| icon-right | String / Object |  |  | Defines the icon displayed to the right of the element. You can specify the icon name as a string or provide different icons for different devices as an object. |
| icon-tag | String |  |  | Defines a custom **HTML** tag for the icons. |
| id | String | () => uniqueId("a_element_") |  | Defines a unique ID for the element. If not specified, a unique ID will be automatically generated. |
| is-switch | Boolean |  |  | Determines whether the element should be used as a switch. If set to **true**, the element will be rendered as a toggle. |
| is-title-html | Boolean |  |  | Determines whether the title should be interpreted as **HTML**. If set to **true**, the title will be rendered as **HTML**. |
| loading | Boolean | false |  | Determines whether the element is in a loading state. If set to **true**, a loading indicator will be shown. |
| loading-align | String | right |  | Defines the alignment of the loading indicator. Accepts values "**left**" or "**right**". |
| loading-class | String / Object | a_spinner_small |  | Specifies the **CSS** class used when the element is in a loading state. Accepts a string or an object for different state styles. |
| model-switch | Boolean |  |  | The model value that controls the toggle state of the element. If set to **true**, the element is active (**pressed=true**); otherwise, it is inactive (**pressed=false**). |
| prevent-keyboard-repeat | Boolean | false |  | Prevents repeated activation while a keyboard key is held down. When enabled, repeated **Enter** and **Space** key events are ignored after the first press. |
| prevent | Boolean |  |  | Determines whether to prevent the default behavior of event handlers for the element (**preventDefault**). |
| safe-html | String / Number / Object / Array |  |  | Enables trust for the provided **HTML** string, allowing it to be rendered inside the element. |
| safe-html-screen-reader | String / Number / Object / Array |  |  | Defines safe **HTML** content for screen reader regions. Accepts a string, number, or object for different states. |
| stop | Boolean |  |  | Determines whether to stop event propagation (**stopPropagation**). |
| tabindex | Number / String |  |  | Defines the **tabindex** value for the element. Can be a number or a string. |
| tag | String |  |  | Specifies the **HTML** tag to be used for rendering the element. |
| target | String |  |  | Specifies where the linked content will be open after clicking the link. |
| text | String / Number / Object / Array |  |  | String or object containing text for different devices. Use the keys "**mobile**" and "**desktop**" to set respective texts. |
| text-after | String / Number / Object |  |  | Defines the text to be displayed after the main element text. |
| text-aria-hidden | Boolean |  |  | Indicates whether the element's text should be marked as **aria-hidden="true"**. |
| text-before | String / Number / Object |  |  | Defines the text to be displayed before the main element text. |
| text-class | String |  |  | Specifies the **CSS** class to be applied to the element’s text. |
| text-screen-reader | String / Number / Object / Array |  |  | Defines the text to be read by a **screen reader**. |
| text-tag | String | span |  | This prop allows customizing the **HTML** tag used to wrap the text inside the element. |
| title | String / Number / Object / Array |  |  | String or array of elements that will be merged into a single title. |
| title-attributes | Object | {} |  | Provides an object for configuring additional **HTML** attributes for the element's title, allowing more detailed control over its behavior and style. |
| title-placement | String | top |  | Positioning of the **HTML** title. |
| title-z-index | String / Number | auto |  | Sets the **z-index** for the element's title to define its stacking order among overlapping elements. |
| to | Object / String |  |  | Internal link to another component by using Vue Router. |
| type | String | text |  | Specifies the element type. Allowed values: **button**, **link**, **text**, **submit**, and **reset**. |

## Slots

| name | description |
| --- | --- |
| buttonAppend | Slot containing content to be rendered after the element’s text. |
| buttonPrepend | Slot containing content to be rendered before the element’s text. |
| buttonTitle | Slot that contains **HTML** content to be used as the element’s title. |
| default | Default slot that contains content for the element. |

## Events

| name | type | description |
| --- | --- | --- |
| click | Function | Triggered when the component is clicked. |
