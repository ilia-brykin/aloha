export default function HtmlAPI() {
  const codeHtml = `<p class="a_mb_2"><code class="a_color_danger">.a_column_offset_2</code></p>
<div class="a_columns a_columns_count_12 a_mb_4">
  <div class="a_column a_column_4 a_column_offset_2">
    <div class="a_bg_gray_200 a_height_6 a_p_2 a_text_center">4/12 + <span lang="en">offset</span> 2</div>
  </div>
  <div class="a_column a_column_4">
    <div class="a_bg_gray_300 a_height_6 a_p_2 a_text_center">4/12</div>
  </div>
</div>
<p class="a_mb_2"><code class="a_color_danger">.a_column_offset_right_2</code></p>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_4">
    <div class="a_bg_gray_200 a_height_6 a_p_2 a_text_center">4/12</div>
  </div>
  <div class="a_column a_column_4 a_column_offset_right_2">
    <div class="a_bg_gray_300 a_height_6 a_p_2 a_text_center">4/12 + <span lang="en">offset</span> <span lang="en">right</span> 2</div>
  </div>
</div>`;

  return {
    codeHtml,
  };
}
