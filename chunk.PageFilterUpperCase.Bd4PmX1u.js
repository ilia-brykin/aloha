import{A,a as x}from"./chunk.AlohaExample.DJGJP9Er.js";import{b as h,a as P,P as B}from"./chunk.PageFilterTest.DxCqTXIN.js";import{P as E}from"./chunk.PageFilterImportCompositionApi.6ZX2BXy9.js";import{aG as n,ah as s,a3 as F}from"./bundle.index.8diqlMmu.js";import{bc as i,aQ as l,bi as t,br as O,aV as r}from"./chunk.vendor.B7xidcyX.js";import"./chunk.vendor-lodash.DHCI5OYQ.js";import"./chunk.APageTabTitle.-kMqBjfq.js";import"./chunk.AlohaHighlightjs.5M2Lhx9-.js";import"./chunk.translations-ar.2GEIsQx2.js";import"./chunk.translations-de.B3W8Bch8.js";import"./chunk.translations-en.D6ESzlsX.js";import"./chunk.translations-es.XiUlXUqv.js";import"./chunk.translations-fr.Vq0cpCce.js";import"./chunk.translations-hr.47g55_67.js";import"./chunk.translations-it.DbY58g7f.js";import"./chunk.translations-ru.B_xj7EMA.js";function R(){return{codeJs:`filterUpperCase("--foo-bar--");
// ${n("--foo-bar--")}

filterUpperCase("fooBar");
// ${n("fooBar")}

filterUpperCase("__foo_bar__");
// ${n("__foo_bar__")}`}}const b={name:"PageFilterUpperCaseExample",components:{AlohaExample:A},setup(){const{codeJs:e}=R();return{codeJs:e}}};function T(e,o,p,c,_,m){const a=t("aloha-example");return i(),l(a,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const $=s(b,[["render",T]]);function L(){return{argumentsText:[{value:"value",types:["String"],text:"_PAGE_FILTER_UPPER_CASE_ARGUMENTS_VALUE_"}]}}function I(){return{pageTitle:"filterUpperCase"}}const S=`import {
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
`,v={name:"PageFilterUpperCase",components:{AlohaPage:x,ATranslation:F,PageFilterArguments:B,PageFilterImportCompositionApi:E,PageFilterImportFunction:P,PageFilterTest:h,PageFilterUpperCaseExample:$},setup(){const{pageTitle:e}=I(),{argumentsText:o}=L();return{argumentsText:o,pageTitle:e,test:S}}};function y(e,o,p,c,_,m){const a=t("a-translation"),f=t("page-filter-import-function"),u=t("page-filter-import-composition-api"),g=t("page-filter-arguments"),d=t("page-filter-upper-case-example"),C=t("page-filter-test"),U=t("aloha-page");return i(),l(U,{"page-title":e.pageTitle},{body:O(()=>[r(a,{tag:"p",html:"_PAGE_FILTER_UPPER_CASE_DESCRIPTION_"}),r(f,{"function-name":"filterUpperCase","type-import":"filters"}),r(u,{"function-name":"filterUpperCase"}),r(g,{"arguments-text":e.argumentsText,"function-description":"filterUpperCase(value)"},null,8,["arguments-text"]),r(d),r(C,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const X=s(v,[["render",y]]);export{X as default};
