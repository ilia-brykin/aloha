import {
  filterEmail,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = `filterEmail("example@example.com");
// ${ filterEmail("example@example.com") }

filterEmail(undefined);
// ${ filterEmail(undefined) }`;

  return {
    codeJs,
  };
}
