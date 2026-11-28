import{t as e}from"./chunk.AlohaPage.wEJC2jSx.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.DSyNjyqk.js";import{t as i}from"./chunk.PageFilterImportCompositionApi.BKaHBgrS.js";import{t as a}from"./chunk.AlohaExample.D5DtvcYq.js";import{Lt as o,mn as s,t as c}from"./bundle.index.DbRNiyxs.js";import{Jt as l,Ut as u,mn as d,on as f,un as p}from"./chunk.vendor.DL09mhUf.js";function m(){return{codeJs:`filterKeyValue({ x: "aloha", y: 2 });
// ${o({x:`aloha`,y:2})}`}}var h={name:`PageFilterKeyValueExample`,components:{AlohaExample:a},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=p(`aloha-example`);return f(),u(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=c(h,[[`render`,g]]);function v(){return{argumentsText:[{value:`value`,types:[`Object`],text:`_PAGE_FILTER_KEY_VALUE_ARGUMENTS_VALUE_`}]}}function y(){return{pageTitle:`filterKeyValue`}}var b=`import {
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
`,x={name:`PageFilterKeyValue`,components:{AlohaPage:e,ATranslation:s,PageFilterArguments:n,PageFilterImportCompositionApi:i,PageFilterImportFunction:t,PageFilterKeyValueExample:_,PageFilterTest:r},setup(){let{pageTitle:e}=y(),{argumentsText:t}=v();return{argumentsText:t,pageTitle:e,test:b}}};function S(e,t,n,r,i,a){let o=p(`a-translation`),s=p(`page-filter-import-function`),c=p(`page-filter-import-composition-api`),m=p(`page-filter-arguments`),h=p(`page-filter-key-value-example`),g=p(`page-filter-test`),_=p(`aloha-page`);return f(),u(_,{"page-title":e.pageTitle},{body:d(()=>[l(o,{tag:`p`,html:`_PAGE_FILTER_KEY_VALUE_DESCRIPTION_`}),l(s,{"function-name":`filterKeyValue`,"type-import":`filters`}),l(c,{"function-name":`filterKeyValue`}),l(m,{"arguments-text":e.argumentsText,"function-description":`filterKeyValue(value)`},null,8,[`arguments-text`]),l(h),l(g,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var C=c(x,[[`render`,S]]);export{C as default};