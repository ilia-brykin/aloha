import{Tt as e,Ut as t,kt as n,qt as r,zt as i}from"./chunk.vendor.CZPox1kV.js";import{Y as a,Z as o,t as s}from"./bundle.index.BmSiyQNH.js";import{n as c,t as l}from"./chunk.AlohaExample.CD4LlhAz.js";import{n as u,r as d,t as f}from"./chunk.PageFilterTest.DKKVbW-u.js";function p(){return{codeJs:`isOdd(1);
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
// ${a(void 0)}`}}var m={name:`PageUtilsMathIsOddExample`,components:{AlohaExample:l},setup(){let{codeJs:e}=p();return{codeJs:e}}};function h(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var g=s(m,[[`render`,h]]);function _(){return{argumentsText:[{value:`value`,types:[`Number`],text:`_PAGE_UTILS_MATH_IS_ODD_ARGUMENTS_VALUE_`}]}}function v(){return{pageTitle:`isOdd`}}var y=`import {
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
`,b={name:`PageUtilsMathIsOdd`,components:{AlohaPage:c,ATranslation:o,PageFilterArguments:d,PageFilterImportFunction:u,PageFilterTest:f,PageUtilsMathIsOddExample:g},setup(){let{pageTitle:e}=v(),{argumentsText:t}=_();return{argumentsText:t,pageTitle:e,test:y}}};function x(a,o,s,c,l,u){let d=t(`a-translation`),f=t(`page-filter-import-function`),p=t(`page-filter-arguments`),m=t(`page-utils-math-is-odd-example`),h=t(`page-filter-test`),g=t(`aloha-page`);return i(),e(g,{"page-title":a.pageTitle},{body:r(()=>[n(d,{tag:`p`,html:`_PAGE_UTILS_MATH_IS_ODD_DESCRIPTION_`}),n(f,{"function-name":`isOdd`,"type-import":`utilsMath`}),n(p,{"arguments-text":a.argumentsText,"function-description":`isOdd(value)`},null,8,[`arguments-text`]),n(m),n(h,{test:a.test},null,8,[`test`])]),_:1},8,[`page-title`])}var S=s(b,[[`render`,x]]);export{S as default};