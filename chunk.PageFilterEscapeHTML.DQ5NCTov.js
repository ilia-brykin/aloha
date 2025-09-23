import{A as H,a as h}from"./chunk.AlohaExample.I_T8ZN4A.js";import{P as T,a as A,b as P}from"./chunk.PageFilterTest.Dv_PXV3a.js";import{aH as a,_ as i,A as S}from"./bundle.index.BPjh6AGg.js";import{V as r,e,W as l,aT as F,_ as n}from"./chunk.vendor.DmOTRqbf.js";import"./chunk.vendor-lodash.DsZvX3G1.js";import{P as O}from"./chunk.PageFilterImportCompositionApi.CuUIlvhr.js";import"./chunk.APageTabTitle.BbOSMcnk.js";import"./chunk.AlohaHighlightjs.8HRkfNnH.js";import"./chunk.translations-ar.BiLIUuBX.js";import"./chunk.translations-de.Cy_u5T72.js";import"./chunk.translations-en.CWj0a7ej.js";import"./chunk.translations-es.D-4cj_p_.js";import"./chunk.translations-fr.LwkSu7L_.js";import"./chunk.translations-hr.G7gNG4Fu.js";import"./chunk.translations-it.BilXvddc.js";import"./chunk.translations-ru.XOcS94ap.js";function L(){return{codeJs:`filterEscapeHtml("<script>alert('XSS Attack')<\/script>");
// ${a('<script>alert("XSS Attack")<\/script>')}

filterEscapeHtml("Hello, World!");
// ${a("Hello, World!")}`}}const $={name:"PageFilterEscapeHTMLExample",components:{AlohaExample:H},setup(){const{codeJs:t}=L();return{codeJs:t}}};function I(t,o,s,c,u,m){const p=e("aloha-example");return l(),r(p,{"code-js":t.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const M=i($,[["render",I]]);function B(){return{argumentsText:[{value:"value",types:["String"],text:"_PAGE_FILTER_ESCAPE_HTML_ARGUMENTS_VALUE_"}]}}function C(){return{pageTitle:"filterEscapeHtml"}}const k=`import {
  describe,
  expect,
  it,
} from "@jest/globals";

import filterEscapeHtml from "../filterEscapeHtml";

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
`,y={name:"PageFilterEscapeHTML",components:{AlohaPage:h,ATranslation:S,PageFilterArguments:P,PageFilterEscapeHTMLExample:M,PageFilterImportCompositionApi:O,PageFilterImportFunction:A,PageFilterTest:T},setup(){const{pageTitle:t}=C(),{argumentsText:o}=B();return{argumentsText:o,pageTitle:t,test:k}}};function b(t,o,s,c,u,m){const p=e("a-translation"),_=e("page-filter-import-function"),g=e("page-filter-import-composition-api"),f=e("page-filter-arguments"),d=e("page-filter-escape-h-t-m-l-example"),E=e("page-filter-test"),x=e("aloha-page");return l(),r(x,{"page-title":t.pageTitle},{body:F(()=>[n(p,{tag:"p",html:"_PAGE_FILTER_ESCAPE_HTML_DESCRIPTION_"}),n(_,{"function-name":"filterEscapeHtml","type-import":"filters"}),n(g,{"function-name":"filterEscapeHtml"}),n(f,{"arguments-text":t.argumentsText,"function-description":"filterEscapeHtml(value)"},null,8,["arguments-text"]),n(d),n(E,{test:t.test},null,8,["test"])]),_:1},8,["page-title"])}const Y=i(y,[["render",b]]);export{Y as default};
