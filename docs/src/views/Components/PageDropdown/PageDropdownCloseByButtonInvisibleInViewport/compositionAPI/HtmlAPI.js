export default function HtmlAPI() {
  const codeHtml = `<div
  style="max-height: 14rem; overflow: auto; padding: 1rem;"
>
  <div style="height: 26rem;">
    <p>
      <a-translation
        tag="span"
        text="_A_DROPDOWN_SCROLL_HELP_"
      ></a-translation>
    </p>

    <div style="margin-top: 6rem;">
      <a-dropdown
        :actions="dropdownActions"
        :is-close-by-button-invisible-in-viewport="true"
        button-text="_A_DROPDOWN_BUTTON_TEXT_CLOSE_ON_INVISIBLE_TRUE_"
      ></a-dropdown>
    </div>

    <div style="margin-top: 6rem;">
      <a-dropdown
        :actions="dropdownActions"
        :is-close-by-button-invisible-in-viewport="false"
        button-text="_A_DROPDOWN_BUTTON_TEXT_CLOSE_ON_INVISIBLE_FALSE_"
      ></a-dropdown>
    </div>
  </div>
</div>`;

  return {
    codeHtml,
  };
}
