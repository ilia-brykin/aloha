# ATooltip (Tooltip)

ATooltip displays additional information when the user hovers over or focuses an element.

Put the tooltip only on an element that can get the focus (a button, a link, a form field) or use `tag="button"`: then it opens with the mouse and with the keyboard, and the focused element gets `aria-describedby`. A tooltip has no links or buttons: it disappears when the mouse leaves; use `ADropdown` or a modal for them. Escape closes only the tooltip.

## Basic usage

The tooltip opens on mouse hover and when the button gets the focus. The button gets `aria-describedby` with the text of the tooltip, so a screen reader reads it after the name of the button.

*slots: `default`, `title`*

```html
<a-tooltip>
  <a-button
    class="a_btn a_btn_primary"
    text="_A_TOOLTIP_EXAMPLE_SAVE_"
  />

  <template v-slot:title>
    <a-translation
      text="_A_TOOLTIP_EXAMPLE_SAVE_TITLE_"
    />
  </template>
</a-tooltip>
```

## Button with only an icon

The name of the button comes from `aria-label`, the tooltip shows it to sighted users. `without-aria-describedby` prevents a screen reader from reading the same text twice. For buttons also `AButton` with `title` and `is-title-html` works.

*props: `without-aria-describedby`*

```html
<a-tooltip
  :without-aria-describedby="true"
>
  <a-button
    aria-label="_A_TOOLTIP_EXAMPLE_SETTINGS_"
    class="a_btn a_btn_secondary"
    icon-left="Gear"
  />

  <template v-slot:title>
    <a-translation
      text="_A_TOOLTIP_EXAMPLE_SETTINGS_"
    />
  </template>
</a-tooltip>
```

## Placement

`placement` sets the side of the tooltip. If there is not enough space, it goes to the other side.

*props: `placement`*

```html
<div class="a_d_flex a_flex_wrap a_gap_3">
  <a-tooltip
    v-for="placement in placements"
    :key="placement"
    :placement="placement"
  >
    <a-button
      class="a_btn a_btn_secondary"
      :text="placement"
    />

    <template v-slot:title>
      <span>{{ placement }}</span>
    </template>
  </a-tooltip>
</div>
```

```js
import {
  AButton,
  ATooltip,
} from "aloha-vue";

export default {
  components: {
    AButton,
    ATooltip,
  },
  setup() {
    const placements = ["top", "right", "bottom", "left", "top-start", "bottom-end"];

    return {
      placements,
    };
  },
};
```

## Delay before opening

`time-open` waits so many ms before the tooltip opens on mouse hover, so tooltips do not flicker when the mouse moves over many elements. The focus opens the tooltip at once.

*props: `time-open`*

```html
<div class="a_d_flex a_flex_wrap a_gap_3">
  <a-tooltip
    v-for="time in times"
    :key="time"
    :time-open="time"
  >
    <a-button
      class="a_btn a_btn_secondary"
      :text="`time-open: ${ time }`"
    />

    <template v-slot:title>
      <span>{{ time }} ms</span>
    </template>
  </a-tooltip>
</div>
```

```js
import {
  AButton,
  ATooltip,
} from "aloha-vue";

export default {
  components: {
    AButton,
    ATooltip,
  },
  setup() {
    const times = [0, 300, 800];

    return {
      times,
    };
  },
};
```

## Switch off the tooltip

`is-hide` switches the tooltip off and closes it when it is open, e.g. when a text is not shortened and the tooltip would repeat it.

*props: `is-hide`*

```html
<a-one-checkbox
  v-model="isHide"
  class="a_mb_3"
  label="is-hide"
/>
<a-tooltip
  :is-hide="isHide"
>
  <a-button
    class="a_btn a_btn_primary"
    text="_A_TOOLTIP_EXAMPLE_SAVE_"
  />

  <template v-slot:title>
    <a-translation
      text="_A_TOOLTIP_EXAMPLE_SAVE_TITLE_"
    />
  </template>
</a-tooltip>
```

```js
import {
  ref,
} from "vue";

import {
  AButton,
  AOneCheckbox,
  ATooltip,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    AButton,
    AOneCheckbox,
    ATooltip,
    ATranslation,
  },
  setup() {
    const isHide = ref(false);

    return {
      isHide,
    };
  },
};
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
<a-tooltip
  class="a_btn a_btn_primary a_ml_3"
  tag="button"
  width="20rem"
>
  <span>width="20rem"</span>

  <template v-slot:title>
    <div>Aloha</div>
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
| is-hide | Boolean |  |  | The tooltip is not shown, only the content of the default slot. Closes an open tooltip. |
| max-width | Number / String |  |  | Maximum width of the tooltip. A number is in px, a string is used as it is. |
| min-width | Number / String |  |  | Minimum width of the tooltip. A number is in px, a string is used as it is. |
| offset-distance | Number | 6 |  | Distance in px between the tooltip and the element. |
| offset-skidding | Number | 0 |  | Shift in px of the tooltip along the element. |
| placement | String | top |  | Position of the tooltip relative to the element, e.g. top, bottom, left, right, top-start. |
| popper-container-id | String | a_tooltip_container |  | ID of the container at the end of the body in which the tooltip is rendered. |
| show-arrow | Boolean | true |  | Shows the arrow of the tooltip. |
| tag | String | span |  | HTML tag of the element around the default slot. |
| time-open | Number | 0 |  | Delay in ms before the tooltip opens on mouse hover. The focus opens it at once. |
| time-close | Number | 100 |  | Time in ms before the tooltip closes after the pointer leaves the element or the tooltip. |
| width | Number / String |  |  | Fixed width of the tooltip. A number is in px, a string is used as it is (e.g. "20rem"). |
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
