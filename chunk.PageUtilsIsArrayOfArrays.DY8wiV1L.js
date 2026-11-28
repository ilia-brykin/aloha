import{t as e}from"./chunk.AlohaPage.BSfHVC43.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.AYOenCaD.js";import{t as i}from"./chunk.AlohaExample.VTWuqY0j.js";import{mn as a,t as o,xn as s}from"./bundle.index.D-5bYXwk.js";import{Jt as c,Ut as l,mn as u,on as d,un as f}from"./chunk.vendor.DL09mhUf.js";function p(){return{codeJs:`isArrayOfArrays([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
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
// ${s([[1,2,3],`This is not an array`,[7,8,9]])}`}}var m={name:`PageUtilsIsArrayOfArraysExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=p();return{codeJs:e}}};function h(e,t,n,r,i,a){let o=f(`aloha-example`);return d(),l(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var g=o(m,[[`render`,h]]);function _(){return{argumentsText:[{value:`value`,types:[`Array`],text:`_PAGE_UTILS_IS_ARRAY_OF_ARRAYS_ARGUMENTS_VALUE_`}]}}function v(){return{pageTitle:`isArrayOfArrays`}}var y=`import {
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
`,b={name:`PageUtilsIsArrayOfArrays`,components:{AlohaPage:e,ATranslation:a,PageFilterArguments:n,PageFilterImportFunction:t,PageFilterTest:r,PageUtilsIsArrayOfArraysExample:g},setup(){let{pageTitle:e}=v(),{argumentsText:t}=_();return{argumentsText:t,pageTitle:e,test:y}}};function x(e,t,n,r,i,a){let o=f(`a-translation`),s=f(`page-filter-import-function`),p=f(`page-filter-arguments`),m=f(`page-utils-is-array-of-arrays-example`),h=f(`page-filter-test`),g=f(`aloha-page`);return d(),l(g,{"page-title":e.pageTitle},{body:u(()=>[c(o,{tag:`p`,html:`_PAGE_UTILS_IS_ARRAY_OF_ARRAYS_DESCRIPTION_`}),c(s,{"function-name":`isArrayOfArrays`,"type-import":`utils`}),c(p,{"arguments-text":e.argumentsText,"function-description":`isArrayOfArrays(value)`},null,8,[`arguments-text`]),c(m),c(h,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var S=o(b,[[`render`,x]]);export{S as default};