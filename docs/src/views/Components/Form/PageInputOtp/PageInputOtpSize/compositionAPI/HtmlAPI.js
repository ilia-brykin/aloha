export default function HtmlAPI() {
  const codeHtml = `<a-input-otp
  v-model="model"
  class="a_mb_3"
  size="small"
  label="size: small"
></a-input-otp>
<a-input-otp
  v-model="model"
  class="a_mb_3"
  label="size: default"
></a-input-otp>
<a-input-otp
  v-model="model"
  size="large"
  label="size: large"
></a-input-otp>`;

  return {
    codeHtml,
  };
}
