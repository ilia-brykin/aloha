import{aA as o,_ as r,A as G}from"./bundle.index.DL2yTFpX.js";import{O as s,b as e,Q as p,aR as P,V as n}from"./chunk.vendor.G4HJ_FUy.js";import"./chunk.vendor-lodash.DUClg1O3.js";import{A as g,a as T}from"./chunk.AlohaExample.C91B3qMe.js";import{P as I,a as E,b as J}from"./chunk.PageFilterTest.D8Ij4WVN.js";import{P as v}from"./chunk.PageFilterImportCompositionApi.DFfgFled.js";import"./chunk.translations-ar.Bl94ryzA.js";import"./chunk.translations-de.B7d9jdMO.js";import"./chunk.translations-en.BtgGWXka.js";import"./chunk.translations-es.BSOZWCCF.js";import"./chunk.translations-fr.CcWHH1cx.js";import"./chunk.translations-hr.CJ7NF5Fz.js";import"./chunk.translations-it.DU_NwUPS.js";import"./chunk.translations-ru.FgtNK4nl.js";import"./chunk.APageTabTitle.DgYvm1Tm.js";import"./chunk.AlohaHighlightjs.Bnb6Sejr.js";function S(){return{codeJs:`filterFloat(1000222.55, { digitGrouping: false });
// ${o(100022255e-2,{digitGrouping:!1})}

filterFloat(1000222.55, { digitGrouping: true });
// ${o(100022255e-2,{digitGrouping:!0})}`}}const R={name:"PageFilterFloatDigitGrouping",components:{AlohaExample:g},setup(){const{codeJs:t}=S();return{codeJs:t}}};function b(t,l,a,f,c,u){const i=e("aloha-example");return p(),s(i,{"code-js":t.codeJs,header:"digitGrouping","is-code-visible-default":!0},null,8,["code-js"])}const L=r(R,[["render",b]]);function N(){return{codeJs:`filterFloat(2000, { digits: 0 });
// ${o(2e3,{digits:0})}

filterFloat("25.53451", { digits: 4 });
// ${o("25.53451",{digits:4})}`}}const j={name:"PageFilterFloatDigits",components:{AlohaExample:g},setup(){const{codeJs:t}=N();return{codeJs:t}}};function O(t,l,a,f,c,u){const i=e("aloha-example");return p(),s(i,{"code-js":t.codeJs,header:"digits","is-code-visible-default":!0},null,8,["code-js"])}const U=r(j,[["render",O]]);function D(){return{codeJs:`filterFloat(123456);
// ${o(123456)}

filterFloat("1000000.2345");
// ${o("1000000.2345")}

filterFloat("aloha");
// ${o("aloha")}

filterFloat(undefined);
// ${o(void 0)}`}}const y={name:"PageFilterFloatExample",components:{AlohaExample:g},setup(){const{codeJs:t}=D();return{codeJs:t}}};function C(t,l,a,f,c,u){const i=e("aloha-example");return p(),s(i,{"code-js":t.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const M=r(y,[["render",C]]);function V(){return{codeJs:`filterFloat(2000, { suffix: "€" });
// ${o(2e3,{suffix:"€"})}

filterFloat("25.5", { suffix: "%" });
// ${o("25.5",{suffix:"%"})}`}}const k={name:"PageFilterFloatSuffix",components:{AlohaExample:g},setup(){const{codeJs:t}=V();return{codeJs:t}}};function w(t,l,a,f,c,u){const i=e("aloha-example");return p(),s(i,{"code-js":t.codeJs,header:"suffix","is-code-visible-default":!0},null,8,["code-js"])}const Q=r(k,[["render",w]]);function X(){return{argumentsText:[{value:"value",types:["Number","String"],text:"_PAGE_FILTER_FLOAT_ARGUMENTS_VALUE_"},{value:'[suffix=""]',types:["String"],text:"_PAGE_FILTER_FLOAT_ARGUMENTS_SUFFIX_"},{value:"[digits=2]",types:["Number"],text:"_PAGE_FILTER_FLOAT_ARGUMENTS_DIGITS_"},{value:"[digitGrouping=true]",types:["Boolean"],text:"_PAGE_FILTER_FLOAT_ARGUMENTS_DIGIT_GROUPING_"}]}}function q(){return{pageTitle:"filterFloat"}}const z=`import filterFloat from "../filterFloat";

describe("filterFloat", () => {
  test("without extra attributes", () => {
    expect(filterFloat(123456)).toBe("123.456,00");
    expect(filterFloat(1000)).toBe("1.000,00");
    expect(filterFloat(1000000)).toBe("1.000.000,00");
    expect(filterFloat(1000.12)).toBe("1.000,12");
    expect(filterFloat(0.12)).toBe("0,12");
    expect(filterFloat(0.1234)).toBe("0,12");
    expect(filterFloat(0)).toBe("0,00");
    expect(filterFloat(0.000)).toBe("0,00");
    expect(filterFloat(undefined)).toBe("");
    expect(filterFloat(null)).toBe("");
    expect(filterFloat("")).toBe("0,00");
    expect(filterFloat("1000.12")).toBe("1.000,12");
    expect(filterFloat("1.000.000,00")).toBe("1.000.000,00");
    expect(filterFloat("Aloha")).toBe("Aloha");
  });

  test("suffix", () => {
    expect(filterFloat(123456, { suffix: "%" })).toBe("123.456,00 %");
    expect(filterFloat(1000, { suffix: "€" })).toBe("1.000,00 €");
    expect(filterFloat("1000", { suffix: "%" })).toBe("1.000,00 %");
    expect(filterFloat("Aloha", { suffix: "%" })).toBe("Aloha");
    expect(filterFloat(undefined, { suffix: "%" })).toBe("");
    expect(filterFloat(null, { suffix: "%" })).toBe("");
    expect(filterFloat("", { suffix: "%" })).toBe("0,00 %");
    expect(filterFloat("1.000.000,00", { suffix: "%" })).toBe("1.000.000,00 %");
  });

  test("digits", () => {
    expect(filterFloat(123456, { digits: 2 })).toBe("123.456,00");
    expect(filterFloat(123456, { digits: 4 })).toBe("123.456,0000");
    expect(filterFloat(123.12345, { digits: 3 })).toBe("123,123");
    expect(filterFloat(123.12345, { digits: 1 })).toBe("123,1");
    expect(filterFloat(123.12345, { digits: 0 })).toBe("123");
    expect(filterFloat(1000.12345, { digits: 0 })).toBe("1.000");
    expect(filterFloat("", { digits: 0 })).toBe("0");
    expect(filterFloat("Aloha", { digits: 0 })).toBe("Aloha");
    expect(filterFloat(undefined, { digits: 0 })).toBe("");
    expect(filterFloat(null, { digits: 0 })).toBe("");
    expect(filterFloat("1.000.000,00", { digits: 0 })).toBe("1.000.000");
  });

  test("digitGrouping", () => {
    expect(filterFloat(123456, { digitGrouping: true })).toBe("123.456,00");
    expect(filterFloat(123456, { digitGrouping: false })).toBe("123456,00");
    expect(filterFloat(1000000, { digitGrouping: true })).toBe("1.000.000,00");
    expect(filterFloat(1000000, { digitGrouping: false })).toBe("1000000,00");
  });

  test("negative value", () => {
    expect(filterFloat(-123456)).toBe("-123.456,00");
    expect(filterFloat(-1000000)).toBe("-1.000.000,00");
    expect(filterFloat(-1)).toBe("-1,00");
    expect(filterFloat(-0)).toBe("0,00");
    expect(filterFloat("-1.000.000,00")).toBe("-1.000.000,00");
    expect(filterFloat("-1.000.000,01234")).toBe("-1.000.000,01");
  });

  test("complex example", () => {
    expect(filterFloat(1000000, { suffix: "%", digits: 0, digitGrouping: false })).toBe("1000000 %");
    expect(filterFloat(0.123, { suffix: "%", digits: 0, digitGrouping: false })).toBe("0 %");
    expect(filterFloat(0.123, { suffix: "%", digits: 4, digitGrouping: false })).toBe("0,1230 %");
  });
});

`,H={name:"PageFilterFloat",components:{AlohaPage:T,ATranslation:G,PageFilterArguments:J,PageFilterFloatDigitGrouping:L,PageFilterFloatDigits:U,PageFilterFloatExample:M,PageFilterFloatSuffix:Q,PageFilterImportCompositionApi:v,PageFilterImportFunction:E,PageFilterTest:I},setup(){const{pageTitle:t}=q(),{argumentsText:l}=X();return{argumentsText:l,pageTitle:t,test:z}}};function K(t,l,a,f,c,u){const i=e("a-translation"),_=e("page-filter-import-function"),d=e("page-filter-import-composition-api"),F=e("page-filter-arguments"),x=e("page-filter-float-example"),m=e("page-filter-float-suffix"),B=e("page-filter-float-digits"),$=e("page-filter-float-digit-grouping"),A=e("page-filter-test"),h=e("aloha-page");return p(),s(h,{"page-title":t.pageTitle},{body:P(()=>[n(i,{tag:"p",html:"_PAGE_FILTER_FLOAT_DESCRIPTION_"}),n(_,{"function-name":"filterFloat","type-import":"filters"}),n(d,{"function-name":"filterFloat"}),n(F,{"arguments-text":t.argumentsText,"function-description":'filterFloat(value, { [suffix=""], [digits=2], [digitGrouping=true] })'},null,8,["arguments-text"]),n(x),n(m),n(B),n($),n(A,{test:t.test},null,8,["test"])]),_:1},8,["page-title"])}const gt=r(H,[["render",K]]);export{gt as default};
