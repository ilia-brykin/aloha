import{Tt as e,Ut as t,kt as n,qt as r,zt as i}from"./chunk.vendor.CZPox1kV.js";import{Z as a,t as o,wt as s}from"./bundle.index.CLtYDDlb.js";import{n as c,t as l}from"./chunk.AlohaExample.BFgfeYtr.js";import{n as u,r as d,t as f}from"./chunk.PageFilterTest.DEb_j_8g.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.D-8n-B7g.js";function m(){return{codeJs:`filterCapitalize("foobar");
// ${s(`foobar`)}

filterCapitalize("FOOBAR");
// ${s(`FOOBAR`)}

filterCapitalize("fOoBaR");
// ${s(`fOoBaR`)}`}}var h={name:`PageFilterCapitalizeExample`,components:{AlohaExample:l},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=o(h,[[`render`,g]]);function v(){return{argumentsText:[{value:`value`,types:[`String`],text:`_PAGE_FILTER_CAPITALIZE_ARGUMENTS_VALUE_`}]}}function y(){return{pageTitle:`filterCapitalize`}}var b=`import {
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
`,x={name:`PageFilterCapitalize`,components:{AlohaPage:c,ATranslation:a,PageFilterArguments:d,PageFilterCapitalizeExample:_,PageFilterImportCompositionApi:p,PageFilterImportFunction:u,PageFilterTest:f},setup(){let{pageTitle:e}=y(),{argumentsText:t}=v();return{argumentsText:t,pageTitle:e,test:b}}};function S(a,o,s,c,l,u){let d=t(`a-translation`),f=t(`page-filter-import-function`),p=t(`page-filter-import-composition-api`),m=t(`page-filter-arguments`),h=t(`page-filter-capitalize-example`),g=t(`page-filter-test`),_=t(`aloha-page`);return i(),e(_,{"page-title":a.pageTitle},{body:r(()=>[n(d,{tag:`p`,html:`_PAGE_FILTER_CAPITALIZE_DESCRIPTION_`}),n(f,{"function-name":`filterCapitalize`,"type-import":`filters`}),n(p,{"function-name":`filterCapitalize`}),n(m,{"arguments-text":a.argumentsText,"function-description":`filterCapitalize(value)`},null,8,[`arguments-text`]),n(h),n(g,{test:a.test},null,8,[`test`])]),_:1},8,[`page-title`])}var C=o(x,[[`render`,S]]);export{C as default};