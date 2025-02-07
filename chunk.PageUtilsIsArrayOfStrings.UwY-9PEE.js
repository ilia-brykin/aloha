import{aD as e,_ as i,A as h}from"./bundle.index.BBIMvqHY.js";import{O as l,b as r,Q as p,aR as S,V as n}from"./chunk.vendor.CjhiT8UL.js";import"./chunk.vendor-lodash.DyQEPI1B.js";import{A as d,a as O}from"./chunk.AlohaExample.DyGlJAKb.js";import{P as x,a as $,b as I}from"./chunk.PageFilterTest.C9G4Ca-I.js";import"./chunk.translations-ar.DWwaQC1L.js";import"./chunk.translations-de.Bm_NRjKi.js";import"./chunk.translations-en.CfLmKpaQ.js";import"./chunk.translations-es.C_tSILxJ.js";import"./chunk.translations-fr.acyQpqB8.js";import"./chunk.translations-hr.wGAqklkF.js";import"./chunk.translations-it.CSGg6_Uy.js";import"./chunk.translations-ru.VBYVnDIE.js";import"./chunk.APageTabTitle.B8oRDfz3.js";import"./chunk.AlohaHighlightjs.rF1jvLhM.js";function T(){return{codeJs:`isArrayOfStrings(["hello", "Aloha"]);
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
// ${e({})}`}}const P={name:"PageUtilsIsArrayOfStringsExample",components:{AlohaExample:d},setup(){const{codeJs:t}=T();return{codeJs:t}}};function B(t,s,o,f,u,c){const a=r("aloha-example");return p(),l(a,{"code-js":t.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const E=i(P,[["render",B]]);function R(){return{argumentsText:[{value:"value",types:["Array"],text:"_PAGE_UTILS_IS_ARRAY_OF_STRINGS_ARGUMENTS_VALUE_"}]}}function U(){return{pageTitle:"isArrayOfStrings"}}const b=`import {
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
`,w={name:"PageUtilsIsArrayOfStrings",components:{AlohaPage:O,ATranslation:h,PageFilterArguments:I,PageFilterImportFunction:$,PageFilterTest:x,PageUtilsIsArrayOfStringsExample:E},setup(){const{pageTitle:t}=U(),{argumentsText:s}=R();return{argumentsText:s,pageTitle:t,test:b}}};function F(t,s,o,f,u,c){const a=r("a-translation"),g=r("page-filter-import-function"),A=r("page-filter-arguments"),m=r("page-utils-is-array-of-strings-example"),_=r("page-filter-test"),y=r("aloha-page");return p(),l(y,{"page-title":t.pageTitle},{body:S(()=>[n(a,{tag:"p",html:"_PAGE_UTILS_IS_ARRAY_OF_STRINGS_DESCRIPTION_"}),n(g,{"function-name":"isArrayOfStrings","type-import":"utils"}),n(A,{"arguments-text":t.argumentsText,"function-description":"isArrayOfStrings(value)"},null,8,["arguments-text"]),n(m),n(_,{test:t.test},null,8,["test"])]),_:1},8,["page-title"])}const H=i(w,[["render",F]]);export{H as default};
