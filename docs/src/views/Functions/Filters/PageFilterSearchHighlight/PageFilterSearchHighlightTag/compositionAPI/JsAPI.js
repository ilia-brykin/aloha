import {
  filterSearchHighlight,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = `filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "ipsum", tag: "strong" });
// ${ filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "ipsum", tag: "strong" }) }`;

  return {
    codeJs,
  };
}
