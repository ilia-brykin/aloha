import {
  filterCurrency,
} from "../../../../../../../../src";

export default function JsAPI() {
  const codeJs = `filterCurrency(1000222.55, { digitGrouping: false });
// ${ filterCurrency(1000222.55, { digitGrouping: false }) }

filterCurrency(1000222.55, { digitGrouping: true });
// ${ filterCurrency(1000222.55, { digitGrouping: true }) }`;

  return {
    codeJs,
  };
}
