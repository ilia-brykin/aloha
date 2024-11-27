import{A,a as h}from"./chunk.AlohaExample.BT0L4sPf.js";import{aL as o,_ as l,A as x}from"./bundle.index.CgpAdSdY.js";import{P,a as F,b as B}from"./chunk.PageFilterTest.DueiWPai.js";import{m as t,C as p,B as s,L as T,G as a}from"./chunk.vendor.D-Y3mz6a.js";import{P as b}from"./chunk.PageFilterImportCompositionApi.5-X5CRoG.js";import"./chunk.vendor-lodash.ClBXVCWL.js";import"./chunk.vendor-tinymce.2RT9eEW9.js";function I(){return{codeJs:`filterCapitalize("foobar");
// ${o("foobar")}

filterCapitalize("FOOBAR");
// ${o("FOOBAR")}

filterCapitalize("fOoBaR");
// ${o("fOoBaR")}`}}const E={name:"PageFilterCapitalizeExample",components:{AlohaExample:A},setup(){const{codeJs:e}=I();return{codeJs:e}}};function $(e,i,r,c,m,f){const n=t("aloha-example");return s(),p(n,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const O=l(E,[["render",$]]);function R(){return{argumentsText:[{value:"value",types:["String"],text:"_PAGE_FILTER_CAPITALIZE_ARGUMENTS_VALUE_"}]}}function L(){return{pageTitle:"filterCapitalize"}}const y=`import filterCapitalize from "../filterCapitalize";

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
`,v={name:"PageFilterCapitalize",components:{AlohaPage:h,ATranslation:x,PageFilterArguments:P,PageFilterCapitalizeExample:O,PageFilterImportCompositionApi:b,PageFilterImportFunction:F,PageFilterTest:B},setup(){const{pageTitle:e}=L(),{argumentsText:i}=R();return{argumentsText:i,pageTitle:e,test:y}}};function G(e,i,r,c,m,f){const n=t("a-translation"),_=t("page-filter-import-function"),u=t("page-filter-import-composition-api"),g=t("page-filter-arguments"),d=t("page-filter-capitalize-example"),C=t("page-filter-test"),z=t("aloha-page");return s(),p(z,{"page-title":e.pageTitle},{body:T(()=>[a(n,{tag:"p",html:"_PAGE_FILTER_CAPITALIZE_DESCRIPTION_"}),a(_,{"function-name":"filterCapitalize","type-import":"filters"}),a(u,{"function-name":"filterCapitalize"}),a(g,{"arguments-text":e.argumentsText,"function-description":"filterCapitalize(value)"},null,8,["arguments-text"]),a(d),a(C,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const k=l(v,[["render",G]]);export{k as default};
