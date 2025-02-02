import{aq as i,_ as o,A as T}from"./bundle.index.B2aaR4xj.js";import{O as l,b as t,Q as h,aR as x,V as a}from"./chunk.vendor.G4HJ_FUy.js";import"./chunk.vendor-lodash.DUClg1O3.js";import{A as p,a as k}from"./chunk.AlohaExample.B8t5sXI5.js";import{P as I,a as E,b as P}from"./chunk.PageFilterTest.1RZ8t2aV.js";import{P as L}from"./chunk.PageFilterImportCompositionApi.Bp80koOX.js";import"./chunk.translations-ar.Bm_TIgmU.js";import"./chunk.translations-de.hQOurFbu.js";import"./chunk.translations-en.C27usO-8.js";import"./chunk.translations-es.CWd7slww.js";import"./chunk.translations-fr.DDfPHPkk.js";import"./chunk.translations-hr.CtnKD3az.js";import"./chunk.translations-it.Cf9ZYxei.js";import"./chunk.translations-ru.CZ8Ez0gt.js";import"./chunk.APageTabTitle.6ZuxfiZq.js";import"./chunk.AlohaHighlightjs.Bnb6Sejr.js";function C(){return{codeJs:`filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "ipsum", attributes: ["data-aloha='search'", "title='Highlight'"] });
// ${i("Lorem ipsum dolor sit amet consectetur adipisicing elit.",{searchModel:"ipsum",attributes:["data-aloha='search'","title='Highlight'"]})}`}}const G={name:"PageFilterSearchHighlightAttributes",components:{AlohaExample:p},setup(){const{codeJs:e}=C();return{codeJs:e}}};function b(e,r,n,c,u,g){const s=t("aloha-example");return h(),l(s,{"code-js":e.codeJs,header:"attributes","is-code-visible-default":!0},null,8,["code-js"])}const J=o(G,[["render",b]]);function w(){return{codeJs:`filterSearchHighlight("Aloha Vue vue.", { searchModel: "Vue", caseSensitive: true });
// ${i("Aloha Vue vue.",{searchModel:"Vue",caseSensitive:!0})}

filterSearchHighlight("Aloha Vue vue.", { searchModel: "Vue", caseSensitive: false });
// ${i("Aloha Vue vue.",{searchModel:"Vue",caseSensitive:!1})}`}}const R={name:"PageFilterSearchHighlightAttributes",components:{AlohaExample:p},setup(){const{codeJs:e}=w();return{codeJs:e}}};function F(e,r,n,c,u,g){const s=t("aloha-example");return h(),l(s,{"code-js":e.codeJs,header:"caseSensitive","is-code-visible-default":!0},null,8,["code-js"])}const j=o(R,[["render",F]]);function B(){return{codeJs:`filterSearchHighlight("Aloha <strong>Vue</strong> is a <a href="https://vue.com">framework</a>", { searchModel: "vue", isHtml: true });
// ${i('Aloha <strong>Vue</strong> is a <a href="https://vue.com">framework</a>',{searchModel:"vue",isHtml:!0})}

filterSearchHighlight("<div><p>Vue is amazing.</p><span>Vue framework</span></div>", { searchModel: "vue", isHtml: true });
// ${i("<div><p>Vue is amazing.</p><span>Vue framework</span></div>",{searchModel:"Vue",isHtml:!0})}

filterSearchHighlight("<div><h1>Vue.js</h1><p>This is a Vue framework.</p></div>", { searchModel: "vue", isHtml: true });
// ${i("<div><h1>Vue.js</h1><p>This is a Vue framework.</p></div>",{searchModel:"Vue",isHtml:!0})}

filterSearchHighlight("<p>Welcome to <strong>Vue</strong><span>.js</span> world.</p>", { searchModel: "vue", isHtml: true });
// ${i("<p>Welcome to <strong>Vue</strong><span>.js</span> world.</p>",{searchModel:"Vue",isHtml:!0})}`}}const y={name:"PageFilterSearchHighlightIsHtml",components:{AlohaExample:p},setup(){const{codeJs:e}=B();return{codeJs:e}}};function N(e,r,n,c,u,g){const s=t("aloha-example");return h(),l(s,{"code-js":e.codeJs,header:"isHtml","is-code-visible-default":!0},null,8,["code-js"])}const U=o(y,[["render",N]]);function O(){return{codeJs:`filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "ipsum", searchClass: "test_class" });
// ${i("Lorem ipsum dolor sit amet consectetur adipisicing elit.",{searchModel:"ipsum",searchClass:"test_class"})}`}}const z={name:"PageFilterSearchHighlightSearchClass",components:{AlohaExample:p},setup(){const{codeJs:e}=O();return{codeJs:e}}};function W(e,r,n,c,u,g){const s=t("aloha-example");return h(),l(s,{"code-js":e.codeJs,header:"searchClass","is-code-visible-default":!0},null,8,["code-js"])}const D=o(z,[["render",W]]);function q(){return{codeJs:`filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "ipsum" });
// ${i("Lorem ipsum dolor sit amet consectetur adipisicing elit.",{searchModel:"ipsum"})}

filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "it" });
// ${i("Lorem ipsum dolor sit amet consectetur adipisicing elit.",{searchModel:"it"})}

filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "aloha" });
// ${i("Lorem ipsum dolor sit amet consectetur adipisicing elit.",{searchModel:"aloha"})}`}}const Q={name:"PageFilterSearchHighlightSearchModel",components:{AlohaExample:p},setup(){const{codeJs:e}=q();return{codeJs:e}}};function K(e,r,n,c,u,g){const s=t("aloha-example");return h(),l(s,{"code-js":e.codeJs,header:"searchModel","is-code-visible-default":!0},null,8,["code-js"])}const X=o(Q,[["render",K]]);function Y(){return{codeJs:`filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "ipsum", tag: "strong" });
// ${i("Lorem ipsum dolor sit amet consectetur adipisicing elit.",{searchModel:"ipsum",tag:"strong"})}`}}const Z={name:"PageFilterSearchHighlightTag",components:{AlohaExample:p},setup(){const{codeJs:e}=Y();return{codeJs:e}}};function ee(e,r,n,c,u,g){const s=t("aloha-example");return h(),l(s,{"code-js":e.codeJs,header:"tag","is-code-visible-default":!0},null,8,["code-js"])}const te=o(Z,[["render",ee]]);function se(){return{argumentsText:[{value:"value",types:["String"],text:"_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_VALUE_"},{value:'[searchModel=""]',types:["String"],text:"_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_SEARCH_MODEL_"},{value:'[searchClass="a_search_highlight"]',types:["String"],text:"_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_SEARCH_CLASS_"},{value:'[tag="mark"]',types:["String"],text:"_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_TAG_"},{value:"[attributes=[]]",types:["String"],text:"_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_ATTRIBUTES_"},{value:"[caseSensitive=false]",types:["Boolean"],text:"_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_CASE_SENSITIVE_"},{value:"[isHtml=false]",types:["Boolean"],text:"_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_IS_HTML_"}]}}function ie(){return{pageTitle:"filterSearchHighlight"}}const ae=`import {
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

describe("filterSearchHighlight with isHtml=true", () => {
  it("should highlight 'Vue' inside strong tag and ignore href attribute", () => {
    const input = "Aloha <strong>Vue</strong> is a <a href=\\"https://vue.com\\">framework</a>";
    const result = filterSearchHighlight(input, { searchModel: "vue", isHtml: true });

    expect(result).toBe("Aloha <strong><mark class=\\"a_search_highlight\\">Vue</mark></strong> is a <a href=\\"https://vue.com\\">framework</a>");
  });

  it("should highlight multiple occurrences of 'Vue' across different tags", () => {
    const input = "<div><p>Vue is amazing.</p><span>Vue framework</span></div>";
    const result = filterSearchHighlight(input, { searchModel: "Vue", isHtml: true });

    expect(result).toBe("<div><p><mark class=\\"a_search_highlight\\">Vue</mark> is amazing.</p><span><mark class=\\"a_search_highlight\\">Vue</mark> framework</span></div>");
  });

  it("should not break HTML structure when highlighting text", () => {
    const input = "<div><h1>Vue.js</h1><p>This is a Vue framework.</p></div>";
    const result = filterSearchHighlight(input, { searchModel: "Vue", isHtml: true });

    expect(result).toBe("<div><h1><mark class=\\"a_search_highlight\\">Vue</mark>.js</h1><p>This is a <mark class=\\"a_search_highlight\\">Vue</mark> framework.</p></div>");
  });

  it("should NOT highlight 'Vue.js' if it is split across multiple tags", () => {
    const input = "<p>Welcome to <strong>Vue</strong><span>.js</span> world.</p>";
    const result = filterSearchHighlight(input, { searchModel: "Vue.js", isHtml: true });

    expect(result).toBe("<p>Welcome to <strong>Vue</strong><span>.js</span> world.</p>");
  });

  it("should NOT highlight text inside HTML attributes", () => {
    const input = "<a href=\\"https://vue.com\\" title=\\"Vue framework\\">Click here</a>";
    const result = filterSearchHighlight(input, { searchModel: "Vue", isHtml: true });

    expect(result).toBe("<a href=\\"https://vue.com\\" title=\\"Vue framework\\">Click here</a>");
  });
});
`,re={name:"PageFilterSearchHighlight",components:{AlohaPage:k,ATranslation:T,PageFilterArguments:P,PageFilterImportCompositionApi:L,PageFilterImportFunction:E,PageFilterSearchHighlightAttributes:J,PageFilterSearchHighlightCaseSensitive:j,PageFilterSearchHighlightIsHtml:U,PageFilterSearchHighlightSearchClass:D,PageFilterSearchHighlightSearchModel:X,PageFilterSearchHighlightTag:te,PageFilterTest:I},setup(){const{pageTitle:e}=ie(),{argumentsText:r}=se();return{argumentsText:r,pageTitle:e,test:ae}}};function ne(e,r,n,c,u,g){const s=t("a-translation"),m=t("page-filter-import-function"),d=t("page-filter-import-composition-api"),_=t("page-filter-arguments"),f=t("page-filter-search-highlight-search-model"),H=t("page-filter-search-highlight-search-class"),S=t("page-filter-search-highlight-tag"),v=t("page-filter-search-highlight-attributes"),A=t("page-filter-search-highlight-case-sensitive"),M=t("page-filter-search-highlight-is-html"),V=t("page-filter-test"),$=t("aloha-page");return h(),l($,{"page-title":e.pageTitle},{body:x(()=>[a(s,{tag:"p",html:"_PAGE_FILTER_SEARCH_HIGHLIGHT_DESCRIPTION_"}),a(m,{"function-name":"filterSearchHighlight","type-import":"filters"}),a(d,{"function-name":"filterSearchHighlight"}),a(_,{"arguments-text":e.argumentsText,"function-description":'filterSearchHighlight(value, { [searchModel=""], [searchClass="a_search_highlight"], [tag="mark"], [attributes=[]], [caseSensitive=false], [isHtml=false] })'},null,8,["arguments-text"]),a(f),a(H),a(S),a(v),a(A),a(M),a(V,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const Ve=o(re,[["render",ne]]);export{Ve as default};
