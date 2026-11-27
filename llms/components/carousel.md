# ACarousel (Carousel)

A carousel is a component for cyclically displaying elements (images, text, etc.) in a limited space. Users can navigate through the elements using navigation buttons or indicators.

## Basic usage

```html
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_4">
    <a-carousel
      :data="data"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      key-id="id"
    >
      <template
        v-slot:item="{ item }"
      >
        <img 
          :alt="item.alt"
          :src="item.src"
          class="a_height_auto a_width_100"
        >
      </template>
    </a-carousel>
  </div>
  <div class="a_column a_column_12_touch a_column_4">
    <a-carousel
      :data="dataOne"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      key-id="id"
    >
      <template
        v-slot:item="{ item }"
      >
        <img 
          :alt="item.alt"
          :src="item.src"
          class="a_height_auto a_width_100"
        >
      </template>
    </a-carousel>
  </div>
</div>
```

```js
import { 
  ACarousel,
  getTranslatedText,
} from "aloha-vue";
    
export default {
  name: "PageCarouselBasic",
  components: {
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_",
          }),
        },
        {
          id: 2,
          src: "./assets/Soccer_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_",
          }),
        },
        {
          id: 3,
          src: "./assets/Tennis_ball_purple_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_",
          }),
        },
        {
          id: 4,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
      ];
    });
    const dataOne = computed(() => {
      return [
        {
          id: 4,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
      ];
    });
    
    return {
      data,
      dataOne,
    };
  },
};
```

## v-model and methods

**v-model** contains the id of the active slide (the value of **key-id**, without it the index). A change of the model from outside activates the slide. The methods **next**, **previous**, **setActiveItem**, **play** and **stop** are available through a ref.

*props: `model-value`; emits: `update:modelValue`; exposes: `next`, `previous`, `setActiveItem`*

```html
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_4">
    <div class="a_d_flex a_gap_2 a_mb_3 a_flex_wrap">
      <a-button
        class="a_btn a_btn_secondary"
        text="_A_CAROUSEL_COMPONENT_MODEL_PREVIOUS_"
        @click="toPrevious"
      ></a-button>
      <a-button
        class="a_btn a_btn_secondary"
        text="_A_CAROUSEL_COMPONENT_MODEL_NEXT_"
        @click="toNext"
      ></a-button>
      <a-button
        class="a_btn a_btn_secondary"
        text="_A_CAROUSEL_COMPONENT_MODEL_LAST_"
        @click="toLast"
      ></a-button>
    </div>
    <p>model: {{ model }}</p>
    <a-carousel
      ref="carouselRef"
      v-model="model"
      :data="data"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      key-id="id"
    >
    <template
      v-slot:item="{ item }"
    >
      <img
        :alt="item.alt"
        :src="item.src"
        class="a_height_auto a_width_100"
      >
    </template>
    </a-carousel>
  </div>
</div>
```

```js
import {
  computed,
  ref,
} from "vue";

import {
  AButton,
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselModel",
  components: {
    AButton,
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({ placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_" }),
          label: "_A_CAROUSEL_COMPONENT_LABEL_BASKETBALL_",
        },
        // ...
      ];
    });

    const model = ref(2);
    const carouselRef = ref(undefined);

    const toPrevious = () => {
      carouselRef.value.previous();
    };

    const toNext = () => {
      carouselRef.value.next();
    };

    const toLast = () => {
      carouselRef.value.setActiveItem(4);
    };

    return {
      carouselRef,
      data,
      model,
      toLast,
      toNext,
      toPrevious,
    };
  },
};
```

## Automatic rotation

With **autoplay-start** the slides change by themselves every **autoplay-interval** milliseconds. **autoplay-show** shows only the button, the user starts the rotation. The button to start and stop the rotation is always shown with the rotation (WCAG 2.2.2) and is the first element in the order of the focus. The rotation stops when the focus goes into the carousel and starts again only with the button. It pauses while the mouse is over the carousel (**autoplay-pause-on-hover**). With **prefers-reduced-motion** it does not start by itself. While the slides rotate, the screen reader does not read them (**aria-live="off"**).

*props: `autoplay-start`, `autoplay-show`, `autoplay-interval`, `autoplay-pause-on-hover`; emits: `play`, `stop`*

