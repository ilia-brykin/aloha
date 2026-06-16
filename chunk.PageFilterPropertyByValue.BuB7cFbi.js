import{A as _,a as A}from"./chunk.AlohaExample.BUpKYs6e.js";import{P as B,a as E,b as T}from"./chunk.PageFilterTest.B1a4Q48w.js";import{P as x}from"./chunk.PageFilterImportCompositionApi.BqlfpvFb.js";import{aM as r,_ as l,A as $}from"./bundle.index.BecyEjsf.js";import{Y as i,W as s,f as t,aU as R,$ as a}from"./chunk.vendor.Byi294Mq.js";import"./chunk.vendor-lodash.BZTvCWYY.js";import"./chunk.APageTabTitle.DeH86sFI.js";import"./chunk.AlohaHighlightjs.D8Y-nfDK.js";import"./chunk.translations-ar.CEE2zr9E.js";import"./chunk.translations-de.B5EkW3Bn.js";import"./chunk.translations-en.By5OazNK.js";import"./chunk.translations-es.BBwYsoM6.js";import"./chunk.translations-fr.sIUOe09m.js";import"./chunk.translations-hr.BW2q_4Qp.js";import"./chunk.translations-it.BpY7vfJm.js";import"./chunk.translations-ru.j7n72CSV.js";function v(){return{codeJs:`filterPropertyByValue("111", { mapping: { aloha: "1", holla: "2" }, defaultValue: "not found" });
// ${r("111",{mapping:{aloha:"1",holla:"2"},defaultValue:"not found"})}
filterPropertyByValue("222", { mapping: { aloha: "1", holla: "2" }, defaultValue: "0" });
// ${r("222",{mapping:{aloha:"1",holla:"2"},defaultValue:"0"})}`}}const F={name:"PageFilterPropertyByValueDefaultValue",components:{AlohaExample:_},setup(){const{codeJs:e}=v();return{codeJs:e}}};function b(e,n,p,u,m,c){const o=t("aloha-example");return i(),s(o,{"code-js":e.codeJs,header:"defaultValue","is-code-visible-default":!0},null,8,["code-js"])}const I=l(F,[["render",b]]);function L(){return{codeJs:`filterPropertyByValue("111", { mapping: { aloha: "1", holla: "2" } });
// ${r("111",{mapping:{aloha:"1",holla:"2"}})}
filterPropertyByValue("aloha", { mapping: { aloha: "1", holla: "2" } });
// ${r("aloha",{mapping:{aloha:"1",holla:"2"}})}`}}const U={name:"PageFilterPropertyByValueMapping",components:{AlohaExample:_},setup(){const{codeJs:e}=L();return{codeJs:e}}};function J(e,n,p,u,m,c){const o=t("aloha-example");return i(),s(o,{"code-js":e.codeJs,header:"mapping","is-code-visible-default":!0},null,8,["code-js"])}const Y=l(U,[["render",J]]);function G(){return{argumentsText:[{value:"value",types:["Any"],text:"_PAGE_FILTER_PROPERTY_BY_VALUE_ARGUMENTS_VALUE_"},{value:"[mapping={}]",types:["Object"],text:"_PAGE_FILTER_PROPERTY_BY_VALUE_ARGUMENTS_MAPPING_"},{value:'[defaultValue=""]',types:["String"],text:"_PAGE_FILTER_PROPERTY_BY_VALUE_ARGUMENTS_DEFAULT_VALUE_"}]}}function M(){return{pageTitle:"filterPropertyByValue"}}const j=`import {
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
`,N={name:"PageFilterPropertyByValue",components:{AlohaPage:A,ATranslation:$,PageFilterArguments:T,PageFilterImportCompositionApi:x,PageFilterImportFunction:E,PageFilterPropertyByValueDefaultValue:I,PageFilterPropertyByValueMapping:Y,PageFilterTest:B},setup(){const{pageTitle:e}=M(),{argumentsText:n}=G();return{argumentsText:n,pageTitle:e,test:j}}};function O(e,n,p,u,m,c){const o=t("a-translation"),f=t("page-filter-import-function"),g=t("page-filter-import-composition-api"),y=t("page-filter-arguments"),P=t("page-filter-property-by-value-mapping"),d=t("page-filter-property-by-value-default-value"),h=t("page-filter-test"),V=t("aloha-page");return i(),s(V,{"page-title":e.pageTitle},{body:R(()=>[a(o,{tag:"p",html:"_PAGE_FILTER_PROPERTY_BY_VALUE_DESCRIPTION_"}),a(f,{"function-name":"filterPropertyByValue","type-import":"filters"}),a(g,{"function-name":"filterPropertyByValue"}),a(y,{"arguments-text":e.argumentsText,"function-description":'filterPropertyByValue(value, { [mapping={}], [defaultValue=""] })'},null,8,["arguments-text"]),a(P),a(d),a(h,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const oe=l(N,[["render",O]]);export{oe as default};
