import{t as e}from"./chunk.AlohaPage.ByBnVwRd.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.B5kPwqOi.js";import{t as i}from"./chunk.PageFilterImportCompositionApi.8B6jn8iR.js";import{t as a}from"./chunk.AlohaExample.DG3heSnw.js";import{Ot as o,it as s}from"./bundle.index.DCWk6bs4.js";import{Bt as c,It as l,Zt as u,an as d,tn as f}from"./chunk.vendor.H0cZuFAV.js";import{t as p}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function m(){return{codeJs:`filterJson({ x: 5, y: 6 }, { isHtml: true, class: "aloha" });
// ${o({x:5,y:6},{isHtml:!0,class:`aloha`})}`}}var h={name:`PageFilterJsonClass`,components:{AlohaExample:a},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=f(`aloha-example`);return u(),l(o,{"code-js":e.codeJs,header:`jsonClass`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=p(h,[[`render`,g]]);function v(){return{codeJs:`filterJson({ x: 5, y: 6 });
// ${o({x:5,y:6})}

filterJson({ x: "aloha", y: 6 });
// ${o({x:`aloha`,y:6})}

filterJson(true);
// ${o(!0)}

filterJson("aloha");
// ${o(`aloha`)}

filterJson([1, "false", false]);
// ${o([1,`false`,!1])}

filterJson([NaN, null, Infinity, undefined]);
// ${o([NaN,null,1/0,void 0])}`}}var y={name:`PageFilterJsonExample`,components:{AlohaExample:a},setup(){let{codeJs:e}=v();return{codeJs:e}}};function b(e,t,n,r,i,a){let o=f(`aloha-example`);return u(),l(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var x=p(y,[[`render`,b]]);function S(){return{codeJs:`filterJson({ x: 5, y: 6 }, { isHtml: true });
// ${o({x:5,y:6},{isHtml:!0})}

filterJson({ x: 5, y: 6 }, { isHtml: false });
// ${o({x:5,y:6},{isHtml:!1})}`}}var C={name:`PageFilterJsonIsHtml`,components:{AlohaExample:a},setup(){let{codeJs:e}=S();return{codeJs:e}}};function w(e,t,n,r,i,a){let o=f(`aloha-example`);return u(),l(o,{"code-js":e.codeJs,header:`isHtml`,"is-code-visible-default":!0},null,8,[`code-js`])}var T=p(C,[[`render`,w]]);function E(){function e(e,t){if(typeof t!=`string`)return t}let t={foundation:`Mozilla`,model:`box`,week:45,transport:`car`,month:7};return{codeJs:`function replacer(key, value) {
  // Filtering out properties
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

const aloha = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};

filterJson(aloha, { replacer });
// ${o(t,{replacer:e})}

filterJson(aloha, { replacer: ["week", "month", "model"] });
// ${o(t,{replacer:[`week`,`month`,`model`]})}`}}var D={name:`PageFilterJsonReplacer`,components:{AlohaExample:a},setup(){let{codeJs:e}=E();return{codeJs:e}}};function O(e,t,n,r,i,a){let o=f(`aloha-example`);return u(),l(o,{"code-js":e.codeJs,header:`replacer`,"is-code-visible-default":!0},null,8,[`code-js`])}var k=p(D,[[`render`,O]]);function A(){return{codeJs:`filterJson({ x: 5, y: 6 }, { space: 0 });
// ${o({x:5,y:6},{space:0})}

filterJson({ x: 5, y: 6 }, { space: 1 });
// ${o({x:5,y:6},{space:1})}

filterJson({ x: 5, y: 6 }, { space: "\\t" });
// ${o({x:5,y:6},{space:`	`})}`}}var j={name:`PageFilterJsonSpace`,components:{AlohaExample:a},setup(){let{codeJs:e}=A();return{codeJs:e}}};function M(e,t,n,r,i,a){let o=f(`aloha-example`);return u(),l(o,{"code-js":e.codeJs,header:`space`,"is-code-visible-default":!0},null,8,[`code-js`])}var N=p(j,[[`render`,M]]);function P(){return{codeJs:`filterJson({ x: 5, y: 6 }, { isHtml: true, tag: "pre" });
// ${o({x:5,y:6},{isHtml:!0,tag:`pre`})}

filterJson({ x: 5, y: 6 }, { isHtml: true, tag: "div" });
// ${o({x:5,y:6},{isHtml:!0,tag:`div`})}`}}var F={name:`PageFilterJsonTag`,components:{AlohaExample:a},setup(){let{codeJs:e}=P();return{codeJs:e}}};function I(e,t,n,r,i,a){let o=f(`aloha-example`);return u(),l(o,{"code-js":e.codeJs,header:`tag`,"is-code-visible-default":!0},null,8,[`code-js`])}var L=p(F,[[`render`,I]]);function R(){return{argumentsText:[{value:`value`,types:[`Any`],text:`_PAGE_FILTER_JSON_ARGUMENTS_VALUE_`},{value:`[replacer]`,types:[`Function`,`Array`],text:`_PAGE_FILTER_JSON_ARGUMENTS_REPLACER_`},{value:`[space=2]`,types:[`Number`,`String`],text:`_PAGE_FILTER_JSON_ARGUMENTS_SPACE_`},{value:`[isHtml=false]`,types:[`Boolean`],text:`_PAGE_FILTER_JSON_ARGUMENTS_IS_HTML_`},{value:`[jsonClass=a_code_content]`,types:[`String`],text:`_PAGE_FILTER_JSON_ARGUMENTS_JSON_CLASS_`},{value:`[tag=pre]`,types:[`String`],text:`_PAGE_FILTER_JSON_ARGUMENTS_TAG_`}]}}function z(){return{pageTitle:`filterJson`}}var B=`import {
  describe,
  expect,
  it,
} from "vitest";

import filterJson from "../filterJson";

describe("filterJson", () => {
  it("returns empty string when input value is null", () => {
    expect(filterJson(null)).toBe("");
  });

  it("returns empty string when input value is undefined", () => {
    expect(filterJson(undefined)).toBe("");
  });

  it("returns a stringified JSON when input value is a valid JSON", () => {
    const value = { key: "value" };
    const expectedOutput = JSON.stringify(value, null, 2);

    expect(filterJson(value)).toBe(expectedOutput);
  });

  it("returns empty string when an error occurs during stringifying", () => {
    const circularReference = {};
    circularReference.self = circularReference;

    expect(filterJson(circularReference)).toBe("");
  });

  it("returns formatted HTML output when isHtml is true", () => {
    const value = { key: "value" };
    const expectedOutput = \`<pre class="a_code_content">\${ JSON.stringify(value, null, 2) }</pre>\`;

    expect(filterJson(value, { isHtml: true })).toBe(expectedOutput);
  });

  it("returns formatted HTML output with custom class", () => {
    const value = { key: "value" };
    const expectedOutput = \`<pre class="custom_class">\${ JSON.stringify(value, null, 2) }</pre>\`;

    expect(filterJson(value, { isHtml: true, jsonClass: "custom_class" })).toBe(expectedOutput);
  });

  it("returns formatted HTML output with custom tag", () => {
    const value = { key: "value" };
    const expectedOutput = \`<div class="a_code_content">\${ JSON.stringify(value, null, 2) }</div>\`;

    expect(filterJson(value, { isHtml: true, tag: "div" })).toBe(expectedOutput);
  });

  it("returns formatted HTML output with custom tag and class", () => {
    const value = { key: "value" };
    const expectedOutput = \`<span class="custom_class">\${ JSON.stringify(value, null, 2) }</span>\`;

    expect(filterJson(value, { isHtml: true, tag: "span", jsonClass: "custom_class" })).toBe(expectedOutput);
  });

  it("returns correctly formatted JSON when using a replacer function", () => {
    const value = { key1: "value1", key2: "value2" };
    const replacer = (key, val) => (key === "key1" ? undefined : val);
    const expectedOutput = JSON.stringify(value, replacer, 2);

    expect(filterJson(value, { replacer })).toBe(expectedOutput);
  });

  it("returns correctly formatted JSON with a custom space indentation", () => {
    const value = { key: "value" };
    const expectedOutput = JSON.stringify(value, null, 4);

    expect(filterJson(value, { space: 4 })).toBe(expectedOutput);
  });
});
`,V={name:`PageFilterJson`,components:{AlohaPage:e,ATranslation:s,PageFilterArguments:n,PageFilterImportCompositionApi:i,PageFilterImportFunction:t,PageFilterJsonClass:_,PageFilterJsonExample:x,PageFilterJsonIsHtml:T,PageFilterJsonReplacer:k,PageFilterJsonSpace:N,PageFilterJsonTag:L,PageFilterTest:r},setup(){let{pageTitle:e}=z(),{argumentsText:t}=R();return{argumentsText:t,pageTitle:e,test:B}}};function H(e,t,n,r,i,a){let o=f(`a-translation`),s=f(`page-filter-import-function`),p=f(`page-filter-import-composition-api`),m=f(`page-filter-arguments`),h=f(`page-filter-json-example`),g=f(`page-filter-json-space`),_=f(`page-filter-json-replacer`),v=f(`page-filter-json-is-html`),y=f(`page-filter-json-class`),b=f(`page-filter-json-tag`),x=f(`page-filter-test`),S=f(`aloha-page`);return u(),l(S,{"page-title":e.pageTitle},{body:d(()=>[c(o,{tag:`p`,html:`_PAGE_FILTER_JSON_DESCRIPTION_`}),c(s,{"function-name":`filterJson`,"type-import":`filters`}),c(p,{"function-name":`filterJson`}),c(m,{"arguments-text":e.argumentsText,"function-description":`filterJson(value, { [replacer], [space=2], [isHtml=false], [jsonClass="a_code_content"], [tag="pre"] })`},null,8,[`arguments-text`]),c(h),c(g),c(_),c(v),c(y),c(b),c(x,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var U=p(V,[[`render`,H]]);export{U as default};