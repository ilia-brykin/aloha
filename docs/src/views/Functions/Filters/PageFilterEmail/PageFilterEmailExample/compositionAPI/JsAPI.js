import {
  filterEmail,
} from "../../../../../../../../src";

export default function JsAPI() {
  const codeJs = `filterEmail("example@example.com");
// ${ filterEmail("example@example.com") }

filterEmail(undefined);
// ${ filterEmail(undefined) }`;

  return {
    codeJs,
  };
}
