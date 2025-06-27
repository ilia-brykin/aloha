import{A as h,a as S}from"./chunk.AlohaExample.C1KLjlw6.js";import{P as d,a as O,b as x}from"./chunk.PageFilterTest.D1jnnOCo.js";import{aP as e,_ as i,A as $}from"./bundle.index.L7kL3tQT.js";import{U as l,e as r,V as p,aS as I,Z as n}from"./chunk.vendor.COYgx38y.js";import"./chunk.vendor-lodash.xyEKcfD7.js";import"./chunk.APageTabTitle.Ce8OKMcV.js";import"./chunk.AlohaHighlightjs.CW1W2LCP.js";import"./chunk.translations-ar.DEWt73y8.js";import"./chunk.translations-de.B16ttyfK.js";import"./chunk.translations-en.CPCEcTAP.js";import"./chunk.translations-es.BKTK5PUv.js";import"./chunk.translations-fr.CslimZmU.js";import"./chunk.translations-hr.CiJ7_Y2m.js";import"./chunk.translations-it.H45F8miC.js";import"./chunk.translations-ru.o-dOzdYz.js";function P(){return{codeJs:`isArrayOfStrings(["hello", "Aloha"]);
// ${e(["hello","Aloha"])}

isArrayOfStrings("hello Aloha");
// ${e("hello Aloha")}

isArrayOfStrings(["Aloha", 1]);
// ${e(["Aloha",1])}
isArrayOfStrings(["Aloha", false]);
// ${e(["Aloha",!1])}
isArrayOfStrings(["Aloha", undefined]);
// ${e(["Aloha",void 0])}
isArrayOfStrings(["Aloha", null]);
// ${e(["Aloha",null])}

isArrayOfStrings([]);
// ${e([])}
isArrayOfStrings("Aloha");
// ${e("Aloha")}
isArrayOfStrings(1);
// ${e(1)}
isArrayOfStrings(undefined);
// ${e(void 0)}
isArrayOfStrings(null);
// ${e(null)}
isArrayOfStrings({});
// ${e({})}`}}const T={name:"PageUtilsIsArrayOfStringsExample",components:{AlohaExample:h},setup(){const{codeJs:t}=P();return{codeJs:t}}};function B(t,s,o,f,u,c){const a=r("aloha-example");return p(),l(a,{"code-js":t.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const U=i(T,[["render",B]]);function E(){return{argumentsText:[{value:"value",types:["Array"],text:"_PAGE_UTILS_IS_ARRAY_OF_STRINGS_ARGUMENTS_VALUE_"}]}}function R(){return{pageTitle:"isArrayOfStrings"}}const b=`import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  isArrayOfStrings,
} from "../utils";

describe("isArrayOfStrings function", () => {
  it("should return true when input is an array of strings", () => {
    const array = ["hello", "world"];
    const result = isArrayOfStrings(array);

    expect(result).toBe(true);
  });

  it("should return false when input is not an array", () => {
    const notArray = "hello world";
    const result = isArrayOfStrings(notArray);

    expect(result).toBe(false);
  });

  it("should return false if provided with a empty array", () => {
    expect(isArrayOfStrings([])).toBe(false);
  });

  it("should return false when input is an array but not all elements are strings", () => {
    expect(isArrayOfStrings(["hello", 1234])).toBe(false);
    expect(isArrayOfStrings(["hello", false])).toBe(false);
    expect(isArrayOfStrings(["hello", undefined])).toBe(false);
    expect(isArrayOfStrings(["hello", null])).toBe(false);
  });
});
`,w={name:"PageUtilsIsArrayOfStrings",components:{AlohaPage:S,ATranslation:$,PageFilterArguments:x,PageFilterImportFunction:O,PageFilterTest:d,PageUtilsIsArrayOfStringsExample:U},setup(){const{pageTitle:t}=R(),{argumentsText:s}=E();return{argumentsText:s,pageTitle:t,test:b}}};function F(t,s,o,f,u,c){const a=r("a-translation"),g=r("page-filter-import-function"),A=r("page-filter-arguments"),m=r("page-utils-is-array-of-strings-example"),_=r("page-filter-test"),y=r("aloha-page");return p(),l(y,{"page-title":t.pageTitle},{body:I(()=>[n(a,{tag:"p",html:"_PAGE_UTILS_IS_ARRAY_OF_STRINGS_DESCRIPTION_"}),n(g,{"function-name":"isArrayOfStrings","type-import":"utils"}),n(A,{"arguments-text":t.argumentsText,"function-description":"isArrayOfStrings(value)"},null,8,["arguments-text"]),n(m),n(_,{test:t.test},null,8,["test"])]),_:1},8,["page-title"])}const H=i(w,[["render",F]]);export{H as default};
