export default function HtmlAPI() {
  const codeHtml = `<a-button
  class="a_btn a_btn_primary"
  icon-left="Upload"
  @click="onAlert('icon-left')"
>
</a-button>
<a-button
  class="a_btn a_btn_primary a_ml_2"
  icon-left="Upload"
  text="Aloha"
  @click="onAlert('icon-left & text')"
>
</a-button>
<a-button
  class="a_btn a_btn_primary a_ml_2"
  icon-right="Upload"
  text="Aloha"
  @click="onAlert('icon-right & text')"
>
</a-button>
<a-button
  class="a_btn a_btn_primary a_ml_2"
  icon-left="Upload"
  icon-right="Upload"
  text="Aloha"
  @click="onAlert('icon-left & text & icon-right')"
>
</a-button>
<a-button
  class="a_btn a_btn_primary a_ml_2"
  icon-left="Upload"
  icon-right="Upload"
  @click="onAlert('icon-left & icon-right')"
>
</a-button>`;

  return {
    codeHtml,
  };
}
