import{t as e}from"./chunk.AlohaPage.sulZ3BAz.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.HIbnCuB_.js";import{t as i}from"./chunk.PageFilterImportCompositionApi.DRj5dFQL.js";import{t as a}from"./chunk.AlohaExample.Dh7-vA8e.js";import{et as o,gt as s}from"./bundle.index.Csp1_sOL.js";import{Ft as c,Xt as l,en as u,in as d,zt as f}from"./chunk.vendor.Cx127fe1.js";import{t as p}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function m(){return{codeJs:`filterLink("example.com");
// ${s(`example.com`)}

filterLink("https://example.com");
// ${s(`https://example.com`)}`}}var h={name:`PageFilterLinkExample`,components:{AlohaExample:a},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=u(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=p(h,[[`render`,g]]);function v(){return{codeJs:`filterLink("example.com", { linkClass: "a_btn a_btn_link" });
// ${s(`example.com`,{linkClass:`a_btn a_btn_link`})}`}}var y={name:`PageFilterLinkLinkClass`,components:{AlohaExample:a},setup(){let{codeJs:e}=v();return{codeJs:e}}};function b(e,t,n,r,i,a){let o=u(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`linkClass`,"is-code-visible-default":!0},null,8,[`code-js`])}var x=p(y,[[`render`,b]]);function S(){return{codeJs:`filterLink("example.com", { linkText: "example" });
// ${s(`example.com`,{linkText:`example`})}

filterLink("https://example.com", { linkText: "Aloha" });
// ${s(`https://example.com`,{linkText:`Aloha`})}`}}var C={name:`PageFilterLinkLinkText`,components:{AlohaExample:a},setup(){let{codeJs:e}=S();return{codeJs:e}}};function w(e,t,n,r,i,a){let o=u(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`linkText`,"is-code-visible-default":!0},null,8,[`code-js`])}var T=p(C,[[`render`,w]]);function E(){return{codeJs:`filterLink("example.com", { protocol: "" });
// ${s(`example.com`,{protocol:``})}

filterLink("https://example.com", { protocol: "http://" });
// ${s(`example.com`,{protocol:`http://`})}`}}var D={name:`PageFilterLinkProtocol`,components:{AlohaExample:a},setup(){let{codeJs:e}=E();return{codeJs:e}}};function O(e,t,n,r,i,a){let o=u(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`protocol`,"is-code-visible-default":!0},null,8,[`code-js`])}var k=p(D,[[`render`,O]]);function A(){return{codeJs:`filterLink("example.com", { target: "_blank" });
// ${s(`example.com`,{target:`_blank`})}

filterLink("https://example.com", { target: "_self" });
// ${s(`example.com`,{target:`_self`})}

filterLink("https://example.com", { target: "_parent" });
// ${s(`example.com`,{target:`_parent`})}

filterLink("https://example.com", { target: "_top" });
// ${s(`example.com`,{target:`_top`})}`}}var j={name:`PageFilterLinkTarget`,components:{AlohaExample:a},setup(){let{codeJs:e}=A();return{codeJs:e}}};function M(e,t,n,r,i,a){let o=u(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`target`,"is-code-visible-default":!0},null,8,[`code-js`])}var N=p(j,[[`render`,M]]);function P(){return{argumentsText:[{value:`url`,types:[`String`],text:`_PAGE_FILTER_LINK_ARGUMENTS_URL_`},{value:`[linkText=""]`,types:[`String`],text:`_PAGE_FILTER_LINK_ARGUMENTS_LINK_TEXT_`},{value:`[protocol="https://"]`,types:[`String`],text:`_PAGE_FILTER_LINK_ARGUMENTS_PROTOCOL_`},{value:`[target=""]`,types:[`String`],text:`_PAGE_FILTER_LINK_ARGUMENTS_TARGET_`},{value:`[linkClass=""]`,types:[`String`],text:`_PAGE_FILTER_LINK_ARGUMENTS_LINK_CLASS_`}]}}function F(){return{pageTitle:`filterLink`}}var I=`import {
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
`,L={name:`PageFilterLink`,components:{AlohaPage:e,ATranslation:o,PageFilterArguments:n,PageFilterImportCompositionApi:i,PageFilterImportFunction:t,PageFilterLinkExample:_,PageFilterLinkLinkClass:x,PageFilterLinkLinkText:T,PageFilterLinkProtocol:k,PageFilterLinkTarget:N,PageFilterTest:r},setup(){let{pageTitle:e}=F(),{argumentsText:t}=P();return{argumentsText:t,pageTitle:e,test:I}}};function R(e,t,n,r,i,a){let o=u(`a-translation`),s=u(`page-filter-import-function`),p=u(`page-filter-import-composition-api`),m=u(`page-filter-arguments`),h=u(`page-filter-link-example`),g=u(`page-filter-link-link-text`),_=u(`page-filter-link-protocol`),v=u(`page-filter-link-target`),y=u(`page-filter-link-link-class`),b=u(`page-filter-test`),x=u(`aloha-page`);return l(),c(x,{"page-title":e.pageTitle},{body:d(()=>[f(o,{tag:`p`,html:`_PAGE_FILTER_LINK_DESCRIPTION_`}),f(s,{"function-name":`filterLink`,"type-import":`filters`}),f(p,{"function-name":`filterLink`}),f(m,{"arguments-text":e.argumentsText,"function-description":`filterLink(url, { [linkText=""], [protocol="https://"], [target=""], [linkClass=""] })`},null,8,[`arguments-text`]),f(h),f(g),f(_),f(v),f(y),f(b,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var z=p(L,[[`render`,R]]);export{z as default};