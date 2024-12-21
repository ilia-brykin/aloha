import {
  filterEscapeHtml,
} from "../../../../../../../../src";

export default function JsAPI() {
  const codeJs = `filterEscapeHtml("<script>alert('XSS Attack')</script>");
// ${ filterEscapeHtml("<script>alert(\"XSS Attack\")</script>") }

filterEscapeHtml("Hello, World!");
// ${ filterEscapeHtml("Hello, World!") }`;

  return {
    codeJs,
  };
}
