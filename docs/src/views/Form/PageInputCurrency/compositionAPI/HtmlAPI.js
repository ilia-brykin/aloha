export default function HtmlAPI() {
  const codeHtml = `<span>Beispiel Model {{ mainModel }}</span>
  <a-input-currency classs="a_mb_5"
    :key="exampleInputKey"
    id="input5"
    v-model="mainModel"
    label="Beispiel Input"
    :required="true"
    :thousand-divider="appliedModel.modelThousandDivider"
    :decimal-divider="appliedModel.modelDecimalDivider"
    :step="appliedModel.modelStep"
    :validation-on-change="true"
    :symbols-after-decimal-divider="appliedModel.modelSymbolsAfterDecimalDivider"
  ></a-input-currency>`;

  return {
    codeHtml,
  };
}
