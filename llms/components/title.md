# ATooltip (Tooltip)

ATooltip displays additional information when the user hovers over or focuses an element.

## Basic usage

*slots: `default`, `title`*

```html
<a-tooltip>
  <span>Aloha</span>
  
  <template
    v-slot:title
  >
    <div>Aloha</div>
  </template>
</a-tooltip>
```

## Custom tag

You can change the HTML tag used for the tooltip trigger element.

*props: `tag`*

```html
<a-tooltip
  class="a_btn a_btn_primary"
  tag="button"
>
  <span>Aloha</span>
  
  <template
    v-slot:title
  >
    <div>{{ title }}</div>
  </template>
</a-tooltip>
```

```js
import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipTag",
  components: {
    ATooltip,
  },
  setup() {
    const title = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
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
      title,
    };
  },
};
```

## Maximum width

Limits the maximum width of the tooltip content.

*props: `max-width`*

```html
<a-tooltip
  class="a_btn a_btn_primary"
  tag="button"
  :max-width="300"
>
  <span>Aloha</span>
  
  <template
    v-slot:title
  >
    <div>{{ title }}</div>
  </template>
</a-tooltip>
```

```js
import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipMaxWidth",
  components: {
    ATooltip,
  },
  setup() {
    const title = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
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
      title,
    };
  },
};
```

## Fixed width

Sets a fixed width for the tooltip content.

*props: `width`*

```html
<a-tooltip
  class="a_btn a_btn_primary"
  tag="button"
  :width="200"
>
  <span>Aloha</span>
  
  <template
    v-slot:title
  >
    <div>Aloha</div>
  </template>
</a-tooltip>

<a-tooltip
  class="a_btn a_btn_primary a_ml_3"
  tag="button"
  :width="200"
>
  <span>a_text_center</span>
  
  <template
    v-slot:title
  >
    <div
      class="a_text_center"
    >Aloha</div>
  </template>
</a-tooltip>
```

## Close delay

Controls how long the tooltip remains visible after the pointer leaves the trigger or tooltip area.

*props: `time-close`*

```html
<a-tooltip
  class="a_btn a_btn_primary"
  tag="button"
  :time-close="0"
>
  <span>0</span>
  
  <template
    v-slot:title
  >
    <div>0</div>
  </template>
</a-tooltip>

<a-tooltip
  class="a_btn a_btn_primary a_ml_3"
  tag="button"
  :time-close="100"
>
  <span>100</span>
  
  <template
    v-slot:title
  >
    <div>100</div>
  </template>
</a-tooltip>
<a-tooltip
  class="a_btn a_btn_primary a_ml_3"
  tag="button"
  :time-close="1000"
>
  <span>1000</span>
  
  <template
    v-slot:title
  >
    <div>1000</div>
  </template>
</a-tooltip>
```

## Hide arrow

The tooltip arrow can be hidden.

*props: `show-arrow`*

```html
<a-tooltip
  class="a_btn a_btn_primary"
  tag="button"
  :show-arrow="false"
>
  <span>Aloha</span>
  
  <template
    v-slot:title
  >
    <div>Aloha</div>
  </template>
</a-tooltip>
```

## Horizontal offset

Moves the tooltip along the reference element axis.

*props: `offset-skidding`*

```html
<a-tooltip
  class="a_btn a_btn_primary"
  tag="button"
  :offset-skidding="30"
>
  <span>:offset-skidding="30"</span>
  
  <template
    v-slot:title
  >
    <div>:offset-skidding="30"</div>
  </template>
</a-tooltip>

<a-tooltip
  class="a_btn a_btn_primary a_ml_3"
  tag="button"
  :offset-skidding="-30"
>
  <span>:offset-skidding="-30"</span>
  
  <template
    v-slot:title
  >
    <div>:offset-skidding="-30"</div>
  </template>
</a-tooltip>
```

## Distance from trigger

Changes the distance between the tooltip and the trigger element.

*props: `offset-distance`*

```html
<a-tooltip
  class="a_btn a_btn_secondary"
  tag="button"
  :offset-distance="30"
>
  <span>:offset-distance="30"</span>
  
  <template
    v-slot:title
  >
    <div>:offset-distance="30"</div>
  </template>
</a-tooltip>

<a-tooltip
  class="a_btn a_btn_secondary a_ml_3"
  tag="button"
  :offset-distance="6"
>
  <span>:offset-distance="6"</span>
  
  <template
    v-slot:title
  >
    <div>:offset-distance="6"</div>
  </template>
</a-tooltip>

<a-tooltip
  class="a_btn a_btn_secondary a_ml_3"
  tag="button"
  :offset-distance="0"
>
  <span>:offset-distance="0"</span>
  
  <template
    v-slot:title
  >
    <div>:offset-distance="0"</div>
  </template>
</a-tooltip>

<a-tooltip
  class="a_btn a_btn_secondary a_ml_3"
  tag="button"
  :offset-distance="-10"
>
  <span>:offset-distance="-10"</span>
  
  <template
    v-slot:title
  >
    <div>:offset-distance="-10"</div>
  </template>
</a-tooltip>
```

