import filterEmail from "../../../../../../../src/filters/filterEmail";

export default function JsAPI() {
  const codeJs = `filterEmail("example@example.com", { linkClass: "a_btn a_btn_link" });
// ${ filterEmail("example@example.com", { linkClass: "a_btn a_btn_link" }) }`;

  return {
    codeJs,
  };
}
