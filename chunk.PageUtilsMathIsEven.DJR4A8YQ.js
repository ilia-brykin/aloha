import{t as e}from"./chunk.AlohaPage.CNwNARGV.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.BtENWl1q.js";import{t as i}from"./chunk.AlohaExample.NZuewB4M.js";import{mn as a,rt as o,t as s}from"./bundle.index.DHnbMku0.js";import{Jt as c,Ut as l,mn as u,on as d,un as f}from"./chunk.vendor.Bjd2408Z.js";function p(){return{codeJs:`isEven(2);
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
// ${o(void 0)}`}}var m={name:`PageUtilsMathIsOddExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=p();return{codeJs:e}}};function h(e,t,n,r,i,a){let o=f(`aloha-example`);return d(),l(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var g=s(m,[[`render`,h]]);function _(){return{argumentsText:[{value:`value`,types:[`Number`],text:`_PAGE_UTILS_MATH_IS_EVEN_ARGUMENTS_VALUE_`}]}}function v(){return{pageTitle:`isEven`}}var y=`import {
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
`,b={name:`PageUtilsMathIsEven`,components:{AlohaPage:e,ATranslation:a,PageFilterArguments:n,PageFilterImportFunction:t,PageFilterTest:r,PageUtilsMathIsEvenExample:g},setup(){let{pageTitle:e}=v(),{argumentsText:t}=_();return{argumentsText:t,pageTitle:e,test:y}}};function x(e,t,n,r,i,a){let o=f(`a-translation`),s=f(`page-filter-import-function`),p=f(`page-filter-arguments`),m=f(`page-utils-math-is-even-example`),h=f(`page-filter-test`),g=f(`aloha-page`);return d(),l(g,{"page-title":e.pageTitle},{body:u(()=>[c(o,{tag:`p`,html:`_PAGE_UTILS_MATH_IS_EVEN_DESCRIPTION_`}),c(s,{"function-name":`isEven`,"type-import":`utilsMath`}),c(p,{"arguments-text":e.argumentsText,"function-description":`isEven(value)`},null,8,[`arguments-text`]),c(m),c(h,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var S=s(b,[[`render`,x]]);export{S as default};