export default function HtmlAPI() {
  const codeHtml = `<a-navbar
  :data="data"
>
  <template v-slot:item="{ item }">
    <span>{{ item.label }}</span>
    <span
      v-if="item.count"
      class="a_badge a_badge_danger a_ms_2"
    >{{ item.count }}</span>
  </template>
</a-navbar>`;

  return {
    codeHtml,
  };
}
