export default function HtmlAPI() {
  const codeHtml = `<a-input-otp
  v-model="model"
  label="Verification code"
  label-description="We sent the code to your phone"
  help-text="The code is valid for 10 minutes"
></a-input-otp>`;

  return {
    codeHtml,
  };
}
