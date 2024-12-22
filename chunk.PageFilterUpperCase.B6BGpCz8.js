import{A as U,a as x}from"./chunk.AlohaExample.CSDPM2GG.js";import{aq as p,_ as s,A as h}from"./bundle.index.CppgSY7a.js";import{P,a as B,b as E}from"./chunk.PageFilterTest.CI9ua7WP.js";import{P as O}from"./chunk.PageFilterImportCompositionApi.DVnPd_Ra.js";import{k as t,J as i,H as l,aQ as F,O as r}from"./chunk.vendor.DTe1dwcY.js";import"./chunk.vendor-lodash.DYgvgMhr.js";import"./chunk.APageTabTitle.DBCzPzA8.js";import"./chunk.AlohaHighlightjs.BnoxTF5z.js";import"./chunk.translations-ar.9T9FZLV-.js";import"./chunk.translations-de.B453o-ge.js";import"./chunk.translations-en.B1pI1agY.js";import"./chunk.translations-es.CQJBKxK9.js";import"./chunk.translations-fr.Bow79Lrr.js";import"./chunk.translations-hr.CA51a4HD.js";import"./chunk.translations-it.DRmcCbu8.js";import"./chunk.translations-ru.BtSZbcF4.js";function R(){return{codeJs:`filterUpperCase("--foo-bar--");
// ${p("--foo-bar--")}

filterUpperCase("fooBar");
// ${p("fooBar")}

filterUpperCase("__foo_bar__");
// ${p("__foo_bar__")}`}}const T={name:"PageFilterUpperCaseExample",components:{AlohaExample:U},setup(){const{codeJs:e}=R();return{codeJs:e}}};function $(e,o,n,c,_,m){const a=t("aloha-example");return l(),i(a,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const L=s(T,[["render",$]]);function b(){return{argumentsText:[{value:"value",types:["String"],text:"_PAGE_FILTER_UPPER_CASE_ARGUMENTS_VALUE_"}]}}function I(){return{pageTitle:"filterUpperCase"}}const S=`import filterUpperCase from "../filterUpperCase";

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
`,v={name:"PageFilterUpperCase",components:{AlohaPage:x,ATranslation:h,PageFilterArguments:P,PageFilterImportCompositionApi:O,PageFilterImportFunction:B,PageFilterTest:E,PageFilterUpperCaseExample:L},setup(){const{pageTitle:e}=I(),{argumentsText:o}=b();return{argumentsText:o,pageTitle:e,test:S}}};function y(e,o,n,c,_,m){const a=t("a-translation"),f=t("page-filter-import-function"),u=t("page-filter-import-composition-api"),g=t("page-filter-arguments"),C=t("page-filter-upper-case-example"),d=t("page-filter-test"),A=t("aloha-page");return l(),i(A,{"page-title":e.pageTitle},{body:F(()=>[r(a,{tag:"p",html:"_PAGE_FILTER_UPPER_CASE_DESCRIPTION_"}),r(f,{"function-name":"filterUpperCase","type-import":"filters"}),r(u,{"function-name":"filterUpperCase"}),r(g,{"arguments-text":e.argumentsText,"function-description":"filterUpperCase(value)"},null,8,["arguments-text"]),r(C),r(d,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const X=s(v,[["render",y]]);export{X as default};
