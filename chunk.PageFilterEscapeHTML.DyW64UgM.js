import{t as e}from"./chunk.AlohaPage.wEJC2jSx.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.DSyNjyqk.js";import{t as i}from"./chunk.AlohaExample.D5DtvcYq.js";import{Bt as a,mn as o,t as s}from"./bundle.index.DbRNiyxs.js";import{Jt as c,Ut as l,mn as u,on as d,un as f}from"./chunk.vendor.DL09mhUf.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.BKaHBgrS.js";function m(){return{codeJs:`filterEscapeHtml("<script>alert('XSS Attack')<\/script>");
// ${a(`<script>alert("XSS Attack")<\/script>`)}

filterEscapeHtml("Hello, World!");
// ${a(`Hello, World!`)}`}}var h={name:`PageFilterEscapeHTMLExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=f(`aloha-example`);return d(),l(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=s(h,[[`render`,g]]);function v(){return{argumentsText:[{value:`value`,types:[`String`],text:`_PAGE_FILTER_ESCAPE_HTML_ARGUMENTS_VALUE_`}]}}function y(){return{pageTitle:`filterEscapeHtml`}}var b=`import {
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
`,x={name:`PageFilterEscapeHTML`,components:{AlohaPage:e,ATranslation:o,PageFilterArguments:n,PageFilterEscapeHTMLExample:_,PageFilterImportCompositionApi:p,PageFilterImportFunction:t,PageFilterTest:r},setup(){let{pageTitle:e}=y(),{argumentsText:t}=v();return{argumentsText:t,pageTitle:e,test:b}}};function S(e,t,n,r,i,a){let o=f(`a-translation`),s=f(`page-filter-import-function`),p=f(`page-filter-import-composition-api`),m=f(`page-filter-arguments`),h=f(`page-filter-escape-h-t-m-l-example`),g=f(`page-filter-test`),_=f(`aloha-page`);return d(),l(_,{"page-title":e.pageTitle},{body:u(()=>[c(o,{tag:`p`,html:`_PAGE_FILTER_ESCAPE_HTML_DESCRIPTION_`}),c(s,{"function-name":`filterEscapeHtml`,"type-import":`filters`}),c(p,{"function-name":`filterEscapeHtml`}),c(m,{"arguments-text":e.argumentsText,"function-description":`filterEscapeHtml(value)`},null,8,[`arguments-text`]),c(h),c(g,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var C=s(x,[[`render`,S]]);export{C as default};