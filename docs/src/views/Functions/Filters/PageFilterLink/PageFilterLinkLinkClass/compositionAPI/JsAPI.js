import {
  filterLink,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = `filterLink("example.com", { linkClass: "a_btn a_btn_link" });
// ${ filterLink("example.com", { linkClass: "a_btn a_btn_link" }) }`;

  return {
    codeJs,
  };
}
