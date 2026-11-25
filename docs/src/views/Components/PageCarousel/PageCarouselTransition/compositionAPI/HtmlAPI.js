export default function HtmlAPI() {
  const codeHtml = `<div class="a_columns a_columns_count_12">
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
</div>`;

  return {
    codeHtml,
  };
}
