import{t as e}from"./chunk.AlohaPage.IS3NRfGI.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.BiQNU7rf.js";import{t as i}from"./chunk.AlohaExample.CDuUdjpI.js";import{Ut as a,mn as o,t as s}from"./bundle.index.DikcaTJ9.js";import{Ht as c,an as l,ln as u,pn as d,qt as f}from"./chunk.vendor.SEynj6EJ.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.r8Qpa9Lw.js";function m(){return{codeJs:`filterDefaultForEmpty(undefined, { emptyValue: "---" });
// ${a(void 0,{emptyValue:`---`})}

filterDefaultForEmpty(undefined, { emptyValue: "false" });
// ${a(void 0,{emptyValue:`false`})}`}}var h={name:`PageFilterDefaultForEmptyEmptyValue`,components:{AlohaExample:i},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=u(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`emptyValue`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=s(h,[[`render`,g]]);function v(){return{codeJs:`filterDefaultForEmpty(undefined);
// ${a(void 0)}

filterDefaultForEmpty(null);
// ${a(null)}

filterDefaultForEmpty("");
// ${a(``)}

filterDefaultForEmpty("aloha");
// ${a(`aloha`)}`}}var y={name:`PageFilterDefaultForEmptyExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=v();return{codeJs:e}}};function b(e,t,n,r,i,a){let o=u(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var x=s(y,[[`render`,b]]);function S(){return{argumentsText:[{value:`value`,types:[`Any`],text:`_PAGE_FILTER_DEFAULT_FOR_EMPTY_ARGUMENTS_VALUE_`},{value:`[emptyValue="-"]`,types:[`String`],text:`_PAGE_FILTER_DEFAULT_FOR_EMPTY_ARGUMENTS_EMPTY_VALUE_`}]}}function C(){return{pageTitle:`filterDefaultForEmpty`}}var w=`import {
  describe,
  expect,
  it,
} from "vitest";

import filterDefaultForEmpty from "../filterDefaultForEmpty";

describe("filterDefaultForEmpty Function", () => {
  it("should return 'emptyValue', when the input is null", () => {
    expect(filterDefaultForEmpty(null)).toBe("-");
    expect(filterDefaultForEmpty(null, { emptyValue: "default" })).toBe("default");
  });

  it("should return 'emptyValue', when the input is an empty string", () => {
    expect(filterDefaultForEmpty("")).toBe("-");
    expect(filterDefaultForEmpty("", { emptyValue: "default" })).toBe("default");
  });

  it("should return the inputted value, when it is not null or an empty string", () => {
    expect(filterDefaultForEmpty("Non-empty value")).toBe("Non-empty value");
    expect(filterDefaultForEmpty(123)).toBe(123);
  });
});
`,T={name:`PageFilterDefaultForEmpty`,components:{AlohaPage:e,ATranslation:o,PageFilterArguments:n,PageFilterDefaultForEmptyEmptyValue:_,PageFilterDefaultForEmptyExample:x,PageFilterImportCompositionApi:p,PageFilterImportFunction:t,PageFilterTest:r},setup(){let{pageTitle:e}=C(),{argumentsText:t}=S();return{argumentsText:t,pageTitle:e,test:w}}};function E(e,t,n,r,i,a){let o=u(`a-translation`),s=u(`page-filter-import-function`),p=u(`page-filter-import-composition-api`),m=u(`page-filter-arguments`),h=u(`page-filter-default-for-empty-example`),g=u(`page-filter-default-for-empty-empty-value`),_=u(`page-filter-test`),v=u(`aloha-page`);return l(),c(v,{"page-title":e.pageTitle},{body:d(()=>[f(o,{tag:`p`,html:`_PAGE_FILTER_DEFAULT_FOR_EMPTY_DESCRIPTION_`}),f(s,{"function-name":`filterDefaultForEmpty`,"type-import":`filters`}),f(p,{"function-name":`filterDefaultForEmpty`}),f(m,{"arguments-text":e.argumentsText,"function-description":`filterDefaultForEmpty(value, { [emptyValue="-"] })`},null,8,[`arguments-text`]),f(h),f(g),f(_,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var D=s(T,[[`render`,E]]);export{D as default};