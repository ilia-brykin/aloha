"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[9757],{553:(r,a,e)=>{e.r(a),e.d(a,{default:()=>d});var t=e(6365),s=e(8310),n=e(7791),i=e(6369),A=e(5475),l=e(3928),o=e(1912),y=e(7483);const u={name:"PageUtilsIsArrayOfArraysExample",components:{AlohaExample:o.A},setup(){const{codeJs:r}={codeJs:`isArrayOfArrays([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);\n// ${(0,y.ZI)([[1,2,3],[4,5,6],[7,8,9]])}\nisArrayOfArrays([[], [], []]);\n// ${(0,y.ZI)([[],[],[]])}\n\nisArrayOfArrays([1, 2, 3]);\n// ${(0,y.ZI)([1,2,3])}\n\nisArrayOfArrays("Aloha");\n// ${(0,y.ZI)("Aloha")}\nisArrayOfArrays(1);\n// ${(0,y.ZI)(1)}\nisArrayOfArrays(undefined);\n// ${(0,y.ZI)(void 0)}\nisArrayOfArrays(null);\n// ${(0,y.ZI)(null)}\nisArrayOfArrays({});\n// ${(0,y.ZI)({})}\n\nisArrayOfArrays([[1, 2, 3], "This is not an array", [7, 8, 9]]);\n// ${(0,y.ZI)([[1,2,3],"This is not an array",[7,8,9]])}`};return{codeJs:r}}};var f=e(6262);const c=(0,f.A)(u,[["render",function(r,a){const e=(0,t.g2)("aloha-example");return(0,t.uX)(),(0,t.Wv)(e,{"code-js":r.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}]]),p={name:"PageUtilsIsArrayOfArrays",components:{AlohaPage:s.A,ATranslation:n.A,PageFilterArguments:i.A,PageFilterImportFunction:A.A,PageFilterTest:l.A,PageUtilsIsArrayOfArraysExample:c},setup(){const{pageTitle:r}={pageTitle:"isArrayOfArrays"},{argumentsText:a}={argumentsText:[{value:"value",types:["Array"],text:"_PAGE_UTILS_IS_ARRAY_OF_ARRAYS_ARGUMENTS_VALUE_"}]};return{argumentsText:a,pageTitle:r,test:'import {\n  isArrayOfArrays,\n} from "../utils";\n\ndescribe("isArrayOfArrays", () => {\n  it("should return true if provided with an array of arrays", () => {\n    const testData = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];\n    const result = isArrayOfArrays(testData);\n\n    expect(result).toBe(true);\n  });\n\n  it("should return false if provided with an array of non-arrays", () => {\n    const testData = [1, 2, 3, 4, 5];\n    const result = isArrayOfArrays(testData);\n\n    expect(result).toBe(false);\n  });\n\n  it("should return false if provided with a non-array", () => {\n    expect(isArrayOfArrays("Aloha")).toBe(false);\n    expect(isArrayOfArrays(123)).toBe(false);\n    expect(isArrayOfArrays(undefined)).toBe(false);\n    expect(isArrayOfArrays(null)).toBe(false);\n    expect(isArrayOfArrays({})).toBe(false);\n  });\n\n  it("should return false if provided with an array that contains non-array elements", () => {\n    const testData = [[1, 2, 3], "This is not an array", [7, 8, 9]];\n    const result = isArrayOfArrays(testData);\n\n    expect(result).toBe(false);\n  });\n});\n'}}},d=(0,f.A)(p,[["render",function(r,a){const e=(0,t.g2)("a-translation"),s=(0,t.g2)("page-filter-import-function"),n=(0,t.g2)("page-filter-arguments"),i=(0,t.g2)("page-utils-is-array-of-arrays-example"),A=(0,t.g2)("page-filter-test"),l=(0,t.g2)("aloha-page");return(0,t.uX)(),(0,t.Wv)(l,{"page-title":r.pageTitle},{body:(0,t.k6)((()=>[(0,t.bF)(e,{tag:"p",html:"_PAGE_UTILS_IS_ARRAY_OF_ARRAYS_DESCRIPTION_"}),(0,t.bF)(s,{"function-name":"isArrayOfArrays","type-import":"utils"}),(0,t.bF)(n,{"arguments-text":r.argumentsText,"function-description":"isArrayOfArrays(value)"},null,8,["arguments-text"]),(0,t.bF)(i),(0,t.bF)(A,{test:r.test},null,8,["test"])])),_:1},8,["page-title"])}]])}}]);
//# sourceMappingURL=chunk.9757.9985d04e29a15da955e4.js.map