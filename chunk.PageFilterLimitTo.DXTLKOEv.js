import{Tt as e,Ut as t,kt as n,qt as r,zt as i}from"./chunk.vendor.CZPox1kV.js";import{Z as a,mt as o,t as s}from"./bundle.index.BmSiyQNH.js";import{n as c,t as l}from"./chunk.AlohaExample.CD4LlhAz.js";import{n as u,r as d,t as f}from"./chunk.PageFilterTest.DKKVbW-u.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.BMcX_RFK.js";function m(){let e=`Lorem ipsum dolor sit amet consectetur adipisicing elit`;return{codeJs:`const TEXT = "Lorem ipsum dolor sit amet consectetur adipisicing elit";

filterList(TEXT);
// ${o(e)}

filterList(TEXT, { limit: 10 });
// ${o(e,{limit:10})}

filterList(TEXT, { limit: 100 });
// ${o(e,{limit:100})}`}}var h={name:`PageFilterLimitToLimit`,components:{AlohaExample:l},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`limit`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=s(h,[[`render`,g]]);function v(){let e=`Aloha...`;return{codeJs:`const TEXT = "Aloha...";

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
// ${o(e,{limit:5,maxThreeDots:!1})}`}}var y={name:`PageFilterLimitToMaxThreeDots`,components:{AlohaExample:l},setup(){let{codeJs:e}=v();return{codeJs:e}}};function b(n,r,a,o,s,c){let l=t(`aloha-example`);return i(),e(l,{"code-js":n.codeJs,header:`maxThreeDots`,"is-code-visible-default":!0},null,8,[`code-js`])}var x=s(y,[[`render`,b]]);function S(){return{argumentsText:[{value:`text`,types:[`String`],text:`_PAGE_FILTER_LIMIT_TO_ARGUMENTS_TEXT_`},{value:`[limit=30]`,types:[`Number`],text:`_PAGE_FILTER_LIMIT_TO_ARGUMENTS_LIMIT_`},{value:`[maxThreeDots=true]`,types:[`Boolean`],text:`_PAGE_FILTER_LIMIT_TO_ARGUMENTS_MAX_THREE_DOTS_`}]}}function C(){return{pageTitle:`filterLimitTo`}}var w=`import {
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
`,T={name:`PageFilterLimitTo`,components:{AlohaPage:c,ATranslation:a,PageFilterArguments:d,PageFilterImportCompositionApi:p,PageFilterImportFunction:u,PageFilterLimitToLimit:_,PageFilterLimitToMaxThreeDots:x,PageFilterTest:f},setup(){let{pageTitle:e}=C(),{argumentsText:t}=S();return{argumentsText:t,pageTitle:e,test:w}}};function E(a,o,s,c,l,u){let d=t(`a-translation`),f=t(`page-filter-import-function`),p=t(`page-filter-import-composition-api`),m=t(`page-filter-arguments`),h=t(`page-filter-limit-to-limit`),g=t(`page-filter-limit-to-max-three-dots`),_=t(`page-filter-test`),v=t(`aloha-page`);return i(),e(v,{"page-title":a.pageTitle},{body:r(()=>[n(d,{tag:`p`,html:`_PAGE_FILTER_LIMIT_TO_DESCRIPTION_`}),n(f,{"function-name":`filterLimitTo`,"type-import":`filters`}),n(p,{"function-name":`filterLimitTo`}),n(m,{"arguments-text":a.argumentsText,"function-description":`filterLimitTo(text, { [limit=30], [maxThreeDots=true] })`},null,8,[`arguments-text`]),n(h),n(g),n(_,{test:a.test},null,8,[`test`])]),_:1},8,[`page-title`])}var D=s(T,[[`render`,E]]);export{D as default};