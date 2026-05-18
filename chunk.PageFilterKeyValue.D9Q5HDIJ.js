import{A as d,a as x}from"./chunk.AlohaExample.DQald-L_.js";import{b as V,a as K,P as b}from"./chunk.PageFilterTest.CrRc049L.js";import{P as A}from"./chunk.PageFilterImportCompositionApi.B64NV_Bu.js";import{ay as P,ah as i,a3 as v}from"./bundle.index.D1OA29U_.js";import{bc as r,aQ as s,bi as t,br as E,aV as a}from"./chunk.vendor.B7xidcyX.js";import"./chunk.vendor-lodash.DHCI5OYQ.js";import"./chunk.APageTabTitle.BjEZe9gt.js";import"./chunk.AlohaHighlightjs.5M2Lhx9-.js";import"./chunk.translations-ar.ChuYlDzT.js";import"./chunk.translations-de.6pPcJRrO.js";import"./chunk.translations-en.DT3q5fLP.js";import"./chunk.translations-es.B6sZfxDK.js";import"./chunk.translations-fr.ecArFLfS.js";import"./chunk.translations-hr.DhAqHXEL.js";import"./chunk.translations-it.DjP2RsZa.js";import"./chunk.translations-ru.L_V4Dr6V.js";function T(){return{codeJs:`filterKeyValue({ x: "aloha", y: 2 });
// ${P({x:"aloha",y:2})}`}}const j={name:"PageFilterKeyValueExample",components:{AlohaExample:d},setup(){const{codeJs:e}=T();return{codeJs:e}}};function B(e,n,l,p,u,c){const o=t("aloha-example");return r(),s(o,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const F=i(j,[["render",B]]);function $(){return{argumentsText:[{value:"value",types:["Object"],text:"_PAGE_FILTER_KEY_VALUE_ARGUMENTS_VALUE_"}]}}function I(){return{pageTitle:"filterKeyValue"}}const k=`import {
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
`,C={name:"PageFilterKeyValue",components:{AlohaPage:x,ATranslation:v,PageFilterArguments:b,PageFilterImportCompositionApi:A,PageFilterImportFunction:K,PageFilterKeyValueExample:F,PageFilterTest:V},setup(){const{pageTitle:e}=I(),{argumentsText:n}=$();return{argumentsText:n,pageTitle:e,test:k}}};function w(e,n,l,p,u,c){const o=t("a-translation"),m=t("page-filter-import-function"),g=t("page-filter-import-composition-api"),_=t("page-filter-arguments"),f=t("page-filter-key-value-example"),y=t("page-filter-test"),h=t("aloha-page");return r(),s(h,{"page-title":e.pageTitle},{body:E(()=>[a(o,{tag:"p",html:"_PAGE_FILTER_KEY_VALUE_DESCRIPTION_"}),a(m,{"function-name":"filterKeyValue","type-import":"filters"}),a(g,{"function-name":"filterKeyValue"}),a(_,{"arguments-text":e.argumentsText,"function-description":"filterKeyValue(value)"},null,8,["arguments-text"]),a(f),a(y,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const X=i(C,[["render",w]]);export{X as default};
