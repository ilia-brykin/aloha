export default function HtmlAPI() {
  const codeHtml = `<a-rate
  v-model="modelHeart"
  class="a_mb_3"
  :icons="HeartFill"
  :void-icon="Heart"
  colors="var(--a_color_danger)"
  label="Food"
></a-rate>
<a-rate
  v-model="modelEmoji"
  :icons="iconsEmoji"
  :void-icon="EmojiNeutral"
  :colors="colorsEmoji"
  :show-text="true"
  label="Service"
></a-rate>`;

  return {
    codeHtml,
  };
}
