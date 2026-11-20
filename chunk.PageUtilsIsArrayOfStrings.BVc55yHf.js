import{t as e}from"./chunk.AlohaPage.B2JXMr8i.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.EJhG67wB.js";import{t as i}from"./chunk.AlohaExample.CdQ6SjdT.js";import{cn as a,qt as o}from"./bundle.index.BaX-GPsX.js";import{$t as s,It as c,Vt as l,rn as u,sn as d}from"./chunk.vendor.BvryzG0o.js";import{t as f}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function p(){return{codeJs:`isArrayOfStrings(["hello", "Aloha"]);
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
// ${a({})}`}}var m={name:`PageUtilsIsArrayOfStringsExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=p();return{codeJs:e}}};function h(e,t,n,r,i,a){let o=u(`aloha-example`);return s(),c(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var g=f(m,[[`render`,h]]);function _(){return{argumentsText:[{value:`value`,types:[`Array`],text:`_PAGE_UTILS_IS_ARRAY_OF_STRINGS_ARGUMENTS_VALUE_`}]}}function v(){return{pageTitle:`isArrayOfStrings`}}var y=`import {
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
`,b={name:`PageUtilsIsArrayOfStrings`,components:{AlohaPage:e,ATranslation:o,PageFilterArguments:n,PageFilterImportFunction:t,PageFilterTest:r,PageUtilsIsArrayOfStringsExample:g},setup(){let{pageTitle:e}=v(),{argumentsText:t}=_();return{argumentsText:t,pageTitle:e,test:y}}};function x(e,t,n,r,i,a){let o=u(`a-translation`),f=u(`page-filter-import-function`),p=u(`page-filter-arguments`),m=u(`page-utils-is-array-of-strings-example`),h=u(`page-filter-test`),g=u(`aloha-page`);return s(),c(g,{"page-title":e.pageTitle},{body:d(()=>[l(o,{tag:`p`,html:`_PAGE_UTILS_IS_ARRAY_OF_STRINGS_DESCRIPTION_`}),l(f,{"function-name":`isArrayOfStrings`,"type-import":`utils`}),l(p,{"arguments-text":e.argumentsText,"function-description":`isArrayOfStrings(value)`},null,8,[`arguments-text`]),l(m),l(h,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var S=f(b,[[`render`,x]]);export{S as default};