```html
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_4">
    <a-translation
      tag="h3"
      html="_A_CAROUSEL_COMPONENT_AUTOPLAY_START_"
    ></a-translation>
    <a-carousel
      :data="data"
      :autoplay-interval="3000"
      :autoplay-start="true"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      key-id="id"
      @play="onPlay"
      @stop="onStop"
    >
    <template
      v-slot:item="{ item }"
    >
      <img
        :alt="item.alt"
        :src="item.src"
        class="a_height_auto a_width_100"
      >
    </template>
    </a-carousel>
  </div>
  <div class="a_column a_column_12_touch a_column_4">
    <a-translation
      tag="h3"
      html="_A_CAROUSEL_COMPONENT_AUTOPLAY_SHOW_"
    ></a-translation>
    <a-carousel
      :data="data"
      :autoplay-show="true"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      indicators-placement="bottom-start"
      key-id="id"
      @play="onPlay"
      @stop="onStop"
    >
    <template
      v-slot:item="{ item }"
    >
      <img
        :alt="item.alt"
        :src="item.src"
        class="a_height_auto a_width_100"
      >
    </template>
    </a-carousel>
  </div>
</div>
```

```js
import {
  computed,
} from "vue";

import {
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselAutoplay",
  components: {
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({ placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_" }),
          label: "_A_CAROUSEL_COMPONENT_LABEL_BASKETBALL_",
        },
        // ...
      ];
    });

    const onPlay = () => {
      console.log("play");
    };

    const onStop = () => {
      console.log("stop");
    };

    return {
      data,
      onPlay,
      onStop,
    };
  },
};
```

## Without loop

With **:loop="false"** the carousel stops at the first and at the last slide. The arrows without a slide in their direction get **aria-disabled** and keep the focus. The keys in the tabs do not go round, the rotation stops on the last slide.

*props: `loop`*

```html
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_4">
    <a-carousel
      :data="data"
      :loop="false"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      key-id="id"
    >
    <template
      v-slot:item="{ item }"
    >
      <img
        :alt="item.alt"
        :src="item.src"
        class="a_height_auto a_width_100"
      >
    </template>
    </a-carousel>
  </div>
</div>
```

```js
import {
  computed,
} from "vue";

import {
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselLoop",
  components: {
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({ placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_" }),
          label: "_A_CAROUSEL_COMPONENT_LABEL_BASKETBALL_",
        },
        // ...
      ];
    });

    return {
      data,
    };
  },
};
```

## Animation

The prop **transition** sets the animation of the change: **slide** (default), **fade** or **none**. **motion-blur** adds a blur in the middle of the change. Duration and timing function are CSS variables. With **prefers-reduced-motion** there is no animation.

*props: `transition`, `motion-blur`*

```html
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_4">
    <a-translation
      tag="h3"
      html="_A_CAROUSEL_COMPONENT_TRANSITION_FADE_"
    ></a-translation>
    <a-carousel
      :data="data"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      key-id="id"
      transition="fade"
    >
    <template
      v-slot:item="{ item }"
    >
      <img
        :alt="item.alt"
        :src="item.src"
        class="a_height_auto a_width_100"
      >
    </template>
    </a-carousel>
  </div>
  <div class="a_column a_column_12_touch a_column_4">
    <a-translation
      tag="h3"
      html="_A_CAROUSEL_COMPONENT_TRANSITION_MOTION_BLUR_"
    ></a-translation>
    <a-carousel
      :data="data"
      :motion-blur="true"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      key-id="id"
    >
    <template
      v-slot:item="{ item }"
    >
      <img
        :alt="item.alt"
        :src="item.src"
        class="a_height_auto a_width_100"
      >
    </template>
    </a-carousel>
  </div>
  <div class="a_column a_column_12_touch a_column_4">
    <a-translation
      tag="h3"
      html="_A_CAROUSEL_COMPONENT_TRANSITION_NONE_"
    ></a-translation>
    <a-carousel
      :data="data"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      key-id="id"
      transition="none"
    >
    <template
      v-slot:item="{ item }"
    >
      <img
        :alt="item.alt"
        :src="item.src"
        class="a_height_auto a_width_100"
      >
    </template>
    </a-carousel>
  </div>
</div>
```

