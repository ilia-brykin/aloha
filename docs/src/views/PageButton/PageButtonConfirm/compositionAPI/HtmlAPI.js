export default function HtmlAPI() {
  const codeHtml = `<a-button
  text="confirm"
  :confirm="true"
  confirm-position="bottom"
  @click="onAlert('confirm')"
>
</a-button>
<a-button
  text="confirmTime"
  :confirm="true"
  :confirm-time="0"
  confirm-position="left"
  @click="onAlert('confirmTime')"
>
</a-button>
<a-button
  text="confirmAttributes"
  :confirm="true"
  confirm-message="hallo aloha lorem ipsum 1500000000 qwertrtz"
  :yes-attributes={text: "success"}
  :no-attributes={text: "nope"}
  in-progress-message="test wait message"
  confirm-position="right"
  @click="onAlert('confirmAttributes')"
>
</a-button>`;

  return {
    codeHtml,
  };
}
