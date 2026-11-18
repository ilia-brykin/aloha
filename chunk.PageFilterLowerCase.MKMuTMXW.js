import{t as e}from"./chunk.AlohaPage.sulZ3BAz.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.HIbnCuB_.js";import{t as i}from"./chunk.PageFilterImportCompositionApi.DRj5dFQL.js";import{t as a}from"./chunk.AlohaExample.Dh7-vA8e.js";import{et as o,mt as s}from"./bundle.index.Csp1_sOL.js";import{Ft as c,Xt as l,en as u,in as d,zt as f}from"./chunk.vendor.Cx127fe1.js";import{t as p}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function m(){return{codeJs:`filterLowerCase("--Foo-Bar--");
// ${s(`--Foo-Bar--`)}

filterLowerCase("fooBar");
// ${s(`fooBar`)}

filterLowerCase("__FOO_BAR__");
// ${s(`__FOO_BAR__`)}`}}var h={name:`PageFilterLowerCaseExample`,components:{AlohaExample:a},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=u(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=p(h,[[`render`,g]]);function v(){return{argumentsText:[{value:`value`,types:[`String`],text:`_PAGE_FILTER_LOWER_CASE_ARGUMENTS_VALUE_`}]}}function y(){return{pageTitle:`filterLowerCase`}}var b=`import {
  describe,
  expect,
  it,
} from "vitest";

import filterLowerCase from "../filterLowerCase";

describe("filterLowerCase", () => {
  it("should convert a string to lowercase", () => {
    expect(filterLowerCase("--Foo-Bar--")).toBe("--foo-bar--");
    expect(filterLowerCase("fooBar")).toBe("foobar");
    expect(filterLowerCase("__FOO_BAR__")).toBe("__foo_bar__");
  });

  it("should handle empty strings", () => {
    expect(filterLowerCase("")).toBe("");
  });

  it("should handle strings with no alphabetic characters", () => {
    expect(filterLowerCase("12345")).toBe("12345");
    expect(filterLowerCase("!@#$%")).toBe("!@#$%");
  });

  it("should handle mixed case strings", () => {
    expect(filterLowerCase("FoObAr")).toBe("foobar");
    expect(filterLowerCase("HELLOworld")).toBe("helloworld");
  });

  it("should handle strings with spaces", () => {
    expect(filterLowerCase("Hello World")).toBe("hello world");
    expect(filterLowerCase(" foo bar ")).toBe(" foo bar ");
  });

  it("should return the same string if already in lowercase", () => {
    expect(filterLowerCase("already lowercase")).toBe("already lowercase");
  });
});
`,x={name:`PageFilterLowerCase`,components:{AlohaPage:e,ATranslation:o,PageFilterArguments:n,PageFilterImportCompositionApi:i,PageFilterImportFunction:t,PageFilterLowerCaseExample:_,PageFilterTest:r},setup(){let{pageTitle:e}=y(),{argumentsText:t}=v();return{argumentsText:t,pageTitle:e,test:b}}};function S(e,t,n,r,i,a){let o=u(`a-translation`),s=u(`page-filter-import-function`),p=u(`page-filter-import-composition-api`),m=u(`page-filter-arguments`),h=u(`page-filter-lower-case-example`),g=u(`page-filter-test`),_=u(`aloha-page`);return l(),c(_,{"page-title":e.pageTitle},{body:d(()=>[f(o,{tag:`p`,html:`_PAGE_FILTER_LOWER_CASE_DESCRIPTION_`}),f(s,{"function-name":`filterLowerCase`,"type-import":`filters`}),f(p,{"function-name":`filterLowerCase`}),f(m,{"arguments-text":e.argumentsText,"function-description":`filterLowerCase(value)`},null,8,[`arguments-text`]),f(h),f(g,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var C=p(x,[[`render`,S]]);export{C as default};