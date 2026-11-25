export default function HtmlAPI() {
  const codeHtml = `<div class="a_columns a_columns_count_12">
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
</div>`;

  return {
    codeHtml,
  };
}
