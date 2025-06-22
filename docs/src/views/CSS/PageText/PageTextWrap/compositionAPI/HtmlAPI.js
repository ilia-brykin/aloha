export default function HtmlAPI() {
  const codeHtml = `<div><code class="a_color_danger a_mr_2">.a_text_wrap</code><div class="a_badge a_text_wrap" style="width: 6rem;">Lorem ipsum dolor sit amet consectetur adipisicing elit</div></div>
<div class="a_mt_3"><code class="a_color_danger a_mr_2">.a_text_nowrap</code><div class="a_text_nowrap a_bg_gray_300" style="width: 6rem;">Lorem ipsum dolor sit amet consectetur adipisicing elit</div></div>
<div class="a_mt_3"><code class="a_color_danger a_mr_2">.a_text_break</code><div class="a_text_break" style="width: 10rem;">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div></div>
<div class="a_mt_3"><code class="a_color_danger a_mr_2">.a_text_wrap_hyphens</code><div class="a_text_wrap_hyphens" lang="en" style="width: 10rem;">pneumonoultramicroscopicsilicovolcanoconiosis</div></div>
<div class="a_mt_3"><code class="a_color_danger a_mr_2">.a_text_truncate</code><div class="a_text_truncate" style="width: 6rem;">Lorem ipsum dolor sit amet consectetur adipisicing elit</div></div>`;

  return {
    codeHtml,
  };
}
