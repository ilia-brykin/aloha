import filterLink from "../../../../../../../src/filters/filterLink";

export default function JsAPI() {
  const codeJs = `filterLink("example.com", { linkClass: "a_btn a_btn_link" });
// ${ filterLink("example.com", { linkClass: "a_btn a_btn_link" }) }`;

  return {
    codeJs,
  };
}