```js
import {
  computed,
} from "vue";

import {
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselTransition",
  components: {
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({ placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_" }),
          label: "_A_CAROUSEL_COMPONENT_LABEL_BASKETBALL_",
        },
        // ...
      ];
    });

    return {
      data,
    };
  },
};
```

## Mode card

With **type="card"** the active slide is in the middle, the previous and the next slide are smaller on the sides (**card-scale**). A click on a side slide activates it. The side slides are hidden for the screen reader and their content can not be focused, the keyboard uses the arrows and the tabs. The vertical mode card needs **height**.

*props: `type`, `card-scale`*

```html
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_8">
    <a-carousel
      :data="data"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      key-id="id"
      type="card"
    >
    <template
      v-slot:item="{ item }"
    >
      <img
        :alt="item.alt"
        :src="item.src"
        class="a_height_auto a_width_100"
      >
    </template>
    </a-carousel>
  </div>
  <div class="a_column a_column_12_touch a_column_4">
    <a-translation
      tag="h3"
      html="_A_CAROUSEL_COMPONENT_CARD_VERTICAL_"
    ></a-translation>
    <a-carousel
      :data="data"
      :card-scale="0.7"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      direction="vertical"
      height="24rem"
      key-id="id"
      type="card"
    >
    <template
      v-slot:item="{ item }"
    >
      <img
        :alt="item.alt"
        :src="item.src"
        class="a_height_auto a_width_100"
      >
    </template>
    </a-carousel>
  </div>
</div>
```

```js
import {
  computed,
} from "vue";

import {
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselCard",
  components: {
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({ placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_" }),
          label: "_A_CAROUSEL_COMPONENT_LABEL_BASKETBALL_",
        },
        // ...
      ];
    });

    return {
      data,
    };
  },
};
```

## Vertical carousel

With **direction="vertical"** the slides change from the bottom to the top, the arrows are at the top and at the bottom, the tabs in a column. In the tabs the keys **ArrowUp** and **ArrowDown** change the slide. **height** sets a fixed height of the slides, without it the height is the height of the active slide.

*props: `direction`, `height`*

```html
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_4">
    <a-carousel
      :data="data"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      direction="vertical"
      height="20rem"
      key-id="id"
    >
    <template
      v-slot:item="{ item }"
    >
      <img
        :alt="item.alt"
        :src="item.src"
        class="a_height_auto a_width_100"
      >
    </template>
    </a-carousel>
  </div>
  <div class="a_column a_column_12_touch a_column_4">
    <a-translation
      tag="h3"
      html="_A_CAROUSEL_COMPONENT_VERTICAL_MOTION_BLUR_"
    ></a-translation>
    <a-carousel
      :data="data"
      :motion-blur="true"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      direction="vertical"
      height="20rem"
      key-id="id"
    >
    <template
      v-slot:item="{ item }"
    >
      <img
        :alt="item.alt"
        :src="item.src"
        class="a_height_auto a_width_100"
      >
    </template>
    </a-carousel>
  </div>
</div>
```

```js
import {
  computed,
} from "vue";

import {
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselVertical",
  components: {
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({ placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_" }),
          label: "_A_CAROUSEL_COMPONENT_LABEL_BASKETBALL_",
        },
        // ...
      ];
    });

    return {
      data,
    };
  },
};
```

## Labels of the slides

**key-label** is the key of the label in the data. The label is the name of the tab instead of "Slide 3". With **indicators-type="labels"** the tabs show the labels as text. **indicators-placement="outside"** shows the controls under the slides instead of over the image.

*props: `key-label`, `indicators-type`, `indicators-placement`*

```html
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_4">
    <a-translation
      tag="h3"
      html="_A_CAROUSEL_COMPONENT_LABELS_OUTSIDE_"
    ></a-translation>
    <a-carousel
      :data="data"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      indicators-placement="outside"
      indicators-type="labels"
      key-id="id"
      key-label="label"
    >
    <template
      v-slot:item="{ item }"
    >
      <img
        :alt="item.alt"
        :src="item.src"
        class="a_height_auto a_width_100"
      >
    </template>
    </a-carousel>
  </div>
  <div class="a_column a_column_12_touch a_column_4">
    <a-translation
      tag="h3"
      html="_A_CAROUSEL_COMPONENT_LABELS_DOTS_"
    ></a-translation>
    <a-carousel
      :data="data"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      key-id="id"
      key-label="label"
    >
    <template
      v-slot:item="{ item }"
    >
      <img
        :alt="item.alt"
        :src="item.src"
        class="a_height_auto a_width_100"
      >
    </template>
    </a-carousel>
  </div>
</div>
```

