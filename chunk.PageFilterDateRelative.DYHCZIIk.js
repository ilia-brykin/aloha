import{t as e}from"./chunk.AlohaPage.CqjE0MZc.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.DQulATkA.js";import{t as i}from"./chunk.AlohaExample.BkAbsrja.js";import{$t as a,It as o,Pt as s,Vt as c,rn as l,sn as u}from"./chunk.vendor.BvryzG0o.js";import{Mt as d,qt as f}from"./bundle.index.DrnKDfVL.js";import{t as p}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";import{t as m}from"./chunk.PageFilterImportCompositionApi.BS5_Qwph.js";function h(){return{codeJs:s(()=>`filterDateRelative(new Date(Date.now() - 5 * 60 * 1000));
// ${d(new Date(Date.now()-3e5))}

filterDateRelative(new Date(Date.now() + 2 * 24 * 60 * 60 * 1000));
// ${d(new Date(Date.now()+1728e5))}

filterDateRelative("Aloha");
// ${d(`Aloha`)}`)}}var g={name:`PageFilterDateRelativeExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=h();return{codeJs:e}}};function _(e,t,n,r,i,s){let c=l(`aloha-example`);return a(),o(c,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var v=p(g,[[`render`,_]]);function y(){return{codeJs:s(()=>`filterDateRelative("2026-01-01", { now: "2026-03-10" });
// ${d(`2026-01-01`,{now:`2026-03-10`})}

filterDateRelative("2026-03-10T12:00:00", { now: "2026-03-10T11:58:00" });
// ${d(`2026-03-10T12:00:00`,{now:`2026-03-10T11:58:00`})}`)}}var b={name:`PageFilterDateRelativeNow`,components:{AlohaExample:i},setup(){let{codeJs:e}=y();return{codeJs:e}}};function x(e,t,n,r,i,s){let c=l(`aloha-example`);return a(),o(c,{"code-js":e.codeJs,header:`now`,"is-code-visible-default":!0},null,8,[`code-js`])}var S=p(b,[[`render`,x]]);function C(){return{codeJs:s(()=>`filterDateRelative("2026-03-09T12:00:00", { now: "2026-03-10T12:00:00" });
// ${d(`2026-03-09T12:00:00`,{now:`2026-03-10T12:00:00`})}

filterDateRelative("2026-03-09T12:00:00", { now: "2026-03-10T12:00:00", numeric: "always" });
// ${d(`2026-03-09T12:00:00`,{now:`2026-03-10T12:00:00`,numeric:`always`})}`)}}var w={name:`PageFilterDateRelativeNumeric`,components:{AlohaExample:i},setup(){let{codeJs:e}=C();return{codeJs:e}}};function T(e,t,n,r,i,s){let c=l(`aloha-example`);return a(),o(c,{"code-js":e.codeJs,header:`numeric`,"is-code-visible-default":!0},null,8,[`code-js`])}var E=p(w,[[`render`,T]]);function D(){return{argumentsText:[{value:`value`,types:[`String`,`Date`],text:`_PAGE_FILTER_DATE_RELATIVE_ARGUMENTS_VALUE_`},{value:`[now=new Date()]`,types:[`String`,`Date`],text:`_PAGE_FILTER_DATE_RELATIVE_ARGUMENTS_NOW_`},{value:`[numeric="auto"]`,types:[`String`],text:`_PAGE_FILTER_DATE_RELATIVE_ARGUMENTS_NUMERIC_`}]}}function O(){return{pageTitle:`filterDateRelative`}}var k=`import {
  afterEach,
  describe,
  expect,
  it,
} from "vitest";

import {
  setLanguage,
} from "../../ATranslation/compositionAPI/ATranslationAPI";

import filterDateRelative from "../filterDateRelative.js";

const NOW = "2026-03-10T12:00:00";

describe("filterDateRelative", () => {
  afterEach(() => {
    setLanguage("de");
  });

  it("default (de)", () => {
    expect(filterDateRelative("2026-03-10T11:55:00", { now: NOW })).toBe("vor 5 Minuten");
    expect(filterDateRelative("2026-03-10T12:00:30", { now: NOW })).toBe("in 30 Sekunden");
    expect(filterDateRelative("2026-03-10T09:00:00", { now: NOW })).toBe("vor 3 Stunden");
    expect(filterDateRelative("2026-03-12T12:00:00", { now: NOW })).toBe("übermorgen");
    expect(filterDateRelative("2026-03-09T12:00:00", { now: NOW })).toBe("gestern");
    expect(filterDateRelative("2026-02-24T12:00:00", { now: NOW })).toBe("vor 2 Wochen");
    expect(filterDateRelative("2025-12-10T12:00:00", { now: NOW })).toBe("vor 3 Monaten");
    expect(filterDateRelative("2028-03-10T12:00:00", { now: NOW })).toBe("in 2 Jahren");
    expect(filterDateRelative(NOW, { now: NOW })).toBe("jetzt");
  });

  it("numeric", () => {
    expect(filterDateRelative("2026-03-09T12:00:00", { now: NOW, numeric: "always" })).toBe("vor 1 Tag");
    expect(filterDateRelative("2026-03-11T12:00:00", { now: NOW, numeric: "always" })).toBe("in 1 Tag");
  });

  it("uses the current language", () => {
    setLanguage("en");
    expect(filterDateRelative("2026-03-10T11:55:00", { now: NOW })).toBe("5 minutes ago");
    expect(filterDateRelative("2026-03-11T12:00:00", { now: NOW })).toBe("tomorrow");
  });

  it("Date objects", () => {
    expect(filterDateRelative(new Date(2026, 2, 10, 11, 0, 0), { now: new Date(2026, 2, 10, 12, 0, 0) })).toBe("vor 1 Stunde");
  });

  it("invalid and empty values", () => {
    expect(filterDateRelative("Aloha", { now: NOW })).toBe("Aloha");
    expect(filterDateRelative(undefined)).toBe("");
    expect(filterDateRelative(null)).toBe("");
    expect(filterDateRelative("")).toBe("");
  });
});
`,A={name:`PageFilterDateRelative`,components:{AlohaPage:e,ATranslation:f,PageFilterArguments:n,PageFilterDateRelativeExample:v,PageFilterDateRelativeNow:S,PageFilterDateRelativeNumeric:E,PageFilterImportCompositionApi:m,PageFilterImportFunction:t,PageFilterTest:r},setup(){let{pageTitle:e}=O(),{argumentsText:t}=D();return{argumentsText:t,pageTitle:e,test:k}}};function j(e,t,n,r,i,s){let d=l(`a-translation`),f=l(`page-filter-import-function`),p=l(`page-filter-import-composition-api`),m=l(`page-filter-arguments`),h=l(`page-filter-date-relative-example`),g=l(`page-filter-date-relative-numeric`),_=l(`page-filter-date-relative-now`),v=l(`page-filter-test`),y=l(`aloha-page`);return a(),o(y,{"page-title":e.pageTitle},{body:u(()=>[c(d,{tag:`p`,html:`_PAGE_FILTER_DATE_RELATIVE_DESCRIPTION_`}),c(f,{"function-name":`filterDateRelative`,"type-import":`filters`}),c(p,{"function-name":`filterDateRelative`}),c(m,{"arguments-text":e.argumentsText,"function-description":`filterDateRelative(value, { [now=new Date()], [numeric="auto"] })`},null,8,[`arguments-text`]),c(h),c(g),c(_),c(v,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var M=p(A,[[`render`,j]]);export{M as default};