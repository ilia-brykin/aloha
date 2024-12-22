import{A as h,a as S}from"./chunk.AlohaExample.WLpjIbkB.js";import{aC as e,_ as i,A as d}from"./bundle.index.BdrLdzGE.js";import{P as O,a as x,b as $}from"./chunk.PageFilterTest.BHw3-vI6.js";import{k as r,J as l,H as p,aO as I,O as n}from"./chunk.vendor.QyCKSPD8.js";import"./chunk.vendor-lodash.GuFqEw-8.js";import"./chunk.APageTabTitle.BaiP9Jlm.js";import"./chunk.AlohaHighlightjs.B-JG9i3D.js";import"./chunk.translations-ar.D11AFw12.js";import"./chunk.translations-de.pyWcnzxU.js";import"./chunk.translations-en.BA0L_EKE.js";import"./chunk.translations-es.C8Ue-qtF.js";import"./chunk.translations-fr.B97VMxCC.js";import"./chunk.translations-hr.DPNXGA_z.js";import"./chunk.translations-it.DrIj1yZQ.js";import"./chunk.translations-ru.B1FeJYZT.js";function T(){return{codeJs:`isArrayOfStrings(["hello", "Aloha"]);
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
// ${e({})}`}}const P={name:"PageUtilsIsArrayOfStringsExample",components:{AlohaExample:h},setup(){const{codeJs:t}=T();return{codeJs:t}}};function B(t,s,o,f,u,c){const a=r("aloha-example");return p(),l(a,{"code-js":t.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const E=i(P,[["render",B]]);function U(){return{argumentsText:[{value:"value",types:["Array"],text:"_PAGE_UTILS_IS_ARRAY_OF_STRINGS_ARGUMENTS_VALUE_"}]}}function R(){return{pageTitle:"isArrayOfStrings"}}const w=`import {
  isArrayOfStrings,
} from "../utils";

describe("isArrayOfStrings function", () => {
  test("should return true when input is an array of strings", () => {
    const array = ["hello", "world"];
    const result = isArrayOfStrings(array);

    expect(result).toBe(true);
  });

  test("should return false when input is not an array", () => {
    const notArray = "hello world";
    const result = isArrayOfStrings(notArray);

    expect(result).toBe(false);
  });

  it("should return false if provided with a empty array", () => {
    expect(isArrayOfStrings([])).toBe(false);
  });

  test("should return false when input is an array but not all elements are strings", () => {
    expect(isArrayOfStrings(["hello", 1234])).toBe(false);
    expect(isArrayOfStrings(["hello", false])).toBe(false);
    expect(isArrayOfStrings(["hello", undefined])).toBe(false);
    expect(isArrayOfStrings(["hello", null])).toBe(false);
  });
});
`,F={name:"PageUtilsIsArrayOfStrings",components:{AlohaPage:S,ATranslation:d,PageFilterArguments:O,PageFilterImportFunction:x,PageFilterTest:$,PageUtilsIsArrayOfStringsExample:E},setup(){const{pageTitle:t}=R(),{argumentsText:s}=U();return{argumentsText:s,pageTitle:t,test:w}}};function v(t,s,o,f,u,c){const a=r("a-translation"),g=r("page-filter-import-function"),A=r("page-filter-arguments"),m=r("page-utils-is-array-of-strings-example"),_=r("page-filter-test"),y=r("aloha-page");return p(),l(y,{"page-title":t.pageTitle},{body:I(()=>[n(a,{tag:"p",html:"_PAGE_UTILS_IS_ARRAY_OF_STRINGS_DESCRIPTION_"}),n(g,{"function-name":"isArrayOfStrings","type-import":"utils"}),n(A,{"arguments-text":t.argumentsText,"function-description":"isArrayOfStrings(value)"},null,8,["arguments-text"]),n(m),n(_,{test:t.test},null,8,["test"])]),_:1},8,["page-title"])}const K=i(F,[["render",v]]);export{K as default};
