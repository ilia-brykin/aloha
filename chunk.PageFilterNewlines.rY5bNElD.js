import{t as e}from"./chunk.AlohaPage.IS3NRfGI.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.BiQNU7rf.js";import{t as i}from"./chunk.PageFilterImportCompositionApi.r8Qpa9Lw.js";import{t as a}from"./chunk.AlohaExample.CDuUdjpI.js";import{jt as o,mn as s,t as c}from"./bundle.index.DikcaTJ9.js";import{Bt as l,Cn as u,Ht as d,Vt as f,an as p,ln as m,pn as h,qt as g}from"./chunk.vendor.SEynj6EJ.js";var _=`Aloha Street 1
12345 Honolulu

<b>Not bold</b> & safe`;function v(){return{codeJs:l(()=>`filterNewlines("Line 1\\nLine 2");
// ${o(`Line 1
Line 2`)}

filterNewlines("<b>Tom</b> & Jerry\\r\\nLine 2");
// ${o(`<b>Tom</b> & Jerry\r
Line 2`)}

// in a template: the result is escaped, so v-html or the prop html is safe
// <div v-html="filterNewlines(notes)"></div>
// <a-translation tag="div" :html="filterNewlines(notes)" />

// in a table column
// { label: "Notes", keyLabel: "notes", filter: "newlines" }`)}}var y={name:`PageFilterNewlinesExample`,components:{AlohaExample:a,ATranslation:s},setup(){let{codeJs:e}=v(),t=_;return{codeJs:e,html:o(_),text:t}}},b={class:`a_columns a_columns_count_2 a_columns_count_1_mobile`},x={class:`a_column a_column_1`},S={class:`a_mb_0`},C={class:`a_column a_column_1`},w=[`innerHTML`];function T(e,t,n,r,i,a){let o=m(`a-translation`),s=m(`aloha-example`);return p(),d(s,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},{default:h(()=>[f(`div`,b,[f(`div`,x,[g(o,{class:`a_text_bold`,tag:`div`,text:`_PAGE_FILTER_NEWLINES_EXAMPLE_TEXT_`}),f(`pre`,S,u(e.text),1)]),f(`div`,C,[g(o,{class:`a_text_bold`,tag:`div`,text:`_PAGE_FILTER_NEWLINES_EXAMPLE_RESULT_`}),f(`div`,{innerHTML:e.html},null,8,w)])])]),_:1},8,[`code-js`])}var E=c(y,[[`render`,T]]);function D(){return{argumentsText:[{value:`value`,types:[`String`],text:`_PAGE_FILTER_NEWLINES_ARGUMENTS_VALUE_`}]}}function O(){return{pageTitle:`filterNewlines`}}var k=`import {
  describe,
  expect,
  it,
} from "vitest";

import filterNewlines from "../filterNewlines.js";

describe("filterNewlines", () => {
  it("default", () => {
    expect(filterNewlines("Line 1\\nLine 2")).toBe("Line 1<br>Line 2");
    expect(filterNewlines("No line breaks")).toBe("No line breaks");
    expect(filterNewlines(42)).toBe("42");
  });

  it("all kinds of line breaks", () => {
    expect(filterNewlines("Windows\\r\\nMac\\rUnix\\nEnd")).toBe("Windows<br>Mac<br>Unix<br>End");
    expect(filterNewlines("Paragraph 1\\n\\nParagraph 2")).toBe("Paragraph 1<br><br>Paragraph 2");
  });

  it("escapes HTML", () => {
    expect(filterNewlines("<script>alert(1)<\/script>\\nTom & Jerry")).toBe("&lt;script&gt;alert(1)&lt;/script&gt;<br>Tom &amp; Jerry");
    expect(filterNewlines("<img src=x onerror=\\"alert('x')\\">")).toBe("&lt;img src=x onerror=&quot;alert(&#39;x&#39;)&quot;&gt;");
  });

  it("empty values", () => {
    expect(filterNewlines(undefined)).toBe("");
    expect(filterNewlines(null)).toBe("");
    expect(filterNewlines("")).toBe("");
  });
});
`,A={name:`PageFilterNewlines`,components:{AlohaPage:e,ATranslation:s,PageFilterArguments:n,PageFilterImportCompositionApi:i,PageFilterImportFunction:t,PageFilterNewlinesExample:E,PageFilterTest:r},setup(){let{pageTitle:e}=O(),{argumentsText:t}=D();return{argumentsText:t,pageTitle:e,test:k}}};function j(e,t,n,r,i,a){let o=m(`a-translation`),s=m(`page-filter-import-function`),c=m(`page-filter-import-composition-api`),l=m(`page-filter-arguments`),u=m(`page-filter-newlines-example`),f=m(`page-filter-test`),_=m(`aloha-page`);return p(),d(_,{"page-title":e.pageTitle},{body:h(()=>[g(o,{tag:`p`,html:`_PAGE_FILTER_NEWLINES_DESCRIPTION_`}),g(s,{"function-name":`filterNewlines`,"type-import":`filters`}),g(c,{"function-name":`filterNewlines`}),g(l,{"arguments-text":e.argumentsText,"function-description":`filterNewlines(value)`},null,8,[`arguments-text`]),g(u),g(f,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var M=c(A,[[`render`,j]]);export{M as default};