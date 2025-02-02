export default function HtmlAPI() {
  const codeHtml = `<a-switch
  v-model="modelIsHtml"
  label="_A_LIST_IS_HTML_LABEL_"
></a-switch>

<a-list
  :data="items"
  key-label="label"
  :is-html="modelIsHtml"
></a-list>
<div class="a_mt_4"></div>
<a-list
  :data="itemsWithChildren"
  key-label="label"
  key-children="children"
  :is-html="modelIsHtml"
></a-list>
<div class="a_mt_4"></div>
<a-list
  :data="itemsArrays"
  key-label="label"
  :is-data-simple-array="true"
  :is-html="modelIsHtml"
></a-list>`;

  return {
    codeHtml,
  };
}
