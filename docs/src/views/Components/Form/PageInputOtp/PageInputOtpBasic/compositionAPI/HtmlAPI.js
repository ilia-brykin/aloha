export default function HtmlAPI() {
  const codeHtml = `<a-input-otp
  v-model="model"
  label="Verification code"
></a-input-otp>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
