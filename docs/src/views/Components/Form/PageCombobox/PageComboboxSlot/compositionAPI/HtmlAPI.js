export default function HtmlAPI() {
  const codeHtml = `<a-combobox
  v-model="model"
  :data="people"
  :texts="texts"
  label="_A_COMBOBOX_EXAMPLE_PERSON_"
>
  <template #option="{ item, highlight }">
    <span class="a_d_block">
      <component :is="() => highlight" />
    </span>
    <small class="a_text_muted">{{ item.email }}</small>
  </template>
</a-combobox>`;

  return {
    codeHtml,
  };
}
