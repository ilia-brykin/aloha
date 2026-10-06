import{Tt as e,Ut as t,kt as n,qt as r,zt as i}from"./chunk.vendor.CZPox1kV.js";import{Z as a,t as o,vt as s}from"./bundle.index.BmSiyQNH.js";import{n as c,t as l}from"./chunk.AlohaExample.CD4LlhAz.js";import{n as u,r as d,t as f}from"./chunk.PageFilterTest.DKKVbW-u.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.BMcX_RFK.js";function m(){return{codeJs:`filterEscapeHtml("<script>alert('XSS Attack')<\/script>");
// ${s(`<script>alert("XSS Attack")<\/script>`)}

filterEscapeHtml("Hello, World!");
// ${s(`Hello, World!`)}`}}var h={name:`PageFilterEscapeHTMLExample`,components:{AlohaExample:l},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=o(h,[[`render`,g]]);function v(){return{argumentsText:[{value:`value`,types:[`String`],text:`_PAGE_FILTER_ESCAPE_HTML_ARGUMENTS_VALUE_`}]}}function y(){return{pageTitle:`filterEscapeHtml`}}var b=`import {
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
`,x={name:`PageFilterEscapeHTML`,components:{AlohaPage:c,ATranslation:a,PageFilterArguments:d,PageFilterEscapeHTMLExample:_,PageFilterImportCompositionApi:p,PageFilterImportFunction:u,PageFilterTest:f},setup(){let{pageTitle:e}=y(),{argumentsText:t}=v();return{argumentsText:t,pageTitle:e,test:b}}};function S(a,o,s,c,l,u){let d=t(`a-translation`),f=t(`page-filter-import-function`),p=t(`page-filter-import-composition-api`),m=t(`page-filter-arguments`),h=t(`page-filter-escape-h-t-m-l-example`),g=t(`page-filter-test`),_=t(`aloha-page`);return i(),e(_,{"page-title":a.pageTitle},{body:r(()=>[n(d,{tag:`p`,html:`_PAGE_FILTER_ESCAPE_HTML_DESCRIPTION_`}),n(f,{"function-name":`filterEscapeHtml`,"type-import":`filters`}),n(p,{"function-name":`filterEscapeHtml`}),n(m,{"arguments-text":a.argumentsText,"function-description":`filterEscapeHtml(value)`},null,8,[`arguments-text`]),n(h),n(g,{test:a.test},null,8,[`test`])]),_:1},8,[`page-title`])}var C=o(x,[[`render`,S]]);export{C as default};