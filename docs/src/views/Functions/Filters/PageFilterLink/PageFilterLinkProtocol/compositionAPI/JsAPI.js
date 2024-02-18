import filterLink from "../../../../../../../../src/filters/filterLink";

export default function JsAPI() {
  const codeJs = `filterLink("example.com", { protocol: "" });
// ${ filterLink("example.com", { protocol: "" }) }

filterLink("https://example.com", { protocol: "http://" });
// ${ filterLink("example.com", { protocol: "http://" }) }`;

  return {
    codeJs,
  };
}
