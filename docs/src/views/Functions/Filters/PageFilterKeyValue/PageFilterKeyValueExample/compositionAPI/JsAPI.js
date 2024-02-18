import filterKeyValue from "../../../../../../../../src/filters/filterKeyValue";

export default function JsAPI() {
  const codeJs = `filterKeyValue({ x: "aloha", y: 2 });
// ${ filterKeyValue({ x: "aloha", y: 2 }) }`;

  return {
    codeJs,
  };
}
