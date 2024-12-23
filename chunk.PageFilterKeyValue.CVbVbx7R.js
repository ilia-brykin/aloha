import{A as d,a as x}from"./chunk.AlohaExample.NCiIPZbM.js";import{aw as V,_ as r,A as K}from"./bundle.index.D4AK5eRg.js";import{P as A,a as P,b}from"./chunk.PageFilterTest.1s2x-WEW.js";import{P as v}from"./chunk.PageFilterImportCompositionApi.CKKB0Isn.js";import{k as t,J as i,H as s,aQ as E,O as a}from"./chunk.vendor.HBCvOOnN.js";import"./chunk.vendor-lodash.D68MLJHd.js";import"./chunk.APageTabTitle.CFBJ-Chz.js";import"./chunk.AlohaHighlightjs.BxXkXuRz.js";import"./chunk.translations-ar.C3eLbeil.js";import"./chunk.translations-de.C6N0sXCK.js";import"./chunk.translations-en.Dgf923YU.js";import"./chunk.translations-es.CPNf7mQ8.js";import"./chunk.translations-fr.BZulpadc.js";import"./chunk.translations-hr.BSaBoXG2.js";import"./chunk.translations-it.DW-WFwc3.js";import"./chunk.translations-ru.C7QF7UyA.js";function T(){return{codeJs:`filterKeyValue({ x: "aloha", y: 2 });
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
`,C={name:"PageFilterKeyValue",components:{AlohaPage:x,ATranslation:K,PageFilterArguments:A,PageFilterImportCompositionApi:v,PageFilterImportFunction:P,PageFilterKeyValueExample:F,PageFilterTest:b},setup(){const{pageTitle:e}=I(),{argumentsText:n}=$();return{argumentsText:n,pageTitle:e,test:k}}};function w(e,n,l,p,u,c){const o=t("a-translation"),m=t("page-filter-import-function"),_=t("page-filter-import-composition-api"),g=t("page-filter-arguments"),f=t("page-filter-key-value-example"),y=t("page-filter-test"),h=t("aloha-page");return s(),i(h,{"page-title":e.pageTitle},{body:E(()=>[a(o,{tag:"p",html:"_PAGE_FILTER_KEY_VALUE_DESCRIPTION_"}),a(m,{"function-name":"filterKeyValue","type-import":"filters"}),a(_,{"function-name":"filterKeyValue"}),a(g,{"arguments-text":e.argumentsText,"function-description":"filterKeyValue(value)"},null,8,["arguments-text"]),a(f),a(y,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const X=r(C,[["render",w]]);export{X as default};
