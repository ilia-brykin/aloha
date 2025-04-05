import{A as L,a as x}from"./chunk.AlohaExample.Db1d90z1.js";import{P as h,a as A,b as B}from"./chunk.PageFilterTest.Da47MU1s.js";import{P as F}from"./chunk.PageFilterImportCompositionApi.B6ucazSV.js";import{ax as n,_ as i,A as P}from"./bundle.index.CpfT0ZXn.js";import{U as l,e as t,V as p,aS as E,Z as o}from"./chunk.vendor.CJgiAfkr.js";import"./chunk.vendor-lodash.UgDJRseT.js";import"./chunk.APageTabTitle.Bec6XN-I.js";import"./chunk.AlohaHighlightjs.CS2rrB7v.js";import"./chunk.translations-ar.CRSqWM-O.js";import"./chunk.translations-de.DjaUDnX7.js";import"./chunk.translations-en.D06nPbSy.js";import"./chunk.translations-es.BPAQvJxz.js";import"./chunk.translations-fr.B_IaVsp8.js";import"./chunk.translations-hr.CxFe84yG.js";import"./chunk.translations-it.DLGLVeGG.js";import"./chunk.translations-ru.DEb0AC-O.js";function T(){return{codeJs:`filterLowerCase("--Foo-Bar--");
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
`,S={name:"PageFilterLowerCase",components:{AlohaPage:x,ATranslation:P,PageFilterArguments:B,PageFilterImportCompositionApi:F,PageFilterImportFunction:A,PageFilterLowerCaseExample:O,PageFilterTest:h},setup(){const{pageTitle:e}=R(),{argumentsText:r}=I();return{argumentsText:r,pageTitle:e,test:y}}};function v(e,r,s,c,_,m){const a=t("a-translation"),f=t("page-filter-import-function"),u=t("page-filter-import-composition-api"),g=t("page-filter-arguments"),d=t("page-filter-lower-case-example"),w=t("page-filter-test"),C=t("aloha-page");return p(),l(C,{"page-title":e.pageTitle},{body:E(()=>[o(a,{tag:"p",html:"_PAGE_FILTER_LOWER_CASE_DESCRIPTION_"}),o(f,{"function-name":"filterLowerCase","type-import":"filters"}),o(u,{"function-name":"filterLowerCase"}),o(g,{"arguments-text":e.argumentsText,"function-description":"filterLowerCase(value)"},null,8,["arguments-text"]),o(d),o(w,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const X=i(S,[["render",v]]);export{X as default};
