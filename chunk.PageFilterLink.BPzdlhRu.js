import{t as e}from"./chunk.AlohaPage.BqJxHLnf.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.BTiC1qjs.js";import{t as i}from"./chunk.PageFilterImportCompositionApi.BZEzPsj4.js";import{t as a}from"./chunk.AlohaExample.MiYgZhxO.js";import{Ct as o,qt as s}from"./bundle.index.nBnUcnwG.js";import{$t as c,It as l,Vt as u,rn as d,sn as f}from"./chunk.vendor.BvryzG0o.js";import{t as p}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function m(){return{codeJs:`filterLink("example.com");
// ${o(`example.com`)}

filterLink("https://example.com");
// ${o(`https://example.com`)}`}}var h={name:`PageFilterLinkExample`,components:{AlohaExample:a},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=d(`aloha-example`);return c(),l(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=p(h,[[`render`,g]]);function v(){return{codeJs:`filterLink("example.com", { linkClass: "a_btn a_btn_link" });
// ${o(`example.com`,{linkClass:`a_btn a_btn_link`})}`}}var y={name:`PageFilterLinkLinkClass`,components:{AlohaExample:a},setup(){let{codeJs:e}=v();return{codeJs:e}}};function b(e,t,n,r,i,a){let o=d(`aloha-example`);return c(),l(o,{"code-js":e.codeJs,header:`linkClass`,"is-code-visible-default":!0},null,8,[`code-js`])}var x=p(y,[[`render`,b]]);function S(){return{codeJs:`filterLink("example.com", { linkText: "example" });
// ${o(`example.com`,{linkText:`example`})}

filterLink("https://example.com", { linkText: "Aloha" });
// ${o(`https://example.com`,{linkText:`Aloha`})}`}}var C={name:`PageFilterLinkLinkText`,components:{AlohaExample:a},setup(){let{codeJs:e}=S();return{codeJs:e}}};function w(e,t,n,r,i,a){let o=d(`aloha-example`);return c(),l(o,{"code-js":e.codeJs,header:`linkText`,"is-code-visible-default":!0},null,8,[`code-js`])}var T=p(C,[[`render`,w]]);function E(){return{codeJs:`filterLink("example.com", { protocol: "" });
// ${o(`example.com`,{protocol:``})}

filterLink("https://example.com", { protocol: "http://" });
// ${o(`example.com`,{protocol:`http://`})}`}}var D={name:`PageFilterLinkProtocol`,components:{AlohaExample:a},setup(){let{codeJs:e}=E();return{codeJs:e}}};function O(e,t,n,r,i,a){let o=d(`aloha-example`);return c(),l(o,{"code-js":e.codeJs,header:`protocol`,"is-code-visible-default":!0},null,8,[`code-js`])}var k=p(D,[[`render`,O]]);function A(){return{codeJs:`filterLink("example.com", { target: "_blank" });
// ${o(`example.com`,{target:`_blank`})}

filterLink("https://example.com", { target: "_self" });
// ${o(`example.com`,{target:`_self`})}

filterLink("https://example.com", { target: "_parent" });
// ${o(`example.com`,{target:`_parent`})}

filterLink("https://example.com", { target: "_top" });
// ${o(`example.com`,{target:`_top`})}`}}var j={name:`PageFilterLinkTarget`,components:{AlohaExample:a},setup(){let{codeJs:e}=A();return{codeJs:e}}};function M(e,t,n,r,i,a){let o=d(`aloha-example`);return c(),l(o,{"code-js":e.codeJs,header:`target`,"is-code-visible-default":!0},null,8,[`code-js`])}var N=p(j,[[`render`,M]]);function P(){return{argumentsText:[{value:`url`,types:[`String`],text:`_PAGE_FILTER_LINK_ARGUMENTS_URL_`},{value:`[linkText=""]`,types:[`String`],text:`_PAGE_FILTER_LINK_ARGUMENTS_LINK_TEXT_`},{value:`[protocol="https://"]`,types:[`String`],text:`_PAGE_FILTER_LINK_ARGUMENTS_PROTOCOL_`},{value:`[target=""]`,types:[`String`],text:`_PAGE_FILTER_LINK_ARGUMENTS_TARGET_`},{value:`[linkClass=""]`,types:[`String`],text:`_PAGE_FILTER_LINK_ARGUMENTS_LINK_CLASS_`}]}}function F(){return{pageTitle:`filterLink`}}var I=`import {
  describe,
  expect,
  it,
} from "vitest";

import filterLink from "../filterLink";

describe("filterLink", () => {
  it("default behavior", () => {
    expect(filterLink("example.com")).toBe("<a href=\\"https://example.com\\">example.com</a>");
    expect(filterLink("http://example.com")).toBe("<a href=\\"http://example.com\\">http://example.com</a>");
  });

  it("with linkText", () => {
    expect(filterLink("example.com", { linkText: "Example" })).toBe("<a href=\\"https://example.com\\">Example</a>");
  });

  it("with protocol", () => {
    expect(filterLink("example.com", { protocol: "http://" })).toBe("<a href=\\"http://example.com\\">example.com</a>");
  });

  it("with target", () => {
    expect(filterLink("example.com", { target: "_blank" })).toBe("<a href=\\"https://example.com\\" target=\\"_blank\\">example.com</a>");
  });

  it("with linkClass", () => {
    expect(filterLink("example.com", { linkClass: "custom-class" })).toBe("<a href=\\"https://example.com\\" class=\\"custom-class\\">example.com</a>");
  });

  it("invalid URL", () => {
    expect(filterLink(null)).toBe("");
    expect(filterLink(undefined)).toBe("");
    expect(filterLink(123)).toBe("");
  });

  it("combined options", () => {
    expect(filterLink("example.com", { linkText: "Example", target: "_blank", linkClass: "custom-class" }))
      .toBe("<a href=\\"https://example.com\\" target=\\"_blank\\" class=\\"custom-class\\">Example</a>");
  });
});
`,L={name:`PageFilterLink`,components:{AlohaPage:e,ATranslation:s,PageFilterArguments:n,PageFilterImportCompositionApi:i,PageFilterImportFunction:t,PageFilterLinkExample:_,PageFilterLinkLinkClass:x,PageFilterLinkLinkText:T,PageFilterLinkProtocol:k,PageFilterLinkTarget:N,PageFilterTest:r},setup(){let{pageTitle:e}=F(),{argumentsText:t}=P();return{argumentsText:t,pageTitle:e,test:I}}};function R(e,t,n,r,i,a){let o=d(`a-translation`),s=d(`page-filter-import-function`),p=d(`page-filter-import-composition-api`),m=d(`page-filter-arguments`),h=d(`page-filter-link-example`),g=d(`page-filter-link-link-text`),_=d(`page-filter-link-protocol`),v=d(`page-filter-link-target`),y=d(`page-filter-link-link-class`),b=d(`page-filter-test`),x=d(`aloha-page`);return c(),l(x,{"page-title":e.pageTitle},{body:f(()=>[u(o,{tag:`p`,html:`_PAGE_FILTER_LINK_DESCRIPTION_`}),u(s,{"function-name":`filterLink`,"type-import":`filters`}),u(p,{"function-name":`filterLink`}),u(m,{"arguments-text":e.argumentsText,"function-description":`filterLink(url, { [linkText=""], [protocol="https://"], [target=""], [linkClass=""] })`},null,8,[`arguments-text`]),u(h),u(g),u(_),u(v),u(y),u(b,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var z=p(L,[[`render`,R]]);export{z as default};