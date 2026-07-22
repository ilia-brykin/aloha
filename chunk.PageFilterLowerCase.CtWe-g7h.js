import{A as L,a as h}from"./chunk.AlohaExample.C5zbBUyN.js";import{P as x,a as A,b as B}from"./chunk.PageFilterTest.CKimVWly.js";import{P as F}from"./chunk.PageFilterImportCompositionApi.BHU6-MiL.js";import{aU as n,_ as i,A as P}from"./bundle.index.2fjrVuJ_.js";import{Y as l,W as p,f as t,aU as E,$ as o}from"./chunk.vendor.CWr53wb5.js";import"./chunk.vendor-lodash.CWoM99Se.js";import"./chunk.APageTabTitle.ByCz-RvO.js";import"./chunk.AlohaHighlightjs.Cyb5M4zM.js";import"./chunk.translations-ar.CG00cKrz.js";import"./chunk.translations-de.jRMdBWJu.js";import"./chunk.translations-en.Ccpp2c3W.js";import"./chunk.translations-es.Bh9mDab1.js";import"./chunk.translations-fr.B3yhrsaC.js";import"./chunk.translations-hr.B5_cxohh.js";import"./chunk.translations-it.DDcVOPnN.js";import"./chunk.translations-ru.BxzwpxMH.js";function T(){return{codeJs:`filterLowerCase("--Foo-Bar--");
// ${n("--Foo-Bar--")}

filterLowerCase("fooBar");
// ${n("fooBar")}

filterLowerCase("__FOO_BAR__");
// ${n("__FOO_BAR__")}`}}const $={name:"PageFilterLowerCaseExample",components:{AlohaExample:L},setup(){const{codeJs:e}=T();return{codeJs:e}}};function b(e,r,s,c,_,m){const a=t("aloha-example");return l(),p(a,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const O=i($,[["render",b]]);function I(){return{argumentsText:[{value:"value",types:["String"],text:"_PAGE_FILTER_LOWER_CASE_ARGUMENTS_VALUE_"}]}}function R(){return{pageTitle:"filterLowerCase"}}const y=`import {
  describe,
  expect,
  it,
} from "@jest/globals";

import filterLowerCase from "../filterLowerCase";

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
`,S={name:"PageFilterLowerCase",components:{AlohaPage:h,ATranslation:P,PageFilterArguments:B,PageFilterImportCompositionApi:F,PageFilterImportFunction:A,PageFilterLowerCaseExample:O,PageFilterTest:x},setup(){const{pageTitle:e}=R(),{argumentsText:r}=I();return{argumentsText:r,pageTitle:e,test:y}}};function v(e,r,s,c,_,m){const a=t("a-translation"),f=t("page-filter-import-function"),u=t("page-filter-import-composition-api"),g=t("page-filter-arguments"),d=t("page-filter-lower-case-example"),w=t("page-filter-test"),C=t("aloha-page");return l(),p(C,{"page-title":e.pageTitle},{body:E(()=>[o(a,{tag:"p",html:"_PAGE_FILTER_LOWER_CASE_DESCRIPTION_"}),o(f,{"function-name":"filterLowerCase","type-import":"filters"}),o(u,{"function-name":"filterLowerCase"}),o(g,{"arguments-text":e.argumentsText,"function-description":"filterLowerCase(value)"},null,8,["arguments-text"]),o(d),o(w,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const X=i(S,[["render",v]]);export{X as default};