```js
import {
  computed,
} from "vue";

import {
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselLabels",
  components: {
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({ placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_" }),
          label: "_A_CAROUSEL_COMPONENT_LABEL_BASKETBALL_",
        },
        // ...
      ];
    });

    return {
      data,
    };
  },
};
```

## Aria disabled

The carousel component can be marked as disabled for assistive technologies using the aria-disabled attribute.

*props: `aria-disabled`*

```html
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_6">
    <a-carousel
      :data="data"
      aria-label="Carousel with balls"
      :aria-disabled="true"
      key-id="id"
    >
      <template v-slot:item="{ item }">
        <img
          class="a_height_auto a_width_100"
          :src="item.src"
          :alt="item.alt"
        />
      </template>
    </a-carousel>
  </div>
</div>
```

```js
import {
  computed,
} from "vue";

import {
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselAriaDisabled",
  components: {
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_",
          }),
        },
        {
          id: 2,
          src: "./assets/Soccer_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_",
          }),
        },
        {
          id: 3,
          src: "./assets/Tennis_ball_purple_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_",
          }),
        },
        {
          id: 4,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
      ];
    });

    return {
      data,
    };
  },
};
```

## Arrows trigger

The carousel component can display navigation arrows in different ways: always visible, only on hover, only on focus, or on both hover and focus.

*props: `arrows-trigger`*

```html
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_4">
    <a-translation
      tag="h3"
      html="_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_HOVER_"
    ></a-translation>
    <a-carousel
      :data="data"
      aria-label="Carousel with balls"
      arrows-trigger="hover"
      key-id="id"
    >
      <template v-slot:item="{ item }">
        <img
          class="a_height_auto a_width_100"
          :src="item.src"
          :alt="item.alt"
        />
      </template>
    </a-carousel>
  </div>

  <div class="a_column a_column_12_touch a_column_4">
    <a-translation
      tag="h3"
      html="_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_FOCUS_"
    ></a-translation>
    <a-carousel
      :data="data"
      aria-label="Carousel with balls"
      arrows-trigger="focus"
      key-id="id"
    >
      <template v-slot:item="{ item }">
        <img
          class="a_height_auto a_width_100"
          :src="item.src"
          :alt="item.alt"
        />
      </template>
    </a-carousel>
  </div>

  <div class="a_column a_column_12_touch a_column_4">
    <a-translation
      tag="h3"
      html="_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_HOVER_FOCUS_"
    ></a-translation>
    <a-carousel
      :arrows-trigger="['hover', 'focus']"
      :data="data"
      aria-label="Carousel with balls"
      key-id="id"
    >
      <template v-slot:item="{ item }">
        <img
          class="a_height_auto a_width_100"
          :src="item.src"
          :alt="item.alt"
        />
      </template>
    </a-carousel>
  </div>

  <div class="a_column a_column_12_touch a_column_4">
    <a-translation
      tag="h3"
      html="_A_CAROUSEL_COMPONENT_ARROWS_TRIGGER_ALWAYS_"
    ></a-translation>
    <a-carousel
      :data="data"
      aria-label="Carousel with balls"
      arrows-trigger="always"
      key-id="id"
    >
      <template v-slot:item="{ item }">
        <img
          class="a_height_auto a_width_100"
          :src="item.src"
          :alt="item.alt"
        />
      </template>
    </a-carousel>
  </div>
</div>
```

```js
import {
  computed,
} from "vue";

import {
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselArrowsTrigger",
  components: {
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_",
          }),
        },
        {
          id: 2,
          src: "./assets/Soccer_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_",
          }),
        },
        {
          id: 3,
          src: "./assets/Tennis_ball_purple_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_",
          }),
        },
        {
          id: 4,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
      ];
    });

    return {
      data,
    };
  },
};
```

## Placement of the arrows

**arrows-placement**: **sides-center** (default, the whole height), **sides-top** or **sides-bottom** (round buttons). In right-to-left the arrow "previous" is on the right.

*props: `arrows-placement`*

