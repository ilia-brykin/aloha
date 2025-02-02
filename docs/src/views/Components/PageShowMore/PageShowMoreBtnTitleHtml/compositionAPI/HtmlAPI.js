export default function HtmlAPI() {
  const codeHtml = `<a-show-more 
  :html="html"
  btn-title-less="_A_SHOW_MORE_GROUP_TITLE_LESS_"
  btn-title-more="_A_SHOW_MORE_GROUP_TITLE_MORE_"
  :is-btn-title-html="true"
></a-show-more>
<a-show-more 
  class="a_mt_2"
  :html="html"
  btn-title-less="<strong>Aloha</strong>"
  btn-title-more="<strong>Aloha</strong>"
  :is-btn-title-html="true"
></a-show-more>`;

  return {
    codeHtml,
  };
}
