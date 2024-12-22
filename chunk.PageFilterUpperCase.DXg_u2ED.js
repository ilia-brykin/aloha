import{A as U,a as x}from"./chunk.AlohaExample._XO7Xp-I.js";import{aq as n,_ as s,A as h}from"./bundle.index.B5hAPZ2P.js";import{P,a as B,b as E}from"./chunk.PageFilterTest.CWh-nor5.js";import{P as O}from"./chunk.PageFilterImportCompositionApi.rwbmRCJV.js";import{k as t,J as i,H as l,aO as F,O as r}from"./chunk.vendor.QyCKSPD8.js";import"./chunk.vendor-lodash.GuFqEw-8.js";import"./chunk.APageTabTitle.BJKzNP7I.js";import"./chunk.translations-ar.CVMjJp5b.js";import"./chunk.translations-de.BzQlZ0KE.js";import"./chunk.translations-en.BgQGjf0f.js";import"./chunk.translations-es.D96WHE2G.js";import"./chunk.translations-fr.C7FJhEVC.js";import"./chunk.translations-hr.BD4oC8kj.js";import"./chunk.translations-it.DUqHiLVz.js";import"./chunk.translations-ru.DEu_2RjU.js";function R(){return{codeJs:`filterUpperCase("--foo-bar--");
// ${n("--foo-bar--")}

filterUpperCase("fooBar");
// ${n("fooBar")}

filterUpperCase("__foo_bar__");
// ${n("__foo_bar__")}`}}const T={name:"PageFilterUpperCaseExample",components:{AlohaExample:U},setup(){const{codeJs:e}=R();return{codeJs:e}}};function $(e,o,p,c,_,m){const a=t("aloha-example");return l(),i(a,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const L=s(T,[["render",$]]);function b(){return{argumentsText:[{value:"value",types:["String"],text:"_PAGE_FILTER_UPPER_CASE_ARGUMENTS_VALUE_"}]}}function I(){return{pageTitle:"filterUpperCase"}}const S=`import filterUpperCase from "../filterUpperCase";

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
`,v={name:"PageFilterUpperCase",components:{AlohaPage:x,ATranslation:h,PageFilterArguments:P,PageFilterImportCompositionApi:O,PageFilterImportFunction:B,PageFilterTest:E,PageFilterUpperCaseExample:L},setup(){const{pageTitle:e}=I(),{argumentsText:o}=b();return{argumentsText:o,pageTitle:e,test:S}}};function y(e,o,p,c,_,m){const a=t("a-translation"),f=t("page-filter-import-function"),u=t("page-filter-import-composition-api"),g=t("page-filter-arguments"),C=t("page-filter-upper-case-example"),d=t("page-filter-test"),A=t("aloha-page");return l(),i(A,{"page-title":e.pageTitle},{body:F(()=>[r(a,{tag:"p",html:"_PAGE_FILTER_UPPER_CASE_DESCRIPTION_"}),r(f,{"function-name":"filterUpperCase","type-import":"filters"}),r(u,{"function-name":"filterUpperCase"}),r(g,{"arguments-text":e.argumentsText,"function-description":"filterUpperCase(value)"},null,8,["arguments-text"]),r(C),r(d,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const Q=s(v,[["render",y]]);export{Q as default};
