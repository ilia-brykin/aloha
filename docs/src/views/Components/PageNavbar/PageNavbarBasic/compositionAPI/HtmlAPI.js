export default function HtmlAPI() {
  const codeHtml = `<a-navbar
  :data="data"
  @navigate="onNavigate"
>
  <template v-slot:start>
    <strong>Aloha</strong>
  </template>
  <template v-slot:end>
    <a-button
      class="a_btn a_btn_primary"
      text="Login"
    />
  </template>
</a-navbar>
<div class="a_mt_3">navigate: {{ lastLabel }}</div>`;

  return {
    codeHtml,
  };
}
