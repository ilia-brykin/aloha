export default function HtmlAPI() {
  const codeHtml = `<a-checkbox
  v-model="model"
  :data="data"
  :is-deselect-all="true"
  :is-select-all="true"
  key-disabled="isDisabled"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-checkbox>
<div>model: {{ model }}</div>
<a-checkbox
  v-model="modelSearch"
  :data="data"
  :is-deselect-all="true"
  :is-select-all="true"
  :search="true"
  class="a_mt_3"
  key-disabled="isDisabled"
  key-id="id"
  key-label="label"
  label="Aloha (search)"
></a-checkbox>
<div>modelSearch: {{ modelSearch }}</div>`;

  return {
    codeHtml,
  };
}
