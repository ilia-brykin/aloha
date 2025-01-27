import {
  filterCapitalize,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = `filterCapitalize("foobar");
// ${ filterCapitalize("foobar") }

filterCapitalize("FOOBAR");
// ${ filterCapitalize("FOOBAR") }

filterCapitalize("fOoBaR");
// ${ filterCapitalize("fOoBaR") }`;

  return {
    codeJs,
  };
}
