export default function HtmlAPI() {
  const codeHtml = `<a-show-more 
  :html="html"
  btn-icon-left-less="ChevronUp"
  btn-icon-right-less="ChevronUp"
  btn-icon-left-more="ChevronDown"
  btn-icon-right-more="ChevronDown"
>
</a-show-more>`;

  return {
    codeHtml,
  };
}
