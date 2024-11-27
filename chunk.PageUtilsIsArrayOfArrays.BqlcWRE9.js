import{A as g,a as O}from"./chunk.AlohaExample.BT0L4sPf.js";import{aV as a,_ as i,A as h}from"./bundle.index.CgpAdSdY.js";import{P as x,a as $,b as T}from"./chunk.PageFilterTest.DueiWPai.js";import{m as t,C as l,B as A,L as P,G as e}from"./chunk.vendor.D-Y3mz6a.js";import"./chunk.vendor-lodash.ClBXVCWL.js";import"./chunk.vendor-tinymce.2RT9eEW9.js";function I(){return{codeJs:`isArrayOfArrays([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
// ${a([[1,2,3],[4,5,6],[7,8,9]])}
isArrayOfArrays([[], [], []]);
// ${a([[],[],[]])}

isArrayOfArrays([1, 2, 3]);
// ${a([1,2,3])}

isArrayOfArrays([]);
// ${a([])}
isArrayOfArrays("Aloha");
// ${a("Aloha")}
isArrayOfArrays(1);
// ${a(1)}
isArrayOfArrays(undefined);
// ${a(void 0)}
isArrayOfArrays(null);
// ${a(null)}
isArrayOfArrays({});
// ${a({})}

isArrayOfArrays([[1, 2, 3], "This is not an array", [7, 8, 9]]);
// ${a([[1,2,3],"This is not an array",[7,8,9]])}`}}const B={name:"PageUtilsIsArrayOfArraysExample",components:{AlohaExample:g},setup(){const{codeJs:r}=I();return{codeJs:r}}};function v(r,s,o,f,y,p){const n=t("aloha-example");return A(),l(n,{"code-js":r.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const R=i(B,[["render",v]]);function S(){return{argumentsText:[{value:"value",types:["Array"],text:"_PAGE_UTILS_IS_ARRAY_OF_ARRAYS_ARGUMENTS_VALUE_"}]}}function E(){return{pageTitle:"isArrayOfArrays"}}const U=`import {
  isArrayOfArrays,
} from "../utils";

describe("isArrayOfArrays", () => {
  it("should return true if provided with an array of arrays", () => {
    const testData = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const result = isArrayOfArrays(testData);

    expect(result).toBe(true);
  });

  it("should return false if provided with an array of non-arrays", () => {
    const testData = [1, 2, 3, 4, 5];
    const result = isArrayOfArrays(testData);

    expect(result).toBe(false);
  });

  it("should return false if provided with a non-array", () => {
    expect(isArrayOfArrays("Aloha")).toBe(false);
    expect(isArrayOfArrays(123)).toBe(false);
    expect(isArrayOfArrays(undefined)).toBe(false);
    expect(isArrayOfArrays(null)).toBe(false);
    expect(isArrayOfArrays({})).toBe(false);
  });

  it("should return false if provided with a empty array", () => {
    expect(isArrayOfArrays([])).toBe(false);
  });

  it("should return false if provided with an array that contains non-array elements", () => {
    const testData = [[1, 2, 3], "This is not an array", [7, 8, 9]];
    const result = isArrayOfArrays(testData);

    expect(result).toBe(false);
  });
});
`,D={name:"PageUtilsIsArrayOfArrays",components:{AlohaPage:O,ATranslation:h,PageFilterArguments:x,PageFilterImportFunction:$,PageFilterTest:T,PageUtilsIsArrayOfArraysExample:R},setup(){const{pageTitle:r}=E(),{argumentsText:s}=S();return{argumentsText:s,pageTitle:r,test:U}}};function F(r,s,o,f,y,p){const n=t("a-translation"),c=t("page-filter-import-function"),u=t("page-filter-arguments"),_=t("page-utils-is-array-of-arrays-example"),m=t("page-filter-test"),d=t("aloha-page");return A(),l(d,{"page-title":r.pageTitle},{body:P(()=>[e(n,{tag:"p",html:"_PAGE_UTILS_IS_ARRAY_OF_ARRAYS_DESCRIPTION_"}),e(c,{"function-name":"isArrayOfArrays","type-import":"utils"}),e(u,{"arguments-text":r.argumentsText,"function-description":"isArrayOfArrays(value)"},null,8,["arguments-text"]),e(_),e(m,{test:r.test},null,8,["test"])]),_:1},8,["page-title"])}const Y=i(D,[["render",F]]);export{Y as default};
