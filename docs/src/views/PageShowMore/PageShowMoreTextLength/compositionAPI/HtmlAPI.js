export default function HtmlAPI() {
  const codeHtml = `<a-show-more 
  :text="text"
  :text-length="200"
>
</a-show-more>
<a-show-more 
  class="a_mt_2"
  :text="tex2"
  :text-length="200"
>
</a-show-more>`;

  return {
    codeHtml,
  };
}
