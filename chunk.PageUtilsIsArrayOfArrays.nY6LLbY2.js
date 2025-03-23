import{A as g,a as O}from"./chunk.AlohaExample.DcK_zWTP.js";import{P as h,a as x,b as $}from"./chunk.PageFilterTest.DGZWNW3w.js";import{aF as t,_ as i,A as T}from"./bundle.index.DU7QMLyo.js";import{R as l,e as a,U as p,aR as P,Y as e}from"./chunk.vendor.CDkHfsNc.js";import"./chunk.vendor-lodash.BXW4-Hvb.js";import"./chunk.APageTabTitle.DVkFln1W.js";import"./chunk.AlohaHighlightjs.DI9-5vSP.js";import"./chunk.translations-ar.BW4YNjOf.js";import"./chunk.translations-de.pnZGXXfR.js";import"./chunk.translations-en.CzHrEMzS.js";import"./chunk.translations-es.CVdE8egl.js";import"./chunk.translations-fr.hqb9JGfS.js";import"./chunk.translations-hr.DYwzCGFq.js";import"./chunk.translations-it.C5e5-FF3.js";import"./chunk.translations-ru.eTKud94F.js";function I(){return{codeJs:`isArrayOfArrays([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
// ${t([[1,2,3],[4,5,6],[7,8,9]])}
isArrayOfArrays([[], [], []]);
// ${t([[],[],[]])}

isArrayOfArrays([1, 2, 3]);
// ${t([1,2,3])}

isArrayOfArrays([]);
// ${t([])}
isArrayOfArrays("Aloha");
// ${t("Aloha")}
isArrayOfArrays(1);
// ${t(1)}
isArrayOfArrays(undefined);
// ${t(void 0)}
isArrayOfArrays(null);
// ${t(null)}
isArrayOfArrays({});
// ${t({})}

isArrayOfArrays([[1, 2, 3], "This is not an array", [7, 8, 9]]);
// ${t([[1,2,3],"This is not an array",[7,8,9]])}`}}const B={name:"PageUtilsIsArrayOfArraysExample",components:{AlohaExample:g},setup(){const{codeJs:r}=I();return{codeJs:r}}};function R(r,s,o,A,f,y){const n=a("aloha-example");return p(),l(n,{"code-js":r.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const v=i(B,[["render",R]]);function S(){return{argumentsText:[{value:"value",types:["Array"],text:"_PAGE_UTILS_IS_ARRAY_OF_ARRAYS_ARGUMENTS_VALUE_"}]}}function U(){return{pageTitle:"isArrayOfArrays"}}const E=`import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
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
`,F={name:"PageUtilsIsArrayOfArrays",components:{AlohaPage:O,ATranslation:T,PageFilterArguments:$,PageFilterImportFunction:x,PageFilterTest:h,PageUtilsIsArrayOfArraysExample:v},setup(){const{pageTitle:r}=U(),{argumentsText:s}=S();return{argumentsText:s,pageTitle:r,test:E}}};function D(r,s,o,A,f,y){const n=a("a-translation"),c=a("page-filter-import-function"),u=a("page-filter-arguments"),m=a("page-utils-is-array-of-arrays-example"),_=a("page-filter-test"),d=a("aloha-page");return p(),l(d,{"page-title":r.pageTitle},{body:P(()=>[e(n,{tag:"p",html:"_PAGE_UTILS_IS_ARRAY_OF_ARRAYS_DESCRIPTION_"}),e(c,{"function-name":"isArrayOfArrays","type-import":"utils"}),e(u,{"arguments-text":r.argumentsText,"function-description":"isArrayOfArrays(value)"},null,8,["arguments-text"]),e(m),e(_,{test:r.test},null,8,["test"])]),_:1},8,["page-title"])}const K=i(F,[["render",D]]);export{K as default};
