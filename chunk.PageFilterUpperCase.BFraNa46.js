import{A as U,a as x}from"./chunk.AlohaExample.LgY88rgr.js";import{aL as n,_ as s,A as P}from"./bundle.index.8Q71sPSv.js";import{P as h,a as B,b as E}from"./chunk.PageFilterTest.B8IWf2-9.js";import{P as F}from"./chunk.PageFilterImportCompositionApi.DniSnJSa.js";import{m as t,K as i,J as l,aK as O,P as r}from"./chunk.vendor.64oIaR0X.js";import"./chunk.vendor-lodash.LcYqUmOZ.js";import"./chunk.vendor-tinymce.BwLm5pZR.js";function R(){return{codeJs:`filterUpperCase("--foo-bar--");
// ${n("--foo-bar--")}

filterUpperCase("fooBar");
// ${n("fooBar")}

filterUpperCase("__foo_bar__");
// ${n("__foo_bar__")}`}}const T={name:"PageFilterUpperCaseExample",components:{AlohaExample:U},setup(){const{codeJs:e}=R();return{codeJs:e}}};function $(e,a,p,c,_,f){const o=t("aloha-example");return l(),i(o,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const L=s(T,[["render",$]]);function b(){return{argumentsText:[{value:"value",types:["String"],text:"_PAGE_FILTER_UPPER_CASE_ARGUMENTS_VALUE_"}]}}function I(){return{pageTitle:"filterUpperCase"}}const S=`import filterUpperCase from "../filterUpperCase";

describe("filterUpperCase", () => {
  it("should convert a string to lowercase", () => {
    expect(filterUpperCase("--Foo-Bar--")).toBe("--FOO-BAR--");
    expect(filterUpperCase("fooBar")).toBe("FOOBAR");
    expect(filterUpperCase("__FOO_BAR__")).toBe("__FOO_BAR__");
  });

  it("should handle empty strings", () => {
    expect(filterUpperCase("")).toBe("");
  });

  it("should handle strings with no alphabetic characters", () => {
    expect(filterUpperCase("12345")).toBe("12345");
    expect(filterUpperCase("!@#$%")).toBe("!@#$%");
  });

  it("should handle mixed case strings", () => {
    expect(filterUpperCase("FoObAr")).toBe("FOOBAR");
    expect(filterUpperCase("HELLOworld")).toBe("HELLOWORLD");
  });

  it("should handle strings with spaces", () => {
    expect(filterUpperCase("Hello World")).toBe("HELLO WORLD");
    expect(filterUpperCase(" foo bar ")).toBe(" FOO BAR ");
  });

  it("should return the same string if already in uppercase", () => {
    expect(filterUpperCase("ALREADY UPPERCASE")).toBe("ALREADY UPPERCASE");
  });
});
`,v={name:"PageFilterUpperCase",components:{AlohaPage:x,ATranslation:P,PageFilterArguments:h,PageFilterImportCompositionApi:F,PageFilterImportFunction:B,PageFilterTest:E,PageFilterUpperCaseExample:L},setup(){const{pageTitle:e}=I(),{argumentsText:a}=b();return{argumentsText:a,pageTitle:e,test:S}}};function y(e,a,p,c,_,f){const o=t("a-translation"),m=t("page-filter-import-function"),u=t("page-filter-import-composition-api"),g=t("page-filter-arguments"),C=t("page-filter-upper-case-example"),d=t("page-filter-test"),A=t("aloha-page");return l(),i(A,{"page-title":e.pageTitle},{body:O(()=>[r(o,{tag:"p",html:"_PAGE_FILTER_UPPER_CASE_DESCRIPTION_"}),r(m,{"function-name":"filterUpperCase","type-import":"filters"}),r(u,{"function-name":"filterUpperCase"}),r(g,{"arguments-text":e.argumentsText,"function-description":"filterUpperCase(value)"},null,8,["arguments-text"]),r(C),r(d,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const V=s(v,[["render",y]]);export{V as default};
