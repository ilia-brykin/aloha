# ASkeleton (Skeleton)

The **ASkeleton** component shows gray placeholders in the shape of the content while it is loading. The page does not jump when the content appears. Screen readers announce the loading text, the shapes are hidden from them.

## Basic usage

Without props the skeleton shows a title and three rows.

```html
<a-skeleton></a-skeleton>
```

## Avatar, title and rows

`avatar` adds a circle on the left, `title` turns the title off and `rows` sets the number of rows. The last row is shorter, like the end of a paragraph.

*props: `avatar`, `rows`, `title`*

```html
<a-skeleton
  :avatar="true"
  :rows="2"
></a-skeleton>
<a-skeleton
  class="a_mt_5"
  :title="false"
  :rows="5"
></a-skeleton>
```

## Without animation

`:animated="false"` turns the moving band off. With the system setting “reduce motion” the animation is always off.

*props: `animated`*

```html
<a-skeleton
  :animated="false"
></a-skeleton>
```

## Loading the content

While `loading` is `true`, the skeleton is shown, then the default slot.

*props: `loading`*

```html
<a-button
  class="a_btn a_btn_secondary a_mb_3"
  text="Reload"
  :disabled="loading"
  @click="load"
></a-button>
<a-skeleton
  :loading="loading"
  :avatar="true"
  :rows="2"
>
  <div class="a_d_flex a_gap_3 a_align_items_start">
    <span class="a_rounded_circle ...">AB</span>
    <div>
      <h3>Anna Becker</h3>
      <p>Lorem ipsum dolor sit amet...</p>
    </div>
  </div>
</a-skeleton>
```

```js
import {
  AButton,
  ASkeleton,
} from "aloha-vue";
import {
  ref,
} from "vue";

export default {
  name: "PageSkeletonLoading",
  components: {
    AButton,
    ASkeleton,
  },
  setup() {
    const loading = ref(true);

    const load = () => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, 2000);
    };

    load();

    return {
      load,
      loading,
    };
  },
};
```

## Own layout

The slot `template` replaces the default layout. Build it from **ASkeletonItem** in the shape of the real content, e.g. a card.

```html
<a-skeleton style="max-width: 20rem;">
  <template v-slot:template>
    <a-skeleton-item variant="image"></a-skeleton-item>
    <a-skeleton-item
      class="a_mt_3"
      variant="heading"
      width="70%"
    ></a-skeleton-item>
    <a-skeleton-item class="a_mt_2"></a-skeleton-item>
    <a-skeleton-item
      class="a_mt_2"
      width="80%"
    ></a-skeleton-item>
    <a-skeleton-item
      class="a_mt_3"
      variant="button"
    ></a-skeleton-item>
  </template>
</a-skeleton>
```

## Repeating: table rows

`count` repeats the skeleton, e.g. for list items or table rows. The slot `template` gets the `index` of the repetition.

*props: `count`*

```html
<a-skeleton
  :count="4"
  style="--a_skeleton_group_gap: .75rem;"
>
  <template v-slot:template="{ index }">
    <div class="a_d_flex a_gap_3 a_align_items_center">
      <a-skeleton-item width="25%"></a-skeleton-item>
      <a-skeleton-item :width="`${ 50 - index * 8 }%`"></a-skeleton-item>
      <a-skeleton-item width="15%"></a-skeleton-item>
      <a-skeleton-item
        class="a_ml_auto"
        variant="button"
        width="4rem"
      ></a-skeleton-item>
    </div>
  </template>
</a-skeleton>
```

## Variants of ASkeletonItem

`variant` sets the shape. `width` and `height` change the size; a number is taken as pixels.

*props: `variant`, `width`, `height`*

```html
<a-skeleton-item variant="text"></a-skeleton-item>
<a-skeleton-item variant="heading"></a-skeleton-item>
<a-skeleton-item variant="circle"></a-skeleton-item>
<a-skeleton-item variant="rect"></a-skeleton-item>
<a-skeleton-item variant="button"></a-skeleton-item>
<a-skeleton-item variant="input"></a-skeleton-item>
<a-skeleton-item
  variant="image"
  width="12rem"
></a-skeleton-item>
```

