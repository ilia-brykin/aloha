import{A,a as x}from"./chunk.AlohaExample.wjRzG7MJ.js";import{P as h,a as P,b as B}from"./chunk.PageFilterTest.Ci_bqug5.js";import{P as E}from"./chunk.PageFilterImportCompositionApi.DsrWUDdU.js";import{as as a,_ as s,A as R}from"./bundle.index.BhbL6qQY.js";import{R as i,e as t,U as l,aR as F,Y as r}from"./chunk.vendor.CDkHfsNc.js";import"./chunk.vendor-lodash.BXW4-Hvb.js";import"./chunk.APageTabTitle.C_62-mUE.js";import"./chunk.AlohaHighlightjs.DI9-5vSP.js";import"./chunk.translations-ar.BW4YNjOf.js";import"./chunk.translations-de.pnZGXXfR.js";import"./chunk.translations-en.CzHrEMzS.js";import"./chunk.translations-es.CVdE8egl.js";import"./chunk.translations-fr.hqb9JGfS.js";import"./chunk.translations-hr.DYwzCGFq.js";import"./chunk.translations-it.C5e5-FF3.js";import"./chunk.translations-ru.eTKud94F.js";function O(){return{codeJs:`filterUpperCase("--foo-bar--");
// ${a("--foo-bar--")}

filterUpperCase("fooBar");
// ${a("fooBar")}

filterUpperCase("__foo_bar__");
// ${a("__foo_bar__")}`}}const T={name:"PageFilterUpperCaseExample",components:{AlohaExample:A},setup(){const{codeJs:e}=O();return{codeJs:e}}};function $(e,o,p,c,_,m){const n=t("aloha-example");return l(),i(n,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const b=s(T,[["render",$]]);function L(){return{argumentsText:[{value:"value",types:["String"],text:"_PAGE_FILTER_UPPER_CASE_ARGUMENTS_VALUE_"}]}}function I(){return{pageTitle:"filterUpperCase"}}const S=`import {
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
`,v={name:"PageFilterUpperCase",components:{AlohaPage:x,ATranslation:R,PageFilterArguments:B,PageFilterImportCompositionApi:E,PageFilterImportFunction:P,PageFilterTest:h,PageFilterUpperCaseExample:b},setup(){const{pageTitle:e}=I(),{argumentsText:o}=L();return{argumentsText:o,pageTitle:e,test:S}}};function y(e,o,p,c,_,m){const n=t("a-translation"),f=t("page-filter-import-function"),u=t("page-filter-import-composition-api"),g=t("page-filter-arguments"),d=t("page-filter-upper-case-example"),C=t("page-filter-test"),U=t("aloha-page");return l(),i(U,{"page-title":e.pageTitle},{body:F(()=>[r(n,{tag:"p",html:"_PAGE_FILTER_UPPER_CASE_DESCRIPTION_"}),r(f,{"function-name":"filterUpperCase","type-import":"filters"}),r(u,{"function-name":"filterUpperCase"}),r(g,{"arguments-text":e.argumentsText,"function-description":"filterUpperCase(value)"},null,8,["arguments-text"]),r(d),r(C,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const X=s(v,[["render",y]]);export{X as default};
