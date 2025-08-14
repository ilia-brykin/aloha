import{A as x,a as h}from"./chunk.AlohaExample.BliScsiM.js";import{P as T,a as A,b as $}from"./chunk.PageFilterTest.l9zGjZZF.js";import{aN as t,_ as d,A as y}from"./bundle.index.rlyFjb7C.js";import{V as r,e as n,W as p,aT as B,_ as s}from"./chunk.vendor.Daji9SX9.js";import"./chunk.vendor-lodash.B3VVIBC-.js";import"./chunk.APageTabTitle.2aU46WhH.js";import"./chunk.AlohaHighlightjs.BMm9LXzJ.js";import"./chunk.translations-ar.BojwqMl_.js";import"./chunk.translations-de.Cs8AX5zd.js";import"./chunk.translations-en.B6SbFZD7.js";import"./chunk.translations-es.Bq5-ThmB.js";import"./chunk.translations-fr.CNUiPhMd.js";import"./chunk.translations-hr.BHL5VI6-.js";import"./chunk.translations-it.CT6ME8Ab.js";import"./chunk.translations-ru.-V16kngL.js";function F(){return{codeJs:`isOdd(1);
// ${t(1)}
isOdd(3);
// ${t(3)}
isOdd(245);
// ${t(245)}

isOdd(-1);
// ${t(-1)}

isOdd(2);
// ${t(2)}
isOdd(0);
// ${t(0)}
isOdd(352);
// ${t(352)}

isOdd(-2);
// ${t(-2)}

isOdd(2.5);
// ${t(2.5)}

isOdd("Aloha");
// ${t("Aloha")}
isOdd(null);
// ${t(null)}
isOdd(undefined);
// ${t(void 0)}`}}const P={name:"PageUtilsMathIsOddExample",components:{AlohaExample:x},setup(){const{codeJs:e}=F();return{codeJs:e}}};function I(e,o,i,l,c,u){const a=n("aloha-example");return p(),r(a,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const v=d(P,[["render",I]]);function b(){return{argumentsText:[{value:"value",types:["Number"],text:"_PAGE_UTILS_MATH_IS_ODD_ARGUMENTS_VALUE_"}]}}function E(){return{pageTitle:"isOdd"}}const M=`import {
  describe,
  expect,
  it,
} from "@jest/globals";

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
`,U={name:"PageUtilsMathIsOdd",components:{AlohaPage:h,ATranslation:y,PageFilterArguments:$,PageFilterImportFunction:A,PageFilterTest:T,PageUtilsMathIsOddExample:v},setup(){const{pageTitle:e}=E(),{argumentsText:o}=b();return{argumentsText:o,pageTitle:e,test:M}}};function S(e,o,i,l,c,u){const a=n("a-translation"),m=n("page-filter-import-function"),_=n("page-filter-arguments"),g=n("page-utils-math-is-odd-example"),O=n("page-filter-test"),f=n("aloha-page");return p(),r(f,{"page-title":e.pageTitle},{body:B(()=>[s(a,{tag:"p",html:"_PAGE_UTILS_MATH_IS_ODD_DESCRIPTION_"}),s(m,{"function-name":"isOdd","type-import":"utilsMath"}),s(_,{"arguments-text":e.argumentsText,"function-description":"isOdd(value)"},null,8,["arguments-text"]),s(g),s(O,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const K=d(U,[["render",S]]);export{K as default};
