export default function HtmlAPI() {
  const codeHtml = `<a-radio
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  type="select"
  class-data-parent="a_list_columns a_list_columns_2"
></a-radio>
<div>model: {{ model }}</div>
<a-radio
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="_A_RADIO_LABEL_WIDE_SCREEN_"
  type="select"
  class-data-parent="a_list_columns a_list_columns_2_desktop a_list_columns_2_widescreen a_list_columns_2_fullhd"
></a-radio>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
