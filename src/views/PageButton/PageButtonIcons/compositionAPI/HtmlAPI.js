export default function HtmlAPI() {
  const codeHtml = `<a-button
  class="a_btn a_btn_primary"
  icon-left="Dnd"
  @click="onAlert('icon-left')"
>
</a-button>
<a-button
  class="a_btn a_btn_primary a_ml_2"
  icon-left="Dnd"
  text="Aloha"
  @click="onAlert('icon-left & text')"
>
</a-button>
<a-button
  class="a_btn a_btn_primary a_ml_2"
  icon-right="Dnd"
  text="Aloha"
  @click="onAlert('icon-right & text')"
>
</a-button>
<a-button
  class="a_btn a_btn_primary a_ml_2"
  icon-left="Dnd"
  icon-right="Dnd"
  text="Aloha"
  @click="onAlert('icon-left & text & icon-right')"
>
</a-button>
<a-button
  class="a_btn a_btn_primary a_ml_2"
  icon-left="Dnd"
  icon-right="Dnd"
  @click="onAlert('icon-left & icon-right')"
>
</a-button>`;

  return {
    codeHtml,
  };
}
