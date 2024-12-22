import{A as d,a as x}from"./chunk.AlohaExample._XO7Xp-I.js";import{aw as V,_ as r,A as K}from"./bundle.index.B5hAPZ2P.js";import{P as A,a as P,b}from"./chunk.PageFilterTest.CWh-nor5.js";import{P as v}from"./chunk.PageFilterImportCompositionApi.rwbmRCJV.js";import{k as t,J as i,H as s,aO as E,O as a}from"./chunk.vendor.QyCKSPD8.js";import"./chunk.vendor-lodash.GuFqEw-8.js";import"./chunk.APageTabTitle.BJKzNP7I.js";import"./chunk.translations-ar.CVMjJp5b.js";import"./chunk.translations-de.BzQlZ0KE.js";import"./chunk.translations-en.BgQGjf0f.js";import"./chunk.translations-es.D96WHE2G.js";import"./chunk.translations-fr.C7FJhEVC.js";import"./chunk.translations-hr.BD4oC8kj.js";import"./chunk.translations-it.DUqHiLVz.js";import"./chunk.translations-ru.DEu_2RjU.js";function T(){return{codeJs:`filterKeyValue({ x: "aloha", y: 2 });
// ${V({x:"aloha",y:2})}`}}const B={name:"PageFilterKeyValueExample",components:{AlohaExample:d},setup(){const{codeJs:e}=T();return{codeJs:e}}};function j(e,n,l,p,u,c){const o=t("aloha-example");return s(),i(o,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const F=r(B,[["render",j]]);function $(){return{argumentsText:[{value:"value",types:["Object"],text:"_PAGE_FILTER_KEY_VALUE_ARGUMENTS_VALUE_"}]}}function I(){return{pageTitle:"filterKeyValue"}}const k=`import filterKeyValue from "../filterKeyValue";

describe("filterKeyValue", () => {
  test("single key-value pair", () => {
    expect(filterKeyValue({ greeting: "aloha" })).toBe("greeting: aloha");
  });

  test("multiple key-value pairs", () => {
    expect(filterKeyValue({ greeting: "aloha", farewell: "aloha" })).toBe("greeting: aloha, farewell: aloha");
  });

  test("empty object", () => {
    expect(filterKeyValue({})).toBe("");
  });

  test("null input", () => {
    expect(filterKeyValue(null)).toBe("");
  });

  test("undefined input", () => {
    expect(filterKeyValue(undefined)).toBe("");
  });

  test("numeric and string values", () => {
    expect(filterKeyValue({ alohaCount: 3, message: "aloha" })).toBe("alohaCount: 3, message: aloha");
  });

  test("nested object", () => {
    expect(filterKeyValue({ level1: { greeting: "aloha" } })).toBe("level1: [object Object]");
  });

  test("object with array values", () => {
    expect(filterKeyValue({ alohas: ["aloha", "hello", "hi"] })).toBe("alohas: aloha,hello,hi");
  });

  test("object with boolean and null values", () => {
    expect(filterKeyValue({ isActive: true, isEmpty: null })).toBe("isActive: true, isEmpty: null");
  });

  test("complex object", () => {
    expect(filterKeyValue({ greeting: "aloha", number: 42, nested: { key: "value" }, list: [1, 2, 3] }))
      .toBe("greeting: aloha, number: 42, nested: [object Object], list: 1,2,3");
  });
});
`,C={name:"PageFilterKeyValue",components:{AlohaPage:x,ATranslation:K,PageFilterArguments:A,PageFilterImportCompositionApi:v,PageFilterImportFunction:P,PageFilterKeyValueExample:F,PageFilterTest:b},setup(){const{pageTitle:e}=I(),{argumentsText:n}=$();return{argumentsText:n,pageTitle:e,test:k}}};function w(e,n,l,p,u,c){const o=t("a-translation"),m=t("page-filter-import-function"),_=t("page-filter-import-composition-api"),g=t("page-filter-arguments"),f=t("page-filter-key-value-example"),y=t("page-filter-test"),h=t("aloha-page");return s(),i(h,{"page-title":e.pageTitle},{body:E(()=>[a(o,{tag:"p",html:"_PAGE_FILTER_KEY_VALUE_DESCRIPTION_"}),a(m,{"function-name":"filterKeyValue","type-import":"filters"}),a(_,{"function-name":"filterKeyValue"}),a(g,{"arguments-text":e.argumentsText,"function-description":"filterKeyValue(value)"},null,8,["arguments-text"]),a(f),a(y,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const W=r(C,[["render",w]]);export{W as default};
