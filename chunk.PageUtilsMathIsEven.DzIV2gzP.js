import{z as t,_ as r,A as d}from"./bundle.index.DuvU2hzB.js";import{O as p,b as n,Q as l,aR as x,V as s}from"./chunk.vendor.CjhiT8UL.js";import"./chunk.vendor-lodash.DyQEPI1B.js";import{A as h,a as A}from"./chunk.AlohaExample.h4eopEkj.js";import{P as T,a as $,b as y}from"./chunk.PageFilterTest.DgsbP3QM.js";import"./chunk.translations-ar.CL71O9SG.js";import"./chunk.translations-de.DIN2Jpxb.js";import"./chunk.translations-en.CI9kEZeh.js";import"./chunk.translations-es.BBJvdG2l.js";import"./chunk.translations-fr.C2AjtHKq.js";import"./chunk.translations-hr.CkUFQqdC.js";import"./chunk.translations-it.CvHGMPAq.js";import"./chunk.translations-ru.B99zmNGE.js";import"./chunk.APageTabTitle.BT4KYCZ3.js";import"./chunk.AlohaHighlightjs.rF1jvLhM.js";function B(){return{codeJs:`isEven(2);
// ${t(2)}
isEven(0);
// ${t(0)}
isEven(246);
// ${t(246)}

isEven(-2);
// ${t(-2)}

isEven(1);
// ${t(1)}
isEven(3);
// ${t(3)}
isEven(353);
// ${t(353)}

isEven(-1);
// ${t(-1)}

isEven(2.5);
// ${t(2.5)}

isEven("Aloha");
// ${t("Aloha")}
isEven(null);
// ${t(null)}
isEven(undefined);
// ${t(void 0)}`}}const F={name:"PageUtilsMathIsOddExample",components:{AlohaExample:h},setup(){const{codeJs:e}=B();return{codeJs:e}}};function P(e,o,a,c,u,m){const i=n("aloha-example");return l(),p(i,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const I=r(F,[["render",P]]);function b(){return{argumentsText:[{value:"value",types:["Number"],text:"_PAGE_UTILS_MATH_IS_EVEN_ARGUMENTS_VALUE_"}]}}function M(){return{pageTitle:"isEven"}}const U=`import {
  describe,
  expect,
  it,
} from "@jest/globals";

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
`,R={name:"PageUtilsMathIsEven",components:{AlohaPage:A,ATranslation:d,PageFilterArguments:y,PageFilterImportFunction:$,PageFilterTest:T,PageUtilsMathIsEvenExample:I},setup(){const{pageTitle:e}=M(),{argumentsText:o}=b();return{argumentsText:o,pageTitle:e,test:U}}};function S(e,o,a,c,u,m){const i=n("a-translation"),_=n("page-filter-import-function"),v=n("page-filter-arguments"),E=n("page-utils-math-is-even-example"),g=n("page-filter-test"),f=n("aloha-page");return l(),p(f,{"page-title":e.pageTitle},{body:x(()=>[s(i,{tag:"p",html:"_PAGE_UTILS_MATH_IS_EVEN_DESCRIPTION_"}),s(_,{"function-name":"isEven","type-import":"utilsMath"}),s(v,{"arguments-text":e.argumentsText,"function-description":"isEven(value)"},null,8,["arguments-text"]),s(E),s(g,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const K=r(R,[["render",S]]);export{K as default};
