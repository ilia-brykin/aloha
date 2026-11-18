export default function HtmlAPI() {
  const codeHtml = `<a-input-otp
  v-model="modelMask"
  class="a_mb_3"
  :mask="true"
  :length="4"
  label="PIN"
></a-input-otp>
<a-input-otp
  v-model="modelPlaceholder"
  placeholder="○"
  label="Verification code"
></a-input-otp>
<div>modelMask: {{ modelMask }}</div>
<div>modelPlaceholder: {{ modelPlaceholder }}</div>`;

  return {
    codeHtml,
  };
}
