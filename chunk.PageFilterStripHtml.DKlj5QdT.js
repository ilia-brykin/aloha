import{t as e}from"./chunk.AlohaPage.DkILLbn5.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.ZGahdob1.js";import{t as i}from"./chunk.PageFilterImportCompositionApi.CRE9j6zA.js";import{t as a}from"./chunk.AlohaExample.BXW-VBsT.js";import{$t as o,It as s,Pt as c,Vt as l,rn as u,sn as d}from"./chunk.vendor.BvryzG0o.js";import{ht as f,qt as p}from"./bundle.index.b2KYNVgN.js";import{t as m}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function h(){return{codeJs:c(()=>`filterStripHtml("<p>Hello <strong>World</strong></p>");
// ${f(`<p>Hello <strong>World</strong></p>`)}

filterStripHtml("Tom &amp; Jerry");
// ${f(`Tom &amp; Jerry`)}

filterStripHtml("<script>alert(1)<\/script>Text");
// ${f(`<script>alert(1)<\/script>Text`)}`)}}var g={name:`PageFilterStripHtmlExample`,components:{AlohaExample:a},setup(){let{codeJs:e}=h();return{codeJs:e}}};function _(e,t,n,r,i,a){let c=u(`aloha-example`);return o(),s(c,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var v=m(g,[[`render`,_]]);function y(){return{argumentsText:[{value:`value`,types:[`String`],text:`_PAGE_FILTER_STRIP_HTML_ARGUMENTS_VALUE_`}]}}function b(){return{pageTitle:`filterStripHtml`}}var x=`import {
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
`,S={name:`PageFilterStripHtml`,components:{AlohaPage:e,ATranslation:p,PageFilterArguments:n,PageFilterImportCompositionApi:i,PageFilterImportFunction:t,PageFilterStripHtmlExample:v,PageFilterTest:r},setup(){let{pageTitle:e}=b(),{argumentsText:t}=y();return{argumentsText:t,pageTitle:e,test:x}}};function C(e,t,n,r,i,a){let c=u(`a-translation`),f=u(`page-filter-import-function`),p=u(`page-filter-import-composition-api`),m=u(`page-filter-arguments`),h=u(`page-filter-strip-html-example`),g=u(`page-filter-test`),_=u(`aloha-page`);return o(),s(_,{"page-title":e.pageTitle},{body:d(()=>[l(c,{tag:`p`,html:`_PAGE_FILTER_STRIP_HTML_DESCRIPTION_`}),l(f,{"function-name":`filterStripHtml`,"type-import":`filters`}),l(p,{"function-name":`filterStripHtml`}),l(m,{"arguments-text":e.argumentsText,"function-description":`filterStripHtml(value)`},null,8,[`arguments-text`]),l(h),l(g,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var w=m(S,[[`render`,C]]);export{w as default};