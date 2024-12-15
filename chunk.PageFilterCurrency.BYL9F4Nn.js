import{A as f,a as E}from"./chunk.AlohaExample.A9Ef-QbL.js";import{aV as r,_ as a,A}from"./bundle.index.Dn7qpWjQ.js";import{P as G,a as T,b as F}from"./chunk.PageFilterTest.Dwl2cJEE.js";import{m as t,K as c,J as u,aK as I,P as o}from"./chunk.vendor.DQz1Isc4.js";import{P as J}from"./chunk.PageFilterImportCompositionApi.dDZ0bVyw.js";import"./chunk.vendor-lodash.Cgq9oNCy.js";import"./chunk.vendor-tinymce.cPIiul0H.js";function R(){return{codeJs:`filterCurrency(1000222.55, { digitGrouping: false });
// ${r(100022255e-2,{digitGrouping:!1})}

filterCurrency(1000222.55, { digitGrouping: true });
// ${r(100022255e-2,{digitGrouping:!0})}`}}const v={name:"PageFilterCurrencyDigitGrouping",components:{AlohaExample:f},setup(){const{codeJs:e}=R();return{codeJs:e}}};function N(e,i,s,l,p,_){const n=t("aloha-example");return u(),c(n,{"code-js":e.codeJs,header:"digitGrouping","is-code-visible-default":!0},null,8,["code-js"])}const S=a(v,[["render",N]]);function U(){return{codeJs:`filterCurrency(2000, { digits: 0 });
// ${r(2e3,{digits:0})}

filterCurrency("25.53451", { digits: 4 });
// ${r("25.53451",{digits:4})}`}}const b={name:"PageFilterCurrencyDigits",components:{AlohaExample:f},setup(){const{codeJs:e}=U();return{codeJs:e}}};function j(e,i,s,l,p,_){const n=t("aloha-example");return u(),c(n,{"code-js":e.codeJs,header:"digits","is-code-visible-default":!0},null,8,["code-js"])}const D=a(b,[["render",j]]);function L(){return{codeJs:`filterCurrency(123456);
// ${r(123456)}

filterCurrency("1000000.2345");
// ${r("1000000.2345")}

filterCurrency("aloha");
// ${r("aloha")}

filterCurrency(undefined);
// ${r(void 0)}`}}const Y={name:"PageFilterCurrencyExample",components:{AlohaExample:f},setup(){const{codeJs:e}=L();return{codeJs:e}}};function w(e,i,s,l,p,_){const n=t("aloha-example");return u(),c(n,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const B=a(Y,[["render",w]]);function M(){return{codeJs:`filterCurrency(2000, { suffix: "€" });
// ${r(2e3,{suffix:"€"})}

filterCurrency("25.5", { suffix: "%" });
// ${r("25.5",{suffix:"%"})}`}}const q={name:"PageFilterCurrencySuffix",components:{AlohaExample:f},setup(){const{codeJs:e}=M();return{codeJs:e}}};function V(e,i,s,l,p,_){const n=t("aloha-example");return u(),c(n,{"code-js":e.codeJs,header:"suffix","is-code-visible-default":!0},null,8,["code-js"])}const k=a(q,[["render",V]]);function K(){return{argumentsText:[{value:"value",types:["Number","String"],text:"_PAGE_FILTER_CURRENCY_ARGUMENTS_VALUE_"},{value:'[suffix="€"]',types:["String"],text:"_PAGE_FILTER_CURRENCY_ARGUMENTS_SUFFIX_"},{value:"[digits=2]",types:["Number"],text:"_PAGE_FILTER_CURRENCY_ARGUMENTS_DIGITS_"},{value:"[digitGrouping=true]",types:["Boolean"],text:"_PAGE_FILTER_CURRENCY_ARGUMENTS_DIGIT_GROUPING_"}]}}function O(){return{pageTitle:"filterCurrency"}}const X=`import filterCurrency from "../filterCurrency";

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
`,z={name:"PageFilterCurrency",components:{AlohaPage:E,ATranslation:A,PageFilterArguments:G,PageFilterCurrencyDigitGrouping:S,PageFilterCurrencyDigits:D,PageFilterCurrencyExample:B,PageFilterCurrencySuffix:k,PageFilterImportCompositionApi:J,PageFilterImportFunction:T,PageFilterTest:F},setup(){const{pageTitle:e}=O(),{argumentsText:i}=K();return{argumentsText:i,pageTitle:e,test:X}}};function H(e,i,s,l,p,_){const n=t("a-translation"),g=t("page-filter-import-function"),m=t("page-filter-import-composition-api"),d=t("page-filter-arguments"),y=t("page-filter-currency-example"),C=t("page-filter-currency-suffix"),$=t("page-filter-currency-digits"),x=t("page-filter-currency-digit-grouping"),P=t("page-filter-test"),h=t("aloha-page");return u(),c(h,{"page-title":e.pageTitle},{body:I(()=>[o(n,{tag:"p",html:"_PAGE_FILTER_CURRENCY_DESCRIPTION_"}),o(g,{"function-name":"filterCurrency","type-import":"filters"}),o(m,{"function-name":"filterCurrency"}),o(d,{"arguments-text":e.argumentsText,"function-description":'filterCurrency(value, { [suffix="€"], [digits=2], [digitGrouping=true] })'},null,8,["arguments-text"]),o(y),o(C),o($),o(x),o(P,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const oe=a(z,[["render",H]]);export{oe as default};