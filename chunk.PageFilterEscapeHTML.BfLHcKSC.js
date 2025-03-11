import{ao as a,_ as i,A as H}from"./bundle.index.DuvU2hzB.js";import{O as r,b as e,Q as l,aR as h,V as n}from"./chunk.vendor.CjhiT8UL.js";import"./chunk.vendor-lodash.DyQEPI1B.js";import{A as T,a as A}from"./chunk.AlohaExample.h4eopEkj.js";import{P,a as S,b as O}from"./chunk.PageFilterTest.DgsbP3QM.js";import{P as F}from"./chunk.PageFilterImportCompositionApi.j8dBtOkW.js";import"./chunk.translations-ar.CL71O9SG.js";import"./chunk.translations-de.DIN2Jpxb.js";import"./chunk.translations-en.CI9kEZeh.js";import"./chunk.translations-es.BBJvdG2l.js";import"./chunk.translations-fr.C2AjtHKq.js";import"./chunk.translations-hr.CkUFQqdC.js";import"./chunk.translations-it.CvHGMPAq.js";import"./chunk.translations-ru.B99zmNGE.js";import"./chunk.APageTabTitle.BT4KYCZ3.js";import"./chunk.AlohaHighlightjs.rF1jvLhM.js";function L(){return{codeJs:`filterEscapeHtml("<script>alert('XSS Attack')<\/script>");
// ${a('<script>alert("XSS Attack")<\/script>')}

filterEscapeHtml("Hello, World!");
// ${a("Hello, World!")}`}}const $={name:"PageFilterEscapeHTMLExample",components:{AlohaExample:T},setup(){const{codeJs:t}=L();return{codeJs:t}}};function I(t,o,s,c,u,m){const p=e("aloha-example");return l(),r(p,{"code-js":t.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const M=i($,[["render",I]]);function B(){return{argumentsText:[{value:"value",types:["String"],text:"_PAGE_FILTER_ESCAPE_HTML_ARGUMENTS_VALUE_"}]}}function C(){return{pageTitle:"filterEscapeHtml"}}const b=`import {
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
`,k={name:"PageFilterEscapeHTML",components:{AlohaPage:A,ATranslation:H,PageFilterArguments:O,PageFilterEscapeHTMLExample:M,PageFilterImportCompositionApi:F,PageFilterImportFunction:S,PageFilterTest:P},setup(){const{pageTitle:t}=C(),{argumentsText:o}=B();return{argumentsText:o,pageTitle:t,test:b}}};function y(t,o,s,c,u,m){const p=e("a-translation"),_=e("page-filter-import-function"),g=e("page-filter-import-composition-api"),f=e("page-filter-arguments"),d=e("page-filter-escape-h-t-m-l-example"),E=e("page-filter-test"),x=e("aloha-page");return l(),r(x,{"page-title":t.pageTitle},{body:h(()=>[n(p,{tag:"p",html:"_PAGE_FILTER_ESCAPE_HTML_DESCRIPTION_"}),n(_,{"function-name":"filterEscapeHtml","type-import":"filters"}),n(g,{"function-name":"filterEscapeHtml"}),n(f,{"arguments-text":t.argumentsText,"function-description":"filterEscapeHtml(value)"},null,8,["arguments-text"]),n(d),n(E,{test:t.test},null,8,["test"])]),_:1},8,["page-title"])}const Y=i(k,[["render",y]]);export{Y as default};
