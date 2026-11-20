import{t as e}from"./chunk.AlohaPage.BP2MUQSS.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.OuAC5iI8.js";import{t as i}from"./chunk.PageFilterImportCompositionApi.Bahw5NUv.js";import{t as a}from"./chunk.AlohaExample.BVhM0naJ.js";import{It as o,Pt as s,Qt as c,Vt as l,nn as u,on as d}from"./chunk.vendor.CTxSDDRk.js";import{it as f,xt as p}from"./bundle.index.DbAjsKDm.js";import{t as m}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function h(){return{codeJs:s(()=>`filterPercent(15.36, { digits: 1 });
// ${p(15.36,{digits:1})}

filterPercent(12345, { digits: 0, digitGrouping: false });
// ${p(12345,{digits:0,digitGrouping:!1})}`)}}var g={name:`PageFilterPercentDigits`,components:{AlohaExample:a},setup(){let{codeJs:e}=h();return{codeJs:e}}};function _(e,t,n,r,i,a){let s=u(`aloha-example`);return c(),o(s,{"code-js":e.codeJs,header:`digits, digitGrouping`,"is-code-visible-default":!0},null,8,[`code-js`])}var v=m(g,[[`render`,_]]);function y(){return{codeJs:s(()=>`filterPercent(15.3);
// ${p(15.3)}

filterPercent("99,5");
// ${p(`99,5`)}

filterPercent(12345.678);
// ${p(12345.678)}`)}}var b={name:`PageFilterPercentExample`,components:{AlohaExample:a},setup(){let{codeJs:e}=y();return{codeJs:e}}};function x(e,t,n,r,i,a){let s=u(`aloha-example`);return c(),o(s,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var S=m(b,[[`render`,x]]);function C(){return{codeJs:s(()=>`filterPercent(0.153, { isFraction: true });
// ${p(.153,{isFraction:!0})}

filterPercent(1, { isFraction: true, digits: 0 });
// ${p(1,{isFraction:!0,digits:0})}`)}}var w={name:`PageFilterPercentIsFraction`,components:{AlohaExample:a},setup(){let{codeJs:e}=C();return{codeJs:e}}};function T(e,t,n,r,i,a){let s=u(`aloha-example`);return c(),o(s,{"code-js":e.codeJs,header:`isFraction`,"is-code-visible-default":!0},null,8,[`code-js`])}var E=m(w,[[`render`,T]]);function D(){return{argumentsText:[{value:`value`,types:[`Number`,`String`],text:`_PAGE_FILTER_PERCENT_ARGUMENTS_VALUE_`},{value:`[digits=2]`,types:[`Number`],text:`_PAGE_FILTER_PERCENT_ARGUMENTS_DIGITS_`},{value:`[digitGrouping=true]`,types:[`Boolean`],text:`_PAGE_FILTER_PERCENT_ARGUMENTS_DIGIT_GROUPING_`},{value:`[isFraction=false]`,types:[`Boolean`],text:`_PAGE_FILTER_PERCENT_ARGUMENTS_IS_FRACTION_`}]}}function O(){return{pageTitle:`filterPercent`}}var k=`import {
  describe,
  expect,
  it,
} from "vitest";

import filterPercent from "../filterPercent.js";

describe("filterPercent", () => {
  it("default", () => {
    expect(filterPercent(15.3)).toBe("15,30 %");
    expect(filterPercent("15,3")).toBe("15,30 %");
    expect(filterPercent(0)).toBe("0,00 %");
    expect(filterPercent(-2.5)).toBe("-2,50 %");
    expect(filterPercent(12345.678)).toBe("12.345,68 %");
    expect(filterPercent("Aloha")).toBe("Aloha");
  });

  it("digits and digitGrouping", () => {
    expect(filterPercent(15.36, { digits: 1 })).toBe("15,4 %");
    expect(filterPercent(15.36, { digits: 0 })).toBe("15 %");
    expect(filterPercent(12345, { digits: 0, digitGrouping: false })).toBe("12345 %");
  });

  it("isFraction", () => {
    expect(filterPercent(0.153, { isFraction: true })).toBe("15,30 %");
    expect(filterPercent("0,153", { isFraction: true })).toBe("15,30 %");
    expect(filterPercent(1, { isFraction: true, digits: 0 })).toBe("100 %");
    expect(filterPercent(0.0005, { isFraction: true, digits: 1 })).toBe("0,1 %");
    expect(filterPercent("Aloha", { isFraction: true })).toBe("Aloha");
  });

  it("empty values", () => {
    expect(filterPercent(undefined)).toBe("");
    expect(filterPercent(null)).toBe("");
    expect(filterPercent("")).toBe("");
  });
});
`,A={name:`PageFilterPercent`,components:{AlohaPage:e,ATranslation:f,PageFilterArguments:n,PageFilterImportCompositionApi:i,PageFilterImportFunction:t,PageFilterPercentDigits:v,PageFilterPercentExample:S,PageFilterPercentIsFraction:E,PageFilterTest:r},setup(){let{pageTitle:e}=O(),{argumentsText:t}=D();return{argumentsText:t,pageTitle:e,test:k}}};function j(e,t,n,r,i,a){let s=u(`a-translation`),f=u(`page-filter-import-function`),p=u(`page-filter-import-composition-api`),m=u(`page-filter-arguments`),h=u(`page-filter-percent-example`),g=u(`page-filter-percent-digits`),_=u(`page-filter-percent-is-fraction`),v=u(`page-filter-test`),y=u(`aloha-page`);return c(),o(y,{"page-title":e.pageTitle},{body:d(()=>[l(s,{tag:`p`,html:`_PAGE_FILTER_PERCENT_DESCRIPTION_`}),l(f,{"function-name":`filterPercent`,"type-import":`filters`}),l(p,{"function-name":`filterPercent`}),l(m,{"arguments-text":e.argumentsText,"function-description":`filterPercent(value, { [digits=2], [digitGrouping=true], [isFraction=false] })`},null,8,[`arguments-text`]),l(h),l(g),l(_),l(v,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var M=m(A,[[`render`,j]]);export{M as default};