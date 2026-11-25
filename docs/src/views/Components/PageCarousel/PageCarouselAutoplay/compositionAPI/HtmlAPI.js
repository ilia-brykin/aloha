export default function HtmlAPI() {
  const codeHtml = `<div class="a_columns a_columns_count_12">
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
</div>`;

  return {
    codeHtml,
  };
}
