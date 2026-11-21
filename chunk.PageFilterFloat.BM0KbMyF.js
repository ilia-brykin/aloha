import{t as e}from"./chunk.AlohaPage.DkILLbn5.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.ZGahdob1.js";import{t as i}from"./chunk.AlohaExample.BXW-VBsT.js";import{Ft as a,qt as o}from"./bundle.index.b2KYNVgN.js";import{$t as s,It as c,Vt as l,rn as u,sn as d}from"./chunk.vendor.BvryzG0o.js";import{t as f}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.CRE9j6zA.js";function m(){return{codeJs:`filterFloat(1000222.55, { digitGrouping: false });
// ${a(1000222.55,{digitGrouping:!1})}

filterFloat(1000222.55, { digitGrouping: true });
// ${a(1000222.55,{digitGrouping:!0})}`}}var h={name:`PageFilterFloatDigitGrouping`,components:{AlohaExample:i},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=u(`aloha-example`);return s(),c(o,{"code-js":e.codeJs,header:`digitGrouping`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=f(h,[[`render`,g]]);function v(){return{codeJs:`filterFloat(2000, { digits: 0 });
// ${a(2e3,{digits:0})}

filterFloat("25.53451", { digits: 4 });
// ${a(`25.53451`,{digits:4})}`}}var y={name:`PageFilterFloatDigits`,components:{AlohaExample:i},setup(){let{codeJs:e}=v();return{codeJs:e}}};function b(e,t,n,r,i,a){let o=u(`aloha-example`);return s(),c(o,{"code-js":e.codeJs,header:`digits`,"is-code-visible-default":!0},null,8,[`code-js`])}var x=f(y,[[`render`,b]]);function S(){return{codeJs:`filterFloat(123456);
// ${a(123456)}

filterFloat("1000000.2345");
// ${a(`1000000.2345`)}

filterFloat("aloha");
// ${a(`aloha`)}

filterFloat(undefined);
// ${a(void 0)}`}}var C={name:`PageFilterFloatExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=S();return{codeJs:e}}};function w(e,t,n,r,i,a){let o=u(`aloha-example`);return s(),c(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var T=f(C,[[`render`,w]]);function E(){return{codeJs:`filterFloat(2000, { suffix: "€" });
// ${a(2e3,{suffix:`€`})}

filterFloat("25.5", { suffix: "%" });
// ${a(`25.5`,{suffix:`%`})}`}}var D={name:`PageFilterFloatSuffix`,components:{AlohaExample:i},setup(){let{codeJs:e}=E();return{codeJs:e}}};function O(e,t,n,r,i,a){let o=u(`aloha-example`);return s(),c(o,{"code-js":e.codeJs,header:`suffix`,"is-code-visible-default":!0},null,8,[`code-js`])}var k=f(D,[[`render`,O]]);function A(){return{argumentsText:[{value:`value`,types:[`Number`,`String`],text:`_PAGE_FILTER_FLOAT_ARGUMENTS_VALUE_`},{value:`[suffix=""]`,types:[`String`],text:`_PAGE_FILTER_FLOAT_ARGUMENTS_SUFFIX_`},{value:`[digits=2]`,types:[`Number`],text:`_PAGE_FILTER_FLOAT_ARGUMENTS_DIGITS_`},{value:`[digitGrouping=true]`,types:[`Boolean`],text:`_PAGE_FILTER_FLOAT_ARGUMENTS_DIGIT_GROUPING_`}]}}function j(){return{pageTitle:`filterFloat`}}var M=`import {
  describe,
  expect,
  it,
} from "vitest";

import filterFloat from "../filterFloat";

