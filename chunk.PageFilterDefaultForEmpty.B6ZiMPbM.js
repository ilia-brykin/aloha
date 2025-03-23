import{A as c,a as h}from"./chunk.AlohaExample.CZSyaJVs.js";import{P as A,a as P,b as x}from"./chunk.PageFilterTest.CajyRFbO.js";import{an as n,_ as p,A as T}from"./bundle.index.DDfVVQeP.js";import{R as i,e as t,U as m,aR as $,Y as o}from"./chunk.vendor.CDkHfsNc.js";import"./chunk.vendor-lodash.ObrxgAej.js";import{P as V}from"./chunk.PageFilterImportCompositionApi.LNJ3uXeF.js";import"./chunk.APageTabTitle.FUuiNddk.js";import"./chunk.AlohaHighlightjs.DI9-5vSP.js";import"./chunk.translations-ar.BW4YNjOf.js";import"./chunk.translations-de.pnZGXXfR.js";import"./chunk.translations-en.CzHrEMzS.js";import"./chunk.translations-es.CVdE8egl.js";import"./chunk.translations-fr.hqb9JGfS.js";import"./chunk.translations-hr.DYwzCGFq.js";import"./chunk.translations-it.C5e5-FF3.js";import"./chunk.translations-ru.eTKud94F.js";function v(){return{codeJs:`filterDefaultForEmpty(undefined, { emptyValue: "---" });
// ${n(void 0,{emptyValue:"---"})}

filterDefaultForEmpty(undefined, { emptyValue: "false" });
// ${n(void 0,{emptyValue:"false"})}`}}const I={name:"PageFilterDefaultForEmptyEmptyValue",components:{AlohaExample:c},setup(){const{codeJs:e}=v();return{codeJs:e}}};function R(e,r,l,u,s,f){const a=t("aloha-example");return m(),i(a,{"code-js":e.codeJs,header:"emptyValue","is-code-visible-default":!0},null,8,["code-js"])}const J=p(I,[["render",R]]);function B(){return{codeJs:`filterDefaultForEmpty(undefined);
// ${n(void 0)}

filterDefaultForEmpty(null);
// ${n(null)}

filterDefaultForEmpty("");
// ${n("")}

filterDefaultForEmpty("aloha");
// ${n("aloha")}`}}const U={name:"PageFilterDefaultForEmptyExample",components:{AlohaExample:c},setup(){const{codeJs:e}=B();return{codeJs:e}}};function L(e,r,l,u,s,f){const a=t("aloha-example");return m(),i(a,{"code-js":e.codeJs,header:"_A_BASIC_USAGE_","is-code-visible-default":!0},null,8,["code-js"])}const b=p(U,[["render",L]]);function G(){return{argumentsText:[{value:"value",types:["Any"],text:"_PAGE_FILTER_DEFAULT_FOR_EMPTY_ARGUMENTS_VALUE_"},{value:'[emptyValue="-"]',types:["String"],text:"_PAGE_FILTER_DEFAULT_FOR_EMPTY_ARGUMENTS_EMPTY_VALUE_"}]}}function M(){return{pageTitle:"filterDefaultForEmpty"}}const N=`import {
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
`,S={name:"PageFilterDefaultForEmpty",components:{AlohaPage:h,ATranslation:T,PageFilterArguments:x,PageFilterDefaultForEmptyEmptyValue:J,PageFilterDefaultForEmptyExample:b,PageFilterImportCompositionApi:V,PageFilterImportFunction:P,PageFilterTest:A},setup(){const{pageTitle:e}=M(),{argumentsText:r}=G();return{argumentsText:r,pageTitle:e,test:N}}};function j(e,r,l,u,s,f){const a=t("a-translation"),_=t("page-filter-import-function"),d=t("page-filter-import-composition-api"),y=t("page-filter-arguments"),E=t("page-filter-default-for-empty-example"),F=t("page-filter-default-for-empty-empty-value"),g=t("page-filter-test"),D=t("aloha-page");return m(),i(D,{"page-title":e.pageTitle},{body:$(()=>[o(a,{tag:"p",html:"_PAGE_FILTER_DEFAULT_FOR_EMPTY_DESCRIPTION_"}),o(_,{"function-name":"filterDefaultForEmpty","type-import":"filters"}),o(d,{"function-name":"filterDefaultForEmpty"}),o(y,{"arguments-text":e.argumentsText,"function-description":'filterDefaultForEmpty(value, { [emptyValue="-"] })'},null,8,["arguments-text"]),o(E),o(F),o(g,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const ne=p(S,[["render",j]]);export{ne as default};
