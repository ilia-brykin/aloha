import{t as e}from"./chunk.AlohaPage.IS3NRfGI.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.BiQNU7rf.js";import{t as i}from"./chunk.AlohaExample.CDuUdjpI.js";import{mn as a,rt as o,t as s}from"./bundle.index.DikcaTJ9.js";import{Ht as c,an as l,ln as u,pn as d,qt as f}from"./chunk.vendor.SEynj6EJ.js";function p(){return{codeJs:`isEven(2);
// ${o(2)}
isEven(0);
// ${o(0)}
isEven(246);
// ${o(246)}

isEven(-2);
// ${o(-2)}

isEven(1);
// ${o(1)}
isEven(3);
// ${o(3)}
isEven(353);
// ${o(353)}

isEven(-1);
// ${o(-1)}

isEven(2.5);
// ${o(2.5)}

isEven("Aloha");
// ${o(`Aloha`)}
isEven(null);
// ${o(null)}
isEven(undefined);
// ${o(void 0)}`}}var m={name:`PageUtilsMathIsOddExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=p();return{codeJs:e}}};function h(e,t,n,r,i,a){let o=u(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var g=s(m,[[`render`,h]]);function _(){return{argumentsText:[{value:`value`,types:[`Number`],text:`_PAGE_UTILS_MATH_IS_EVEN_ARGUMENTS_VALUE_`}]}}function v(){return{pageTitle:`isEven`}}var y=`import {
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
`,b={name:`PageUtilsMathIsEven`,components:{AlohaPage:e,ATranslation:a,PageFilterArguments:n,PageFilterImportFunction:t,PageFilterTest:r,PageUtilsMathIsEvenExample:g},setup(){let{pageTitle:e}=v(),{argumentsText:t}=_();return{argumentsText:t,pageTitle:e,test:y}}};function x(e,t,n,r,i,a){let o=u(`a-translation`),s=u(`page-filter-import-function`),p=u(`page-filter-arguments`),m=u(`page-utils-math-is-even-example`),h=u(`page-filter-test`),g=u(`aloha-page`);return l(),c(g,{"page-title":e.pageTitle},{body:d(()=>[f(o,{tag:`p`,html:`_PAGE_UTILS_MATH_IS_EVEN_DESCRIPTION_`}),f(s,{"function-name":`isEven`,"type-import":`utilsMath`}),f(p,{"arguments-text":e.argumentsText,"function-description":`isEven(value)`},null,8,[`arguments-text`]),f(m),f(h,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var S=s(b,[[`render`,x]]);export{S as default};