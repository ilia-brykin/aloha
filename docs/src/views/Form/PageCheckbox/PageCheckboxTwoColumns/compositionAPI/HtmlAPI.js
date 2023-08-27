export default function HtmlAPI() {
  const codeHtml = `<a-checkbox
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  type="select"
  class-data-parent="a_list_columns a_list_columns_2"
></a-checkbox>
<div>model: {{ model }}</div>
<a-checkbox
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="_A_CHECKBOX_LABEL_WIDE_SCREEN_"
  type="select"
  class-data-parent="a_list_columns a_list_columns_2_desktop a_list_columns_2_widescreen a_list_columns_2_fullhd"
></a-checkbox>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
