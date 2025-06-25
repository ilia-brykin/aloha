import{A,a as x}from"./chunk.AlohaExample.DLehf_8H.js";import{P as h,a as P,b as B}from"./chunk.PageFilterTest.CUn0fb2_.js";import{P as E}from"./chunk.PageFilterImportCompositionApi.D2jnLa0Z.js";import{ay as a,_ as s,A as F}from"./bundle.index.Dsb3-Sd7.js";import{U as i,e as t,V as l,aS as O,Z as r}from"./chunk.vendor.COYgx38y.js";import"./chunk.vendor-lodash.xyEKcfD7.js";import"./chunk.APageTabTitle.D6GsiyeY.js";import"./chunk.AlohaHighlightjs.CW1W2LCP.js";import"./chunk.translations-ar.Ba3-jBbd.js";import"./chunk.translations-de.BkjBBp2O.js";import"./chunk.translations-en.BXMPX4Pv.js";import"./chunk.translations-es.C_lJjw9A.js";import"./chunk.translations-fr.Duvlphhj.js";import"./chunk.translations-hr.BcoPLaR6.js";import"./chunk.translations-it.B0l4u3QD.js";import"./chunk.translations-ru.BBvNAu0E.js";function R(){return{codeJs:`filterUpperCase("--foo-bar--");
// ${a("--foo-bar--")}

filterUpperCase("fooBar");
// ${a("fooBar")}

filterUpperCase("__foo_bar__");
// ${a("__foo_bar__")}`}}const T={name:"PageFilterUpperCaseExample",components:{AlohaExample:A},setup(){const{codeJs:e}=R();return{codeJs:e}}};function $(e,o,p,c,_,m){const n=t("aloha-example");return l(),i(n,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const b=s(T,[["render",$]]);function L(){return{argumentsText:[{value:"value",types:["String"],text:"_PAGE_FILTER_UPPER_CASE_ARGUMENTS_VALUE_"}]}}function I(){return{pageTitle:"filterUpperCase"}}const S=`import {
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
`,y={name:"PageFilterUpperCase",components:{AlohaPage:x,ATranslation:F,PageFilterArguments:B,PageFilterImportCompositionApi:E,PageFilterImportFunction:P,PageFilterTest:h,PageFilterUpperCaseExample:b},setup(){const{pageTitle:e}=I(),{argumentsText:o}=L();return{argumentsText:o,pageTitle:e,test:S}}};function v(e,o,p,c,_,m){const n=t("a-translation"),f=t("page-filter-import-function"),u=t("page-filter-import-composition-api"),g=t("page-filter-arguments"),d=t("page-filter-upper-case-example"),C=t("page-filter-test"),U=t("aloha-page");return l(),i(U,{"page-title":e.pageTitle},{body:O(()=>[r(n,{tag:"p",html:"_PAGE_FILTER_UPPER_CASE_DESCRIPTION_"}),r(f,{"function-name":"filterUpperCase","type-import":"filters"}),r(u,{"function-name":"filterUpperCase"}),r(g,{"arguments-text":e.argumentsText,"function-description":"filterUpperCase(value)"},null,8,["arguments-text"]),r(d),r(C,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const Q=s(y,[["render",v]]);export{Q as default};
