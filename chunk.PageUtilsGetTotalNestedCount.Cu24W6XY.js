import{t as e}from"./chunk.AlohaPage.sulZ3BAz.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.HIbnCuB_.js";import{t as i}from"./chunk.AlohaExample.Dh7-vA8e.js";import{Vt as a,et as o}from"./bundle.index.Csp1_sOL.js";import{Ft as s,Xt as c,en as l,in as u,zt as d}from"./chunk.vendor.Cx127fe1.js";import{t as f}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function p(){return{codeJs:`getTotalNestedCount({ array: ["hello", "Aloha"], keyChildren: "" });
// ${a({array:[`hello`,`Aloha`],keyChildren:``})}

getTotalNestedCount({ array: [], keyChildren: "" });
// ${a({array:[],keyChildren:``})}

getTotalNestedCount({ array: [{ children: ["hello", "world"] }, "test"], keyChildren: "children" });
// ${a({array:[{children:[`hello`,`world`]},`test`],keyChildren:`children`})}

getTotalNestedCount({ array: [{ aloha: [{ aloha: ["hello", "world"] }, { aloha: ["hello1", "world1"] }] }, "test"], keyChildren: "aloha" });
// ${a({array:[{aloha:[{aloha:[`hello`,`world`]},{aloha:[`hello1`,`world1`]}]},`test`],keyChildren:`aloha`})}`}}var m={name:`PageUtilsGetTotalNestedCountExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=p();return{codeJs:e}}};function h(e,t,n,r,i,a){let o=l(`aloha-example`);return c(),s(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var g=f(m,[[`render`,h]]);function _(){return{argumentsText:[{value:`array`,types:[`Array`],text:`_PAGE_UTILS_GET_TOTAL_NESTED_COUNT_ARGUMENTS_ARRAY_`},{value:`keyChildren`,types:[`String`],text:`_PAGE_UTILS_GET_TOTAL_NESTED_COUNT_ARGUMENTS_KEY_CHILDREN_`}]}}function v(){return{pageTitle:`getTotalNestedCount`}}var y=`import {
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

`,b={name:`PageUtilsGetTotalNestedCount`,components:{AlohaPage:e,ATranslation:o,PageFilterArguments:n,PageFilterImportFunction:t,PageFilterTest:r,PageUtilsGetTotalNestedCountExample:g},setup(){let{pageTitle:e}=v(),{argumentsText:t}=_();return{argumentsText:t,pageTitle:e,test:y}}};function x(e,t,n,r,i,a){let o=l(`a-translation`),f=l(`page-filter-import-function`),p=l(`page-filter-arguments`),m=l(`page-utils-get-total-nested-count-example`),h=l(`page-filter-test`),g=l(`aloha-page`);return c(),s(g,{"page-title":e.pageTitle},{body:u(()=>[d(o,{tag:`p`,html:`_PAGE_UTILS_GET_TOTAL_NESTED_COUNT_DESCRIPTION_`}),d(f,{"function-name":`getTotalNestedCount`,"type-import":`utils`}),d(p,{"arguments-text":e.argumentsText,"function-description":`getTotalNestedCount({ array, keyChildren })`},null,8,[`arguments-text`]),d(m),d(h,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var S=f(b,[[`render`,x]]);export{S as default};