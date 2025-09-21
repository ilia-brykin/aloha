import{A as g,a as O}from"./chunk.AlohaExample.DKk4ISbb.js";import{P as h,a as x,b as $}from"./chunk.PageFilterTest.CAXmxGjg.js";import{aX as t,_ as i,A as T}from"./bundle.index.Bxxx_tjl.js";import{V as l,e as a,W as p,aT as P,_ as e}from"./chunk.vendor.DmOTRqbf.js";import"./chunk.vendor-lodash.DsZvX3G1.js";import"./chunk.APageTabTitle.CLVPnYYB.js";import"./chunk.AlohaHighlightjs.8HRkfNnH.js";import"./chunk.translations-ar.BiLIUuBX.js";import"./chunk.translations-de.Cy_u5T72.js";import"./chunk.translations-en.CWj0a7ej.js";import"./chunk.translations-es.D-4cj_p_.js";import"./chunk.translations-fr.LwkSu7L_.js";import"./chunk.translations-hr.G7gNG4Fu.js";import"./chunk.translations-it.BilXvddc.js";import"./chunk.translations-ru.XOcS94ap.js";function I(){return{codeJs:`isArrayOfArrays([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
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
// ${t([[1,2,3],"This is not an array",[7,8,9]])}`}}const B={name:"PageUtilsIsArrayOfArraysExample",components:{AlohaExample:g},setup(){const{codeJs:r}=I();return{codeJs:r}}};function v(r,s,o,A,f,y){const n=a("aloha-example");return p(),l(n,{"code-js":r.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const R=i(B,[["render",v]]);function S(){return{argumentsText:[{value:"value",types:["Array"],text:"_PAGE_UTILS_IS_ARRAY_OF_ARRAYS_ARGUMENTS_VALUE_"}]}}function E(){return{pageTitle:"isArrayOfArrays"}}const U=`import {
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
`,D={name:"PageUtilsIsArrayOfArrays",components:{AlohaPage:O,ATranslation:T,PageFilterArguments:$,PageFilterImportFunction:x,PageFilterTest:h,PageUtilsIsArrayOfArraysExample:R},setup(){const{pageTitle:r}=E(),{argumentsText:s}=S();return{argumentsText:s,pageTitle:r,test:U}}};function F(r,s,o,A,f,y){const n=a("a-translation"),c=a("page-filter-import-function"),u=a("page-filter-arguments"),m=a("page-utils-is-array-of-arrays-example"),_=a("page-filter-test"),d=a("aloha-page");return p(),l(d,{"page-title":r.pageTitle},{body:P(()=>[e(n,{tag:"p",html:"_PAGE_UTILS_IS_ARRAY_OF_ARRAYS_DESCRIPTION_"}),e(c,{"function-name":"isArrayOfArrays","type-import":"utils"}),e(u,{"arguments-text":r.argumentsText,"function-description":"isArrayOfArrays(value)"},null,8,["arguments-text"]),e(m),e(_,{test:r.test},null,8,["test"])]),_:1},8,["page-title"])}const z=i(D,[["render",F]]);export{z as default};
