import{t as e}from"./chunk.AlohaPage.ChkpVQK6.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.CchSHHxI.js";import{t as i}from"./chunk.AlohaExample.yCYNeej2.js";import{et as a,wt as o}from"./bundle.index.DgEnxzUz.js";import{Bt as s,It as c,Zt as l,an as u,tn as d}from"./chunk.vendor.H0cZuFAV.js";import{t as f}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.v80yi3G2.js";function m(){return{codeJs:`filterEscapeHtml("<script>alert('XSS Attack')<\/script>");
// ${o(`<script>alert("XSS Attack")<\/script>`)}

filterEscapeHtml("Hello, World!");
// ${o(`Hello, World!`)}`}}var h={name:`PageFilterEscapeHTMLExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=d(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=f(h,[[`render`,g]]);function v(){return{argumentsText:[{value:`value`,types:[`String`],text:`_PAGE_FILTER_ESCAPE_HTML_ARGUMENTS_VALUE_`}]}}function y(){return{pageTitle:`filterEscapeHtml`}}var b=`import {
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
`,x={name:`PageFilterEscapeHTML`,components:{AlohaPage:e,ATranslation:a,PageFilterArguments:n,PageFilterEscapeHTMLExample:_,PageFilterImportCompositionApi:p,PageFilterImportFunction:t,PageFilterTest:r},setup(){let{pageTitle:e}=y(),{argumentsText:t}=v();return{argumentsText:t,pageTitle:e,test:b}}};function S(e,t,n,r,i,a){let o=d(`a-translation`),f=d(`page-filter-import-function`),p=d(`page-filter-import-composition-api`),m=d(`page-filter-arguments`),h=d(`page-filter-escape-h-t-m-l-example`),g=d(`page-filter-test`),_=d(`aloha-page`);return l(),c(_,{"page-title":e.pageTitle},{body:u(()=>[s(o,{tag:`p`,html:`_PAGE_FILTER_ESCAPE_HTML_DESCRIPTION_`}),s(f,{"function-name":`filterEscapeHtml`,"type-import":`filters`}),s(p,{"function-name":`filterEscapeHtml`}),s(m,{"arguments-text":e.argumentsText,"function-description":`filterEscapeHtml(value)`},null,8,[`arguments-text`]),s(h),s(g,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var C=f(x,[[`render`,S]]);export{C as default};