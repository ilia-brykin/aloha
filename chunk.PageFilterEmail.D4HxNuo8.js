import{A as f,a as P}from"./chunk.AlohaExample.C1KLjlw6.js";import{P as $,a as T,b as k}from"./chunk.PageFilterTest.D1jnnOCo.js";import{az as l,_ as r,A as I}from"./bundle.index.L7kL3tQT.js";import{U as s,e as t,V as m,aS as C,Z as a}from"./chunk.vendor.COYgx38y.js";import"./chunk.vendor-lodash.xyEKcfD7.js";import{P as b}from"./chunk.PageFilterImportCompositionApi.LKViCUG1.js";import"./chunk.APageTabTitle.Ce8OKMcV.js";import"./chunk.AlohaHighlightjs.CW1W2LCP.js";import"./chunk.translations-ar.DEWt73y8.js";import"./chunk.translations-de.B16ttyfK.js";import"./chunk.translations-en.CPCEcTAP.js";import"./chunk.translations-es.BKTK5PUv.js";import"./chunk.translations-fr.CslimZmU.js";import"./chunk.translations-hr.CiJ7_Y2m.js";import"./chunk.translations-it.H45F8miC.js";import"./chunk.translations-ru.o-dOzdYz.js";function F(){return{codeJs:`filterEmail("example@example.com");
// ${l("example@example.com")}

filterEmail(undefined);
// ${l(void 0)}`}}const S={name:"PageFilterEmailExample",components:{AlohaExample:f},setup(){const{codeJs:e}=F();return{codeJs:e}}};function B(e,i,o,c,p,_){const n=t("aloha-example");return m(),s(n,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const L=r(S,[["render",B]]);function J(){return{codeJs:`filterEmail("example@example.com", { linkClass: "a_btn a_btn_link" });
// ${l("example@example.com",{linkClass:"a_btn a_btn_link"})}`}}const y={name:"PageFilterEmailLinkClass",components:{AlohaExample:f},setup(){const{codeJs:e}=J();return{codeJs:e}}};function v(e,i,o,c,p,_){const n=t("aloha-example");return m(),s(n,{"code-js":e.codeJs,header:"linkClass","is-code-visible-default":!0},null,8,["code-js"])}const G=r(y,[["render",v]]);function M(){return{argumentsText:[{value:"email",types:["String"],text:"_PAGE_FILTER_EMAIL_ARGUMENTS_EMAIL_"},{value:"[linkClass]",types:["String"],text:"_PAGE_FILTER_EMAIL_ARGUMENTS_LINK_CLASS_"}]}}function R(){return{pageTitle:"filterEmail"}}const j=`import {
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

`,N={name:"PageFilterEmail",components:{AlohaPage:P,ATranslation:I,PageFilterArguments:k,PageFilterEmailExample:L,PageFilterEmailLinkClass:G,PageFilterImportCompositionApi:b,PageFilterImportFunction:T,PageFilterTest:$},setup(){const{pageTitle:e}=R(),{argumentsText:i}=M();return{argumentsText:i,pageTitle:e,test:j}}};function w(e,i,o,c,p,_){const n=t("a-translation"),u=t("page-filter-import-function"),g=t("page-filter-import-composition-api"),d=t("page-filter-arguments"),E=t("page-filter-email-example"),x=t("page-filter-email-link-class"),h=t("page-filter-test"),A=t("aloha-page");return m(),s(A,{"page-title":e.pageTitle},{body:C(()=>[a(n,{tag:"p",html:"_PAGE_FILTER_EMAIL_DESCRIPTION_"}),a(u,{"function-name":"filterEmail","type-import":"filters"}),a(g,{"function-name":"filterEmail"}),a(d,{"arguments-text":e.argumentsText,"function-description":"filterEmail(email, { [linkClass] })"},null,8,["arguments-text"]),a(E),a(x),a(h,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const ne=r(N,[["render",w]]);export{ne as default};
