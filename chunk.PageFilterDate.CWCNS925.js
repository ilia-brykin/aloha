import{t as e}from"./chunk.AlohaPage.C2Vrb1gB.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.BaO93RBI.js";import{t as i}from"./chunk.AlohaExample.v2GP0Oep.js";import{It as a,it as o}from"./bundle.index.CwzuX9ei.js";import{It as s,Qt as c,Vt as l,nn as u,on as d}from"./chunk.vendor.CTxSDDRk.js";import{t as f}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.Dd09kgXu.js";function m(){return{codeJs:`filterDate("2014-09-08T08:02:17-05:00");
// ${a(`2014-09-08T08:02:17-05:00`)}

filterDate("2013-02-08");
// ${a(`2013-02-08`)}

filterDate("6 Mar 17 21:22 UT");
// ${a(`6 Mar 17 21:22 UT`)}`}}var h={name:`PageFilterDateExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=u(`aloha-example`);return c(),s(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=f(h,[[`render`,g]]);function v(){return{codeJs:`filterDate("2014-09-08T08:02:17-05:00" { format: "datetime" });
// ${a(`2014-09-08T08:02:17-05:00`,{format:`datetime`})}

filterDate("2014-09-08T08:02:17-05:00", { format: "fullDate" });
// ${a(`2014-09-08T08:02:17-05:00`,{format:`fullDate`})}

filterDate("2014-09-08T08:02:17-05:00", { format: "time" });
// ${a(`2014-09-08T08:02:17-05:00`,{format:`time`})}

filterDate("2014-09-08T08:02:17-05:00", { format: "timeWithSeconds" });
// ${a(`2014-09-08T08:02:17-05:00`,{format:`timeWithSeconds`})}

filterDate("2014-09-08T08:02:17-05:00", { format: "MM.YYYY" });
// ${a(`2014-09-08T08:02:17-05:00`,{format:`MM.YYYY`})}`}}var y={name:`PageFilterDateFormat`,components:{AlohaExample:i},setup(){let{codeJs:e}=v();return{codeJs:e}}};function b(e,t,n,r,i,a){let o=u(`aloha-example`);return c(),s(o,{"code-js":e.codeJs,header:`format`,"is-code-visible-default":!0},null,8,[`code-js`])}var x=f(y,[[`render`,b]]);function S(){return{argumentsText:[{value:`value`,types:[`Any`],text:`_PAGE_FILTER_DATE_ARGUMENTS_VALUE_`},{value:`[format="date"]`,types:[`String`],text:`_PAGE_FILTER_DATE_ARGUMENTS_FORMAT_`}]}}function C(){return{pageTitle:`filterDate`}}var w=`import {
  describe,
  expect,
  it,
} from "vitest";

import filterDate from "../filterDate";
import moment from "moment";

describe("filterDate function", () => {
  it("returns empty string when input is null, undefined or an empty string", () => {
    const testCases = [null, undefined, ""];
    testCases.forEach(tc => {
      expect(filterDate(tc)).toEqual("");
    });
  });

  it("returns the original value when the input is not a valid date", () => {
    const testCases = ["abc", "a123", "12a3", "123a"];
    testCases.forEach(tc => {
      expect(filterDate(tc)).toEqual(tc);
    });
  });

  it("returns the formatted date when the input is a valid date", () => {
    const testCases = [
      {
        input: "2023-03-01",
        format: "YYYY-MM-DD",
        expected: "2023-03-01",
      },
      {
        input: "2023-03-01",
        format: "date",
        expected: moment("2023-03-01").format("DD.MM.YYYY"),
      },
    ];
    testCases.forEach(tc => {
      expect(filterDate(tc.input, { format: tc.format })).toEqual(tc.expected);
    });
  });
});
`,T={name:`PageFilterDate`,components:{AlohaPage:e,ATranslation:o,PageFilterArguments:n,PageFilterDateExample:_,PageFilterDateFormat:x,PageFilterImportCompositionApi:p,PageFilterImportFunction:t,PageFilterTest:r},setup(){let{pageTitle:e}=C(),{argumentsText:t}=S();return{argumentsText:t,pageTitle:e,test:w}}};function E(e,t,n,r,i,a){let o=u(`a-translation`),f=u(`page-filter-import-function`),p=u(`page-filter-import-composition-api`),m=u(`page-filter-arguments`),h=u(`page-filter-date-example`),g=u(`page-filter-date-format`),_=u(`page-filter-test`),v=u(`aloha-page`);return c(),s(v,{"page-title":e.pageTitle},{body:d(()=>[l(o,{tag:`p`,html:`_PAGE_FILTER_DATE_DESCRIPTION_`}),l(f,{"function-name":`filterDate`,"type-import":`filters`}),l(p,{"function-name":`filterDate`}),l(m,{"arguments-text":e.argumentsText,"function-description":`filterDate(value, { [format="date"] })`},null,8,[`arguments-text`]),l(h),l(g),l(_,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var D=f(T,[[`render`,E]]);export{D as default};