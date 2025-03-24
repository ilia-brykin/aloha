import{A as L,a as h}from"./chunk.AlohaExample.D-BUV1j9.js";import{P as x,a as A,b as B}from"./chunk.PageFilterTest.RM-_p-WB.js";import{P as F}from"./chunk.PageFilterImportCompositionApi.ChIUdwjt.js";import{aw as n,_ as i,A as P}from"./bundle.index.B_GRLDdd.js";import{U as l,e as t,V as p,aS as E,Z as o}from"./chunk.vendor.BCr5dHHZ.js";import"./chunk.vendor-lodash.1bZ290WX.js";import"./chunk.APageTabTitle.CHSnL-Cd.js";import"./chunk.AlohaHighlightjs.YRvFUhHX.js";import"./chunk.translations-ar.BW4YNjOf.js";import"./chunk.translations-de.pnZGXXfR.js";import"./chunk.translations-en.CzHrEMzS.js";import"./chunk.translations-es.CVdE8egl.js";import"./chunk.translations-fr.hqb9JGfS.js";import"./chunk.translations-hr.DYwzCGFq.js";import"./chunk.translations-it.C5e5-FF3.js";import"./chunk.translations-ru.eTKud94F.js";function T(){return{codeJs:`filterLowerCase("--Foo-Bar--");
// ${n("--Foo-Bar--")}

filterLowerCase("fooBar");
// ${n("fooBar")}

filterLowerCase("__FOO_BAR__");
// ${n("__FOO_BAR__")}`}}const $={name:"PageFilterLowerCaseExample",components:{AlohaExample:L},setup(){const{codeJs:e}=T();return{codeJs:e}}};function b(e,r,s,c,_,m){const a=t("aloha-example");return p(),l(a,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const O=i($,[["render",b]]);function I(){return{argumentsText:[{value:"value",types:["String"],text:"_PAGE_FILTER_LOWER_CASE_ARGUMENTS_VALUE_"}]}}function R(){return{pageTitle:"filterLowerCase"}}const y=`import {
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
`,S={name:"PageFilterLowerCase",components:{AlohaPage:h,ATranslation:P,PageFilterArguments:B,PageFilterImportCompositionApi:F,PageFilterImportFunction:A,PageFilterLowerCaseExample:O,PageFilterTest:x},setup(){const{pageTitle:e}=R(),{argumentsText:r}=I();return{argumentsText:r,pageTitle:e,test:y}}};function v(e,r,s,c,_,m){const a=t("a-translation"),f=t("page-filter-import-function"),u=t("page-filter-import-composition-api"),g=t("page-filter-arguments"),d=t("page-filter-lower-case-example"),w=t("page-filter-test"),C=t("aloha-page");return p(),l(C,{"page-title":e.pageTitle},{body:E(()=>[o(a,{tag:"p",html:"_PAGE_FILTER_LOWER_CASE_DESCRIPTION_"}),o(f,{"function-name":"filterLowerCase","type-import":"filters"}),o(u,{"function-name":"filterLowerCase"}),o(g,{"arguments-text":e.argumentsText,"function-description":"filterLowerCase(value)"},null,8,["arguments-text"]),o(d),o(w,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const X=i(S,[["render",v]]);export{X as default};
