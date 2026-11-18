import{t as e}from"./chunk.AlohaPage.sulZ3BAz.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.HIbnCuB_.js";import{t as i}from"./chunk.AlohaExample.Dh7-vA8e.js";import{Ct as a,et as o}from"./bundle.index.Csp1_sOL.js";import{Ft as s,Xt as c,en as l,in as u,zt as d}from"./chunk.vendor.Cx127fe1.js";import{t as f}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.DRj5dFQL.js";function m(){return{codeJs:`filterDefaultForEmpty(undefined, { emptyValue: "---" });
// ${a(void 0,{emptyValue:`---`})}

filterDefaultForEmpty(undefined, { emptyValue: "false" });
// ${a(void 0,{emptyValue:`false`})}`}}var h={name:`PageFilterDefaultForEmptyEmptyValue`,components:{AlohaExample:i},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=l(`aloha-example`);return c(),s(o,{"code-js":e.codeJs,header:`emptyValue`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=f(h,[[`render`,g]]);function v(){return{codeJs:`filterDefaultForEmpty(undefined);
// ${a(void 0)}

filterDefaultForEmpty(null);
// ${a(null)}

filterDefaultForEmpty("");
// ${a(``)}

filterDefaultForEmpty("aloha");
// ${a(`aloha`)}`}}var y={name:`PageFilterDefaultForEmptyExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=v();return{codeJs:e}}};function b(e,t,n,r,i,a){let o=l(`aloha-example`);return c(),s(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var x=f(y,[[`render`,b]]);function S(){return{argumentsText:[{value:`value`,types:[`Any`],text:`_PAGE_FILTER_DEFAULT_FOR_EMPTY_ARGUMENTS_VALUE_`},{value:`[emptyValue="-"]`,types:[`String`],text:`_PAGE_FILTER_DEFAULT_FOR_EMPTY_ARGUMENTS_EMPTY_VALUE_`}]}}function C(){return{pageTitle:`filterDefaultForEmpty`}}var w=`import {
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
`,T={name:`PageFilterDefaultForEmpty`,components:{AlohaPage:e,ATranslation:o,PageFilterArguments:n,PageFilterDefaultForEmptyEmptyValue:_,PageFilterDefaultForEmptyExample:x,PageFilterImportCompositionApi:p,PageFilterImportFunction:t,PageFilterTest:r},setup(){let{pageTitle:e}=C(),{argumentsText:t}=S();return{argumentsText:t,pageTitle:e,test:w}}};function E(e,t,n,r,i,a){let o=l(`a-translation`),f=l(`page-filter-import-function`),p=l(`page-filter-import-composition-api`),m=l(`page-filter-arguments`),h=l(`page-filter-default-for-empty-example`),g=l(`page-filter-default-for-empty-empty-value`),_=l(`page-filter-test`),v=l(`aloha-page`);return c(),s(v,{"page-title":e.pageTitle},{body:u(()=>[d(o,{tag:`p`,html:`_PAGE_FILTER_DEFAULT_FOR_EMPTY_DESCRIPTION_`}),d(f,{"function-name":`filterDefaultForEmpty`,"type-import":`filters`}),d(p,{"function-name":`filterDefaultForEmpty`}),d(m,{"arguments-text":e.argumentsText,"function-description":`filterDefaultForEmpty(value, { [emptyValue="-"] })`},null,8,[`arguments-text`]),d(h),d(g),d(_,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var D=f(T,[[`render`,E]]);export{D as default};