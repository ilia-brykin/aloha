import filterCurrency from "../../../../../../../src/filters/filterCurrency";

export default function JsAPI() {
  const codeJs = `filterCurrency(2000, { suffix: "€" });
// ${ filterCurrency(2000, { suffix: "€" }) }

filterCurrency("25.5", { suffix: "%" });
// ${ filterCurrency("25.5", { suffix: "%" }) }`;

  return {
    codeJs,
  };
}
