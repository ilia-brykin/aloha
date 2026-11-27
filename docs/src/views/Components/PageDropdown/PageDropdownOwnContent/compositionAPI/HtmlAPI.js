export default function HtmlAPI() {
  const codeHtml = `<a-dropdown
  button-text="_A_DROPDOWN_EXAMPLE_FILTER_"
  :is-close-by-click-inside="false"
>
  <template v-slot:dropdown>
    <li class="a_p_3">
      <label
        class="a_d_block a_mb_2"
        for="dropdown_own_search"
      >
        <a-translation text="_A_DROPDOWN_EXAMPLE_SEARCH_" />
      </label>
      <input
        id="dropdown_own_search"
        class="a_form_control a_mb_2"
        type="search"
      >
      <a-button
        class="a_btn a_btn_primary a_btn_small"
        text="_A_DROPDOWN_EXAMPLE_APPLY_"
      />
    </li>
  </template>
</a-dropdown>`;

  return {
    codeHtml,
  };
}
