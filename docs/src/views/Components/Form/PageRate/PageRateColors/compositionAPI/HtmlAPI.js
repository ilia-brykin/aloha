export default function HtmlAPI() {
  const codeHtml = `<a-rate
  v-model="modelArray"
  class="a_mb_3"
  :colors="colorsArray"
  :show-text="true"
  label="colors: Array"
></a-rate>
<a-rate
  v-model="modelObject"
  :colors="colorsObject"
  :max="10"
  :low-threshold="3"
  :high-threshold="8"
  :show-score="true"
  label="colors: Object"
></a-rate>`;

  return {
    codeHtml,
  };
}
