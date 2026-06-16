import{A as c,a as h}from"./chunk.AlohaExample._I5XuHo4.js";import{P as A,a as P,b as x}from"./chunk.PageFilterTest.C-EKLz6u.js";import{aJ as n,_ as p,A as T}from"./bundle.index.INio3NKI.js";import{Y as i,W as m,f as t,aU as $,$ as o}from"./chunk.vendor.Byi294Mq.js";import"./chunk.vendor-lodash.BZTvCWYY.js";import{P as V}from"./chunk.PageFilterImportCompositionApi.CeRLdvk5.js";import"./chunk.APageTabTitle.ULpE8dxi.js";import"./chunk.AlohaHighlightjs.D8Y-nfDK.js";import"./chunk.translations-ar.CEE2zr9E.js";import"./chunk.translations-de.B5EkW3Bn.js";import"./chunk.translations-en.By5OazNK.js";import"./chunk.translations-es.BBwYsoM6.js";import"./chunk.translations-fr.sIUOe09m.js";import"./chunk.translations-hr.BW2q_4Qp.js";import"./chunk.translations-it.BpY7vfJm.js";import"./chunk.translations-ru.j7n72CSV.js";function v(){return{codeJs:`filterDefaultForEmpty(undefined, { emptyValue: "---" });
// ${n(void 0,{emptyValue:"---"})}

filterDefaultForEmpty(undefined, { emptyValue: "false" });
// ${n(void 0,{emptyValue:"false"})}`}}const I={name:"PageFilterDefaultForEmptyEmptyValue",components:{AlohaExample:c},setup(){const{codeJs:e}=v();return{codeJs:e}}};function J(e,r,l,u,s,f){const a=t("aloha-example");return i(),m(a,{"code-js":e.codeJs,header:"emptyValue","is-code-visible-default":!0},null,8,["code-js"])}const B=p(I,[["render",J]]);function R(){return{codeJs:`filterDefaultForEmpty(undefined);
// ${n(void 0)}

filterDefaultForEmpty(null);
// ${n(null)}

filterDefaultForEmpty("");
// ${n("")}

filterDefaultForEmpty("aloha");
// ${n("aloha")}`}}const U={name:"PageFilterDefaultForEmptyExample",components:{AlohaExample:c},setup(){const{codeJs:e}=R();return{codeJs:e}}};function L(e,r,l,u,s,f){const a=t("aloha-example");return i(),m(a,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const b=p(U,[["render",L]]);function G(){return{argumentsText:[{value:"value",types:["Any"],text:"_PAGE_FILTER_DEFAULT_FOR_EMPTY_ARGUMENTS_VALUE_"},{value:'[emptyValue="-"]',types:["String"],text:"_PAGE_FILTER_DEFAULT_FOR_EMPTY_ARGUMENTS_EMPTY_VALUE_"}]}}function M(){return{pageTitle:"filterDefaultForEmpty"}}const N=`import {
  describe,
  expect,
  it,
} from "@jest/globals";

import filterDefaultForEmpty from "../filterDefaultForEmpty";

describe("filterDefaultForEmpty Function", () => {
  it("should return 'emptyValue', when the input is null", () => {
    expect(filterDefaultForEmpty(null)).toBe("-");
    expect(filterDefaultForEmpty(null, { emptyValue: "default" })).toBe("default");
  });

  it("should return 'emptyValue', when the input is an empty string", () => {
    expect(filterDefaultForEmpty("")).toBe("-");
    expect(filterDefaultForEmpty("", { emptyValue: "default" })).toBe("default");
  });

  it("should return the inputted value, when it is not null or an empty string", () => {
    expect(filterDefaultForEmpty("Non-empty value")).toBe("Non-empty value");
    expect(filterDefaultForEmpty(123)).toBe(123);
  });
});
`,S={name:"PageFilterDefaultForEmpty",components:{AlohaPage:h,ATranslation:T,PageFilterArguments:x,PageFilterDefaultForEmptyEmptyValue:B,PageFilterDefaultForEmptyExample:b,PageFilterImportCompositionApi:V,PageFilterImportFunction:P,PageFilterTest:A},setup(){const{pageTitle:e}=M(),{argumentsText:r}=G();return{argumentsText:r,pageTitle:e,test:N}}};function j(e,r,l,u,s,f){const a=t("a-translation"),_=t("page-filter-import-function"),d=t("page-filter-import-composition-api"),y=t("page-filter-arguments"),E=t("page-filter-default-for-empty-example"),F=t("page-filter-default-for-empty-empty-value"),g=t("page-filter-test"),D=t("aloha-page");return i(),m(D,{"page-title":e.pageTitle},{body:$(()=>[o(a,{tag:"p",html:"_PAGE_FILTER_DEFAULT_FOR_EMPTY_DESCRIPTION_"}),o(_,{"function-name":"filterDefaultForEmpty","type-import":"filters"}),o(d,{"function-name":"filterDefaultForEmpty"}),o(y,{"arguments-text":e.argumentsText,"function-description":'filterDefaultForEmpty(value, { [emptyValue="-"] })'},null,8,["arguments-text"]),o(E),o(F),o(g,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const ne=p(S,[["render",j]]);export{ne as default};
