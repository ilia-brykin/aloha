export default function HtmlAPI() {
  const codeHtml = `<a-input-otp
  v-model="model"
  class="a_mb_3"
  :length="4"
  separator="/"
  label="separator: /"
></a-input-otp>
<a-input-otp
  v-model="model"
  class="a_mb_3"
  :separator="separatorMiddle"
  label="separator: function"
></a-input-otp>
<a-input-otp
  v-model="model"
  label="slot separator"
>
  <template v-slot:separator="{ index }">
    <span v-if="index % 2 === 1">•</span>
  </template>
</a-input-otp>`;

  return {
    codeHtml,
  };
}
