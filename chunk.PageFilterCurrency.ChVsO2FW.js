import{t as e}from"./chunk.AlohaPage.sulZ3BAz.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.HIbnCuB_.js";import{t as i}from"./chunk.AlohaExample.Dh7-vA8e.js";import{Tt as a,et as o}from"./bundle.index.Csp1_sOL.js";import{Ft as s,Xt as c,en as l,in as u,zt as d}from"./chunk.vendor.Cx127fe1.js";import{t as f}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.DRj5dFQL.js";function m(){return{codeJs:`filterCurrency(1000222.55, { digitGrouping: false });
// ${a(1000222.55,{digitGrouping:!1})}

filterCurrency(1000222.55, { digitGrouping: true });
// ${a(1000222.55,{digitGrouping:!0})}`}}var h={name:`PageFilterCurrencyDigitGrouping`,components:{AlohaExample:i},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=l(`aloha-example`);return c(),s(o,{"code-js":e.codeJs,header:`digitGrouping`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=f(h,[[`render`,g]]);function v(){return{codeJs:`filterCurrency(2000, { digits: 0 });
// ${a(2e3,{digits:0})}

filterCurrency("25.53451", { digits: 4 });
// ${a(`25.53451`,{digits:4})}`}}var y={name:`PageFilterCurrencyDigits`,components:{AlohaExample:i},setup(){let{codeJs:e}=v();return{codeJs:e}}};function b(e,t,n,r,i,a){let o=l(`aloha-example`);return c(),s(o,{"code-js":e.codeJs,header:`digits`,"is-code-visible-default":!0},null,8,[`code-js`])}var x=f(y,[[`render`,b]]);function S(){return{codeJs:`filterCurrency(123456);
// ${a(123456)}

filterCurrency("1000000.2345");
// ${a(`1000000.2345`)}

filterCurrency("aloha");
// ${a(`aloha`)}

filterCurrency(undefined);
// ${a(void 0)}`}}var C={name:`PageFilterCurrencyExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=S();return{codeJs:e}}};function w(e,t,n,r,i,a){let o=l(`aloha-example`);return c(),s(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var T=f(C,[[`render`,w]]);function E(){return{codeJs:`filterCurrency(2000, { suffix: "€" });
// ${a(2e3,{suffix:`€`})}

filterCurrency("25.5", { suffix: "%" });
// ${a(`25.5`,{suffix:`%`})}`}}var D={name:`PageFilterCurrencySuffix`,components:{AlohaExample:i},setup(){let{codeJs:e}=E();return{codeJs:e}}};function O(e,t,n,r,i,a){let o=l(`aloha-example`);return c(),s(o,{"code-js":e.codeJs,header:`suffix`,"is-code-visible-default":!0},null,8,[`code-js`])}var k=f(D,[[`render`,O]]);function A(){return{argumentsText:[{value:`value`,types:[`Number`,`String`],text:`_PAGE_FILTER_CURRENCY_ARGUMENTS_VALUE_`},{value:`[suffix="€"]`,types:[`String`],text:`_PAGE_FILTER_CURRENCY_ARGUMENTS_SUFFIX_`},{value:`[digits=2]`,types:[`Number`],text:`_PAGE_FILTER_CURRENCY_ARGUMENTS_DIGITS_`},{value:`[digitGrouping=true]`,types:[`Boolean`],text:`_PAGE_FILTER_CURRENCY_ARGUMENTS_DIGIT_GROUPING_`}]}}function j(){return{pageTitle:`filterCurrency`}}var M=`import {
  describe,
  expect,
  it,
} from "vitest";

import filterCurrency from "../filterCurrency";

describe("filterCurrency", () => {
  it("should properly format a given number with default parameters", () => {
    expect(filterCurrency(1234.5678)).toEqual("1.234,57 €");
  });

  it("should properly format a given number with custom parameters", () => {
    expect(filterCurrency(1234.5678, { suffix: "$", digits: 3, digitGrouping: false })).toEqual("1234,568 $");
  });

  it("should return undefined when a non-number value is passed", () => {
    expect(filterCurrency(null)).toEqual("");
  });
});
`,N={name:`PageFilterCurrency`,components:{AlohaPage:e,ATranslation:o,PageFilterArguments:n,PageFilterCurrencyDigitGrouping:_,PageFilterCurrencyDigits:x,PageFilterCurrencyExample:T,PageFilterCurrencySuffix:k,PageFilterImportCompositionApi:p,PageFilterImportFunction:t,PageFilterTest:r},setup(){let{pageTitle:e}=j(),{argumentsText:t}=A();return{argumentsText:t,pageTitle:e,test:M}}};function P(e,t,n,r,i,a){let o=l(`a-translation`),f=l(`page-filter-import-function`),p=l(`page-filter-import-composition-api`),m=l(`page-filter-arguments`),h=l(`page-filter-currency-example`),g=l(`page-filter-currency-suffix`),_=l(`page-filter-currency-digits`),v=l(`page-filter-currency-digit-grouping`),y=l(`page-filter-test`),b=l(`aloha-page`);return c(),s(b,{"page-title":e.pageTitle},{body:u(()=>[d(o,{tag:`p`,html:`_PAGE_FILTER_CURRENCY_DESCRIPTION_`}),d(f,{"function-name":`filterCurrency`,"type-import":`filters`}),d(p,{"function-name":`filterCurrency`}),d(m,{"arguments-text":e.argumentsText,"function-description":`filterCurrency(value, { [suffix="€"], [digits=2], [digitGrouping=true] })`},null,8,[`arguments-text`]),d(h),d(g),d(_),d(v),d(y,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var F=f(N,[[`render`,P]]);export{F as default};