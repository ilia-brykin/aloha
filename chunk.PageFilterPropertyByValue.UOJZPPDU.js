import{A as _,a as A}from"./chunk.AlohaExample.ChxWiDiP.js";import{ao as r,_ as l,A as B}from"./bundle.index.C2NUxb1F.js";import{P as E,a as T,b as x}from"./chunk.PageFilterTest.DqNa_NUa.js";import{P as $}from"./chunk.PageFilterImportCompositionApi.BBY8ZYqp.js";import{k as t,J as i,H as s,aQ as R,O as a}from"./chunk.vendor.DTe1dwcY.js";import"./chunk.vendor-lodash.DYgvgMhr.js";import"./chunk.APageTabTitle.DIecKEHM.js";import"./chunk.AlohaHighlightjs.BnoxTF5z.js";import"./chunk.translations-ar.BN5q-o8a.js";import"./chunk.translations-de.CbcaW5-6.js";import"./chunk.translations-en.D0gUYDYQ.js";import"./chunk.translations-es.CdQwNuNd.js";import"./chunk.translations-fr.DtMvhluH.js";import"./chunk.translations-hr.BYXQ86E6.js";import"./chunk.translations-it.B_ya8rE6.js";import"./chunk.translations-ru.CoPIOQIk.js";function v(){return{codeJs:`filterPropertyByValue("111", { mapping: { aloha: "1", holla: "2" }, defaultValue: "not found" });
// ${r("111",{mapping:{aloha:"1",holla:"2"},defaultValue:"not found"})}
filterPropertyByValue("222", { mapping: { aloha: "1", holla: "2" }, defaultValue: "0" });
// ${r("222",{mapping:{aloha:"1",holla:"2"},defaultValue:"0"})}`}}const F={name:"PageFilterPropertyByValueDefaultValue",components:{AlohaExample:_},setup(){const{codeJs:e}=v();return{codeJs:e}}};function I(e,n,p,u,m,c){const o=t("aloha-example");return s(),i(o,{"code-js":e.codeJs,header:"defaultValue","is-code-visible-default":!0},null,8,["code-js"])}const b=l(F,[["render",I]]);function J(){return{codeJs:`filterPropertyByValue("111", { mapping: { aloha: "1", holla: "2" } });
// ${r("111",{mapping:{aloha:"1",holla:"2"}})}
filterPropertyByValue("aloha", { mapping: { aloha: "1", holla: "2" } });
// ${r("aloha",{mapping:{aloha:"1",holla:"2"}})}`}}const L={name:"PageFilterPropertyByValueMapping",components:{AlohaExample:_},setup(){const{codeJs:e}=J();return{codeJs:e}}};function U(e,n,p,u,m,c){const o=t("aloha-example");return s(),i(o,{"code-js":e.codeJs,header:"mapping","is-code-visible-default":!0},null,8,["code-js"])}const G=l(L,[["render",U]]);function Y(){return{argumentsText:[{value:"value",types:["Any"],text:"_PAGE_FILTER_PROPERTY_BY_VALUE_ARGUMENTS_VALUE_"},{value:"[mapping={}]",types:["Object"],text:"_PAGE_FILTER_PROPERTY_BY_VALUE_ARGUMENTS_MAPPING_"},{value:'[defaultValue=""]',types:["String"],text:"_PAGE_FILTER_PROPERTY_BY_VALUE_ARGUMENTS_DEFAULT_VALUE_"}]}}function O(){return{pageTitle:"filterPropertyByValue"}}const M=`import filterPropertyByValue from "../filterPropertyByValue";

describe("Filter property by value", () => {
  test("Returns the mapped value if it exists", () => {
    const mapping = { 20: "twenty" };

    expect(filterPropertyByValue("20", { mapping })).toEqual("twenty");
  });

  test("Returns the defaultValue if the value does not exist in the mapping", () => {
    const mapping = { 30: "thirty" };

    expect(filterPropertyByValue("20", { mapping, defaultValue: "default" })).toEqual("default");
  });

  test("Returns an empty string if the value does not exist in the mapping and no defaultValue is set", () => {
    const mapping = { 30: "thirty" };

    expect(filterPropertyByValue("20", { mapping })).toEqual("");
  });
});
`,N={name:"PageFilterPropertyByValue",components:{AlohaPage:A,ATranslation:B,PageFilterArguments:E,PageFilterImportCompositionApi:$,PageFilterImportFunction:T,PageFilterPropertyByValueDefaultValue:b,PageFilterPropertyByValueMapping:G,PageFilterTest:x},setup(){const{pageTitle:e}=O(),{argumentsText:n}=Y();return{argumentsText:n,pageTitle:e,test:M}}};function j(e,n,p,u,m,c){const o=t("a-translation"),f=t("page-filter-import-function"),g=t("page-filter-import-composition-api"),y=t("page-filter-arguments"),P=t("page-filter-property-by-value-mapping"),d=t("page-filter-property-by-value-default-value"),h=t("page-filter-test"),V=t("aloha-page");return s(),i(V,{"page-title":e.pageTitle},{body:R(()=>[a(o,{tag:"p",html:"_PAGE_FILTER_PROPERTY_BY_VALUE_DESCRIPTION_"}),a(f,{"function-name":"filterPropertyByValue","type-import":"filters"}),a(g,{"function-name":"filterPropertyByValue"}),a(y,{"arguments-text":e.argumentsText,"function-description":'filterPropertyByValue(value, { [mapping={}], [defaultValue=""] })'},null,8,["arguments-text"]),a(P),a(d),a(h,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const oe=l(N,[["render",j]]);export{oe as default};