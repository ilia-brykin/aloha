import{A as g,a as O}from"./chunk.AlohaExample.DVatJQen.js";import{P as h,a as x,b as $}from"./chunk.PageFilterTest.nnRijRnk.js";import{aT as t,_ as i,A as T}from"./bundle.index.D7U4WhBz.js";import{U as l,e as a,V as p,aS as P,Z as e}from"./chunk.vendor.B8i9Zb03.js";import"./chunk.vendor-lodash.BGdgYQ9t.js";import"./chunk.APageTabTitle.CWoEuX_1.js";import"./chunk.AlohaHighlightjs.DOgKZA3M.js";import"./chunk.translations-ar.DEWt73y8.js";import"./chunk.translations-de.CN5eAU-4.js";import"./chunk.translations-en.CPCEcTAP.js";import"./chunk.translations-es.BKTK5PUv.js";import"./chunk.translations-fr.CslimZmU.js";import"./chunk.translations-hr.CiJ7_Y2m.js";import"./chunk.translations-it.H45F8miC.js";import"./chunk.translations-ru.o-dOzdYz.js";function I(){return{codeJs:`isArrayOfArrays([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
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
// ${t([[1,2,3],"This is not an array",[7,8,9]])}`}}const B={name:"PageUtilsIsArrayOfArraysExample",components:{AlohaExample:g},setup(){const{codeJs:r}=I();return{codeJs:r}}};function S(r,s,o,A,f,y){const n=a("aloha-example");return p(),l(n,{"code-js":r.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const v=i(B,[["render",S]]);function R(){return{argumentsText:[{value:"value",types:["Array"],text:"_PAGE_UTILS_IS_ARRAY_OF_ARRAYS_ARGUMENTS_VALUE_"}]}}function U(){return{pageTitle:"isArrayOfArrays"}}const E=`import {
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
`,D={name:"PageUtilsIsArrayOfArrays",components:{AlohaPage:O,ATranslation:T,PageFilterArguments:$,PageFilterImportFunction:x,PageFilterTest:h,PageUtilsIsArrayOfArraysExample:v},setup(){const{pageTitle:r}=U(),{argumentsText:s}=R();return{argumentsText:s,pageTitle:r,test:E}}};function F(r,s,o,A,f,y){const n=a("a-translation"),c=a("page-filter-import-function"),u=a("page-filter-arguments"),m=a("page-utils-is-array-of-arrays-example"),_=a("page-filter-test"),d=a("aloha-page");return p(),l(d,{"page-title":r.pageTitle},{body:P(()=>[e(n,{tag:"p",html:"_PAGE_UTILS_IS_ARRAY_OF_ARRAYS_DESCRIPTION_"}),e(c,{"function-name":"isArrayOfArrays","type-import":"utils"}),e(u,{"arguments-text":r.argumentsText,"function-description":"isArrayOfArrays(value)"},null,8,["arguments-text"]),e(m),e(_,{test:r.test},null,8,["test"])]),_:1},8,["page-title"])}const H=i(D,[["render",F]]);export{H as default};
