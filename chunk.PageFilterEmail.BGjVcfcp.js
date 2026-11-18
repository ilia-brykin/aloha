import{t as e}from"./chunk.AlohaPage.DqkPByuO.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.CPsx-BHi.js";import{t as i}from"./chunk.AlohaExample.CxBeInGL.js";import{Dt as a,rt as o}from"./bundle.index.DW19MCJk.js";import{Bt as s,It as c,Zt as l,an as u,tn as d}from"./chunk.vendor.H0cZuFAV.js";import{t as f}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.Drof67dM.js";function m(){return{codeJs:`filterEmail("example@example.com");
// ${a(`example@example.com`)}

filterEmail(undefined);
// ${a(void 0)}`}}var h={name:`PageFilterEmailExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=d(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=f(h,[[`render`,g]]);function v(){return{codeJs:`filterEmail("example@example.com", { linkClass: "a_btn a_btn_link" });
// ${a(`example@example.com`,{linkClass:`a_btn a_btn_link`})}`}}var y={name:`PageFilterEmailLinkClass`,components:{AlohaExample:i},setup(){let{codeJs:e}=v();return{codeJs:e}}};function b(e,t,n,r,i,a){let o=d(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`linkClass`,"is-code-visible-default":!0},null,8,[`code-js`])}var x=f(y,[[`render`,b]]);function S(){return{argumentsText:[{value:`email`,types:[`String`],text:`_PAGE_FILTER_EMAIL_ARGUMENTS_EMAIL_`},{value:`[linkClass]`,types:[`String`],text:`_PAGE_FILTER_EMAIL_ARGUMENTS_LINK_CLASS_`}]}}function C(){return{pageTitle:`filterEmail`}}var w=`import {
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

`,T={name:`PageFilterEmail`,components:{AlohaPage:e,ATranslation:o,PageFilterArguments:n,PageFilterEmailExample:_,PageFilterEmailLinkClass:x,PageFilterImportCompositionApi:p,PageFilterImportFunction:t,PageFilterTest:r},setup(){let{pageTitle:e}=C(),{argumentsText:t}=S();return{argumentsText:t,pageTitle:e,test:w}}};function E(e,t,n,r,i,a){let o=d(`a-translation`),f=d(`page-filter-import-function`),p=d(`page-filter-import-composition-api`),m=d(`page-filter-arguments`),h=d(`page-filter-email-example`),g=d(`page-filter-email-link-class`),_=d(`page-filter-test`),v=d(`aloha-page`);return l(),c(v,{"page-title":e.pageTitle},{body:u(()=>[s(o,{tag:`p`,html:`_PAGE_FILTER_EMAIL_DESCRIPTION_`}),s(f,{"function-name":`filterEmail`,"type-import":`filters`}),s(p,{"function-name":`filterEmail`}),s(m,{"arguments-text":e.argumentsText,"function-description":`filterEmail(email, { [linkClass] })`},null,8,[`arguments-text`]),s(h),s(g),s(_,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var D=f(T,[[`render`,E]]);export{D as default};