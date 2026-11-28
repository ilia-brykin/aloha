import{t as e}from"./chunk.AlohaPage.IS3NRfGI.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.BiQNU7rf.js";import{t as i}from"./chunk.AlohaExample.CDuUdjpI.js";import{Bt as a,mn as o,t as s}from"./bundle.index.DikcaTJ9.js";import{Ht as c,an as l,ln as u,pn as d,qt as f}from"./chunk.vendor.SEynj6EJ.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.r8Qpa9Lw.js";function m(){return{codeJs:`filterEscapeHtml("<script>alert('XSS Attack')<\/script>");
// ${a(`<script>alert("XSS Attack")<\/script>`)}

filterEscapeHtml("Hello, World!");
// ${a(`Hello, World!`)}`}}var h={name:`PageFilterEscapeHTMLExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=u(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=s(h,[[`render`,g]]);function v(){return{argumentsText:[{value:`value`,types:[`String`],text:`_PAGE_FILTER_ESCAPE_HTML_ARGUMENTS_VALUE_`}]}}function y(){return{pageTitle:`filterEscapeHtml`}}var b=`import {
  describe,
  expect,
  it,
} from "vitest";

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
`,x={name:`PageFilterEscapeHTML`,components:{AlohaPage:e,ATranslation:o,PageFilterArguments:n,PageFilterEscapeHTMLExample:_,PageFilterImportCompositionApi:p,PageFilterImportFunction:t,PageFilterTest:r},setup(){let{pageTitle:e}=y(),{argumentsText:t}=v();return{argumentsText:t,pageTitle:e,test:b}}};function S(e,t,n,r,i,a){let o=u(`a-translation`),s=u(`page-filter-import-function`),p=u(`page-filter-import-composition-api`),m=u(`page-filter-arguments`),h=u(`page-filter-escape-h-t-m-l-example`),g=u(`page-filter-test`),_=u(`aloha-page`);return l(),c(_,{"page-title":e.pageTitle},{body:d(()=>[f(o,{tag:`p`,html:`_PAGE_FILTER_ESCAPE_HTML_DESCRIPTION_`}),f(s,{"function-name":`filterEscapeHtml`,"type-import":`filters`}),f(p,{"function-name":`filterEscapeHtml`}),f(m,{"arguments-text":e.argumentsText,"function-description":`filterEscapeHtml(value)`},null,8,[`arguments-text`]),f(h),f(g,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var C=s(x,[[`render`,S]]);export{C as default};