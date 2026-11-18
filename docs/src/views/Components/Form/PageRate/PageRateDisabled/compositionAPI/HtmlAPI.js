export default function HtmlAPI() {
  const codeHtml = `<a-rate
  v-model="model"
  class="a_mb_3"
  :disabled="true"
  label="disabled"
></a-rate>
<a-rate
  v-model="modelDecimal"
  class="a_mb_3"
  :readonly="true"
  :show-score="true"
  label="readonly"
></a-rate>
<a-rate
  v-model="modelDecimal"
  :readonly="true"
  :show-text="true"
  size="small"
  label="readonly, size: small"
></a-rate>`;

  return {
    codeHtml,
  };
}
