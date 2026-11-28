import{t as e}from"./chunk.AlohaPage.BvUvrvQ4.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.C-ArH7Yp.js";import{t as i}from"./chunk.AlohaExample.Bx3NX4bX.js";import{Sn as a,mn as o,t as s}from"./bundle.index.LlT2KVEy.js";import{Ht as c,an as l,ln as u,pn as d,qt as f}from"./chunk.vendor.SEynj6EJ.js";function p(){return{codeJs:`isArrayOfStrings(["hello", "Aloha"]);
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
// ${a({})}`}}var m={name:`PageUtilsIsArrayOfStringsExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=p();return{codeJs:e}}};function h(e,t,n,r,i,a){let o=u(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var g=s(m,[[`render`,h]]);function _(){return{argumentsText:[{value:`value`,types:[`Array`],text:`_PAGE_UTILS_IS_ARRAY_OF_STRINGS_ARGUMENTS_VALUE_`}]}}function v(){return{pageTitle:`isArrayOfStrings`}}var y=`import {
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
`,b={name:`PageUtilsIsArrayOfStrings`,components:{AlohaPage:e,ATranslation:o,PageFilterArguments:n,PageFilterImportFunction:t,PageFilterTest:r,PageUtilsIsArrayOfStringsExample:g},setup(){let{pageTitle:e}=v(),{argumentsText:t}=_();return{argumentsText:t,pageTitle:e,test:y}}};function x(e,t,n,r,i,a){let o=u(`a-translation`),s=u(`page-filter-import-function`),p=u(`page-filter-arguments`),m=u(`page-utils-is-array-of-strings-example`),h=u(`page-filter-test`),g=u(`aloha-page`);return l(),c(g,{"page-title":e.pageTitle},{body:d(()=>[f(o,{tag:`p`,html:`_PAGE_UTILS_IS_ARRAY_OF_STRINGS_DESCRIPTION_`}),f(s,{"function-name":`isArrayOfStrings`,"type-import":`utils`}),f(p,{"arguments-text":e.argumentsText,"function-description":`isArrayOfStrings(value)`},null,8,[`arguments-text`]),f(m),f(h,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var S=s(b,[[`render`,x]]);export{S as default};