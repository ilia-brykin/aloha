import{t as e}from"./chunk.AlohaPage.CqjE0MZc.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.DQulATkA.js";import{t as i}from"./chunk.AlohaExample.BkAbsrja.js";import{$ as a,qt as o}from"./bundle.index.DrnKDfVL.js";import{$t as s,It as c,Vt as l,rn as u,sn as d}from"./chunk.vendor.BvryzG0o.js";import{t as f}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function p(){return{codeJs:`isOdd(1);
// ${a(1)}
isOdd(3);
// ${a(3)}
isOdd(245);
// ${a(245)}

isOdd(-1);
// ${a(-1)}

isOdd(2);
// ${a(2)}
isOdd(0);
// ${a(0)}
isOdd(352);
// ${a(352)}

isOdd(-2);
// ${a(-2)}

isOdd(2.5);
// ${a(2.5)}

isOdd("Aloha");
// ${a(`Aloha`)}
isOdd(null);
// ${a(null)}
isOdd(undefined);
// ${a(void 0)}`}}var m={name:`PageUtilsMathIsOddExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=p();return{codeJs:e}}};function h(e,t,n,r,i,a){let o=u(`aloha-example`);return s(),c(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var g=f(m,[[`render`,h]]);function _(){return{argumentsText:[{value:`value`,types:[`Number`],text:`_PAGE_UTILS_MATH_IS_ODD_ARGUMENTS_VALUE_`}]}}function v(){return{pageTitle:`isOdd`}}var y=`import {
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
`,b={name:`PageUtilsMathIsOdd`,components:{AlohaPage:e,ATranslation:o,PageFilterArguments:n,PageFilterImportFunction:t,PageFilterTest:r,PageUtilsMathIsOddExample:g},setup(){let{pageTitle:e}=v(),{argumentsText:t}=_();return{argumentsText:t,pageTitle:e,test:y}}};function x(e,t,n,r,i,a){let o=u(`a-translation`),f=u(`page-filter-import-function`),p=u(`page-filter-arguments`),m=u(`page-utils-math-is-odd-example`),h=u(`page-filter-test`),g=u(`aloha-page`);return s(),c(g,{"page-title":e.pageTitle},{body:d(()=>[l(o,{tag:`p`,html:`_PAGE_UTILS_MATH_IS_ODD_DESCRIPTION_`}),l(f,{"function-name":`isOdd`,"type-import":`utilsMath`}),l(p,{"arguments-text":e.argumentsText,"function-description":`isOdd(value)`},null,8,[`arguments-text`]),l(m),l(h,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var S=f(b,[[`render`,x]]);export{S as default};