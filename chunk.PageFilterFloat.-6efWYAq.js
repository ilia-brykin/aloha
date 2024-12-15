import{A as g,a as P}from"./chunk.AlohaExample.A9Ef-QbL.js";import{aU as o,_ as r,A as G}from"./bundle.index.Dn7qpWjQ.js";import{P as T,a as I,b as J}from"./chunk.PageFilterTest.Dwl2cJEE.js";import{m as e,K as s,J as f,aK as E,P as n}from"./chunk.vendor.DQz1Isc4.js";import{P as v}from"./chunk.PageFilterImportCompositionApi.dDZ0bVyw.js";import"./chunk.vendor-lodash.Cgq9oNCy.js";import"./chunk.vendor-tinymce.cPIiul0H.js";function S(){return{codeJs:`filterFloat(1000222.55, { digitGrouping: false });
// ${o(100022255e-2,{digitGrouping:!1})}

filterFloat(1000222.55, { digitGrouping: true });
// ${o(100022255e-2,{digitGrouping:!0})}`}}const L={name:"PageFilterFloatDigitGrouping",components:{AlohaExample:g},setup(){const{codeJs:t}=S();return{codeJs:t}}};function R(t,l,a,p,c,u){const i=e("aloha-example");return f(),s(i,{"code-js":t.codeJs,header:"digitGrouping","is-code-visible-default":!0},null,8,["code-js"])}const b=r(L,[["render",R]]);function N(){return{codeJs:`filterFloat(2000, { digits: 0 });
// ${o(2e3,{digits:0})}

filterFloat("25.53451", { digits: 4 });
// ${o("25.53451",{digits:4})}`}}const U={name:"PageFilterFloatDigits",components:{AlohaExample:g},setup(){const{codeJs:t}=N();return{codeJs:t}}};function j(t,l,a,p,c,u){const i=e("aloha-example");return f(),s(i,{"code-js":t.codeJs,header:"digits","is-code-visible-default":!0},null,8,["code-js"])}const D=r(U,[["render",j]]);function O(){return{codeJs:`filterFloat(123456);
// ${o(123456)}

filterFloat("1000000.2345");
// ${o("1000000.2345")}

filterFloat("aloha");
// ${o("aloha")}

filterFloat(undefined);
// ${o(void 0)}`}}const y={name:"PageFilterFloatExample",components:{AlohaExample:g},setup(){const{codeJs:t}=O();return{codeJs:t}}};function C(t,l,a,p,c,u){const i=e("aloha-example");return f(),s(i,{"code-js":t.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const M=r(y,[["render",C]]);function k(){return{codeJs:`filterFloat(2000, { suffix: "€" });
// ${o(2e3,{suffix:"€"})}

filterFloat("25.5", { suffix: "%" });
// ${o("25.5",{suffix:"%"})}`}}const w={name:"PageFilterFloatSuffix",components:{AlohaExample:g},setup(){const{codeJs:t}=k();return{codeJs:t}}};function K(t,l,a,p,c,u){const i=e("aloha-example");return f(),s(i,{"code-js":t.codeJs,header:"suffix","is-code-visible-default":!0},null,8,["code-js"])}const V=r(w,[["render",K]]);function X(){return{argumentsText:[{value:"value",types:["Number","String"],text:"_PAGE_FILTER_FLOAT_ARGUMENTS_VALUE_"},{value:'[suffix=""]',types:["String"],text:"_PAGE_FILTER_FLOAT_ARGUMENTS_SUFFIX_"},{value:"[digits=2]",types:["Number"],text:"_PAGE_FILTER_FLOAT_ARGUMENTS_DIGITS_"},{value:"[digitGrouping=true]",types:["Boolean"],text:"_PAGE_FILTER_FLOAT_ARGUMENTS_DIGIT_GROUPING_"}]}}function q(){return{pageTitle:"filterFloat"}}const z=`import filterFloat from "../filterFloat";

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

`,H={name:"PageFilterFloat",components:{AlohaPage:P,ATranslation:G,PageFilterArguments:T,PageFilterFloatDigitGrouping:b,PageFilterFloatDigits:D,PageFilterFloatExample:M,PageFilterFloatSuffix:V,PageFilterImportCompositionApi:v,PageFilterImportFunction:I,PageFilterTest:J},setup(){const{pageTitle:t}=q(),{argumentsText:l}=X();return{argumentsText:l,pageTitle:t,test:z}}};function Q(t,l,a,p,c,u){const i=e("a-translation"),_=e("page-filter-import-function"),d=e("page-filter-import-composition-api"),F=e("page-filter-arguments"),x=e("page-filter-float-example"),m=e("page-filter-float-suffix"),B=e("page-filter-float-digits"),$=e("page-filter-float-digit-grouping"),A=e("page-filter-test"),h=e("aloha-page");return f(),s(h,{"page-title":t.pageTitle},{body:E(()=>[n(i,{tag:"p",html:"_PAGE_FILTER_FLOAT_DESCRIPTION_"}),n(_,{"function-name":"filterFloat","type-import":"filters"}),n(d,{"function-name":"filterFloat"}),n(F,{"arguments-text":t.argumentsText,"function-description":'filterFloat(value, { [suffix=""], [digits=2], [digitGrouping=true] })'},null,8,["arguments-text"]),n(x),n(m),n(B),n($),n(A,{test:t.test},null,8,["test"])]),_:1},8,["page-title"])}const nt=r(H,[["render",Q]]);export{nt as default};