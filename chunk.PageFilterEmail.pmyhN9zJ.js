import{A as f,a as P}from"./chunk.AlohaExample.CjncY9yb.js";import{aD as o,_ as s,A as $}from"./bundle.index.D9gcatRx.js";import{P as k,a as T,b as I}from"./chunk.PageFilterTest.XRvw5J-J.js";import{k as t,J as r,H as m,aJ as C,O as a}from"./chunk.vendor.Ca3-nzbX.js";import{P as F}from"./chunk.PageFilterImportCompositionApi.Bxn2dkOk.js";import"./chunk.vendor-lodash.-viuv_rg.js";function b(){return{codeJs:`filterEmail("example@example.com");
// ${o("example@example.com")}

filterEmail(undefined);
// ${o(void 0)}`}}const J={name:"PageFilterEmailExample",components:{AlohaExample:f},setup(){const{codeJs:e}=b();return{codeJs:e}}};function B(e,l,i,c,p,_){const n=t("aloha-example");return m(),r(n,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const L=s(J,[["render",B]]);function S(){return{codeJs:`filterEmail("example@example.com", { linkClass: "a_btn a_btn_link" });
// ${o("example@example.com",{linkClass:"a_btn a_btn_link"})}`}}const y={name:"PageFilterEmailLinkClass",components:{AlohaExample:f},setup(){const{codeJs:e}=S();return{codeJs:e}}};function v(e,l,i,c,p,_){const n=t("aloha-example");return m(),r(n,{"code-js":e.codeJs,header:"linkClass","is-code-visible-default":!0},null,8,["code-js"])}const G=s(y,[["render",v]]);function M(){return{argumentsText:[{value:"email",types:["String"],text:"_PAGE_FILTER_EMAIL_ARGUMENTS_EMAIL_"},{value:"[linkClass]",types:["String"],text:"_PAGE_FILTER_EMAIL_ARGUMENTS_LINK_CLASS_"}]}}function R(){return{pageTitle:"filterEmail"}}const N=`import filterEmail from "../filterEmail";

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

`,j={name:"PageFilterEmail",components:{AlohaPage:P,ATranslation:$,PageFilterArguments:k,PageFilterEmailExample:L,PageFilterEmailLinkClass:G,PageFilterImportCompositionApi:F,PageFilterImportFunction:T,PageFilterTest:I},setup(){const{pageTitle:e}=R(),{argumentsText:l}=M();return{argumentsText:l,pageTitle:e,test:N}}};function w(e,l,i,c,p,_){const n=t("a-translation"),u=t("page-filter-import-function"),g=t("page-filter-import-composition-api"),E=t("page-filter-arguments"),d=t("page-filter-email-example"),x=t("page-filter-email-link-class"),h=t("page-filter-test"),A=t("aloha-page");return m(),r(A,{"page-title":e.pageTitle},{body:C(()=>[a(n,{tag:"p",html:"_PAGE_FILTER_EMAIL_DESCRIPTION_"}),a(u,{"function-name":"filterEmail","type-import":"filters"}),a(g,{"function-name":"filterEmail"}),a(E,{"arguments-text":e.argumentsText,"function-description":"filterEmail(email, { [linkClass] })"},null,8,["arguments-text"]),a(d),a(x),a(h,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const q=s(j,[["render",w]]);export{q as default};
