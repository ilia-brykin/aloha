export default function HtmlAPI() {
  const codeHtml = `<a-filters
  :filters="filters"
  v-model:applied-model="appliedModel"
  v-model:unapplied-model="unappliedModel"
>
</a-filters>`;

  return {
    codeHtml,
  };
}
