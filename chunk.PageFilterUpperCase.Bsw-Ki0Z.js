import{t as e}from"./chunk.AlohaPage.D8jsTY5m.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.C7NbM6-8.js";import{t as i}from"./chunk.PageFilterImportCompositionApi.iDZd2wO_.js";import{t as a}from"./chunk.AlohaExample.B-5omd3W.js";import{Ct as o,mn as s,t as c}from"./bundle.index.Cwpafk10.js";import{Jt as l,Ut as u,mn as d,on as f,un as p}from"./chunk.vendor.Bjd2408Z.js";function m(){return{codeJs:`filterUpperCase("--foo-bar--");
// ${o(`--foo-bar--`)}

filterUpperCase("fooBar");
// ${o(`fooBar`)}

filterUpperCase("__foo_bar__");
// ${o(`__foo_bar__`)}`}}var h={name:`PageFilterUpperCaseExample`,components:{AlohaExample:a},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=p(`aloha-example`);return f(),u(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=c(h,[[`render`,g]]);function v(){return{argumentsText:[{value:`value`,types:[`String`],text:`_PAGE_FILTER_UPPER_CASE_ARGUMENTS_VALUE_`}]}}function y(){return{pageTitle:`filterUpperCase`}}var b=`import {
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
`,x={name:`PageFilterUpperCase`,components:{AlohaPage:e,ATranslation:s,PageFilterArguments:n,PageFilterImportCompositionApi:i,PageFilterImportFunction:t,PageFilterTest:r,PageFilterUpperCaseExample:_},setup(){let{pageTitle:e}=y(),{argumentsText:t}=v();return{argumentsText:t,pageTitle:e,test:b}}};function S(e,t,n,r,i,a){let o=p(`a-translation`),s=p(`page-filter-import-function`),c=p(`page-filter-import-composition-api`),m=p(`page-filter-arguments`),h=p(`page-filter-upper-case-example`),g=p(`page-filter-test`),_=p(`aloha-page`);return f(),u(_,{"page-title":e.pageTitle},{body:d(()=>[l(o,{tag:`p`,html:`_PAGE_FILTER_UPPER_CASE_DESCRIPTION_`}),l(s,{"function-name":`filterUpperCase`,"type-import":`filters`}),l(c,{"function-name":`filterUpperCase`}),l(m,{"arguments-text":e.argumentsText,"function-description":`filterUpperCase(value)`},null,8,[`arguments-text`]),l(h),l(g,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var C=c(x,[[`render`,S]]);export{C as default};