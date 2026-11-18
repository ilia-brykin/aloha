export default function HtmlAPI() {
  const codeHtml = `<a-input-otp
  v-model="modelHex"
  class="a_mb_3"
  :validator="validatorHex"
  :is-uppercase="true"
  inputmode="text"
  label="Color (hex)"
></a-input-otp>
<a-input-otp
  v-model="modelLetters"
  :validator="validatorLetters"
  :length="4"
  inputmode="text"
  label="Letters only"
></a-input-otp>
<div>modelHex: {{ modelHex }}</div>
<div>modelLetters: {{ modelLetters }}</div>`;

  return {
    codeHtml,
  };
}
