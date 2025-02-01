import {
  filterSearchHighlight,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = `filterSearchHighlight("Aloha Vue vue.", { searchModel: "Vue", caseSensitive: true });
// ${ filterSearchHighlight("Aloha Vue vue.", { searchModel: "Vue", caseSensitive: true }) }

filterSearchHighlight("Aloha Vue vue.", { searchModel: "Vue", caseSensitive: false });
// ${ filterSearchHighlight("Aloha Vue vue.", { searchModel: "Vue", caseSensitive: false }) }`;

  return {
    codeJs,
  };
}
