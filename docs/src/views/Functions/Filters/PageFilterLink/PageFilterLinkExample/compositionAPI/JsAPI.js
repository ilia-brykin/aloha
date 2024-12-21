import {
  filterLink,
} from "../../../../../../../../src";

export default function JsAPI() {
  const codeJs = `filterLink("example.com");
// ${ filterLink("example.com") }

filterLink("https://example.com");
// ${ filterLink("https://example.com") }`;

  return {
    codeJs,
  };
}
