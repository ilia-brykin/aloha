import{A as d,a as x}from"./chunk.AlohaExample.D19CN2wh.js";import{_ as r,A as h}from"./bundle.index.Cv6dkyGa.js";import{P as A,a as T,b as $}from"./chunk.PageFilterTest.BYjYPUYw.js";import{i as t}from"./chunk.utilsMath.1mfWsA3R.js";import{m as n,K as l,J as p,aK as y,P as s}from"./chunk.vendor.DQz1Isc4.js";import"./chunk.vendor-lodash.Cgq9oNCy.js";import"./chunk.vendor-tinymce.cPIiul0H.js";function B(){return{codeJs:`isEven(2);
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
// ${t(void 0)}`}}const F={name:"PageUtilsMathIsOddExample",components:{AlohaExample:d},setup(){const{codeJs:e}=B();return{codeJs:e}}};function P(e,a,i,c,u,m){const o=n("aloha-example");return p(),l(o,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const I=r(F,[["render",P]]);function b(){return{argumentsText:[{value:"value",types:["Number"],text:"_PAGE_UTILS_MATH_IS_EVEN_ARGUMENTS_VALUE_"}]}}function M(){return{pageTitle:"isEven"}}const U=`import {
  isEven,
} from "../utilsMath";

describe("isEven function", () => {
  test("Return true if given an even number", () => {
    expect(isEven(0)).toBeTruthy();
    expect(isEven(2)).toBeTruthy();
    expect(isEven(123454568)).toBeTruthy();
  });

  test("Return false if given an odd number", () => {
    expect(isEven(1)).toBeFalsy();
    expect(isEven(3)).toBeFalsy();
    expect(isEven(123457)).toBeFalsy();
  });

  test("Return false if given a non-integer", () => {
    expect(isEven(2.5)).toBeFalsy();
    expect(isEven("Aloha")).toBeFalsy();
    expect(isEven(null)).toBeFalsy();
    expect(isEven(undefined)).toBeFalsy();
    expect(isEven({})).toBeFalsy();
    expect(isEven([])).toBeFalsy();
  });

  test("Return true if given a negative even number", () => {
    expect(isEven(-2)).toBeTruthy();
    expect(isEven(-346)).toBeTruthy();
  });

  test("Return false if given a negative odd number", () => {
    expect(isEven(-1)).toBeFalsy();
    expect(isEven(-3)).toBeFalsy();
    expect(isEven(-267)).toBeFalsy();
  });
});
`,S={name:"PageUtilsMathIsEven",components:{AlohaPage:x,ATranslation:h,PageFilterArguments:A,PageFilterImportFunction:T,PageFilterTest:$,PageUtilsMathIsEvenExample:I},setup(){const{pageTitle:e}=M(),{argumentsText:a}=b();return{argumentsText:a,pageTitle:e,test:U}}};function R(e,a,i,c,u,m){const o=n("a-translation"),_=n("page-filter-import-function"),v=n("page-filter-arguments"),E=n("page-utils-math-is-even-example"),g=n("page-filter-test"),f=n("aloha-page");return p(),l(f,{"page-title":e.pageTitle},{body:y(()=>[s(o,{tag:"p",html:"_PAGE_UTILS_MATH_IS_EVEN_DESCRIPTION_"}),s(_,{"function-name":"isEven","type-import":"utilsMath"}),s(v,{"arguments-text":e.argumentsText,"function-description":"isEven(value)"},null,8,["arguments-text"]),s(E),s(g,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const k=r(S,[["render",R]]);export{k as default};
