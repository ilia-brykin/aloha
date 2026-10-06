import{Tt as e,Ut as t,kt as n,qt as r,zt as i}from"./chunk.vendor.CZPox1kV.js";import{Z as a,pt as o,t as s}from"./bundle.index.BmSiyQNH.js";import{n as c,t as l}from"./chunk.AlohaExample.CD4LlhAz.js";import{n as u,r as d,t as f}from"./chunk.PageFilterTest.DKKVbW-u.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.BMcX_RFK.js";function m(){return{codeJs:`filterLink("example.com");
// ${o(`example.com`)}

filterLink("https://example.com");
// ${o(`https://example.com`)}`}}var h={name:`PageFilterLinkExample`,components:{AlohaExample:l},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=s(h,[[`render`,g]]);function v(){return{codeJs:`filterLink("example.com", { linkClass: "a_btn a_btn_link" });
// ${o(`example.com`,{linkClass:`a_btn a_btn_link`})}`}}var y={name:`PageFilterLinkLinkClass`,components:{AlohaExample:l},setup(){let{codeJs:e}=v();return{codeJs:e}}};function b(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`linkClass`,"is-code-visible-default":!0},null,8,[`code-js`])}var x=s(y,[[`render`,b]]);function S(){return{codeJs:`filterLink("example.com", { linkText: "example" });
// ${o(`example.com`,{linkText:`example`})}

filterLink("https://example.com", { linkText: "Aloha" });
// ${o(`https://example.com`,{linkText:`Aloha`})}`}}var C={name:`PageFilterLinkLinkText`,components:{AlohaExample:l},setup(){let{codeJs:e}=S();return{codeJs:e}}};function w(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`linkText`,"is-code-visible-default":!0},null,8,[`code-js`])}var T=s(C,[[`render`,w]]);function E(){return{codeJs:`filterLink("example.com", { protocol: "" });
// ${o(`example.com`,{protocol:``})}

filterLink("https://example.com", { protocol: "http://" });
// ${o(`example.com`,{protocol:`http://`})}`}}var D={name:`PageFilterLinkProtocol`,components:{AlohaExample:l},setup(){let{codeJs:e}=E();return{codeJs:e}}};function O(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`protocol`,"is-code-visible-default":!0},null,8,[`code-js`])}var k=s(D,[[`render`,O]]);function A(){return{codeJs:`filterLink("example.com", { target: "_blank" });
// ${o(`example.com`,{target:`_blank`})}

filterLink("https://example.com", { target: "_self" });
// ${o(`example.com`,{target:`_self`})}

filterLink("https://example.com", { target: "_parent" });
// ${o(`example.com`,{target:`_parent`})}

filterLink("https://example.com", { target: "_top" });
// ${o(`example.com`,{target:`_top`})}`}}var j={name:`PageFilterLinkTarget`,components:{AlohaExample:l},setup(){let{codeJs:e}=A();return{codeJs:e}}};function M(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`target`,"is-code-visible-default":!0},null,8,[`code-js`])}var N=s(j,[[`render`,M]]);function P(){return{argumentsText:[{value:`url`,types:[`String`],text:`_PAGE_FILTER_LINK_ARGUMENTS_URL_`},{value:`[linkText=""]`,types:[`String`],text:`_PAGE_FILTER_LINK_ARGUMENTS_LINK_TEXT_`},{value:`[protocol="https://"]`,types:[`String`],text:`_PAGE_FILTER_LINK_ARGUMENTS_PROTOCOL_`},{value:`[target=""]`,types:[`String`],text:`_PAGE_FILTER_LINK_ARGUMENTS_TARGET_`},{value:`[linkClass=""]`,types:[`String`],text:`_PAGE_FILTER_LINK_ARGUMENTS_LINK_CLASS_`}]}}function F(){return{pageTitle:`filterLink`}}var I=`import {
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
`,L={name:`PageFilterLink`,components:{AlohaPage:c,ATranslation:a,PageFilterArguments:d,PageFilterImportCompositionApi:p,PageFilterImportFunction:u,PageFilterLinkExample:_,PageFilterLinkLinkClass:x,PageFilterLinkLinkText:T,PageFilterLinkProtocol:k,PageFilterLinkTarget:N,PageFilterTest:f},setup(){let{pageTitle:e}=F(),{argumentsText:t}=P();return{argumentsText:t,pageTitle:e,test:I}}};function R(a,o,s,c,l,u){let d=t(`a-translation`),f=t(`page-filter-import-function`),p=t(`page-filter-import-composition-api`),m=t(`page-filter-arguments`),h=t(`page-filter-link-example`),g=t(`page-filter-link-link-text`),_=t(`page-filter-link-protocol`),v=t(`page-filter-link-target`),y=t(`page-filter-link-link-class`),b=t(`page-filter-test`),x=t(`aloha-page`);return i(),e(x,{"page-title":a.pageTitle},{body:r(()=>[n(d,{tag:`p`,html:`_PAGE_FILTER_LINK_DESCRIPTION_`}),n(f,{"function-name":`filterLink`,"type-import":`filters`}),n(p,{"function-name":`filterLink`}),n(m,{"arguments-text":a.argumentsText,"function-description":`filterLink(url, { [linkText=""], [protocol="https://"], [target=""], [linkClass=""] })`},null,8,[`arguments-text`]),n(h),n(g),n(_),n(v),n(y),n(b,{test:a.test},null,8,[`test`])]),_:1},8,[`page-title`])}var z=s(L,[[`render`,R]]);export{z as default};