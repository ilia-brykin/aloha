import{A as H,a as h}from"./chunk.AlohaExample.Dg8VGksp.js";import{P as T,a as A,b as P}from"./chunk.PageFilterTest.I1g2ZzoG.js";import{aq as a,_ as i,A as S}from"./bundle.index.BDDZHC_s.js";import{U as r,e,V as l,aS as F,Z as n}from"./chunk.vendor.CJgiAfkr.js";import"./chunk.vendor-lodash.UgDJRseT.js";import{P as O}from"./chunk.PageFilterImportCompositionApi.DMicyiAN.js";import"./chunk.APageTabTitle.B2dwQInF.js";import"./chunk.AlohaHighlightjs.CS2rrB7v.js";import"./chunk.translations-ar.C215GjCi.js";import"./chunk.translations-de.2OTgW6Cj.js";import"./chunk.translations-en.BDnCg_Z9.js";import"./chunk.translations-es.BP9eJkFz.js";import"./chunk.translations-fr.BOe55yrn.js";import"./chunk.translations-hr.B3s_PrJE.js";import"./chunk.translations-it.Cc3k7wyX.js";import"./chunk.translations-ru.D-swuOFG.js";function L(){return{codeJs:`filterEscapeHtml("<script>alert('XSS Attack')<\/script>");
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
`,y={name:"PageFilterEscapeHTML",components:{AlohaPage:h,ATranslation:S,PageFilterArguments:P,PageFilterEscapeHTMLExample:M,PageFilterImportCompositionApi:O,PageFilterImportFunction:A,PageFilterTest:T},setup(){const{pageTitle:t}=C(),{argumentsText:o}=B();return{argumentsText:o,pageTitle:t,test:k}}};function b(t,o,s,c,u,m){const p=e("a-translation"),_=e("page-filter-import-function"),g=e("page-filter-import-composition-api"),f=e("page-filter-arguments"),d=e("page-filter-escape-h-t-m-l-example"),E=e("page-filter-test"),x=e("aloha-page");return l(),r(x,{"page-title":t.pageTitle},{body:F(()=>[n(p,{tag:"p",html:"_PAGE_FILTER_ESCAPE_HTML_DESCRIPTION_"}),n(_,{"function-name":"filterEscapeHtml","type-import":"filters"}),n(g,{"function-name":"filterEscapeHtml"}),n(f,{"arguments-text":t.argumentsText,"function-description":"filterEscapeHtml(value)"},null,8,["arguments-text"]),n(d),n(E,{test:t.test},null,8,["test"])]),_:1},8,["page-title"])}const Q=i(y,[["render",b]]);export{Q as default};