```html
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_4">
    <a-translation
      tag="h3"
      html="_A_CAROUSEL_COMPONENT_ARROWS_PLACEMENT_SIDES_TOP_"
    ></a-translation>
    <a-carousel
      :data="data"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      arrows-placement="sides-top"
      key-id="id"
    >
    <template
      v-slot:item="{ item }"
    >
      <img
        :alt="item.alt"
        :src="item.src"
        class="a_height_auto a_width_100"
      >
    </template>
    </a-carousel>
  </div>
  <div class="a_column a_column_12_touch a_column_4">
    <a-translation
      tag="h3"
      html="_A_CAROUSEL_COMPONENT_ARROWS_PLACEMENT_SIDES_BOTTOM_"
    ></a-translation>
    <a-carousel
      :data="data"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      arrows-placement="sides-bottom"
      indicators-placement="top"
      key-id="id"
    >
    <template
      v-slot:item="{ item }"
    >
      <img
        :alt="item.alt"
        :src="item.src"
        class="a_height_auto a_width_100"
      >
    </template>
    </a-carousel>
  </div>
</div>
```

```js
import {
  computed,
} from "vue";

import {
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselArrowsPlacement",
  components: {
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({ placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_" }),
          label: "_A_CAROUSEL_COMPONENT_LABEL_BASKETBALL_",
        },
        // ...
      ];
    });

    return {
      data,
    };
  },
};
```

## Indicator limitation

Example of limiting the number of displayed indicators

*props: `indicators-limit`*

```html
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_4">
    <h3>
      <strong
        lang="en"
      >indicators-limit="6"</strong>
    </h3>
    <a-carousel
      :data="data"
      :indicators-limit="6"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      arrows-trigger="hover"
      key-id="id"
    >
      <template v-slot:item="{ item }">
        <div>{{ item.id }}</div>
        <img
          class="a_height_auto a_width_100"
          :src="item.src"
          :alt="item.alt"
        />
      </template>
    </a-carousel>
  </div>

  <div class="a_column a_column_12_touch a_column_4">
    <h3>
      <strong
        lang="en"
      >indicators-limit="3"</strong>
    </h3>
    <a-carousel
      :data="data"
      :indicators-limit="3"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      arrows-trigger="hover"
      key-id="id"
    >
      <template v-slot:item="{ item }">
        <div>{{ item.id }}</div>
        <img
          class="a_height_auto a_width_100"
          :src="item.src"
          :alt="item.alt"
        />
      </template>
    </a-carousel>
  </div>
</div>
```

```js
import {
  computed,
} from "vue";

import {
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselIndicatorsLimit",
  components: {
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_",
          }),
        },
        {
          id: 2,
          src: "./assets/Soccer_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_",
          }),
        },
        {
          id: 3,
          src: "./assets/Tennis_ball_purple_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_",
          }),
        },
        {
          id: 4,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
        {
          id: 5,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_",
          }),
        },
        {
          id: 6,
          src: "./assets/Soccer_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_",
          }),
        },
        {
          id: 7,
          src: "./assets/Tennis_ball_purple_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_",
          }),
        },
        {
          id: 8,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
      ];
    });

    return {
      data,
    };
  },
};
```

## Automatic indicator limitation

Example of automatic limitation of the number of indicators depending on the carousel width

*props: `indicators-auto-limit`*

```html
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_4">
    <a-carousel
      :data="data"
      :indicators-auto-limit="true"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      arrows-trigger="hover"
      key-id="id"
    >
      <template v-slot:item="{ item }">
        <div>{{ item.id }}</div>
        <img
          class="a_height_auto a_width_100"
          :src="item.src"
          :alt="item.alt"
        />
      </template>
    </a-carousel>
  </div>
</div>
```

