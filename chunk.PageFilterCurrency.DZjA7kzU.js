import{t as e}from"./chunk.AlohaPage.IS3NRfGI.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.BiQNU7rf.js";import{t as i}from"./chunk.AlohaExample.CDuUdjpI.js";import{Kt as a,mn as o,t as s}from"./bundle.index.DikcaTJ9.js";import{Ht as c,an as l,ln as u,pn as d,qt as f}from"./chunk.vendor.SEynj6EJ.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.r8Qpa9Lw.js";function m(){return{codeJs:`filterCurrency(1000222.55, { digitGrouping: false });
// ${a(1000222.55,{digitGrouping:!1})}

filterCurrency(1000222.55, { digitGrouping: true });
// ${a(1000222.55,{digitGrouping:!0})}`}}var h={name:`PageFilterCurrencyDigitGrouping`,components:{AlohaExample:i},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=u(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`digitGrouping`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=s(h,[[`render`,g]]);function v(){return{codeJs:`filterCurrency(2000, { digits: 0 });
// ${a(2e3,{digits:0})}

filterCurrency("25.53451", { digits: 4 });
// ${a(`25.53451`,{digits:4})}`}}var y={name:`PageFilterCurrencyDigits`,components:{AlohaExample:i},setup(){let{codeJs:e}=v();return{codeJs:e}}};function b(e,t,n,r,i,a){let o=u(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`digits`,"is-code-visible-default":!0},null,8,[`code-js`])}var x=s(y,[[`render`,b]]);function S(){return{codeJs:`filterCurrency(123456);
// ${a(123456)}

filterCurrency("1000000.2345");
// ${a(`1000000.2345`)}

filterCurrency("aloha");
// ${a(`aloha`)}

filterCurrency(undefined);
// ${a(void 0)}`}}var C={name:`PageFilterCurrencyExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=S();return{codeJs:e}}};function w(e,t,n,r,i,a){let o=u(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var T=s(C,[[`render`,w]]);function E(){return{codeJs:`filterCurrency(2000, { suffix: "€" });
// ${a(2e3,{suffix:`€`})}

filterCurrency("25.5", { suffix: "%" });
// ${a(`25.5`,{suffix:`%`})}`}}var D={name:`PageFilterCurrencySuffix`,components:{AlohaExample:i},setup(){let{codeJs:e}=E();return{codeJs:e}}};function O(e,t,n,r,i,a){let o=u(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`suffix`,"is-code-visible-default":!0},null,8,[`code-js`])}var k=s(D,[[`render`,O]]);function A(){return{argumentsText:[{value:`value`,types:[`Number`,`String`],text:`_PAGE_FILTER_CURRENCY_ARGUMENTS_VALUE_`},{value:`[suffix="€"]`,types:[`String`],text:`_PAGE_FILTER_CURRENCY_ARGUMENTS_SUFFIX_`},{value:`[digits=2]`,types:[`Number`],text:`_PAGE_FILTER_CURRENCY_ARGUMENTS_DIGITS_`},{value:`[digitGrouping=true]`,types:[`Boolean`],text:`_PAGE_FILTER_CURRENCY_ARGUMENTS_DIGIT_GROUPING_`}]}}function j(){return{pageTitle:`filterCurrency`}}var M=`import {
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
`,N={name:`PageFilterCurrency`,components:{AlohaPage:e,ATranslation:o,PageFilterArguments:n,PageFilterCurrencyDigitGrouping:_,PageFilterCurrencyDigits:x,PageFilterCurrencyExample:T,PageFilterCurrencySuffix:k,PageFilterImportCompositionApi:p,PageFilterImportFunction:t,PageFilterTest:r},setup(){let{pageTitle:e}=j(),{argumentsText:t}=A();return{argumentsText:t,pageTitle:e,test:M}}};function P(e,t,n,r,i,a){let o=u(`a-translation`),s=u(`page-filter-import-function`),p=u(`page-filter-import-composition-api`),m=u(`page-filter-arguments`),h=u(`page-filter-currency-example`),g=u(`page-filter-currency-suffix`),_=u(`page-filter-currency-digits`),v=u(`page-filter-currency-digit-grouping`),y=u(`page-filter-test`),b=u(`aloha-page`);return l(),c(b,{"page-title":e.pageTitle},{body:d(()=>[f(o,{tag:`p`,html:`_PAGE_FILTER_CURRENCY_DESCRIPTION_`}),f(s,{"function-name":`filterCurrency`,"type-import":`filters`}),f(p,{"function-name":`filterCurrency`}),f(m,{"arguments-text":e.argumentsText,"function-description":`filterCurrency(value, { [suffix="€"], [digits=2], [digitGrouping=true] })`},null,8,[`arguments-text`]),f(h),f(g),f(_),f(v),f(y,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var F=s(N,[[`render`,P]]);export{F as default};