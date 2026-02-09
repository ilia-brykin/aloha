import{A as L,a as h}from"./chunk.AlohaExample.Bcv-pafY.js";import{P as x,a as A,b as B}from"./chunk.PageFilterTest.CTvQv_T5.js";import{P as F}from"./chunk.PageFilterImportCompositionApi.mL-LpXF3.js";import{aS as n,_ as i,A as P}from"./bundle.index.B3v-nz5-.js";import{W as l,V as p,e as t,aT as T,_ as o}from"./chunk.vendor.CVk5hDWp.js";import"./chunk.vendor-lodash.D5YICsTb.js";import"./chunk.APageTabTitle.DBH57yo7.js";import"./chunk.AlohaHighlightjs.Bm62qoBx.js";import"./chunk.translations-ar.BtP4GqEz.js";import"./chunk.translations-de.Dp-j0uD7.js";import"./chunk.translations-en.BUtnFqog.js";import"./chunk.translations-es.DnWuiXK5.js";import"./chunk.translations-fr.BFFB3ZMJ.js";import"./chunk.translations-hr.BWTSTz9r.js";import"./chunk.translations-it.DbrxqECB.js";import"./chunk.translations-ru.BqB5NBtM.js";function E(){return{codeJs:`filterLowerCase("--Foo-Bar--");
// ${n("--Foo-Bar--")}

filterLowerCase("fooBar");
// ${n("fooBar")}

filterLowerCase("__FOO_BAR__");
// ${n("__FOO_BAR__")}`}}const $={name:"PageFilterLowerCaseExample",components:{AlohaExample:L},setup(){const{codeJs:e}=E();return{codeJs:e}}};function b(e,r,s,c,_,m){const a=t("aloha-example");return l(),p(a,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const O=i($,[["render",b]]);function I(){return{argumentsText:[{value:"value",types:["String"],text:"_PAGE_FILTER_LOWER_CASE_ARGUMENTS_VALUE_"}]}}function R(){return{pageTitle:"filterLowerCase"}}const y=`import {
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
`,S={name:"PageFilterLowerCase",components:{AlohaPage:h,ATranslation:P,PageFilterArguments:B,PageFilterImportCompositionApi:F,PageFilterImportFunction:A,PageFilterLowerCaseExample:O,PageFilterTest:x},setup(){const{pageTitle:e}=R(),{argumentsText:r}=I();return{argumentsText:r,pageTitle:e,test:y}}};function v(e,r,s,c,_,m){const a=t("a-translation"),f=t("page-filter-import-function"),u=t("page-filter-import-composition-api"),g=t("page-filter-arguments"),d=t("page-filter-lower-case-example"),w=t("page-filter-test"),C=t("aloha-page");return l(),p(C,{"page-title":e.pageTitle},{body:T(()=>[o(a,{tag:"p",html:"_PAGE_FILTER_LOWER_CASE_DESCRIPTION_"}),o(f,{"function-name":"filterLowerCase","type-import":"filters"}),o(u,{"function-name":"filterLowerCase"}),o(g,{"arguments-text":e.argumentsText,"function-description":"filterLowerCase(value)"},null,8,["arguments-text"]),o(d),o(w,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const Y=i(S,[["render",v]]);export{Y as default};
