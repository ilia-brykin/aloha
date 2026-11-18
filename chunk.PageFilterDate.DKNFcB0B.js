import{t as e}from"./chunk.AlohaPage.sulZ3BAz.js";import{n as t,r as n,t as r}from"./chunk.PageFilterTest.HIbnCuB_.js";import{t as i}from"./chunk.AlohaExample.Dh7-vA8e.js";import{et as a,wt as o}from"./bundle.index.Csp1_sOL.js";import{Ft as s,Xt as c,en as l,in as u,zt as d}from"./chunk.vendor.Cx127fe1.js";import{t as f}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";import{t as p}from"./chunk.PageFilterImportCompositionApi.DRj5dFQL.js";function m(){return{codeJs:`filterDate("2014-09-08T08:02:17-05:00");
// ${o(`2014-09-08T08:02:17-05:00`)}

filterDate("2013-02-08");
// ${o(`2013-02-08`)}

filterDate("6 Mar 17 21:22 UT");
// ${o(`6 Mar 17 21:22 UT`)}`}}var h={name:`PageFilterDateExample`,components:{AlohaExample:i},setup(){let{codeJs:e}=m();return{codeJs:e}}};function g(e,t,n,r,i,a){let o=l(`aloha-example`);return c(),s(o,{"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,"is-code-visible-default":!0},null,8,[`code-js`])}var _=f(h,[[`render`,g]]);function v(){return{codeJs:`filterDate("2014-09-08T08:02:17-05:00" { format: "datetime" });
// ${o(`2014-09-08T08:02:17-05:00`,{format:`datetime`})}

filterDate("2014-09-08T08:02:17-05:00", { format: "fullDate" });
// ${o(`2014-09-08T08:02:17-05:00`,{format:`fullDate`})}

filterDate("2014-09-08T08:02:17-05:00", { format: "time" });
// ${o(`2014-09-08T08:02:17-05:00`,{format:`time`})}

filterDate("2014-09-08T08:02:17-05:00", { format: "timeWithSeconds" });
// ${o(`2014-09-08T08:02:17-05:00`,{format:`timeWithSeconds`})}

filterDate("2014-09-08T08:02:17-05:00", { format: "MM.YYYY" });
// ${o(`2014-09-08T08:02:17-05:00`,{format:`MM.YYYY`})}`}}var y={name:`PageFilterDateFormat`,components:{AlohaExample:i},setup(){let{codeJs:e}=v();return{codeJs:e}}};function b(e,t,n,r,i,a){let o=l(`aloha-example`);return c(),s(o,{"code-js":e.codeJs,header:`format`,"is-code-visible-default":!0},null,8,[`code-js`])}var x=f(y,[[`render`,b]]);function S(){return{argumentsText:[{value:`value`,types:[`Any`],text:`_PAGE_FILTER_DATE_ARGUMENTS_VALUE_`},{value:`[format="date"]`,types:[`String`],text:`_PAGE_FILTER_DATE_ARGUMENTS_FORMAT_`}]}}function C(){return{pageTitle:`filterDate`}}var w=`import {
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
`,T={name:`PageFilterDate`,components:{AlohaPage:e,ATranslation:a,PageFilterArguments:n,PageFilterDateExample:_,PageFilterDateFormat:x,PageFilterImportCompositionApi:p,PageFilterImportFunction:t,PageFilterTest:r},setup(){let{pageTitle:e}=C(),{argumentsText:t}=S();return{argumentsText:t,pageTitle:e,test:w}}};function E(e,t,n,r,i,a){let o=l(`a-translation`),f=l(`page-filter-import-function`),p=l(`page-filter-import-composition-api`),m=l(`page-filter-arguments`),h=l(`page-filter-date-example`),g=l(`page-filter-date-format`),_=l(`page-filter-test`),v=l(`aloha-page`);return c(),s(v,{"page-title":e.pageTitle},{body:u(()=>[d(o,{tag:`p`,html:`_PAGE_FILTER_DATE_DESCRIPTION_`}),d(f,{"function-name":`filterDate`,"type-import":`filters`}),d(p,{"function-name":`filterDate`}),d(m,{"arguments-text":e.argumentsText,"function-description":`filterDate(value, { [format="date"] })`},null,8,[`arguments-text`]),d(h),d(g),d(_,{test:e.test},null,8,[`test`])]),_:1},8,[`page-title`])}var D=f(T,[[`render`,E]]);export{D as default};