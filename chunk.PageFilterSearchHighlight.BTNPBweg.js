import{aq as i,_ as n,A as T}from"./bundle.index.VWeDPPTP.js";import{O as l,b as t,Q as c,aR as x,V as a}from"./chunk.vendor.G4HJ_FUy.js";import"./chunk.vendor-lodash.DUClg1O3.js";import{A as p,a as E}from"./chunk.AlohaExample.pz_QK9vq.js";import{P as I,a as P,b as L}from"./chunk.PageFilterTest.DOA1LcYu.js";import{P as C}from"./chunk.PageFilterImportCompositionApi.C1y9Jiuf.js";import"./chunk.translations-ar.C-NNZ74u.js";import"./chunk.translations-de.DwcQ1j-I.js";import"./chunk.translations-en.CpaURLZT.js";import"./chunk.translations-es.BlLUKL-T.js";import"./chunk.translations-fr.CBV_DS4p.js";import"./chunk.translations-hr.CNqGGqH_.js";import"./chunk.translations-it.Csqv_psg.js";import"./chunk.translations-ru.D8ZNuRSu.js";import"./chunk.APageTabTitle.DvqMiiyW.js";import"./chunk.AlohaHighlightjs.Bnb6Sejr.js";function G(){return{codeJs:`filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "ipsum", attributes: ["data-aloha='search'", "title='Highlight'"] });
// ${i("Lorem ipsum dolor sit amet consectetur adipisicing elit.",{searchModel:"ipsum",attributes:["data-aloha='search'","title='Highlight'"]})}`}}const V={name:"PageFilterSearchHighlightAttributes",components:{AlohaExample:p},setup(){const{codeJs:e}=G();return{codeJs:e}}};function J(e,r,o,h,g,u){const s=t("aloha-example");return c(),l(s,{"code-js":e.codeJs,header:"attributes","is-code-visible-default":!0},null,8,["code-js"])}const R=n(V,[["render",J]]);function b(){return{codeJs:`filterSearchHighlight("Aloha Vue vue.", { searchModel: "Vue", caseSensitive: true });
// ${i("Aloha Vue vue.",{searchModel:"Vue",caseSensitive:!0})}

filterSearchHighlight("Aloha Vue vue.", { searchModel: "Vue", caseSensitive: false });
// ${i("Aloha Vue vue.",{searchModel:"Vue",caseSensitive:!1})}`}}const F={name:"PageFilterSearchHighlightAttributes",components:{AlohaExample:p},setup(){const{codeJs:e}=b();return{codeJs:e}}};function k(e,r,o,h,g,u){const s=t("aloha-example");return c(),l(s,{"code-js":e.codeJs,header:"caseSensitive","is-code-visible-default":!0},null,8,["code-js"])}const B=n(F,[["render",k]]);function y(){return{codeJs:`filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "ipsum", searchClass: "test_class" });
// ${i("Lorem ipsum dolor sit amet consectetur adipisicing elit.",{searchModel:"ipsum",searchClass:"test_class"})}`}}const j={name:"PageFilterSearchHighlightSearchClass",components:{AlohaExample:p},setup(){const{codeJs:e}=y();return{codeJs:e}}};function w(e,r,o,h,g,u){const s=t("aloha-example");return c(),l(s,{"code-js":e.codeJs,header:"searchClass","is-code-visible-default":!0},null,8,["code-js"])}const N=n(j,[["render",w]]);function U(){return{codeJs:`filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "ipsum" });
// ${i("Lorem ipsum dolor sit amet consectetur adipisicing elit.",{searchModel:"ipsum"})}

filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "it" });
// ${i("Lorem ipsum dolor sit amet consectetur adipisicing elit.",{searchModel:"it"})}

filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "aloha" });
// ${i("Lorem ipsum dolor sit amet consectetur adipisicing elit.",{searchModel:"aloha"})}`}}const O={name:"PageFilterSearchHighlightSearchModel",components:{AlohaExample:p},setup(){const{codeJs:e}=U();return{codeJs:e}}};function D(e,r,o,h,g,u){const s=t("aloha-example");return c(),l(s,{"code-js":e.codeJs,header:"searchModel","is-code-visible-default":!0},null,8,["code-js"])}const q=n(O,[["render",D]]);function Q(){return{codeJs:`filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "ipsum", tag: "strong" });
// ${i("Lorem ipsum dolor sit amet consectetur adipisicing elit.",{searchModel:"ipsum",tag:"strong"})}`}}const z={name:"PageFilterSearchHighlightTag",components:{AlohaExample:p},setup(){const{codeJs:e}=Q();return{codeJs:e}}};function K(e,r,o,h,g,u){const s=t("aloha-example");return c(),l(s,{"code-js":e.codeJs,header:"tag","is-code-visible-default":!0},null,8,["code-js"])}const W=n(z,[["render",K]]);function X(){return{argumentsText:[{value:"value",types:["String"],text:"_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_VALUE_"},{value:'[searchModel=""]',types:["String"],text:"_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_SEARCH_MODEL_"},{value:'[searchClass="a_search_highlight"]',types:["String"],text:"_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_SEARCH_CLASS_"},{value:'[tag="mark"]',types:["String"],text:"_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_TAG_"},{value:"[attributes=[]]",types:["String"],text:"_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_ATTRIBUTES_"},{value:"[caseSensitive=false]",types:["Boolean"],text:"_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_CASE_SENSITIVE_"}]}}function Y(){return{pageTitle:"filterSearchHighlight"}}const Z=`import {
  describe,
  expect,
  it,
} from "@jest/globals";

import filterSearchHighlight from "../filterSearchHighlight";

describe("filterSearchHighlight function", () => {
  // test focuses on a single use case
  it("should return empty string when the value provided is non truthy", () => {
    const result = filterSearchHighlight(null, {
      searchModel: "",
      searchClass: "a_search_highlight",
    });
    expect(result).toBe("");
  });

  it("should return original value when searchModel is empty, undefined or null", () => {
    let result = filterSearchHighlight("test value", {
      searchModel: "",
      searchClass: "a_search_highlight",
    });
    expect(result).toBe("test value");

    result = filterSearchHighlight("test value", {
      searchModel: undefined,
      searchClass: "a_search_highlight",
    });
    expect(result).toBe("test value");

    result = filterSearchHighlight("test value", {
      searchModel: null,
      searchClass: "a_search_highlight",
    });
    expect(result).toBe("test value");
  });

  it("should return value with replaced searchModel content wrapped in mark with searchClass, when searchModel is provided", () => {
    let result = filterSearchHighlight("test searchModel", {
      searchModel: "searchModel",
      searchClass: "test",
    });
    expect(result).toBe("test <mark class=\\"test\\">searchModel</mark>");

    result = filterSearchHighlight("test searchModel", {
      searchModel: "searchModel",
    });
    expect(result).toBe("test <mark class=\\"a_search_highlight\\">searchModel</mark>");
  });

  // Test for \`tag\` argument
  it("should wrap matched text in the specified HTML tag", () => {
    const result = filterSearchHighlight("Aloha Vue", {
      searchModel: "Vue",
      tag: "strong",
    });
    expect(result).toBe("Aloha <strong class=\\"a_search_highlight\\">Vue</strong>");
  });

  it("should use the default mark tag if tag is not provided", () => {
    const result = filterSearchHighlight("Aloha Vue", {
      searchModel: "Vue",
    });
    expect(result).toBe("Aloha <mark class=\\"a_search_highlight\\">Vue</mark>");
  });

  // Test for \`attributes\` argument
  it("should add extra attributes to the tag", () => {
    const result = filterSearchHighlight("Aloha Vue", {
      searchModel: "Vue",
      attributes: ["data-aloha=\\"search\\"", "title=\\"Highlight\\""],
    });
    expect(result).toBe("Aloha <mark class=\\"a_search_highlight\\" data-aloha=\\"search\\" title=\\"Highlight\\">Vue</mark>");
  });

  // Test for \`caseSensitive\` argument
  it("should replace text case-sensitively when caseSensitive is true", () => {
    const result = filterSearchHighlight("Aloha Vue vue", {
      searchModel: "Vue",
      caseSensitive: true,
    });
    expect(result).toBe("Aloha <mark class=\\"a_search_highlight\\">Vue</mark> vue");
  });

  it("should replace text case-insensitively by default", () => {
    const result = filterSearchHighlight("Aloha Vue vue", {
      searchModel: "Vue",
    });
    expect(result).toBe("Aloha <mark class=\\"a_search_highlight\\">Vue</mark> <mark class=\\"a_search_highlight\\">vue</mark>");
  });
});
`,ee={name:"PageFilterSearchHighlight",components:{AlohaPage:E,ATranslation:T,PageFilterArguments:L,PageFilterImportCompositionApi:C,PageFilterImportFunction:P,PageFilterSearchHighlightAttributes:R,PageFilterSearchHighlightCaseSensitive:B,PageFilterSearchHighlightSearchClass:N,PageFilterSearchHighlightSearchModel:q,PageFilterSearchHighlightTag:W,PageFilterTest:I},setup(){const{pageTitle:e}=Y(),{argumentsText:r}=X();return{argumentsText:r,pageTitle:e,test:Z}}};function te(e,r,o,h,g,u){const s=t("a-translation"),_=t("page-filter-import-function"),d=t("page-filter-import-composition-api"),m=t("page-filter-arguments"),f=t("page-filter-search-highlight-search-model"),S=t("page-filter-search-highlight-search-class"),H=t("page-filter-search-highlight-tag"),A=t("page-filter-search-highlight-attributes"),M=t("page-filter-search-highlight-case-sensitive"),v=t("page-filter-test"),$=t("aloha-page");return c(),l($,{"page-title":e.pageTitle},{body:x(()=>[a(s,{tag:"p",html:"_PAGE_FILTER_SEARCH_HIGHLIGHT_DESCRIPTION_"}),a(_,{"function-name":"filterSearchHighlight","type-import":"filters"}),a(d,{"function-name":"filterSearchHighlight"}),a(m,{"arguments-text":e.argumentsText,"function-description":'filterSearchHighlight(value, { [searchModel=""], [searchClass="a_search_highlight"] })'},null,8,["arguments-text"]),a(f),a(S),a(H),a(A),a(M),a(v,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const Se=n(ee,[["render",te]]);export{Se as default};
