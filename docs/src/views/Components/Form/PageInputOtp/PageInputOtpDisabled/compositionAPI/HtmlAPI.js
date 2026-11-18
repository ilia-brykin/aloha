export default function HtmlAPI() {
  const codeHtml = `<a-input-otp
  v-for="variant in variants"
  :key="variant"
  v-model="model"
  class="a_mb_3"
  :disabled="true"
  :variant="variant"
  :label="\`disabled, variant: \${ variant }\`"
></a-input-otp>
<a-input-otp
  v-model="model"
  class="a_mb_3"
  :readonly="true"
  label="readonly"
></a-input-otp>
<a-input-otp
  v-model="model"
  :readonly="true"
  :mask="true"
  label="readonly, mask"
></a-input-otp>`;

  return {
    codeHtml,
  };
}
