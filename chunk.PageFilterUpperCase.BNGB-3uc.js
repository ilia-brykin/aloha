import{as as a,_ as s,A as U}from"./bundle.index.B75f-u9m.js";import{O as i,b as t,Q as l,aR as x,V as r}from"./chunk.vendor.CjhiT8UL.js";import"./chunk.vendor-lodash.190Qxk1-.js";import{A as h,a as P}from"./chunk.AlohaExample.DgERlt6x.js";import{P as B,a as E,b as O}from"./chunk.PageFilterTest.BiM4FSco.js";import{P as F}from"./chunk.PageFilterImportCompositionApi.BmHZodPM.js";import"./chunk.translations-ar.YNfZ53wA.js";import"./chunk.translations-de.BdlTgl_y.js";import"./chunk.translations-en.Bnu0Ksli.js";import"./chunk.translations-es.M-9LR_r9.js";import"./chunk.translations-fr.8Qh384go.js";import"./chunk.translations-hr.u4Wv8OnD.js";import"./chunk.translations-it.BuPlbyQZ.js";import"./chunk.translations-ru.QRTEonlW.js";import"./chunk.APageTabTitle.C8fSobta.js";import"./chunk.AlohaHighlightjs.rF1jvLhM.js";function R(){return{codeJs:`filterUpperCase("--foo-bar--");
// ${a("--foo-bar--")}

filterUpperCase("fooBar");
// ${a("fooBar")}

filterUpperCase("__foo_bar__");
// ${a("__foo_bar__")}`}}const T={name:"PageFilterUpperCaseExample",components:{AlohaExample:h},setup(){const{codeJs:e}=R();return{codeJs:e}}};function $(e,o,p,c,_,m){const n=t("aloha-example");return l(),i(n,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const b=s(T,[["render",$]]);function L(){return{argumentsText:[{value:"value",types:["String"],text:"_PAGE_FILTER_UPPER_CASE_ARGUMENTS_VALUE_"}]}}function I(){return{pageTitle:"filterUpperCase"}}const S=`import {
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
`,v={name:"PageFilterUpperCase",components:{AlohaPage:P,ATranslation:U,PageFilterArguments:O,PageFilterImportCompositionApi:F,PageFilterImportFunction:E,PageFilterTest:B,PageFilterUpperCaseExample:b},setup(){const{pageTitle:e}=I(),{argumentsText:o}=L();return{argumentsText:o,pageTitle:e,test:S}}};function y(e,o,p,c,_,m){const n=t("a-translation"),f=t("page-filter-import-function"),u=t("page-filter-import-composition-api"),g=t("page-filter-arguments"),d=t("page-filter-upper-case-example"),C=t("page-filter-test"),A=t("aloha-page");return l(),i(A,{"page-title":e.pageTitle},{body:x(()=>[r(n,{tag:"p",html:"_PAGE_FILTER_UPPER_CASE_DESCRIPTION_"}),r(f,{"function-name":"filterUpperCase","type-import":"filters"}),r(u,{"function-name":"filterUpperCase"}),r(g,{"arguments-text":e.argumentsText,"function-description":"filterUpperCase(value)"},null,8,["arguments-text"]),r(d),r(C,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const X=s(v,[["render",y]]);export{X as default};
