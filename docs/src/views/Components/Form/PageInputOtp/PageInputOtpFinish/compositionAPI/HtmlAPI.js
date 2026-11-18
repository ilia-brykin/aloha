export default function HtmlAPI() {
  const codeHtml = `<a-input-otp
  ref="otpRef"
  v-model="model"
  :errors="errors"
  label="Verification code"
  @finish="onFinish"
  @update:model-value="onUpdateModel"
></a-input-otp>
<a-alert
  class="a_mt_3"
  :is-visible="isSuccess"
  type="success"
  text="The code is correct"
></a-alert>`;

  return {
    codeHtml,
  };
}
