import{t as e}from"./chunk.AlohaPage.DkILLbn5.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.ZGahdob1.js";import{t as i}from"./chunk.PageFilterImportCompositionApi.CRE9j6zA.js";import{t as a}from"./chunk.AlohaExample.BXW-VBsT.js";import{gt as o,qt as s}from"./bundle.index.b2KYNVgN.js";import{$t as c,It as l,Vt as u,rn as d,sn as f}from"./chunk.vendor.BvryzG0o.js";import{t as p}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function m(){return{codeJs:`filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "ipsum", attributes: ["data-aloha='search'", "title='Highlight'"] });
// ${o(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,{searchModel:`ipsum`,attributes:[`data-aloha='search'`,`title='Highlight'`]})}`}}var h={name:`PageFilterSearchHighlightAttributes`,components:{AlohaExample:a},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=d(`aloha-example`);return c(),l(o,{"code-js":e.codeJs,header:`attributes`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=p(h,[[`render`,g]]);function v(){return{codeJs:`filterSearchHighlight("Aloha Vue vue.", { searchModel: "Vue", caseSensitive: true });
// ${o(`Aloha Vue vue.`,{searchModel:`Vue`,caseSensitive:!0})}

filterSearchHighlight("Aloha Vue vue.", { searchModel: "Vue", caseSensitive: false });
// ${o(`Aloha Vue vue.`,{searchModel:`Vue`,caseSensitive:!1})}`}}var y={name:`PageFilterSearchHighlightAttributes`,components:{AlohaExample:a},setup(){let{codeJs:e}=v();return{codeJs:e}}};function b(e,t,n,r,i,a){let o=d(`aloha-example`);return c(),l(o,{"code-js":e.codeJs,header:`caseSensitive`,"is-code-visible-default":!0},null,8,[`code-js`])}var x=p(y,[[`render`,b]]);function S(){return{codeJs:`filterSearchHighlight("Aloha <strong>Vue</strong> is a <a href="https://vue.com">framework</a>", { searchModel: "vue", isHtml: true });
// ${o(`Aloha <strong>Vue</strong> is a <a href="https://vue.com">framework</a>`,{searchModel:`vue`,isHtml:!0})}

filterSearchHighlight("<div><p>Vue is amazing.</p><span>Vue framework</span></div>", { searchModel: "vue", isHtml: true });
// ${o(`<div><p>Vue is amazing.</p><span>Vue framework</span></div>`,{searchModel:`Vue`,isHtml:!0})}

filterSearchHighlight("<div><h1>Vue.js</h1><p>This is a Vue framework.</p></div>", { searchModel: "vue", isHtml: true });
// ${o(`<div><h1>Vue.js</h1><p>This is a Vue framework.</p></div>`,{searchModel:`Vue`,isHtml:!0})}

filterSearchHighlight("<p>Welcome to <strong>Vue</strong><span>.js</span> world.</p>", { searchModel: "vue", isHtml: true });
// ${o(`<p>Welcome to <strong>Vue</strong><span>.js</span> world.</p>`,{searchModel:`Vue`,isHtml:!0})}`}}var C={name:`PageFilterSearchHighlightIsHtml`,components:{AlohaExample:a},setup(){let{codeJs:e}=S();return{codeJs:e}}};function w(e,t,n,r,i,a){let o=d(`aloha-example`);return c(),l(o,{"code-js":e.codeJs,header:`isHtml`,"is-code-visible-default":!0},null,8,[`code-js`])}var T=p(C,[[`render`,w]]);function E(){return{codeJs:`filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "ipsum", searchClass: "test_class" });
// ${o(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,{searchModel:`ipsum`,searchClass:`test_class`})}`}}var D={name:`PageFilterSearchHighlightSearchClass`,components:{AlohaExample:a},setup(){let{codeJs:e}=E();return{codeJs:e}}};function O(e,t,n,r,i,a){let o=d(`aloha-example`);return c(),l(o,{"code-js":e.codeJs,header:`searchClass`,"is-code-visible-default":!0},null,8,[`code-js`])}var k=p(D,[[`render`,O]]);function A(){return{codeJs:`filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "ipsum" });
// ${o(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,{searchModel:`ipsum`})}

filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "it" });
// ${o(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,{searchModel:`it`})}

filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "aloha" });
// ${o(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,{searchModel:`aloha`})}`}}var j={name:`PageFilterSearchHighlightSearchModel`,components:{AlohaExample:a},setup(){let{codeJs:e}=A();return{codeJs:e}}};function M(e,t,n,r,i,a){let o=d(`aloha-example`);return c(),l(o,{"code-js":e.codeJs,header:`searchModel`,"is-code-visible-default":!0},null,8,[`code-js`])}var N=p(j,[[`render`,M]]);function P(){return{codeJs:`filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "ipsum", tag: "strong" });
// ${o(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,{searchModel:`ipsum`,tag:`strong`})}`}}var F={name:`PageFilterSearchHighlightTag`,components:{AlohaExample:a},setup(){let{codeJs:e}=P();return{codeJs:e}}};function I(e,t,n,r,i,a){let o=d(`aloha-example`);return c(),l(o,{"code-js":e.codeJs,header:`tag`,"is-code-visible-default":!0},null,8,[`code-js`])}var L=p(F,[[`render`,I]]);function R(){return{argumentsText:[{value:`value`,types:[`String`],text:`_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_VALUE_`},{value:`[searchModel=""]`,types:[`String`],text:`_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_SEARCH_MODEL_`},{value:`[searchClass="a_search_highlight"]`,types:[`String`],text:`_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_SEARCH_CLASS_`},{value:`[tag="mark"]`,types:[`String`],text:`_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_TAG_`},{value:`[attributes=[]]`,types:[`String`],text:`_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_ATTRIBUTES_`},{value:`[caseSensitive=false]`,types:[`Boolean`],text:`_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_CASE_SENSITIVE_`},{value:`[isHtml=false]`,types:[`Boolean`],text:`_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_IS_HTML_`}]}}function z(){return{pageTitle:`filterSearchHighlight`}}var B=`import {
  describe,
  expect,
  it,
} from "vitest";

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
`,V={name:`PageFilterSearchHighlight`,components:{AlohaPage:e,ATranslation:s,PageFilterArguments:n,PageFilterImportCompositionApi:i,PageFilterImportFunction:t,PageFilterSearchHighlightAttributes:_,PageFilterSearchHighlightCaseSensitive:x,PageFilterSearchHighlightIsHtml:T,PageFilterSearchHighlightSearchClass:k,PageFilterSearchHighlightSearchModel:N,PageFilterSearchHighlightTag:L,PageFilterTest:r},setup(){let{pageTitle:e}=z(),{argumentsText:t}=R();return{argumentsText:t,pageTitle:e,test:B}}};function H(e,t,n,r,i,a){let o=d(`a-translation`),s=d(`page-filter-import-function`),p=d(`page-filter-import-composition-api`),m=d(`page-filter-arguments`),h=d(`page-filter-search-highlight-search-model`),g=d(`page-filter-search-highlight-search-class`),_=d(`page-filter-search-highlight-tag`),v=d(`page-filter-search-highlight-attributes`),y=d(`page-filter-search-highlight-case-sensitive`),b=d(`page-filter-search-highlight-is-html`),x=d(`page-filter-test`),S=d(`aloha-page`);return c(),l(S,{"page-title":e.pageTitle},{body:f(()=>[u(o,{tag:`p`,html:`_PAGE_FILTER_SEARCH_HIGHLIGHT_DESCRIPTION_`}),u(s,{"function-name":`filterSearchHighlight`,"type-import":`filters`}),u(p,{"function-name":`filterSearchHighlight`}),u(m,{"arguments-text":e.argumentsText,"function-description":`filterSearchHighlight(value, { [searchModel=""], [searchClass="a_search_highlight"], [tag="mark"], [attributes=[]], [caseSensitive=false], [isHtml=false] })`},null,8,[`arguments-text`]),u(h),u(g),u(_),u(v),u(y),u(b),u(x,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var U=p(V,[[`render`,H]]);export{U as default};