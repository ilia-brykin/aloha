import {
  filterLink,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = `filterLink("example.com", { linkText: "example" });
// ${ filterLink("example.com", { linkText: "example" }) }

filterLink("https://example.com", { linkText: "Aloha" });
// ${ filterLink("https://example.com", { linkText: "Aloha" }) }`;

  return {
    codeJs,
  };
}
