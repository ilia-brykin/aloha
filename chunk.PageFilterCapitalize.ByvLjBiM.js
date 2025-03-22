import{A,a as h}from"./chunk.AlohaExample.DRAqqtIt.js";import{P as x,a as P,b as F}from"./chunk.PageFilterTest.CAOZl1IJ.js";import{au as n,_ as p,A as T}from"./bundle.index.G9ulyO5F.js";import{R as l,e as t,U as s,aR as B,Y as a}from"./chunk.vendor.C8MJL5OZ.js";import"./chunk.vendor-lodash.D7ZMGyiW.js";import{P as b}from"./chunk.PageFilterImportCompositionApi.ChD0I_sD.js";import"./chunk.APageTabTitle.yQtpI97A.js";import"./chunk.AlohaHighlightjs.BioRad36.js";import"./chunk.translations-ar.CzcnPFVK.js";import"./chunk.translations-de.C1xfQ1k1.js";import"./chunk.translations-en.BKP-rnbC.js";import"./chunk.translations-es.C7Us-9pZ.js";import"./chunk.translations-fr.Xaz9i6Fy.js";import"./chunk.translations-hr.DheYJgB_.js";import"./chunk.translations-it.CHCnhUXw.js";import"./chunk.translations-ru.C-YH7Mmz.js";function I(){return{codeJs:`filterCapitalize("foobar");
// ${n("foobar")}

filterCapitalize("FOOBAR");
// ${n("FOOBAR")}

filterCapitalize("fOoBaR");
// ${n("fOoBaR")}`}}const E={name:"PageFilterCapitalizeExample",components:{AlohaExample:A},setup(){const{codeJs:e}=I();return{codeJs:e}}};function $(e,i,r,c,m,f){const o=t("aloha-example");return s(),l(o,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const R=p(E,[["render",$]]);function O(){return{argumentsText:[{value:"value",types:["String"],text:"_PAGE_FILTER_CAPITALIZE_ARGUMENTS_VALUE_"}]}}function y(){return{pageTitle:"filterCapitalize"}}const v=`import {
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
`,J={name:"PageFilterCapitalize",components:{AlohaPage:h,ATranslation:T,PageFilterArguments:F,PageFilterCapitalizeExample:R,PageFilterImportCompositionApi:b,PageFilterImportFunction:P,PageFilterTest:x},setup(){const{pageTitle:e}=y(),{argumentsText:i}=O();return{argumentsText:i,pageTitle:e,test:v}}};function L(e,i,r,c,m,f){const o=t("a-translation"),_=t("page-filter-import-function"),u=t("page-filter-import-composition-api"),g=t("page-filter-arguments"),d=t("page-filter-capitalize-example"),C=t("page-filter-test"),z=t("aloha-page");return s(),l(z,{"page-title":e.pageTitle},{body:B(()=>[a(o,{tag:"p",html:"_PAGE_FILTER_CAPITALIZE_DESCRIPTION_"}),a(_,{"function-name":"filterCapitalize","type-import":"filters"}),a(u,{"function-name":"filterCapitalize"}),a(g,{"arguments-text":e.argumentsText,"function-description":"filterCapitalize(value)"},null,8,["arguments-text"]),a(d),a(C,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const W=p(J,[["render",L]]);export{W as default};
