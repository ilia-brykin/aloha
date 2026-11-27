import{t as e}from"./chunk.AlohaPage.BIw9NYpI.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.CI3luh4y.js";import{t as i}from"./chunk.PageFilterImportCompositionApi.CoQWM7Rj.js";import{t as a}from"./chunk.AlohaExample.CEueonn8.js";import{Dt as o,mn as s,t as c}from"./bundle.index.Dor-y9Rj.js";import{Jt as l,Ut as u,mn as d,on as f,un as p}from"./chunk.vendor.Bjd2408Z.js";function m(){return{codeJs:`filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "ipsum", attributes: ["data-aloha='search'", "title='Highlight'"] });
// ${o(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,{searchModel:`ipsum`,attributes:[`data-aloha='search'`,`title='Highlight'`]})}`}}var h={name:`PageFilterSearchHighlightAttributes`,components:{AlohaExample:a},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=p(`aloha-example`);return f(),u(o,{"code-js":e.codeJs,header:`attributes`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=c(h,[[`render`,g]]);function v(){return{codeJs:`filterSearchHighlight("Aloha Vue vue.", { searchModel: "Vue", caseSensitive: true });
// ${o(`Aloha Vue vue.`,{searchModel:`Vue`,caseSensitive:!0})}

filterSearchHighlight("Aloha Vue vue.", { searchModel: "Vue", caseSensitive: false });
// ${o(`Aloha Vue vue.`,{searchModel:`Vue`,caseSensitive:!1})}`}}var y={name:`PageFilterSearchHighlightAttributes`,components:{AlohaExample:a},setup(){let{codeJs:e}=v();return{codeJs:e}}};function b(e,t,n,r,i,a){let o=p(`aloha-example`);return f(),u(o,{"code-js":e.codeJs,header:`caseSensitive`,"is-code-visible-default":!0},null,8,[`code-js`])}var x=c(y,[[`render`,b]]);function S(){return{codeJs:`filterSearchHighlight("Aloha <strong>Vue</strong> is a <a href="https://vue.com">framework</a>", { searchModel: "vue", isHtml: true });
// ${o(`Aloha <strong>Vue</strong> is a <a href="https://vue.com">framework</a>`,{searchModel:`vue`,isHtml:!0})}

filterSearchHighlight("<div><p>Vue is amazing.</p><span>Vue framework</span></div>", { searchModel: "vue", isHtml: true });
// ${o(`<div><p>Vue is amazing.</p><span>Vue framework</span></div>`,{searchModel:`Vue`,isHtml:!0})}

filterSearchHighlight("<div><h1>Vue.js</h1><p>This is a Vue framework.</p></div>", { searchModel: "vue", isHtml: true });
// ${o(`<div><h1>Vue.js</h1><p>This is a Vue framework.</p></div>`,{searchModel:`Vue`,isHtml:!0})}

filterSearchHighlight("<p>Welcome to <strong>Vue</strong><span>.js</span> world.</p>", { searchModel: "vue", isHtml: true });
// ${o(`<p>Welcome to <strong>Vue</strong><span>.js</span> world.</p>`,{searchModel:`Vue`,isHtml:!0})}`}}var C={name:`PageFilterSearchHighlightIsHtml`,components:{AlohaExample:a},setup(){let{codeJs:e}=S();return{codeJs:e}}};function w(e,t,n,r,i,a){let o=p(`aloha-example`);return f(),u(o,{"code-js":e.codeJs,header:`isHtml`,"is-code-visible-default":!0},null,8,[`code-js`])}var T=c(C,[[`render`,w]]);function E(){return{codeJs:`filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "ipsum", searchClass: "test_class" });
// ${o(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,{searchModel:`ipsum`,searchClass:`test_class`})}`}}var D={name:`PageFilterSearchHighlightSearchClass`,components:{AlohaExample:a},setup(){let{codeJs:e}=E();return{codeJs:e}}};function O(e,t,n,r,i,a){let o=p(`aloha-example`);return f(),u(o,{"code-js":e.codeJs,header:`searchClass`,"is-code-visible-default":!0},null,8,[`code-js`])}var k=c(D,[[`render`,O]]);function A(){return{codeJs:`filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "ipsum" });
// ${o(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,{searchModel:`ipsum`})}

filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "it" });
// ${o(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,{searchModel:`it`})}

filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "aloha" });
// ${o(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,{searchModel:`aloha`})}`}}var j={name:`PageFilterSearchHighlightSearchModel`,components:{AlohaExample:a},setup(){let{codeJs:e}=A();return{codeJs:e}}};function M(e,t,n,r,i,a){let o=p(`aloha-example`);return f(),u(o,{"code-js":e.codeJs,header:`searchModel`,"is-code-visible-default":!0},null,8,[`code-js`])}var N=c(j,[[`render`,M]]);function P(){return{codeJs:`filterSearchHighlight("Lorem ipsum dolor sit amet consectetur adipisicing elit.", { searchModel: "ipsum", tag: "strong" });
// ${o(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,{searchModel:`ipsum`,tag:`strong`})}`}}var F={name:`PageFilterSearchHighlightTag`,components:{AlohaExample:a},setup(){let{codeJs:e}=P();return{codeJs:e}}};function I(e,t,n,r,i,a){let o=p(`aloha-example`);return f(),u(o,{"code-js":e.codeJs,header:`tag`,"is-code-visible-default":!0},null,8,[`code-js`])}var L=c(F,[[`render`,I]]);function R(){return{argumentsText:[{value:`value`,types:[`String`],text:`_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_VALUE_`},{value:`[searchModel=""]`,types:[`String`],text:`_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_SEARCH_MODEL_`},{value:`[searchClass="a_search_highlight"]`,types:[`String`],text:`_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_SEARCH_CLASS_`},{value:`[tag="mark"]`,types:[`String`],text:`_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_TAG_`},{value:`[attributes=[]]`,types:[`String`],text:`_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_ATTRIBUTES_`},{value:`[caseSensitive=false]`,types:[`Boolean`],text:`_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_CASE_SENSITIVE_`},{value:`[isHtml=false]`,types:[`Boolean`],text:`_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_IS_HTML_`}]}}function z(){return{pageTitle:`filterSearchHighlight`}}var B=`import {
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
`,V={name:`PageFilterSearchHighlight`,components:{AlohaPage:e,ATranslation:s,PageFilterArguments:n,PageFilterImportCompositionApi:i,PageFilterImportFunction:t,PageFilterSearchHighlightAttributes:_,PageFilterSearchHighlightCaseSensitive:x,PageFilterSearchHighlightIsHtml:T,PageFilterSearchHighlightSearchClass:k,PageFilterSearchHighlightSearchModel:N,PageFilterSearchHighlightTag:L,PageFilterTest:r},setup(){let{pageTitle:e}=z(),{argumentsText:t}=R();return{argumentsText:t,pageTitle:e,test:B}}};function H(e,t,n,r,i,a){let o=p(`a-translation`),s=p(`page-filter-import-function`),c=p(`page-filter-import-composition-api`),m=p(`page-filter-arguments`),h=p(`page-filter-search-highlight-search-model`),g=p(`page-filter-search-highlight-search-class`),_=p(`page-filter-search-highlight-tag`),v=p(`page-filter-search-highlight-attributes`),y=p(`page-filter-search-highlight-case-sensitive`),b=p(`page-filter-search-highlight-is-html`),x=p(`page-filter-test`),S=p(`aloha-page`);return f(),u(S,{"page-title":e.pageTitle},{body:d(()=>[l(o,{tag:`p`,html:`_PAGE_FILTER_SEARCH_HIGHLIGHT_DESCRIPTION_`}),l(s,{"function-name":`filterSearchHighlight`,"type-import":`filters`}),l(c,{"function-name":`filterSearchHighlight`}),l(m,{"arguments-text":e.argumentsText,"function-description":`filterSearchHighlight(value, { [searchModel=""], [searchClass="a_search_highlight"], [tag="mark"], [attributes=[]], [caseSensitive=false], [isHtml=false] })`},null,8,[`arguments-text`]),l(h),l(g),l(_),l(v),l(y),l(b),l(x,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var U=c(V,[[`render`,H]]);export{U as default};