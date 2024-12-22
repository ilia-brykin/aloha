import{A as y,a as C}from"./chunk.AlohaExample.CSDPM2GG.js";import{O as o,_ as s,A as N}from"./bundle.index.CppgSY7a.js";import{P as f,a as A,b as x}from"./chunk.PageFilterTest.CI9ua7WP.js";import{k as t,J as i,H as d,aQ as E,O as n}from"./chunk.vendor.DTe1dwcY.js";import"./chunk.vendor-lodash.DYgvgMhr.js";import"./chunk.APageTabTitle.DBCzPzA8.js";import"./chunk.AlohaHighlightjs.BnoxTF5z.js";import"./chunk.translations-ar.9T9FZLV-.js";import"./chunk.translations-de.B453o-ge.js";import"./chunk.translations-en.B1pI1agY.js";import"./chunk.translations-es.CQJBKxK9.js";import"./chunk.translations-fr.Bow79Lrr.js";import"./chunk.translations-hr.CA51a4HD.js";import"./chunk.translations-it.DRmcCbu8.js";import"./chunk.translations-ru.BtSZbcF4.js";function k(){return{codeJs:`getTotalNestedCount({ array: ["hello", "Aloha"], keyChildren: "" });
// ${o({array:["hello","Aloha"],keyChildren:""})}

getTotalNestedCount({ array: [], keyChildren: "" });
// ${o({array:[],keyChildren:""})}

getTotalNestedCount({ array: [{ children: ["hello", "world"] }, "test"], keyChildren: "children" });
// ${o({array:[{children:["hello","world"]},"test"],keyChildren:"children"})}

getTotalNestedCount({ array: [{ aloha: [{ aloha: ["hello", "world"] }, { aloha: ["hello1", "world1"] }] }, "test"], keyChildren: "aloha" });
// ${o({array:[{aloha:[{aloha:["hello","world"]},{aloha:["hello1","world1"]}]},"test"],keyChildren:"aloha"})}`}}const w={name:"PageUtilsGetTotalNestedCountExample",components:{AlohaExample:y},setup(){const{codeJs:e}=k();return{codeJs:e}}};function P(e,a,l,c,u,p){const r=t("aloha-example");return d(),i(r,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const $=s(w,[["render",P]]);function G(){return{argumentsText:[{value:"array",types:["Array"],text:"_PAGE_UTILS_GET_TOTAL_NESTED_COUNT_ARGUMENTS_ARRAY_"},{value:"keyChildren",types:["String"],text:"_PAGE_UTILS_GET_TOTAL_NESTED_COUNT_ARGUMENTS_KEY_CHILDREN_"}]}}function U(){return{pageTitle:"getTotalNestedCount"}}const S=`import {
  getTotalNestedCount,
} from "../utils";

describe("getTotalNestedCount function", () => {
  test("should correctly count elements in a flat array without nested children", () => {
    const array = ["hello", "world"];

    expect(getTotalNestedCount({ array, keyChildren: "test" })).toBe(2);
  });

  test("should accurately count elements in a mixed array with and without specified nested children", () => {
    const array = [{ children: ["hello", "world"] }, "test"];

    expect(getTotalNestedCount({ array, keyChildren: "children" })).toBe(4);
    expect(getTotalNestedCount({ array, keyChildren: "" })).toBe(2);
  });

  test("should handle deeply nested structures and count all elements correctly", () => {
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

  test("should return zero for an empty array, indicating no elements to count", () => {
    const array = [];

    expect(getTotalNestedCount({ array, keyChildren: "test" })).toBe(0);
  });
});

`,I={name:"PageUtilsGetTotalNestedCount",components:{AlohaPage:C,ATranslation:N,PageFilterArguments:f,PageFilterImportFunction:A,PageFilterTest:x,PageUtilsGetTotalNestedCountExample:$},setup(){const{pageTitle:e}=U(),{argumentsText:a}=G();return{argumentsText:a,pageTitle:e,test:S}}};function O(e,a,l,c,u,p){const r=t("a-translation"),h=t("page-filter-import-function"),_=t("page-filter-arguments"),m=t("page-utils-get-total-nested-count-example"),g=t("page-filter-test"),T=t("aloha-page");return d(),i(T,{"page-title":e.pageTitle},{body:E(()=>[n(r,{tag:"p",html:"_PAGE_UTILS_GET_TOTAL_NESTED_COUNT_DESCRIPTION_"}),n(h,{"function-name":"getTotalNestedCount","type-import":"utils"}),n(_,{"arguments-text":e.argumentsText,"function-description":"getTotalNestedCount({ array, keyChildren })"},null,8,["arguments-text"]),n(m),n(g,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const V=s(I,[["render",O]]);export{V as default};
