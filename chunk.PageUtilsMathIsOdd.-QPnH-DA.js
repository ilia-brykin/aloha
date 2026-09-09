import{A as x,a as h}from"./chunk.AlohaExample.DvNteu_Q.js";import{P as A,a as T,b as $}from"./chunk.PageFilterTest.DqAaU4vw.js";import{b0 as t,_ as d,A as y}from"./bundle.index.C9ZOQ16P.js";import{Z as r,Y as p,f as n,aV as B,a0 as s}from"./chunk.vendor.hDEvjBSB.js";import"./chunk.vendor-lodash.3C581RLn.js";import"./chunk.APageTabTitle.DAqWP6fw.js";import"./chunk.AlohaHighlightjs.B1uKbtWp.js";import"./chunk.translations-ar.D5QoWFzr.js";import"./chunk.translations-de.es3zy6A0.js";import"./chunk.translations-en.CYlx3VY3.js";import"./chunk.translations-es.zp4usr_r.js";import"./chunk.translations-fr.DtjnUZtG.js";import"./chunk.translations-hr.DZGEx8XX.js";import"./chunk.translations-it.D2jWnc95.js";import"./chunk.translations-ru.CUfkkkdW.js";function F(){return{codeJs:`isOdd(1);
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
// ${t(void 0)}`}}const P={name:"PageUtilsMathIsOddExample",components:{AlohaExample:x},setup(){const{codeJs:e}=F();return{codeJs:e}}};function I(e,o,i,l,c,u){const a=n("aloha-example");return r(),p(a,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const v=d(P,[["render",I]]);function b(){return{argumentsText:[{value:"value",types:["Number"],text:"_PAGE_UTILS_MATH_IS_ODD_ARGUMENTS_VALUE_"}]}}function E(){return{pageTitle:"isOdd"}}const M=`import {
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
`,U={name:"PageUtilsMathIsOdd",components:{AlohaPage:h,ATranslation:y,PageFilterArguments:$,PageFilterImportFunction:T,PageFilterTest:A,PageUtilsMathIsOddExample:v},setup(){const{pageTitle:e}=E(),{argumentsText:o}=b();return{argumentsText:o,pageTitle:e,test:M}}};function S(e,o,i,l,c,u){const a=n("a-translation"),m=n("page-filter-import-function"),_=n("page-filter-arguments"),g=n("page-utils-math-is-odd-example"),O=n("page-filter-test"),f=n("aloha-page");return r(),p(f,{"page-title":e.pageTitle},{body:B(()=>[s(a,{tag:"p",html:"_PAGE_UTILS_MATH_IS_ODD_DESCRIPTION_"}),s(m,{"function-name":"isOdd","type-import":"utilsMath"}),s(_,{"arguments-text":e.argumentsText,"function-description":"isOdd(value)"},null,8,["arguments-text"]),s(g),s(O,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const z=d(U,[["render",S]]);export{z as default};
