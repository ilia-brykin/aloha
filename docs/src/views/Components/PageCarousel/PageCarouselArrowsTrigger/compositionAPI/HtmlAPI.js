export default function HtmlAPI() {
  const codeHtml = `<div class="a_columns a_columns_count_12">
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
</div>`;

  return {
    codeHtml,
  };
}
