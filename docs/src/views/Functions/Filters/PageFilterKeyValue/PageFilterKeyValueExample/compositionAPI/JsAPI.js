import {
  filterKeyValue,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = `filterKeyValue({ x: "aloha", y: 2 });
// ${ filterKeyValue({ x: "aloha", y: 2 }) }`;

  return {
    codeJs,
  };
}
