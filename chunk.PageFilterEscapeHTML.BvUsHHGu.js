import{A as H,a as h}from"./chunk.AlohaExample.A9Ef-QbL.js";import{aI as a,_ as l,A as T}from"./bundle.index.Dn7qpWjQ.js";import{P as A,a as P,b as S}from"./chunk.PageFilterTest.Dwl2cJEE.js";import{m as e,K as c,J as i,aK as F,P as n}from"./chunk.vendor.DQz1Isc4.js";import{P as O}from"./chunk.PageFilterImportCompositionApi.dDZ0bVyw.js";import"./chunk.vendor-lodash.Cgq9oNCy.js";import"./chunk.vendor-tinymce.cPIiul0H.js";function L(){return{codeJs:`filterEscapeHtml("<script>alert('XSS Attack')<\/script>");
// ${a('<script>alert("XSS Attack")<\/script>')}

filterEscapeHtml("Hello, World!");
// ${a("Hello, World!")}`}}const $={name:"PageFilterEscapeHTMLExample",components:{AlohaExample:H},setup(){const{codeJs:t}=L();return{codeJs:t}}};function I(t,s,o,r,u,m){const p=e("aloha-example");return i(),c(p,{"code-js":t.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const M=l($,[["render",I]]);function B(){return{argumentsText:[{value:"value",types:["String"],text:"_PAGE_FILTER_ESCAPE_HTML_ARGUMENTS_VALUE_"}]}}function C(){return{pageTitle:"filterEscapeHtml"}}const k=`import filterEscapeHtml from "../filterEscapeHtml";

describe("filterEscapeHtml", () => {
  it("should escape HTML special characters", () => {
    const input = "<script>alert(\\"XSS Attack\\")<\/script>";
    const expectedOutput = "&lt;script&gt;alert(\\"XSS Attack\\")&lt;/script&gt;";
    expect(filterEscapeHtml(input)).toBe(expectedOutput);
  });

  it("should return the same string if no special characters", () => {
    const input = "Hello, World!";
    const expectedOutput = "Hello, World!";
    expect(filterEscapeHtml(input)).toBe(expectedOutput);
  });

  it("should return an empty string if input is empty", () => {
    const input = "";
    const expectedOutput = "";
    expect(filterEscapeHtml(input)).toBe(expectedOutput);
  });

  it("should escape only special HTML characters and leave the rest", () => {
    const input = "Hello <strong>world</strong>";
    const expectedOutput = "Hello &lt;strong&gt;world&lt;/strong&gt;";
    expect(filterEscapeHtml(input)).toBe(expectedOutput);
  });

  it("should handle special characters like &, \\", '", () => {
    const input = "Fish & Chips \\"Delicious\\"";
    const expectedOutput = "Fish &amp; Chips \\"Delicious\\"";
    expect(filterEscapeHtml(input)).toBe(expectedOutput);
  });

  it("should escape HTML list tags", () => {
    const input = "<ul><li>test</li></ul>";
    const expectedOutput = "&lt;ul&gt;&lt;li&gt;test&lt;/li&gt;&lt;/ul&gt;";
    expect(filterEscapeHtml(input)).toBe(expectedOutput);
  });
});
`,y={name:"PageFilterEscapeHTML",components:{AlohaPage:h,ATranslation:T,PageFilterArguments:A,PageFilterEscapeHTMLExample:M,PageFilterImportCompositionApi:O,PageFilterImportFunction:P,PageFilterTest:S},setup(){const{pageTitle:t}=C(),{argumentsText:s}=B();return{argumentsText:s,pageTitle:t,test:k}}};function v(t,s,o,r,u,m){const p=e("a-translation"),_=e("page-filter-import-function"),g=e("page-filter-import-composition-api"),f=e("page-filter-arguments"),d=e("page-filter-escape-h-t-m-l-example"),E=e("page-filter-test"),x=e("aloha-page");return i(),c(x,{"page-title":t.pageTitle},{body:F(()=>[n(p,{tag:"p",html:"_PAGE_FILTER_ESCAPE_HTML_DESCRIPTION_"}),n(_,{"function-name":"filterEscapeHtml","type-import":"filters"}),n(g,{"function-name":"filterEscapeHtml"}),n(f,{"arguments-text":t.argumentsText,"function-description":"filterEscapeHtml(value)"},null,8,["arguments-text"]),n(d),n(E,{test:t.test},null,8,["test"])]),_:1},8,["page-title"])}const D=l(y,[["render",v]]);export{D as default};