import{t as e}from"./chunk.AlohaPage.CyRCtesQ.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.DlMcTxjz.js";import{t as i}from"./chunk.PageFilterImportCompositionApi.BRQKWlNH.js";import{t as a}from"./chunk.AlohaExample.BovuoDBh.js";import{ht as o,nt as s}from"./bundle.index.WAa1Niso.js";import{Bt as c,It as l,Zt as u,an as d,tn as f}from"./chunk.vendor.H0cZuFAV.js";import{t as p}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function m(){return{codeJs:`filterPropertyByValue("111", { mapping: { aloha: "1", holla: "2" }, defaultValue: "not found" });
// ${o(`111`,{mapping:{aloha:`1`,holla:`2`},defaultValue:`not found`})}
filterPropertyByValue("222", { mapping: { aloha: "1", holla: "2" }, defaultValue: "0" });
// ${o(`222`,{mapping:{aloha:`1`,holla:`2`},defaultValue:`0`})}`}}var h={name:`PageFilterPropertyByValueDefaultValue`,components:{AlohaExample:a},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=f(`aloha-example`);return u(),l(o,{"code-js":e.codeJs,header:`defaultValue`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=p(h,[[`render`,g]]);function v(){return{codeJs:`filterPropertyByValue("111", { mapping: { aloha: "1", holla: "2" } });
// ${o(`111`,{mapping:{aloha:`1`,holla:`2`}})}
filterPropertyByValue("aloha", { mapping: { aloha: "1", holla: "2" } });
// ${o(`aloha`,{mapping:{aloha:`1`,holla:`2`}})}`}}var y={name:`PageFilterPropertyByValueMapping`,components:{AlohaExample:a},setup(){let{codeJs:e}=v();return{codeJs:e}}};function b(e,t,n,r,i,a){let o=f(`aloha-example`);return u(),l(o,{"code-js":e.codeJs,header:`mapping`,"is-code-visible-default":!0},null,8,[`code-js`])}var x=p(y,[[`render`,b]]);function S(){return{argumentsText:[{value:`value`,types:[`Any`],text:`_PAGE_FILTER_PROPERTY_BY_VALUE_ARGUMENTS_VALUE_`},{value:`[mapping={}]`,types:[`Object`],text:`_PAGE_FILTER_PROPERTY_BY_VALUE_ARGUMENTS_MAPPING_`},{value:`[defaultValue=""]`,types:[`String`],text:`_PAGE_FILTER_PROPERTY_BY_VALUE_ARGUMENTS_DEFAULT_VALUE_`}]}}function C(){return{pageTitle:`filterPropertyByValue`}}var w=`import {
  describe,
  expect,
  it,
} from "vitest";

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
`,T={name:`PageFilterPropertyByValue`,components:{AlohaPage:e,ATranslation:s,PageFilterArguments:n,PageFilterImportCompositionApi:i,PageFilterImportFunction:t,PageFilterPropertyByValueDefaultValue:_,PageFilterPropertyByValueMapping:x,PageFilterTest:r},setup(){let{pageTitle:e}=C(),{argumentsText:t}=S();return{argumentsText:t,pageTitle:e,test:w}}};function E(e,t,n,r,i,a){let o=f(`a-translation`),s=f(`page-filter-import-function`),p=f(`page-filter-import-composition-api`),m=f(`page-filter-arguments`),h=f(`page-filter-property-by-value-mapping`),g=f(`page-filter-property-by-value-default-value`),_=f(`page-filter-test`),v=f(`aloha-page`);return u(),l(v,{"page-title":e.pageTitle},{body:d(()=>[c(o,{tag:`p`,html:`_PAGE_FILTER_PROPERTY_BY_VALUE_DESCRIPTION_`}),c(s,{"function-name":`filterPropertyByValue`,"type-import":`filters`}),c(p,{"function-name":`filterPropertyByValue`}),c(m,{"arguments-text":e.argumentsText,"function-description":`filterPropertyByValue(value, { [mapping={}], [defaultValue=""] })`},null,8,[`arguments-text`]),c(h),c(g),c(_,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var D=p(T,[[`render`,E]]);export{D as default};