import{t as e}from"./chunk.AlohaPage.CtPiWSGW.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.BlHeJFFg.js";import{t as i}from"./chunk.AlohaExample.Bs_TZ3nZ.js";import{$ as a,X as o}from"./bundle.index.Dik8P8_q.js";import{Mt as s,Ot as c,Ut as l,Zt as u,qt as d}from"./chunk.vendor.BLRpG40B.js";import{t as f}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function p(){return{codeJs:`isOdd(1);
// ${o(1)}
isOdd(3);
// ${o(3)}
isOdd(245);
// ${o(245)}

isOdd(-1);
// ${o(-1)}

isOdd(2);
// ${o(2)}
isOdd(0);
// ${o(0)}
isOdd(352);
// ${o(352)}

isOdd(-2);
// ${o(-2)}

isOdd(2.5);
// ${o(2.5)}

isOdd("Aloha");
// ${o(`Aloha`)}
isOdd(null);
// ${o(null)}
isOdd(undefined);
// ${o(void 0)}`}}var m={name:`PageUtilsMathIsOddExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=p();return{codeJs:e}}};function h(e,t,n,r,i,a){let o=d(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var g=f(m,[[`render`,h]]);function _(){return{argumentsText:[{value:`value`,types:[`Number`],text:`_PAGE_UTILS_MATH_IS_ODD_ARGUMENTS_VALUE_`}]}}function v(){return{pageTitle:`isOdd`}}var y=`import {
  describe,
  expect,
  it,
} from "vitest";

import {
  isOdd,
} from "../utilsMath";

describe("isOdd function", () => {
  it("Return true if given an odd number", () => {
    expect(isOdd(1)).toBeTruthy();
    expect(isOdd(5)).toBeTruthy();
    expect(isOdd(123454567)).toBeTruthy();
  });

  it("Return false if given an even number", () => {
    expect(isOdd(0)).toBeFalsy();
    expect(isOdd(2)).toBeFalsy();
    expect(isOdd(123456)).toBeFalsy();
  });

  it("Return false if given a non-integer", () => {
    expect(isOdd(2.5)).toBeFalsy();
    expect(isOdd("Aloha")).toBeFalsy();
    expect(isOdd(null)).toBeFalsy();
    expect(isOdd(undefined)).toBeFalsy();
    expect(isOdd({})).toBeFalsy();
    expect(isOdd([])).toBeFalsy();
  });

  it("Return true if given a negative odd number", () => {
    expect(isOdd(-1)).toBeTruthy();
    expect(isOdd(-345)).toBeTruthy();
  });

  it("Return false if given a negative even number", () => {
    expect(isOdd(-2)).toBeFalsy();
    expect(isOdd(-4)).toBeFalsy();
    expect(isOdd(-268)).toBeFalsy();
  });
});
`,b={name:`PageUtilsMathIsOdd`,components:{AlohaPage:e,ATranslation:a,PageFilterArguments:n,PageFilterImportFunction:t,PageFilterTest:r,PageUtilsMathIsOddExample:g},setup(){let{pageTitle:e}=v(),{argumentsText:t}=_();return{argumentsText:t,pageTitle:e,test:y}}};function x(e,t,n,r,i,a){let o=d(`a-translation`),f=d(`page-filter-import-function`),p=d(`page-filter-arguments`),m=d(`page-utils-math-is-odd-example`),h=d(`page-filter-test`),g=d(`aloha-page`);return l(),c(g,{"page-title":e.pageTitle},{body:u(()=>[s(o,{tag:`p`,html:`_PAGE_UTILS_MATH_IS_ODD_DESCRIPTION_`}),s(f,{"function-name":`isOdd`,"type-import":`utilsMath`}),s(p,{"arguments-text":e.argumentsText,"function-description":`isOdd(value)`},null,8,[`arguments-text`]),s(m),s(h,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var S=f(b,[[`render`,x]]);export{S as default};