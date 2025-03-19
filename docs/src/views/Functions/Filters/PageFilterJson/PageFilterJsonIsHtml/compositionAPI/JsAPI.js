import filterJson from "../../../../../../../../src/filters/filterJson";

export default function JsAPI() {
  const codeJs = `filterJson({ x: 5, y: 6 }, { isHtml: true });
// ${ filterJson({ x: 5, y: 6 }, { isHtml: true }) }

filterJson({ x: 5, y: 6 }, { isHtml: false });
// ${ filterJson({ x: 5, y: 6 }, { isHtml: false }) }`;

  return {
    codeJs,
  };
}
