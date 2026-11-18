import{t as e}from"./chunk.AlohaPage.ChkpVQK6.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.CchSHHxI.js";import{t as i}from"./chunk.AlohaExample.yCYNeej2.js";import{et as a,qt as o}from"./bundle.index.DgEnxzUz.js";import{Bt as s,It as c,Zt as l,an as u,tn as d}from"./chunk.vendor.H0cZuFAV.js";import{t as f}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function p(){return{codeJs:`isArrayOfStrings(["hello", "Aloha"]);
// ${o([`hello`,`Aloha`])}

isArrayOfStrings("hello Aloha");
// ${o(`hello Aloha`)}

isArrayOfStrings(["Aloha", 1]);
// ${o([`Aloha`,1])}
isArrayOfStrings(["Aloha", false]);
// ${o([`Aloha`,!1])}
isArrayOfStrings(["Aloha", undefined]);
// ${o([`Aloha`,void 0])}
isArrayOfStrings(["Aloha", null]);
// ${o([`Aloha`,null])}

isArrayOfStrings([]);
// ${o([])}
isArrayOfStrings("Aloha");
// ${o(`Aloha`)}
isArrayOfStrings(1);
// ${o(1)}
isArrayOfStrings(undefined);
// ${o(void 0)}
isArrayOfStrings(null);
// ${o(null)}
isArrayOfStrings({});
// ${o({})}`}}var m={name:`PageUtilsIsArrayOfStringsExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=p();return{codeJs:e}}};function h(e,t,n,r,i,a){let o=d(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var g=f(m,[[`render`,h]]);function _(){return{argumentsText:[{value:`value`,types:[`Array`],text:`_PAGE_UTILS_IS_ARRAY_OF_STRINGS_ARGUMENTS_VALUE_`}]}}function v(){return{pageTitle:`isArrayOfStrings`}}var y=`import {
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
`,b={name:`PageUtilsIsArrayOfStrings`,components:{AlohaPage:e,ATranslation:a,PageFilterArguments:n,PageFilterImportFunction:t,PageFilterTest:r,PageUtilsIsArrayOfStringsExample:g},setup(){let{pageTitle:e}=v(),{argumentsText:t}=_();return{argumentsText:t,pageTitle:e,test:y}}};function x(e,t,n,r,i,a){let o=d(`a-translation`),f=d(`page-filter-import-function`),p=d(`page-filter-arguments`),m=d(`page-utils-is-array-of-strings-example`),h=d(`page-filter-test`),g=d(`aloha-page`);return l(),c(g,{"page-title":e.pageTitle},{body:u(()=>[s(o,{tag:`p`,html:`_PAGE_UTILS_IS_ARRAY_OF_STRINGS_DESCRIPTION_`}),s(f,{"function-name":`isArrayOfStrings`,"type-import":`utils`}),s(p,{"arguments-text":e.argumentsText,"function-description":`isArrayOfStrings(value)`},null,8,[`arguments-text`]),s(m),s(h,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var S=f(b,[[`render`,x]]);export{S as default};