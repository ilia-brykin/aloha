import{Tt as e,Ut as t,kt as n,qt as r,zt as i}from"./chunk.vendor.CZPox1kV.js";import{Z as a,bt as o,t as s}from"./bundle.index.CLtYDDlb.js";import{n as c,t as l}from"./chunk.AlohaExample.BFgfeYtr.js";import{n as u,r as d,t as f}from"./chunk.PageFilterTest.DEb_j_8g.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.D-8n-B7g.js";function m(){return{codeJs:`filterDefaultForEmpty(undefined, { emptyValue: "---" });
// ${o(void 0,{emptyValue:`---`})}

filterDefaultForEmpty(undefined, { emptyValue: "false" });
// ${o(void 0,{emptyValue:`false`})}`}}var h={name:`PageFilterDefaultForEmptyEmptyValue`,components:{AlohaExample:l},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`emptyValue`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=s(h,[[`render`,g]]);function v(){return{codeJs:`filterDefaultForEmpty(undefined);
// ${o(void 0)}

filterDefaultForEmpty(null);
// ${o(null)}

filterDefaultForEmpty("");
// ${o(``)}

filterDefaultForEmpty("aloha");
// ${o(`aloha`)}`}}var y={name:`PageFilterDefaultForEmptyExample`,components:{AlohaExample:l},setup(){let{codeJs:e}=v();return{codeJs:e}}};function b(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var x=s(y,[[`render`,b]]);function S(){return{argumentsText:[{value:`value`,types:[`Any`],text:`_PAGE_FILTER_DEFAULT_FOR_EMPTY_ARGUMENTS_VALUE_`},{value:`[emptyValue="-"]`,types:[`String`],text:`_PAGE_FILTER_DEFAULT_FOR_EMPTY_ARGUMENTS_EMPTY_VALUE_`}]}}function C(){return{pageTitle:`filterDefaultForEmpty`}}var w=`import {
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
`,T={name:`PageFilterDefaultForEmpty`,components:{AlohaPage:c,ATranslation:a,PageFilterArguments:d,PageFilterDefaultForEmptyEmptyValue:_,PageFilterDefaultForEmptyExample:x,PageFilterImportCompositionApi:p,PageFilterImportFunction:u,PageFilterTest:f},setup(){let{pageTitle:e}=C(),{argumentsText:t}=S();return{argumentsText:t,pageTitle:e,test:w}}};function E(a,o,s,c,l,u){let d=t(`a-translation`),f=t(`page-filter-import-function`),p=t(`page-filter-import-composition-api`),m=t(`page-filter-arguments`),h=t(`page-filter-default-for-empty-example`),g=t(`page-filter-default-for-empty-empty-value`),_=t(`page-filter-test`),v=t(`aloha-page`);return i(),e(v,{"page-title":a.pageTitle},{body:r(()=>[n(d,{tag:`p`,html:`_PAGE_FILTER_DEFAULT_FOR_EMPTY_DESCRIPTION_`}),n(f,{"function-name":`filterDefaultForEmpty`,"type-import":`filters`}),n(p,{"function-name":`filterDefaultForEmpty`}),n(m,{"arguments-text":a.argumentsText,"function-description":`filterDefaultForEmpty(value, { [emptyValue="-"] })`},null,8,[`arguments-text`]),n(h),n(g),n(_,{test:a.test},null,8,[`test`])]),_:1},8,[`page-title`])}var D=s(T,[[`render`,E]]);export{D as default};