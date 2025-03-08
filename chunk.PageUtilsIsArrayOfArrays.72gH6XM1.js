import{aE as t,_ as i,A as g}from"./bundle.index.Df3v2TOg.js";import{O as l,b as a,Q as p,aR as O,V as e}from"./chunk.vendor.CjhiT8UL.js";import"./chunk.vendor-lodash.DyQEPI1B.js";import{A as h,a as x}from"./chunk.AlohaExample.DeTL3OXT.js";import{P as $,a as T,b as P}from"./chunk.PageFilterTest.BDtMRBpI.js";import"./chunk.translations-ar.r8R_9-3y.js";import"./chunk.translations-de.CZJei0la.js";import"./chunk.translations-en.Dg0gWvNs.js";import"./chunk.translations-es.CUN1v5ud.js";import"./chunk.translations-fr.9SIObey9.js";import"./chunk.translations-hr.ycQ9IFNE.js";import"./chunk.translations-it.C3EQWHGi.js";import"./chunk.translations-ru.BPJsanBh.js";import"./chunk.APageTabTitle.DIMo_hMW.js";import"./chunk.AlohaHighlightjs.rF1jvLhM.js";function I(){return{codeJs:`isArrayOfArrays([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
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
// ${t([[1,2,3],"This is not an array",[7,8,9]])}`}}const B={name:"PageUtilsIsArrayOfArraysExample",components:{AlohaExample:h},setup(){const{codeJs:r}=I();return{codeJs:r}}};function R(r,s,o,A,f,y){const n=a("aloha-example");return p(),l(n,{"code-js":r.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const v=i(B,[["render",R]]);function E(){return{argumentsText:[{value:"value",types:["Array"],text:"_PAGE_UTILS_IS_ARRAY_OF_ARRAYS_ARGUMENTS_VALUE_"}]}}function S(){return{pageTitle:"isArrayOfArrays"}}const U=`import {
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
`,b={name:"PageUtilsIsArrayOfArrays",components:{AlohaPage:x,ATranslation:g,PageFilterArguments:P,PageFilterImportFunction:T,PageFilterTest:$,PageUtilsIsArrayOfArraysExample:v},setup(){const{pageTitle:r}=S(),{argumentsText:s}=E();return{argumentsText:s,pageTitle:r,test:U}}};function D(r,s,o,A,f,y){const n=a("a-translation"),c=a("page-filter-import-function"),u=a("page-filter-arguments"),m=a("page-utils-is-array-of-arrays-example"),_=a("page-filter-test"),d=a("aloha-page");return p(),l(d,{"page-title":r.pageTitle},{body:O(()=>[e(n,{tag:"p",html:"_PAGE_UTILS_IS_ARRAY_OF_ARRAYS_DESCRIPTION_"}),e(c,{"function-name":"isArrayOfArrays","type-import":"utils"}),e(u,{"arguments-text":r.argumentsText,"function-description":"isArrayOfArrays(value)"},null,8,["arguments-text"]),e(m),e(_,{test:r.test},null,8,["test"])]),_:1},8,["page-title"])}const H=i(b,[["render",D]]);export{H as default};
