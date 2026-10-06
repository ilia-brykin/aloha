import{Tt as e,Ut as t,kt as n,qt as r,zt as i}from"./chunk.vendor.CZPox1kV.js";import{Ct as a,Z as o,t as s}from"./bundle.index.BmSiyQNH.js";import{n as c,t as l}from"./chunk.AlohaExample.CD4LlhAz.js";import{n as u,r as d,t as f}from"./chunk.PageFilterTest.DKKVbW-u.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.BMcX_RFK.js";function m(){return{codeJs:`filterFloat(1000222.55, { digitGrouping: false });
// ${a(1000222.55,{digitGrouping:!1})}

filterFloat(1000222.55, { digitGrouping: true });
// ${a(1000222.55,{digitGrouping:!0})}`}}var h={name:`PageFilterFloatDigitGrouping`,components:{AlohaExample:l},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`digitGrouping`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=s(h,[[`render`,g]]);function v(){return{codeJs:`filterFloat(2000, { digits: 0 });
// ${a(2e3,{digits:0})}

filterFloat("25.53451", { digits: 4 });
// ${a(`25.53451`,{digits:4})}`}}var y={name:`PageFilterFloatDigits`,components:{AlohaExample:l},setup(){let{codeJs:e}=v();return{codeJs:e}}};function b(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`digits`,"is-code-visible-default":!0},null,8,[`code-js`])}var x=s(y,[[`render`,b]]);function S(){return{codeJs:`filterFloat(123456);
// ${a(123456)}

filterFloat("1000000.2345");
// ${a(`1000000.2345`)}

filterFloat("aloha");
// ${a(`aloha`)}

filterFloat(undefined);
// ${a(void 0)}`}}var C={name:`PageFilterFloatExample`,components:{AlohaExample:l},setup(){let{codeJs:e}=S();return{codeJs:e}}};function w(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var T=s(C,[[`render`,w]]);function E(){return{codeJs:`filterFloat(2000, { suffix: "€" });
// ${a(2e3,{suffix:`€`})}

filterFloat("25.5", { suffix: "%" });
// ${a(`25.5`,{suffix:`%`})}`}}var D={name:`PageFilterFloatSuffix`,components:{AlohaExample:l},setup(){let{codeJs:e}=E();return{codeJs:e}}};function O(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`suffix`,"is-code-visible-default":!0},null,8,[`code-js`])}var k=s(D,[[`render`,O]]);function A(){return{argumentsText:[{value:`value`,types:[`Number`,`String`],text:`_PAGE_FILTER_FLOAT_ARGUMENTS_VALUE_`},{value:`[suffix=""]`,types:[`String`],text:`_PAGE_FILTER_FLOAT_ARGUMENTS_SUFFIX_`},{value:`[digits=2]`,types:[`Number`],text:`_PAGE_FILTER_FLOAT_ARGUMENTS_DIGITS_`},{value:`[digitGrouping=true]`,types:[`Boolean`],text:`_PAGE_FILTER_FLOAT_ARGUMENTS_DIGIT_GROUPING_`}]}}function j(){return{pageTitle:`filterFloat`}}var M=`import {
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

`,N={name:`PageFilterFloat`,components:{AlohaPage:c,ATranslation:o,PageFilterArguments:d,PageFilterFloatDigitGrouping:_,PageFilterFloatDigits:x,PageFilterFloatExample:T,PageFilterFloatSuffix:k,PageFilterImportCompositionApi:p,PageFilterImportFunction:u,PageFilterTest:f},setup(){let{pageTitle:e}=j(),{argumentsText:t}=A();return{argumentsText:t,pageTitle:e,test:M}}};function P(a,o,s,c,l,u){let d=t(`a-translation`),f=t(`page-filter-import-function`),p=t(`page-filter-import-composition-api`),m=t(`page-filter-arguments`),h=t(`page-filter-float-example`),g=t(`page-filter-float-suffix`),_=t(`page-filter-float-digits`),v=t(`page-filter-float-digit-grouping`),y=t(`page-filter-test`),b=t(`aloha-page`);return i(),e(b,{"page-title":a.pageTitle},{body:r(()=>[n(d,{tag:`p`,html:`_PAGE_FILTER_FLOAT_DESCRIPTION_`}),n(f,{"function-name":`filterFloat`,"type-import":`filters`}),n(p,{"function-name":`filterFloat`}),n(m,{"arguments-text":a.argumentsText,"function-description":`filterFloat(value, { [suffix=""], [digits=2], [digitGrouping=true] })`},null,8,[`arguments-text`]),n(h),n(g),n(_),n(v),n(y,{test:a.test},null,8,[`test`])]),_:1},8,[`page-title`])}var F=s(N,[[`render`,P]]);export{F as default};