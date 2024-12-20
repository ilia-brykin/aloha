import{A as c,a as h}from"./chunk.AlohaExample.DJmek8S2.js";import{aC as o,_ as p,A}from"./bundle.index.BNDXU1qV.js";import{P,a as T,b as x}from"./chunk.PageFilterTest.DVI8ToS4.js";import{k as t,J as u,H as s,aJ as $,O as n}from"./chunk.vendor.z3GIbCk9.js";import{P as V}from"./chunk.PageFilterImportCompositionApi.CfQQvrW6.js";import"./chunk.vendor-lodash.C_VDyCZ-.js";function v(){return{codeJs:`filterDefaultForEmpty(undefined, { emptyValue: "---" });
// ${o(void 0,{emptyValue:"---"})}

filterDefaultForEmpty(undefined, { emptyValue: "false" });
// ${o(void 0,{emptyValue:"false"})}`}}const I={name:"PageFilterDefaultForEmptyEmptyValue",components:{AlohaExample:c},setup(){const{codeJs:e}=v();return{codeJs:e}}};function J(e,l,r,i,m,f){const a=t("aloha-example");return s(),u(a,{"code-js":e.codeJs,header:"emptyValue","is-code-visible-default":!0},null,8,["code-js"])}const B=p(I,[["render",J]]);function R(){return{codeJs:`filterDefaultForEmpty(undefined);
// ${o(void 0)}

filterDefaultForEmpty(null);
// ${o(null)}

filterDefaultForEmpty("");
// ${o("")}

filterDefaultForEmpty("aloha");
// ${o("aloha")}`}}const L={name:"PageFilterDefaultForEmptyExample",components:{AlohaExample:c},setup(){const{codeJs:e}=R();return{codeJs:e}}};function U(e,l,r,i,m,f){const a=t("aloha-example");return s(),u(a,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const C=p(L,[["render",U]]);function G(){return{argumentsText:[{value:"value",types:["Any"],text:"_PAGE_FILTER_DEFAULT_FOR_EMPTY_ARGUMENTS_VALUE_"},{value:'[emptyValue="-"]',types:["String"],text:"_PAGE_FILTER_DEFAULT_FOR_EMPTY_ARGUMENTS_EMPTY_VALUE_"}]}}function M(){return{pageTitle:"filterDefaultForEmpty"}}const N=`import filterDefaultForEmpty from "../filterDefaultForEmpty";

describe("filterDefaultForEmpty Function", () => {
  test("should return 'emptyValue', when the input is null", () => {
    expect(filterDefaultForEmpty(null)).toBe("-");
    expect(filterDefaultForEmpty(null, { emptyValue: "default" })).toBe("default");
  });

  test("should return 'emptyValue', when the input is an empty string", () => {
    expect(filterDefaultForEmpty("")).toBe("-");
    expect(filterDefaultForEmpty("", { emptyValue: "default" })).toBe("default");
  });

  test("should return the inputted value, when it is not null or an empty string", () => {
    expect(filterDefaultForEmpty("Non-empty value")).toBe("Non-empty value");
    expect(filterDefaultForEmpty(123)).toBe(123);
  });
});
`,S={name:"PageFilterDefaultForEmpty",components:{AlohaPage:h,ATranslation:A,PageFilterArguments:P,PageFilterDefaultForEmptyEmptyValue:B,PageFilterDefaultForEmptyExample:C,PageFilterImportCompositionApi:V,PageFilterImportFunction:T,PageFilterTest:x},setup(){const{pageTitle:e}=M(),{argumentsText:l}=G();return{argumentsText:l,pageTitle:e,test:N}}};function b(e,l,r,i,m,f){const a=t("a-translation"),_=t("page-filter-import-function"),d=t("page-filter-import-composition-api"),y=t("page-filter-arguments"),E=t("page-filter-default-for-empty-example"),F=t("page-filter-default-for-empty-empty-value"),g=t("page-filter-test"),D=t("aloha-page");return s(),u(D,{"page-title":e.pageTitle},{body:$(()=>[n(a,{tag:"p",html:"_PAGE_FILTER_DEFAULT_FOR_EMPTY_DESCRIPTION_"}),n(_,{"function-name":"filterDefaultForEmpty","type-import":"filters"}),n(d,{"function-name":"filterDefaultForEmpty"}),n(y,{"arguments-text":e.argumentsText,"function-description":'filterDefaultForEmpty(value, { [emptyValue="-"] })'},null,8,["arguments-text"]),n(E),n(F),n(g,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const q=p(S,[["render",b]]);export{q as default};