```js
import {
  computed,
} from "vue";

import {
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselIndicatorsAutoLimit",
  components: {
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_",
          }),
        },
        {
          id: 2,
          src: "./assets/Soccer_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_",
          }),
        },
        {
          id: 3,
          src: "./assets/Tennis_ball_purple_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_",
          }),
        },
        {
          id: 4,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
        {
          id: 5,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_",
          }),
        },
        {
          id: 6,
          src: "./assets/Soccer_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_",
          }),
        },
        {
          id: 7,
          src: "./assets/Tennis_ball_purple_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_",
          }),
        },
        {
          id: 8,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
        {
          id: 9,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_",
          }),
        },
        {
          id: 10,
          src: "./assets/Soccer_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_",
          }),
        },
        {
          id: 11,
          src: "./assets/Tennis_ball_purple_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_",
          }),
        },
        {
          id: 12,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
        {
          id: 13,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_",
          }),
        },
        {
          id: 14,
          src: "./assets/Soccer_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_",
          }),
        },
        {
          id: 15,
          src: "./assets/Tennis_ball_purple_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_",
          }),
        },
        {
          id: 16,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
        {
          id: 17,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
        {
          id: 18,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
        {
          id: 19,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
        {
          id: 20,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
        {
          id: 21,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
        {
          id: 22,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
        {
          id: 23,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
        {
          id: 24,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
        {
          id: 25,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
        {
          id: 26,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
      ];
    });

    return {
      data,
    };
  },
};
```

## Indicators type

Example of different types of slide indicators

*props: `indicators-type`*

```html
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_4">
    <h3>
      <strong
        lang="en"
      >indicators-limit="6"</strong>
    </h3>
    <a-carousel
      :data="data"
      :indicators-limit="6"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      arrows-trigger="hover"
      key-id="id"
    >
      <template v-slot:item="{ item }">
        <div>{{ item.id }}</div>
        <img
          class="a_height_auto a_width_100"
          :src="item.src"
          :alt="item.alt"
        />
      </template>
    </a-carousel>
  </div>

  <div class="a_column a_column_12_touch a_column_4">
    <h3>
      <strong
        lang="en"
      >indicators-limit="3"</strong>
    </h3>
    <a-carousel
      :data="data"
      :indicators-limit="3"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      arrows-trigger="hover"
      key-id="id"
    >
      <template v-slot:item="{ item }">
        <div>{{ item.id }}</div>
        <img
          class="a_height_auto a_width_100"
          :src="item.src"
          :alt="item.alt"
        />
      </template>
    </a-carousel>
  </div>
</div>
```

```js
import {
  computed,
} from "vue";

import {
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselIndicatorsType",
  components: {
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_",
          }),
        },
        {
          id: 2,
          src: "./assets/Soccer_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_",
          }),
        },
        {
          id: 3,
          src: "./assets/Tennis_ball_purple_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_",
          }),
        },
        {
          id: 4,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
      ];
    });

    return {
      data,
    };
  },
};
```

## Events

This example demonstrates the **change** and **init** events emitted by the carousel component.

*emits: `change`, `init`*

```html
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_6">
    <a-carousel
      :data="data"
      aria-label="_A_CAROUSEL_COMPONENT_BALLS_ARIA_LABEL_"
      key-id="id"
      @change="change"
      @init="init"
    >
      <template v-slot:item="{ item }">
        <img
          class="a_height_auto a_width_100"
          :src="item.src"
          :alt="item.alt"
        />
      </template>
    </a-carousel>
  </div>
</div>
```

```js
import {
  computed,
} from "vue";

import {
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselEmits",
  components: {
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_",
          }),
        },
        {
          id: 2,
          src: "./assets/Soccer_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_",
          }),
        },
        {
          id: 3,
          src: "./assets/Tennis_ball_purple_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_",
          }),
        },
        {
          id: 4,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        },
      ];
    });
    
    const init = ({ id, item }) => {
      console.log("init", id, item);
    };

    const change = ({ id, item, previousId, previousItem }) => {
      console.log("change", id, item, previousId, previousItem);
    };

    return {
      change,
      data,
      init,
    };
  },
};
```

## Missing active slide

This example shows how the carousel behaves when the initially active slide is missing from the provided data.

```html
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_touch a_column_6">
    <a-carousel
      :data="data"
      aria-label="Carousel with balls"
      :aria-disabled="true"
      key-id="id"
    >
      <template v-slot:item="{ item }">
        <img
          class="a_height_auto a_width_100"
          :src="item.src"
          :alt="item.alt"
        />
      </template>
    </a-carousel>
  </div>
</div>
```

