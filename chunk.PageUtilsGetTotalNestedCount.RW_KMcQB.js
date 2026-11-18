import{t as e}from"./chunk.AlohaPage.CyRCtesQ.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.DlMcTxjz.js";import{t as i}from"./chunk.AlohaExample.BovuoDBh.js";import{Yt as a,nt as o}from"./bundle.index.WAa1Niso.js";import{Bt as s,It as c,Zt as l,an as u,tn as d}from"./chunk.vendor.H0cZuFAV.js";import{t as f}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function p(){return{codeJs:`getTotalNestedCount({ array: ["hello", "Aloha"], keyChildren: "" });
// ${a({array:[`hello`,`Aloha`],keyChildren:``})}

getTotalNestedCount({ array: [], keyChildren: "" });
// ${a({array:[],keyChildren:``})}

getTotalNestedCount({ array: [{ children: ["hello", "world"] }, "test"], keyChildren: "children" });
// ${a({array:[{children:[`hello`,`world`]},`test`],keyChildren:`children`})}

getTotalNestedCount({ array: [{ aloha: [{ aloha: ["hello", "world"] }, { aloha: ["hello1", "world1"] }] }, "test"], keyChildren: "aloha" });
// ${a({array:[{aloha:[{aloha:[`hello`,`world`]},{aloha:[`hello1`,`world1`]}]},`test`],keyChildren:`aloha`})}`}}var m={name:`PageUtilsGetTotalNestedCountExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=p();return{codeJs:e}}};function h(e,t,n,r,i,a){let o=d(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var g=f(m,[[`render`,h]]);function _(){return{argumentsText:[{value:`array`,types:[`Array`],text:`_PAGE_UTILS_GET_TOTAL_NESTED_COUNT_ARGUMENTS_ARRAY_`},{value:`keyChildren`,types:[`String`],text:`_PAGE_UTILS_GET_TOTAL_NESTED_COUNT_ARGUMENTS_KEY_CHILDREN_`}]}}function v(){return{pageTitle:`getTotalNestedCount`}}var y=`import {
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

`,b={name:`PageUtilsGetTotalNestedCount`,components:{AlohaPage:e,ATranslation:o,PageFilterArguments:n,PageFilterImportFunction:t,PageFilterTest:r,PageUtilsGetTotalNestedCountExample:g},setup(){let{pageTitle:e}=v(),{argumentsText:t}=_();return{argumentsText:t,pageTitle:e,test:y}}};function x(e,t,n,r,i,a){let o=d(`a-translation`),f=d(`page-filter-import-function`),p=d(`page-filter-arguments`),m=d(`page-utils-get-total-nested-count-example`),h=d(`page-filter-test`),g=d(`aloha-page`);return l(),c(g,{"page-title":e.pageTitle},{body:u(()=>[s(o,{tag:`p`,html:`_PAGE_UTILS_GET_TOTAL_NESTED_COUNT_DESCRIPTION_`}),s(f,{"function-name":`getTotalNestedCount`,"type-import":`utils`}),s(p,{"arguments-text":e.argumentsText,"function-description":`getTotalNestedCount({ array, keyChildren })`},null,8,[`arguments-text`]),s(m),s(h,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var S=f(b,[[`render`,x]]);export{S as default};