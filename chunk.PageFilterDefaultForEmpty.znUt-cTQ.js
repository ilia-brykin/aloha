import{A as c,a as P}from"./chunk.AlohaExample.bHGij63B.js";import{aG as o,_ as p,A as h}from"./bundle.index.C_5YVLtW.js";import{P as A,a as T,b as x}from"./chunk.PageFilterTest.ki0yoZq7.js";import{m as t,K as u,J as i,aK as $,P as n}from"./chunk.vendor.D6eG-XyB.js";import{P as V}from"./chunk.PageFilterImportCompositionApi.C1l2oQQM.js";import"./chunk.vendor-lodash.4mRNCQpN.js";import"./chunk.vendor-tinymce.Dn8nHerG.js";function v(){return{codeJs:`filterDefaultForEmpty(undefined, { emptyValue: "---" });
// ${o(void 0,{emptyValue:"---"})}

filterDefaultForEmpty(undefined, { emptyValue: "false" });
// ${o(void 0,{emptyValue:"false"})}`}}const I={name:"PageFilterDefaultForEmptyEmptyValue",components:{AlohaExample:c},setup(){const{codeJs:e}=v();return{codeJs:e}}};function J(e,r,l,s,m,f){const a=t("aloha-example");return i(),u(a,{"code-js":e.codeJs,header:"emptyValue","is-code-visible-default":!0},null,8,["code-js"])}const B=p(I,[["render",J]]);function R(){return{codeJs:`filterDefaultForEmpty(undefined);
// ${o(void 0)}

filterDefaultForEmpty(null);
// ${o(null)}

filterDefaultForEmpty("");
// ${o("")}

filterDefaultForEmpty("aloha");
// ${o("aloha")}`}}const L={name:"PageFilterDefaultForEmptyExample",components:{AlohaExample:c},setup(){const{codeJs:e}=R();return{codeJs:e}}};function U(e,r,l,s,m,f){const a=t("aloha-example");return i(),u(a,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const G=p(L,[["render",U]]);function M(){return{argumentsText:[{value:"value",types:["Any"],text:"_PAGE_FILTER_DEFAULT_FOR_EMPTY_ARGUMENTS_VALUE_"},{value:'[emptyValue="-"]',types:["String"],text:"_PAGE_FILTER_DEFAULT_FOR_EMPTY_ARGUMENTS_EMPTY_VALUE_"}]}}function N(){return{pageTitle:"filterDefaultForEmpty"}}const S=`import filterDefaultForEmpty from "../filterDefaultForEmpty";

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
`,b={name:"PageFilterDefaultForEmpty",components:{AlohaPage:P,ATranslation:h,PageFilterArguments:A,PageFilterDefaultForEmptyEmptyValue:B,PageFilterDefaultForEmptyExample:G,PageFilterImportCompositionApi:V,PageFilterImportFunction:T,PageFilterTest:x},setup(){const{pageTitle:e}=N(),{argumentsText:r}=M();return{argumentsText:r,pageTitle:e,test:S}}};function C(e,r,l,s,m,f){const a=t("a-translation"),_=t("page-filter-import-function"),d=t("page-filter-import-composition-api"),y=t("page-filter-arguments"),E=t("page-filter-default-for-empty-example"),F=t("page-filter-default-for-empty-empty-value"),g=t("page-filter-test"),D=t("aloha-page");return i(),u(D,{"page-title":e.pageTitle},{body:$(()=>[n(a,{tag:"p",html:"_PAGE_FILTER_DEFAULT_FOR_EMPTY_DESCRIPTION_"}),n(_,{"function-name":"filterDefaultForEmpty","type-import":"filters"}),n(d,{"function-name":"filterDefaultForEmpty"}),n(y,{"arguments-text":e.argumentsText,"function-description":'filterDefaultForEmpty(value, { [emptyValue="-"] })'},null,8,["arguments-text"]),n(E),n(F),n(g,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const z=p(b,[["render",C]]);export{z as default};
