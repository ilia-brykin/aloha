import{A,a as h}from"./chunk.AlohaExample.CNUKYhj9.js";import{as as n,_ as p,A as x}from"./bundle.index.eNPp1wWE.js";import{P,a as F,b as T}from"./chunk.PageFilterTest.YM5G3dSf.js";import{k as e,J as l,H as s,aQ as B,O as a}from"./chunk.vendor.DTe1dwcY.js";import"./chunk.vendor-lodash.DYgvgMhr.js";import{P as b}from"./chunk.PageFilterImportCompositionApi.DVSjJWB2.js";import"./chunk.APageTabTitle.pDEt_bAO.js";import"./chunk.AlohaHighlightjs.BnoxTF5z.js";import"./chunk.translations-ar.8jZGvIuU.js";import"./chunk.translations-de.z8dP1xPr.js";import"./chunk.translations-en.Ct_ieKJu.js";import"./chunk.translations-es.DM91cTxg.js";import"./chunk.translations-fr.DldAQ81m.js";import"./chunk.translations-hr.Bm2wFx61.js";import"./chunk.translations-it.BdWP_4LO.js";import"./chunk.translations-ru.DDyMdjW6.js";function I(){return{codeJs:`filterCapitalize("foobar");
// ${n("foobar")}

filterCapitalize("FOOBAR");
// ${n("FOOBAR")}

filterCapitalize("fOoBaR");
// ${n("fOoBaR")}`}}const E={name:"PageFilterCapitalizeExample",components:{AlohaExample:A},setup(){const{codeJs:t}=I();return{codeJs:t}}};function $(t,i,r,c,m,f){const o=e("aloha-example");return s(),l(o,{"code-js":t.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const O=p(E,[["render",$]]);function R(){return{argumentsText:[{value:"value",types:["String"],text:"_PAGE_FILTER_CAPITALIZE_ARGUMENTS_VALUE_"}]}}function y(){return{pageTitle:"filterCapitalize"}}const J=`import filterCapitalize from "../filterCapitalize";

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
`,v={name:"PageFilterCapitalize",components:{AlohaPage:h,ATranslation:x,PageFilterArguments:P,PageFilterCapitalizeExample:O,PageFilterImportCompositionApi:b,PageFilterImportFunction:F,PageFilterTest:T},setup(){const{pageTitle:t}=y(),{argumentsText:i}=R();return{argumentsText:i,pageTitle:t,test:J}}};function L(t,i,r,c,m,f){const o=e("a-translation"),_=e("page-filter-import-function"),u=e("page-filter-import-composition-api"),g=e("page-filter-arguments"),d=e("page-filter-capitalize-example"),C=e("page-filter-test"),z=e("aloha-page");return s(),l(z,{"page-title":t.pageTitle},{body:B(()=>[a(o,{tag:"p",html:"_PAGE_FILTER_CAPITALIZE_DESCRIPTION_"}),a(_,{"function-name":"filterCapitalize","type-import":"filters"}),a(u,{"function-name":"filterCapitalize"}),a(g,{"arguments-text":t.argumentsText,"function-description":"filterCapitalize(value)"},null,8,["arguments-text"]),a(d),a(C,{test:t.test},null,8,["test"])]),_:1},8,["page-title"])}const X=p(v,[["render",L]]);export{X as default};
