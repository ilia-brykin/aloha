export default function HtmlAPI() {
  const codeHtml = `<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-button
    class="a_btn a_btn_primary"
    icon-left="Upload"
    @click="onAlert('icon-left')"
  ></a-button>
  <a-button
    class="a_btn a_btn_primary"
    icon-left="Upload"
    text="Aloha"
    @click="onAlert('icon-left & text')"
  ></a-button>
  <a-button
    class="a_btn a_btn_primary"
    icon-right="Upload"
    text="Aloha"
    @click="onAlert('icon-right & text')"
  ></a-button>
  <a-button
    class="a_btn a_btn_primary"
    icon-left="Upload"
    icon-right="Upload"
    text="Aloha"
    @click="onAlert('icon-left & text & icon-right')"
  ></a-button>
  <a-button
    class="a_btn a_btn_primary"
    icon-left="Upload"
    icon-right="Upload"
    @click="onAlert('icon-left & icon-right')"
  ></a-button>
</div>`;

  return {
    codeHtml,
  };
}
