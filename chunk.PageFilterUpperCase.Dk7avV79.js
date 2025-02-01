import{ar as a,_ as s,A as U}from"./bundle.index.VWeDPPTP.js";import{O as i,b as t,Q as l,aR as x,V as r}from"./chunk.vendor.G4HJ_FUy.js";import"./chunk.vendor-lodash.DUClg1O3.js";import{A as h,a as P}from"./chunk.AlohaExample.pz_QK9vq.js";import{P as B,a as E,b as O}from"./chunk.PageFilterTest.DOA1LcYu.js";import{P as F}from"./chunk.PageFilterImportCompositionApi.C1y9Jiuf.js";import"./chunk.translations-ar.C-NNZ74u.js";import"./chunk.translations-de.DwcQ1j-I.js";import"./chunk.translations-en.CpaURLZT.js";import"./chunk.translations-es.BlLUKL-T.js";import"./chunk.translations-fr.CBV_DS4p.js";import"./chunk.translations-hr.CNqGGqH_.js";import"./chunk.translations-it.Csqv_psg.js";import"./chunk.translations-ru.D8ZNuRSu.js";import"./chunk.APageTabTitle.DvqMiiyW.js";import"./chunk.AlohaHighlightjs.Bnb6Sejr.js";function R(){return{codeJs:`filterUpperCase("--foo-bar--");
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
