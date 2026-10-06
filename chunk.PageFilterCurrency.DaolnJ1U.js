import{Tt as e,Ut as t,kt as n,qt as r,zt as i}from"./chunk.vendor.CZPox1kV.js";import{St as a,Z as o,t as s}from"./bundle.index.BmSiyQNH.js";import{n as c,t as l}from"./chunk.AlohaExample.CD4LlhAz.js";import{n as u,r as d,t as f}from"./chunk.PageFilterTest.DKKVbW-u.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.BMcX_RFK.js";function m(){return{codeJs:`filterCurrency(1000222.55, { digitGrouping: false });
// ${a(1000222.55,{digitGrouping:!1})}

filterCurrency(1000222.55, { digitGrouping: true });
// ${a(1000222.55,{digitGrouping:!0})}`}}var h={name:`PageFilterCurrencyDigitGrouping`,components:{AlohaExample:l},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`digitGrouping`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=s(h,[[`render`,g]]);function v(){return{codeJs:`filterCurrency(2000, { digits: 0 });
// ${a(2e3,{digits:0})}

filterCurrency("25.53451", { digits: 4 });
// ${a(`25.53451`,{digits:4})}`}}var y={name:`PageFilterCurrencyDigits`,components:{AlohaExample:l},setup(){let{codeJs:e}=v();return{codeJs:e}}};function b(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`digits`,"is-code-visible-default":!0},null,8,[`code-js`])}var x=s(y,[[`render`,b]]);function S(){return{codeJs:`filterCurrency(123456);
// ${a(123456)}

filterCurrency("1000000.2345");
// ${a(`1000000.2345`)}

filterCurrency("aloha");
// ${a(`aloha`)}

filterCurrency(undefined);
// ${a(void 0)}`}}var C={name:`PageFilterCurrencyExample`,components:{AlohaExample:l},setup(){let{codeJs:e}=S();return{codeJs:e}}};function w(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var T=s(C,[[`render`,w]]);function E(){return{codeJs:`filterCurrency(2000, { suffix: "€" });
// ${a(2e3,{suffix:`€`})}

filterCurrency("25.5", { suffix: "%" });
// ${a(`25.5`,{suffix:`%`})}`}}var D={name:`PageFilterCurrencySuffix`,components:{AlohaExample:l},setup(){let{codeJs:e}=E();return{codeJs:e}}};function O(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`suffix`,"is-code-visible-default":!0},null,8,[`code-js`])}var k=s(D,[[`render`,O]]);function A(){return{argumentsText:[{value:`value`,types:[`Number`,`String`],text:`_PAGE_FILTER_CURRENCY_ARGUMENTS_VALUE_`},{value:`[suffix="€"]`,types:[`String`],text:`_PAGE_FILTER_CURRENCY_ARGUMENTS_SUFFIX_`},{value:`[digits=2]`,types:[`Number`],text:`_PAGE_FILTER_CURRENCY_ARGUMENTS_DIGITS_`},{value:`[digitGrouping=true]`,types:[`Boolean`],text:`_PAGE_FILTER_CURRENCY_ARGUMENTS_DIGIT_GROUPING_`}]}}function j(){return{pageTitle:`filterCurrency`}}var M=`import {
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
`,N={name:`PageFilterCurrency`,components:{AlohaPage:c,ATranslation:o,PageFilterArguments:d,PageFilterCurrencyDigitGrouping:_,PageFilterCurrencyDigits:x,PageFilterCurrencyExample:T,PageFilterCurrencySuffix:k,PageFilterImportCompositionApi:p,PageFilterImportFunction:u,PageFilterTest:f},setup(){let{pageTitle:e}=j(),{argumentsText:t}=A();return{argumentsText:t,pageTitle:e,test:M}}};function P(a,o,s,c,l,u){let d=t(`a-translation`),f=t(`page-filter-import-function`),p=t(`page-filter-import-composition-api`),m=t(`page-filter-arguments`),h=t(`page-filter-currency-example`),g=t(`page-filter-currency-suffix`),_=t(`page-filter-currency-digits`),v=t(`page-filter-currency-digit-grouping`),y=t(`page-filter-test`),b=t(`aloha-page`);return i(),e(b,{"page-title":a.pageTitle},{body:r(()=>[n(d,{tag:`p`,html:`_PAGE_FILTER_CURRENCY_DESCRIPTION_`}),n(f,{"function-name":`filterCurrency`,"type-import":`filters`}),n(p,{"function-name":`filterCurrency`}),n(m,{"arguments-text":a.argumentsText,"function-description":`filterCurrency(value, { [suffix="€"], [digits=2], [digitGrouping=true] })`},null,8,[`arguments-text`]),n(h),n(g),n(_),n(v),n(y,{test:a.test},null,8,[`test`])]),_:1},8,[`page-title`])}var F=s(N,[[`render`,P]]);export{F as default};