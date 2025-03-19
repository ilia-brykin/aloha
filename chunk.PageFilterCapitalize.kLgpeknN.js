import{au as n,_ as p,A}from"./bundle.index.Dgzc7bjQ.js";import{O as l,b as e,Q as s,aR as h,V as a}from"./chunk.vendor.CjhiT8UL.js";import"./chunk.vendor-lodash.DyQEPI1B.js";import{A as x,a as P}from"./chunk.AlohaExample.CIkLb_bK.js";import{P as F,a as T,b}from"./chunk.PageFilterTest.CJGsC8UY.js";import{P as B}from"./chunk.PageFilterImportCompositionApi.c7YQdEsH.js";import"./chunk.translations-ar.C11Uen7Y.js";import"./chunk.translations-de.BBAHPZjP.js";import"./chunk.translations-en.CqBU0PE_.js";import"./chunk.translations-es.DvkoYeON.js";import"./chunk.translations-fr.C7hT-abA.js";import"./chunk.translations-hr.D7VNFl8O.js";import"./chunk.translations-it.3UCFXD55.js";import"./chunk.translations-ru.DEOz_l29.js";import"./chunk.APageTabTitle.DXIasEKs.js";import"./chunk.AlohaHighlightjs.rF1jvLhM.js";function I(){return{codeJs:`filterCapitalize("foobar");
// ${n("foobar")}

filterCapitalize("FOOBAR");
// ${n("FOOBAR")}

filterCapitalize("fOoBaR");
// ${n("fOoBaR")}`}}const E={name:"PageFilterCapitalizeExample",components:{AlohaExample:x},setup(){const{codeJs:t}=I();return{codeJs:t}}};function $(t,i,r,c,m,f){const o=e("aloha-example");return s(),l(o,{"code-js":t.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const O=p(E,[["render",$]]);function R(){return{argumentsText:[{value:"value",types:["String"],text:"_PAGE_FILTER_CAPITALIZE_ARGUMENTS_VALUE_"}]}}function y(){return{pageTitle:"filterCapitalize"}}const v=`import {
  describe,
  expect,
  it,
} from "@jest/globals";

import filterCapitalize from "../filterCapitalize";

describe("filterCapitalize", () => {
  it("should capitalize a lowercase string", () => {
    expect(filterCapitalize("foobar")).toBe("Foobar");
  });

  it("should capitalize an uppercase string", () => {
    expect(filterCapitalize("FOOBAR")).toBe("Foobar");
  });

  it("should capitalize a mixed case string", () => {
    expect(filterCapitalize("fOoBaR")).toBe("Foobar");
  });

  it("should handle an empty string", () => {
    expect(filterCapitalize("")).toBe("");
  });

  it("should handle a string with one character", () => {
    expect(filterCapitalize("a")).toBe("A");
    expect(filterCapitalize("A")).toBe("A");
  });

  it("should handle strings with spaces", () => {
    expect(filterCapitalize(" foo bar ")).toBe(" foo bar ");
  });

  it("should not change already capitalized strings", () => {
    expect(filterCapitalize("Foobar")).toBe("Foobar");
  });
});
`,J={name:"PageFilterCapitalize",components:{AlohaPage:P,ATranslation:A,PageFilterArguments:b,PageFilterCapitalizeExample:O,PageFilterImportCompositionApi:B,PageFilterImportFunction:T,PageFilterTest:F},setup(){const{pageTitle:t}=y(),{argumentsText:i}=R();return{argumentsText:i,pageTitle:t,test:v}}};function L(t,i,r,c,m,f){const o=e("a-translation"),_=e("page-filter-import-function"),u=e("page-filter-import-composition-api"),g=e("page-filter-arguments"),d=e("page-filter-capitalize-example"),C=e("page-filter-test"),z=e("aloha-page");return s(),l(z,{"page-title":t.pageTitle},{body:h(()=>[a(o,{tag:"p",html:"_PAGE_FILTER_CAPITALIZE_DESCRIPTION_"}),a(_,{"function-name":"filterCapitalize","type-import":"filters"}),a(u,{"function-name":"filterCapitalize"}),a(g,{"arguments-text":t.argumentsText,"function-description":"filterCapitalize(value)"},null,8,["arguments-text"]),a(d),a(C,{test:t.test},null,8,["test"])]),_:1},8,["page-title"])}const X=p(J,[["render",L]]);export{X as default};
