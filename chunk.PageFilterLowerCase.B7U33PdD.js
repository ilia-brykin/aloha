import{t as e}from"./chunk.AlohaPage.BSfHVC43.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.AYOenCaD.js";import{t as i}from"./chunk.PageFilterImportCompositionApi.Ds7D27Yo.js";import{t as a}from"./chunk.AlohaExample.VTWuqY0j.js";import{Nt as o,mn as s,t as c}from"./bundle.index.D-5bYXwk.js";import{Jt as l,Ut as u,mn as d,on as f,un as p}from"./chunk.vendor.DL09mhUf.js";function m(){return{codeJs:`filterLowerCase("--Foo-Bar--");
// ${o(`--Foo-Bar--`)}

filterLowerCase("fooBar");
// ${o(`fooBar`)}

filterLowerCase("__FOO_BAR__");
// ${o(`__FOO_BAR__`)}`}}var h={name:`PageFilterLowerCaseExample`,components:{AlohaExample:a},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=p(`aloha-example`);return f(),u(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=c(h,[[`render`,g]]);function v(){return{argumentsText:[{value:`value`,types:[`String`],text:`_PAGE_FILTER_LOWER_CASE_ARGUMENTS_VALUE_`}]}}function y(){return{pageTitle:`filterLowerCase`}}var b=`import {
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
`,x={name:`PageFilterLowerCase`,components:{AlohaPage:e,ATranslation:s,PageFilterArguments:n,PageFilterImportCompositionApi:i,PageFilterImportFunction:t,PageFilterLowerCaseExample:_,PageFilterTest:r},setup(){let{pageTitle:e}=y(),{argumentsText:t}=v();return{argumentsText:t,pageTitle:e,test:b}}};function S(e,t,n,r,i,a){let o=p(`a-translation`),s=p(`page-filter-import-function`),c=p(`page-filter-import-composition-api`),m=p(`page-filter-arguments`),h=p(`page-filter-lower-case-example`),g=p(`page-filter-test`),_=p(`aloha-page`);return f(),u(_,{"page-title":e.pageTitle},{body:d(()=>[l(o,{tag:`p`,html:`_PAGE_FILTER_LOWER_CASE_DESCRIPTION_`}),l(s,{"function-name":`filterLowerCase`,"type-import":`filters`}),l(c,{"function-name":`filterLowerCase`}),l(m,{"arguments-text":e.argumentsText,"function-description":`filterLowerCase(value)`},null,8,[`arguments-text`]),l(h),l(g,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var C=c(x,[[`render`,S]]);export{C as default};