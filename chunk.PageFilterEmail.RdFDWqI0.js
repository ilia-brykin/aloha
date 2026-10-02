import{Tt as e,Ut as t,kt as n,qt as r,zt as i}from"./chunk.vendor.CZPox1kV.js";import{Z as a,t as o,yt as s}from"./bundle.index.CLtYDDlb.js";import{n as c,t as l}from"./chunk.AlohaExample.BFgfeYtr.js";import{n as u,r as d,t as f}from"./chunk.PageFilterTest.DEb_j_8g.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.D-8n-B7g.js";function m(){return{codeJs:`filterEmail("example@example.com");
// ${s(`example@example.com`)}

filterEmail(undefined);
// ${s(void 0)}`}}var h={name:`PageFilterEmailExample`,components:{AlohaExample:l},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=o(h,[[`render`,g]]);function v(){return{codeJs:`filterEmail("example@example.com", { linkClass: "a_btn a_btn_link" });
// ${s(`example@example.com`,{linkClass:`a_btn a_btn_link`})}`}}var y={name:`PageFilterEmailLinkClass`,components:{AlohaExample:l},setup(){let{codeJs:e}=v();return{codeJs:e}}};function b(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`linkClass`,"is-code-visible-default":!0},null,8,[`code-js`])}var x=o(y,[[`render`,b]]);function S(){return{argumentsText:[{value:`email`,types:[`String`],text:`_PAGE_FILTER_EMAIL_ARGUMENTS_EMAIL_`},{value:`[linkClass]`,types:[`String`],text:`_PAGE_FILTER_EMAIL_ARGUMENTS_LINK_CLASS_`}]}}function C(){return{pageTitle:`filterEmail`}}var w=`import {
  describe,
  expect,
  it,
} from "vitest";

import filterEmail from "../filterEmail";

describe("filterEmail", () => {
  it("basic email", () => {
    expect(filterEmail("user@aloha.com")).toBe("<a href=\\"mailto:user@aloha.com\\">user@aloha.com</a>");
  });

  it("email with CSS class", () => {
    expect(filterEmail("contact@aloha.com", { linkClass: "email-link" })).toBe("<a href=\\"mailto:contact@aloha.com\\" class=\\"email-link\\">contact@aloha.com</a>");
  });

  it("empty email", () => {
    expect(filterEmail("")).toBe("");
  });

  it("null email", () => {
    expect(filterEmail(null)).toBe("");
  });

  it("undefined email", () => {
    expect(filterEmail(undefined)).toBe("");
  });

  it("numeric value (invalid email)", () => {
    expect(filterEmail(12345)).toBe("");
  });

  it("email with special characters", () => {
    expect(filterEmail("name.surname+filter@company.org")).toBe("<a href=\\"mailto:name.surname+filter@company.org\\">name.surname+filter@company.org</a>");
  });

  it("email with combined class attribute", () => {
    expect(filterEmail("hr@enterprise.net", { linkClass: "external contact" })).toBe("<a href=\\"mailto:hr@enterprise.net\\" class=\\"external contact\\">hr@enterprise.net</a>");
  });
});

`,T={name:`PageFilterEmail`,components:{AlohaPage:c,ATranslation:a,PageFilterArguments:d,PageFilterEmailExample:_,PageFilterEmailLinkClass:x,PageFilterImportCompositionApi:p,PageFilterImportFunction:u,PageFilterTest:f},setup(){let{pageTitle:e}=C(),{argumentsText:t}=S();return{argumentsText:t,pageTitle:e,test:w}}};function E(a,o,s,c,l,u){let d=t(`a-translation`),f=t(`page-filter-import-function`),p=t(`page-filter-import-composition-api`),m=t(`page-filter-arguments`),h=t(`page-filter-email-example`),g=t(`page-filter-email-link-class`),_=t(`page-filter-test`),v=t(`aloha-page`);return i(),e(v,{"page-title":a.pageTitle},{body:r(()=>[n(d,{tag:`p`,html:`_PAGE_FILTER_EMAIL_DESCRIPTION_`}),n(f,{"function-name":`filterEmail`,"type-import":`filters`}),n(p,{"function-name":`filterEmail`}),n(m,{"arguments-text":a.argumentsText,"function-description":`filterEmail(email, { [linkClass] })`},null,8,[`arguments-text`]),n(h),n(g),n(_,{test:a.test},null,8,[`test`])]),_:1},8,[`page-title`])}var D=o(T,[[`render`,E]]);export{D as default};