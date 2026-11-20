import{t as e}from"./chunk.AlohaPage.C2Vrb1gB.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.BaO93RBI.js";import{t as i}from"./chunk.AlohaExample.v2GP0Oep.js";import{it as a,zt as o}from"./bundle.index.CwzuX9ei.js";import{It as s,Qt as c,Vt as l,nn as u,on as d}from"./chunk.vendor.CTxSDDRk.js";import{t as f}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.Dd09kgXu.js";function m(){return{codeJs:`filterCapitalize("foobar");
// ${o(`foobar`)}

filterCapitalize("FOOBAR");
// ${o(`FOOBAR`)}

filterCapitalize("fOoBaR");
// ${o(`fOoBaR`)}`}}var h={name:`PageFilterCapitalizeExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=u(`aloha-example`);return c(),s(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=f(h,[[`render`,g]]);function v(){return{argumentsText:[{value:`value`,types:[`String`],text:`_PAGE_FILTER_CAPITALIZE_ARGUMENTS_VALUE_`}]}}function y(){return{pageTitle:`filterCapitalize`}}var b=`import {
  describe,
  expect,
  it,
} from "vitest";

import filterCapitalize from "../filterCapitalize";

describe("filterCapitalize", () => {
  it("should capitalize a lowercase string", () => {
    expect(filterCapitalize("foobar")).toBe("Foobar");
  });

  it("should capitalize an uppercase string", () => {
    expect(filterCapitalize("FOOBAR")).toBe("Foobar");
  });

  it("should capitalize a mixed case string", () => {
    expect(filterCapitalize("fOoBaR")).toBe("Foobar");
  });

  it("should handle an empty string", () => {
    expect(filterCapitalize("")).toBe("");
  });

  it("should handle a string with one character", () => {
    expect(filterCapitalize("a")).toBe("A");
    expect(filterCapitalize("A")).toBe("A");
  });

  it("should handle strings with spaces", () => {
    expect(filterCapitalize(" foo bar ")).toBe(" foo bar ");
  });

  it("should not change already capitalized strings", () => {
    expect(filterCapitalize("Foobar")).toBe("Foobar");
  });
});
`,x={name:`PageFilterCapitalize`,components:{AlohaPage:e,ATranslation:a,PageFilterArguments:n,PageFilterCapitalizeExample:_,PageFilterImportCompositionApi:p,PageFilterImportFunction:t,PageFilterTest:r},setup(){let{pageTitle:e}=y(),{argumentsText:t}=v();return{argumentsText:t,pageTitle:e,test:b}}};function S(e,t,n,r,i,a){let o=u(`a-translation`),f=u(`page-filter-import-function`),p=u(`page-filter-import-composition-api`),m=u(`page-filter-arguments`),h=u(`page-filter-capitalize-example`),g=u(`page-filter-test`),_=u(`aloha-page`);return c(),s(_,{"page-title":e.pageTitle},{body:d(()=>[l(o,{tag:`p`,html:`_PAGE_FILTER_CAPITALIZE_DESCRIPTION_`}),l(f,{"function-name":`filterCapitalize`,"type-import":`filters`}),l(p,{"function-name":`filterCapitalize`}),l(m,{"arguments-text":e.argumentsText,"function-description":`filterCapitalize(value)`},null,8,[`arguments-text`]),l(h),l(g,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var C=f(x,[[`render`,S]]);export{C as default};