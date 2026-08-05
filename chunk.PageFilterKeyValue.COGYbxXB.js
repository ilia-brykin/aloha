import{A as d,a as x}from"./chunk.AlohaExample.PK8ZqzZv.js";import{P as V,a as K,b as A}from"./chunk.PageFilterTest.AQisze5N.js";import{P as b}from"./chunk.PageFilterImportCompositionApi.CxNHxgEi.js";import{aW as P,_ as i,A as v}from"./bundle.index.CFbxDSwI.js";import{Y as r,W as s,f as t,aU as E,$ as n}from"./chunk.vendor.BEEJbev-.js";import"./chunk.vendor-lodash.CwOx-Q_g.js";import"./chunk.APageTabTitle.CD5SY8yV.js";import"./chunk.AlohaHighlightjs.De6fh8wy.js";import"./chunk.translations-ar.BbG7LYEj.js";import"./chunk.translations-de.EatA1qxA.js";import"./chunk.translations-en.Biw9X527.js";import"./chunk.translations-es.D4hd8X4D.js";import"./chunk.translations-fr.dDiY09fC.js";import"./chunk.translations-hr.dmhq0i65.js";import"./chunk.translations-it.FS6Wj0nZ.js";import"./chunk.translations-ru.C-1t0C30.js";function T(){return{codeJs:`filterKeyValue({ x: "aloha", y: 2 });
// ${P({x:"aloha",y:2})}`}}const j={name:"PageFilterKeyValueExample",components:{AlohaExample:d},setup(){const{codeJs:e}=T();return{codeJs:e}}};function B(e,a,l,p,u,c){const o=t("aloha-example");return r(),s(o,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const $=i(j,[["render",B]]);function F(){return{argumentsText:[{value:"value",types:["Object"],text:"_PAGE_FILTER_KEY_VALUE_ARGUMENTS_VALUE_"}]}}function I(){return{pageTitle:"filterKeyValue"}}const k=`import {
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
`,C={name:"PageFilterKeyValue",components:{AlohaPage:x,ATranslation:v,PageFilterArguments:A,PageFilterImportCompositionApi:b,PageFilterImportFunction:K,PageFilterKeyValueExample:$,PageFilterTest:V},setup(){const{pageTitle:e}=I(),{argumentsText:a}=F();return{argumentsText:a,pageTitle:e,test:k}}};function U(e,a,l,p,u,c){const o=t("a-translation"),m=t("page-filter-import-function"),_=t("page-filter-import-composition-api"),f=t("page-filter-arguments"),g=t("page-filter-key-value-example"),y=t("page-filter-test"),h=t("aloha-page");return r(),s(h,{"page-title":e.pageTitle},{body:E(()=>[n(o,{tag:"p",html:"_PAGE_FILTER_KEY_VALUE_DESCRIPTION_"}),n(m,{"function-name":"filterKeyValue","type-import":"filters"}),n(_,{"function-name":"filterKeyValue"}),n(f,{"arguments-text":e.argumentsText,"function-description":"filterKeyValue(value)"},null,8,["arguments-text"]),n(g),n(y,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const X=i(C,[["render",U]]);export{X as default};
