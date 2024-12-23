import{A as u,a as A}from"./chunk.AlohaExample.NCiIPZbM.js";import{ap as a,_ as l,A as C}from"./bundle.index.D4AK5eRg.js";import{P as T,a as P,b as x}from"./chunk.PageFilterTest.1s2x-WEW.js";import{P as E}from"./chunk.PageFilterImportCompositionApi.CKKB0Isn.js";import{k as t,J as n,H as c,aQ as $,O as s}from"./chunk.vendor.HBCvOOnN.js";import"./chunk.vendor-lodash.D68MLJHd.js";import"./chunk.APageTabTitle.CFBJ-Chz.js";import"./chunk.AlohaHighlightjs.BxXkXuRz.js";import"./chunk.translations-ar.C3eLbeil.js";import"./chunk.translations-de.C6N0sXCK.js";import"./chunk.translations-en.Dgf923YU.js";import"./chunk.translations-es.CPNf7mQ8.js";import"./chunk.translations-fr.BZulpadc.js";import"./chunk.translations-hr.BSaBoXG2.js";import"./chunk.translations-it.DW-WFwc3.js";import"./chunk.translations-ru.C7QF7UyA.js";function I(){return{codeJs:`filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "ipsum", searchClass: "test_class" });
// ${a("Lorem ipsum dolor sit amet consectetur adipisicing elit.",{searchModel:"ipsum",searchClass:"test_class"})}`}}const v={name:"PageFilterSearchHighlightSearchClass",components:{AlohaExample:u},setup(){const{codeJs:e}=I();return{codeJs:e}}};function L(e,r,o,h,p,g){const i=t("aloha-example");return c(),n(i,{"code-js":e.codeJs,header:"searchClass","is-code-visible-default":!0},null,8,["code-js"])}const F=l(v,[["render",L]]);function G(){return{codeJs:`filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "ipsum" });
// ${a("Lorem ipsum dolor sit amet consectetur adipisicing elit.",{searchModel:"ipsum"})}

filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "it" });
// ${a("Lorem ipsum dolor sit amet consectetur adipisicing elit.",{searchModel:"it"})}

filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "aloha" });
// ${a("Lorem ipsum dolor sit amet consectetur adipisicing elit.",{searchModel:"aloha"})}`}}const R={name:"PageFilterSearchHighlightSearchModel",components:{AlohaExample:u},setup(){const{codeJs:e}=G();return{codeJs:e}}};function J(e,r,o,h,p,g){const i=t("aloha-example");return c(),n(i,{"code-js":e.codeJs,header:"searchModel","is-code-visible-default":!0},null,8,["code-js"])}const y=l(R,[["render",J]]);function B(){return{argumentsText:[{value:"value",types:["String"],text:"_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_VALUE_"},{value:'[searchModel=""]',types:["String"],text:"_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_SEARCH_MODEL_"},{value:'[searchClass="a_search_highlight"]',types:["String"],text:"_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_SEARCH_CLASS_"}]}}function w(){return{pageTitle:"filterSearchHighlight"}}const b=`import filterSearchHighlight from "../filterSearchHighlight";

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
`,N={name:"PageFilterSearchHighlight",components:{AlohaPage:A,ATranslation:C,PageFilterArguments:T,PageFilterImportCompositionApi:E,PageFilterImportFunction:P,PageFilterSearchHighlightSearchClass:F,PageFilterSearchHighlightSearchModel:y,PageFilterTest:x},setup(){const{pageTitle:e}=w(),{argumentsText:r}=B();return{argumentsText:r,pageTitle:e,test:b}}};function j(e,r,o,h,p,g){const i=t("a-translation"),m=t("page-filter-import-function"),_=t("page-filter-import-composition-api"),d=t("page-filter-arguments"),f=t("page-filter-search-highlight-search-model"),H=t("page-filter-search-highlight-search-class"),S=t("page-filter-test"),M=t("aloha-page");return c(),n(M,{"page-title":e.pageTitle},{body:$(()=>[s(i,{tag:"p",html:"_PAGE_FILTER_SEARCH_HIGHLIGHT_DESCRIPTION_"}),s(m,{"function-name":"filterSearchHighlight","type-import":"filters"}),s(_,{"function-name":"filterSearchHighlight"}),s(d,{"arguments-text":e.argumentsText,"function-description":'filterSearchHighlight(value, { [searchModel=""], [searchClass="a_search_highlight"] })'},null,8,["arguments-text"]),s(f),s(H),s(S,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const ie=l(N,[["render",j]]);export{ie as default};
