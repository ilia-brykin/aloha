import{A as y,a as C}from"./chunk.AlohaExample.DJGJP9Er.js";import{b as f,a as N,P as A}from"./chunk.PageFilterTest.DxCqTXIN.js";import{aK as o,ah as s,a3 as x}from"./bundle.index.8diqlMmu.js";import{bc as i,aQ as c,bi as t,br as E,aV as n}from"./chunk.vendor.B7xidcyX.js";import"./chunk.vendor-lodash.DHCI5OYQ.js";import"./chunk.APageTabTitle.-kMqBjfq.js";import"./chunk.AlohaHighlightjs.5M2Lhx9-.js";import"./chunk.translations-ar.2GEIsQx2.js";import"./chunk.translations-de.B3W8Bch8.js";import"./chunk.translations-en.D6ESzlsX.js";import"./chunk.translations-es.XiUlXUqv.js";import"./chunk.translations-fr.Vq0cpCce.js";import"./chunk.translations-hr.47g55_67.js";import"./chunk.translations-it.DbY58g7f.js";import"./chunk.translations-ru.B_xj7EMA.js";function w(){return{codeJs:`getTotalNestedCount({ array: ["hello", "Aloha"], keyChildren: "" });
// ${o({array:["hello","Aloha"],keyChildren:""})}

getTotalNestedCount({ array: [], keyChildren: "" });
// ${o({array:[],keyChildren:""})}

getTotalNestedCount({ array: [{ children: ["hello", "world"] }, "test"], keyChildren: "children" });
// ${o({array:[{children:["hello","world"]},"test"],keyChildren:"children"})}

getTotalNestedCount({ array: [{ aloha: [{ aloha: ["hello", "world"] }, { aloha: ["hello1", "world1"] }] }, "test"], keyChildren: "aloha" });
// ${o({array:[{aloha:[{aloha:["hello","world"]},{aloha:["hello1","world1"]}]},"test"],keyChildren:"aloha"})}`}}const k={name:"PageUtilsGetTotalNestedCountExample",components:{AlohaExample:y},setup(){const{codeJs:e}=w();return{codeJs:e}}};function P(e,a,l,d,p,u){const r=t("aloha-example");return i(),c(r,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const $=s(k,[["render",P]]);function G(){return{argumentsText:[{value:"array",types:["Array"],text:"_PAGE_UTILS_GET_TOTAL_NESTED_COUNT_ARGUMENTS_ARRAY_"},{value:"keyChildren",types:["String"],text:"_PAGE_UTILS_GET_TOTAL_NESTED_COUNT_ARGUMENTS_KEY_CHILDREN_"}]}}function U(){return{pageTitle:"getTotalNestedCount"}}const S=`import {
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

`,I={name:"PageUtilsGetTotalNestedCount",components:{AlohaPage:C,ATranslation:x,PageFilterArguments:A,PageFilterImportFunction:N,PageFilterTest:f,PageUtilsGetTotalNestedCountExample:$},setup(){const{pageTitle:e}=U(),{argumentsText:a}=G();return{argumentsText:a,pageTitle:e,test:S}}};function b(e,a,l,d,p,u){const r=t("a-translation"),h=t("page-filter-import-function"),_=t("page-filter-arguments"),m=t("page-utils-get-total-nested-count-example"),g=t("page-filter-test"),T=t("aloha-page");return i(),c(T,{"page-title":e.pageTitle},{body:E(()=>[n(r,{tag:"p",html:"_PAGE_UTILS_GET_TOTAL_NESTED_COUNT_DESCRIPTION_"}),n(h,{"function-name":"getTotalNestedCount","type-import":"utils"}),n(_,{"arguments-text":e.argumentsText,"function-description":"getTotalNestedCount({ array, keyChildren })"},null,8,["arguments-text"]),n(m),n(g,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const Q=s(I,[["render",b]]);export{Q as default};
