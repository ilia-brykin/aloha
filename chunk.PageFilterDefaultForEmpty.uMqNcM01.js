import{A as c,a as h}from"./chunk.AlohaExample.CF_rR6ce.js";import{am as n,_ as p,A}from"./bundle.index.DLOa7uEv.js";import{P,a as T,b as x}from"./chunk.PageFilterTest.DJRm3ZVT.js";import{k as t,Q as i,O as u,aR as $,V as o}from"./chunk.vendor.Cgu2AZCN.js";import"./chunk.vendor-lodash.CHyF54Y5.js";import{P as V}from"./chunk.PageFilterImportCompositionApi.CdI1RKDk.js";import"./chunk.APageTabTitle.DU7Xv93Z.js";import"./chunk.AlohaHighlightjs.C2lqPjyU.js";import"./chunk.translations-ar.BDutgt0v.js";import"./chunk.translations-de.1a3sgRj7.js";import"./chunk.translations-en.BBi3Bg6e.js";import"./chunk.translations-es.BtBPtY4X.js";import"./chunk.translations-fr.Bg3PfzNk.js";import"./chunk.translations-hr.CIMS9XA_.js";import"./chunk.translations-it.DIzh0LMI.js";import"./chunk.translations-ru.COuwmRYJ.js";function v(){return{codeJs:`filterDefaultForEmpty(undefined, { emptyValue: "---" });
// ${n(void 0,{emptyValue:"---"})}

filterDefaultForEmpty(undefined, { emptyValue: "false" });
// ${n(void 0,{emptyValue:"false"})}`}}const I={name:"PageFilterDefaultForEmptyEmptyValue",components:{AlohaExample:c},setup(){const{codeJs:e}=v();return{codeJs:e}}};function J(e,r,l,m,s,f){const a=t("aloha-example");return u(),i(a,{"code-js":e.codeJs,header:"emptyValue","is-code-visible-default":!0},null,8,["code-js"])}const R=p(I,[["render",J]]);function B(){return{codeJs:`filterDefaultForEmpty(undefined);
// ${n(void 0)}

filterDefaultForEmpty(null);
// ${n(null)}

filterDefaultForEmpty("");
// ${n("")}

filterDefaultForEmpty("aloha");
// ${n("aloha")}`}}const L={name:"PageFilterDefaultForEmptyExample",components:{AlohaExample:c},setup(){const{codeJs:e}=B();return{codeJs:e}}};function U(e,r,l,m,s,f){const a=t("aloha-example");return u(),i(a,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const G=p(L,[["render",U]]);function M(){return{argumentsText:[{value:"value",types:["Any"],text:"_PAGE_FILTER_DEFAULT_FOR_EMPTY_ARGUMENTS_VALUE_"},{value:'[emptyValue="-"]',types:["String"],text:"_PAGE_FILTER_DEFAULT_FOR_EMPTY_ARGUMENTS_EMPTY_VALUE_"}]}}function N(){return{pageTitle:"filterDefaultForEmpty"}}const S=`import filterDefaultForEmpty from "../filterDefaultForEmpty";

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
`,b={name:"PageFilterDefaultForEmpty",components:{AlohaPage:h,ATranslation:A,PageFilterArguments:P,PageFilterDefaultForEmptyEmptyValue:R,PageFilterDefaultForEmptyExample:G,PageFilterImportCompositionApi:V,PageFilterImportFunction:T,PageFilterTest:x},setup(){const{pageTitle:e}=N(),{argumentsText:r}=M();return{argumentsText:r,pageTitle:e,test:S}}};function C(e,r,l,m,s,f){const a=t("a-translation"),_=t("page-filter-import-function"),d=t("page-filter-import-composition-api"),y=t("page-filter-arguments"),E=t("page-filter-default-for-empty-example"),F=t("page-filter-default-for-empty-empty-value"),g=t("page-filter-test"),D=t("aloha-page");return u(),i(D,{"page-title":e.pageTitle},{body:$(()=>[o(a,{tag:"p",html:"_PAGE_FILTER_DEFAULT_FOR_EMPTY_DESCRIPTION_"}),o(_,{"function-name":"filterDefaultForEmpty","type-import":"filters"}),o(d,{"function-name":"filterDefaultForEmpty"}),o(y,{"arguments-text":e.argumentsText,"function-description":'filterDefaultForEmpty(value, { [emptyValue="-"] })'},null,8,["arguments-text"]),o(E),o(F),o(g,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const ne=p(b,[["render",C]]);export{ne as default};
