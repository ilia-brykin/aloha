import{A as _,a as A}from"./chunk.AlohaExample.Cdl7tyIE.js";import{P as B,a as E,b as T}from"./chunk.PageFilterTest.DWy9kQh8.js";import{P as x}from"./chunk.PageFilterImportCompositionApi.DWAkNAZ8.js";import{az as r,_ as l,A as $}from"./bundle.index.ChYq-zZ0.js";import{V as i,e as t,W as s,aT as R,_ as a}from"./chunk.vendor.BxCHGHAU.js";import"./chunk.vendor-lodash.BMPrua2s.js";import"./chunk.APageTabTitle.BGuLIDVB.js";import"./chunk.AlohaHighlightjs.B3F2oL8_.js";import"./chunk.translations-ar.D8MQqUIX.js";import"./chunk.translations-de.DF2fp9fz.js";import"./chunk.translations-en.Cabsq1fv.js";import"./chunk.translations-es.CTtyunpM.js";import"./chunk.translations-fr.tpgV9obb.js";import"./chunk.translations-hr.v7YKJpdX.js";import"./chunk.translations-it.Dqw3KhB-.js";import"./chunk.translations-ru.ofMcR8E8.js";function v(){return{codeJs:`filterPropertyByValue("111", { mapping: { aloha: "1", holla: "2" }, defaultValue: "not found" });
// ${r("111",{mapping:{aloha:"1",holla:"2"},defaultValue:"not found"})}
filterPropertyByValue("222", { mapping: { aloha: "1", holla: "2" }, defaultValue: "0" });
// ${r("222",{mapping:{aloha:"1",holla:"2"},defaultValue:"0"})}`}}const F={name:"PageFilterPropertyByValueDefaultValue",components:{AlohaExample:_},setup(){const{codeJs:e}=v();return{codeJs:e}}};function b(e,n,p,u,m,c){const o=t("aloha-example");return s(),i(o,{"code-js":e.codeJs,header:"defaultValue","is-code-visible-default":!0},null,8,["code-js"])}const I=l(F,[["render",b]]);function L(){return{codeJs:`filterPropertyByValue("111", { mapping: { aloha: "1", holla: "2" } });
// ${r("111",{mapping:{aloha:"1",holla:"2"}})}
filterPropertyByValue("aloha", { mapping: { aloha: "1", holla: "2" } });
// ${r("aloha",{mapping:{aloha:"1",holla:"2"}})}`}}const J={name:"PageFilterPropertyByValueMapping",components:{AlohaExample:_},setup(){const{codeJs:e}=L();return{codeJs:e}}};function U(e,n,p,u,m,c){const o=t("aloha-example");return s(),i(o,{"code-js":e.codeJs,header:"mapping","is-code-visible-default":!0},null,8,["code-js"])}const G=l(J,[["render",U]]);function Y(){return{argumentsText:[{value:"value",types:["Any"],text:"_PAGE_FILTER_PROPERTY_BY_VALUE_ARGUMENTS_VALUE_"},{value:"[mapping={}]",types:["Object"],text:"_PAGE_FILTER_PROPERTY_BY_VALUE_ARGUMENTS_MAPPING_"},{value:'[defaultValue=""]',types:["String"],text:"_PAGE_FILTER_PROPERTY_BY_VALUE_ARGUMENTS_DEFAULT_VALUE_"}]}}function j(){return{pageTitle:"filterPropertyByValue"}}const M=`import {
  describe,
  expect,
  it,
} from "@jest/globals";

import filterPropertyByValue from "../filterPropertyByValue";

describe("Filter property by value", () => {
  it("Returns the mapped value if it exists", () => {
    const mapping = { 20: "twenty" };

    expect(filterPropertyByValue("20", { mapping })).toEqual("twenty");
  });

  it("Returns the defaultValue if the value does not exist in the mapping", () => {
    const mapping = { 30: "thirty" };

    expect(filterPropertyByValue("20", { mapping, defaultValue: "default" })).toEqual("default");
  });

  it("Returns an empty string if the value does not exist in the mapping and no defaultValue is set", () => {
    const mapping = { 30: "thirty" };

    expect(filterPropertyByValue("20", { mapping })).toEqual("");
  });
});
`,N={name:"PageFilterPropertyByValue",components:{AlohaPage:A,ATranslation:$,PageFilterArguments:T,PageFilterImportCompositionApi:x,PageFilterImportFunction:E,PageFilterPropertyByValueDefaultValue:I,PageFilterPropertyByValueMapping:G,PageFilterTest:B},setup(){const{pageTitle:e}=j(),{argumentsText:n}=Y();return{argumentsText:n,pageTitle:e,test:M}}};function O(e,n,p,u,m,c){const o=t("a-translation"),f=t("page-filter-import-function"),g=t("page-filter-import-composition-api"),y=t("page-filter-arguments"),P=t("page-filter-property-by-value-mapping"),d=t("page-filter-property-by-value-default-value"),h=t("page-filter-test"),V=t("aloha-page");return s(),i(V,{"page-title":e.pageTitle},{body:R(()=>[a(o,{tag:"p",html:"_PAGE_FILTER_PROPERTY_BY_VALUE_DESCRIPTION_"}),a(f,{"function-name":"filterPropertyByValue","type-import":"filters"}),a(g,{"function-name":"filterPropertyByValue"}),a(y,{"arguments-text":e.argumentsText,"function-description":'filterPropertyByValue(value, { [mapping={}], [defaultValue=""] })'},null,8,["arguments-text"]),a(P),a(d),a(h,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const oe=l(N,[["render",O]]);export{oe as default};
