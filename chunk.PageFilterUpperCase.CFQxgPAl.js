import{Tt as e,Ut as t,kt as n,qt as r,zt as i}from"./chunk.vendor.CZPox1kV.js";import{Z as a,st as o,t as s}from"./bundle.index.BmSiyQNH.js";import{n as c,t as l}from"./chunk.AlohaExample.CD4LlhAz.js";import{n as u,r as d,t as f}from"./chunk.PageFilterTest.DKKVbW-u.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.BMcX_RFK.js";function m(){return{codeJs:`filterUpperCase("--foo-bar--");
// ${o(`--foo-bar--`)}

filterUpperCase("fooBar");
// ${o(`fooBar`)}

filterUpperCase("__foo_bar__");
// ${o(`__foo_bar__`)}`}}var h={name:`PageFilterUpperCaseExample`,components:{AlohaExample:l},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=s(h,[[`render`,g]]);function v(){return{argumentsText:[{value:`value`,types:[`String`],text:`_PAGE_FILTER_UPPER_CASE_ARGUMENTS_VALUE_`}]}}function y(){return{pageTitle:`filterUpperCase`}}var b=`import {
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
`,x={name:`PageFilterUpperCase`,components:{AlohaPage:c,ATranslation:a,PageFilterArguments:d,PageFilterImportCompositionApi:p,PageFilterImportFunction:u,PageFilterTest:f,PageFilterUpperCaseExample:_},setup(){let{pageTitle:e}=y(),{argumentsText:t}=v();return{argumentsText:t,pageTitle:e,test:b}}};function S(a,o,s,c,l,u){let d=t(`a-translation`),f=t(`page-filter-import-function`),p=t(`page-filter-import-composition-api`),m=t(`page-filter-arguments`),h=t(`page-filter-upper-case-example`),g=t(`page-filter-test`),_=t(`aloha-page`);return i(),e(_,{"page-title":a.pageTitle},{body:r(()=>[n(d,{tag:`p`,html:`_PAGE_FILTER_UPPER_CASE_DESCRIPTION_`}),n(f,{"function-name":`filterUpperCase`,"type-import":`filters`}),n(p,{"function-name":`filterUpperCase`}),n(m,{"arguments-text":a.argumentsText,"function-description":`filterUpperCase(value)`},null,8,[`arguments-text`]),n(h),n(g,{test:a.test},null,8,[`test`])]),_:1},8,[`page-title`])}var C=s(x,[[`render`,S]]);export{C as default};