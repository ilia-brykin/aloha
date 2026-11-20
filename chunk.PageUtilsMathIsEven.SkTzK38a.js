import{t as e}from"./chunk.AlohaPage.BX4p4AoC.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.Byh0zWnC.js";import{t as i}from"./chunk.AlohaExample.Dv0nVKNW.js";import{et as a,it as o}from"./bundle.index.TygFUoMz.js";import{Bt as s,It as c,Zt as l,an as u,tn as d}from"./chunk.vendor.C763F6L5.js";import{t as f}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function p(){return{codeJs:`isEven(2);
// ${a(2)}
isEven(0);
// ${a(0)}
isEven(246);
// ${a(246)}

isEven(-2);
// ${a(-2)}

isEven(1);
// ${a(1)}
isEven(3);
// ${a(3)}
isEven(353);
// ${a(353)}

isEven(-1);
// ${a(-1)}

isEven(2.5);
// ${a(2.5)}

isEven("Aloha");
// ${a(`Aloha`)}
isEven(null);
// ${a(null)}
isEven(undefined);
// ${a(void 0)}`}}var m={name:`PageUtilsMathIsOddExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=p();return{codeJs:e}}};function h(e,t,n,r,i,a){let o=d(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var g=f(m,[[`render`,h]]);function _(){return{argumentsText:[{value:`value`,types:[`Number`],text:`_PAGE_UTILS_MATH_IS_EVEN_ARGUMENTS_VALUE_`}]}}function v(){return{pageTitle:`isEven`}}var y=`import {
  describe,
  expect,
  it,
} from "vitest";

import {
  isEven,
} from "../utilsMath";

describe("isEven function", () => {
  it("Return true if given an even number", () => {
    expect(isEven(0)).toBeTruthy();
    expect(isEven(2)).toBeTruthy();
    expect(isEven(123454568)).toBeTruthy();
  });

  it("Return false if given an odd number", () => {
    expect(isEven(1)).toBeFalsy();
    expect(isEven(3)).toBeFalsy();
    expect(isEven(123457)).toBeFalsy();
  });

  it("Return false if given a non-integer", () => {
    expect(isEven(2.5)).toBeFalsy();
    expect(isEven("Aloha")).toBeFalsy();
    expect(isEven(null)).toBeFalsy();
    expect(isEven(undefined)).toBeFalsy();
    expect(isEven({})).toBeFalsy();
    expect(isEven([])).toBeFalsy();
  });

  it("Return true if given a negative even number", () => {
    expect(isEven(-2)).toBeTruthy();
    expect(isEven(-346)).toBeTruthy();
  });

  it("Return false if given a negative odd number", () => {
    expect(isEven(-1)).toBeFalsy();
    expect(isEven(-3)).toBeFalsy();
    expect(isEven(-267)).toBeFalsy();
  });
});
`,b={name:`PageUtilsMathIsEven`,components:{AlohaPage:e,ATranslation:o,PageFilterArguments:n,PageFilterImportFunction:t,PageFilterTest:r,PageUtilsMathIsEvenExample:g},setup(){let{pageTitle:e}=v(),{argumentsText:t}=_();return{argumentsText:t,pageTitle:e,test:y}}};function x(e,t,n,r,i,a){let o=d(`a-translation`),f=d(`page-filter-import-function`),p=d(`page-filter-arguments`),m=d(`page-utils-math-is-even-example`),h=d(`page-filter-test`),g=d(`aloha-page`);return l(),c(g,{"page-title":e.pageTitle},{body:u(()=>[s(o,{tag:`p`,html:`_PAGE_UTILS_MATH_IS_EVEN_DESCRIPTION_`}),s(f,{"function-name":`isEven`,"type-import":`utilsMath`}),s(p,{"arguments-text":e.argumentsText,"function-description":`isEven(value)`},null,8,[`arguments-text`]),s(m),s(h,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var S=f(b,[[`render`,x]]);export{S as default};