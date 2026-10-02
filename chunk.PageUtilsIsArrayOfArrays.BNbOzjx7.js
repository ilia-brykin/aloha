import{Tt as e,Ut as t,kt as n,qt as r,zt as i}from"./chunk.vendor.CZPox1kV.js";import{Z as a,t as o,zt as s}from"./bundle.index.CLtYDDlb.js";import{n as c,t as l}from"./chunk.AlohaExample.BFgfeYtr.js";import{n as u,r as d,t as f}from"./chunk.PageFilterTest.DEb_j_8g.js";function p(){return{codeJs:`isArrayOfArrays([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
// ${s([[1,2,3],[4,5,6],[7,8,9]])}
isArrayOfArrays([[], [], []]);
// ${s([[],[],[]])}

isArrayOfArrays([1, 2, 3]);
// ${s([1,2,3])}

isArrayOfArrays([]);
// ${s([])}
isArrayOfArrays("Aloha");
// ${s(`Aloha`)}
isArrayOfArrays(1);
// ${s(1)}
isArrayOfArrays(undefined);
// ${s(void 0)}
isArrayOfArrays(null);
// ${s(null)}
isArrayOfArrays({});
// ${s({})}

isArrayOfArrays([[1, 2, 3], "This is not an array", [7, 8, 9]]);
// ${s([[1,2,3],`This is not an array`,[7,8,9]])}`}}var m={name:`PageUtilsIsArrayOfArraysExample`,components:{AlohaExample:l},setup(){let{codeJs:e}=p();return{codeJs:e}}};function h(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var g=o(m,[[`render`,h]]);function _(){return{argumentsText:[{value:`value`,types:[`Array`],text:`_PAGE_UTILS_IS_ARRAY_OF_ARRAYS_ARGUMENTS_VALUE_`}]}}function v(){return{pageTitle:`isArrayOfArrays`}}var y=`import {
  describe,
  expect,
  it,
} from "vitest";

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
`,b={name:`PageUtilsIsArrayOfArrays`,components:{AlohaPage:c,ATranslation:a,PageFilterArguments:d,PageFilterImportFunction:u,PageFilterTest:f,PageUtilsIsArrayOfArraysExample:g},setup(){let{pageTitle:e}=v(),{argumentsText:t}=_();return{argumentsText:t,pageTitle:e,test:y}}};function x(a,o,s,c,l,u){let d=t(`a-translation`),f=t(`page-filter-import-function`),p=t(`page-filter-arguments`),m=t(`page-utils-is-array-of-arrays-example`),h=t(`page-filter-test`),g=t(`aloha-page`);return i(),e(g,{"page-title":a.pageTitle},{body:r(()=>[n(d,{tag:`p`,html:`_PAGE_UTILS_IS_ARRAY_OF_ARRAYS_DESCRIPTION_`}),n(f,{"function-name":`isArrayOfArrays`,"type-import":`utils`}),n(p,{"arguments-text":a.argumentsText,"function-description":`isArrayOfArrays(value)`},null,8,[`arguments-text`]),n(m),n(h,{test:a.test},null,8,[`test`])]),_:1},8,[`page-title`])}var S=o(b,[[`render`,x]]);export{S as default};