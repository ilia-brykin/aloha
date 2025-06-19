export default function HtmlAPI() {
  const codeHtml = `<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-element
    :to="{ name: 'PageLink' }"
    class="a_btn a_btn_link"
    text="link"
    type="link"
  ></a-element>
  <a-element
    class="a_btn a_btn_primary"
    text="button"
    type="button"
    @click="onAlert('button')"
  ></a-element>
  <a-element
    :prevent="true"
    :stop="true"
    class="a_btn a_btn_secondary"
    text="submit"
    type="submit"
    @click="onAlert('submit')"
  ></a-element>
  <a-element
    class="a_btn a_btn_tertiary"
    text="reset"
    type="reset"
    @click="onAlert('reset')"
  ></a-element>
  <a-element
    text="text"
    type="text"
  ></a-element>
</div>`;

  return {
    codeHtml,
  };
}
