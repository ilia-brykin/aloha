export default function HtmlAPI() {
  const codeHtml = `<a-input-otp
  v-model="modelNumeric"
  class="a_mb_3"
  label="char-type: numeric"
></a-input-otp>
<a-input-otp
  v-model="modelAlphanumeric"
  class="a_mb_3"
  char-type="alphanumeric"
  :is-uppercase="true"
  label="Voucher code"
></a-input-otp>
<a-input-otp
  v-model="modelAny"
  char-type="any"
  :length="4"
  label="char-type: any"
></a-input-otp>
<div>modelNumeric: {{ modelNumeric }}</div>
<div>modelAlphanumeric: {{ modelAlphanumeric }}</div>
<div>modelAny: {{ modelAny }}</div>`;

  return {
    codeHtml,
  };
}
