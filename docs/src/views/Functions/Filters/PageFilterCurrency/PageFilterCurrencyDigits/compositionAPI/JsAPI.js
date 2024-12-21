import {
  filterCurrency,
} from "../../../../../../../../src";

export default function JsAPI() {
  const codeJs = `filterCurrency(2000, { digits: 0 });
// ${ filterCurrency(2000, { digits: 0 }) }

filterCurrency("25.53451", { digits: 4 });
// ${ filterCurrency("25.53451", { digits: 4 }) }`;

  return {
    codeJs,
  };
}
