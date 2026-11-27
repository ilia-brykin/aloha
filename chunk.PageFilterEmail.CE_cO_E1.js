import{t as e}from"./chunk.AlohaPage.D8jsTY5m.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.C7NbM6-8.js";import{t as i}from"./chunk.AlohaExample.B-5omd3W.js";import{Vt as a,mn as o,t as s}from"./bundle.index.Cwpafk10.js";import{Jt as c,Ut as l,mn as u,on as d,un as f}from"./chunk.vendor.Bjd2408Z.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.iDZd2wO_.js";function m(){return{codeJs:`filterEmail("example@example.com");
// ${a(`example@example.com`)}

filterEmail(undefined);
// ${a(void 0)}`}}var h={name:`PageFilterEmailExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=f(`aloha-example`);return d(),l(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=s(h,[[`render`,g]]);function v(){return{codeJs:`filterEmail("example@example.com", { linkClass: "a_btn a_btn_link" });
// ${a(`example@example.com`,{linkClass:`a_btn a_btn_link`})}`}}var y={name:`PageFilterEmailLinkClass`,components:{AlohaExample:i},setup(){let{codeJs:e}=v();return{codeJs:e}}};function b(e,t,n,r,i,a){let o=f(`aloha-example`);return d(),l(o,{"code-js":e.codeJs,header:`linkClass`,"is-code-visible-default":!0},null,8,[`code-js`])}var x=s(y,[[`render`,b]]);function S(){return{argumentsText:[{value:`email`,types:[`String`],text:`_PAGE_FILTER_EMAIL_ARGUMENTS_EMAIL_`},{value:`[linkClass]`,types:[`String`],text:`_PAGE_FILTER_EMAIL_ARGUMENTS_LINK_CLASS_`}]}}function C(){return{pageTitle:`filterEmail`}}var w=`import {
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

`,T={name:`PageFilterEmail`,components:{AlohaPage:e,ATranslation:o,PageFilterArguments:n,PageFilterEmailExample:_,PageFilterEmailLinkClass:x,PageFilterImportCompositionApi:p,PageFilterImportFunction:t,PageFilterTest:r},setup(){let{pageTitle:e}=C(),{argumentsText:t}=S();return{argumentsText:t,pageTitle:e,test:w}}};function E(e,t,n,r,i,a){let o=f(`a-translation`),s=f(`page-filter-import-function`),p=f(`page-filter-import-composition-api`),m=f(`page-filter-arguments`),h=f(`page-filter-email-example`),g=f(`page-filter-email-link-class`),_=f(`page-filter-test`),v=f(`aloha-page`);return d(),l(v,{"page-title":e.pageTitle},{body:u(()=>[c(o,{tag:`p`,html:`_PAGE_FILTER_EMAIL_DESCRIPTION_`}),c(s,{"function-name":`filterEmail`,"type-import":`filters`}),c(p,{"function-name":`filterEmail`}),c(m,{"arguments-text":e.argumentsText,"function-description":`filterEmail(email, { [linkClass] })`},null,8,[`arguments-text`]),c(h),c(g),c(_,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var D=s(T,[[`render`,E]]);export{D as default};