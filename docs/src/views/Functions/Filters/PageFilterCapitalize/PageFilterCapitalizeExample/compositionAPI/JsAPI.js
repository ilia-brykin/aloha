import {
  filterCapitalize,
} from "../../../../../../../../src";

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
