import filterSearchHighlight from "../../../../../../../../src/filters/filterSearchHighlight";

export default function JsAPI() {
  const codeJs = `filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "ipsum", searchClass: "test_class" });
// ${ filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "ipsum", searchClass: "test_class" }) }`;

  return {
    codeJs,
  };
}
