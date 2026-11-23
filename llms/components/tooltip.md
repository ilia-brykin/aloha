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
| arrow-padding | Number / Function |  |  | Minimum distance in px between the arrow and the edges of the tooltip. A function receives the sizes and returns the number. |
| id | String | a_tooltip_{n} |  | ID of the tooltip. The element gets aria-describedby with this ID. |
| is-hide | Boolean |  |  | The tooltip is not shown, only the content of the default slot. |
| max-width | Number |  |  | Maximum width of the tooltip in px. |
| min-width | Number |  |  | Minimum width of the tooltip in px. |
| offset-distance | Number | 6 |  | Distance in px between the tooltip and the element. |
| offset-skidding | Number | 0 |  | Shift in px of the tooltip along the element. |
| placement | String | top |  | Position of the tooltip relative to the element, e.g. top, bottom, left, right, top-start. |
| popper-container-id | String | a_tooltip_container |  | ID of the container at the end of the body in which the tooltip is rendered. |
| show-arrow | Boolean | true |  | Shows the arrow of the tooltip. |
| tag | String | span |  | HTML tag of the element around the default slot. |
| time-close | Number | 100 |  | Time in ms before the tooltip closes after the pointer leaves the element or the tooltip. |
| width | Number |  |  | Fixed width of the tooltip in px. |
| without-aria-describedby | Boolean |  |  | The element does not get aria-describedby, e.g. if the text of the tooltip is already read otherwise. |

## Slots

| name | description |
| --- | --- |
| default | The element that shows the tooltip on hover and focus. |
| title | Content of the tooltip. |

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
