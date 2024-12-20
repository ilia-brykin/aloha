import{A as m,a as A}from"./chunk.AlohaExample.bHGij63B.js";import{aJ as r,_ as p,A as B}from"./bundle.index.C_5YVLtW.js";import{P as E,a as T,b as x}from"./chunk.PageFilterTest.ki0yoZq7.js";import{P as $}from"./chunk.PageFilterImportCompositionApi.C1l2oQQM.js";import{m as t,K as i,J as s,aK as R,P as a}from"./chunk.vendor.D6eG-XyB.js";import"./chunk.vendor-lodash.4mRNCQpN.js";import"./chunk.vendor-tinymce.Dn8nHerG.js";function v(){return{codeJs:`filterPropertyByValue("111", { mapping: { aloha: "1", holla: "2" }, defaultValue: "not found" });
// ${r("111",{mapping:{aloha:"1",holla:"2"},defaultValue:"not found"})}
filterPropertyByValue("222", { mapping: { aloha: "1", holla: "2" }, defaultValue: "0" });
// ${r("222",{mapping:{aloha:"1",holla:"2"},defaultValue:"0"})}`}}const F={name:"PageFilterPropertyByValueDefaultValue",components:{AlohaExample:m},setup(){const{codeJs:e}=v();return{codeJs:e}}};function I(e,n,l,u,c,_){const o=t("aloha-example");return s(),i(o,{"code-js":e.codeJs,header:"defaultValue","is-code-visible-default":!0},null,8,["code-js"])}const J=p(F,[["render",I]]);function b(){return{codeJs:`filterPropertyByValue("111", { mapping: { aloha: "1", holla: "2" } });
// ${r("111",{mapping:{aloha:"1",holla:"2"}})}
filterPropertyByValue("aloha", { mapping: { aloha: "1", holla: "2" } });
// ${r("aloha",{mapping:{aloha:"1",holla:"2"}})}`}}const L={name:"PageFilterPropertyByValueMapping",components:{AlohaExample:m},setup(){const{codeJs:e}=b();return{codeJs:e}}};function U(e,n,l,u,c,_){const o=t("aloha-example");return s(),i(o,{"code-js":e.codeJs,header:"mapping","is-code-visible-default":!0},null,8,["code-js"])}const G=p(L,[["render",U]]);function Y(){return{argumentsText:[{value:"value",types:["Any"],text:"_PAGE_FILTER_PROPERTY_BY_VALUE_ARGUMENTS_VALUE_"},{value:"[mapping={}]",types:["Object"],text:"_PAGE_FILTER_PROPERTY_BY_VALUE_ARGUMENTS_MAPPING_"},{value:'[defaultValue=""]',types:["String"],text:"_PAGE_FILTER_PROPERTY_BY_VALUE_ARGUMENTS_DEFAULT_VALUE_"}]}}function M(){return{pageTitle:"filterPropertyByValue"}}const N=`import filterPropertyByValue from "../filterPropertyByValue";

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
`,O={name:"PageFilterPropertyByValue",components:{AlohaPage:A,ATranslation:B,PageFilterArguments:E,PageFilterImportCompositionApi:$,PageFilterImportFunction:T,PageFilterPropertyByValueDefaultValue:J,PageFilterPropertyByValueMapping:G,PageFilterTest:x},setup(){const{pageTitle:e}=M(),{argumentsText:n}=Y();return{argumentsText:n,pageTitle:e,test:N}}};function j(e,n,l,u,c,_){const o=t("a-translation"),f=t("page-filter-import-function"),g=t("page-filter-import-composition-api"),y=t("page-filter-arguments"),P=t("page-filter-property-by-value-mapping"),d=t("page-filter-property-by-value-default-value"),h=t("page-filter-test"),V=t("aloha-page");return s(),i(V,{"page-title":e.pageTitle},{body:R(()=>[a(o,{tag:"p",html:"_PAGE_FILTER_PROPERTY_BY_VALUE_DESCRIPTION_"}),a(f,{"function-name":"filterPropertyByValue","type-import":"filters"}),a(g,{"function-name":"filterPropertyByValue"}),a(y,{"arguments-text":e.argumentsText,"function-description":'filterPropertyByValue(value, { [mapping={}], [defaultValue=""] })'},null,8,["arguments-text"]),a(P),a(d),a(h,{test:e.test},null,8,["test"])]),_:1},8,["page-title"])}const z=p(O,[["render",j]]);export{z as default};
