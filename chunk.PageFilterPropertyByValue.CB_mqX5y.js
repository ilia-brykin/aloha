import{Tt as e,Ut as t,kt as n,qt as r,zt as i}from"./chunk.vendor.CZPox1kV.js";import{Z as a,lt as o,t as s}from"./bundle.index.CLtYDDlb.js";import{n as c,t as l}from"./chunk.AlohaExample.BFgfeYtr.js";import{n as u,r as d,t as f}from"./chunk.PageFilterTest.DEb_j_8g.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.D-8n-B7g.js";function m(){return{codeJs:`filterPropertyByValue("111", { mapping: { aloha: "1", holla: "2" }, defaultValue: "not found" });
// ${o(`111`,{mapping:{aloha:`1`,holla:`2`},defaultValue:`not found`})}
filterPropertyByValue("222", { mapping: { aloha: "1", holla: "2" }, defaultValue: "0" });
// ${o(`222`,{mapping:{aloha:`1`,holla:`2`},defaultValue:`0`})}`}}var h={name:`PageFilterPropertyByValueDefaultValue`,components:{AlohaExample:l},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`defaultValue`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=s(h,[[`render`,g]]);function v(){return{codeJs:`filterPropertyByValue("111", { mapping: { aloha: "1", holla: "2" } });
// ${o(`111`,{mapping:{aloha:`1`,holla:`2`}})}
filterPropertyByValue("aloha", { mapping: { aloha: "1", holla: "2" } });
// ${o(`aloha`,{mapping:{aloha:`1`,holla:`2`}})}`}}var y={name:`PageFilterPropertyByValueMapping`,components:{AlohaExample:l},setup(){let{codeJs:e}=v();return{codeJs:e}}};function b(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`mapping`,"is-code-visible-default":!0},null,8,[`code-js`])}var x=s(y,[[`render`,b]]);function S(){return{argumentsText:[{value:`value`,types:[`Any`],text:`_PAGE_FILTER_PROPERTY_BY_VALUE_ARGUMENTS_VALUE_`},{value:`[mapping={}]`,types:[`Object`],text:`_PAGE_FILTER_PROPERTY_BY_VALUE_ARGUMENTS_MAPPING_`},{value:`[defaultValue=""]`,types:[`String`],text:`_PAGE_FILTER_PROPERTY_BY_VALUE_ARGUMENTS_DEFAULT_VALUE_`}]}}function C(){return{pageTitle:`filterPropertyByValue`}}var w=`import {
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
`,T={name:`PageFilterPropertyByValue`,components:{AlohaPage:c,ATranslation:a,PageFilterArguments:d,PageFilterImportCompositionApi:p,PageFilterImportFunction:u,PageFilterPropertyByValueDefaultValue:_,PageFilterPropertyByValueMapping:x,PageFilterTest:f},setup(){let{pageTitle:e}=C(),{argumentsText:t}=S();return{argumentsText:t,pageTitle:e,test:w}}};function E(a,o,s,c,l,u){let d=t(`a-translation`),f=t(`page-filter-import-function`),p=t(`page-filter-import-composition-api`),m=t(`page-filter-arguments`),h=t(`page-filter-property-by-value-mapping`),g=t(`page-filter-property-by-value-default-value`),_=t(`page-filter-test`),v=t(`aloha-page`);return i(),e(v,{"page-title":a.pageTitle},{body:r(()=>[n(d,{tag:`p`,html:`_PAGE_FILTER_PROPERTY_BY_VALUE_DESCRIPTION_`}),n(f,{"function-name":`filterPropertyByValue`,"type-import":`filters`}),n(p,{"function-name":`filterPropertyByValue`}),n(m,{"arguments-text":a.argumentsText,"function-description":`filterPropertyByValue(value, { [mapping={}], [defaultValue=""] })`},null,8,[`arguments-text`]),n(h),n(g),n(_,{test:a.test},null,8,[`test`])]),_:1},8,[`page-title`])}var D=s(T,[[`render`,E]]);export{D as default};