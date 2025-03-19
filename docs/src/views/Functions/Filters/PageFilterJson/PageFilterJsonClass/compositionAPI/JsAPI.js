import filterJson from "../../../../../../../../src/filters/filterJson";

export default function JsAPI() {
  const codeJs = `filterJson({ x: 5, y: 6 }, { isHtml: true, class: "aloha" });
// ${ filterJson({ x: 5, y: 6 }, { isHtml: true, class: "aloha" }) }`;

  return {
    codeJs,
  };
}
