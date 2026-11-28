import{t as e}from"./chunk.AlohaPage.IS3NRfGI.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.BiQNU7rf.js";import{t as i}from"./chunk.AlohaExample.CDuUdjpI.js";import{bn as a,mn as o,t as s}from"./bundle.index.DikcaTJ9.js";import{Ht as c,an as l,ln as u,pn as d,qt as f}from"./chunk.vendor.SEynj6EJ.js";function p(){return{codeJs:`getTotalNestedCount({ array: ["hello", "Aloha"], keyChildren: "" });
// ${a({array:[`hello`,`Aloha`],keyChildren:``})}

getTotalNestedCount({ array: [], keyChildren: "" });
// ${a({array:[],keyChildren:``})}

getTotalNestedCount({ array: [{ children: ["hello", "world"] }, "test"], keyChildren: "children" });
// ${a({array:[{children:[`hello`,`world`]},`test`],keyChildren:`children`})}

getTotalNestedCount({ array: [{ aloha: [{ aloha: ["hello", "world"] }, { aloha: ["hello1", "world1"] }] }, "test"], keyChildren: "aloha" });
// ${a({array:[{aloha:[{aloha:[`hello`,`world`]},{aloha:[`hello1`,`world1`]}]},`test`],keyChildren:`aloha`})}`}}var m={name:`PageUtilsGetTotalNestedCountExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=p();return{codeJs:e}}};function h(e,t,n,r,i,a){let o=u(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var g=s(m,[[`render`,h]]);function _(){return{argumentsText:[{value:`array`,types:[`Array`],text:`_PAGE_UTILS_GET_TOTAL_NESTED_COUNT_ARGUMENTS_ARRAY_`},{value:`keyChildren`,types:[`String`],text:`_PAGE_UTILS_GET_TOTAL_NESTED_COUNT_ARGUMENTS_KEY_CHILDREN_`}]}}function v(){return{pageTitle:`getTotalNestedCount`}}var y=`import {
  describe,
  expect,
  it,
} from "vitest";

import {
  getTotalNestedCount,
} from "../utils";

describe("getTotalNestedCount function", () => {
  it("should correctly count elements in a flat array without nested children", () => {
    const array = ["hello", "world"];

    expect(getTotalNestedCount({ array, keyChildren: "test" })).toBe(2);
  });

  it("should accurately count elements in a mixed array with and without specified nested children", () => {
    const array = [{ children: ["hello", "world"] }, "test"];

    expect(getTotalNestedCount({ array, keyChildren: "children" })).toBe(4);
    expect(getTotalNestedCount({ array, keyChildren: "" })).toBe(2);
  });

  it("should handle deeply nested structures and count all elements correctly", () => {
    const array = [
      {
        children: [
          { children: ["hello", "world"] },
          { children: ["hello", "world"] },
        ],
      },
      {
        children: [
          { children: ["hello", "world"] },
          { children: ["hello", "world"] },
          { children: ["hello", "world"] },
        ],
      },
      {
        children: [
          { children: ["hello", "world"] },
        ],
      },
    ];

    expect(getTotalNestedCount({ array, keyChildren: "children" })).toBe(21);
  });

  it("should return zero for an empty array, indicating no elements to count", () => {
    const array = [];

    expect(getTotalNestedCount({ array, keyChildren: "test" })).toBe(0);
  });
});

`,b={name:`PageUtilsGetTotalNestedCount`,components:{AlohaPage:e,ATranslation:o,PageFilterArguments:n,PageFilterImportFunction:t,PageFilterTest:r,PageUtilsGetTotalNestedCountExample:g},setup(){let{pageTitle:e}=v(),{argumentsText:t}=_();return{argumentsText:t,pageTitle:e,test:y}}};function x(e,t,n,r,i,a){let o=u(`a-translation`),s=u(`page-filter-import-function`),p=u(`page-filter-arguments`),m=u(`page-utils-get-total-nested-count-example`),h=u(`page-filter-test`),g=u(`aloha-page`);return l(),c(g,{"page-title":e.pageTitle},{body:d(()=>[f(o,{tag:`p`,html:`_PAGE_UTILS_GET_TOTAL_NESTED_COUNT_DESCRIPTION_`}),f(s,{"function-name":`getTotalNestedCount`,"type-import":`utils`}),f(p,{"arguments-text":e.argumentsText,"function-description":`getTotalNestedCount({ array, keyChildren })`},null,8,[`arguments-text`]),f(m),f(h,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var S=s(b,[[`render`,x]]);export{S as default};