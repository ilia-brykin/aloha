import{t as e}from"./chunk.AlohaPage.D3Li-ZF0.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.DvNHa5QS.js";import{t as i}from"./chunk.PageFilterImportCompositionApi.C_QCR2Ws.js";import{t as a}from"./chunk.AlohaExample.CxIYYMNm.js";import{Dt as o,it as s}from"./bundle.index.B0QE_J15.js";import{It as c,Qt as l,Vt as u,nn as d,on as f}from"./chunk.vendor.CTxSDDRk.js";import{t as p}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function m(){let e=`Lorem ipsum dolor sit amet consectetur adipisicing elit`;return{codeJs:`const TEXT = "Lorem ipsum dolor sit amet consectetur adipisicing elit";

filterList(TEXT);
// ${o(e)}

filterList(TEXT, { limit: 10 });
// ${o(e,{limit:10})}

filterList(TEXT, { limit: 100 });
// ${o(e,{limit:100})}`}}var h={name:`PageFilterLimitToLimit`,components:{AlohaExample:a},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=d(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`limit`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=p(h,[[`render`,g]]);function v(){let e=`Aloha...`;return{codeJs:`const TEXT = "Aloha...";

filterList(TEXT, { limit: 7, maxThreeDots: true });
// ${o(e,{limit:7,maxThreeDots:!0})}
filterList(TEXT, { limit: 7, maxThreeDots: false });
// ${o(e,{limit:7,maxThreeDots:!1})}

filterList(TEXT, { limit: 6, maxThreeDots: true });
// ${o(e,{limit:6,maxThreeDots:!0})}
filterList(TEXT, { limit: 6, maxThreeDots: false });
// ${o(e,{limit:6,maxThreeDots:!1})}

filterList(TEXT, { limit: 5, maxThreeDots: true });
// ${o(e,{limit:5,maxThreeDots:!0})}
filterList(TEXT, { limit: 5, maxThreeDots: false });
// ${o(e,{limit:5,maxThreeDots:!1})}`}}var y={name:`PageFilterLimitToMaxThreeDots`,components:{AlohaExample:a},setup(){let{codeJs:e}=v();return{codeJs:e}}};function b(e,t,n,r,i,a){let o=d(`aloha-example`);return l(),c(o,{"code-js":e.codeJs,header:`maxThreeDots`,"is-code-visible-default":!0},null,8,[`code-js`])}var x=p(y,[[`render`,b]]);function S(){return{argumentsText:[{value:`text`,types:[`String`],text:`_PAGE_FILTER_LIMIT_TO_ARGUMENTS_TEXT_`},{value:`[limit=30]`,types:[`Number`],text:`_PAGE_FILTER_LIMIT_TO_ARGUMENTS_LIMIT_`},{value:`[maxThreeDots=true]`,types:[`Boolean`],text:`_PAGE_FILTER_LIMIT_TO_ARGUMENTS_MAX_THREE_DOTS_`}]}}function C(){return{pageTitle:`filterLimitTo`}}var w=`import {
  describe,
  expect,
  it,
} from "vitest";

import filterLimitTo from "../filterLimitTo";

describe("filterLimitTo", () => {
  it("text exactly at limit", () => {
    expect(filterLimitTo("Lorem ipsum dolor sit amet, cons", { limit: 30 })).toBe("Lorem ipsum dolor sit amet, co...");
  });

  it("long text exceeding limit", () => {
    expect(filterLimitTo("Lorem ipsum dolor sit amet, consectetur adipiscing elit", { limit: 30 })).toBe("Lorem ipsum dolor sit amet, co...");
  });

  it("text ending with a period", () => {
    expect(filterLimitTo("Lorem ipsum dolor sit amet.", { limit: 30 })).toBe("Lorem ipsum dolor sit amet.");
  });

  it("text with multiple periods at the end", () => {
    expect(filterLimitTo("Lorem ipsum dolor sit amet...", { limit: 30 })).toBe("Lorem ipsum dolor sit amet...");
  });

  it("numeric value treated as text", () => {
    expect(filterLimitTo(1234567890, { limit: 10 })).toBe("1234567890");
    expect(filterLimitTo(1234567890, { limit: 9 })).toBe("123456789...");
  });

  it("null value", () => {
    expect(filterLimitTo(null, { limit: 30 })).toBe("");
  });

  it("maxThreeDots false", () => {
    expect(filterLimitTo("Lorem ipsum dolor sit amet, c..", { limit: 30, maxThreeDots: false })).toBe("Lorem ipsum dolor sit amet, c....");
    expect(filterLimitTo("Lorem ipsum dolor sit ame, c...", { limit: 30, maxThreeDots: false })).toBe("Lorem ipsum dolor sit ame, c.....");
  });
});
`,T={name:`PageFilterLimitTo`,components:{AlohaPage:e,ATranslation:s,PageFilterArguments:n,PageFilterImportCompositionApi:i,PageFilterImportFunction:t,PageFilterLimitToLimit:_,PageFilterLimitToMaxThreeDots:x,PageFilterTest:r},setup(){let{pageTitle:e}=C(),{argumentsText:t}=S();return{argumentsText:t,pageTitle:e,test:w}}};function E(e,t,n,r,i,a){let o=d(`a-translation`),s=d(`page-filter-import-function`),p=d(`page-filter-import-composition-api`),m=d(`page-filter-arguments`),h=d(`page-filter-limit-to-limit`),g=d(`page-filter-limit-to-max-three-dots`),_=d(`page-filter-test`),v=d(`aloha-page`);return l(),c(v,{"page-title":e.pageTitle},{body:f(()=>[u(o,{tag:`p`,html:`_PAGE_FILTER_LIMIT_TO_DESCRIPTION_`}),u(s,{"function-name":`filterLimitTo`,"type-import":`filters`}),u(p,{"function-name":`filterLimitTo`}),u(m,{"arguments-text":e.argumentsText,"function-description":`filterLimitTo(text, { [limit=30], [maxThreeDots=true] })`},null,8,[`arguments-text`]),u(h),u(g),u(_,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var D=p(T,[[`render`,E]]);export{D as default};