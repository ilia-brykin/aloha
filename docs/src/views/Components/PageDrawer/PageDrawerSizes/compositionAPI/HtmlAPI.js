export default function HtmlAPI() {
  const codeHtml = `<!-- width: small 300px, default 400px, large 600px, xl 900px; the whole width on a narrow window -->
<a-drawer
  v-if="isDrawerVisible"
  size="large"
  :close="closeDrawer"
  header-text="Aloha"
>
  <template v-slot:modalBody>...</template>
</a-drawer>`;

  return {
    codeHtml,
  };
}
