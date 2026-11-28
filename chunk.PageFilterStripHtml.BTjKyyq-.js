import{t as e}from"./chunk.AlohaPage.BvUvrvQ4.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.C-ArH7Yp.js";import{t as i}from"./chunk.PageFilterImportCompositionApi.D4dHtW7t.js";import{t as a}from"./chunk.AlohaExample.Bx3NX4bX.js";import{Bt as o,Ht as s,an as c,ln as l,pn as u,qt as d}from"./chunk.vendor.SEynj6EJ.js";import{Et as f,mn as p,t as m}from"./bundle.index.LlT2KVEy.js";function h(){return{codeJs:o(()=>`filterStripHtml("<p>Hello <strong>World</strong></p>");
// ${f(`<p>Hello <strong>World</strong></p>`)}

filterStripHtml("Tom &amp; Jerry");
// ${f(`Tom &amp; Jerry`)}

filterStripHtml("<script>alert(1)<\/script>Text");
// ${f(`<script>alert(1)<\/script>Text`)}`)}}var g={name:`PageFilterStripHtmlExample`,components:{AlohaExample:a},setup(){let{codeJs:e}=h();return{codeJs:e}}};function _(e,t,n,r,i,a){let o=l(`aloha-example`);return c(),s(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var v=m(g,[[`render`,_]]);function y(){return{argumentsText:[{value:`value`,types:[`String`],text:`_PAGE_FILTER_STRIP_HTML_ARGUMENTS_VALUE_`}]}}function b(){return{pageTitle:`filterStripHtml`}}var x=`import {
  describe,
  expect,
  it,
} from "vitest";

import filterStripHtml from "../filterStripHtml.js";

describe("filterStripHtml", () => {
  it("default", () => {
    expect(filterStripHtml("<p>Hello <strong>World</strong></p>")).toBe("Hello World");
    expect(filterStripHtml("No tags")).toBe("No tags");
    expect(filterStripHtml(42)).toBe("42");
  });

  it("decodes entities", () => {
    expect(filterStripHtml("Tom &amp; Jerry &lt;3")).toBe("Tom & Jerry <3");
  });

  it("removes script and style with their contents", () => {
    expect(filterStripHtml("<script>alert(1)<\/script>Hi<style>p { color: red; }</style>")).toBe("Hi");
    expect(filterStripHtml("<img src=x onerror=alert(1)>Text")).toBe("Text");
  });

  it("empty values", () => {
    expect(filterStripHtml(undefined)).toBe("");
    expect(filterStripHtml(null)).toBe("");
    expect(filterStripHtml("")).toBe("");
  });
});
`,S={name:`PageFilterStripHtml`,components:{AlohaPage:e,ATranslation:p,PageFilterArguments:n,PageFilterImportCompositionApi:i,PageFilterImportFunction:t,PageFilterStripHtmlExample:v,PageFilterTest:r},setup(){let{pageTitle:e}=b(),{argumentsText:t}=y();return{argumentsText:t,pageTitle:e,test:x}}};function C(e,t,n,r,i,a){let o=l(`a-translation`),f=l(`page-filter-import-function`),p=l(`page-filter-import-composition-api`),m=l(`page-filter-arguments`),h=l(`page-filter-strip-html-example`),g=l(`page-filter-test`),_=l(`aloha-page`);return c(),s(_,{"page-title":e.pageTitle},{body:u(()=>[d(o,{tag:`p`,html:`_PAGE_FILTER_STRIP_HTML_DESCRIPTION_`}),d(f,{"function-name":`filterStripHtml`,"type-import":`filters`}),d(p,{"function-name":`filterStripHtml`}),d(m,{"arguments-text":e.argumentsText,"function-description":`filterStripHtml(value)`},null,8,[`arguments-text`]),d(h),d(g,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var w=m(S,[[`render`,C]]);export{w as default};