import{A as f,a as E}from"./chunk.AlohaExample.BorK_Tbl.js";import{aB as r,_ as a,A}from"./bundle.index.By4-CZSJ.js";import{P as G,a as T,b as F}from"./chunk.PageFilterTest.CtM14tx5.js";import{k as t,Q as c,O as u,aQ as I,V as o}from"./chunk.vendor.C_nZR3i9.js";import"./chunk.vendor-lodash.BzDRedSD.js";import{P as R}from"./chunk.PageFilterImportCompositionApi.DMrNY_hx.js";import"./chunk.APageTabTitle.CJaSEw9R.js";import"./chunk.AlohaHighlightjs.zzXDUp_j.js";import"./chunk.translations-ar.CGL8aVo9.js";import"./chunk.translations-de.RdwLQ5AB.js";import"./chunk.translations-en.DDBINhYl.js";import"./chunk.translations-es.Db8DPcgi.js";import"./chunk.translations-fr.Bj0H1VLd.js";import"./chunk.translations-hr.D6Hyl4N8.js";import"./chunk.translations-it.BR5rbHtH.js";import"./chunk.translations-ru.BkDZ_0rg.js";function J(){return{codeJs:`filterCurrency(1000222.55, { digitGrouping: false });
// ${r(100022255e-2,{digitGrouping:!1})}

filterCurrency(1000222.55, { digitGrouping: true });
// ${r(100022255e-2,{digitGrouping:!0})}`}}const v={name:"PageFilterCurrencyDigitGrouping",components:{AlohaExample:f},setup(){const{codeJs:e}=J();return{codeJs:e}}};function N(e,i,s,p,l,_){const n=t("aloha-example");return u(),c(n,{"code-js":e.codeJs,header:"digitGrouping","is-code-visible-default":!0},null,8,["code-js"])}const S=a(v,[["render",N]]);function U(){return{codeJs:`filterCurrency(2000, { digits: 0 });
// ${r(2e3,{digits:0})}

filterCurrency("25.53451", { digits: 4 });
// ${r("25.53451",{digits:4})}`}}const b={name:"PageFilterCurrencyDigits",components:{AlohaExample:f},setup(){const{codeJs:e}=U();return{codeJs:e}}};function j(e,i,s,p,l,_){const n=t("aloha-example");return u(),c(n,{"code-js":e.codeJs,header:"digits","is-code-visible-default":!0},null,8,["code-js"])}const D=a(b,[["render",j]]);function L(){return{codeJs:`filterCurrency(123456);
// ${r(123456)}

filterCurrency("1000000.2345");
// ${r("1000000.2345")}

filterCurrency("aloha");
// ${r("aloha")}

filterCurrency(undefined);
// ${r(void 0)}`}}const B={name:"PageFilterCurrencyExample",components:{AlohaExample:f},setup(){const{codeJs:e}=L();return{codeJs:e}}};function Y(e,i,s,p,l,_){const n=t("aloha-example");return u(),c(n,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const w=a(B,[["render",Y]]);function M(){return{codeJs:`filterCurrency(2000, { suffix: "€" });
// ${r(2e3,{suffix:"€"})}

filterCurrency("25.5", { suffix: "%" });
// ${r("25.5",{suffix:"%"})}`}}const k={name:"PageFilterCurrencySuffix",components:{AlohaExample:f},setup(){const{codeJs:e}=M();return{codeJs:e}}};function q(e,i,s,p,l,_){const n=t("aloha-example");return u(),c(n,{"code-js":e.codeJs,header:"suffix","is-code-visible-default":!0},null,8,["code-js"])}const O=a(k,[["render",q]]);function V(){return{argumentsText:[{value:"value",types:["Number","String"],text:"_PAGE_FILTER_CURRENCY_ARGUMENTS_VALUE_"},{value:'[suffix="€"]',types:["String"],text:"_PAGE_FILTER_CURRENCY_ARGUMENTS_SUFFIX_"},{value:"[digits=2]",types:["Number"],text:"_PAGE_FILTER_CURRENCY_ARGUMENTS_DIGITS_"},{value:"[digitGrouping=true]",types:["Boolean"],text:"_PAGE_FILTER_CURRENCY_ARGUMENTS_DIGIT_GROUPING_"}]}}function Q(){return{pageTitle:"filterCurrency"}}const X=`import filterCurrency from "../filterCurrency";

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
`,z={name:"PageFilterCurrency",components:{AlohaPage:E,ATranslation:A,PageFilterArguments:G,PageFilterCurrencyDigitGrouping:S,PageFilterCurrencyDigits:D,PageFilterCurrencyExample:w,PageFilterCurrencySuffix:O,PageFilterImportCompositionApi:R,PageFilterImportFunction:T,PageFilterTest:F},setup(){const{pageTitle:e}=Q(),{argumentsText:i}=V();return{argumentsText:i,pageTitle:e,test:X}}};function H(e,i,s,p,l,_){const n=t("a-translation"),m=t("page-filter-import-function"),g=t("page-filter-import-composition-api"),d=t("page-filter-arguments"),y=t("page-filter-currency-example"),C=t("page-filter-currency-suffix"),$=t("page-filter-currency-digits"),x=t("page-filter-currency-digit-grouping"),h=t("page-filter-test"),P=t("aloha-page");return u(),c(P,{"page-title":e.pageTitle},{body:I(()=>[o(n,{tag:"p",html:"_PAGE_FILTER_CURRENCY_DESCRIPTION_"}),o(m,{"function-name":"filterCurrency","type-import":"filters"}),o(g,{"function-name":"filterCurrency"}),o(d,{"arguments-text":e.argumentsText,"function-description":'filterCurrency(value, { [suffix="€"], [digits=2], [digitGrouping=true] })'},null,8,["arguments-text"]),o(y),o(C),o($),o(x),o(h,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const fe=a(z,[["render",H]]);export{fe as default};
