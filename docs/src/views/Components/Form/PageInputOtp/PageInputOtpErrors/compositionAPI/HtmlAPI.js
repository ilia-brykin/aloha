export default function HtmlAPI() {
  const codeHtml = `<a-input-otp
  v-model="model"
  class="a_mb_3"
  :required="true"
  errors="The code is wrong"
  label="Verification code"
></a-input-otp>
<a-input-otp
  v-model="model"
  :required="true"
  variant="filled"
  errors="The code is wrong"
  label="Verification code"
></a-input-otp>`;

  return {
    codeHtml,
  };
}
