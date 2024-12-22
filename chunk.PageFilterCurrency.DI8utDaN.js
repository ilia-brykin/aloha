import{A as f,a as A}from"./chunk.AlohaExample.ChxWiDiP.js";import{aA as r,_ as a,A as E}from"./bundle.index.C2NUxb1F.js";import{P as G,a as T,b as F}from"./chunk.PageFilterTest.DqNa_NUa.js";import{k as t,J as c,H as u,aQ as I,O as o}from"./chunk.vendor.DTe1dwcY.js";import"./chunk.vendor-lodash.DYgvgMhr.js";import{P as J}from"./chunk.PageFilterImportCompositionApi.BBY8ZYqp.js";import"./chunk.APageTabTitle.DIecKEHM.js";import"./chunk.AlohaHighlightjs.BnoxTF5z.js";import"./chunk.translations-ar.BN5q-o8a.js";import"./chunk.translations-de.CbcaW5-6.js";import"./chunk.translations-en.D0gUYDYQ.js";import"./chunk.translations-es.CdQwNuNd.js";import"./chunk.translations-fr.DtMvhluH.js";import"./chunk.translations-hr.BYXQ86E6.js";import"./chunk.translations-it.B_ya8rE6.js";import"./chunk.translations-ru.CoPIOQIk.js";function R(){return{codeJs:`filterCurrency(1000222.55, { digitGrouping: false });
// ${r(100022255e-2,{digitGrouping:!1})}

filterCurrency(1000222.55, { digitGrouping: true });
// ${r(100022255e-2,{digitGrouping:!0})}`}}const v={name:"PageFilterCurrencyDigitGrouping",components:{AlohaExample:f},setup(){const{codeJs:e}=R();return{codeJs:e}}};function N(e,i,s,p,l,_){const n=t("aloha-example");return u(),c(n,{"code-js":e.codeJs,header:"digitGrouping","is-code-visible-default":!0},null,8,["code-js"])}const S=a(v,[["render",N]]);function U(){return{codeJs:`filterCurrency(2000, { digits: 0 });
// ${r(2e3,{digits:0})}

filterCurrency("25.53451", { digits: 4 });
// ${r("25.53451",{digits:4})}`}}const b={name:"PageFilterCurrencyDigits",components:{AlohaExample:f},setup(){const{codeJs:e}=U();return{codeJs:e}}};function j(e,i,s,p,l,_){const n=t("aloha-example");return u(),c(n,{"code-js":e.codeJs,header:"digits","is-code-visible-default":!0},null,8,["code-js"])}const D=a(b,[["render",j]]);function L(){return{codeJs:`filterCurrency(123456);
// ${r(123456)}

filterCurrency("1000000.2345");
// ${r("1000000.2345")}

filterCurrency("aloha");
// ${r("aloha")}

filterCurrency(undefined);
// ${r(void 0)}`}}const Y={name:"PageFilterCurrencyExample",components:{AlohaExample:f},setup(){const{codeJs:e}=L();return{codeJs:e}}};function w(e,i,s,p,l,_){const n=t("aloha-example");return u(),c(n,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const B=a(Y,[["render",w]]);function M(){return{codeJs:`filterCurrency(2000, { suffix: "€" });
// ${r(2e3,{suffix:"€"})}

filterCurrency("25.5", { suffix: "%" });
// ${r("25.5",{suffix:"%"})}`}}const k={name:"PageFilterCurrencySuffix",components:{AlohaExample:f},setup(){const{codeJs:e}=M();return{codeJs:e}}};function q(e,i,s,p,l,_){const n=t("aloha-example");return u(),c(n,{"code-js":e.codeJs,header:"suffix","is-code-visible-default":!0},null,8,["code-js"])}const O=a(k,[["render",q]]);function V(){return{argumentsText:[{value:"value",types:["Number","String"],text:"_PAGE_FILTER_CURRENCY_ARGUMENTS_VALUE_"},{value:'[suffix="€"]',types:["String"],text:"_PAGE_FILTER_CURRENCY_ARGUMENTS_SUFFIX_"},{value:"[digits=2]",types:["Number"],text:"_PAGE_FILTER_CURRENCY_ARGUMENTS_DIGITS_"},{value:"[digitGrouping=true]",types:["Boolean"],text:"_PAGE_FILTER_CURRENCY_ARGUMENTS_DIGIT_GROUPING_"}]}}function H(){return{pageTitle:"filterCurrency"}}const Q=`import filterCurrency from "../filterCurrency";

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
`,X={name:"PageFilterCurrency",components:{AlohaPage:A,ATranslation:E,PageFilterArguments:G,PageFilterCurrencyDigitGrouping:S,PageFilterCurrencyDigits:D,PageFilterCurrencyExample:B,PageFilterCurrencySuffix:O,PageFilterImportCompositionApi:J,PageFilterImportFunction:T,PageFilterTest:F},setup(){const{pageTitle:e}=H(),{argumentsText:i}=V();return{argumentsText:i,pageTitle:e,test:Q}}};function z(e,i,s,p,l,_){const n=t("a-translation"),m=t("page-filter-import-function"),g=t("page-filter-import-composition-api"),d=t("page-filter-arguments"),y=t("page-filter-currency-example"),C=t("page-filter-currency-suffix"),$=t("page-filter-currency-digits"),x=t("page-filter-currency-digit-grouping"),h=t("page-filter-test"),P=t("aloha-page");return u(),c(P,{"page-title":e.pageTitle},{body:I(()=>[o(n,{tag:"p",html:"_PAGE_FILTER_CURRENCY_DESCRIPTION_"}),o(m,{"function-name":"filterCurrency","type-import":"filters"}),o(g,{"function-name":"filterCurrency"}),o(d,{"arguments-text":e.argumentsText,"function-description":'filterCurrency(value, { [suffix="€"], [digits=2], [digitGrouping=true] })'},null,8,["arguments-text"]),o(y),o(C),o($),o(x),o(h,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const fe=a(X,[["render",z]]);export{fe as default};