## Without flickering

With `throttle` (ms) the skeleton is shown only if the loading takes longer. A fast answer does not make the skeleton flicker.

*props: `throttle`*

```html
<a-button
  class="a_btn a_btn_secondary"
  text="200 ms"
  :disabled="loading"
  @click="load({ duration: 200 })"
></a-button>
<a-button
  class="a_btn a_btn_secondary"
  text="2 s"
  :disabled="loading"
  @click="load({ duration: 2000 })"
></a-button>
<a-skeleton
  :loading="loading"
  :throttle="500"
>
  <p>Lorem ipsum dolor sit amet...</p>
</a-skeleton>
```

```js
import {
  AButton,
  ASkeleton,
} from "aloha-vue";
import {
  ref,
} from "vue";

export default {
  name: "PageSkeletonThrottle",
  components: {
    AButton,
    ASkeleton,
  },
  setup() {
    const loading = ref(false);

    const load = ({ duration }) => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, duration);
    };

    return {
      load,
      loading,
    };
  },
};
```

## ASkeleton

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| animated | Boolean | true |  | Shows a moving band over the shapes. |
| avatar | Boolean | false |  | Default layout: shows a circle on the left. |
| count | Number | 1 |  | How often the skeleton is repeated. |
| extra | Object | undefined |  | Values for the placeholders of the loading text. |
| loading | Boolean | true |  | Shows the skeleton. With false the default slot is shown. |
| rows | Number | 3 |  | Default layout: the number of text rows. |
| tag | String | "div" |  | HTML tag of the skeleton. |
| text | String | "_A_SKELETON_LOADING_" |  | Loading text for screen readers. |
| throttle | Number | 0 |  | Delay in milliseconds before the skeleton is shown. |
| title | Boolean | true |  | Default layout: shows a title. |

## ASkeletonItem

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| height | String \| Number | undefined |  | Height of the shape. A number is taken as pixels. |
| tag | String | "span" |  | HTML tag of the shape. |
| variant | String | "text" |  | Shape: **text**, **heading**, **circle**, **rect**, **button**, **input** or **image**. |
| width | String \| Number | undefined |  | Width of the shape. A number is taken as pixels. |

## Slots

| name | description |
| --- | --- |
| default | The content that is shown when loading is false. |
| template | Own layout of the skeleton instead of the default one. The slot scope provides **index**. |

## Translations

| key | en |
| --- | --- |
| `_A_SKELETON_LOADING_` | Loading |

## CSS variables (`scss/components/ASkeleton.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_skeleton_bg` |  | Color of the shapes. |
| `--a_skeleton_highlight` |  | Color of the moving band of the animation. |
| `--a_skeleton_duration` |  | Duration of one pass of the animation. |
| `--a_skeleton_border_radius` |  | Corner radius of the shapes. |
| `--a_skeleton_gap` |  | Space between the rows. |
| `--a_skeleton_group_gap` |  | Space between the repeated skeletons (prop count). |
| `--a_skeleton_text_height` |  | Height of a text row (variant "text"). |
| `--a_skeleton_heading_height` |  | Height of a heading (variant "heading"). |
| `--a_skeleton_title_width` |  | Width of the title of the default skeleton. |
| `--a_skeleton_last_row_width` |  | Width of the last row of the default skeleton. |
| `--a_skeleton_avatar_size` |  | Size of the avatar (variant "circle"). |
| `--a_skeleton_rect_height` |  | Height of a block (variant "rect"). |
| `--a_skeleton_control_height` |  | Height of a button and of an input (variants "button" and "input"). |
| `--a_skeleton_control_border_radius` |  | Corner radius of a button and of an input. |
| `--a_skeleton_button_width` |  | Width of a button (variant "button"). |
| `--a_skeleton_image_aspect_ratio` |  | Aspect ratio of an image (variant "image"). |
