import{aC as r,_ as a,A as E}from"./bundle.index.B44RZdL-.js";import{O as c,b as t,Q as u,aR as A,V as o}from"./chunk.vendor.CjhiT8UL.js";import"./chunk.vendor-lodash.DyQEPI1B.js";import{A as f,a as G}from"./chunk.AlohaExample.Bz-QZtJt.js";import{P as T,a as F,b as I}from"./chunk.PageFilterTest.C8Zb0V_q.js";import{P as R}from"./chunk.PageFilterImportCompositionApi.BAJGoheW.js";import"./chunk.translations-ar.C11Uen7Y.js";import"./chunk.translations-de.BBAHPZjP.js";import"./chunk.translations-en.B4jxLOVM.js";import"./chunk.translations-es.DvkoYeON.js";import"./chunk.translations-fr.C7hT-abA.js";import"./chunk.translations-hr.D7VNFl8O.js";import"./chunk.translations-it.3UCFXD55.js";import"./chunk.translations-ru.DEOz_l29.js";import"./chunk.APageTabTitle.DC3T1__y.js";import"./chunk.AlohaHighlightjs.rF1jvLhM.js";function J(){return{codeJs:`filterCurrency(1000222.55, { digitGrouping: false });
// ${r(100022255e-2,{digitGrouping:!1})}

filterCurrency(1000222.55, { digitGrouping: true });
// ${r(100022255e-2,{digitGrouping:!0})}`}}const b={name:"PageFilterCurrencyDigitGrouping",components:{AlohaExample:f},setup(){const{codeJs:e}=J();return{codeJs:e}}};function v(e,i,s,p,l,_){const n=t("aloha-example");return u(),c(n,{"code-js":e.codeJs,header:"digitGrouping","is-code-visible-default":!0},null,8,["code-js"])}const N=a(b,[["render",v]]);function S(){return{codeJs:`filterCurrency(2000, { digits: 0 });
// ${r(2e3,{digits:0})}

filterCurrency("25.53451", { digits: 4 });
// ${r("25.53451",{digits:4})}`}}const U={name:"PageFilterCurrencyDigits",components:{AlohaExample:f},setup(){const{codeJs:e}=S();return{codeJs:e}}};function j(e,i,s,p,l,_){const n=t("aloha-example");return u(),c(n,{"code-js":e.codeJs,header:"digits","is-code-visible-default":!0},null,8,["code-js"])}const D=a(U,[["render",j]]);function L(){return{codeJs:`filterCurrency(123456);
// ${r(123456)}

filterCurrency("1000000.2345");
// ${r("1000000.2345")}

filterCurrency("aloha");
// ${r("aloha")}

filterCurrency(undefined);
// ${r(void 0)}`}}const Y={name:"PageFilterCurrencyExample",components:{AlohaExample:f},setup(){const{codeJs:e}=L();return{codeJs:e}}};function w(e,i,s,p,l,_){const n=t("aloha-example");return u(),c(n,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const B=a(Y,[["render",w]]);function M(){return{codeJs:`filterCurrency(2000, { suffix: "€" });
// ${r(2e3,{suffix:"€"})}

filterCurrency("25.5", { suffix: "%" });
// ${r("25.5",{suffix:"%"})}`}}const q={name:"PageFilterCurrencySuffix",components:{AlohaExample:f},setup(){const{codeJs:e}=M();return{codeJs:e}}};function O(e,i,s,p,l,_){const n=t("aloha-example");return u(),c(n,{"code-js":e.codeJs,header:"suffix","is-code-visible-default":!0},null,8,["code-js"])}const V=a(q,[["render",O]]);function k(){return{argumentsText:[{value:"value",types:["Number","String"],text:"_PAGE_FILTER_CURRENCY_ARGUMENTS_VALUE_"},{value:'[suffix="€"]',types:["String"],text:"_PAGE_FILTER_CURRENCY_ARGUMENTS_SUFFIX_"},{value:"[digits=2]",types:["Number"],text:"_PAGE_FILTER_CURRENCY_ARGUMENTS_DIGITS_"},{value:"[digitGrouping=true]",types:["Boolean"],text:"_PAGE_FILTER_CURRENCY_ARGUMENTS_DIGIT_GROUPING_"}]}}function Q(){return{pageTitle:"filterCurrency"}}const X=`import {
  describe,
  expect,
  it,
} from "@jest/globals";

import filterCurrency from "../filterCurrency";

describe("filterCurrency", () => {
  it("should properly format a given number with default parameters", () => {
    expect(filterCurrency(1234.5678)).toEqual("1.234,57 €");
  });

  it("should properly format a given number with custom parameters", () => {
    expect(filterCurrency(1234.5678, { suffix: "$", digits: 3, digitGrouping: false })).toEqual("1234,568 $");
  });

  it("should return undefined when a non-number value is passed", () => {
    expect(filterCurrency(null)).toEqual("");
  });
});
`,z={name:"PageFilterCurrency",components:{AlohaPage:G,ATranslation:E,PageFilterArguments:I,PageFilterCurrencyDigitGrouping:N,PageFilterCurrencyDigits:D,PageFilterCurrencyExample:B,PageFilterCurrencySuffix:V,PageFilterImportCompositionApi:R,PageFilterImportFunction:F,PageFilterTest:T},setup(){const{pageTitle:e}=Q(),{argumentsText:i}=k();return{argumentsText:i,pageTitle:e,test:X}}};function H(e,i,s,p,l,_){const n=t("a-translation"),m=t("page-filter-import-function"),g=t("page-filter-import-composition-api"),d=t("page-filter-arguments"),y=t("page-filter-currency-example"),C=t("page-filter-currency-suffix"),$=t("page-filter-currency-digits"),x=t("page-filter-currency-digit-grouping"),h=t("page-filter-test"),P=t("aloha-page");return u(),c(P,{"page-title":e.pageTitle},{body:A(()=>[o(n,{tag:"p",html:"_PAGE_FILTER_CURRENCY_DESCRIPTION_"}),o(m,{"function-name":"filterCurrency","type-import":"filters"}),o(g,{"function-name":"filterCurrency"}),o(d,{"arguments-text":e.argumentsText,"function-description":'filterCurrency(value, { [suffix="€"], [digits=2], [digitGrouping=true] })'},null,8,["arguments-text"]),o(y),o(C),o($),o(x),o(h,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const fe=a(z,[["render",H]]);export{fe as default};
