export default function HtmlAPI() {
  const codeHtml = `<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  btn-title-less="_A_DISCLOSURE_GROUP_TITLE_LESS_"
  btn-title-more="_A_DISCLOSURE_GROUP_TITLE_MORE_"
  :is-btn-title-html="true"
></a-disclosure>
<a-disclosure
  class="a_mt_2"
  :text-less="textLess"
  :text-more="textMore"
  btn-title-less="<strong>Aloha</strong>"
  btn-title-more="<strong>Aloha</strong>"
  :is-btn-title-html="true"
></a-disclosure>`;

  return {
    codeHtml,
  };
}
