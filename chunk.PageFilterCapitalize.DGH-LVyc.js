import{A,a as h}from"./chunk.AlohaExample.C5zbBUyN.js";import{P as x,a as P,b as F}from"./chunk.PageFilterTest.CKimVWly.js";import{aS as n,_ as p,A as T}from"./bundle.index.2fjrVuJ_.js";import{Y as l,W as s,f as e,aU as B,$ as a}from"./chunk.vendor.CWr53wb5.js";import"./chunk.vendor-lodash.CWoM99Se.js";import{P as b}from"./chunk.PageFilterImportCompositionApi.BHU6-MiL.js";import"./chunk.APageTabTitle.ByCz-RvO.js";import"./chunk.AlohaHighlightjs.Cyb5M4zM.js";import"./chunk.translations-ar.CG00cKrz.js";import"./chunk.translations-de.jRMdBWJu.js";import"./chunk.translations-en.Ccpp2c3W.js";import"./chunk.translations-es.Bh9mDab1.js";import"./chunk.translations-fr.B3yhrsaC.js";import"./chunk.translations-hr.B5_cxohh.js";import"./chunk.translations-it.DDcVOPnN.js";import"./chunk.translations-ru.BxzwpxMH.js";function I(){return{codeJs:`filterCapitalize("foobar");
// ${n("foobar")}

filterCapitalize("FOOBAR");
// ${n("FOOBAR")}

filterCapitalize("fOoBaR");
// ${n("fOoBaR")}`}}const $={name:"PageFilterCapitalizeExample",components:{AlohaExample:A},setup(){const{codeJs:t}=I();return{codeJs:t}}};function E(t,i,r,c,m,f){const o=e("aloha-example");return l(),s(o,{"code-js":t.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const O=p($,[["render",E]]);function R(){return{argumentsText:[{value:"value",types:["String"],text:"_PAGE_FILTER_CAPITALIZE_ARGUMENTS_VALUE_"}]}}function y(){return{pageTitle:"filterCapitalize"}}const S=`import {
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
`,v={name:"PageFilterCapitalize",components:{AlohaPage:h,ATranslation:T,PageFilterArguments:F,PageFilterCapitalizeExample:O,PageFilterImportCompositionApi:b,PageFilterImportFunction:P,PageFilterTest:x},setup(){const{pageTitle:t}=y(),{argumentsText:i}=R();return{argumentsText:i,pageTitle:t,test:S}}};function J(t,i,r,c,m,f){const o=e("a-translation"),_=e("page-filter-import-function"),u=e("page-filter-import-composition-api"),g=e("page-filter-arguments"),d=e("page-filter-capitalize-example"),C=e("page-filter-test"),z=e("aloha-page");return l(),s(z,{"page-title":t.pageTitle},{body:B(()=>[a(o,{tag:"p",html:"_PAGE_FILTER_CAPITALIZE_DESCRIPTION_"}),a(_,{"function-name":"filterCapitalize","type-import":"filters"}),a(u,{"function-name":"filterCapitalize"}),a(g,{"arguments-text":t.argumentsText,"function-description":"filterCapitalize(value)"},null,8,["arguments-text"]),a(d),a(C,{test:t.test},null,8,["test"])]),_:1},8,["page-title"])}const Q=p(v,[["render",J]]);export{Q as default};