```js
import {
  computed,
} from "vue";

import {
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselDeleteActiveSlide",
  components: {
    ACarousel,
  },
  setup() {
     const showLastSlide = ref(true);

    const data = computed(() => {
      const DATA = [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_",
          }),
        },
        {
          id: 2,
          src: "./assets/Soccer_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_",
          }),
        },
        {
          id: 3,
          src: "./assets/Tennis_ball_purple_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_",
          }),
        },
      ];
      if (showLastSlide.value) {
        DATA.push({
          id: 4,
          src: "./assets/Volleyball_ball_red_background.png",
          alt: getTranslatedText({
            placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
          }),
        });
      }

      return DATA;
    });

    const deleteLastSlide = () => {
      setTimeout(() => {
        showLastSlide.value = false;
      }, 2000);
    };
    
    deleteLastSlide();

    return {
      data,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| aria-label | String |  | yes | Translatable **aria-label** for the main carousel element |
| aria-disabled | Boolean |  |  | Indicates whether the carousel should be marked as disabled for assistive technologies |
| arrow-previous-attributes | Object | () => ({}) |  | Additional attributes for the button that navigates to the previous slide and are not explicitly defined as properties |
| arrow-previous-icon | String |  |  | Icon of the arrow to the previous slide. Default: chevron left (vertical: chevron up) |
| arrow-next-attributes | Object | () => ({}) |  | Additional attributes for the button that navigates to the next slide and are not explicitly defined as properties |
| arrow-next-icon | String |  |  | Icon of the arrow to the next slide. Default: chevron right (vertical: chevron down) |
| arrows-show | Boolean | true |  | Determines whether navigation buttons (arrows) should be displayed for navigating between slides |
| arrows-trigger | String / Array | always |  | When the arrows are visible: **always**, **hover** or **focus**. Hidden arrows stay in the order of the focus and are shown with the focus in the carousel |
| arrows-placement | String | sides-center |  | Placement of the arrows: **sides-center**, **sides-top** or **sides-bottom** |
| autoplay-interval | Number | 5000 |  | Interval in milliseconds between automatic slide transitions |
| autoplay-pause-on-hover | Boolean | true |  | Pauses the rotation while the mouse is over the carousel |
| autoplay-show | Boolean | false |  | Shows the button to start and stop the rotation, the rotation does not start by itself |
| autoplay-start | Boolean | false |  | Starts the rotation after the mount (not with **prefers-reduced-motion**). The button of the rotation is always shown |
| card-scale | Number | 0.83 |  | Scale of the previous and the next slide in the mode card (from 0 to 1) |
| data | Array | () => [] |  | Array of objects with data to display in the carousel |
| direction | String | horizontal |  | Direction of the change: **horizontal** or **vertical** |
| disabled | Boolean |  |  | Determines whether the carousel should be disabled, preventing user interaction |
| extra | Object |  |  | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like **"_WELCOME_{{foo}}_{{bar}}_"**, which is translated as **"Welcome {{ foo }}: {{ bar }}"**, you can pass an object like **{ foo: "abc", bar: "123" }**, and the result will be the translation **"Welcome abc: 123"**. |
| height | String |  |  | Fixed height of the slides as CSS value, e.g. **300px**. Without it (or **auto**) the height of the active slide |
| id | String | () => uniqueId("a_carousel_") |  | Specifies a unique identifier for the carousel |
| indicators-auto-limit | Boolean | false |  | If true, determines the maximum number of indicators based on the element width, used in conjunction with **indicatorWidth** |
| indicators-limit | Number |  |  | Sets the maximum number of indicators |
| indicators-placement | String | bottom |  | Placement of the tabs: **top**, **top-start**, **top-end**, **bottom**, **bottom-start**, **bottom-end** or **outside** (under the slides) |
| indicators-show | Boolean | true |  | Determines whether slide indicators should be displayed |
| indicators-type | String | dots |  | Type of the tabs: **dots**, **squares** or **labels** (text from **key-label**) |
| indicator-width | Number | 2.125 |  | Size of one indicator, needed to determine the number of indicators if **indicatorsAutoLimit true** |
| key-id | String |  |  | A unique key identifier for each data item. Used for performance improvement |
| key-label | String |  |  | Key of the label in the data. The label is the name of the tab and the text with **indicators-type="labels"** |
| loop | Boolean | true |  | After the last slide comes the first. With **false** the carousel stops at the ends |
| model-value | Number / String |  |  | Id of the active slide (value of **key-id**, without it the index). Use with **v-model** |
| motion-blur | Boolean | false |  | Adds a blur in the middle of the change of the slide |
| texts | Object | {         nextSlide: "_A_CAROUSEL_NEXT_SLIDE_",         previousSlide: "_A_CAROUSEL_PREVIOUS_SLIDE_",         controlsSlide: "_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_",         controlsSlides: "_A_CAROUSEL_CONTROLS_SLIDES_",         controlsStart: "_A_CAROUSEL_CONTROLS_START_",         controlsStop: "_A_CAROUSEL_CONTROLS_STOP_",         itemAriaLabel: "_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_",       } |  | Object with translatable texts used in the component |
| transition | String | slide |  | Animation of the change: **slide**, **fade** or **none** |
| type | String | default |  | **default** or **card** (the previous and the next slide smaller on the sides) |

## Slots

| name | description |
| --- | --- |
| item | Content of a slide: **{ item, itemIndex, isActive, activeId, dataCount, parentId }** |

## Events

| name | type | description |
| --- | --- | --- |
| change | Function | The active slide changed: **{ id, item, previousId, previousItem }** |
| init | Function | After the creation: **{ id, item }** of the active slide |
| play | Function | The rotation started |
| stop | Function | The rotation stopped (button, focus in the carousel, last slide without loop, method stop) |
| update:modelValue | Function | Id of the new active slide for **v-model** |

## Exposes

| name | type | description |
| --- | --- | --- |
| activeId | Number / String | Id of the active slide |
| activeIndex | Number | Index of the active slide |
| isPlaying | Boolean | The rotation is on |
| next | Function | Goes to the next slide |
| play | Function | Starts the rotation |
| previous | Function | Goes to the previous slide |
| setActiveItem | Function | Activates the slide with the given id |
| stop | Function | Stops the rotation |

## Translations

| key | en |
| --- | --- |
| `_A_CAROUSEL_NEXT_SLIDE_` | Next slide |
| `_A_CAROUSEL_PREVIOUS_SLIDE_` | Previous slide |
| `_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_` | Go to slide {{number}} |
| `_A_CAROUSEL_CONTROLS_SLIDES_` | Slides |
| `_A_CAROUSEL_CONTROLS_START_` | Start autoplay |
| `_A_CAROUSEL_CONTROLS_STOP_` | Stop autoplay |
| `_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_` | Slide {{number}} of {{count}} |

## CSS variables (`scss/components/ACarousel.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_carousel_bg` |  | Background of the carousel behind the slides. |
| `--a_carousel_on_media_color` |  | Color of the arrows, tabs and focus ring drawn on top of the image. Fixed light color, independent of the theme. |
| `--a_carousel_on_media_bg` |  | Dark color behind the controls on the image (tab background, inner focus ring). |
| `--a_carousel_arrow_bg` |  | Background of the arrows. |
| `--a_carousel_arrow_hover_bg` |  | Background of a hovered or focused arrow. |
| `--a_carousel_arrow_disabled_opacity` |  | Opacity of an arrow without a slide in its direction (loop false) and of the disabled controls. |
| `--a_carousel_tabs_bg` |  | Background of the tab bar and of the button of the rotation. |
| `--a_carousel_tab_primary_color` |  | Color of the tab bar with focus and of a hovered or focused tab. |
| `--a_carousel_tab_width` |  | Width of a tab (dot or square). |
| `--a_carousel_tab_height` |  | Height of a tab. |
| `--a_carousel_tabs_height` |  | Height of the tab bar and size of the button of the rotation. |
| `--a_carousel_labels_radius` |  | Border radius of the tab bar and the tabs with labels (indicators-type labels). |
| `--a_carousel_outside_margin` |  | Space above and under the controls with indicators-placement outside. |
| `--a_carousel_focus_ring_inset` |  | Focus ring of the arrows, of the button of the rotation and of the tabs with labels (inside the element, light and dark, so it is visible on any image). |
| `--a_carousel_transition_duration` |  | Duration of the change of the slide (transition slide and fade, mode card). No animation with prefers-reduced-motion. |
| `--a_carousel_transition_easing` |  | Timing function of the change of the slide. |
| `--a_carousel_motion_blur` |  | Strength of the blur in the middle of the change with motion-blur. |
| `--a_carousel_card_width` |  | Width of a slide in the mode card (height with direction vertical). |
| `--a_carousel_card_mask_bg` |  | Shadow over the previous and the next slide in the mode card. |
