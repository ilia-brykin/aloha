export default function HtmlAPI() {
  const codeHtml = `<a-rate
  v-model="modelDefault"
  class="a_mb_3"
  :show-text="true"
  label="Your rating"
></a-rate>
<a-rate
  v-model="modelCustom"
  :show-text="true"
  :texts="texts"
  label="Service"
></a-rate>`;

  return {
    codeHtml,
  };
}
