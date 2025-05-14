import{A as h,a as S}from"./chunk.AlohaExample.CqKIj33C.js";import{P as d,a as O,b as x}from"./chunk.PageFilterTest.CQSC_Gdx.js";import{aF as e,_ as i,A as $}from"./bundle.index.-2VhN-QO.js";import{U as l,e as r,V as p,aS as I,Z as n}from"./chunk.vendor.w-kCrpQl.js";import"./chunk.vendor-lodash.GmlDDh1v.js";import"./chunk.APageTabTitle.DvwWIXYt.js";import"./chunk.AlohaHighlightjs.Cjego80K.js";import"./chunk.translations-ar.7kyFlj_7.js";import"./chunk.translations-de.BMzqk4tK.js";import"./chunk.translations-en.CYLIQ7pD.js";import"./chunk.translations-es.D962VZ2D.js";import"./chunk.translations-fr.CcjuPFMN.js";import"./chunk.translations-hr.D1P_Fjd9.js";import"./chunk.translations-it.BsI54FWd.js";import"./chunk.translations-ru.hctQRJz1.js";function T(){return{codeJs:`isArrayOfStrings(["hello", "Aloha"]);
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
// ${e({})}`}}const P={name:"PageUtilsIsArrayOfStringsExample",components:{AlohaExample:h},setup(){const{codeJs:t}=T();return{codeJs:t}}};function B(t,s,o,f,u,c){const a=r("aloha-example");return p(),l(a,{"code-js":t.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const U=i(P,[["render",B]]);function E(){return{argumentsText:[{value:"value",types:["Array"],text:"_PAGE_UTILS_IS_ARRAY_OF_STRINGS_ARGUMENTS_VALUE_"}]}}function F(){return{pageTitle:"isArrayOfStrings"}}const R=`import {
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
`,b={name:"PageUtilsIsArrayOfStrings",components:{AlohaPage:S,ATranslation:$,PageFilterArguments:x,PageFilterImportFunction:O,PageFilterTest:d,PageUtilsIsArrayOfStringsExample:U},setup(){const{pageTitle:t}=F(),{argumentsText:s}=E();return{argumentsText:s,pageTitle:t,test:R}}};function w(t,s,o,f,u,c){const a=r("a-translation"),g=r("page-filter-import-function"),A=r("page-filter-arguments"),m=r("page-utils-is-array-of-strings-example"),_=r("page-filter-test"),y=r("aloha-page");return p(),l(y,{"page-title":t.pageTitle},{body:I(()=>[n(a,{tag:"p",html:"_PAGE_UTILS_IS_ARRAY_OF_STRINGS_DESCRIPTION_"}),n(g,{"function-name":"isArrayOfStrings","type-import":"utils"}),n(A,{"arguments-text":t.argumentsText,"function-description":"isArrayOfStrings(value)"},null,8,["arguments-text"]),n(m),n(_,{test:t.test},null,8,["test"])]),_:1},8,["page-title"])}const H=i(b,[["render",w]]);export{H as default};
