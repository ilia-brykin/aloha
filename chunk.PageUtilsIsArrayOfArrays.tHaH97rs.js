import{t as e}from"./chunk.AlohaPage.CMN_WHAF.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.DOymsqeL.js";import{t as i}from"./chunk.AlohaExample.yP2jFH0Q.js";import{in as a,it as o}from"./bundle.index.CXjunDpM.js";import{It as s,Qt as c,Vt as l,nn as u,on as d}from"./chunk.vendor.CTxSDDRk.js";import{t as f}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function p(){return{codeJs:`isArrayOfArrays([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
// ${a([[1,2,3],[4,5,6],[7,8,9]])}
isArrayOfArrays([[], [], []]);
// ${a([[],[],[]])}

isArrayOfArrays([1, 2, 3]);
// ${a([1,2,3])}

isArrayOfArrays([]);
// ${a([])}
isArrayOfArrays("Aloha");
// ${a(`Aloha`)}
isArrayOfArrays(1);
// ${a(1)}
isArrayOfArrays(undefined);
// ${a(void 0)}
isArrayOfArrays(null);
// ${a(null)}
isArrayOfArrays({});
// ${a({})}

isArrayOfArrays([[1, 2, 3], "This is not an array", [7, 8, 9]]);
// ${a([[1,2,3],`This is not an array`,[7,8,9]])}`}}var m={name:`PageUtilsIsArrayOfArraysExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=p();return{codeJs:e}}};function h(e,t,n,r,i,a){let o=u(`aloha-example`);return c(),s(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var g=f(m,[[`render`,h]]);function _(){return{argumentsText:[{value:`value`,types:[`Array`],text:`_PAGE_UTILS_IS_ARRAY_OF_ARRAYS_ARGUMENTS_VALUE_`}]}}function v(){return{pageTitle:`isArrayOfArrays`}}var y=`import {
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
`,b={name:`PageUtilsIsArrayOfArrays`,components:{AlohaPage:e,ATranslation:o,PageFilterArguments:n,PageFilterImportFunction:t,PageFilterTest:r,PageUtilsIsArrayOfArraysExample:g},setup(){let{pageTitle:e}=v(),{argumentsText:t}=_();return{argumentsText:t,pageTitle:e,test:y}}};function x(e,t,n,r,i,a){let o=u(`a-translation`),f=u(`page-filter-import-function`),p=u(`page-filter-arguments`),m=u(`page-utils-is-array-of-arrays-example`),h=u(`page-filter-test`),g=u(`aloha-page`);return c(),s(g,{"page-title":e.pageTitle},{body:d(()=>[l(o,{tag:`p`,html:`_PAGE_UTILS_IS_ARRAY_OF_ARRAYS_DESCRIPTION_`}),l(f,{"function-name":`isArrayOfArrays`,"type-import":`utils`}),l(p,{"arguments-text":e.argumentsText,"function-description":`isArrayOfArrays(value)`},null,8,[`arguments-text`]),l(m),l(h,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var S=f(b,[[`render`,x]]);export{S as default};