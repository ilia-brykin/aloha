import{A as h,a as S}from"./chunk.AlohaExample.CyUlGLtF.js";import{aU as e,_ as i,A as d}from"./bundle.index.nIhxAj4P.js";import{P as O,a as x,b as $}from"./chunk.PageFilterTest.HlQ10vfP.js";import{m as n,C as l,B as f,L as I,G as r}from"./chunk.vendor.D-Y3mz6a.js";import"./chunk.vendor-lodash.ClBXVCWL.js";import"./chunk.vendor-tinymce.2RT9eEW9.js";function T(){return{codeJs:`isArrayOfStrings(["hello", "Aloha"]);
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
// ${e({})}`}}const P={name:"PageUtilsIsArrayOfStringsExample",components:{AlohaExample:h},setup(){const{codeJs:t}=T();return{codeJs:t}}};function B(t,s,o,u,p,c){const a=n("aloha-example");return f(),l(a,{"code-js":t.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const U=i(P,[["render",B]]);function E(){return{argumentsText:[{value:"value",types:["Array"],text:"_PAGE_UTILS_IS_ARRAY_OF_STRINGS_ARGUMENTS_VALUE_"}]}}function R(){return{pageTitle:"isArrayOfStrings"}}const w=`import {
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
`,F={name:"PageUtilsIsArrayOfStrings",components:{AlohaPage:S,ATranslation:d,PageFilterArguments:O,PageFilterImportFunction:x,PageFilterTest:$,PageUtilsIsArrayOfStringsExample:U},setup(){const{pageTitle:t}=R(),{argumentsText:s}=E();return{argumentsText:s,pageTitle:t,test:w}}};function G(t,s,o,u,p,c){const a=n("a-translation"),g=n("page-filter-import-function"),A=n("page-filter-arguments"),_=n("page-utils-is-array-of-strings-example"),m=n("page-filter-test"),y=n("aloha-page");return f(),l(y,{"page-title":t.pageTitle},{body:I(()=>[r(a,{tag:"p",html:"_PAGE_UTILS_IS_ARRAY_OF_STRINGS_DESCRIPTION_"}),r(g,{"function-name":"isArrayOfStrings","type-import":"utils"}),r(A,{"arguments-text":t.argumentsText,"function-description":"isArrayOfStrings(value)"},null,8,["arguments-text"]),r(_),r(m,{test:t.test},null,8,["test"])]),_:1},8,["page-title"])}const j=i(F,[["render",G]]);export{j as default};
