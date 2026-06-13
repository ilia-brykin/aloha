import{A,a as h}from"./chunk.AlohaExample.DvEG2YnW.js";import{P as x,a as P,b as F}from"./chunk.PageFilterTest.CBbS-VGS.js";import{aQ as n,_ as p,A as T}from"./bundle.index.BfnA4HIK.js";import{Y as l,W as s,e as t,aU as B,$ as a}from"./chunk.vendor.N1c3KYO8.js";import"./chunk.vendor-lodash.DvfaiOPZ.js";import{P as b}from"./chunk.PageFilterImportCompositionApi.DJE8TbnD.js";import"./chunk.APageTabTitle.BwxAWwTE.js";import"./chunk.AlohaHighlightjs.C0HhAuqn.js";import"./chunk.translations-ar.CEE2zr9E.js";import"./chunk.translations-de.B5EkW3Bn.js";import"./chunk.translations-en.By5OazNK.js";import"./chunk.translations-es.BBwYsoM6.js";import"./chunk.translations-fr.sIUOe09m.js";import"./chunk.translations-hr.BW2q_4Qp.js";import"./chunk.translations-it.BpY7vfJm.js";import"./chunk.translations-ru.j7n72CSV.js";function I(){return{codeJs:`filterCapitalize("foobar");
// ${n("foobar")}

filterCapitalize("FOOBAR");
// ${n("FOOBAR")}

filterCapitalize("fOoBaR");
// ${n("fOoBaR")}`}}const $={name:"PageFilterCapitalizeExample",components:{AlohaExample:A},setup(){const{codeJs:e}=I();return{codeJs:e}}};function E(e,i,r,c,m,f){const o=t("aloha-example");return l(),s(o,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const O=p($,[["render",E]]);function R(){return{argumentsText:[{value:"value",types:["String"],text:"_PAGE_FILTER_CAPITALIZE_ARGUMENTS_VALUE_"}]}}function y(){return{pageTitle:"filterCapitalize"}}const v=`import {
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
`,J={name:"PageFilterCapitalize",components:{AlohaPage:h,ATranslation:T,PageFilterArguments:F,PageFilterCapitalizeExample:O,PageFilterImportCompositionApi:b,PageFilterImportFunction:P,PageFilterTest:x},setup(){const{pageTitle:e}=y(),{argumentsText:i}=R();return{argumentsText:i,pageTitle:e,test:v}}};function L(e,i,r,c,m,f){const o=t("a-translation"),_=t("page-filter-import-function"),u=t("page-filter-import-composition-api"),g=t("page-filter-arguments"),d=t("page-filter-capitalize-example"),C=t("page-filter-test"),z=t("aloha-page");return l(),s(z,{"page-title":e.pageTitle},{body:B(()=>[a(o,{tag:"p",html:"_PAGE_FILTER_CAPITALIZE_DESCRIPTION_"}),a(_,{"function-name":"filterCapitalize","type-import":"filters"}),a(u,{"function-name":"filterCapitalize"}),a(g,{"arguments-text":e.argumentsText,"function-description":"filterCapitalize(value)"},null,8,["arguments-text"]),a(d),a(C,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const H=p(J,[["render",L]]);export{H as default};
