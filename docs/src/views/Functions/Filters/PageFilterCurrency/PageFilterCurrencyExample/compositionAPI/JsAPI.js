import {
  filterCurrency,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = `filterCurrency(123456);
// ${ filterCurrency(123456) }

filterCurrency("1000000.2345");
// ${ filterCurrency("1000000.2345") }

filterCurrency("aloha");
// ${ filterCurrency("aloha") }

filterCurrency(undefined);
// ${ filterCurrency(undefined) }`;

  return {
    codeJs,
  };
}
