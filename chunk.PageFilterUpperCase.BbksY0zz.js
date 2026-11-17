import{t as e}from"./chunk.AlohaPage.CtPiWSGW.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.BlHeJFFg.js";import{t as i}from"./chunk.PageFilterImportCompositionApi.BBsl7sG2.js";import{t as a}from"./chunk.AlohaExample.Bs_TZ3nZ.js";import{$ as o,lt as s}from"./bundle.index.Dik8P8_q.js";import{Mt as c,Ot as l,Ut as u,Zt as d,qt as f}from"./chunk.vendor.BLRpG40B.js";import{t as p}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function m(){return{codeJs:`filterUpperCase("--foo-bar--");
// ${s(`--foo-bar--`)}

filterUpperCase("fooBar");
// ${s(`fooBar`)}

filterUpperCase("__foo_bar__");
// ${s(`__foo_bar__`)}`}}var h={name:`PageFilterUpperCaseExample`,components:{AlohaExample:a},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=f(`aloha-example`);return u(),l(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=p(h,[[`render`,g]]);function v(){return{argumentsText:[{value:`value`,types:[`String`],text:`_PAGE_FILTER_UPPER_CASE_ARGUMENTS_VALUE_`}]}}function y(){return{pageTitle:`filterUpperCase`}}var b=`import {
  describe,
  expect,
  it,
} from "vitest";

import filterUpperCase from "../filterUpperCase";

describe("filterUpperCase", () => {
  it("should convert a string to lowercase", () => {
    expect(filterUpperCase("--Foo-Bar--")).toBe("--FOO-BAR--");
    expect(filterUpperCase("fooBar")).toBe("FOOBAR");
    expect(filterUpperCase("__FOO_BAR__")).toBe("__FOO_BAR__");
  });

  it("should handle empty strings", () => {
    expect(filterUpperCase("")).toBe("");
  });

  it("should handle strings with no alphabetic characters", () => {
    expect(filterUpperCase("12345")).toBe("12345");
    expect(filterUpperCase("!@#$%")).toBe("!@#$%");
  });

  it("should handle mixed case strings", () => {
    expect(filterUpperCase("FoObAr")).toBe("FOOBAR");
    expect(filterUpperCase("HELLOworld")).toBe("HELLOWORLD");
  });

  it("should handle strings with spaces", () => {
    expect(filterUpperCase("Hello World")).toBe("HELLO WORLD");
    expect(filterUpperCase(" foo bar ")).toBe(" FOO BAR ");
  });

  it("should return the same string if already in uppercase", () => {
    expect(filterUpperCase("ALREADY UPPERCASE")).toBe("ALREADY UPPERCASE");
  });
});
`,x={name:`PageFilterUpperCase`,components:{AlohaPage:e,ATranslation:o,PageFilterArguments:n,PageFilterImportCompositionApi:i,PageFilterImportFunction:t,PageFilterTest:r,PageFilterUpperCaseExample:_},setup(){let{pageTitle:e}=y(),{argumentsText:t}=v();return{argumentsText:t,pageTitle:e,test:b}}};function S(e,t,n,r,i,a){let o=f(`a-translation`),s=f(`page-filter-import-function`),p=f(`page-filter-import-composition-api`),m=f(`page-filter-arguments`),h=f(`page-filter-upper-case-example`),g=f(`page-filter-test`),_=f(`aloha-page`);return u(),l(_,{"page-title":e.pageTitle},{body:d(()=>[c(o,{tag:`p`,html:`_PAGE_FILTER_UPPER_CASE_DESCRIPTION_`}),c(s,{"function-name":`filterUpperCase`,"type-import":`filters`}),c(p,{"function-name":`filterUpperCase`}),c(m,{"arguments-text":e.argumentsText,"function-description":`filterUpperCase(value)`},null,8,[`arguments-text`]),c(h),c(g,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var C=p(x,[[`render`,S]]);export{C as default};