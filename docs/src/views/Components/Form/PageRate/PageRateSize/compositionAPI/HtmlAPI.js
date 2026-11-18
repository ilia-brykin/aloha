export default function HtmlAPI() {
  const codeHtml = `<a-rate
  v-model="model"
  class="a_mb_3"
  size="small"
  label="size: small"
></a-rate>
<a-rate
  v-model="model"
  class="a_mb_3"
  label="size: default"
></a-rate>
<a-rate
  v-model="model"
  size="large"
  label="size: large"
></a-rate>`;

  return {
    codeHtml,
  };
}
