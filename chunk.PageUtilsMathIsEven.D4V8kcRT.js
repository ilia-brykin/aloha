import{A as d,a as x}from"./chunk.AlohaExample.B_2bvYKv.js";import{P as h,a as A,b as T}from"./chunk.PageFilterTest.TMGN3ffD.js";import{C as t,_ as r,A as $}from"./bundle.index.CWJbIJ4K.js";import{U as p,e as n,V as l,aS as y,Z as s}from"./chunk.vendor.w-kCrpQl.js";import"./chunk.vendor-lodash.GmlDDh1v.js";import"./chunk.APageTabTitle.COHJDAnG.js";import"./chunk.AlohaHighlightjs.Cjego80K.js";import"./chunk.translations-ar.C8xAF5pd.js";import"./chunk.translations-de.eUvDf8xn.js";import"./chunk.translations-en.DEpj9U8S.js";import"./chunk.translations-es.BUvs_K_5.js";import"./chunk.translations-fr.Qi6uRa8b.js";import"./chunk.translations-hr.hUcxziT-.js";import"./chunk.translations-it.DFfE6hGj.js";import"./chunk.translations-ru.CS-1tvJT.js";function B(){return{codeJs:`isEven(2);
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
// ${t(void 0)}`}}const F={name:"PageUtilsMathIsOddExample",components:{AlohaExample:d},setup(){const{codeJs:e}=B();return{codeJs:e}}};function P(e,o,a,c,u,m){const i=n("aloha-example");return l(),p(i,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const I=r(F,[["render",P]]);function b(){return{argumentsText:[{value:"value",types:["Number"],text:"_PAGE_UTILS_MATH_IS_EVEN_ARGUMENTS_VALUE_"}]}}function U(){return{pageTitle:"isEven"}}const M=`import {
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
`,S={name:"PageUtilsMathIsEven",components:{AlohaPage:x,ATranslation:$,PageFilterArguments:T,PageFilterImportFunction:A,PageFilterTest:h,PageUtilsMathIsEvenExample:I},setup(){const{pageTitle:e}=U(),{argumentsText:o}=b();return{argumentsText:o,pageTitle:e,test:M}}};function R(e,o,a,c,u,m){const i=n("a-translation"),_=n("page-filter-import-function"),v=n("page-filter-arguments"),E=n("page-utils-math-is-even-example"),g=n("page-filter-test"),f=n("aloha-page");return l(),p(f,{"page-title":e.pageTitle},{body:y(()=>[s(i,{tag:"p",html:"_PAGE_UTILS_MATH_IS_EVEN_DESCRIPTION_"}),s(_,{"function-name":"isEven","type-import":"utilsMath"}),s(v,{"arguments-text":e.argumentsText,"function-description":"isEven(value)"},null,8,["arguments-text"]),s(E),s(g,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const K=r(S,[["render",R]]);export{K as default};
