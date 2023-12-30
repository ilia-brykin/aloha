export default function HtmlAPI() {
  const codeHtml = `<a-radio
  v-model="modelTag"
  class="a_mb_4"
  :data="['ol', 'ul']"
  :is-data-simple-array="true"
></a-radio>

<a-list
  :data="items"
  key-label="label"
  :tag="modelTag"
></a-list>`;

  return {
    codeHtml,
  };
}
