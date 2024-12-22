import{A as f,a as P}from"./chunk.AlohaExample.DAr9Tlnu.js";import{am as o,_ as r,A as $}from"./bundle.index.BKSIYICd.js";import{P as k,a as T,b as I}from"./chunk.PageFilterTest.C0IOb_gZ.js";import{k as t,J as s,H as m,aQ as C,O as a}from"./chunk.vendor.DTe1dwcY.js";import"./chunk.vendor-lodash.DYgvgMhr.js";import{P as F}from"./chunk.PageFilterImportCompositionApi.Btu_hiVn.js";import"./chunk.APageTabTitle.Dc0mofpE.js";import"./chunk.AlohaHighlightjs.BnoxTF5z.js";import"./chunk.translations-ar.DNd5WUpF.js";import"./chunk.translations-de.BW8KC1lT.js";import"./chunk.translations-en.C52QdnSW.js";import"./chunk.translations-es.DrJSkweL.js";import"./chunk.translations-fr.yYW9XAlD.js";import"./chunk.translations-hr.DHEZcPfE.js";import"./chunk.translations-it.BFeTT1Q6.js";import"./chunk.translations-ru.DS_CKcbr.js";function b(){return{codeJs:`filterEmail("example@example.com");
// ${o("example@example.com")}

filterEmail(undefined);
// ${o(void 0)}`}}const B={name:"PageFilterEmailExample",components:{AlohaExample:f},setup(){const{codeJs:e}=b();return{codeJs:e}}};function J(e,i,l,c,p,_){const n=t("aloha-example");return m(),s(n,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const L=r(B,[["render",J]]);function S(){return{codeJs:`filterEmail("example@example.com", { linkClass: "a_btn a_btn_link" });
// ${o("example@example.com",{linkClass:"a_btn a_btn_link"})}`}}const y={name:"PageFilterEmailLinkClass",components:{AlohaExample:f},setup(){const{codeJs:e}=S();return{codeJs:e}}};function v(e,i,l,c,p,_){const n=t("aloha-example");return m(),s(n,{"code-js":e.codeJs,header:"linkClass","is-code-visible-default":!0},null,8,["code-js"])}const G=r(y,[["render",v]]);function M(){return{argumentsText:[{value:"email",types:["String"],text:"_PAGE_FILTER_EMAIL_ARGUMENTS_EMAIL_"},{value:"[linkClass]",types:["String"],text:"_PAGE_FILTER_EMAIL_ARGUMENTS_LINK_CLASS_"}]}}function R(){return{pageTitle:"filterEmail"}}const N=`import filterEmail from "../filterEmail";

describe("filterEmail", () => {
  test("basic email", () => {
    expect(filterEmail("user@aloha.com")).toBe("<a href=\\"mailto:user@aloha.com\\">user@aloha.com</a>");
  });

  test("email with CSS class", () => {
    expect(filterEmail("contact@aloha.com", { linkClass: "email-link" })).toBe("<a href=\\"mailto:contact@aloha.com\\" class=\\"email-link\\">contact@aloha.com</a>");
  });

  test("empty email", () => {
    expect(filterEmail("")).toBe("");
  });

  test("null email", () => {
    expect(filterEmail(null)).toBe("");
  });

  test("undefined email", () => {
    expect(filterEmail(undefined)).toBe("");
  });

  test("numeric value (invalid email)", () => {
    expect(filterEmail(12345)).toBe("");
  });

  test("email with special characters", () => {
    expect(filterEmail("name.surname+filter@company.org")).toBe("<a href=\\"mailto:name.surname+filter@company.org\\">name.surname+filter@company.org</a>");
  });

  test("email with combined class attribute", () => {
    expect(filterEmail("hr@enterprise.net", { linkClass: "external contact" })).toBe("<a href=\\"mailto:hr@enterprise.net\\" class=\\"external contact\\">hr@enterprise.net</a>");
  });
});

`,j={name:"PageFilterEmail",components:{AlohaPage:P,ATranslation:$,PageFilterArguments:k,PageFilterEmailExample:L,PageFilterEmailLinkClass:G,PageFilterImportCompositionApi:F,PageFilterImportFunction:T,PageFilterTest:I},setup(){const{pageTitle:e}=R(),{argumentsText:i}=M();return{argumentsText:i,pageTitle:e,test:N}}};function w(e,i,l,c,p,_){const n=t("a-translation"),u=t("page-filter-import-function"),g=t("page-filter-import-composition-api"),E=t("page-filter-arguments"),d=t("page-filter-email-example"),x=t("page-filter-email-link-class"),h=t("page-filter-test"),A=t("aloha-page");return m(),s(A,{"page-title":e.pageTitle},{body:C(()=>[a(n,{tag:"p",html:"_PAGE_FILTER_EMAIL_DESCRIPTION_"}),a(u,{"function-name":"filterEmail","type-import":"filters"}),a(g,{"function-name":"filterEmail"}),a(E,{"arguments-text":e.argumentsText,"function-description":"filterEmail(email, { [linkClass] })"},null,8,["arguments-text"]),a(d),a(x),a(h,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const ne=r(j,[["render",w]]);export{ne as default};
