import{t as e}from"./chunk.AlohaPage.BvUvrvQ4.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.C-ArH7Yp.js";import{t as i}from"./chunk.AlohaExample.Bx3NX4bX.js";import{Jt as a,mn as o,t as s}from"./bundle.index.LlT2KVEy.js";import{Ht as c,an as l,ln as u,pn as d,qt as f}from"./chunk.vendor.SEynj6EJ.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.D4dHtW7t.js";function m(){return{codeJs:`filterCapitalize("foobar");
// ${a(`foobar`)}

filterCapitalize("FOOBAR");
// ${a(`FOOBAR`)}

filterCapitalize("fOoBaR");
// ${a(`fOoBaR`)}`}}var h={name:`PageFilterCapitalizeExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=u(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=s(h,[[`render`,g]]);function v(){return{argumentsText:[{value:`value`,types:[`String`],text:`_PAGE_FILTER_CAPITALIZE_ARGUMENTS_VALUE_`}]}}function y(){return{pageTitle:`filterCapitalize`}}var b=`import {
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
`,x={name:`PageFilterCapitalize`,components:{AlohaPage:e,ATranslation:o,PageFilterArguments:n,PageFilterCapitalizeExample:_,PageFilterImportCompositionApi:p,PageFilterImportFunction:t,PageFilterTest:r},setup(){let{pageTitle:e}=y(),{argumentsText:t}=v();return{argumentsText:t,pageTitle:e,test:b}}};function S(e,t,n,r,i,a){let o=u(`a-translation`),s=u(`page-filter-import-function`),p=u(`page-filter-import-composition-api`),m=u(`page-filter-arguments`),h=u(`page-filter-capitalize-example`),g=u(`page-filter-test`),_=u(`aloha-page`);return l(),c(_,{"page-title":e.pageTitle},{body:d(()=>[f(o,{tag:`p`,html:`_PAGE_FILTER_CAPITALIZE_DESCRIPTION_`}),f(s,{"function-name":`filterCapitalize`,"type-import":`filters`}),f(p,{"function-name":`filterCapitalize`}),f(m,{"arguments-text":e.argumentsText,"function-description":`filterCapitalize(value)`},null,8,[`arguments-text`]),f(h),f(g,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var C=s(x,[[`render`,S]]);export{C as default};