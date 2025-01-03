import{A as x,a as h}from"./chunk.AlohaExample.6MOrG3Se.js";import{aB as t,_ as d,A}from"./bundle.index.B-PSK0iN.js";import{P as T,a as $,b as B}from"./chunk.PageFilterTest.BjjhOtKP.js";import{k as n,J as r,H as p,aQ as y,O as s}from"./chunk.vendor.HBCvOOnN.js";import"./chunk.vendor-lodash.D68MLJHd.js";import"./chunk.APageTabTitle.DTfMSue5.js";import"./chunk.AlohaHighlightjs.BxXkXuRz.js";import"./chunk.translations-ar.CGL8aVo9.js";import"./chunk.translations-de.RdwLQ5AB.js";import"./chunk.translations-en.DDBINhYl.js";import"./chunk.translations-es.Db8DPcgi.js";import"./chunk.translations-fr.Bj0H1VLd.js";import"./chunk.translations-hr.D6Hyl4N8.js";import"./chunk.translations-it.BR5rbHtH.js";import"./chunk.translations-ru.BkDZ_0rg.js";function F(){return{codeJs:`isOdd(1);
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
  isOdd,
} from "../utilsMath";

describe("isOdd function", () => {
  test("Return true if given an odd number", () => {
    expect(isOdd(1)).toBeTruthy();
    expect(isOdd(5)).toBeTruthy();
    expect(isOdd(123454567)).toBeTruthy();
  });

  test("Return false if given an even number", () => {
    expect(isOdd(0)).toBeFalsy();
    expect(isOdd(2)).toBeFalsy();
    expect(isOdd(123456)).toBeFalsy();
  });

  test("Return false if given a non-integer", () => {
    expect(isOdd(2.5)).toBeFalsy();
    expect(isOdd("Aloha")).toBeFalsy();
    expect(isOdd(null)).toBeFalsy();
    expect(isOdd(undefined)).toBeFalsy();
    expect(isOdd({})).toBeFalsy();
    expect(isOdd([])).toBeFalsy();
  });

  test("Return true if given a negative odd number", () => {
    expect(isOdd(-1)).toBeTruthy();
    expect(isOdd(-345)).toBeTruthy();
  });

  test("Return false if given a negative even number", () => {
    expect(isOdd(-2)).toBeFalsy();
    expect(isOdd(-4)).toBeFalsy();
    expect(isOdd(-268)).toBeFalsy();
  });
});
`,U={name:"PageUtilsMathIsOdd",components:{AlohaPage:h,ATranslation:A,PageFilterArguments:T,PageFilterImportFunction:$,PageFilterTest:B,PageUtilsMathIsOddExample:v},setup(){const{pageTitle:e}=E(),{argumentsText:o}=b();return{argumentsText:o,pageTitle:e,test:M}}};function S(e,o,i,l,c,u){const a=n("a-translation"),m=n("page-filter-import-function"),_=n("page-filter-arguments"),g=n("page-utils-math-is-odd-example"),O=n("page-filter-test"),f=n("aloha-page");return p(),r(f,{"page-title":e.pageTitle},{body:y(()=>[s(a,{tag:"p",html:"_PAGE_UTILS_MATH_IS_ODD_DESCRIPTION_"}),s(m,{"function-name":"isOdd","type-import":"utilsMath"}),s(_,{"arguments-text":e.argumentsText,"function-description":"isOdd(value)"},null,8,["arguments-text"]),s(g),s(O,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const K=d(U,[["render",S]]);export{K as default};
