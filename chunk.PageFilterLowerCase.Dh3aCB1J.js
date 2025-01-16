import{A as L,a as h}from"./chunk.AlohaExample.hQI5Jr0F.js";import{av as n,_ as i,A as x}from"./bundle.index.CGdZpDI2.js";import{P as A,a as B,b as F}from"./chunk.PageFilterTest.NRL-fUhD.js";import{P}from"./chunk.PageFilterImportCompositionApi.Cl5IXcK_.js";import{k as t,Q as l,O as p,aR as E,V as o}from"./chunk.vendor.CQXHzgd8.js";import"./chunk.vendor-lodash.Cdu0tpky.js";import"./chunk.APageTabTitle.BoJJkmX0.js";import"./chunk.AlohaHighlightjs.dTNt8W7q.js";import"./chunk.translations-ar.Bl94ryzA.js";import"./chunk.translations-de.B7d9jdMO.js";import"./chunk.translations-en.BtgGWXka.js";import"./chunk.translations-es.BSOZWCCF.js";import"./chunk.translations-fr.CcWHH1cx.js";import"./chunk.translations-hr.CJ7NF5Fz.js";import"./chunk.translations-it.DU_NwUPS.js";import"./chunk.translations-ru.FgtNK4nl.js";function T(){return{codeJs:`filterLowerCase("--Foo-Bar--");
// ${n("--Foo-Bar--")}

filterLowerCase("fooBar");
// ${n("fooBar")}

filterLowerCase("__FOO_BAR__");
// ${n("__FOO_BAR__")}`}}const $={name:"PageFilterLowerCaseExample",components:{AlohaExample:L},setup(){const{codeJs:e}=T();return{codeJs:e}}};function b(e,r,s,c,_,m){const a=t("aloha-example");return p(),l(a,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const O=i($,[["render",b]]);function I(){return{argumentsText:[{value:"value",types:["String"],text:"_PAGE_FILTER_LOWER_CASE_ARGUMENTS_VALUE_"}]}}function R(){return{pageTitle:"filterLowerCase"}}const y=`import filterLowerCase from "../filterLowerCase";

describe("filterLowerCase", () => {
  it("should convert a string to lowercase", () => {
    expect(filterLowerCase("--Foo-Bar--")).toBe("--foo-bar--");
    expect(filterLowerCase("fooBar")).toBe("foobar");
    expect(filterLowerCase("__FOO_BAR__")).toBe("__foo_bar__");
  });

  it("should handle empty strings", () => {
    expect(filterLowerCase("")).toBe("");
  });

  it("should handle strings with no alphabetic characters", () => {
    expect(filterLowerCase("12345")).toBe("12345");
    expect(filterLowerCase("!@#$%")).toBe("!@#$%");
  });

  it("should handle mixed case strings", () => {
    expect(filterLowerCase("FoObAr")).toBe("foobar");
    expect(filterLowerCase("HELLOworld")).toBe("helloworld");
  });

  it("should handle strings with spaces", () => {
    expect(filterLowerCase("Hello World")).toBe("hello world");
    expect(filterLowerCase(" foo bar ")).toBe(" foo bar ");
  });

  it("should return the same string if already in lowercase", () => {
    expect(filterLowerCase("already lowercase")).toBe("already lowercase");
  });
});
`,v={name:"PageFilterLowerCase",components:{AlohaPage:h,ATranslation:x,PageFilterArguments:A,PageFilterImportCompositionApi:P,PageFilterImportFunction:B,PageFilterLowerCaseExample:O,PageFilterTest:F},setup(){const{pageTitle:e}=R(),{argumentsText:r}=I();return{argumentsText:r,pageTitle:e,test:y}}};function S(e,r,s,c,_,m){const a=t("a-translation"),f=t("page-filter-import-function"),u=t("page-filter-import-composition-api"),g=t("page-filter-arguments"),d=t("page-filter-lower-case-example"),w=t("page-filter-test"),C=t("aloha-page");return p(),l(C,{"page-title":e.pageTitle},{body:E(()=>[o(a,{tag:"p",html:"_PAGE_FILTER_LOWER_CASE_DESCRIPTION_"}),o(f,{"function-name":"filterLowerCase","type-import":"filters"}),o(u,{"function-name":"filterLowerCase"}),o(g,{"arguments-text":e.argumentsText,"function-description":"filterLowerCase(value)"},null,8,["arguments-text"]),o(d),o(w,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const Y=i(v,[["render",S]]);export{Y as default};
