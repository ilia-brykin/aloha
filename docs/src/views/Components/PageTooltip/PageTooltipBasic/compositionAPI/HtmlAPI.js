export default function HtmlAPI() {
  const codeHtml = `<a-tooltip>
  <span>Aloha</span>
  
  <template
    v-slot:title
  >
    <div>Aloha</div>
  </template>
</a-tooltip>`;

  return {
    codeHtml,
  };
}
