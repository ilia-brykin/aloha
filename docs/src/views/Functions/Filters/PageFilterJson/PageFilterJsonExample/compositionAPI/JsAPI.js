import {
  filterJson,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = `filterJson({ x: 5, y: 6 });
// ${ filterJson({ x: 5, y: 6 }) }

filterJson({ x: "aloha", y: 6 });
// ${ filterJson({ x: "aloha", y: 6 }) }

filterJson(true);
// ${ filterJson(true) }

filterJson("aloha");
// ${ filterJson("aloha") }

filterJson([1, "false", false]);
// ${ filterJson([1, "false", false]) }

filterJson([NaN, null, Infinity, undefined]);
// ${ filterJson([NaN, null, Infinity, undefined]) }`;

  return {
    codeJs,
  };
}
