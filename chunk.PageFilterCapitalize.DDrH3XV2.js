import{A,a as h}from"./chunk.AlohaExample.YBEkNJHM.js";import{P as x,a as P,b as F}from"./chunk.PageFilterTest.DkJ0bO15.js";import{aO as n,_ as p,A as T}from"./bundle.index.Bn4EAoUB.js";import{V as l,e as t,W as s,aT as B,_ as a}from"./chunk.vendor.tcMGz7j_.js";import"./chunk.vendor-lodash.rFt76tyK.js";import{P as b}from"./chunk.PageFilterImportCompositionApi.D_yPTpag.js";import"./chunk.APageTabTitle.Cvp9tCUS.js";import"./chunk.AlohaHighlightjs.BwPt1uu6.js";import"./chunk.translations-ar.gQA2bIDx.js";import"./chunk.translations-de.Cs1lbELY.js";import"./chunk.translations-en.Dggm7bm6.js";import"./chunk.translations-es.B0VpZMt0.js";import"./chunk.translations-fr.zQdXa2f4.js";import"./chunk.translations-hr.BVkkSNp1.js";import"./chunk.translations-it.BH0mwprS.js";import"./chunk.translations-ru.CM_kaKL2.js";function I(){return{codeJs:`filterCapitalize("foobar");
// ${n("foobar")}

filterCapitalize("FOOBAR");
// ${n("FOOBAR")}

filterCapitalize("fOoBaR");
// ${n("fOoBaR")}`}}const E={name:"PageFilterCapitalizeExample",components:{AlohaExample:A},setup(){const{codeJs:e}=I();return{codeJs:e}}};function $(e,i,r,c,m,f){const o=t("aloha-example");return s(),l(o,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const O=p(E,[["render",$]]);function R(){return{argumentsText:[{value:"value",types:["String"],text:"_PAGE_FILTER_CAPITALIZE_ARGUMENTS_VALUE_"}]}}function y(){return{pageTitle:"filterCapitalize"}}const v=`import {
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
`,J={name:"PageFilterCapitalize",components:{AlohaPage:h,ATranslation:T,PageFilterArguments:F,PageFilterCapitalizeExample:O,PageFilterImportCompositionApi:b,PageFilterImportFunction:P,PageFilterTest:x},setup(){const{pageTitle:e}=y(),{argumentsText:i}=R();return{argumentsText:i,pageTitle:e,test:v}}};function L(e,i,r,c,m,f){const o=t("a-translation"),_=t("page-filter-import-function"),u=t("page-filter-import-composition-api"),g=t("page-filter-arguments"),d=t("page-filter-capitalize-example"),C=t("page-filter-test"),z=t("aloha-page");return s(),l(z,{"page-title":e.pageTitle},{body:B(()=>[a(o,{tag:"p",html:"_PAGE_FILTER_CAPITALIZE_DESCRIPTION_"}),a(_,{"function-name":"filterCapitalize","type-import":"filters"}),a(u,{"function-name":"filterCapitalize"}),a(g,{"arguments-text":e.argumentsText,"function-description":"filterCapitalize(value)"},null,8,["arguments-text"]),a(d),a(C,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const X=p(J,[["render",L]]);export{X as default};
