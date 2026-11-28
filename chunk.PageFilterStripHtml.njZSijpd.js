import{t as e}from"./chunk.AlohaPage.wEJC2jSx.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.DSyNjyqk.js";import{t as i}from"./chunk.PageFilterImportCompositionApi.BKaHBgrS.js";import{t as a}from"./chunk.AlohaExample.D5DtvcYq.js";import{Jt as o,Ut as s,Vt as c,mn as l,on as u,un as d}from"./chunk.vendor.DL09mhUf.js";import{Et as f,mn as p,t as m}from"./bundle.index.DbRNiyxs.js";function h(){return{codeJs:c(()=>`filterStripHtml("<p>Hello <strong>World</strong></p>");
// ${f(`<p>Hello <strong>World</strong></p>`)}

filterStripHtml("Tom &amp; Jerry");
// ${f(`Tom &amp; Jerry`)}

filterStripHtml("<script>alert(1)<\/script>Text");
// ${f(`<script>alert(1)<\/script>Text`)}`)}}var g={name:`PageFilterStripHtmlExample`,components:{AlohaExample:a},setup(){let{codeJs:e}=h();return{codeJs:e}}};function _(e,t,n,r,i,a){let o=d(`aloha-example`);return u(),s(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var v=m(g,[[`render`,_]]);function y(){return{argumentsText:[{value:`value`,types:[`String`],text:`_PAGE_FILTER_STRIP_HTML_ARGUMENTS_VALUE_`}]}}function b(){return{pageTitle:`filterStripHtml`}}var x=`import {
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
`,S={name:`PageFilterStripHtml`,components:{AlohaPage:e,ATranslation:p,PageFilterArguments:n,PageFilterImportCompositionApi:i,PageFilterImportFunction:t,PageFilterStripHtmlExample:v,PageFilterTest:r},setup(){let{pageTitle:e}=b(),{argumentsText:t}=y();return{argumentsText:t,pageTitle:e,test:x}}};function C(e,t,n,r,i,a){let c=d(`a-translation`),f=d(`page-filter-import-function`),p=d(`page-filter-import-composition-api`),m=d(`page-filter-arguments`),h=d(`page-filter-strip-html-example`),g=d(`page-filter-test`),_=d(`aloha-page`);return u(),s(_,{"page-title":e.pageTitle},{body:l(()=>[o(c,{tag:`p`,html:`_PAGE_FILTER_STRIP_HTML_DESCRIPTION_`}),o(f,{"function-name":`filterStripHtml`,"type-import":`filters`}),o(p,{"function-name":`filterStripHtml`}),o(m,{"arguments-text":e.argumentsText,"function-description":`filterStripHtml(value)`},null,8,[`arguments-text`]),o(h),o(g,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var w=m(S,[[`render`,C]]);export{w as default};