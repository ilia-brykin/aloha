import{Tt as e,Ut as t,kt as n,qt as r,zt as i}from"./chunk.vendor.CZPox1kV.js";import{Bt as a,Z as o,t as s}from"./bundle.index.BmSiyQNH.js";import{n as c,t as l}from"./chunk.AlohaExample.CD4LlhAz.js";import{n as u,r as d,t as f}from"./chunk.PageFilterTest.DKKVbW-u.js";function p(){return{codeJs:`isArrayOfStrings(["hello", "Aloha"]);
// ${a([`hello`,`Aloha`])}

isArrayOfStrings("hello Aloha");
// ${a(`hello Aloha`)}

isArrayOfStrings(["Aloha", 1]);
// ${a([`Aloha`,1])}
isArrayOfStrings(["Aloha", false]);
// ${a([`Aloha`,!1])}
isArrayOfStrings(["Aloha", undefined]);
// ${a([`Aloha`,void 0])}
isArrayOfStrings(["Aloha", null]);
// ${a([`Aloha`,null])}

isArrayOfStrings([]);
// ${a([])}
isArrayOfStrings("Aloha");
// ${a(`Aloha`)}
isArrayOfStrings(1);
// ${a(1)}
isArrayOfStrings(undefined);
// ${a(void 0)}
isArrayOfStrings(null);
// ${a(null)}
isArrayOfStrings({});
// ${a({})}`}}var m={name:`PageUtilsIsArrayOfStringsExample`,components:{AlohaExample:l},setup(){let{codeJs:e}=p();return{codeJs:e}}};function h(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var g=s(m,[[`render`,h]]);function _(){return{argumentsText:[{value:`value`,types:[`Array`],text:`_PAGE_UTILS_IS_ARRAY_OF_STRINGS_ARGUMENTS_VALUE_`}]}}function v(){return{pageTitle:`isArrayOfStrings`}}var y=`import {
  describe,
  expect,
  it,
} from "vitest";

import {
  isArrayOfStrings,
} from "../utils";

describe("isArrayOfStrings function", () => {
  it("should return true when input is an array of strings", () => {
    const array = ["hello", "world"];
    const result = isArrayOfStrings(array);

    expect(result).toBe(true);
  });

  it("should return false when input is not an array", () => {
    const notArray = "hello world";
    const result = isArrayOfStrings(notArray);

    expect(result).toBe(false);
  });

  it("should return false if provided with a empty array", () => {
    expect(isArrayOfStrings([])).toBe(false);
  });

  it("should return false when input is an array but not all elements are strings", () => {
    expect(isArrayOfStrings(["hello", 1234])).toBe(false);
    expect(isArrayOfStrings(["hello", false])).toBe(false);
    expect(isArrayOfStrings(["hello", undefined])).toBe(false);
    expect(isArrayOfStrings(["hello", null])).toBe(false);
  });
});
`,b={name:`PageUtilsIsArrayOfStrings`,components:{AlohaPage:c,ATranslation:o,PageFilterArguments:d,PageFilterImportFunction:u,PageFilterTest:f,PageUtilsIsArrayOfStringsExample:g},setup(){let{pageTitle:e}=v(),{argumentsText:t}=_();return{argumentsText:t,pageTitle:e,test:y}}};function x(a,o,s,c,l,u){let d=t(`a-translation`),f=t(`page-filter-import-function`),p=t(`page-filter-arguments`),m=t(`page-utils-is-array-of-strings-example`),h=t(`page-filter-test`),g=t(`aloha-page`);return i(),e(g,{"page-title":a.pageTitle},{body:r(()=>[n(d,{tag:`p`,html:`_PAGE_UTILS_IS_ARRAY_OF_STRINGS_DESCRIPTION_`}),n(f,{"function-name":`isArrayOfStrings`,"type-import":`utils`}),n(p,{"arguments-text":a.argumentsText,"function-description":`isArrayOfStrings(value)`},null,8,[`arguments-text`]),n(m),n(h,{test:a.test},null,8,[`test`])]),_:1},8,[`page-title`])}var S=s(b,[[`render`,x]]);export{S as default};