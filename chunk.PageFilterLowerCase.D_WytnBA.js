import{t as e}from"./chunk.AlohaPage.IS3NRfGI.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.BiQNU7rf.js";import{t as i}from"./chunk.PageFilterImportCompositionApi.r8Qpa9Lw.js";import{t as a}from"./chunk.AlohaExample.CDuUdjpI.js";import{Nt as o,mn as s,t as c}from"./bundle.index.DikcaTJ9.js";import{Ht as l,an as u,ln as d,pn as f,qt as p}from"./chunk.vendor.SEynj6EJ.js";function m(){return{codeJs:`filterLowerCase("--Foo-Bar--");
// ${o(`--Foo-Bar--`)}

filterLowerCase("fooBar");
// ${o(`fooBar`)}

filterLowerCase("__FOO_BAR__");
// ${o(`__FOO_BAR__`)}`}}var h={name:`PageFilterLowerCaseExample`,components:{AlohaExample:a},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=d(`aloha-example`);return u(),l(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=c(h,[[`render`,g]]);function v(){return{argumentsText:[{value:`value`,types:[`String`],text:`_PAGE_FILTER_LOWER_CASE_ARGUMENTS_VALUE_`}]}}function y(){return{pageTitle:`filterLowerCase`}}var b=`import {
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
`,x={name:`PageFilterLowerCase`,components:{AlohaPage:e,ATranslation:s,PageFilterArguments:n,PageFilterImportCompositionApi:i,PageFilterImportFunction:t,PageFilterLowerCaseExample:_,PageFilterTest:r},setup(){let{pageTitle:e}=y(),{argumentsText:t}=v();return{argumentsText:t,pageTitle:e,test:b}}};function S(e,t,n,r,i,a){let o=d(`a-translation`),s=d(`page-filter-import-function`),c=d(`page-filter-import-composition-api`),m=d(`page-filter-arguments`),h=d(`page-filter-lower-case-example`),g=d(`page-filter-test`),_=d(`aloha-page`);return u(),l(_,{"page-title":e.pageTitle},{body:f(()=>[p(o,{tag:`p`,html:`_PAGE_FILTER_LOWER_CASE_DESCRIPTION_`}),p(s,{"function-name":`filterLowerCase`,"type-import":`filters`}),p(c,{"function-name":`filterLowerCase`}),p(m,{"arguments-text":e.argumentsText,"function-description":`filterLowerCase(value)`},null,8,[`arguments-text`]),p(h),p(g,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var C=c(x,[[`render`,S]]);export{C as default};