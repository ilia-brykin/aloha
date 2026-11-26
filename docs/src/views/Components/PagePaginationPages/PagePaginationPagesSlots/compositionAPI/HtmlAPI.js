export default function HtmlAPI() {
  const codeHtml = `<a-pagination-pages
  v-model:page="page"
  :limit="10"
  :total-count="87"
  mode="short"
>
  <template #previous>
    <span>← Back</span>
  </template>
  <template #next>
    <span>Next →</span>
  </template>
</a-pagination-pages>
<a-pagination-pages
  v-model:page="page"
  :limit="10"
  :total-count="87"
>
  <template #page="{ page: number, isActive }">
    <strong v-if="isActive">[{{ number }}]</strong>
    <span v-else>{{ number }}</span>
  </template>
</a-pagination-pages>`;

  return {
    codeHtml,
  };
}
