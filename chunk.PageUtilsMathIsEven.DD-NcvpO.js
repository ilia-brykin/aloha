import{A as d,a as x}from"./chunk.AlohaExample.NCiIPZbM.js";import{z as t,_ as r,A as h}from"./bundle.index.D4AK5eRg.js";import{P as A,a as T,b as $}from"./chunk.PageFilterTest.1s2x-WEW.js";import{k as n,J as p,H as l,aQ as y,O as s}from"./chunk.vendor.HBCvOOnN.js";import"./chunk.vendor-lodash.D68MLJHd.js";import"./chunk.APageTabTitle.CFBJ-Chz.js";import"./chunk.AlohaHighlightjs.BxXkXuRz.js";import"./chunk.translations-ar.C3eLbeil.js";import"./chunk.translations-de.C6N0sXCK.js";import"./chunk.translations-en.Dgf923YU.js";import"./chunk.translations-es.CPNf7mQ8.js";import"./chunk.translations-fr.BZulpadc.js";import"./chunk.translations-hr.BSaBoXG2.js";import"./chunk.translations-it.DW-WFwc3.js";import"./chunk.translations-ru.C7QF7UyA.js";function B(){return{codeJs:`isEven(2);
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
// ${t(void 0)}`}}const F={name:"PageUtilsMathIsOddExample",components:{AlohaExample:d},setup(){const{codeJs:e}=B();return{codeJs:e}}};function P(e,o,i,c,u,m){const a=n("aloha-example");return l(),p(a,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const I=r(F,[["render",P]]);function b(){return{argumentsText:[{value:"value",types:["Number"],text:"_PAGE_UTILS_MATH_IS_EVEN_ARGUMENTS_VALUE_"}]}}function M(){return{pageTitle:"isEven"}}const U=`import {
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
`,S={name:"PageUtilsMathIsEven",components:{AlohaPage:x,ATranslation:h,PageFilterArguments:A,PageFilterImportFunction:T,PageFilterTest:$,PageUtilsMathIsEvenExample:I},setup(){const{pageTitle:e}=M(),{argumentsText:o}=b();return{argumentsText:o,pageTitle:e,test:U}}};function R(e,o,i,c,u,m){const a=n("a-translation"),_=n("page-filter-import-function"),v=n("page-filter-arguments"),E=n("page-utils-math-is-even-example"),g=n("page-filter-test"),f=n("aloha-page");return l(),p(f,{"page-title":e.pageTitle},{body:y(()=>[s(a,{tag:"p",html:"_PAGE_UTILS_MATH_IS_EVEN_DESCRIPTION_"}),s(_,{"function-name":"isEven","type-import":"utilsMath"}),s(v,{"arguments-text":e.argumentsText,"function-description":"isEven(value)"},null,8,["arguments-text"]),s(E),s(g,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const K=r(S,[["render",R]]);export{K as default};
