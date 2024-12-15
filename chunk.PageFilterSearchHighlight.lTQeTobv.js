import{A as u,a as A}from"./chunk.AlohaExample.A9Ef-QbL.js";import{aK as r,_ as o,A as C}from"./bundle.index.Dn7qpWjQ.js";import{P,a as T,b as x}from"./chunk.PageFilterTest.Dwl2cJEE.js";import{P as E}from"./chunk.PageFilterImportCompositionApi.dDZ0bVyw.js";import{m as t,K as n,J as c,aK as $,P as s}from"./chunk.vendor.DQz1Isc4.js";import"./chunk.vendor-lodash.Cgq9oNCy.js";import"./chunk.vendor-tinymce.cPIiul0H.js";function I(){return{codeJs:`filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "ipsum", searchClass: "test_class" });
// ${r("Lorem ipsum dolor sit amet consectetur adipisicing elit.",{searchModel:"ipsum",searchClass:"test_class"})}`}}const v={name:"PageFilterSearchHighlightSearchClass",components:{AlohaExample:u},setup(){const{codeJs:e}=I();return{codeJs:e}}};function L(e,i,l,h,g,p){const a=t("aloha-example");return c(),n(a,{"code-js":e.codeJs,header:"searchClass","is-code-visible-default":!0},null,8,["code-js"])}const F=o(v,[["render",L]]);function G(){return{codeJs:`filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "ipsum" });
// ${r("Lorem ipsum dolor sit amet consectetur adipisicing elit.",{searchModel:"ipsum"})}

filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "it" });
// ${r("Lorem ipsum dolor sit amet consectetur adipisicing elit.",{searchModel:"it"})}

filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "aloha" });
// ${r("Lorem ipsum dolor sit amet consectetur adipisicing elit.",{searchModel:"aloha"})}`}}const R={name:"PageFilterSearchHighlightSearchModel",components:{AlohaExample:u},setup(){const{codeJs:e}=G();return{codeJs:e}}};function J(e,i,l,h,g,p){const a=t("aloha-example");return c(),n(a,{"code-js":e.codeJs,header:"searchModel","is-code-visible-default":!0},null,8,["code-js"])}const y=o(R,[["render",J]]);function B(){return{argumentsText:[{value:"value",types:["String"],text:"_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_VALUE_"},{value:'[searchModel=""]',types:["String"],text:"_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_SEARCH_MODEL_"},{value:'[searchClass="a_search_highlight"]',types:["String"],text:"_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_SEARCH_CLASS_"}]}}function w(){return{pageTitle:"filterSearchHighlight"}}const b=`import filterSearchHighlight from "../filterSearchHighlight";

describe("filterSearchHighlight function", () => {
  // test focuses on a single use case
  it("should return empty string when the value provided is non truthy", () => {
    const result = filterSearchHighlight(null, { searchModel: "", searchClass: "a_search_highlight" });
    expect(result).toBe("");
  });

  it("should return original value when searchModel is empty, undefined or null", () => {
    let result = filterSearchHighlight("test value", { searchModel: "", searchClass: "a_search_highlight" });
    expect(result).toBe("test value");

    result = filterSearchHighlight("test value", { searchModel: undefined, searchClass: "a_search_highlight" });
    expect(result).toBe("test value");

    result = filterSearchHighlight("test value", { searchModel: null, searchClass: "a_search_highlight" });
    expect(result).toBe("test value");
  });

  it("should return value with replaced searchModel content wrapped in span with searchClass, when searchModel is provided", () => {
    let result = filterSearchHighlight("test searchModel", { searchModel: "searchModel", searchClass: "test" });
    expect(result).toBe("test <span class=\\"test\\">searchModel</span>");

    result = filterSearchHighlight("test searchModel", { searchModel: "searchModel" });
    expect(result).toBe("test <span class=\\"a_search_highlight\\">searchModel</span>");
  });
});
`,N={name:"PageFilterSearchHighlight",components:{AlohaPage:A,ATranslation:C,PageFilterArguments:P,PageFilterImportCompositionApi:E,PageFilterImportFunction:T,PageFilterSearchHighlightSearchClass:F,PageFilterSearchHighlightSearchModel:y,PageFilterTest:x},setup(){const{pageTitle:e}=w(),{argumentsText:i}=B();return{argumentsText:i,pageTitle:e,test:b}}};function j(e,i,l,h,g,p){const a=t("a-translation"),_=t("page-filter-import-function"),m=t("page-filter-import-composition-api"),d=t("page-filter-arguments"),f=t("page-filter-search-highlight-search-model"),S=t("page-filter-search-highlight-search-class"),H=t("page-filter-test"),M=t("aloha-page");return c(),n(M,{"page-title":e.pageTitle},{body:$(()=>[s(a,{tag:"p",html:"_PAGE_FILTER_SEARCH_HIGHLIGHT_DESCRIPTION_"}),s(_,{"function-name":"filterSearchHighlight","type-import":"filters"}),s(m,{"function-name":"filterSearchHighlight"}),s(d,{"arguments-text":e.argumentsText,"function-description":'filterSearchHighlight(value, { [searchModel=""], [searchClass="a_search_highlight"] })'},null,8,["arguments-text"]),s(f),s(S),s(H,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const z=o(N,[["render",j]]);export{z as default};
