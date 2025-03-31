export default function HtmlAPI() {
  const codeHtml = `<a-multiselect-ordered
  v-model="model1"
  :data="data"
  :is-deselect-all="true"
  :is-select-all="true"
  key-id="value"
  key-label="label"
  label="Select 1"
></a-multiselect-ordered>
<a-multiselect-ordered
  v-model="model2"
  :data="data"
  :is-deselect-all="true"
  class="a_mt_3"
  key-id="value"
  key-label="label"
  label="Select 2"
></a-multiselect-ordered>
<a-multiselect-ordered
  v-model="model3"
  :data="data"
  :is-select-all="true"
  class="a_mt_3"
  key-id="value"
  key-label="label"
  label="Select 3"
></a-multiselect-ordered>`;

  return {
    codeHtml,
  };
}
