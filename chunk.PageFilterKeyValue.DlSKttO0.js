import{A as d,a as x}from"./chunk.AlohaExample.YB16Yg0T.js";import{P as V,a as K,b as A}from"./chunk.PageFilterTest.B-hhX0X9.js";import{P as b}from"./chunk.PageFilterImportCompositionApi.CYdQDDAp.js";import{aC as P,_ as i,A as v}from"./bundle.index.D35riRVK.js";import{U as r,e as t,V as s,aS as E,Z as n}from"./chunk.vendor.COYgx38y.js";import"./chunk.vendor-lodash.DdGPhwvj.js";import"./chunk.APageTabTitle.CanEJADU.js";import"./chunk.AlohaHighlightjs.CW1W2LCP.js";import"./chunk.translations-ar.C3cuNM2l.js";import"./chunk.translations-de.ChWpqlXc.js";import"./chunk.translations-en.CkuqRVlP.js";import"./chunk.translations-es.DRL7Smvn.js";import"./chunk.translations-fr.CBRPb4_F.js";import"./chunk.translations-hr.DnHt2OOV.js";import"./chunk.translations-it.dwM41gvu.js";import"./chunk.translations-ru.D7oiKEcO.js";function T(){return{codeJs:`filterKeyValue({ x: "aloha", y: 2 });
// ${P({x:"aloha",y:2})}`}}const j={name:"PageFilterKeyValueExample",components:{AlohaExample:d},setup(){const{codeJs:e}=T();return{codeJs:e}}};function B(e,a,l,p,u,c){const o=t("aloha-example");return s(),r(o,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const F=i(j,[["render",B]]);function $(){return{argumentsText:[{value:"value",types:["Object"],text:"_PAGE_FILTER_KEY_VALUE_ARGUMENTS_VALUE_"}]}}function I(){return{pageTitle:"filterKeyValue"}}const C=`import {
  describe,
  expect,
  it,
} from "@jest/globals";

import filterKeyValue from "../filterKeyValue";

describe("filterKeyValue", () => {
  it("single key-value pair", () => {
    expect(filterKeyValue({ greeting: "aloha" })).toBe("greeting: aloha");
  });

  it("multiple key-value pairs", () => {
    expect(filterKeyValue({ greeting: "aloha", farewell: "aloha" })).toBe("greeting: aloha, farewell: aloha");
  });

  it("empty object", () => {
    expect(filterKeyValue({})).toBe("");
  });

  it("null input", () => {
    expect(filterKeyValue(null)).toBe("");
  });

  it("undefined input", () => {
    expect(filterKeyValue(undefined)).toBe("");
  });

  it("numeric and string values", () => {
    expect(filterKeyValue({ alohaCount: 3, message: "aloha" })).toBe("alohaCount: 3, message: aloha");
  });

  it("nested object", () => {
    expect(filterKeyValue({ level1: { greeting: "aloha" } })).toBe("level1: [object Object]");
  });

  it("object with array values", () => {
    expect(filterKeyValue({ alohas: ["aloha", "hello", "hi"] })).toBe("alohas: aloha,hello,hi");
  });

  it("object with boolean and null values", () => {
    expect(filterKeyValue({ isActive: true, isEmpty: null })).toBe("isActive: true, isEmpty: null");
  });

  it("complex object", () => {
    expect(filterKeyValue({ greeting: "aloha", number: 42, nested: { key: "value" }, list: [1, 2, 3] }))
      .toBe("greeting: aloha, number: 42, nested: [object Object], list: 1,2,3");
  });
});
`,k={name:"PageFilterKeyValue",components:{AlohaPage:x,ATranslation:v,PageFilterArguments:A,PageFilterImportCompositionApi:b,PageFilterImportFunction:K,PageFilterKeyValueExample:F,PageFilterTest:V},setup(){const{pageTitle:e}=I(),{argumentsText:a}=$();return{argumentsText:a,pageTitle:e,test:C}}};function U(e,a,l,p,u,c){const o=t("a-translation"),m=t("page-filter-import-function"),_=t("page-filter-import-composition-api"),g=t("page-filter-arguments"),f=t("page-filter-key-value-example"),y=t("page-filter-test"),h=t("aloha-page");return s(),r(h,{"page-title":e.pageTitle},{body:E(()=>[n(o,{tag:"p",html:"_PAGE_FILTER_KEY_VALUE_DESCRIPTION_"}),n(m,{"function-name":"filterKeyValue","type-import":"filters"}),n(_,{"function-name":"filterKeyValue"}),n(g,{"arguments-text":e.argumentsText,"function-description":"filterKeyValue(value)"},null,8,["arguments-text"]),n(f),n(y,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const W=i(k,[["render",U]]);export{W as default};
