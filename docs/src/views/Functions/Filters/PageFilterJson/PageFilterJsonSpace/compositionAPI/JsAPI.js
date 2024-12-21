import {
  filterJson,
} from "../../../../../../../../src";

export default function JsAPI() {
  const codeJs = `filterJson({ x: 5, y: 6 }, { space: 0 });
// ${ filterJson({ x: 5, y: 6 }, { space: 0 }) }

filterJson({ x: 5, y: 6 }, { space: 1 });
// ${ filterJson({ x: 5, y: 6 }, { space: 1 }) }

filterJson({ x: 5, y: 6 }, { space: "\\t" });
// ${ filterJson({ x: 5, y: 6 }, { space: "\t" }) }`;

  return {
    codeJs,
  };
}