## Arrow padding

Sets the padding that limits how close the arrow can get to the tooltip edges.

*props: `arrow-padding`*

```html
<a-tooltip
  class="a_btn a_btn_primary"
  tag="button"
  :arrow-padding="35"
>
  <span>Aloha</span>
  
  <template
    v-slot:title
  >
    <div>Aloha</div>
  </template>
</a-tooltip>
```

## Arrow padding callback

Arrow padding can also be calculated dynamically with a callback function.

*props: `arrow-padding`*

```html
<a-tooltip
  class="a_btn a_btn_primary"
  tag="button"
  :arrow-padding="arrowPaddingCallback"
>
  <span>Aloha</span>
  
  <template
    v-slot:title
  >
    <div>{{ title }}</div>
  </template>
</a-tooltip>
```

```js
import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipArrowPaddingFunction",
  components: {
    ATooltip,
  },
  setup() {
    const arrowPaddingCallback = ({ popper, reference, placement }) => {
      console.log("placement", placement);
      console.log("popper", popper);
      console.log("reference", reference);
      return popper.width / reference.width + 400;
    };

    const title = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.`;

    return {
      arrowPaddingCallback,
      title,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| btn-attributes | Object | {} |  | Props or HTML attributes for the "Show More/Show Less" button **(AButton)** |
| btn-class | String / Object | a_btn a_btn_link a_p_0 |  | The CSS classes for the "Show More/Show Less" button. |
| btn-icon-left-less | String |  |  | The icon displayed on the left side of the "Show Less" button. |
| btn-icon-left-more | String |  |  | The icon displayed on the left side of the "Show More" button. |
| btn-icon-right-less | String |  |  | The icon displayed on the right side of the "Show Less" button. |
| btn-icon-right-more | String |  |  | The icon displayed on the right side of the "Show More" button. |
| btn-id | String |  |  | ID for the "Show More/Show Less" button. |
| btn-parent-class | String | a_text_center |  | The CSS class for the parent element of the button. |
| btn-text-less | String | _SHOW_LESS_ |  | The text for the "Show Less" button. |
| btn-text-more | String | _SHOW_MORE_ |  | The text for the "Show More" button. |
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
| text-less | String |  |  | The shorter text content to be displayed when the user clicks "Show Less." |
| text-more | String |  |  | The longer text content to be displayed when the user clicks "Show More." |

## Slots

| name | description |
| --- | --- |
| button | Here, you can customize the content of the "Show More/Show Less" button. You have access to the values **isButtonVisible** and **isOpen**, which provide information about the button's visibility and current state. |
| less | This slot allows you to customize the shorter text content displayed when the user clicks "Show Less." You have access to the values **isButtonVisible** and **isOpen**, which provide information about the button's visibility and current state. |
| more | This slot allows you to customize the longer text content displayed when the user clicks "Show More." You have access to the values **isButtonVisible** and **isOpen**, which provide information about the button's visibility and current state. |

## Exposes

| name | type | description |
| --- | --- | --- |
| buttonRef | Object | A Ref object pointing to the DOM element of the "Show More/Show Less" button in the component. This allows you to manipulate the button element directly or access events such as clicks. |
| containerRef | Object | A Ref object pointing to the DOM element of the container element of the component. This can be useful for controlling the container element or accessing its properties. |
| isOpen | Boolean | A boolean value indicating whether the extended text content is currently displayed (true) or not (false). You can use this value to monitor the state of the component and respond accordingly. |
| toggleButton | Function | A function that can be called to toggle the state of the component, thereby showing or hiding the extended text content. |

## CSS variables (`scss/utils/tooltip.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_tooltip_bg` |  | Background of the tooltip and its arrow. |
| `--a_tooltip_color` |  | Text color of the tooltip. |
| `--a_tooltip_border_radius` |  | Corner radius of the tooltip. |
| `--a_tooltip_padding_x` |  | Horizontal padding of the tooltip. |
| `--a_tooltip_padding_y` |  | Vertical padding of the tooltip. |
| `--a_tooltip_font_size` |  | Font size of the tooltip. |
| `--a_tooltip_arrow_width` |  | Width of the arrow. |
| `--a_tooltip_arrow_height` |  | Height of the arrow. |
| `--a_tooltip_arrow_shift` |  | Offset of the arrow from the tooltip edge. |
| `--a_tooltip_max_height` |  | Maximum height of the tooltip. Longer content scrolls. |
| `--a_tooltip_box_shadow` |  | Shadow of the tooltip. |
| `--a_tooltip_arrow_box_shadow` |  | Shadow of the arrow. |
