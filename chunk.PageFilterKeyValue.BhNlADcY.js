import{t as e}from"./chunk.AlohaPage.1DFen3a5.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.7-YIieC9.js";import{t as i}from"./chunk.PageFilterImportCompositionApi.BBspySYy.js";import{t as a}from"./chunk.AlohaExample.zAlCDWQM.js";import{Ot as o,it as s}from"./bundle.index.BvA5sOPX.js";import{It as c,Qt as l,Vt as u,nn as d,on as f}from"./chunk.vendor.CTxSDDRk.js";import{t as p}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function m(){return{codeJs:`filterKeyValue({ x: "aloha", y: 2 });
// ${o({x:`aloha`,y:2})}`}}var h={name:`PageFilterKeyValueExample`,components:{AlohaExample:a},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=d(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=p(h,[[`render`,g]]);function v(){return{argumentsText:[{value:`value`,types:[`Object`],text:`_PAGE_FILTER_KEY_VALUE_ARGUMENTS_VALUE_`}]}}function y(){return{pageTitle:`filterKeyValue`}}var b=`import {
  describe,
  expect,
  it,
} from "vitest";

import filterKeyValue from "../filterKeyValue";

describe("filterKeyValue", () => {
  it("single key-value pair", () => {
    expect(filterKeyValue({ greeting: "aloha" })).toBe("greeting: aloha");
  });

  it("multiple key-value pairs", () => {
    expect(filterKeyValue({ greeting: "aloha", farewell: "aloha" })).toBe("greeting: aloha, farewell: aloha");
  });

  it("empty object", () => {
    expect(filterKeyValue({})).toBe("");
  });

  it("null input", () => {
    expect(filterKeyValue(null)).toBe("");
  });

  it("undefined input", () => {
    expect(filterKeyValue(undefined)).toBe("");
  });

  it("numeric and string values", () => {
    expect(filterKeyValue({ alohaCount: 3, message: "aloha" })).toBe("alohaCount: 3, message: aloha");
  });

  it("nested object", () => {
    expect(filterKeyValue({ level1: { greeting: "aloha" } })).toBe("level1: [object Object]");
  });

  it("object with array values", () => {
    expect(filterKeyValue({ alohas: ["aloha", "hello", "hi"] })).toBe("alohas: aloha,hello,hi");
  });

  it("object with boolean and null values", () => {
    expect(filterKeyValue({ isActive: true, isEmpty: null })).toBe("isActive: true, isEmpty: null");
  });

  it("complex object", () => {
    expect(filterKeyValue({ greeting: "aloha", number: 42, nested: { key: "value" }, list: [1, 2, 3] }))
      .toBe("greeting: aloha, number: 42, nested: [object Object], list: 1,2,3");
  });
});
`,x={name:`PageFilterKeyValue`,components:{AlohaPage:e,ATranslation:s,PageFilterArguments:n,PageFilterImportCompositionApi:i,PageFilterImportFunction:t,PageFilterKeyValueExample:_,PageFilterTest:r},setup(){let{pageTitle:e}=y(),{argumentsText:t}=v();return{argumentsText:t,pageTitle:e,test:b}}};function S(e,t,n,r,i,a){let o=d(`a-translation`),s=d(`page-filter-import-function`),p=d(`page-filter-import-composition-api`),m=d(`page-filter-arguments`),h=d(`page-filter-key-value-example`),g=d(`page-filter-test`),_=d(`aloha-page`);return l(),c(_,{"page-title":e.pageTitle},{body:f(()=>[u(o,{tag:`p`,html:`_PAGE_FILTER_KEY_VALUE_DESCRIPTION_`}),u(s,{"function-name":`filterKeyValue`,"type-import":`filters`}),u(p,{"function-name":`filterKeyValue`}),u(m,{"arguments-text":e.argumentsText,"function-description":`filterKeyValue(value)`},null,8,[`arguments-text`]),u(h),u(g,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var C=p(x,[[`render`,S]]);export{C as default};