import{A as y,a as C}from"./chunk.AlohaExample.B6LyOSHm.js";import{P as f,a as N,b as A}from"./chunk.PageFilterTest.C7Kj-Kfh.js";import{M as o,_ as s,A as x}from"./bundle.index.BgnoJFSz.js";import{U as i,e as t,V as d,aS as E,Z as n}from"./chunk.vendor.CJgiAfkr.js";import"./chunk.vendor-lodash.UgDJRseT.js";import"./chunk.APageTabTitle.DnquuzTo.js";import"./chunk.AlohaHighlightjs.CS2rrB7v.js";import"./chunk.translations-ar.C215GjCi.js";import"./chunk.translations-de.2OTgW6Cj.js";import"./chunk.translations-en.BDnCg_Z9.js";import"./chunk.translations-es.BP9eJkFz.js";import"./chunk.translations-fr.BOe55yrn.js";import"./chunk.translations-hr.B3s_PrJE.js";import"./chunk.translations-it.Cc3k7wyX.js";import"./chunk.translations-ru.D-swuOFG.js";function w(){return{codeJs:`getTotalNestedCount({ array: ["hello", "Aloha"], keyChildren: "" });
// ${o({array:["hello","Aloha"],keyChildren:""})}

getTotalNestedCount({ array: [], keyChildren: "" });
// ${o({array:[],keyChildren:""})}

getTotalNestedCount({ array: [{ children: ["hello", "world"] }, "test"], keyChildren: "children" });
// ${o({array:[{children:["hello","world"]},"test"],keyChildren:"children"})}

getTotalNestedCount({ array: [{ aloha: [{ aloha: ["hello", "world"] }, { aloha: ["hello1", "world1"] }] }, "test"], keyChildren: "aloha" });
// ${o({array:[{aloha:[{aloha:["hello","world"]},{aloha:["hello1","world1"]}]},"test"],keyChildren:"aloha"})}`}}const k={name:"PageUtilsGetTotalNestedCountExample",components:{AlohaExample:y},setup(){const{codeJs:e}=w();return{codeJs:e}}};function P(e,a,l,c,p,u){const r=t("aloha-example");return d(),i(r,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const U=s(k,[["render",P]]);function $(){return{argumentsText:[{value:"array",types:["Array"],text:"_PAGE_UTILS_GET_TOTAL_NESTED_COUNT_ARGUMENTS_ARRAY_"},{value:"keyChildren",types:["String"],text:"_PAGE_UTILS_GET_TOTAL_NESTED_COUNT_ARGUMENTS_KEY_CHILDREN_"}]}}function G(){return{pageTitle:"getTotalNestedCount"}}const S=`import {
  describe,
  expect,
  it,
} from "@jest/globals";

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

`,I={name:"PageUtilsGetTotalNestedCount",components:{AlohaPage:C,ATranslation:x,PageFilterArguments:A,PageFilterImportFunction:N,PageFilterTest:f,PageUtilsGetTotalNestedCountExample:U},setup(){const{pageTitle:e}=G(),{argumentsText:a}=$();return{argumentsText:a,pageTitle:e,test:S}}};function B(e,a,l,c,p,u){const r=t("a-translation"),h=t("page-filter-import-function"),_=t("page-filter-arguments"),m=t("page-utils-get-total-nested-count-example"),g=t("page-filter-test"),T=t("aloha-page");return d(),i(T,{"page-title":e.pageTitle},{body:E(()=>[n(r,{tag:"p",html:"_PAGE_UTILS_GET_TOTAL_NESTED_COUNT_DESCRIPTION_"}),n(h,{"function-name":"getTotalNestedCount","type-import":"utils"}),n(_,{"arguments-text":e.argumentsText,"function-description":"getTotalNestedCount({ array, keyChildren })"},null,8,["arguments-text"]),n(m),n(g,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const Z=s(I,[["render",B]]);export{Z as default};
