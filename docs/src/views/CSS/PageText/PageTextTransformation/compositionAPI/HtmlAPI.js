export default function HtmlAPI() {
  const codeHtml = `<div><code class="a_color_danger a_mr_2">.a_text_lowercase</code><span class="a_text_lowercase">TEXT</span></div>
<div><code class="a_color_danger a_mr_2">.a_text_uppercase</code><span class="a_text_uppercase">Text</span></div>
<div><code class="a_color_danger a_mr_2">.a_text_capitalize</code><span class="a_text_capitalize">text</span></div>
<div><code class="a_color_danger a_mr_2">.a_text_underline</code><span class="a_text_underline">Text</span></div>
<div><code class="a_color_danger a_mr_2">.a_text_line_through</code><span class="a_text_line_through">Text</span></div>
<div><code class="a_color_danger a_mr_2">.a_text_decoration_none</code><span class="a_text_decoration_none">Text</span></div>`;

  return {
    codeHtml,
  };
}
