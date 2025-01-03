export default function HtmlAPI() {
  const codeHtml = `<a-button
  class="a_btn a_btn_primary"
  :loading="loading"
  loading-align="left"
  :text="{ desktop: 'Aloha' }"
  :text-before="{ desktop: '$ ' }"
  :icon-left="{ desktop: 'EyeFill', mobile: 'EyeSlash' }"
  :icon-right="{ mobile: 'EyeSlash' }"
  :title="{ desktop: 'Aloha' }"
  :text-aria-hidden="true"
  :text-screen-reader="{ desktop: 'Aloha', mobile: 'Aloha-mobile' }"
  @click="toggleLoading"
>
</a-button>`;

  return {
    codeHtml,
  };
}
