import filterLink from "../../../../../../../src/filters/filterLink";

export default function JsAPI() {
  const codeJs = `filterLink("example.com", { target: "_blank" });
// ${ filterLink("example.com", { target: "_blank" }) }

filterLink("https://example.com", { target: "_self" });
// ${ filterLink("example.com", { target: "_self" }) }

filterLink("https://example.com", { target: "_parent" });
// ${ filterLink("example.com", { target: "_parent" }) }

filterLink("https://example.com", { target: "_top" });
// ${ filterLink("example.com", { target: "_top" }) }`;

  return {
    codeJs,
  };
}
