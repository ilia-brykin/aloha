export default function HtmlAPI() {
  const codeHtml = `<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-element
    class="a_btn a_btn_primary"
    icon-left="Upload"
    type="button"
    @click="onAlert('icon-left')"
  ></a-element>
  <a-element
    class="a_btn a_btn_primary"
    icon-left="Upload"
    text="Aloha"
    type="button"
    @click="onAlert('icon-left & text')"
  ></a-element>
  <a-element
    class="a_btn a_btn_primary"
    icon-right="Upload"
    text="Aloha"
    type="button"
    @click="onAlert('icon-right & text')"
  ></a-element>
  <a-element
    class="a_btn a_btn_primary"
    icon-left="Upload"
    icon-right="Upload"
    text="Aloha"
    type="button"
    @click="onAlert('icon-left & text & icon-right')"
  ></a-element>
  <a-element
    class="a_btn a_btn_primary"
    icon-left="Upload"
    icon-right="Upload"
    type="button"
    @click="onAlert('icon-left & icon-right')"
  ></a-element>
</div>`;

  return {
    codeHtml,
  };
}
