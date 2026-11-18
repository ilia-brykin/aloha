export default function HtmlAPI() {
  const codeHtml = `<ul class="a_list_without_styles">
  <li class="a_d_flex a_gap_2 a_align_items_center">
    <a-avatar
      name="Anna Becker"
      :decorative="true"
      size="small"
    ></a-avatar>
    <span>Anna Becker</span>
  </li>
</ul>`;

  return {
    codeHtml,
  };
}
