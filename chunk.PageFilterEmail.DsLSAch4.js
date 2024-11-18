import{A as f,a as P}from"./chunk.AlohaExample.CMUUEVcN.js";import{aF as o,_ as s,A as $}from"./bundle.index.DOWaPX07.js";import{P as T,a as k,b as C}from"./chunk.PageFilterTest.CqA3wSrh.js";import{B as r,C as m,m as t,L as I,G as a}from"./chunk.vendor.9_E-x6sT.js";import{P as F}from"./chunk.PageFilterImportCompositionApi.DTdLG250.js";import"./chunk.vendor-lodash.Cqnw6GrA.js";import"./chunk.vendor-tinymce.5PTU7oiI.js";function b(){return{codeJs:`filterEmail("example@example.com");
// ${o("example@example.com")}

filterEmail(undefined);
// ${o(void 0)}`}}const B={name:"PageFilterEmailExample",components:{AlohaExample:f},setup(){const{codeJs:e}=b();return{codeJs:e}}};function L(e,l,i,c,p,_){const n=t("aloha-example");return r(),m(n,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const S=s(B,[["render",L]]);function J(){return{codeJs:`filterEmail("example@example.com", { linkClass: "a_btn a_btn_link" });
// ${o("example@example.com",{linkClass:"a_btn a_btn_link"})}`}}const y={name:"PageFilterEmailLinkClass",components:{AlohaExample:f},setup(){const{codeJs:e}=J();return{codeJs:e}}};function v(e,l,i,c,p,_){const n=t("aloha-example");return r(),m(n,{"code-js":e.codeJs,header:"linkClass","is-code-visible-default":!0},null,8,["code-js"])}const G=s(y,[["render",v]]);function M(){return{argumentsText:[{value:"email",types:["String"],text:"_PAGE_FILTER_EMAIL_ARGUMENTS_EMAIL_"},{value:"[linkClass]",types:["String"],text:"_PAGE_FILTER_EMAIL_ARGUMENTS_LINK_CLASS_"}]}}function R(){return{pageTitle:"filterEmail"}}const N=`import filterEmail from "../filterEmail";

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

`,j={name:"PageFilterEmail",components:{AlohaPage:P,ATranslation:$,PageFilterArguments:C,PageFilterEmailExample:S,PageFilterEmailLinkClass:G,PageFilterImportCompositionApi:F,PageFilterImportFunction:k,PageFilterTest:T},setup(){const{pageTitle:e}=R(),{argumentsText:l}=M();return{argumentsText:l,pageTitle:e,test:N}}};function w(e,l,i,c,p,_){const n=t("a-translation"),u=t("page-filter-import-function"),g=t("page-filter-import-composition-api"),E=t("page-filter-arguments"),d=t("page-filter-email-example"),x=t("page-filter-email-link-class"),h=t("page-filter-test"),A=t("aloha-page");return r(),m(A,{"page-title":e.pageTitle},{body:I(()=>[a(n,{tag:"p",html:"_PAGE_FILTER_EMAIL_DESCRIPTION_"}),a(u,{"function-name":"filterEmail","type-import":"filters"}),a(g,{"function-name":"filterEmail"}),a(E,{"arguments-text":e.argumentsText,"function-description":"filterEmail(email, { [linkClass] })"},null,8,["arguments-text"]),a(d),a(x),a(h,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const H=s(j,[["render",w]]);export{H as default};
