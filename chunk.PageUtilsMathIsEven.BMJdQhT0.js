import{Tt as e,Ut as t,kt as n,qt as r,zt as i}from"./chunk.vendor.CZPox1kV.js";import{J as a,Z as o,t as s}from"./bundle.index.BmSiyQNH.js";import{n as c,t as l}from"./chunk.AlohaExample.CD4LlhAz.js";import{n as u,r as d,t as f}from"./chunk.PageFilterTest.DKKVbW-u.js";function p(){return{codeJs:`isEven(2);
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
// ${a(void 0)}`}}var m={name:`PageUtilsMathIsOddExample`,components:{AlohaExample:l},setup(){let{codeJs:e}=p();return{codeJs:e}}};function h(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var g=s(m,[[`render`,h]]);function _(){return{argumentsText:[{value:`value`,types:[`Number`],text:`_PAGE_UTILS_MATH_IS_EVEN_ARGUMENTS_VALUE_`}]}}function v(){return{pageTitle:`isEven`}}var y=`import {
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
`,b={name:`PageUtilsMathIsEven`,components:{AlohaPage:c,ATranslation:o,PageFilterArguments:d,PageFilterImportFunction:u,PageFilterTest:f,PageUtilsMathIsEvenExample:g},setup(){let{pageTitle:e}=v(),{argumentsText:t}=_();return{argumentsText:t,pageTitle:e,test:y}}};function x(a,o,s,c,l,u){let d=t(`a-translation`),f=t(`page-filter-import-function`),p=t(`page-filter-arguments`),m=t(`page-utils-math-is-even-example`),h=t(`page-filter-test`),g=t(`aloha-page`);return i(),e(g,{"page-title":a.pageTitle},{body:r(()=>[n(d,{tag:`p`,html:`_PAGE_UTILS_MATH_IS_EVEN_DESCRIPTION_`}),n(f,{"function-name":`isEven`,"type-import":`utilsMath`}),n(p,{"arguments-text":a.argumentsText,"function-description":`isEven(value)`},null,8,[`arguments-text`]),n(m),n(h,{test:a.test},null,8,[`test`])]),_:1},8,[`page-title`])}var S=s(b,[[`render`,x]]);export{S as default};