import{A,a as x}from"./chunk.AlohaExample.C5zbBUyN.js";import{P as h,a as P,b as B}from"./chunk.PageFilterTest.CKimVWly.js";import{P as E}from"./chunk.PageFilterImportCompositionApi.BHU6-MiL.js";import{aQ as a,_ as s,A as F}from"./bundle.index.2fjrVuJ_.js";import{Y as i,W as l,f as t,aU as O,$ as r}from"./chunk.vendor.CWr53wb5.js";import"./chunk.vendor-lodash.CWoM99Se.js";import"./chunk.APageTabTitle.ByCz-RvO.js";import"./chunk.AlohaHighlightjs.Cyb5M4zM.js";import"./chunk.translations-ar.CG00cKrz.js";import"./chunk.translations-de.jRMdBWJu.js";import"./chunk.translations-en.Ccpp2c3W.js";import"./chunk.translations-es.Bh9mDab1.js";import"./chunk.translations-fr.B3yhrsaC.js";import"./chunk.translations-hr.B5_cxohh.js";import"./chunk.translations-it.DDcVOPnN.js";import"./chunk.translations-ru.BxzwpxMH.js";function R(){return{codeJs:`filterUpperCase("--foo-bar--");
// ${a("--foo-bar--")}

filterUpperCase("fooBar");
// ${a("fooBar")}

filterUpperCase("__foo_bar__");
// ${a("__foo_bar__")}`}}const T={name:"PageFilterUpperCaseExample",components:{AlohaExample:A},setup(){const{codeJs:e}=R();return{codeJs:e}}};function $(e,o,p,c,_,m){const n=t("aloha-example");return i(),l(n,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const b=s(T,[["render",$]]);function L(){return{argumentsText:[{value:"value",types:["String"],text:"_PAGE_FILTER_UPPER_CASE_ARGUMENTS_VALUE_"}]}}function I(){return{pageTitle:"filterUpperCase"}}const S=`import {
  describe,
  expect,
  it,
} from "@jest/globals";

import filterUpperCase from "../filterUpperCase";

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
`,v={name:"PageFilterUpperCase",components:{AlohaPage:x,ATranslation:F,PageFilterArguments:B,PageFilterImportCompositionApi:E,PageFilterImportFunction:P,PageFilterTest:h,PageFilterUpperCaseExample:b},setup(){const{pageTitle:e}=I(),{argumentsText:o}=L();return{argumentsText:o,pageTitle:e,test:S}}};function y(e,o,p,c,_,m){const n=t("a-translation"),f=t("page-filter-import-function"),u=t("page-filter-import-composition-api"),g=t("page-filter-arguments"),d=t("page-filter-upper-case-example"),C=t("page-filter-test"),U=t("aloha-page");return i(),l(U,{"page-title":e.pageTitle},{body:O(()=>[r(n,{tag:"p",html:"_PAGE_FILTER_UPPER_CASE_DESCRIPTION_"}),r(f,{"function-name":"filterUpperCase","type-import":"filters"}),r(u,{"function-name":"filterUpperCase"}),r(g,{"arguments-text":e.argumentsText,"function-description":"filterUpperCase(value)"},null,8,["arguments-text"]),r(d),r(C,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const X=s(v,[["render",y]]);export{X as default};
