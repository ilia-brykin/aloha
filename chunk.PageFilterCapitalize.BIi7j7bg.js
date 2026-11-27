import{t as e}from"./chunk.AlohaPage.CNwNARGV.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.BtENWl1q.js";import{t as i}from"./chunk.AlohaExample.NZuewB4M.js";import{Jt as a,mn as o,t as s}from"./bundle.index.DHnbMku0.js";import{Jt as c,Ut as l,mn as u,on as d,un as f}from"./chunk.vendor.Bjd2408Z.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.BTnH2nYd.js";function m(){return{codeJs:`filterCapitalize("foobar");
// ${a(`foobar`)}

filterCapitalize("FOOBAR");
// ${a(`FOOBAR`)}

filterCapitalize("fOoBaR");
// ${a(`fOoBaR`)}`}}var h={name:`PageFilterCapitalizeExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=f(`aloha-example`);return d(),l(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=s(h,[[`render`,g]]);function v(){return{argumentsText:[{value:`value`,types:[`String`],text:`_PAGE_FILTER_CAPITALIZE_ARGUMENTS_VALUE_`}]}}function y(){return{pageTitle:`filterCapitalize`}}var b=`import {
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
`,x={name:`PageFilterCapitalize`,components:{AlohaPage:e,ATranslation:o,PageFilterArguments:n,PageFilterCapitalizeExample:_,PageFilterImportCompositionApi:p,PageFilterImportFunction:t,PageFilterTest:r},setup(){let{pageTitle:e}=y(),{argumentsText:t}=v();return{argumentsText:t,pageTitle:e,test:b}}};function S(e,t,n,r,i,a){let o=f(`a-translation`),s=f(`page-filter-import-function`),p=f(`page-filter-import-composition-api`),m=f(`page-filter-arguments`),h=f(`page-filter-capitalize-example`),g=f(`page-filter-test`),_=f(`aloha-page`);return d(),l(_,{"page-title":e.pageTitle},{body:u(()=>[c(o,{tag:`p`,html:`_PAGE_FILTER_CAPITALIZE_DESCRIPTION_`}),c(s,{"function-name":`filterCapitalize`,"type-import":`filters`}),c(p,{"function-name":`filterCapitalize`}),c(m,{"arguments-text":e.argumentsText,"function-description":`filterCapitalize(value)`},null,8,[`arguments-text`]),c(h),c(g,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var C=s(x,[[`render`,S]]);export{C as default};