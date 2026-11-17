import{t as e}from"./chunk.AlohaPage.CtPiWSGW.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.BlHeJFFg.js";import{t as i}from"./chunk.AlohaExample.Bs_TZ3nZ.js";import{$ as a,St as o}from"./bundle.index.Dik8P8_q.js";import{Mt as s,Ot as c,Ut as l,Zt as u,qt as d}from"./chunk.vendor.BLRpG40B.js";import{t as f}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.BBsl7sG2.js";function m(){return{codeJs:`filterDefaultForEmpty(undefined, { emptyValue: "---" });
// ${o(void 0,{emptyValue:`---`})}

filterDefaultForEmpty(undefined, { emptyValue: "false" });
// ${o(void 0,{emptyValue:`false`})}`}}var h={name:`PageFilterDefaultForEmptyEmptyValue`,components:{AlohaExample:i},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=d(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`emptyValue`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=f(h,[[`render`,g]]);function v(){return{codeJs:`filterDefaultForEmpty(undefined);
// ${o(void 0)}

filterDefaultForEmpty(null);
// ${o(null)}

filterDefaultForEmpty("");
// ${o(``)}

filterDefaultForEmpty("aloha");
// ${o(`aloha`)}`}}var y={name:`PageFilterDefaultForEmptyExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=v();return{codeJs:e}}};function b(e,t,n,r,i,a){let o=d(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var x=f(y,[[`render`,b]]);function S(){return{argumentsText:[{value:`value`,types:[`Any`],text:`_PAGE_FILTER_DEFAULT_FOR_EMPTY_ARGUMENTS_VALUE_`},{value:`[emptyValue="-"]`,types:[`String`],text:`_PAGE_FILTER_DEFAULT_FOR_EMPTY_ARGUMENTS_EMPTY_VALUE_`}]}}function C(){return{pageTitle:`filterDefaultForEmpty`}}var w=`import {
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
`,T={name:`PageFilterDefaultForEmpty`,components:{AlohaPage:e,ATranslation:a,PageFilterArguments:n,PageFilterDefaultForEmptyEmptyValue:_,PageFilterDefaultForEmptyExample:x,PageFilterImportCompositionApi:p,PageFilterImportFunction:t,PageFilterTest:r},setup(){let{pageTitle:e}=C(),{argumentsText:t}=S();return{argumentsText:t,pageTitle:e,test:w}}};function E(e,t,n,r,i,a){let o=d(`a-translation`),f=d(`page-filter-import-function`),p=d(`page-filter-import-composition-api`),m=d(`page-filter-arguments`),h=d(`page-filter-default-for-empty-example`),g=d(`page-filter-default-for-empty-empty-value`),_=d(`page-filter-test`),v=d(`aloha-page`);return l(),c(v,{"page-title":e.pageTitle},{body:u(()=>[s(o,{tag:`p`,html:`_PAGE_FILTER_DEFAULT_FOR_EMPTY_DESCRIPTION_`}),s(f,{"function-name":`filterDefaultForEmpty`,"type-import":`filters`}),s(p,{"function-name":`filterDefaultForEmpty`}),s(m,{"arguments-text":e.argumentsText,"function-description":`filterDefaultForEmpty(value, { [emptyValue="-"] })`},null,8,[`arguments-text`]),s(h),s(g),s(_,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var D=f(T,[[`render`,E]]);export{D as default};