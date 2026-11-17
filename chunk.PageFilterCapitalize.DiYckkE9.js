import{t as e}from"./chunk.AlohaPage.CtPiWSGW.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.BlHeJFFg.js";import{t as i}from"./chunk.AlohaExample.Bs_TZ3nZ.js";import{$ as a,Et as o}from"./bundle.index.Dik8P8_q.js";import{Mt as s,Ot as c,Ut as l,Zt as u,qt as d}from"./chunk.vendor.BLRpG40B.js";import{t as f}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.BBsl7sG2.js";function m(){return{codeJs:`filterCapitalize("foobar");
// ${o(`foobar`)}

filterCapitalize("FOOBAR");
// ${o(`FOOBAR`)}

filterCapitalize("fOoBaR");
// ${o(`fOoBaR`)}`}}var h={name:`PageFilterCapitalizeExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=d(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=f(h,[[`render`,g]]);function v(){return{argumentsText:[{value:`value`,types:[`String`],text:`_PAGE_FILTER_CAPITALIZE_ARGUMENTS_VALUE_`}]}}function y(){return{pageTitle:`filterCapitalize`}}var b=`import {
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
`,x={name:`PageFilterCapitalize`,components:{AlohaPage:e,ATranslation:a,PageFilterArguments:n,PageFilterCapitalizeExample:_,PageFilterImportCompositionApi:p,PageFilterImportFunction:t,PageFilterTest:r},setup(){let{pageTitle:e}=y(),{argumentsText:t}=v();return{argumentsText:t,pageTitle:e,test:b}}};function S(e,t,n,r,i,a){let o=d(`a-translation`),f=d(`page-filter-import-function`),p=d(`page-filter-import-composition-api`),m=d(`page-filter-arguments`),h=d(`page-filter-capitalize-example`),g=d(`page-filter-test`),_=d(`aloha-page`);return l(),c(_,{"page-title":e.pageTitle},{body:u(()=>[s(o,{tag:`p`,html:`_PAGE_FILTER_CAPITALIZE_DESCRIPTION_`}),s(f,{"function-name":`filterCapitalize`,"type-import":`filters`}),s(p,{"function-name":`filterCapitalize`}),s(m,{"arguments-text":e.argumentsText,"function-description":`filterCapitalize(value)`},null,8,[`arguments-text`]),s(h),s(g,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var C=f(x,[[`render`,S]]);export{C as default};