describe("filterFloat", () => {
  it("without extra attributes", () => {
    expect(filterFloat(123456)).toBe("123.456,00");
    expect(filterFloat(1000)).toBe("1.000,00");
    expect(filterFloat(1000000)).toBe("1.000.000,00");
    expect(filterFloat(1000.12)).toBe("1.000,12");
    expect(filterFloat(0.12)).toBe("0,12");
    expect(filterFloat(0.1234)).toBe("0,12");
    expect(filterFloat(0)).toBe("0,00");
    expect(filterFloat(0.000)).toBe("0,00");
    expect(filterFloat(undefined)).toBe("");
    expect(filterFloat(null)).toBe("");
    expect(filterFloat("")).toBe("0,00");
    expect(filterFloat("1000.12")).toBe("1.000,12");
    expect(filterFloat("1.000.000,00")).toBe("1.000.000,00");
    expect(filterFloat("Aloha")).toBe("Aloha");
  });

  it("suffix", () => {
    expect(filterFloat(123456, { suffix: "%" })).toBe("123.456,00 %");
    expect(filterFloat(1000, { suffix: "€" })).toBe("1.000,00 €");
    expect(filterFloat("1000", { suffix: "%" })).toBe("1.000,00 %");
    expect(filterFloat("Aloha", { suffix: "%" })).toBe("Aloha");
    expect(filterFloat(undefined, { suffix: "%" })).toBe("");
    expect(filterFloat(null, { suffix: "%" })).toBe("");
    expect(filterFloat("", { suffix: "%" })).toBe("0,00 %");
    expect(filterFloat("1.000.000,00", { suffix: "%" })).toBe("1.000.000,00 %");
  });

  it("digits", () => {
    expect(filterFloat(123456, { digits: 2 })).toBe("123.456,00");
    expect(filterFloat(123456, { digits: 4 })).toBe("123.456,0000");
    expect(filterFloat(123.12345, { digits: 3 })).toBe("123,123");
    expect(filterFloat(123.12345, { digits: 1 })).toBe("123,1");
    expect(filterFloat(123.12345, { digits: 0 })).toBe("123");
    expect(filterFloat(1000.12345, { digits: 0 })).toBe("1.000");
    expect(filterFloat("", { digits: 0 })).toBe("0");
    expect(filterFloat("Aloha", { digits: 0 })).toBe("Aloha");
    expect(filterFloat(undefined, { digits: 0 })).toBe("");
    expect(filterFloat(null, { digits: 0 })).toBe("");
    expect(filterFloat("1.000.000,00", { digits: 0 })).toBe("1.000.000");
  });

  it("digitGrouping", () => {
    expect(filterFloat(123456, { digitGrouping: true })).toBe("123.456,00");
    expect(filterFloat(123456, { digitGrouping: false })).toBe("123456,00");
    expect(filterFloat(1000000, { digitGrouping: true })).toBe("1.000.000,00");
    expect(filterFloat(1000000, { digitGrouping: false })).toBe("1000000,00");
  });

  it("negative value", () => {
    expect(filterFloat(-123456)).toBe("-123.456,00");
    expect(filterFloat(-1000000)).toBe("-1.000.000,00");
    expect(filterFloat(-1)).toBe("-1,00");
    expect(filterFloat(-0)).toBe("0,00");
    expect(filterFloat("-1.000.000,00")).toBe("-1.000.000,00");
    expect(filterFloat("-1.000.000,01234")).toBe("-1.000.000,01");
  });

  it("complex example", () => {
    expect(filterFloat(1000000, { suffix: "%", digits: 0, digitGrouping: false })).toBe("1000000 %");
    expect(filterFloat(0.123, { suffix: "%", digits: 0, digitGrouping: false })).toBe("0 %");
    expect(filterFloat(0.123, { suffix: "%", digits: 4, digitGrouping: false })).toBe("0,1230 %");
  });
});

`,N={name:`PageFilterFloat`,components:{AlohaPage:e,ATranslation:o,PageFilterArguments:n,PageFilterFloatDigitGrouping:_,PageFilterFloatDigits:x,PageFilterFloatExample:T,PageFilterFloatSuffix:k,PageFilterImportCompositionApi:p,PageFilterImportFunction:t,PageFilterTest:r},setup(){let{pageTitle:e}=j(),{argumentsText:t}=A();return{argumentsText:t,pageTitle:e,test:M}}};function P(e,t,n,r,i,a){let o=u(`a-translation`),f=u(`page-filter-import-function`),p=u(`page-filter-import-composition-api`),m=u(`page-filter-arguments`),h=u(`page-filter-float-example`),g=u(`page-filter-float-suffix`),_=u(`page-filter-float-digits`),v=u(`page-filter-float-digit-grouping`),y=u(`page-filter-test`),b=u(`aloha-page`);return s(),c(b,{"page-title":e.pageTitle},{body:d(()=>[l(o,{tag:`p`,html:`_PAGE_FILTER_FLOAT_DESCRIPTION_`}),l(f,{"function-name":`filterFloat`,"type-import":`filters`}),l(p,{"function-name":`filterFloat`}),l(m,{"arguments-text":e.argumentsText,"function-description":`filterFloat(value, { [suffix=""], [digits=2], [digitGrouping=true] })`},null,8,[`arguments-text`]),l(h),l(g),l(_),l(v),l(y,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var F=f(N,[[`render`,P]]);export{F as default};