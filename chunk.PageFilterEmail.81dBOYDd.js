import{A as f,a as P}from"./chunk.AlohaExample.DcK_zWTP.js";import{P as $,a as T,b as k}from"./chunk.PageFilterTest.DGZWNW3w.js";import{ao as l,_ as r,A as I}from"./bundle.index.DU7QMLyo.js";import{R as s,e as t,U as m,aR as C,Y as a}from"./chunk.vendor.CDkHfsNc.js";import"./chunk.vendor-lodash.BXW4-Hvb.js";import{P as b}from"./chunk.PageFilterImportCompositionApi.us_a2gq-.js";import"./chunk.APageTabTitle.DVkFln1W.js";import"./chunk.AlohaHighlightjs.DI9-5vSP.js";import"./chunk.translations-ar.BW4YNjOf.js";import"./chunk.translations-de.pnZGXXfR.js";import"./chunk.translations-en.CzHrEMzS.js";import"./chunk.translations-es.CVdE8egl.js";import"./chunk.translations-fr.hqb9JGfS.js";import"./chunk.translations-hr.DYwzCGFq.js";import"./chunk.translations-it.C5e5-FF3.js";import"./chunk.translations-ru.eTKud94F.js";function F(){return{codeJs:`filterEmail("example@example.com");
// ${l("example@example.com")}

filterEmail(undefined);
// ${l(void 0)}`}}const B={name:"PageFilterEmailExample",components:{AlohaExample:f},setup(){const{codeJs:e}=F();return{codeJs:e}}};function L(e,i,o,c,p,_){const n=t("aloha-example");return m(),s(n,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const S=r(B,[["render",L]]);function J(){return{codeJs:`filterEmail("example@example.com", { linkClass: "a_btn a_btn_link" });
// ${l("example@example.com",{linkClass:"a_btn a_btn_link"})}`}}const y={name:"PageFilterEmailLinkClass",components:{AlohaExample:f},setup(){const{codeJs:e}=J();return{codeJs:e}}};function R(e,i,o,c,p,_){const n=t("aloha-example");return m(),s(n,{"code-js":e.codeJs,header:"linkClass","is-code-visible-default":!0},null,8,["code-js"])}const v=r(y,[["render",R]]);function G(){return{argumentsText:[{value:"email",types:["String"],text:"_PAGE_FILTER_EMAIL_ARGUMENTS_EMAIL_"},{value:"[linkClass]",types:["String"],text:"_PAGE_FILTER_EMAIL_ARGUMENTS_LINK_CLASS_"}]}}function M(){return{pageTitle:"filterEmail"}}const j=`import {
  describe,
  expect,
  it,
} from "@jest/globals";

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

`,N={name:"PageFilterEmail",components:{AlohaPage:P,ATranslation:I,PageFilterArguments:k,PageFilterEmailExample:S,PageFilterEmailLinkClass:v,PageFilterImportCompositionApi:b,PageFilterImportFunction:T,PageFilterTest:$},setup(){const{pageTitle:e}=M(),{argumentsText:i}=G();return{argumentsText:i,pageTitle:e,test:j}}};function w(e,i,o,c,p,_){const n=t("a-translation"),u=t("page-filter-import-function"),g=t("page-filter-import-composition-api"),d=t("page-filter-arguments"),E=t("page-filter-email-example"),x=t("page-filter-email-link-class"),h=t("page-filter-test"),A=t("aloha-page");return m(),s(A,{"page-title":e.pageTitle},{body:C(()=>[a(n,{tag:"p",html:"_PAGE_FILTER_EMAIL_DESCRIPTION_"}),a(u,{"function-name":"filterEmail","type-import":"filters"}),a(g,{"function-name":"filterEmail"}),a(d,{"arguments-text":e.argumentsText,"function-description":"filterEmail(email, { [linkClass] })"},null,8,["arguments-text"]),a(E),a(x),a(h,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const ne=r(N,[["render",w]]);export{ne as default};
