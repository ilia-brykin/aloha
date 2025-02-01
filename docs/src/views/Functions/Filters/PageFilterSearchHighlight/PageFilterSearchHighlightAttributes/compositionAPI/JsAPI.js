import {
  filterSearchHighlight,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = `filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "ipsum", attributes: ["data-aloha='search'", "title='Highlight'"] });
// ${ filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "ipsum", attributes: ["data-aloha='search'", "title='Highlight'"] }) }`;

  return {
    codeJs,
  };
}
