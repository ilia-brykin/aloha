export default function HtmlAPI() {
  const codeHtml = `<a-input-otp
  v-model="modelPin"
  class="a_mb_3"
  :length="4"
  label="PIN"
></a-input-otp>
<a-input-otp
  v-model="modelLong"
  :length="8"
  label="Verification code"
></a-input-otp>
<div>modelPin: {{ modelPin }}</div>
<div>modelLong: {{ modelLong }}</div>`;

  return {
    codeHtml,
  };
}
