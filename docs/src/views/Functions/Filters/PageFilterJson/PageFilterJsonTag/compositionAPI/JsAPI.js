import filterJson from "../../../../../../../../src/filters/filterJson";

export default function JsAPI() {
  const codeJs = `filterJson({ x: 5, y: 6 }, { isHtml: true, tag: "pre" });
// ${ filterJson({ x: 5, y: 6 }, { isHtml: true, tag: "pre" }) }

filterJson({ x: 5, y: 6 }, { isHtml: true, tag: "div" });
// ${ filterJson({ x: 5, y: 6 }, { isHtml: true, tag: "div" }) }`;

  return {
    codeJs,
  };
}
