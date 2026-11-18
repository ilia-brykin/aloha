export default function HtmlAPI() {
  const codeHtml = `<a-input-otp
  v-for="variant in variants"
  :key="variant"
  v-model="model"
  class="a_mb_3"
  :variant="variant"
  :label="\`variant: \${ variant }\`"
></a-input-otp>`;

  return {
    codeHtml,
  };
}
