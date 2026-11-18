import{t as e}from"./chunk.AlohaPage.sulZ3BAz.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.HIbnCuB_.js";import{t as i}from"./chunk.AlohaExample.Dh7-vA8e.js";import{St as a,et as o}from"./bundle.index.Csp1_sOL.js";import{Ft as s,Xt as c,en as l,in as u,zt as d}from"./chunk.vendor.Cx127fe1.js";import{t as f}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.DRj5dFQL.js";function m(){return{codeJs:`filterEmail("example@example.com");
// ${a(`example@example.com`)}

filterEmail(undefined);
// ${a(void 0)}`}}var h={name:`PageFilterEmailExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=l(`aloha-example`);return c(),s(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=f(h,[[`render`,g]]);function v(){return{codeJs:`filterEmail("example@example.com", { linkClass: "a_btn a_btn_link" });
// ${a(`example@example.com`,{linkClass:`a_btn a_btn_link`})}`}}var y={name:`PageFilterEmailLinkClass`,components:{AlohaExample:i},setup(){let{codeJs:e}=v();return{codeJs:e}}};function b(e,t,n,r,i,a){let o=l(`aloha-example`);return c(),s(o,{"code-js":e.codeJs,header:`linkClass`,"is-code-visible-default":!0},null,8,[`code-js`])}var x=f(y,[[`render`,b]]);function S(){return{argumentsText:[{value:`email`,types:[`String`],text:`_PAGE_FILTER_EMAIL_ARGUMENTS_EMAIL_`},{value:`[linkClass]`,types:[`String`],text:`_PAGE_FILTER_EMAIL_ARGUMENTS_LINK_CLASS_`}]}}function C(){return{pageTitle:`filterEmail`}}var w=`import {
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

`,T={name:`PageFilterEmail`,components:{AlohaPage:e,ATranslation:o,PageFilterArguments:n,PageFilterEmailExample:_,PageFilterEmailLinkClass:x,PageFilterImportCompositionApi:p,PageFilterImportFunction:t,PageFilterTest:r},setup(){let{pageTitle:e}=C(),{argumentsText:t}=S();return{argumentsText:t,pageTitle:e,test:w}}};function E(e,t,n,r,i,a){let o=l(`a-translation`),f=l(`page-filter-import-function`),p=l(`page-filter-import-composition-api`),m=l(`page-filter-arguments`),h=l(`page-filter-email-example`),g=l(`page-filter-email-link-class`),_=l(`page-filter-test`),v=l(`aloha-page`);return c(),s(v,{"page-title":e.pageTitle},{body:u(()=>[d(o,{tag:`p`,html:`_PAGE_FILTER_EMAIL_DESCRIPTION_`}),d(f,{"function-name":`filterEmail`,"type-import":`filters`}),d(p,{"function-name":`filterEmail`}),d(m,{"arguments-text":e.argumentsText,"function-description":`filterEmail(email, { [linkClass] })`},null,8,[`arguments-text`]),d(h),d(g),d(_,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var D=f(T,[[`render`,E]]);export{D as default};